---
error_id: python_file_not_found_error
title: FileNotFoundError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - no such file or directory
  - file not found
  - cannot open file
  - missing file

tags:
  - python
  - exception
  - file
  - path
---

# FileNotFoundError

## What is this error?

`FileNotFoundError` occurs when Python cannot find the file or directory specified in your code.

---

## When does it occur?

This error appears when Python attempts to open or access a file that does not exist at the specified location.

---

## Why does it happen?

- The file does not exist.
- The file has been moved, renamed, or deleted.
- The file path is incorrect.
- The current working directory is different from the expected one.
- The file name or extension contains a typo.

---

## Error Message Example

```text
FileNotFoundError: [Errno 2] No such file or directory: 'data.txt'
```

---

## Example Code

```python
with open("data.txt", "r") as file:
    print(file.read())
```

---

## Step-by-Step Solution

### Step 1

Verify that the file exists at the specified path.

### Step 2

Check the file name, extension, and letter casing.

For example:

```text
data.txt
```

is different from

```text
Data.txt
```

on case-sensitive operating systems.

### Step 3

Verify that the file path is correct.

If necessary, use an absolute path.

```python
with open(r"C:\Users\Kenzy\Documents\data.txt", "r") as file:
    print(file.read())
```

### Step 4

Check the current working directory.

```python
import os

print(os.getcwd())
```

---

## Prevention Tips

- Verify the file path before opening a file.
- Use `os.path.exists()` to check whether the file exists.
- Keep your project files organized.
- Double-check file names and extensions.

---

## Related Errors

- PermissionError
- OSError
- IsADirectoryError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check the exact file path shown in the error.
- Print the current working directory using `os.getcwd()`.
- Use `os.path.exists()` to verify that the file exists before opening it.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#FileNotFoundError