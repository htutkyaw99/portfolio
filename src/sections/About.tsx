const About = () => {
  return (
    <section id="about" className="max-w-[1024px] mx-auto pt-24 space-y-5">
      <h1 className="text-3xl font-bold text-center">About Me</h1>
      <p className="text-justify max-w-[425px] mx-auto">
        I first got hooked on programming back in 2019 when I tried to create a
        simple game. That little project ignited a spark within me, and I knew I
        wanted to explore the world of software development further. By 2022, I
        had shifted my focus to web development. Ever since, I have gained a lot
        of knowledge in React, Next JS, Laravel. With my eager to stay updated
        with new technologies I belive my dedication enables me to deliver
        products that meet and exceed client expectations.
      </p>
      <div className="space-y-2">
        <h2 className="font-bold text-xl text-center">Education</h2>
        <div className="text-center w-fit mx-auto">
          <h3>
            Bachelor of Computer Engineering and
            <br />
            Information Technology
          </h3>
          <p>Yangon Technological University</p>
        </div>
      </div>
      <div className="w-fit mx-auto space-y-2 ">
        <h2 className="font-bold text-xl text-center">What can I do?</h2>
        <ul className="flex items-center justify-center gap-2">
          {/* <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>ReactJS</li>
          <li>NextJS</li> */}
          <p className="text-justify max-w-[425px] mx-auto">
            I have solid experience in cutting-edge technologies like{" "}
            <strong>React JS, Next JS</strong> for frontend as well as fully
            fledge framework like <strong>Laravel</strong> for backend. I can
            build responsive, user friendly interface with complete backend
            logic, ensuring cohesive and efficient web application experience.
          </p>
        </ul>
      </div>
    </section>
  );
};

export default About;
