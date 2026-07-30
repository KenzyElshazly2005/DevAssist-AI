---
error_id: python_zero_division_error
title: ZeroDivisionError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - division by zero
  - divide by zero
  - modulo by zero

tags:
  - python
  - exception
  - division
  - zero
---

# ZeroDivisionError

## What is this error?

`ZeroDivisionError` occurs when you attempt to divide or calculate the remainder of a number by zero.

---

## When does it occur?

This error appears when the divisor in a division or modulo operation is equal to zero.

---

## Why does it happen?

- The divisor value is zero.
- User input is not validated.
- A calculation unexpectedly returns zero.
- Division is performed without checking the denominator.

---

## Error Message Example

```text
ZeroDivisionError: division by zero
```

---

## Example Code

```python
result = 10 / 0
```

---

## Step-by-Step Solution

### Step 1

Check whether the divisor is equal to zero.

### Step 2

Use a conditional statement before performing the division.

```python
if number != 0:
    result = 10 / number
```

### Step 3

Use exception handling when the divisor may be unknown.

```python
try:
    result = 10 / number
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

### Step 4

Validate user input before performing mathematical operations.

---

## Prevention Tips

- Check the divisor before dividing.
- Validate user input.
- Use `try-except` to handle unexpected cases.
- Avoid performing calculations with unknown values.

---

## Related Errors

- ValueError
- OverflowError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify that the divisor is not equal to zero.
- Print the divisor during debugging if necessary.
- Use input validation to prevent division by zero.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#ZeroDivisionError