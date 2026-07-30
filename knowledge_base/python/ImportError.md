---
error_id: python_import_error
title: ImportError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - cannot import name
  - import failed
  - import error

tags:
  - python
  - exception
  - import
  - package
---

# ImportError

## What is this error?

`ImportError` occurs when Python finds the module but cannot import the requested object from it.

---

## When does it occur?

This error appears when an import statement fails because the requested object or module cannot be imported correctly.

---

## Why does it happen?

- The requested object does not exist.
- The object name is misspelled.
- There is a circular import.
- The installed library version is incompatible.

---

## Error Message Example

```text
ImportError: cannot import name 'ChatOpenAI'
```

---

## Example Code

```python
from langchain import ChatOpenAI
```

---

## Step-by-Step Solution

### Step 1

Verify that the requested object exists in the module.

### Step 2

Check the spelling of the imported object.

### Step 3

Review the library documentation for the correct import statement.

### Step 4

Update the package if necessary.

```bash
pip install --upgrade langchain
```

---

## Prevention Tips

- Keep your libraries updated.
- Avoid circular imports.
- Always verify import statements using the official documentation.

---

## Related Errors

- ModuleNotFoundError
- AttributeError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify the installed library version.
- Check whether the imported object has been renamed or moved.
- Test the import in a separate Python file.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#ImportError