---
error_id: python_runtime_error
title: RuntimeError
language: Python
category: Exception
severity: Medium
difficulty: Intermediate

aliases:
  - runtime exception
  - runtime failure
  - unexpected runtime error
  - execution error

tags:
  - python
  - exception
  - runtime
  - execution
---

# RuntimeError

## What is this error?

`RuntimeError` occurs when Python encounters an unexpected problem during program execution that does not fit into a more specific exception type.

---

## When does it occur?

This error appears while the program is running, usually when an operation cannot continue because of the program's current state.

---

## Why does it happen?

- A function is called in an invalid state.
- An iterator or generator is modified during execution.
- A recursive function exceeds an internal execution limit.
- A library raises `RuntimeError` to indicate an unexpected runtime condition.

---

## Error Message Example

```text
RuntimeError: dictionary changed size during iteration
```

---

## Example Code

```python
numbers = {1: "one", 2: "two"}

for key in numbers:
    numbers[3] = "three"
```

---

## Step-by-Step Solution

### Step 1

Read the complete error message to identify the operation that failed.

### Step 2

Locate the line where the runtime error occurred.

### Step 3

Avoid modifying a collection while iterating over it.

```python
numbers = {1: "one", 2: "two"}

for key in list(numbers.keys()):
    print(key)

numbers[3] = "three"
```

### Step 4

Run the program again to verify that the runtime error has been resolved.

---

## Prevention Tips

- Avoid modifying collections while iterating over them.
- Validate program state before performing operations.
- Read the documentation of third-party libraries.
- Test edge cases during development.

---

## Related Errors

- RecursionError
- MemoryError
- AssertionError

---

## AI Debugging Tips

- Read the full traceback before making changes.
- Focus on the first line in your code that appears in the traceback.
- Verify the program state before the failing operation.
- Search the library documentation if the error comes from external code.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#RuntimeError