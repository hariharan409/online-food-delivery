# Find All Devices

## Description
Retrieves a comprehensive list of all devices across all yards and device types. This API is designed for facility management and security systems to access complete device information including ANPR cameras, clocking devices, office access controls, and wide format readers for monitoring and access control purposes.

## Full REST URL

GET https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/fr-device/find-all

## Authentication
| Header | Description |
|--------|-------------|
| `x-access-id` | Your assigned Access ID from the auth keys table. |
| `x-client-id` | Your assigned Client ID from the auth keys table |
| `x-client-secret` | Your assigned Client Secret from the auth keys table |
| `Content-Type` | Must be `application/json` |

## Parameters
*No parameters required - returns all devices*

##Response:
```json
{
    "success": true,
    "message": "get device by an device type",
    "data": [
        {
            "device_id": 1,
            "device_name": "ANPR AY MG IN",
            "door_id": 2483,
            "device_type": "ANPR",
            "yard": "ADMIRALTY YARD"
        },
        {
            "device_id": 2,
            "device_name": "ANPR AY MG OUT",
            "door_id": 2378,
            "device_type": "ANPR",
            "yard": "ADMIRALTY YARD"
        }
        // ... (127 devices total as shown in the full response)
    ]
}