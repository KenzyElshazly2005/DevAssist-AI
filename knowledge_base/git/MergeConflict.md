---
error_id: git_merge_conflict
title: Merge Conflict
language: Git
category: Merge
severity: High
difficulty: Intermediate

aliases:
  - merge conflict
  - conflict during merge
  - git conflict

tags:
  - git
  - merge
  - conflict
---

# Merge Conflict

## What is this error?

`Merge Conflict` occurs when Git cannot automatically combine changes from different branches.

---

## When does it occur?

This error appears when two branches modify the same part of a file and Git cannot determine which version to keep.

---

## Why does it happen?

- Multiple developers edited the same lines.
- Your local branch is outdated.
- Conflicting changes exist between branches.
- A previous merge was not completed correctly.

---

## Error Message Example

```text
CONFLICT (content): Merge conflict
```

---

## Example Code

```bash
git merge feature-branch
```

---

## Step-by-Step Solution

### Step 1

Open the conflicted file.

### Step 2

Review the conflict markers and decide which changes to keep.

### Step 3

Save the resolved file.

### Step 4

Stage and commit the changes.

```bash
git add .
git commit
```

---

## Prevention Tips

- Pull changes frequently.
- Keep branches synchronized.
- Communicate with your team before modifying shared files.
- Create small, focused commits.

---

## Related Errors

- Non Fast Forward
- Detached HEAD

---

## AI Debugging Tips

- Read the complete error message carefully.
- Identify all conflicted files.
- Resolve each conflict before committing.
- Review the final merged code carefully.

---

## Official Documentation

https://git-scm.com/docs/git-merge