# 🚀 [Tips Hindawi](https://www.tipshindawi.com/) Challenge (June–July) 2026

> 🏆 This repository is my official submission for the [ **Tips Hindawi** ](https://www.tipshindawi.com/) **Challenge (June–July) 2026**.

## 👤 Participant

| Field            | Value                                |
| ---------------- | ------------------------------------ |
| Full Name        | Kenzy Mohamed                        |
| Project Name     | DevAssist AI                         |
| GitHub Username  | KenzyElshazly2005                                   |
| Challenge Batch  | June–July 2026                       |
| Training Program | Large Language Models (LLMs) Program |
| Organization     | [**Edrak for Ai**](https://edrak4ai.com/en) |


---

# 📖 Project Overview

**DevAssist AI** is an intelligent developer assistant designed to help programmers understand and troubleshoot programming errors faster.

The system combines **error knowledge retrieval** and **Python code analysis** with **Retrieval-Augmented Generation (RAG)** techniques to provide detailed explanations and troubleshooting guidance for programming errors.

The project uses a custom-built knowledge base created manually, containing structured information about common programming errors, their causes, solutions, examples, prevention tips, and official documentation references.

The knowledge base documents are converted into vector embeddings using:

sentence-transformers/all-MiniLM-L6-v2

These embeddings allow the system to understand semantic similarity between user queries and stored error explanations.

FAISS Vector Database is used to store and search these embeddings efficiently, allowing the system to retrieve the most relevant error information.

DevAssist AI provides two main workflows:

### 🔍 Error Message Assistant

Users can search for common programming errors across supported languages and development tools:

- Python
- Git
- HTTP

The system retrieves structured information from the custom knowledge base, including:

- Error description.
- Common causes.
- Error examples.
- Step-by-step solutions.
- Prevention tips.
- Related errors.
- Official documentation references.


### 🧩 Python Code Analysis Assistant

Users can submit Python code, and the system analyzes it to detect programming issues.

The analyzer identifies:

- Syntax errors.
- Runtime errors.
- Error type.
- Error location (line number).
- Error message.

After detecting the error, the system uses RAG-based retrieval to provide a detailed explanation and troubleshooting guidance.



---

# ✨ Features

- 🔍 Interactive web-based developer assistant.
- 🧩 Two analysis workflows:
  - Error Message Search for Python, Git, and HTTP.
  - Python Code Analysis for detecting code errors.

- 🐍 Python syntax and runtime error detection.
- 📍 Detect error type, line number, and error message.
- 🤖 RAG-based error explanation and knowledge retrieval.
- 🧠 Semantic search using sentence-transformers embeddings.
- ⚡ Fast retrieval using the FAISS vector database.
- 📚 Custom Markdown-based programming error knowledge base.
- 🔎 Auto-complete search for supported errors.
- 🔧 Support for Python, Git, and HTTP troubleshooting.
- 📖 Provide solutions, examples, prevention tips, related errors, and official documentation references.
- 🌙 Dark mode user interface.
- 📩 Allow users to request new errors for future knowledge base expansion.


---

# 🛠️ Technologies Used


## Programming Languages

* Python
* JavaScript
* HTML
* CSS


## Backend

* Flask
* REST API


## AI & LLM Technologies

* Retrieval-Augmented Generation (RAG)
* Sentence Transformers
* Embeddings
* Vector Search


## Models & Libraries

* sentence-transformers/all-MiniLM-L6-v2
* FAISS Vector Database
* Hugging Face Embeddings
* Markdown-based Knowledge Base


## Libraries & Tools

* LangChain
* Fetch API


---

# 📂 Project Structure


```

DevAssist-AI
│
├── knowledge_base
│   ├── python
│   ├── git
│   └── http
│
├── vector_db
│   ├── python
│   ├── git
│   └── http
│
├── static
│   ├── style.css
│   ├── script.js
│   ├── autocomplete.json
│   └── logo.png
│
├── templates
│   └── index.html
│
├── rag.py
├── parser.py
├── build_database.py
├── python_analyzer.py
├── web_app.py
└── requirements.txt

````


---

# ⚙️ Installation


Clone the repository:

```bash
git clone https://github.com/KenzyElshazly2005/DevAssist-AI.git
```

Navigate to the project folder:

```bash
cd DevAssist-AI
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Build the vector databases:
This step creates FAISS vector databases from the knowledge base documents.

```bash
python build_database.py
```

Run the application:

```bash
python web_app.py
```

---

# 🚀 Usage

1. Open the web application:

```
http://127.0.0.1:5000
```

2. Choose a category:

* Programming Languages.
* Programming Tools.

3. Select the required analysis workflow:

### Error Message Search

* Search or select a known error.
* Supported categories:
  - Python errors.
  - Git errors.
  - HTTP errors.
* Retrieve detailed explanations, causes, solutions, examples, and documentation references.

### Python Code Analysis

* Paste Python code.
* The system analyzes the code for syntax and runtime errors.
* View:
  - Error type.
  - Error location.
  - Error message.
  - Detailed explanation and troubleshooting guidance using RAG.

4. Explore:

* Description.
* Causes.
* Solutions.
* Examples.
* Prevention tips.
* Documentation.

---

# 📸 Demo

A short demonstration of DevAssist AI Version 1:

- Python error search and analysis.
- User description error detection.
- Python code analysis.
- Git troubleshooting.
- HTTP error troubleshooting.

Demo Video:
[https://drive.google.com/file/d/1wIJcfd9duBcWol9ljI6TYuMlBpnKtzq1/view?usp=sharing]

# 📈 Results

The project successfully provides an interactive AI developer assistant capable of:

* Detecting and explaining supported programming errors across Python, Git, and HTTP.
* Analyzing Python code and identifying syntax and runtime issues.
* Retrieving relevant solutions from the custom knowledge base using semantic search.
* Providing structured debugging information with causes, solutions, examples, and documentation references.

---

# 🔮 Future Improvements

* Add support for more programming languages:

  * C++
  * SQL
  * JavaScript

* Extend code analysis capabilities to support more programming languages.

* Integrate advanced Large Language Models for conversational debugging.

* Add automatic code correction and improvement suggestions.

* Create an interactive debugging learning system with multiple difficulty levels.

* Add personalized learning based on user debugging history.

* Improve retrieval accuracy using advanced ranking techniques.

* Expand the knowledge base through user contributions.

---

# 📚 About the Challenge

This project was developed as part of the [**Tips Hindawi**](https://www.tipshindawi.com/) **Challenge (June–July) 2026**.

[Tips Hindawi](https://www.tipshindawi.com/) is the internships department of [**Edrak for Ai**](https://edrak4ai.com/en), and the challenge encourages participants to build real-world projects, apply practical skills, and showcase their work through GitHub.

For more information about the challenge, training programs, and upcoming batches, visit the official [Tips Hindawi](https://www.tipshindawi.com/) website.

---

# 📄 License

This project is shared for educational and portfolio purposes.

```
