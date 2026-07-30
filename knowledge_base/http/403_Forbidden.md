---
error_id: http_forbidden
title: 403 Forbidden
language: HTTP
category: Client Error
severity: High
difficulty: Beginner

aliases:
  - forbidden
  - access denied
  - insufficient permissions

tags:
  - http
  - permission
  - security
---

# 403 Forbidden

## What is this error?

`403 Forbidden` occurs when the server understands the request but refuses to allow access.

---

## When does it occur?

This error appears when the user is authenticated but does not have enough permissions to access the requested resource.

---

## Why does it happen?

- The user does not have required permissions.
- The resource is restricted.
- Access rules block the request.
- Server security settings prevent access.

---

## Error Message Example

```text
HTTP/1.1 403 Forbidden
```

---

## Example Code

```http
GET /admin/dashboard
```

---

## Step-by-Step Solution

### Step 1

Verify the user's permissions.

### Step 2

Check access roles and authorization settings.

### Step 3

Request the required permissions.

---

## Prevention Tips

- Configure proper access control.
- Check permissions before accessing resources.
- Protect sensitive endpoints.

---

## Related Errors

- 401 Unauthorized
- 404 Not Found

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check user permissions.
- Verify authorization rules.
- Confirm that the resource is accessible.

---

## Official Documentation

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403