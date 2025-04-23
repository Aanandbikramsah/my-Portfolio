import { Button } from "react-bootstrap";
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import fullstack from '../assets/fullstack.png';
import { useState } from "react";
import Card from "./Card";

const data = [
  {
    id: 323,
    name: "Frontend",
    image: frontend,
    description: "Frontend is the part of the website that users interact with. I focus on crafting responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.js. I’ve worked on dynamic, visually appealing websites optimized for performance and accessibility. ",
    project : {
      name : "Basket Ball",
      describtion: "I have created for the frontend project which user-friendly interface using react.js and it is mobile responsive too.",
      link : 'https://github.com/keshavyadav5/Basketball-React'
    }
  },
  {
    id: 324,
    name: "Data Analyst",
    image: backend,
    description: "I specialize in extracting, analyzing, and visualizing data to drive informed decision-making. My experience includes working with Python, SQL, and Tableau to clean datasets, build insightful dashboards, and uncover trends that support business goals.",
    project : {
      name : "Data Science Job",
      describtion: "I worked on analyzing large datasets to uncover meaningful insights and support data-driven decision-making. I performed data cleaning, feature engineering, and applied statistical techniques using Python and R. I used machine learning models to predict trends and behaviors, and visualized the results with Tableau and Matplotlib. This project helped me strengthen my skills in data wrangling, model evaluation, and presenting actionable insights to non-technical stakeholders.",
      link : 'https://github.com/keshavyadav5/auth_mern'
    }
  },
  {
    id: 325,
    name: "Android App",
    image: fullstack,
    description: "Combining my UI design skills and backend integration knowledge, I build complete Android applications. I ensure smooth interaction between intuitive user interfaces and efficient background processing, delivering seamless user experiences.",
    project : {
      name : "Note App",
      describtion: "The application is built with the MERN stack and offers seamless user authentication with JWT tokens and session management through cookies.",
      link : 'https://github.com/keshavyadav5/Note-app'
    }
  }
]

const Services = () => {
  const [show, setShow] = useState(true);

  const handleChange = () =>{
    setShow(!show);
  }

  return (
    <div className="w-full text-black dark:text-white py-36" id="services">
      <h1 className="text-4xl md:text-6xl font-bold mb-10">
        ser<span className="text-[#01a2e6] underline">V</span>ices
      </h1>
      <div className="w-full flex-1 grid gird-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-4">

        {
          data.map((service) => (
            <Card service={service} key={service.id} />
          ))
        }



      </div>
    </div>
  );
};

export default Services;
