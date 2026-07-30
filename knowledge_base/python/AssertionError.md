---
error_id: python_assertion_error
title: AssertionError
language: Python
category: Exception
severity: Medium
difficulty: Intermediate

aliases:
  - assert failed
  - failed assertion
  - assertion failed
  - assert statement error

tags:
  - python
  - exception
  - assert
  - debugging
---

# AssertionError

## What is this error?

`AssertionError` occurs when an `assert` statement evaluates to `False`. Assertions are commonly used during development to verify that certain conditions are true.

---

## When does it occur?

This error appears when an expected condition is not satisfied while the program is running.

---

## Why does it happen?

- The asserted condition evaluates to `False`.
- Invalid data is passed to a function.
- A logical bug causes unexpected values.
- Assumptions made by the programmer are incorrect.

---

## Error Message Example

```text
AssertionError: Age must be positive.
```

---

## Example Code

```python
age = -5

assert age > 0, "Age must be positive."
```

---

## Step-by-Step Solution

### Step 1

Read the assertion message to understand which condition failed.

### Step 2

Inspect the variables involved in the assertion.

```python
print(age)
```

### Step 3

Correct the data or update the program logic.

```python
age = 20

assert age > 0, "Age must be positive."
```

### Step 4

Run the program again and verify that the assertion succeeds.

---

## Prevention Tips

- Use assertions only for debugging and internal checks.
- Validate user input before using it.
- Write clear assertion messages.
- Test your code with both valid and invalid inputs.

---

## Related Errors

- ValueError
- RuntimeError
- TypeError

---

## AI Debugging Tips

- Read the assertion message before changing the code.
- Check the values that caused the assertion to fail.
- Determine whether the data or the program logic is incorrect.
- Replace assertions with proper exception handling in production code when appropriate.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#AssertionError