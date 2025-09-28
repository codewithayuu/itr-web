export interface TimetableEntry {
  time: string;
  subject: string | null;
  room: string | null;
  faculty: string | null;
}

export interface DailySchedule {
  day: string;
  slots: TimetableEntry[];
}

export const timeSlots = [
  "8.00-9.00",
  "9.00-9.50", 
  "9.50-10.40",
  "10.40-11.30",
  "11.30-12.20",
  "12.20-1.10",
  "1.40-2.30",
  "2.30-3.20",
  "3.20-4.10",
  "4.10-5.00"
];

export const timetableData: DailySchedule[] = [
  {
    day: 'MONDAY',
    slots: [
      { time: '8.10-9.50', subject: 'ENGG Graphics Lab', room: '312/314/318', faculty: 'Dr. Ashwani, Mr. Vikas Acharya, Dr. Surbhi Uppdhyay' },
      { time: '9.50-11.30', subject: 'Environmental Studies', room: 'Chemistry Lab', faculty: 'Dr. Namita Johar, Dr. Richa Sharma, Dr. Shivani Aggarwal' },
      { time: '11.30-12.20', subject: 'Physics', room: '333', faculty: 'Dr. Monika Aggarwal' },
      { time: '12.20-1.10', subject: 'Environmental Studies', room: '333', faculty: 'Dr. Namita Johar' },
      { time: '1.10-1.40', subject: 'LUNCH BREAK', room: null, faculty: null }
    ]
  },
  {
    day: 'TUESDAY',
    slots: [
      { time: '8.10-9.50', subject: 'Applied Mathematics-I', room: '511', faculty: 'Dr. Anil Kumar' },
      { time: '9.50-11.30', subject: 'Communication Skills', room: '346', faculty: 'Dr. Shikha Saxena' },
      { time: '11.30-12.20', subject: 'Programming in C', room: '532', faculty: 'Dr. Anu Rathee' },
      { time: '12.20-1.10', subject: 'Library', room: '532', faculty: null },
      { time: '1.10-1.40', subject: 'LUNCH BREAK', room: null, faculty: null }
    ]
  },
  {
    day: 'WEDNESDAY',
    slots: [
      { time: '8.10-9.50', subject: 'NCC/NSS/Sports', room: null, faculty: null },
      { time: '9.50-10.40', subject: 'Physics', room: '333', faculty: 'Dr. Monika Aggarwal' },
      { time: '10.40-11.30', subject: 'Environmental Studies', room: '333', faculty: 'Dr. Namita Johar' },
      { time: '11.30-1.10', subject: 'Programming in C Lab', room: '332A/332B', faculty: 'Dr. Anu Rathee, Dr. Madhukar, Ms. Sakshi Goel' },
      { time: '1.10-1.40', subject: 'LUNCH BREAK', room: null, faculty: null },
      { time: '1.40-2.30', subject: 'Applied Mathematics-I', room: null, faculty: 'Dr. Anil Kumar' },
      { time: '2.30-3.20', subject: 'Manufacturing Process', room: '333', faculty: 'Mr. Harsh Joshi' }
    ]
  },
  {
    day: 'THURSDAY',
    slots: [
      { time: '8.10-9.00', subject: 'NCC/NSS/Sports', room: null, faculty: null },
      { time: '9.00-9.50', subject: 'Programming in C', room: '333', faculty: 'Dr. Anu Rathee' },
      { time: '9.50-10.40', subject: 'Manufacturing Process', room: '333', faculty: 'Mr. Harsh Joshi' },
      { time: '10.40-11.30', subject: 'Physics', room: '333', faculty: 'Dr. Monika Aggarwal' },
      { time: '11.30-12.20', subject: 'Environmental Studies', room: '333', faculty: 'Dr. Namita Johar' },
      { time: '12.20-1.10', subject: 'Applied Mathematics-I', room: null, faculty: 'Dr. Anil Kumar' },
      { time: '1.10-1.40', subject: 'LUNCH BREAK', room: null, faculty: null }
    ]
  },
  {
    day: 'FRIDAY',
    slots: [
      { time: '8.10-9.50', subject: 'NCC/NSS/Sports', room: null, faculty: null },
      { time: '9.50-10.40', subject: 'No Class', room: null, faculty: null },
      { time: '10.40-11.20', subject: 'Library', room: null, faculty: null },
      { time: '11.20-11.30', subject: 'No Class', room: null, faculty: null },
      { time: '11.30-12.20', subject: 'Programming in C', room: '521', faculty: 'Dr. Anu Rathee' },
      { time: '12.20-1.10', subject: 'Manufacturing Process', room: '521', faculty: 'Mr. Harsh Joshi' },
      { time: '1.10-1.40', subject: 'LUNCH BREAK', room: null, faculty: null },
      { time: '1.40-3.20', subject: 'Applied Physics-I Lab', room: '514/515', faculty: 'Dr. Monika Aggarwal, Dr. Ritu Walia' }
    ]
  }
];

