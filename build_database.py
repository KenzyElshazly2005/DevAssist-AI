from pathlib import Path

from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS


# ==========================================================
# Configuration
# ==========================================================

KNOWLEDGE_BASE_PATH = Path("knowledge_base")
VECTOR_DB_PATH = Path("vector_db")

EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"

CHUNK_SIZE = 10000
CHUNK_OVERLAP = 0


# ==========================================================
# Load Embedding Model
# ==========================================================

def load_embeddings():

    print("\nLoading embedding model...")

    embeddings = HuggingFaceEmbeddings(
        model_name=EMBEDDING_MODEL,
    )

    print("Embedding model loaded successfully.")

    return embeddings


# ==========================================================
# Build One Language Database
# ==========================================================

def build_language_database(language_folder, embeddings):

    language = language_folder.name

    print("\n" + "=" * 60)
    print(f"Building {language.upper()} Database")
    print("=" * 60)

    markdown_files = list(
        language_folder.rglob("*.md")
    )

    print(f"Found {len(markdown_files)} markdown files.")

    documents = []

    for file in markdown_files:

        loader = TextLoader(
            file,
            encoding="utf-8",
        )

        documents.extend(loader.load())

    print(f"Loaded {len(documents)} documents.")

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP,
    )

    chunks = splitter.split_documents(
        documents
    )

    print(f"Created {len(chunks)} chunks.")

    vector_store = FAISS.from_documents(
        documents=chunks,
        embedding=embeddings,
    )

    save_path = VECTOR_DB_PATH / language

    save_path.mkdir(
        parents=True,
        exist_ok=True,
    )

    vector_store.save_local(
        str(save_path)
    )

    print(f"Saved to: {save_path}")


# ==========================================================
# Build All Databases
# ==========================================================

def build_database():

    embeddings = load_embeddings()

    language_folders = [

        folder

        for folder in KNOWLEDGE_BASE_PATH.iterdir()

        if folder.is_dir()

    ]

    for folder in language_folders:

        build_language_database(
            folder,
            embeddings,
        )


# ==========================================================
# Main
# ==========================================================

if __name__ == "__main__":

    print("=" * 60)
    print("DevAssist AI - Build Knowledge Base")
    print("=" * 60)

    build_database()

    print("\nDone!")