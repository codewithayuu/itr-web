export interface Faculty {
  name: string;
  designation: string;
  department: string;
  email?: string;
  phone?: string;
  subjects: string[];
  image?: string;
}

export const faculty: Faculty[] = [
  {
    name: "Dr. Ashwani Acharya",
    designation: "Professor",
    department: "Computer Science",
    subjects: ["Engineering Graphics"],
    email: "ashwani.acharya@mait.ac.in"
  },
  {
    name: "Mr. Vikas",
    designation: "Assistant Professor",
    department: "Computer Science",
    subjects: ["Engineering Graphics"],
    email: "vikas@mait.ac.in"
  },
  {
    name: "Dr. Namita Johar",
    designation: "Professor",
    department: "Environmental Studies",
    subjects: ["Environmental Studies"],
    email: "namita.johar@mait.ac.in"
  },
  {
    name: "Dr. Richa Sharma",
    designation: "Professor",
    department: "Physics",
    subjects: ["Physics"],
    email: "richa.sharma@mait.ac.in"
  },
  {
    name: "Dr. Monika Aggarwal",
    designation: "Professor",
    department: "Computer Science",
    subjects: ["Computer Science"],
    email: "monika.aggarwal@mait.ac.in"
  },
  {
    name: "Dr. Surabhi Garg",
    designation: "Professor",
    department: "Computer Science",
    subjects: ["Engineering Graphics"],
    email: "surabhi.garg@mait.ac.in"
  },
  {
    name: "Dr. Shivani Aggarwal",
    designation: "Professor",
    department: "Computer Science",
    subjects: ["Engineering Graphics"],
    email: "shivani.aggarwal@mait.ac.in"
  },
  {
    name: "Dr. Anil Kumar",
    designation: "Professor",
    department: "Mathematics",
    subjects: ["Applied Mathematics"],
    email: "anil.kumar@mait.ac.in"
  },
  {
    name: "Dr. Shikha Saxena",
    designation: "Professor",
    department: "Communication",
    subjects: ["Communication Skills"],
    email: "shikha.saxena@mait.ac.in"
  },
  {
    name: "Dr. Anu Rathee",
    designation: "Professor",
    department: "Computer Science",
    subjects: ["Programming in C"],
    email: "anu.rathee@mait.ac.in"
  }
];


