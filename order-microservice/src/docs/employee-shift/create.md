# Create Employee Shifts

## Description
Creates multiple employee shift records in bulk. This API is designed for workforce management systems to schedule employee shifts, assign work hours, and manage shift patterns across different schedule groups and departments.

## Full REST URL
POST https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee-shift/create

## Authentication
| Header | Description |
|--------|-------------|
| `x-access-id` | Your assigned Access ID from the auth keys table. |
| `x-client-id` | Your assigned Client ID from the auth keys table |
| `x-client-secret` | Your assigned Client Secret from the auth keys table |
| `Content-Type` | Must be `application/json` |

## Request Body
**Array of shift objects with the following fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `employee_id` | integer | Yes | Unique identifier of the employee |
| `process_id` | integer | Yes | Process identifier for the shift |
| `schedule_group` | string | Yes | Group or team name for scheduling |
| `effective_date` | string | Yes | Date when shift becomes effective (YYYY-MM-DD) |
| `schedule_type` | string | Yes | Type of shift (e.g., N) |
| `schedule_id` | string | Yes | Unique schedule identifier |
| `date_of_work` | string | Yes | Actual work date (YYYY-MM-DD) |
| `workday_id` | string | Yes | Workday identifier (e.g., REGULAR) |
| `scheduled_hours` | number | Yes | Number of hours scheduled |
| `deleted` | boolean | Yes | Flag indicating if record is deleted |

## Example Axios Request
```javascript
const axios = require('axios');

async function createEmployeeShifts() {
  const url = 'https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/employee-shift/create';
  
  const shiftData = [
    {
      "employee_id": 10000096,
      "process_id": 10000780,
      "schedule_group": "SSG",
      "effective_date": "2025-01-05",
      "schedule_type": "N",
      "schedule_id": "SG-NS003",
      "date_of_work": "2025-01-05",
      "workday_id": "REGULAR",
      "scheduled_hours": 8,
      "deleted": "N"
    }
  ];

  const config = {
    method: 'post',
    url: url,
    headers: {
      'x-access-id': '', // (Note: Your assigned Access ID from the auth keys table)
      'x-client-id': '', // (Note: Your assigned Client ID from the auth keys table)
      'x-client-secret': '', // (Note: Your assigned Client Secret from the auth keys table)
      'Content-Type': 'application/json'
    },
    data: shiftData
  };

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
}

createEmployeeShifts();
```

## Success Response
{
    "success": true,
    "message": "create employee shift",
    "data": true
}

## Error Response

## Missing Authentication Token:

{
    "message": "Unauthorized user access"
}