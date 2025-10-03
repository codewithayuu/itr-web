export interface Update {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'announcement' | 'event' | 'academic' | 'general';
  priority: 'high' | 'medium' | 'low';
  author: string;
}

export const updates: Update[] = [
  {
    id: "1",
    title: "Welcome to MAIT IT-R Class Website",
    content: "Welcome to the official website for MAIT IT-R class. Here you can find all the latest updates, timetable, faculty information, and student directory.",
    date: "2024-01-15",
    type: "announcement",
    priority: "high",
    author: "Class Representative"
  },
  {
    id: "2",
    title: "Mid-Term Examination Schedule",
    content: "Mid-term examinations will be conducted from March 15-25, 2024. Please check the detailed schedule and prepare accordingly.",
    date: "2024-01-10",
    type: "academic",
    priority: "high",
    author: "Academic Office"
  },
  {
    id: "3",
    title: "Lab Assignment Submission",
    content: "All lab assignments for Engineering Graphics and Programming in C must be submitted by February 28, 2024. Late submissions will not be accepted.",
    date: "2024-01-08",
    type: "academic",
    priority: "medium",
    author: "Dr. Anu Rathee"
  },
  {
    id: "4",
    title: "Class Group Photo Session",
    content: "We will be having a class group photo session on February 20, 2024 at 2:00 PM in the main auditorium. All students are requested to attend.",
    date: "2024-01-05",
    type: "event",
    priority: "medium",
    author: "Class Representative"
  },
  {
    id: "5",
    title: "Library Hours Extended",
    content: "The library will now remain open until 8:00 PM on weekdays to help students with their studies and research work.",
    date: "2024-01-03",
    type: "general",
    priority: "low",
    author: "Library Administration"
  },
  {
    id: "6",
    title: "Sports Week Registration",
    content: "Registration for the annual sports week is now open. Students can register for various events including cricket, football, and athletics.",
    date: "2024-01-01",
    type: "event",
    priority: "medium",
    author: "Sports Committee"
  }
];


