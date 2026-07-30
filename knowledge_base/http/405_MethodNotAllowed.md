---
error_id: http_method_not_allowed
title: 405 Method Not Allowed
language: HTTP
category: Client Error
severity: Medium
difficulty: Beginner

aliases:
  - method not allowed
  - unsupported http method
  - invalid request method

tags:
  - http
  - client
  - methods
---

# 405 Method Not Allowed

## What is this error?

`405 Method Not Allowed` occurs when the server recognizes the requested resource but does not support the HTTP method used.

---

## When does it occur?

This error appears when a client sends a request using a method that is not allowed for a specific endpoint.

---

## Why does it happen?

- Using the wrong HTTP method.
- The endpoint only supports specific methods.
- API documentation was not followed.
- Server configuration does not allow the method.

---

## Error Message Example

```text
HTTP/1.1 405 Method Not Allowed
```

---

## Example Code

```http
POST /api/users
```

Endpoint only supports:

```http
GET /api/users
```

---

## Step-by-Step Solution

### Step 1

Check the API documentation.

### Step 2

Verify the allowed HTTP methods for the endpoint.

### Step 3

Change the request method.

Example:

```http
GET /api/users
```

instead of:

```http
POST /api/users
```

---

## Prevention Tips

- Follow API documentation.
- Verify HTTP methods before sending requests.
- Design clear API endpoints.

---

## Related Errors

- 400 Bad Request
- 404 Not Found

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check the HTTP method being used.
- Verify the endpoint requirements.
- Compare the request with the API documentation.

---

## Official Documentation

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405