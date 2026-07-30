---
error_id: python_type_error
title: TypeError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - unsupported operand type
  - incompatible type
  - invalid argument type

tags:
  - python
  - exception
  - type
  - data type
---

# TypeError

## What is this error?

`TypeError` occurs when an operation or function is applied to an object of an incompatible data type.

---

## When does it occur?

This error appears when Python expects one data type but receives another incompatible type.

---

## Why does it happen?

- Different data types are used in the same operation.
- A function receives an argument of the wrong type.
- Unsupported operations are performed between objects.
- Incorrect type conversion is used.

---

## Error Message Example

```text
TypeError: can only concatenate str (not "int") to str
```

---

## Example Code

```python
name = "John"
age = 20

print(name + age)
```

---

## Step-by-Step Solution

### Step 1

Check the data types of the variables.

```python
print(type(name))
print(type(age))
```

### Step 2

Convert the values to compatible data types.

```python
print(name + str(age))
```

### Step 3

Verify the expected parameter types in the function documentation.

### Step 4

Run the program again after correcting the data types.

---

## Prevention Tips

- Verify variable types before performing operations.
- Use explicit type conversion when necessary.
- Use type hints when possible.
- Test functions with different input values.

---

## Related Errors

- ValueError
- AttributeError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Identify the data types involved in the operation.
- Use `type()` to inspect variables.
- Convert values only when it is logically correct.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#TypeError