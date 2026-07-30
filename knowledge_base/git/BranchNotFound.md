---
error_id: git_branch_not_found
title: Branch Not Found
language: Git
category: Branch
severity: Medium
difficulty: Beginner

aliases:
  - pathspec did not match
  - branch not found
  - invalid branch

tags:
  - git
  - branch
---

# Branch Not Found

## What is this error?

`Branch Not Found` occurs when Git cannot find the branch you are trying to access.

---

## When does it occur?

This error appears when you try to switch to, merge, or check out a branch that does not exist.

---

## Why does it happen?

- The branch name is misspelled.
- The branch has not been created.
- The branch exists only on the remote repository.
- The local branch list is outdated.

---

## Error Message Example

```text
error: pathspec 'dev' did not match any file(s) known to git
```

---

## Example Code

```bash
git switch dev
```

---

## Step-by-Step Solution

### Step 1

List all local branches.

```bash
git branch
```

### Step 2

List all remote branches.

```bash
git branch -r
```

### Step 3

Fetch the latest branches from the remote repository.

```bash
git fetch
```

### Step 4

Verify the branch name before switching.

---

## Prevention Tips

- Double-check branch names.
- Fetch remote branches regularly.
- Follow consistent branch naming conventions.
- Delete outdated local branches when necessary.

---

## Related Errors

- Detached HEAD
- Repository Not Found

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify that the branch exists.
- Run `git branch` and `git branch -r` to list available branches.
- Fetch the latest changes before switching branches.

---

## Official Documentation

https://git-scm.com/docs/git-branch