
## Description
Fetches employee details using their registered email address. This API is designed for HR systems, internal tools, and workflow applications to retrieve employee information, reporting hierarchy, and departmental details for verification and processing purposes.


## Full REST URL:

[GET https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee/find-one-by-email/{email}](https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee/find-one-by-email/manikandan.b@seatrium.com)

## Authentication
| Header | Description |
|--------|-------------|
| `x-access-id` | Your assigned Access ID from the auth keys table. |
| `x-client-id` | Your assigned Client ID from the auth keys table |
| `x-client-secret` | Your assigned Client Secret from the auth keys table |
| `Content-Type` | Must be `application/json` |

## Response:
```json
{
    "success": true,
    "message": "get employee by an email",
    "data": {
        "employee_id": 1006416,
        "employee_name": "Manikandan Balasubramanian",
        "employee_email": "Manikandan.B@seatrium.com",
        "manager_email": "WeyLii.Lee@seatrium.com",
        "bu_hod_email": "shihhsien.lim@seatrium.com",
        "department": "IT Digital"
    }
}

