---
error_id: python_index_error
title: IndexError
language: Python
category: Exception
severity: Low
difficulty: Beginner

aliases:
  - list index out of range
  - index out of range
  - invalid index

tags:
  - python
  - exception
  - list
  - index
---

# IndexError

## What is this error?

`IndexError` occurs when you try to access an index that is outside the valid range of a sequence such as a list, tuple, or string.

---

## When does it occur?

This error appears when the specified index does not exist in the sequence you are trying to access.

---

## Why does it happen?

- The index is greater than the sequence length.
- The sequence is empty.
- The loop exceeds the valid index range.
- The index value is calculated incorrectly.

---

## Error Message Example

```text
IndexError: list index out of range
```

---

## Example Code

```python
numbers = [1, 2, 3]

print(numbers[5])
```

---

## Step-by-Step Solution

### Step 1

Check the length of the sequence.

```python
print(len(numbers))
```

### Step 2

Verify that the index is within the valid range.

### Step 3

Use a loop or conditional statement to prevent invalid indexing.

```python
if len(numbers) > 5:
    print(numbers[5])
```

### Step 4

Ensure that the sequence is not empty before accessing its elements.

---

## Prevention Tips

- Check the sequence length before accessing an index.
- Avoid using fixed index values when possible.
- Use loops instead of manually accessing indexes.

---

## Related Errors

- KeyError
- TypeError

---

## AI Debugging Tips

- Read the complete error message carefully.
- Print the sequence length using `len()`.
- Verify that the index is within the valid range.
- Check your loop conditions to avoid exceeding the valid range.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#IndexError