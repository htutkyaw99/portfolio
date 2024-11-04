import avatar from "../../public/Avatar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center space-y-4 pt-20 max-w-[1024px] mx-auto p-5"
    >
      <img className="w-[200px]" src={avatar} alt="A boy with glassess" />
      <h2 className="text-3xl font-semibold uppercase">Ye Htut Kyaw</h2>
      <h3 className="text-xl">A Full-stack Developer</h3>
      <p className="text-justify max-w-[425px]">
        A web developer with a wide skillset in both frontend and backend
        technologies.Proficient in React JS, Next JS and Laravel,I am passionate
        about delivering elegant and efficient web solutions.
      </p>
      <button className="bg-gray-900 text-gray-300 px-3 py-2 flex items-center hover:bg-gray-800 hover:text-gray-200">
        Download Resume
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19V5m0 14-4-4m4 4 4-4"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
