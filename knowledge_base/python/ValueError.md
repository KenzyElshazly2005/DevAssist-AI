---
error_id: python_value_error
title: ValueError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - invalid value
  - invalid literal
  - conversion error

tags:
  - python
  - exception
  - value
  - conversion
---

# ValueError

## What is this error?

`ValueError` occurs when a function receives an argument of the correct data type but with an invalid value.

---

## When does it occur?

This error appears when Python accepts the data type but cannot process the provided value.

---

## Why does it happen?

- An invalid string is converted to a number.
- A function receives an invalid argument.
- The input value is outside the accepted range.
- Invalid user input is provided.

---

## Error Message Example

```text
ValueError: invalid literal for int() with base 10: 'abc'
```

---

## Example Code

```python
number = int("abc")
```

---

## Step-by-Step Solution

### Step 1

Check the input value before using it.

### Step 2

Use exception handling to catch invalid values.

```python
try:
    number = int(user_input)
except ValueError:
    print("Please enter a valid number.")
```

### Step 3

Validate user input before conversion.

### Step 4

Run the program again after correcting the input value.

---

## Prevention Tips

- Validate user input before processing it.
- Use `try-except` blocks when converting data.
- Avoid assuming that user input is always valid.
- Display clear validation messages to users.

---

## Related Errors

- TypeError
- OverflowError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check the value being passed to the function.
- Print the input value before processing it.
- Validate user input before performing conversions.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#ValueError