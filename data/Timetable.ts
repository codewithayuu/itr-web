export interface ClassSlot {
  time: string;
  subject: string;
  room: string;
  instructor: string;
  group?: string;
  type: 'class' | 'break' | 'no-class';
}

export interface DaySchedule {
  day: string;
  slots: ClassSlot[];
}

export const timetable: DaySchedule[] = [
  {
    day: "MONDAY",
    slots: [
      {
        time: "8.00-9.00",
        subject: "ENGG Graphics LAB",
        room: "312",
        instructor: "Dr. Ashwani Acharya",
        type: "class"
      },
      {
        time: "9.00-9.50",
        subject: "ENGG Graphics LAB",
        room: "314",
        instructor: "Mr. Vikas",
        type: "class"
      },
      {
        time: "9.50-10.40",
        subject: "Env Studies Lab-321",
        room: "R1",
        instructor: "Dr. Namita Johar",
        type: "class"
      },
      {
        time: "10.40-11.30",
        subject: "Env Studies Lab-321",
        room: "R1",
        instructor: "Dr. Namita Johar",
        type: "class"
      },
      {
        time: "11.30-12.20",
        subject: "Physics",
        room: "R2",
        instructor: "Dr. Richa Sharma",
        type: "class"
      },
      {
        time: "12.20-1.10",
        subject: "Computer Science",
        room: "333",
        instructor: "Dr. Monika Aggarwal",
        type: "class"
      },
      {
        time: "1.40-2.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "2.30-3.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "3.20-4.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "4.10-5.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      }
    ]
  },
  {
    day: "TUESDAY",
    slots: [
      {
        time: "8.00-9.00",
        subject: "ENGG Graphics-I Lab",
        room: "318",
        instructor: "Dr. Surabhi Garg | Dr. Shivani Aggarwal",
        group: "R3",
        type: "class"
      },
      {
        time: "9.00-9.50",
        subject: "ENGG Graphics-I Lab",
        room: "318",
        instructor: "Dr. Surabhi Garg | Dr. Shivani Aggarwal",
        group: "R3",
        type: "class"
      },
      {
        time: "9.50-10.40",
        subject: "App. Maths-I",
        room: "511",
        instructor: "Dr. Anil Kumar",
        type: "class"
      },
      {
        time: "10.40-11.30",
        subject: "Comm. Skills",
        room: "346",
        instructor: "Dr. Shikha Saxena",
        type: "class"
      },
      {
        time: "11.30-12.20",
        subject: "Comm. Skills",
        room: "346",
        instructor: "Dr. Shikha Saxena",
        type: "class"
      },
      {
        time: "12.20-1.10",
        subject: "Prog. In C",
        room: "532",
        instructor: "Dr. Anu Rathee",
        type: "class"
      },
      {
        time: "1.40-2.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "2.30-3.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "3.20-4.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "4.10-5.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      }
    ]
  },
  {
    day: "WEDNESDAY",
    slots: [
      {
        time: "8.00-9.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "9.00-9.50",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "9.50-10.40",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "10.40-11.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "11.30-12.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "12.20-1.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "1.40-2.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "2.30-3.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "3.20-4.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "4.10-5.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      }
    ]
  },
  {
    day: "THURSDAY",
    slots: [
      {
        time: "8.00-9.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "9.00-9.50",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "9.50-10.40",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "10.40-11.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "11.30-12.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "12.20-1.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "1.40-2.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "2.30-3.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "3.20-4.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "4.10-5.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      }
    ]
  },
  {
    day: "FRIDAY",
    slots: [
      {
        time: "8.00-9.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "9.00-9.50",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "9.50-10.40",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "10.40-11.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "11.30-12.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "12.20-1.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "1.40-2.30",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "2.30-3.20",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "3.20-4.10",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      },
      {
        time: "4.10-5.00",
        subject: "No Class",
        room: "",
        instructor: "",
        type: "no-class"
      }
    ]
  }
];


