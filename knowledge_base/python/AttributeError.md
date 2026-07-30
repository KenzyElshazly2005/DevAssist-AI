---
error_id: python_attribute_error
title: AttributeError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - object has no attribute
  - attribute not found
  - missing attribute

tags:
  - python
  - exception
  - object
  - attribute
---

# AttributeError

## What is this error?

`AttributeError` occurs when you try to access an attribute or method that does not exist for a specific Python object.

---

## When does it occur?

This error appears when Python successfully finds the object but cannot find the requested attribute or method.

---

## Why does it happen?

- The method or attribute name is misspelled.
- You are calling a method that does not belong to the object's data type.
- The object was not initialized correctly.
- You are using an outdated example with a newer library version.

---

## Error Message Example

```text
AttributeError: 'list' object has no attribute 'split'
```

---

## Example Code

```python
numbers = [1, 2, 3]

numbers.split()
```

---

## Step-by-Step Solution

### Step 1

Check the type of the object.

```python
print(type(numbers))
```

Output:

```text
<class 'list'>
```

### Step 2

Verify that the method belongs to the object's data type.

For example, `.split()` is available for strings but not for lists.

### Step 3

Use the correct method for the object.

```python
text = "Python AI"

words = text.split()

print(words)
```

### Step 4

If you are using a third-party library, verify that the method is available in the installed library version.

---

## Prevention Tips

- Use your IDE's auto-completion feature.
- Check the object's data type before calling methods.
- Read the official library documentation.
- Keep your project dependencies up to date.

---

## Related Errors

- TypeError
- NameError
- ImportError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Identify the object's data type before searching for a solution.
- Use `dir(object_name)` to view the available attributes and methods.
- Avoid copying code without verifying that it matches the object's data type.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#AttributeError