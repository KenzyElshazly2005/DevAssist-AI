---
error_id: python_eof_error
title: EOFError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - end of file
  - eof while reading
  - unexpected end of input
  - no input available

tags:
  - python
  - exception
  - input
  - file
  - eof
---

# EOFError

## What is this error?

`EOFError` occurs when Python reaches the end of the input stream unexpectedly while waiting for more data.

---

## When does it occur?

This error appears when `input()` or another input-reading function expects data but receives an End-Of-File (EOF) signal instead.

---

## Why does it happen?

- The user provides no input and sends an EOF signal.
- The program attempts to read more input than is available.
- An input file ends before the expected data is read.
- Standard input has been redirected incorrectly.

---

## Error Message Example

```text
EOFError: EOF when reading a line
```

---

## Example Code

```python
name = input("Enter your name: ")

print(name)
```

If the input stream unexpectedly ends before the user enters any text, Python raises an `EOFError`.

---

## Step-by-Step Solution

### Step 1

Check whether the input source is providing the expected data.

### Step 2

Handle the exception using a `try-except` block.

```python
try:

    name = input("Enter your name: ")

    print(name)

except EOFError:

    print("No input was provided.")
```

### Step 3

Verify that redirected input files contain the required data.

### Step 4

Test the program with valid user input to ensure it behaves as expected.

---

## Prevention Tips

- Always validate user input.
- Use exception handling when reading input.
- Ensure input files are not empty.
- Test programs with both valid and missing input.

---

## Related Errors

- FileNotFoundError
- ValueError
- KeyboardInterrupt

---

## AI Debugging Tips

- Check whether the input stream is empty.
- Verify that redirected input files contain enough data.
- Use `try-except` blocks around input operations.
- Confirm that the program is reading from the correct input source.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#EOFError