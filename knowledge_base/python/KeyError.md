---
error_id: python_key_error
title: KeyError
language: Python
category: Exception
severity: Low
difficulty: Beginner

aliases:
  - key not found
  - missing dictionary key
  - invalid dictionary key

tags:
  - python
  - exception
  - dictionary
  - key
---

# KeyError

## What is this error?

`KeyError` occurs when you try to access a dictionary key that does not exist.

---

## When does it occur?

This error appears when Python cannot find the requested key in a dictionary.

---

## Why does it happen?

- The requested key does not exist.
- The key name is misspelled.
- The dictionary is empty.
- The key was removed before being accessed.

---

## Error Message Example

```text
KeyError: 'name'
```

---

## Example Code

```python
student = {}

print(student["name"])
```

---

## Step-by-Step Solution

### Step 1

Check the available dictionary keys.

```python
print(student.keys())
```

### Step 2

Verify that the requested key exists.

```python
if "name" in student:
    print(student["name"])
```

### Step 3

Use `.get()` when the key may not exist.

```python
print(student.get("name"))
```

### Step 4

Initialize the dictionary with the required keys before accessing them.

---

## Prevention Tips

- Verify that the key exists before accessing it.
- Use `.get()` for optional keys.
- Keep dictionary keys consistent throughout your code.

---

## Related Errors

- IndexError
- NameError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Print the dictionary keys using `keys()`.
- Verify that the requested key exists in the dictionary.
- Use `.get()` when the key may not exist.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#KeyError