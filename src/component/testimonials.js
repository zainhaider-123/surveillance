import zainImg from '/assets/members/zain.jpg';
import asherImg from '/assets/members/asher.jpg';
import ahmedImg from '/assets/members/ahmed.jpg';
import faizaImg from '/assets/members/faiza.jpg';

import hafsa from '/assets/teachers/female.png';
import yawar from '/assets/teachers/yawar.jpg';
import shahzad from '/assets/teachers/unkown.webp';

export const teamTestimonials = [
  {
    quote:
      "My role involves developing a web application that visualizes AI-processed video streams from drones, enabling users to identify and locate survivors, aiding real-time rescue operations.",
    name: "Zain Haider",
    designation: "Web Application Developer",
    src: zainImg,
  },
  {
    quote:
      "My role is training a computer vision neural network which can detect civilians from a video feed.",
    name: "Syed Asher",
    designation: "AI Model Trainer",
    src: asherImg,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Ahmed Bilwani",
    designation: "Project Contributor",
    src: ahmedImg,
  },
  {
    quote:
      "My role involves designing compatible hardware to interface the Jetson with the drone and for developing a custom PCB that ensures reliable communication and power management",
    name: "Faiza Shakeel",
    designation: "Hardware & PCB Engineer",
    src: faizaImg,
  },
];

export const supervisorsTestimonials2 = [
  {
    quote: "Lecturer, Dept. Of Electronic Engg. Neduet",
    name: "Engr. Hafsa Amanullah",
    designation: "Supervisor",
    src: hafsa,
  },
  {
    quote: "Principal researcher and AI team lead, OnDAI Inc. Seoul",
    name: "Dr. Yawar Rehman",
    designation: "Co-Supervisor",
    src: yawar,
  },
  {
    quote: "Asst. Professor, Electronics & Power Engg Dept, Director AI Lab, PNEC- NUST",
    name: "Dr. Gul Shahzad",
    designation: "External Supervisor",
    src: shahzad,
  },
];


export const supervisorsTestimonials = [
  {id: "hafsa", image: hafsa, title: "Engr. Hafsa Amanullah", part: "supervisor", detail:"Lecturer, Dept. Of Electronic Engg. Neduet"},
  {id: "yawar", image: yawar, title: "Dr. Yawar Rehman", part: "co-supervisor", detail:"Principal reseacher and AI team lead, OnDAI Inc. Seoul"},
  {id: "shahzad", image: shahzad, title: "Dr.Gul Shahzad", part: "External Supervisor", detail:"Asst. Professor,Electronics & Power Engg Dept,Director AI Lab,PNEC- NUST"}
]