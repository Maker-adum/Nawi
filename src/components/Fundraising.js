import React from "react";
import image from "../Assets/secondSecImage.png";

console.log("../Assets/secondSecImage.png:", image);

const fundraisingGoals = [
  {
    title: "Completion of Loropio Girls Senior High School",
    description:
      "This project aims to complete the construction of Loropio Girls Senior High School, providing better educational facilities for girls in the region.",
    images: "../Assets/SecondSecImage1.png",
  },
  {
    title: "Extension of Loropio Girls Senior High School",
    description:
      "Extending the facilities of Loropio Girls Senior High School to accommodate more students and improve educational resources.",
  },
  {
    title: "11 years of Quality School Education Stipend",
    description:
      "Providing stipends to support students' education for 11 years, covering various expenses including textbooks, uniforms, and transportation.",
  },
  {
    title: "Tertiary Education",
    description:
      "Supporting students to pursue a 4-year degree program at a Kenyan university, covering tuition fees and associated expenses.",
  },
  {
    title: "Kenyan University, 4-year Degree",
    description:
      "Supporting students to pursue a 4-year degree program at a Kenyan university, covering tuition fees and associated expenses.",
  },
  {
    title: "AIE - Stipend",
    description:
      "Providing stipends to students enrolled in the AIE program to support their living expenses and encourage participation.",
  },
  {
    title: "Learning Lions ICT Training Programs",
    description:
      "Funding ICT programs including Mobile LEAP, Boot Camp, and Advanced Track to equip students with essential digital skills.",
  },
  {
    title: "EBU - Tuition and Stipend",
    description:
      "Covering tuition fees and providing stipends for students enrolled in the EBU program, enabling them to access quality education.",
  },
  {
    title: "Family Support",
    description:
      "Providing support to families of students to alleviate financial burdens and ensure their children can continue their education.",
  },
  {
    title: "School Improvements",
    description:
      "Enhancing infrastructure and resources in schools to create a conducive learning environment for students.",
  },
  {
    title: "Building New Primary School",
    description:
      "Constructing a new primary school to accommodate the growing number of students and expand access to education.",
  },
  {
    title: "Building New Senior Secondary School - girls only",
    description:
      "Constructing a new senior secondary school exclusively for girls to provide them with quality education and empower them.",
  },
  {
    title: "Building New Junior Secondary School",
    description:
      "This project focuses on constructing a new junior secondary school to address the growing demand for quality education in the community.",
  },
  {
    title: "Intervention and Rescue Teams",
    description:
      "Creating intervention and rescue teams to address emergencies and ensure the safety and well-being of students and staff.",
  },
  {
    title: "Build Safe Houses including 3-5 years running costs",
    description:
      "Establishing safe houses to provide refuge for vulnerable students, covering construction costs as well as ongoing operational expenses.",
  },
  {
    title: "Dorms for Learning Lions",
    description:
      "Building dormitories to accommodate students participating in the Learning Lions program, providing them with a conducive living environment for learning.",
  },
];

const FundraisingGoal = ({ title, description, image }) => {
  return (
    <div className="fundraising-goal">
      <div className="front-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="back-content">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const Fundraising = () => {
  return (
    <div className="App">
      <h1 style={{ color: "#ff5f05" }}>FUNDRAISING GOALS</h1>
      <div
        className="donorbox"
        // style={{ border: "2px dashed red", background: "white" }}
      >
        <h1>
          DONORBOX
          <iframe
            src="https://donorbox.org/embed/test-nawi-film?language=en"
            name="donorbox"
            allowPaymentRequest="allowpaymentrequest"
            seamless="seamless"
            frameBorder="0"
            scrolling="no"
            height="900px"
            width="100%"
            style={{
              // maxWidth: "500px",
              minWidth: "250px",
              maxHeight: "none!important",
            }}
          ></iframe>
        </h1>
      </div>
      <div className="fundraising-goals-container">
        {fundraisingGoals.map((goal, index) => (
          <FundraisingGoal
            key={index}
            title={goal.title}
            description={goal.description}
            fundraisingGoal={goal.fundraisingGoal}
          />
        ))}
      </div>
    </div>
  );
};

export default Fundraising;
