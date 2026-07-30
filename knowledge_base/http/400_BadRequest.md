---
error_id: http_bad_request
title: 400 Bad Request
language: HTTP
category: Client Error
severity: Medium
difficulty: Beginner

aliases:
  - bad request
  - invalid request
  - malformed request

tags:
  - http
  - client
  - request
---

# 400 Bad Request

## What is this error?

`400 Bad Request` occurs when the server cannot process a request because it contains invalid or incorrect data.

---

## When does it occur?

This error appears when the client sends a request with invalid syntax, missing information, or incorrect formatting.

---

## Why does it happen?

- The JSON body format is invalid.
- Required parameters are missing.
- The request structure is incorrect.
- User input is not validated before sending the request.

---

## Error Message Example

```text
HTTP/1.1 400 Bad Request
```

---

## Example Code

```http
POST /api/users

{
  "name":
}
```

---

## Step-by-Step Solution

### Step 1

Validate the request body format.

### Step 2

Check that all required parameters are included.

### Step 3

Verify that the JSON syntax is correct.

### Step 4

Test the request using tools like Postman or similar API clients.

---

## Prevention Tips

- Validate user input before sending requests.
- Follow the API documentation.
- Use proper JSON formatting.
- Test API requests before deployment.

---

## Related Errors

- 401 Unauthorized
- 422 Unprocessable Entity

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check the request body and parameters.
- Validate the JSON format.
- Compare the request with the API documentation.

---

## Official Documentation

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400