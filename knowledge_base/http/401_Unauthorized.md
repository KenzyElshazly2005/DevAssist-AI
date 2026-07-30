---
error_id: http_unauthorized
title: 401 Unauthorized
language: HTTP
category: Client Error
severity: High
difficulty: Beginner

aliases:
  - unauthorized
  - authentication required
  - invalid token

tags:
  - http
  - authentication
  - api
---

# 401 Unauthorized

## What is this error?

`401 Unauthorized` occurs when authentication is required but the request does not provide valid credentials.

---

## When does it occur?

This error appears when accessing a protected resource without a valid authentication token or login information.

---

## Why does it happen?

- Authentication token is missing.
- Access token has expired.
- Credentials are incorrect.
- Authentication headers are missing.

---

## Error Message Example

```text
HTTP/1.1 401 Unauthorized
```

---

## Example Code

```http
GET /api/profile

Authorization: Bearer invalid_token
```

---

## Step-by-Step Solution

### Step 1

Verify that authentication credentials are provided.

### Step 2

Refresh the expired access token.

### Step 3

Check the API authentication headers.

### Step 4

Login again if necessary.

---

## Prevention Tips

- Always send valid authentication tokens.
- Handle token expiration correctly.
- Store credentials securely.
- Follow authentication requirements.

---

## Related Errors

- 403 Forbidden
- 400 Bad Request

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check the authentication header.
- Verify that the token is valid and not expired.
- Confirm the required authentication method.

---

## Official Documentation

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401