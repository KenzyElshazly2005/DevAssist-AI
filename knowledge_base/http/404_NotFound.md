---
error_id: http_not_found
title: 404 Not Found
language: HTTP
category: Client Error
severity: Low
difficulty: Beginner

aliases:
  - not found
  - resource not found
  - page not found
  - endpoint not found

tags:
  - http
  - client
  - resource
---

# 404 Not Found

## What is this error?

`404 Not Found` occurs when the server cannot find the requested resource.

---

## When does it occur?

This error appears when the requested URL, page, or API endpoint does not exist on the server.

---

## Why does it happen?

- The URL is incorrect.
- The resource was deleted or moved.
- The API endpoint does not exist.
- The route name is misspelled.

---

## Error Message Example

```text
HTTP/1.1 404 Not Found
```

---

## Example Code

```http
GET /api/users/profilee
```

---

## Step-by-Step Solution

### Step 1

Check the requested URL carefully.

### Step 2

Verify that the API endpoint exists.

### Step 3

Check for spelling mistakes in routes.

### Step 4

Confirm that the resource has not been removed.

---

## Prevention Tips

- Double-check URLs before sending requests.
- Keep API documentation updated.
- Use consistent route naming.
- Test endpoints before deployment.

---

## Related Errors

- 400 Bad Request
- 403 Forbidden

---

## AI Debugging Tips

- Read the complete error message carefully.
- Verify the requested URL or endpoint.
- Check API routes and spelling.
- Confirm that the resource exists on the server.

---

## Official Documentation

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404