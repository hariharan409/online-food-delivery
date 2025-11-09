
# Find Employee Shift by Employee ID

## Description
Retrieves shift schedule details for a specific employee using their employee ID. This API is designed for workforce management systems to access employee shift information, schedules, and work hours for planning and attendance tracking purposes.

## Full REST URL

GET https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee-shift/find-one-by-employee-id/{employee_id}

## Authentication
| Header | Description |
|--------|-------------|
| `x-access-id` | Your assigned Access ID from the auth keys table. |
| `x-client-id` | Your assigned Client ID from the auth keys table |
| `x-client-secret` | Your assigned Client Secret from the auth keys table |
| `Content-Type` | Must be `application/json` |

## Parameters
**URL Path Parameter**
- `{employee_id}` (string) - Unique identifier of the employee

**Example with actual employee ID:**

https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee-shift/find-one-by-employee-id/10000096

## Response:
```json
{
    "success": true,
    "message": "find one by employee id",
    "data": {
         "10000096": {
            "start": "19:00:00",
            "end": "04:00:00"
        }
    }
}