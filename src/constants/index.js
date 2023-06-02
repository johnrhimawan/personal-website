import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    fintech,
    onextech,
    nus,
    nes,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    linkedin,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const socials = [
    {
      title: "GitHub",
      alt: "GitHub Logo",
      icon: github,
      url: "https://github.com/johnrhimawan",
    },
    {
      title: "LinkedIn",
      alt: "LinkedIn Logo",
      icon: linkedin,
      url: "https://www.linkedin.com/in/johnrhimawan",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "One X Tech",
      icon: onextech,
      iconBg: "#000000",
      date: "May 2023 - August 2023",
      points: [
        "Developing personalized websites for the company's different businesses to increase traction",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Collaborating with other teams such as design and business development to ensure high quality.",
        "Participating in code reviews and writing constructive feedback to other developers.",
        "Used TypeScript, Reactjs, NextJS, ExpressJS, Material UI in developing the websites."
      ],
    },
    {
      title: "Undergraduate Teaching Assistant",
      company_name: "National University of Singapore",
      icon: nus,
      iconBg: "#FFFFFF",
      date: "January 2023 to April 2023",
      points: [
        "Undergraduate Teaching Assistant for CS2040S (Data Structures and Algorithms) under Prof Seth Gilbert.",
        "Conducting weekly tutorial sessions to a class of 14 students to discuss challenging problems on algorithms.",
        "Grading students' problem sets and providing detailed feedback for areas of improvement.",
        "Average teaching feedback score of 4.7 (out of 5.0).",
      ],
    },
    {
      title: "Vice President of Startup Development",
      company_name: "NUS Entrepreneurship Society",
      icon: nes,
      iconBg: "#0B0B45",
      date: "July 2022 - July 2023",
      points: [
        "Leading a team of 40 members across 4 subdivisions (Operations, Marketing, External Liaisons, Sponsorship Liaisons) to plan for Ground Zero 2023, the largest student-led startathon in Singapore.",
        "Ground Zero 2023 saw about 300 participants, 40 mentors, 8 speakers, and 12 judges with a diverse group of participants from various tertiary institutions in Singapore.",
        "Setting the direction of Ground Zero 2023, with this iteration of the competition having the highest funding and changed the format to pivot from problem statements to areas of focus."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "NUS Fintech Society",
      icon: fintech,
      iconBg: "#FFFFFF",
      date: "September 2021 - June 2022",
      points: [
        "Developing websites and projects requested by the NUS Fintech Society.",
        "Working together with other student developers to create high quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Used ReactJS, MongoDB, and Material UI in development."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { socials, services, technologies, experiences, testimonials, projects };
  