// Raw faculty data from the provided JSON
const rawFacultyData = [
  { faculty: "Dr. Ashwani", subject: "ENGG Graphics Lab" },
  { faculty: "Mr. Vikas Acharya", subject: "ENGG Graphics Lab" },
  { faculty: "Dr. Surbhi Uppdhyay", subject: "ENGG Graphics Lab" },
  { faculty: "Dr. Namita Johar", subject: "Environmental Studies" },
  { faculty: "Dr. Richa Sharma", subject: "Environmental Studies" },
  { faculty: "Dr. Shivani Aggarwal", subject: "Environmental Studies" },
  { faculty: "Dr. Monika Aggarwal", subject: "Physics" },
  { faculty: "Dr. Anil Kumar", subject: "Applied Mathematics-I" },
  { faculty: "Dr. Shikha Saxena", subject: "Communication Skills" },
  { faculty: "Dr. Anu Rathee", subject: "Programming in C" },
  { faculty: "Dr. Anu Rathee", subject: "Programming in C Lab" },
  { faculty: "Dr. Madhukar", subject: "Programming in C Lab" },
  { faculty: "Ms. Sakshi Goel", subject: "Programming in C Lab" },
  { faculty: "Mr. Harsh Joshi", subject: "Manufacturing Process" },
  { faculty: "Dr. Monika Aggarwal", subject: "Applied Physics-I Lab" },
  { faculty: "Dr. Ritu Walia", subject: "Applied Physics-I Lab" }
];

// Process the data to group subjects by faculty
export const facultyData = rawFacultyData.reduce((acc, item) => {
  const existingFaculty = acc.find(f => f.name === item.faculty);
  
  if (existingFaculty) {
    if (!existingFaculty.subjects.includes(item.subject)) {
      existingFaculty.subjects.push(item.subject);
    }
  } else {
    acc.push({
      name: item.faculty,
      subjects: [item.subject],
      room: getRoomForFaculty(item.faculty)
    });
  }
  
  return acc;
}, [] as Array<{ name: string; subjects: string[]; room: string }>);

// Helper function to get room numbers for faculty
function getRoomForFaculty(facultyName: string): string {
  const roomMap: { [key: string]: string } = {
    'Dr. Ashwani': '312',
    'Mr. Vikas Acharya': '314',
    'Dr. Surbhi Uppdhyay': '318',
    'Dr. Namita Johar': '333, Chemistry Lab',
    'Dr. Richa Sharma': 'Chemistry Lab',
    'Dr. Shivani Aggarwal': 'Chemistry Lab',
    'Dr. Monika Aggarwal': '333, 514',
    'Dr. Anil Kumar': '511',
    'Dr. Shikha Saxena': '346',
    'Dr. Anu Rathee': '532, 332A, 333, 521',
    'Dr. Madhukar': '332B',
    'Ms. Sakshi Goel': '332A',
    'Mr. Harsh Joshi': '333, 521',
    'Dr. Ritu Walia': '515'
  };
  
  return roomMap[facultyName] || 'TBD';
}