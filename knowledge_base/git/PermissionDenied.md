---
error_id: git_permission_denied
title: Permission Denied
language: Git
category: Permission
severity: High
difficulty: Beginner

aliases:
  - permission denied
  - publickey denied
  - ssh permission denied

tags:
  - git
  - github
  - ssh
---

# Permission Denied

## What is this error?

`Permission Denied` occurs when Git cannot authenticate your access to the remote repository.

---

## When does it occur?

This error appears when Git attempts to connect using SSH credentials that are missing, invalid, or not authorized.

---

## Why does it happen?

- Your SSH key is not configured.
- The SSH key has not been added to GitHub.
- You do not have permission to access the repository.
- The SSH agent is not running.

---

## Error Message Example

```text
Permission denied (publickey)
```

---

## Example Code

```bash
git push origin main
```

---

## Step-by-Step Solution

### Step 1

Verify that your SSH key exists.

### Step 2

Add the SSH key to your GitHub account.

### Step 3

Start the SSH agent if necessary.

### Step 4

Test the connection.

```bash
ssh -T git@github.com
```

---

## Prevention Tips

- Configure SSH before working with GitHub.
- Keep your SSH keys secure.
- Test your SSH connection regularly.
- Verify repository permissions.

---

## Related Errors

- Authentication Failed
- Repository Not Found

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify that your SSH key is configured correctly.
- Test the SSH connection using `ssh -T git@github.com`.
- Confirm that your GitHub account has repository access.

---

## Official Documentation

https://docs.github.com/en/authentication