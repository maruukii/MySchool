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
          icon: "door-open-svgrepo-com.svg",
        },
        {
          id: 2,
          title: "Classes",
          url: "classes",
          icon: "college-classroom-svgrepo-com.svg",
        },{
          id: 3,
          title: "Teaching",
          url: "",
          icon: "classroom-teacher-svgrepo-com.svg",
        },
        {
          id: 4,
          title: "Timetables",
          url: "",
          icon: "calendar-svgrepo-com.svg",
        },
        {
          id: 5,
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
          title: "Alumni Grades",
          url: "alumnigrade",
          icon: "grade-a-plus-svgrepo-com.svg",
        },
        {
          id: 3,
          title: "Notifications",
          url: "notifications",
          icon: "notifications.svg",
        },
      ],
    },
    
    {
      id: 3,
      title: "Maintenance",
      listItems: [
        
        {
          id: 1,
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
          url: "",
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
      id: 3,
      title: "Maintenance",
      listItems: [
        
        {
          id: 1,
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
          id: 5,
          title: "Audit log",
          url: "audits",
          icon: "audit-report-svgrepo-com.svg",
        },
      ],
    },
    
    {
      id: 3,
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
  export const workspaces=[
    {id:1,
      code:"ksouressef1",
      name:"Lycée ksour Essef",
      users:3
    },
    {
      id:2,
      code:"ksouressef2",
    name:"Lycée Aboulkacem chebbi",
    users:0},
    {id:3,
      code:"mahdia1",
    name:"Lycée Technique",
    users:5},
    {id:4,
      code:"mahdia2",
    name:"Lycée mixte",
    users:6}
    ,
    {id:5,
      code:"djerba",
    name:"Lycée Djerba",
    users:1},
    {id:6,
      code:"sousse1",
    name:"Lycée Sahloul 1",
    users:25}
    ,
    {id:7,
      code:"sousse4",
    name:"Lycée Sahloul 4",
    users:10}
  ]
  export const subjects=[
    {id:1,
      code:"8588",
      name:"Math",
      level:"First Level",
      spec:"No specialty",
      coef:3,
      coefDC:1,
      coefDS:2
    },
    {
      id:2,
      code:"8580",
      name:"Physics",
      level:"First Level",
      spec:"No specialty",
      coef:4,
      coefDC:1,
      coefTP:1.5,
      coefDS:2},
    {id:3,
      code:"8570",
      name:"Arabic",
      level:"First Level",
      spec:"No specialty",
      coef:1,
      coefDC:1,
      coefDS:2},
    {id:4,
      code:"8480",
      name:"Computer Science",
      level:"Fourth Level",
      spec:"Computer Science",
      coef:4,
      coefTP:3,
      coefDS:1.5}
    ,
    {id:5,
      code:"8101",
      name:"French",
      level:"First Level",
      spec:"No specialty",
      coef:2,
      coefDC:1,
      coefDS:2},
    {id:6,
      code:"5584",
      name:"Science",
      level:"Third Level",
      spec:"Fundamental Science",
      coef:4,
      coefDC:1,
      coefDS:2}
    ,
    {id:7,
      code:"8588",
      name:"Math",
      level:"Second Level",
      spec:"Maths",
      coef:5,
      coefDC:1.5,
      coefDS:3}
  ]
  export const barChartBoxWork = {
    title: "Total users per Workspace",
    color: "#702963",
    dataKey: "users",
    chartData: [
      {
        id:1,
        name: "ksour1",
        users: 120,
      },
      {
        id:2,
        name: "ksour2",
        users: 40,
      },
      {
        id:3,
        name: "sahloul1",
        users: 55,
      },
      {id:4,
        name: "mahdia2",
        users: 70,
      },
      {id:5,
        name: "sfax4",
        users: 112,
      },
      {id:6,
        name: "sfax1",
        users: 177,
      },
      {id:7,
        name: "sahlou2",
        users: 215,
      },
    ],
  };
  export const barChartBoxAb = {
    title: "Total Absence per day",
    color: "#FF8042",
    dataKey: "absence",
    chartData: [
      
      {
        id:2,
        name: "Mon",
        absence: 25,
      },
      {
        id:3,
        name: "Tue",
        absence: 5,
      },
      {id:4,
        name: "Wed",
        absence: 70,
      },
      {id:5,
        name: "Thu",
        absence: 35,
      },
      {id:6,
        name: "Fri",
        absence: 10,
      },
      {id:7,
        name: "Sat",
        absence: 80,
      },
    ],
  };
  export const barChartBoxVisit = {
    title: "Total Visit per day",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        id:1,
        name: "Sun",
        visit: 4000,
      },
      {
        id:2,
        name: "Mon",
        visit: 3000,
      },
      {
        id:3,
        name: "Tue",
        visit: 2000,
      },
      {id:4,
        name: "Wed",
        visit: 2780,
      },
      {id:5,
        name: "Thu",
        visit: 1890,
      },
      {id:6,
        name: "Fri",
        visit: 2390,
      },
      {id:7,
        name: "Sat",
        visit: 3490,
      },
    ],
  };
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "1200",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 25 },
      { name: "Mon", users: 124 },
      { name: "Tue", users: 400 },
      { name: "Wed", users: 600 },
      { name: "Thu", users: 750 },
      { name: "Fri", users: 1100 },
      { name: "Sat", users: 1200 },
    ],
  };
  export const chartBoxAlu = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Alumnis",
    number: "1501",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 25 },
      { name: "Mon", users: 124 },
      { name: "Tue", users: 400 },
      { name: "Wed", users: 600 },
      { name: "Thu", users: 750 },
      { name: "Fri", users: 1100 },
      { name: "Sat", users: 1200 },
    ],
  };
  export const chartBoxAluAb = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Alumnis absence",
    number: "450",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 25 },
      { name: "Mon", users: 124 },
      { name: "Tue", users: 400 },
      { name: "Wed", users: 600 },
      { name: "Thu", users: 750 },
      { name: "Fri", users: 1100 },
      { name: "Sat", users: 1200 },
    ],
  };
  export const chartBoxHead = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Headmasters",
    number: "160",
    dataKey: "users",
  };
  export const chartBoxSup = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Supervisors",
    number: "340",
    dataKey: "users",
  };
  export const chartBoxTea = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Teachers",
    number: "700",
    dataKey: "users",
  };
  export const classrooms=[
    {id:1,
      type:"Lab",
      number:302,
      capacity:15,
    },
    {id:2,
      type:"Normal",
      number:301,
      capacity:30,
    },
    {id:3,
      type:"Lab",
      number:201,
      capacity:25,
    },
    {id:4,
      type:"Lab",
      number:202,
      capacity:14,
    },
    {id:5,
      type:"Lab",
      number:305,
      capacity:12,
    },{id:6,
      type:"Normal",
      number:106,
      capacity:27,
    }
    
  ]
  export const classes=[
    {id:1,
      level:"First level",
      spec:"No specialty",
      classname:"Class A",
      alumnis:5
    },
    {id:2,
      level:"Second level",
      spec:"Computer Science",
      classname:"Class A",
      alumnis:15
    },
    {id:3,
      level:"Second level",
      spec:"Computer Science",
      classname:"Class B",
      alumnis:21
    },
    {id:4,
      level:"First level",
      spec:"No specialty",
      classname:"Class B",
      alumnis:8
    },
    {id:5,
      level:"Fourth level",
      spec:"Maths",
      classname:"Class A",
      alumnis:10
    },{id:6,
      level:"Fourth level",
      spec:"Literature",
      classname:"Class A",
      alumnis:30
    }
    
  ]
  export const alumnis=[
    {id: 1,
      first:"Mohamed",
      last:"Magherbi",
      age:19,
      spec:"Computer Science",
      level:"Fourth level",
      class:"Class A"
    },
    {id: 2,
      first:"Mohamed",
      last:"Foulen",
      age:20,
      spec:"Fundamental Science",
      level:"Fourth level",
      class:"Class B"
    },
    {id: 3,
      first:"Foulen",
      last:"Ben foulen",
      age:15,
      level:"First level",
      class:"Class C"
    },
    {id: 4,
      first:"Ahmed",
      last:"Achref",
      age:18,
      spec:"Computer Science",
      level:"Third level",
      class:"Class A"
    },
    {id: 5,
      first:"Hedi",
      last:"Magherbi",
      age:17,
      spec:"Computer Science",
      level:"Third level",
      class:"Class A"
    },
    {id: 6,
      first:"Mohamed",
      last:"Gammoudi",
      age:19,
      spec:"Sports",
      level:"Fourth level",
      class:"Class A"
    },
    
  ]
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