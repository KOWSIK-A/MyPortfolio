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
  username: "KOWSIK",
  title: "Hi all, I'm KOWSIK",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vxMUjCAarlfJONcbydgclv3C9F1v-7E0/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KOWSIK-A",
  linkedin: "https://www.linkedin.com/in/KOWSIKANANDAN/",
  instagram: "https://www.instagram.com/kaushxk_45",
  twitter: "https://www.twitter.com/KAUSHIKANANDAN",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Crazy Full Stack Developer who Wants To Explore Every Tech Stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SRM TRP Engineering College",
      logo: require("./assets/images/Srmtrp.jpeg"),
      subHeader:
        "Bachelor of Technology in Artificial Intelligence & Data Science",
      duration: "November 2022 - May 2026",
      desc: "Ranked top 10% in the program. Took courses about AI, ML, Software Engineering, Operating Systems, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const Experiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "Exposys Data Labs",
      companylogo: require("./assets/images/Exposysdatalabs.jpeg"),
      date: "July 2024 – Augest 2024",
      desc: "Exposys Data Labs is a leading provider of innovative solutions in data science, AI, and software development. The company specializes in building AI-driven applications, machine learning models, and offering data analytics services to solve real-world challenges. Exposys also provides internship programs and training in cutting-edge technologies, empowering students and professionals to gain industry-relevant skills. Their mission is to drive digital transformation and enable data-driven decision-making for businesses."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/ChatConnectLogo.jpg"),
      projectName: "ChatConnect - A Real-Time Chat and Communication Appt",
      projectDesc:
        "ChatConnect is a sample project built using the Android Compose UI toolkit. It demonstrates how to create a simple chat app using the Compose libraries. The app allows users to send and receive text messages. The project showcases the use of Compose's declarative UI and state management capabilities. It also includes examples of how to handle input and navigation using composable functions and how to use data from a firebase to populate the UI."
      //  you can add extra buttons here.
    },

    {
      image: require("./assets/images/DarkPatternsLogo.jpg"),
      projectName: "Dark Patterns Detection",
      projectDesc:
        "Dark patterns are deceptive user interfaces employed by e-commerce websites to manipulate user's behavior in a way that benefits the website, often unethically. This study investigates the detection of such dark patterns.."
    },

    {
      image: require("./assets/images/DatascienceLogo.jpg"),
      projectName:
        "Early prediction of diabetes allows individuals to take preventive measures and make lifestyle changes to manage the condition effectively",
      projectDesc:
        "Diabetes is a chronic disease that affects the body's ability to regulate blood sugar levels. Early prediction helps individuals adopt preventive measures and lifestyle changes to manage the condition and reduce the risk of complications."
    },

    {
      image: require("./assets/images/CryptoCurrencyLogo.png"),
      projectName: " Cryptocurrency Transaction Analysis",
      projectDesc:
        "Cryptocurrency Transaction Analysis involves studying and interpreting data related to transactions on blockchain networks. This analysis helps identify trends, detect fraud, assess market behavior, and gain insights into trading patterns. It is widely used for risk management, regulatory compliance, and optimizing investment strategies in the dynamic cryptocurrency ecosystem."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),

  achievementsCards: [
    {
      title: "GeeksforGeeks",
      subtitle: "Certified in Foundations of AI/ML: Intensive Bootcamp",
      image: require("./assets/images/Geeks.png"),
      imageAlt: "GeeksforGeeks Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ZafN6DEqIa4Dxt2jJKVUiy45y8iAdphA/view?usp=sharing"
        }
      ]
    },

    {
      title: "IBM SkillsBuild",
      subtitle: "Cloud Solutions: Envisioning and Planning for the Future",
      image: require("./assets/images/IBMSkillsBuild.jpg"),
      imageAlt: "IBMSkillsBuild Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1IuvcgyiEC2racvorqGEOKQ9z21Yig8fY/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect!"),
  subtitle: "Drop me a message anytime—let's get started!"
};

// Twitter Section

const twitterDetails = {
  userName: "KAUSHIKANANDAN", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  Experiences,
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
