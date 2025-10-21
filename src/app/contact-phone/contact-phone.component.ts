import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-phone',
  imports: [],
  templateUrl: './contact-phone.component.html',
  styleUrl: './contact-phone.component.css'
})
export class ContactPhoneComponent {
  fields: string[] = [
    "หมายเลข",
    "ความสัมพันธ์",
    "ข้อมูลการโทร",
    "SMS",
    "บันทึกโดย",
    "วันเวลาทำงาน",
    "สถานะ",
    "วันเวลารับบันทึก"
  ];
  contactList = [
    {
      contact_number: '08-1234-5678',
      relationship: 'ซ*',
      call_info: 'ตรง/ไม่ซ้ำ',
      sms_stat: 1,
      recorded_by: '93486',
      work_datetime: '2025-10-21T09:30:00+07:00',
      status: 'ซ.',
      received_datetime: '2025-10-21T09:45:00+07:00'
    },
    {
      contact_number: '08-9999-9999',
      relationship: 'พ่อซ.ชื่อสุกร',
      call_info: 'สายไม่ได้รับ',
      sms_stat: 0,
      recorded_by: '93487',
      work_datetime: '2025-10-21T10:00:00+07:00',
      status: 'ออ',
      received_datetime: '2025-10-21T10:10:00+07:00'
    },
    {
      contact_number: '09-8123-4410',
      relationship: 'แฟนซ.ชื่อหมู',
      call_info: 'ตรง อ้างอิงได้',
      sms_stat: 0,
      recorded_by: '93487',
      work_datetime: '2025-10-21T10:00:00+07:00',
      status: 'ออ',
      received_datetime: '2025-10-21T10:10:00+07:00'
    },
    {
      contact_number: '0-2022-8888',
      relationship: 'ทำงานซ.',
      call_info: 'ตรง อ้างอิงได้',
      sms_stat: 0,
      recorded_by: '93487',
      work_datetime: '2025-10-21T10:00:00+07:00',
      status: 'ออ',
      received_datetime: '2025-10-21T10:10:00+07:00'
    },
    {
      contact_number: 'LINE',
      relationship: '08-1234-5678',
      call_info: '08-1234-5678',
      sms_stat: 0,
      recorded_by: '93487',
      work_datetime: '2025-10-21T10:00:00+07:00',
      status: 'ออ',
      received_datetime: '2025-10-21T10:10:00+07:00'
    },
    {
      contact_number: 'EMAIL',
      relationship: 'testgroup@gmail.com',
      call_info: 'testgroup@gmail.com',
      sms_stat: 0,
      recorded_by: '93487',
      work_datetime: '2025-10-21T10:00:00+07:00',
      status: 'ออ',
      received_datetime: '2025-10-21T10:10:00+07:00'
    }
  ];
  
  
}
