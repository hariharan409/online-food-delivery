# Find All Devices by Device Type

## Description
Retrieves a list of all devices filtered by specific device type. This API is designed for facility management systems to access device information, locations, and configurations for monitoring and maintenance purposes.

## Full REST URL
GET https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/fr-device/find-all-by-device-type/{device_type}

## Authentication
| Header | Description |
|--------|-------------|
| `x-access-id` | Your assigned Access ID from the auth keys table. |
| `x-client-id` | Your assigned Client ID from the auth keys table |
| `x-client-secret` | Your assigned Client Secret from the auth keys table |
| `Content-Type` | Must be `application/json` |

## Parameters
**URL Path Parameter**
- `{device_type}` (string) - Type of device to filter (e.g., ANPR)

**Example with actual device type:**
https://assetcaredemo.seatrium.com/opscare/api-seatrium-workforce/fr-device/find-all-by-device-type/ANPR

## Response:
```json
{
    "success": true,
    "message": "get devices by an device type",
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
        },
        {
            "device_id": 3,
            "device_name": "ANPR BY MG IN",
            "door_id": 2408,
            "device_type": "ANPR",
            "yard": "BENOI YARD"
        },
        {
            "device_id": 4,
            "device_name": "ANPR BY MG OUT",
            "door_id": 2414,
            "device_type": "ANPR",
            "yard": "BENOI YARD"
        },
        {
            "device_id": 5,
            "device_name": "ANPR CY",
            "door_id": 2471,
            "device_type": "ANPR",
            "yard": "CRESENT YARD"
        },
        {
            "device_id": 6,
            "device_name": "ANPR PY MG IN",
            "door_id": 2361,
            "device_type": "ANPR",
            "yard": "PIONEER YARD"
        },
        {
            "device_id": 7,
            "device_name": "ANPR PY MG OUT",
            "door_id": 2367,
            "device_type": "ANPR",
            "yard": "PIONEER YARD"
        },
        {
            "device_id": 8,
            "device_name": "ANPR TBY BTW GATE 1 & 2 OUT",
            "door_id": 2465,
            "device_type": "ANPR",
            "yard": "TUAS BOULEVARD YARD"
        },
        {
            "device_id": 9,
            "device_name": "ANPR TBY CP IN",
            "door_id": 2453,
            "device_type": "ANPR",
            "yard": "TUAS BOULEVARD YARD"
        },
        {
            "device_id": 10,
            "device_name": "ANPR TBY GATE 2 IN",
            "door_id": 2459,
            "device_type": "ANPR",
            "yard": "TUAS BOULEVARD YARD"
        },
        {
            "device_id": 11,
            "device_name": "ANPR TY MG IN",
            "door_id": 2447,
            "device_type": "ANPR",
            "yard": "TUAS YARD"
        },
        {
            "device_id": 12,
            "device_name": "ANPR TY MG OUT",
            "door_id": 2441,
            "device_type": "ANPR",
            "yard": "TUAS YARD"
        }
    ]
}