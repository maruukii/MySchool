export const Headmastermenu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Operations",
      listItems: [
        {
          id: 1,
          title: "Classrooms",
          url: "classrooms",
          icon: "classroom-svgrepo-com.svg",
        },
        {
          id: 2,
          title: "Classes",
          url: "classes",
          icon: "classroom-teacher-svgrepo-com.svg",
        },
        {
          id: 3,
          title: "Timetables",
          url: "timetable",
          icon: "calendar-svgrepo-com.svg",
        },
        {
          id: 4,
          title: "Notifications",
          url: "notifications",
          icon: "notifications.svg",
        },
      ],
    },
    
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Complaint",
          url: "",
          icon: "customer-problem-svgrepo-com.svg",
        },
      ],
    },
    
  ];
  export const Supervisormenu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "profil",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Operations",
      listItems: [
        {
          id: 1,
          title: "Alumnis",
          url: "alumnis",
          icon: "student-head-svgrepo-com.svg",
        },
        {
          id: 2,
          title: "My Timetable",
          url: "timetable",
          icon: "calendar-svgrepo-com.svg",
        },
        {
          id: 4,
          title: "Notifications",
          url: "notifications",
          icon: "notifications.svg",
        },
      ],
    },
    
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Complaint",
          url: "",
          icon: "customer-problem-svgrepo-com.svg",
        },
      ],
    },
    
  ];
  export const Teachermenu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Operations",
      listItems: [
        {
          id: 1,
          title: "Class Register",
          url: "registres",
          icon: "register-svgrepo-com.svg",
        },
        {
          id: 2,
          title: "Grades",
          url: "grades",
          icon: "grade-a-plus-svgrepo-com.svg",
        },
        {
          id: 3,
          title: "My Timetable",
          url: "timetables",
          icon: "calendar-svgrepo-com.svg",
        },
        {
          id: 4,
          title: "Notifications",
          url: "notifications",
          icon: "notifications.svg",
        },
      ],
    },
    
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Complaint",
          url: "",
          icon: "customer-problem-svgrepo-com.svg",
        },
      ],
    },
    
  ];
  export const Adminmenu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "profil/1",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Operations",
      listItems: [
        {
          id: 1,
          title: "Workspaces",
          url: "workspaces",
          icon: "workspace-svgrepo-com.svg",
        },
        {
          id: 2,
          title: "Users",
          url: "users",
          icon: "users-svgrepo-com.svg",
        },
        {
          id: 3,
          title: "Subjects",
          url: "subjects",
          icon: "content-svgrepo-com.svg",
        },
        {
          id: 4,
          title: "Complaints",
          url: "complaints",
          icon: "customer-problem-svgrepo-com.svg",
        },
        {
          id: 4,
          title: "Audit log",
          url: "audits",
          icon: "audit-report-svgrepo-com.svg",
        },
      ],
    },
    
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "",
          icon: "setting.svg",
        }
      ],
    },
    
  ];
  export const singleUser = {
    id: 1,
    title: "Jane Doe",
    img: "../../public/img.svg",
    info: {
      CIN: 14606600,
      fullname: "Jane Doe",
      email: "janendoe@gmail.com",
      phone: "20 526 895",
      status: "active",
      workspace:" Not Difined",
    },
    
  };
  export const userRows = [
    {
      id: 1,
      
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      cin:14606601,
      lastName: "Hubbard",
      firstName: "Eula",
      phone: "123 456 789",
      job:"Headmaster",
      createdAt: "01.02.2023",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cin:14606602,
      lastName: "Manning",
      firstName: "Stella",
      phone: "123 456 789",
      job:"Supervisor",
      createdAt: "01.02.2023",
      workspace:"Lycée Mahdia"

    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cin:14606603,
      lastName: "Greer",
      firstName: "Mary",
      phone: "123 456 789",
      job:"Supervisor",
      createdAt: "01.02.2023",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cin:14606604,
      lastName: "Williamson",
      firstName: "Mildred",
      phone: "123 456 789",
      job:"Supervisor",
      createdAt: "01.02.2023"
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cin:14606605,
      lastName: "Gross",
      firstName: "Jose",
      phone: "123 456 789",
      job:"Teacher",
      createdAt: "01.02.2023",
      verified:true,
      workspace:"Lycée Ksour Essef"
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];