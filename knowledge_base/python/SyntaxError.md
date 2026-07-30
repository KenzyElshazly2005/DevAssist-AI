---
error_id: python_syntax_error
title: SyntaxError
language: Python
category: Exception
severity: High
difficulty: Beginner

aliases:
  - invalid syntax
  - expected ':'
  - syntax mistake
  - parser error

tags:
  - python
  - exception
  - syntax
  - parser
---

# SyntaxError

## What is this error?

`SyntaxError` occurs when Python cannot understand your code because it does not follow the language's syntax rules.

---

## When does it occur?

This error appears before the program starts running because Python checks the syntax of the entire code before executing it.

---

## Why does it happen?

- A colon (`:`) is missing after statements such as `if`, `for`, `while`, `def`, or `class`.
- Parentheses, brackets, or quotation marks are missing or unmatched.
- Python keywords are used incorrectly.
- There is an invalid statement or unexpected character in the code.

---

## Error Message Example

```text
SyntaxError: expected ':'
```

---

## Example Code

```python
def greet(name)

    print("Hello", name)
```

---

## Step-by-Step Solution

### Step 1

Read the error message carefully to identify the line where the syntax error occurred.

### Step 2

Check the line for missing punctuation such as a colon (`:`), parentheses, brackets, or quotation marks.

### Step 3

Correct the syntax.

```python
def greet(name):

    print("Hello", name)
```

### Step 4

Run the program again to verify that the syntax error has been resolved.

---

## Prevention Tips

- Use an IDE with syntax highlighting.
- Write and test your code in small sections.
- Pay attention to indentation and punctuation.
- Review your code before running it.

---

## Related Errors

- IndentationError
- TabError
- NameError

---

## AI Debugging Tips

- Fix the first syntax error before checking the rest of the code.
- Review the line above the highlighted line because the actual mistake may be there.
- Use automatic code formatting tools whenever possible.
- Let your IDE highlight syntax issues while typing.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#SyntaxError