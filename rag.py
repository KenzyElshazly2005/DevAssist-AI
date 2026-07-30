import re
import time
from pathlib import Path

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

from parser import parse_markdown



# ==========================================================
# Paths
# ==========================================================

KNOWLEDGE_BASE = Path("knowledge_base")
VECTOR_DB = Path("vector_db")


# ==========================================================
# HTTP Error Mapping
# ==========================================================

HTTP_ERRORS = {
    "400": "400 Bad Request",
    "401": "401 Unauthorized",
    "403": "403 Forbidden",
    "404": "404 Not Found",
    "500": "500 Internal Server Error",
}


# ==========================================================
# Loaded Vector Stores
# ==========================================================

_vector_stores = {}


# ==========================================================
# Cached Embedding Model
# ==========================================================

_embeddings = None


# ==========================================================
# Load Embedding Model (Cached)
# ==========================================================

def load_embeddings():
    """
    Load embedding model only once.
    """

    global _embeddings

    if _embeddings is None:

        print("\n[INFO] Loading Embedding Model...")

        _embeddings = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )

        print("[DONE] Embedding Model Loaded.\n")

    return _embeddings


# ==========================================================
# Load FAISS Database
# ==========================================================

def load_database(language):
    """
    Load FAISS database.
    """

    print(f"[INFO] Loading FAISS Database -> {language}")

    embeddings = load_embeddings()

    database_path = VECTOR_DB / language.lower()

    kb_folder = KNOWLEDGE_BASE / language.lower()

    print(f"[INFO] Knowledge Base Path : {kb_folder}")

    if not database_path.exists():

        raise FileNotFoundError(

            f"Database not found: {database_path}"

        )

    print(f"[INFO] Database Path : {database_path}")

    vector_store = FAISS.load_local(

        str(database_path),

        embeddings,

        allow_dangerous_deserialization=True,

    )

    print("[DONE] FAISS Loaded.\n")

    return vector_store


# ==========================================================
# Python Error Extraction
# ==========================================================

def extract_python_error(text):

    patterns = [

        r"[A-Za-z]+Error",

        r"cannot import name",

        r"ModuleNotFoundError",

    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            text,
            flags=re.IGNORECASE,
        )

        if match:
            return match.group().strip()




    return text.strip()


# ==========================================================
# HTTP Error Extraction
# ==========================================================

def extract_http_error(text):

    match = re.search(
        r"\b\d{3}\b",
        text,
    )

    if match:

        code = match.group()

        if code in HTTP_ERRORS:
            return HTTP_ERRORS[code]

    return text.strip()


# ==========================================================
# Git Error Extraction
# ==========================================================

def extract_git_error(text):

    patterns = [

        r"Authentication failed",

        r"Permission denied",

        r"Repository not found",

    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            text,
            flags=re.IGNORECASE,
        )

        if match:
            return match.group().strip()

    return text.strip()


# ==========================================================
# Generic Error Extraction
# ==========================================================

def extract_error(language, text):

    language = language.lower()

    if language == "python":

        error = extract_python_error(text)

    elif language == "http":

        error = extract_http_error(text)

    elif language == "git":

        error = extract_git_error(text)

    else:

        error = text.strip()

    print(f"[INFO] Extracted Error -> {error}")

    return error


# ==========================================================
# Exact Match Search
# ==========================================================

def exact_match(language, error_name):

    print(f"[INFO] Exact Match Search -> {error_name}")

    folder = KNOWLEDGE_BASE / language.lower()

    normalized = (

        error_name
        .replace(":", "")
        .replace("/", "")
        .replace("\\", "")
        .strip()
        .lower()

    )

    for file in folder.rglob("*.md"):

        if normalized in file.stem.lower():

            print(f"[DONE] Exact Match Found -> {file.name}")

            return file.read_text(

                encoding="utf-8"

            )

    print("[INFO] Exact Match Not Found.")
    print("[INFO] Switching to Semantic Search...")

    return None


# ==========================================================
# Semantic Search
# ==========================================================

def semantic_search(vector_store, query):

    print("[INFO] Running Semantic Search...")

    documents = vector_store.similarity_search(query, k=1)

    if not documents:
        return None



    print("[DONE] Semantic Search Finished.\n")

    return documents[0].page_content



# ==========================================================
# Internal Search
# ==========================================================

import re
import time
from pathlib import Path

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

from parser import parse_markdown



# ==========================================================
# Paths
# ==========================================================

KNOWLEDGE_BASE = Path("knowledge_base")
VECTOR_DB = Path("vector_db")


# ==========================================================
# HTTP Error Mapping
# ==========================================================

HTTP_ERRORS = {
    "400": "400 Bad Request",
    "401": "401 Unauthorized",
    "403": "403 Forbidden",
    "404": "404 Not Found",
    "500": "500 Internal Server Error",
}


# ==========================================================
# Loaded Vector Stores
# ==========================================================

_vector_stores = {}


# ==========================================================
# Cached Embedding Model
# ==========================================================

_embeddings = None


# ==========================================================
# Load Embedding Model (Cached)
# ==========================================================

def load_embeddings():
    """
    Load embedding model only once.
    """

    global _embeddings

    if _embeddings is None:

        print("\n[INFO] Loading Embedding Model...")

        _embeddings = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )

        print("[DONE] Embedding Model Loaded.\n")

    return _embeddings


