# DevAssist AI - Version 1 Demo

## 📸 Demo Video

Demo video link:
[Add Google Drive Demo Link Here]

## 🧪 Tested Features

This demo showcases the main features of DevAssist AI Version 1:

* Error search by name.
* Error analysis from user descriptions.
* Python code analysis.
* Detection of programming errors.
* Git troubleshooting.
* HTTP error troubleshooting.

---

# 1. Python - Search by Error Name

### Category

Programming Languages

### Language

Python

### Analyze By

Error Message

### Input

```
NameError
```

### Expected Result

DevAssist AI provides:

* Error explanation.
* Common causes.
* Suggested solution.
* Example code.

---

# 2. Python - Analyze User Description

### Input

```
I created a variable called username, but when I print userName, Python says the name is not defined.
```

### Expected Result

Detected Error:

```
NameError
```

The system identifies the problem based on the user's description and retrieves the related troubleshooting information.

---

# 3. Python - Analyze Incorrect Code

### Input

```python
name = "Kenzy"
print(Name)
```

### Expected Result

Detected:

```
Error Type: NameError
Line: 2
```

The system identifies that the variable name does not match the defined variable.

---

# 4. Python - Analyze Correct Code

### Input

```python
name = "Kenzy"
print(name)
```

### Expected Result

```
No Errors Detected
```

The system confirms that the code does not contain detected errors.

---

# 5. Git - Analyze User Description

### Category

Development Tools

### Tool

Git

### Input

```
I opened the terminal and tried to run git status, but Git says this folder is not a repository.
```

### Expected Result

Detected Error:

```
fatal: not a git repository
```

The system provides the cause and troubleshooting steps.

---

# 6. HTTP - Analyze User Description

### Category

Development Tools

### Tool

HTTP

### Input

```
When I open my website, the browser says the requested page cannot be found.
```

### Expected Result

Detected Error:

```
404 Not Found
```

The system explains that the requested resource does not exist and provides possible solutions.

---

## Summary

Version 1 of DevAssist AI demonstrates:

* Python error understanding.
* Git troubleshooting support.
* HTTP error troubleshooting support.
* RAG-based error retrieval.
* Code analysis and error detection.
