import img from"../assets/netflix.png"

export const Bio = {
    name: "Ankush Yadav",
    roles: [
      "Frontend Developer",
      "React Developer",
      "Programmer",
      "Coder"
    ],
    description:
      "A developer with a way of painting Websites and make the website's Alive ",
    github: "",
    resume:
      "",
    linkedin: "https://www.linkedin.com/in/ankush-yadav-856580240/",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png",
            progress:80,
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
            progress:60,
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
          progress:80,
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
            progress:70,
        },
        {
            name: "Tailwind Css",
            image:
              "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
              progress:60,
          },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            progress:70,
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
            progress:80,
        },
        {
          name: "Material UI",
          image:
            "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png",
            progress:60,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
          progress:50,
        },
        {
          name: "Express Js",
          image:
            "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
        },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            progress:70,
        },
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            progress:80,
        },
        {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
          progress:80,
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://p1.hiclipart.com/preview/678/218/574/logo-logo-git-line-cheat-sheet-signage-cheating-mug-png-clipart.jpg",
            progress:70,
        },
        {
          name: "GitHub",
          image:
            "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg",
            progress:80,
        },
        {
          name: "Netlify",
          image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
            progress:80,
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
            progress:80,
        },
        {
          name: "Postman",
          image:
            "https://cdn.worldvectorlogo.com/logos/postman.svg",
            progress:80,
        },
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: "",
      school: "Nowrosjee Wadia College",
      date: "Oct 2020 - June 2023",
      grade: "8.83 CGPA",
      desc: "I am recently completed my Graduation with degree in Computer Science.",
      degree: "Bachelor of Computer Science",
    },
    {
      id: 1,
      img: "",
      school: "Sir Parashurambhau College",
      date: "Apr 2018 - Apr 2020",
      grade: "88.2%",
      desc: "I completed my class 12 high school education at Sir Parashurambhau College, where I studied Science with Computer Science.",
      degree: "ISC(XII), Science with Computer",
    },
  ];
  
  export const projects = [
    {
      id: 9,
      title: "NetFlix-Clone",
      date: "Jun 2023 - Jul 2023",
      description:
        "The application features a responsive user interface, providing an optimal viewing experience across various devices, including desktops, tablets, and mobile phones. The project leverages Firebase Authentication to secure user accounts and enhance the overall user experience.",
      image:{img}
        ,
      tags: [
        "React Js",
        "Scroll Reveal",
        "Axios",
        "FireBase"
      ],
      category: "web app",
      github: "https://github.com/Aend23/Netflix-Clone",
      webapp: "",
    },
    {
      id: 0,
      title: "E-commerce Site",
      date: "Apr 2023 - May 2023",
      description:
        "This e-commerce website project is a feature-rich platform built using React.js, integrating external APIs for product data and incorporating user authentication for a secure and personalized shopping experience. The application employs React Router to ensure that certain routes are protected, enhancing the overall security of the platform.",
      image:
        ".",
      tags: ["React Js","Api"],
      category: "web app",
      github: "https://github.com/Aend23/Commerce-site",
      webapp: "",
    },
    {
      id: 1,
      title: "Coffe-Landing page",
      date: "Oct 2022 - Present",
      description:
        "The landing page boasts a clean and responsive user interface, ensuring an optimal viewing experience across various devices. The emphasis on simplicity and elegance makes it an inviting platform for coffee enthusiasts.",
      image:
        "../",
      tags: ["Html","Css","Javascript"],
      category: "web app",
      github: "https://github.com/Aend23/Responsive-CoffeSite",
      webapp: "",
    },
    {
      id: 2,
      title: "Translator",
      date: "Jan 2023 - Mar 2023",
      description:
        " This tool offers users the ability to effortlessly translate individual words by hovering over them and entire sentences or paragraphs when selected. It provides a user-friendly and efficient translation experience, making language comprehension more accessible.",
      image:
        "",
      tags: ["React Js", "Axios", "Material UI"],
      category: "web app",
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Whatsapp Clone",
      date: "Jul 2021",
      description:
        "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
      image:
        "",
      tags: ["React Js", "Firebase", "Firestore", "Node JS"],
      category: "web app",
      github: "",
      webapp: "",
    },
  ];
