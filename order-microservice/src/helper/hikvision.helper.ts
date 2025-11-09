import { EmployeeRawDoorEventType } from "../types/employee.raw.door.event.type.ts";

/**
 * Maps a single Hikvision door event object to our database model format.
 * Ensures the returned object conforms to EmployeeRawDoorEventType.
 */
export function mapHikvisionDoorEventToDbModel(event: any): EmployeeRawDoorEventType {
  return {
    event_id: event.eventId,
    event_type: event.eventType,
    event_time: event.eventTime,
    person_id: event.personId,
    employee_id: event.employeeId,
    person_name: event.personName,
    person_type: event.personType,
    door_name: event.doorName,
    door_index_code: event.doorIndexCode,
    card_no: event.cardNo,
    check_in_and_out_type: event.checkInAndOutType,
    pic_uri: event.picUri,
    device_time: event.deviceTime,
    reader_name: event.readerName,
  };
}
