---
error_id: python_permission_error
title: PermissionError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - permission denied
  - access denied
  - operation not permitted
  - insufficient permissions

tags:
  - python
  - exception
  - file
  - permissions
  - operating system
---

# PermissionError

## What is this error?

`PermissionError` occurs when Python attempts to access a file, folder, or system resource without having the required permissions.

---

## When does it occur?

This error appears when the operating system blocks an operation because the current user or process does not have sufficient access rights.

---

## Why does it happen?

- Trying to open a file without the required permissions.
- Attempting to write to a read-only file.
- Accessing a protected system directory.
- Another application is locking the file.
- Running the program without administrator privileges.

---

## Error Message Example

```text
PermissionError: [Errno 13] Permission denied: 'data.txt'
```

---

## Example Code

```python
file = open("protected_file.txt", "w")
```

---

## Step-by-Step Solution

### Step 1

Verify that the file or folder exists and that you have permission to access it.

### Step 2

Check whether another program is currently using the file.

### Step 3

Run the program with the appropriate permissions if necessary.

### Step 4

Use exception handling to manage permission-related errors gracefully.

```python
try:

    with open("protected_file.txt", "w") as file:
        file.write("Hello")

except PermissionError:

    print("You do not have permission to access this file.")
```

---

## Prevention Tips

- Store files in directories where your application has write access.
- Close files properly after using them.
- Avoid modifying protected system files.
- Check file permissions before performing read or write operations.

---

## Related Errors

- FileNotFoundError
- IsADirectoryError
- NotADirectoryError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify the file path and access permissions.
- Check whether another application has locked the file.
- Ensure the program is running with the required privileges.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#PermissionError