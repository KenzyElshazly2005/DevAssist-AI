---
error_id: git_detached_head
title: Detached HEAD
language: Git
category: Branch
severity: Medium
difficulty: Beginner

aliases:
  - detached head
  - head detached
  - checkout commit

tags:
  - git
  - branch
  - head
---

# Detached HEAD

## What is this error?

`Detached HEAD` occurs when Git points to a specific commit instead of an active branch.

---

## When does it occur?

This error appears when you check out a commit, tag, or remote branch instead of switching to a local branch.

---

## Why does it happen?

- You checked out a commit hash directly.
- You checked out a tag.
- You switched to a remote branch without creating a local branch.
- You accidentally left your current branch.

---

## Error Message Example

```text
HEAD detached at abc123
```

---

## Example Code

```bash
git checkout abc123
```

---

## Step-by-Step Solution

### Step 1

Check the current Git status.

```bash
git status
```

### Step 2

Switch back to an existing branch.

```bash
git switch main
```

### Step 3

If you want to keep your changes, create a new branch.

```bash
git switch -c new-branch
```

### Step 4

Continue your work on the new or existing branch.

---

## Prevention Tips

- Avoid working directly on commits.
- Create a new branch before making changes.
- Check your current branch using `git status`.

---

## Related Errors

- Branch Not Found
- Merge Conflict

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check whether you are currently on a branch.
- Use `git status` to verify your repository state.
- Create a new branch before continuing your work.

---

## Official Documentation

https://git-scm.com/docs/git-checkout