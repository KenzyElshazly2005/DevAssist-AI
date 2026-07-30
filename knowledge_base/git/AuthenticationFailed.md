---
error_id: git_authentication_failed
title: Authentication Failed
language: Git
category: Authentication
severity: High
difficulty: Beginner

aliases:
  - authentication failed
  - invalid credentials
  - git authentication error

tags:
  - git
  - github
  - authentication
  - token
---

# Authentication Failed

## What is this error?

`Authentication Failed` occurs when Git cannot verify your identity while connecting to a remote repository.

---

## When does it occur?

This error appears when Git rejects your credentials while performing operations such as `git push`, `git pull`, or `git clone`.

---

## Why does it happen?

- The username or password is incorrect.
- The Personal Access Token (PAT) is invalid or expired.
- The SSH key is not configured correctly.
- The remote repository requires a different authentication method.

---

## Error Message Example

```text
remote: Authentication failed.
fatal: Authentication failed
```

---

## Example Code

```bash
git push origin main
```

---

## Step-by-Step Solution

### Step 1

Verify that you are using the correct GitHub account.

### Step 2

Generate a new Personal Access Token if your current token has expired.

### Step 3

Replace your password with the Personal Access Token.

### Step 4

Update the stored Git credentials and try again.

---

## Prevention Tips

- Use a Personal Access Token instead of your account password.
- Configure SSH authentication when possible.
- Keep your credentials up to date.
- Remove outdated cached credentials.

---

## Related Errors

- Permission Denied
- Repository Not Found

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify that your credentials are correct.
- Check whether your Personal Access Token has expired.
- Confirm that you have permission to access the repository.

---

## Official Documentation

https://docs.github.com/en/authentication