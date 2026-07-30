---
error_id: python_recursion_error
title: RecursionError
language: Python
category: Exception
severity: High
difficulty: Intermediate

aliases:
  - maximum recursion depth exceeded
  - recursive function error
  - infinite recursion
  - recursion limit exceeded

tags:
  - python
  - exception
  - recursion
  - function
---

# RecursionError

## What is this error?

`RecursionError` occurs when a recursive function exceeds Python's maximum recursion depth. This usually happens because the function keeps calling itself without reaching a stopping condition.

---

## When does it occur?

This error appears when a recursive function repeatedly calls itself until Python reaches its recursion limit.

---

## Why does it happen?

- The recursive function has no base case.
- The base case is never reached.
- The recursive call does not move toward the stopping condition.
- The recursion depth is legitimately too large for Python's default limit.

---

## Error Message Example

```text
RecursionError: maximum recursion depth exceeded
```

---

## Example Code

```python
def countdown(number):
    return countdown(number - 1)

countdown(5)
```

---

## Step-by-Step Solution

### Step 1

Check whether the recursive function has a valid base case.

### Step 2

Ensure that each recursive call moves closer to the base case.

```python
def countdown(number):

    if number == 0:
        return

    print(number)

    countdown(number - 1)

countdown(5)
```

### Step 3

Test the function using small input values.

### Step 4

If deep recursion is unavoidable, consider using an iterative solution with loops instead.

---

## Prevention Tips

- Always define a clear base case.
- Verify that recursion progresses toward the stopping condition.
- Test recursive functions with simple inputs first.
- Prefer loops when recursion is unnecessary.

---

## Related Errors

- RuntimeError
- MemoryError
- OverflowError

---

## AI Debugging Tips

- Trace each recursive call step by step.
- Confirm that the base case is reachable.
- Print the function arguments during recursion to monitor progress.
- Consider replacing recursion with iteration if the recursion depth becomes too large.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#RecursionError