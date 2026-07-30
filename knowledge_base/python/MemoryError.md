---
error_id: python_memory_error
title: MemoryError
language: Python
category: Exception
severity: High
difficulty: Intermediate

aliases:
  - out of memory
  - memory allocation failed
  - insufficient memory
  - not enough memory

tags:
  - python
  - exception
  - memory
  - performance
---

# MemoryError

## What is this error?

`MemoryError` occurs when Python runs out of available memory while trying to create or expand an object.

---

## When does it occur?

This error appears when the program attempts to allocate more memory than the operating system can provide.

---

## Why does it happen?

- Loading an extremely large file into memory.
- Creating a very large list, dictionary, or other data structure.
- Infinite loops that continuously allocate memory.
- Memory leaks in long-running programs.

---

## Error Message Example

```text
MemoryError
```

---

## Example Code

```python
numbers = [0] * (10 ** 12)
```

---

## Step-by-Step Solution

### Step 1

Identify the object that is consuming the largest amount of memory.

### Step 2

Process data in smaller chunks instead of loading everything at once.

```python
with open("large_file.txt") as file:

    for line in file:
        process(line)
```

### Step 3

Delete objects that are no longer needed.

```python
del numbers
```

### Step 4

Use generators instead of large lists whenever possible.

```python
numbers = (x for x in range(1000000))
```

---

## Prevention Tips

- Process large datasets in batches.
- Use generators for sequential data processing.
- Avoid creating unnecessary copies of large objects.
- Monitor memory usage when working with large files or datasets.

---

## Related Errors

- RecursionError
- OverflowError
- RuntimeError

---

## AI Debugging Tips

- Identify which object is consuming the most memory.
- Replace large lists with generators when possible.
- Read large files line by line instead of loading them entirely.
- Profile your application to locate memory-intensive operations.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#MemoryError