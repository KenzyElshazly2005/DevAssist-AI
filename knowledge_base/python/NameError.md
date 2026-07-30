---
error_id: python_name_error
title: NameError
language: Python
category: Exception
severity: Low
difficulty: Beginner

aliases:
  - name is not defined
  - undefined variable
  - undefined function

tags:
  - python
  - exception
  - variable
  - name
---

# NameError

## What is this error?

`NameError` occurs when Python cannot find a variable, function, or object name that you are trying to use.

---

## When does it occur?

This error appears when a name has not been defined or is misspelled before being accessed.

---

## Why does it happen?

- The variable has not been defined.
- The variable or function name is misspelled.
- The object is outside its scope.
- The variable was deleted before being used.

---

## Error Message Example

```text
NameError: name 'student' is not defined
```

---

## Example Code

```python
print(student)
```

---

## Step-by-Step Solution

### Step 1

Check the spelling of the variable or function name.

### Step 2

Make sure the variable is defined before using it.

```python
student = "Kenzy"

print(student)
```

### Step 3

Verify that the variable is accessible in the current scope.

### Step 4

Run the program again after correcting the variable name.

---

## Prevention Tips

- Use meaningful variable names.
- Define variables before using them.
- Enable code completion in your IDE.
- Test your code regularly.

---

## Related Errors

- UnboundLocalError
- AttributeError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check for spelling mistakes.
- Verify that the variable exists before using it.
- Review the variable's scope if it is defined inside a function.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#NameError