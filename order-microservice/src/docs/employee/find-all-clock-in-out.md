# Employee Clock In/Out API

## Description
| Description |
|-------------|
| Fetches employee clock-in and clock-out events between a specified start time and end time. This API is designed for workforce management, attendance tracking, and reporting systems to retrieve employee punch details, including date, time, device, location, and remarks. Supports pagination to handle large datasets efficiently. |

## Full REST URL
| Method | URL |
|--------|-----|
| POST   | [https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee/find-all-clock-in-out](https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee/find-all-clock-in-out) |

## Authentication
| Header | Description |
|--------|-------------|
| `x-access-id` | Your assigned Access ID from the auth keys table. |
| `x-client-id` | Your assigned Client ID from the auth keys table |
| `x-client-secret` | Your assigned Client Secret from the auth keys table |
| `Content-Type` | Must be `application/json` |

## Request Body
| Field | Type | Description |
|-------|------|-------------|
| `startTime` | string (ISO 8601) | Start of the time range. Must include Singapore timezone `+08:00`. |
| `endTime` | string (ISO 8601) | End of the time range. Must include Singapore timezone `+08:00`. |
| `requestPageNo` | integer | Page number for pagination, starting from `1`. |

### Example Request Body

```json 
{ 
  "startTime": "2025-11-04T06:00:00+08:00", 
  "endTime": "2025-11-04T07:00:00+08:00", 
  "requestPageNo": 2 
}
```


## Response

```json
{
  "success": true,
  "message": "get all employee clock in and out",
  "data": {
    "hasMore": true,
    "punches": [
      {
        "employee_id": "5010548",
        "punch_date": "2025-11-04",
        "punch_time": "05:00:06",
        "remarks": "OUT",
        "device_id": "PZ1-NTS-FR02 2795",
        "location": "PIONEER YARD"
      },
      {
        "employee_id": "5029528",
        "punch_date": "2025-11-04",
        "punch_time": "06:08:02",
        "remarks": "IN",
        "device_id": "PZ1-NTS-FR04 2797",
        "location": "PIONEER YARD"
      },
      {
        "employee_id": "5025002",
        "punch_date": "2025-11-04",
        "punch_time": "06:08:03",
        "remarks": "IN",
        "device_id": "PZ1-NTS-FR01 2664",
        "location": "PIONEER YARD"
      }
      // ...additional records depending on pageSize
    ]
  }
}
```

## Error Response
```json
### 🔴 400 Bad Request — Missing Authentication Headers
{
  "success": false,
  "message": "Missing authentication headers",
  "data": null
}

### 🔴 400 Bad Request — Invalid Request Body
{
  "success": false,
  "message": "startTime, endTime and requestPageNo are required",
  "data": null
}

### 🔴 401 Unauthorized — Invalid Access ID or Client ID
{
  "success": false,
  "message": "Invalid access ID or client ID",
  "data": null
}

### 🔴 401 Unauthorized — Invalid Client Secret
{
  "success": false,
  "message": "Invalid client secret",
  "data": null
}

### 🔴 403 Forbidden — Auth Key Not Active
{
  "success": false,
  "message": "Auth key is inactive/expired/revoked/rotated",
  "data": null
}

### 🔴 500 Internal Server Error
{
  "success": false,
  "message": "Internal Server Error",
  "data": null
}
```

## Pagination Notes
| Feature | Description |
|---------|-------------|
| Page size | Default 10 records per page. |
| `requestPageNo` | Use to navigate pages. Starts from `1`. |
| `hasMore` | If `true`, indicates additional pages are available. |