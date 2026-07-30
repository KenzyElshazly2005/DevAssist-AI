---
error_id: python_module_not_found_error
title: ModuleNotFoundError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - no module named
  - module not found
  - missing package

tags:
  - python
  - exception
  - import
  - module
---

# ModuleNotFoundError

## What is this error?

`ModuleNotFoundError` occurs when Python cannot find the module or package you are trying to import.

---

## When does it occur?

This error appears when Python searches for a module but cannot locate it in the current environment.

---

## Why does it happen?

- The package is not installed.
- The module name is misspelled.
- The virtual environment is not activated.
- The wrong Python interpreter is being used.

---

## Error Message Example

```text
ModuleNotFoundError: No module named 'langchain'
```

---

## Example Code

```python
import langchain
```

---

## Step-by-Step Solution

### Step 1

Check whether the package is installed.

```bash
pip show langchain
```

### Step 2

If the package is not installed, install it.

```bash
pip install langchain
```

### Step 3

Activate the correct virtual environment.

### Step 4

Restart your IDE or terminal and run the code again.

---

## Prevention Tips

- Use a virtual environment for every project.
- Keep your dependencies updated.
- Verify the package name before importing it.

---

## Related Errors

- ImportError
- NameError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify the active Python interpreter.
- Check that the package is installed in the correct environment.
- Avoid installing packages in a different Python environment.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#ModuleNotFoundError