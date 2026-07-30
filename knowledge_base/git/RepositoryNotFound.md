---
error_id: git_repository_not_found
title: Repository Not Found
language: Git
category: Repository
severity: Medium
difficulty: Beginner

aliases:
  - repository not found
  - remote repository not found
  - invalid repository url

tags:
  - git
  - repository
  - github
---

# Repository Not Found

## What is this error?

`Repository Not Found` occurs when Git cannot locate the remote repository you are trying to access.

---

## When does it occur?

This error appears when performing operations such as `git clone`, `git push`, or `git pull` using an invalid or inaccessible repository.

---

## Why does it happen?

- The repository URL is incorrect.
- The repository has been deleted or renamed.
- The repository is private and you do not have permission to access it.
- The remote repository is configured incorrectly.

---

## Error Message Example

```text
remote: Repository not found.
fatal: repository not found
```

---

## Example Code

```bash
git push origin main
```

---

## Step-by-Step Solution

### Step 1

Verify the configured remote repository.

```bash
git remote -v
```

### Step 2

Check that the repository exists on GitHub.

### Step 3

Update the remote URL if necessary.

```bash
git remote set-url origin NEW_URL
```

### Step 4

Try the Git command again.

---

## Prevention Tips

- Copy repository URLs directly from GitHub.
- Verify remote URLs before pushing.
- Confirm that you have access to private repositories.
- Keep repository names up to date.

---

## Related Errors

- Authentication Failed
- Permission Denied

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify the configured remote URL.
- Confirm that the repository exists.
- Check your access permissions.

---

## Official Documentation

https://git-scm.com/docs/git-remote