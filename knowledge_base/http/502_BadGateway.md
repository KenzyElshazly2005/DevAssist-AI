---
error_id: http_bad_gateway
title: 502 Bad Gateway
language: HTTP
category: Server Error
severity: High
difficulty: Intermediate

aliases:
  - bad gateway
  - invalid upstream response
  - gateway error

tags:
  - http
  - server
  - proxy
---

# 502 Bad Gateway

## What is this error?

`502 Bad Gateway` occurs when a gateway or proxy server receives an invalid response from another server.

---

## When does it occur?

This error appears when a server acting as an intermediary cannot communicate correctly with the upstream server.

---

## Why does it happen?

- The upstream server is unavailable.
- The backend service crashed.
- Network communication failed.
- Proxy configuration is incorrect.

---

## Error Message Example

```text
HTTP/1.1 502 Bad Gateway
```

---

## Example Code

```http
GET /api/service
```

---

## Step-by-Step Solution

### Step 1

Check whether the upstream server is running.

### Step 2

Verify network connectivity between servers.

### Step 3

Review proxy or gateway configuration.

### Step 4

Restart failed services if necessary.

---

## Prevention Tips

- Monitor backend services.
- Configure proxies correctly.
- Maintain service health checks.
- Handle server failures gracefully.

---

## Related Errors

- 500 Internal Server Error
- 503 Service Unavailable

---

## AI Debugging Tips

- Read the complete error message carefully.
- Check the status of upstream services.
- Review proxy and gateway logs.
- Verify network communication between servers.

---

## Official Documentation

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502