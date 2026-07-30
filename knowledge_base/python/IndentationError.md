---
error_id: python_indentation_error
title: IndentationError
language: Python
category: Exception
severity: High
difficulty: Beginner

aliases:
  - unexpected indent
  - expected an indented block
  - indentation problem
  - incorrect indentation

tags:
  - python
  - exception
  - indentation
  - whitespace
---

# IndentationError

## What is this error?

`IndentationError` occurs when the indentation of your Python code is incorrect or inconsistent. Since Python uses indentation to define code blocks, proper spacing is required for the program to run.

---

## When does it occur?

This error appears when Python expects an indented block or detects incorrect indentation within the code.

---

## Why does it happen?

- A required code block is not indented.
- Extra spaces or tabs create an unexpected indentation.
- Tabs and spaces are mixed in the same file.
- The indentation level is inconsistent within a block.

---

## Error Message Example

```text
IndentationError: expected an indented block
```

---

## Example Code

```python
if True:
print("Hello, World!")
```

---

## Step-by-Step Solution

### Step 1

Locate the line mentioned in the error message.

### Step 2

Check whether the block after statements like `if`, `for`, `while`, `def`, or `class` is properly indented.

### Step 3

Correct the indentation.

```python
if True:
    print("Hello, World!")
```

### Step 4

Use either spaces or tabs consistently throughout the entire file, preferably four spaces per indentation level.

---

## Prevention Tips

- Always use four spaces for indentation.
- Do not mix tabs and spaces.
- Enable visible whitespace characters in your IDE.
- Use automatic code formatting tools.

---

## Related Errors

- SyntaxError
- TabError
- NameError

---

## AI Debugging Tips

- Read the complete error message to identify the problematic line.
- Check the indentation level of surrounding lines.
- Configure your editor to insert spaces instead of tabs.
- Format your code before running it.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#IndentationError