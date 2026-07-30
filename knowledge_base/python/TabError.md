---
error_id: python_tab_error
title: TabError
language: Python
category: Exception
severity: Medium
difficulty: Beginner

aliases:
  - inconsistent use of tabs and spaces
  - mixed tabs and spaces
  - indentation contains tabs
  - tab indentation error

tags:
  - python
  - exception
  - indentation
  - tabs
  - whitespace
---

# TabError

## What is this error?

`TabError` occurs when Python detects inconsistent use of tabs and spaces for indentation within the same block of code.

---

## When does it occur?

This error appears when some lines are indented with tabs while others are indented with spaces, making the code structure ambiguous.

---

## Why does it happen?

- Tabs and spaces are mixed in the same code block.
- Different editors use different indentation settings.
- Code is copied from multiple sources with different formatting styles.
- Automatic formatting is disabled or configured incorrectly.

---

## Error Message Example

```text
TabError: inconsistent use of tabs and spaces in indentation
```

---

## Example Code

```python
if True:
	print("Hello")
    print("World")
```

---

## Step-by-Step Solution

### Step 1

Locate the line mentioned in the error message.

### Step 2

Check whether tabs and spaces are mixed in the same block.

### Step 3

Replace all tabs with four spaces.

```python
if True:
    print("Hello")
    print("World")
```

### Step 4

Configure your editor to automatically insert spaces instead of tabs.

---

## Prevention Tips

- Use four spaces for every indentation level.
- Never mix tabs and spaces.
- Enable automatic code formatting.
- Configure your IDE to convert tabs into spaces automatically.

---

## Related Errors

- IndentationError
- SyntaxError
- NameError

---

## AI Debugging Tips

- Enable "Show Whitespace" in your code editor.
- Convert all tabs to spaces before running the program.
- Use a formatter such as Black to standardize indentation.
- Keep the same indentation style throughout the project.

---

## Official Documentation

https://docs.python.org/3/library/exceptions.html#TabError