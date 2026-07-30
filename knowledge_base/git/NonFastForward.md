---
error_id: git_non_fast_forward
title: Non Fast Forward
language: Git
category: Push
severity: Medium
difficulty: Intermediate

aliases:
  - non fast forward
  - rejected push
  - push rejected

tags:
  - git
  - push
---

# Non Fast Forward

## What is this error?

`Non Fast Forward` occurs when Git rejects your push because the remote branch contains commits that are not present locally.

---

## When does it occur?

This error appears when another commit has been pushed to the remote repository before your local changes.

---

## Why does it happen?

- Another developer pushed new commits.
- Your local branch is outdated.
- The remote branch has changed since your last pull.
- You attempted to push without synchronizing first.

---

## Error Message Example

```text
! [rejected] main -> main (non-fast-forward)
```

---

## Example Code

```bash
git push origin main
```

---

## Step-by-Step Solution

### Step 1

Pull the latest changes.

```bash
git pull origin main
```

### Step 2

Resolve merge conflicts if they appear.

### Step 3

Verify that your project works correctly.

### Step 4

Push your changes again.

```bash
git push origin main
```

---

## Prevention Tips

- Pull changes before pushing.
- Push changes frequently.
- Keep your local branch synchronized.
- Avoid long-running branches when possible.

---

## Related Errors

- Merge Conflict
- Authentication Failed

---

## AI Debugging Tips

- Read the complete error message carefully.
- Pull the latest changes before pushing again.
- Resolve merge conflicts if necessary.
- Verify that your local branch is up to date.

---

## Official Documentation

https://git-scm.com/docs/git-push