# ==========================================================
# Load FAISS Database
# ==========================================================

def load_database(language):
    """
    Load FAISS database.
    """

    print(f"[INFO] Loading FAISS Database -> {language}")

    embeddings = load_embeddings()

    database_path = VECTOR_DB / language.lower()

    kb_folder = KNOWLEDGE_BASE / language.lower()

    print(f"[INFO] Knowledge Base Path : {kb_folder}")

    if not database_path.exists():

        raise FileNotFoundError(

            f"Database not found: {database_path}"

        )

    print(f"[INFO] Database Path : {database_path}")

    vector_store = FAISS.load_local(

        str(database_path),

        embeddings,

        allow_dangerous_deserialization=True,

    )

    print("[DONE] FAISS Loaded.\n")

    return vector_store


# ==========================================================
# Python Error Extraction
# ==========================================================

def extract_python_error(text):

    patterns = [

        r"[A-Za-z]+Error",

        r"cannot import name",

        r"ModuleNotFoundError",

    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            text,
            flags=re.IGNORECASE,
        )

        if match:
            return match.group().strip()




    return text.strip()


# ==========================================================
# HTTP Error Extraction
# ==========================================================

def extract_http_error(text):

    match = re.search(
        r"\b\d{3}\b",
        text,
    )

    if match:

        code = match.group()

        if code in HTTP_ERRORS:
            return HTTP_ERRORS[code]

    return text.strip()


# ==========================================================
# Git Error Extraction
# ==========================================================

def extract_git_error(text):

    patterns = [

        r"Authentication failed",

        r"Permission denied",

        r"Repository not found",

    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            text,
            flags=re.IGNORECASE,
        )

        if match:
            return match.group().strip()

    return text.strip()


# ==========================================================
# Generic Error Extraction
# ==========================================================

def extract_error(language, text):

    language = language.lower()

    if language == "python":

        error = extract_python_error(text)

    elif language == "http":

        error = extract_http_error(text)

    elif language == "git":

        error = extract_git_error(text)

    else:

        error = text.strip()

    print(f"[INFO] Extracted Error -> {error}")

    return error


# ==========================================================
# Exact Match Search
# ==========================================================

def exact_match(language, error_name):

    print(f"[INFO] Exact Match Search -> {error_name}")

    folder = KNOWLEDGE_BASE / language.lower()

    normalized = (

        error_name
        .replace(":", "")
        .replace("/", "")
        .replace("\\", "")
        .strip()
        .lower()

    )

    for file in folder.rglob("*.md"):

        if normalized in file.stem.lower():

            print(f"[DONE] Exact Match Found -> {file.name}")

            return file.read_text(

                encoding="utf-8"

            )

    print("[INFO] Exact Match Not Found.")
    print("[INFO] Switching to Semantic Search...")

    return None


# ==========================================================
# Semantic Search
# ==========================================================

def semantic_search(vector_store, query):

    print("[INFO] Running Semantic Search...")

    documents = vector_store.similarity_search(query, k=1)

    if not documents:
        return None



    print("[DONE] Semantic Search Finished.\n")

    return documents[0].page_content



# ==========================================================
# Internal Search
# ==========================================================

def search(language, vector_store, user_input):

    print("[INFO] Starting Search...")

    error = extract_error(

        language,

        user_input,

    )

    print(f"[INFO] Searching For -> {error}")

    markdown = exact_match(
        language,
        error,
    )

    if markdown is None:

        print("[INFO] Search Mode : Semantic Search")

        markdown = semantic_search(
            vector_store,
            error,
        )

    else:

        print("[INFO] Search Mode : Exact Match")

    print("[DONE] Markdown Retrieved.")

    parsed = parse_markdown(markdown)

    print("[DONE] Markdown Parsed Successfully.")

    return parsed


# ==========================================================
# Public API
# ==========================================================

def search_error(language, user_input):



    print("\n===================================")
    print("RAG SEARCH")
    print("===================================")

    start = time.time()
    print(f"[INFO] Cached Databases : {list(_vector_stores.keys())}")

    language = language.lower()


    if language not in _vector_stores:

        print(f"[INFO] First time loading '{language}' database...")

        _vector_stores[language] = load_database(

            language

        )

    else:

        print(f"[INFO] Using Cached Database -> {language}")

    result = search(

        language,

        _vector_stores[language],

        user_input,

    )

    elapsed = time.time() - start

    print(f"[TIME] Total Search Time : {elapsed:.2f} seconds")

    print("[DONE] Search Finished.\n")

    return result


# ==========================================================
# Public API
# ==========================================================

def search_error(language, user_input):



    print("\n===================================")
    print("RAG SEARCH")
    print("===================================")

    start = time.time()
    print(f"[INFO] Cached Databases : {list(_vector_stores.keys())}")

    language = language.lower()


    if language not in _vector_stores:

        print(f"[INFO] First time loading '{language}' database...")

        _vector_stores[language] = load_database(

            language

        )

    else:

        print(f"[INFO] Using Cached Database -> {language}")

    result = search(

        language,

        _vector_stores[language],

        user_input,

    )

    elapsed = time.time() - start

    print(f"[TIME] Total Search Time : {elapsed:.2f} seconds")

    print("[DONE] Search Finished.\n")

    return result