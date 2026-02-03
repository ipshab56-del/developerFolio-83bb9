/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ipsha Biswal",
  title: "Hey there!!, I'm Ipsha",
  subTitle: emoji(
    "A passionate Computer Science student 🚀 with strong foundation in data structures, algorithms, and full-stack development. Building projects with Python, Flask, JavaScript and modern web technologies."
  ),
  resumeLink:
    "/resume.html", // Link to your resume file
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ipshab56-del",
  linkedin: "https://www.linkedin.com/in/ipsha-bwl/",
  gmail: "ipsha.b56@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE COMPUTER SCIENCE STUDENT EXPLORING FULL STACK DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Develop web applications using Python Flask and modern web technologies"
    ),
    emoji("⚡ Build database-driven applications with SQLite and efficient data management"),
    emoji(
      "⚡ Create responsive user interfaces with HTML, CSS, and Tailwind CSS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Saraswati Degree Vidya Mandir",
      logo: require("./assets/images/harvardLogo.png"), // Using existing logo as placeholder
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2023 - 2026",
      desc: "Currently pursuing Bachelor's degree with focus on data structures, algorithms, and object-oriented programming concepts.",
      descBullets: [
        "Strong foundation in programming languages: C, C++, Java, Python, JavaScript",
        "Learning web development with Flask, HTML, CSS, and database management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// Work Experience Section - Currently a student, no professional experience yet
const workExperiences = {
  display: false, //Set it to false since currently a student
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON TO STRENGTHEN MY DEVELOPMENT SKILLS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Using existing image as placeholder
      projectName: "Student Management System",
      projectDesc: "A web-based student management system built with Python Flask to manage academic records and profiles of students and teachers. Features CRUD operations, SQLite database, and user-friendly interfaces.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ipshab56-del/student-mark-management-system"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// Achievement Section - Currently building portfolio, will add achievements as they come
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Building my portfolio with projects and continuously learning new technologies!",
  achievementsCards: [],
  display: false // Set false to hide this section until achievements are added
};

// Blogs Section - COMMENTED OUT (Not available yet)

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const blogSection = {
  display: false // Disabled - not available yet
};

// Talks Sections - COMMENTED OUT (Not available yet)

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const talkSection = {
  display: false // Disabled - not available yet
};

// Podcast Section - COMMENTED OUT (Not available yet)

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const podcastSection = {
  display: false // Disabled - not available yet
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "", // Phone number not provided in resume
  email_address: "ipsha.b56@gmail.com"
};

// Twitter Section - COMMENTED OUT (Not available yet)

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Disabled - not available yet
};

const isHireable = true; // Set to true since you're looking for opportunities as a student

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
