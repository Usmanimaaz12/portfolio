const Skills = () => {
  const skills = [
    // Frontend Core
    { title: "HTML", img: "./assets/Images/html.png" },
    { title: "CSS", img: "./assets/Images/css-3.png" },
    { title: "JavaScript", img: "./assets/Svg/javaScript.svg" },
    { title: "TypeScript", img: "./assets/Images/TsLogo.jpeg" },

    // Frontend Libraries & Frameworks
    { title: "ReactJS", img: "./assets/Svg/react.svg" },
    { title: "NextJS", img: "./assets/Images/nextjs.svg" },
    { title: "Tailwind CSS", img: "./assets/Svg/tailwind.svg" },
    { title: "RTK Query", img: "./assets/Images/rtk-query.png" },
    { title: "Tanstack Query", img: "./assets/Images/tanstack-query.png" },

    // Backend / APIs
    { title: "NestJS", img: "./assets/Images/nestjs.svg" },
    { title: "SQL", img: "./assets/Images/sql.jpg" },

    // Programming Languages
    { title: "Python", img: "./assets/Images/python.png" },
    { title: "C", img: "./assets/Images/c.png" },
    { title: "C++", img: "./assets/Images/cpp.jpg" },
  ];

  return (
    <div className="lowerBody flex flex-col z-30">
      <span className="font-medium uppercase md:hidden mt-20">* Skills *</span>
      {/* <p>Tech Stack</p> */}
      <ul className="flex-wrap flex md:flex xl:flex-nowrap md:flex-wrap w-11/12 xl:gap-0 md:gap-x-20 gap-12 md:justify-around justify-center ">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <li
              key={index}
              title={skill.title}
              className="flex-shrink-0 flex flex-col items-center p-1"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="w-8 h-8 object-contain"
              />
            </li>
            <span className="text-xs mt-1">{skill.title}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
