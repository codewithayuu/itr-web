export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: 'class' | 'events' | 'lab' | 'group' | 'activities';
  tags: string[];
}

export const photos: Photo[] = [
  {
    id: "1",
    title: "Class Group Photo",
    description: "Official class group photo of MAIT IT-R batch",
    imageUrl: "/class-photo.jpg",
    date: "2024-01-15",
    category: "group",
    tags: ["class", "group", "official"]
  },
  {
    id: "2",
    title: "Lab Session - Programming in C",
    description: "Students working on C programming assignments in the computer lab",
    imageUrl: "/lab-session.jpg",
    date: "2024-01-10",
    category: "lab",
    tags: ["programming", "lab", "coding"]
  },
  {
    id: "3",
    title: "Engineering Graphics Workshop",
    description: "Students learning technical drawing and CAD software",
    imageUrl: "/graphics-workshop.jpg",
    date: "2024-01-08",
    category: "lab",
    tags: ["engineering", "graphics", "workshop"]
  },
  {
    id: "4",
    title: "Environmental Studies Field Trip",
    description: "Class visit to environmental research center",
    imageUrl: "/field-trip.jpg",
    date: "2024-01-05",
    category: "events",
    tags: ["environment", "field-trip", "learning"]
  },
  {
    id: "5",
    title: "Physics Lab Experiments",
    description: "Students conducting physics experiments in the laboratory",
    imageUrl: "/physics-lab.jpg",
    date: "2024-01-03",
    category: "lab",
    tags: ["physics", "experiments", "lab"]
  },
  {
    id: "6",
    title: "Communication Skills Presentation",
    description: "Students presenting their communication skills projects",
    imageUrl: "/presentation.jpg",
    date: "2024-01-01",
    category: "activities",
    tags: ["presentation", "communication", "skills"]
  },
  {
    id: "7",
    title: "Mathematics Problem Solving Session",
    description: "Group study session for Applied Mathematics",
    imageUrl: "/math-session.jpg",
    date: "2023-12-28",
    category: "activities",
    tags: ["mathematics", "study", "group"]
  },
  {
    id: "8",
    title: "Campus Tour",
    description: "New students exploring the MAIT campus facilities",
    imageUrl: "/campus-tour.jpg",
    date: "2023-12-25",
    category: "events",
    tags: ["campus", "tour", "facilities"]
  }
];


