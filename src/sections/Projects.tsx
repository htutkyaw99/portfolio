import FeaturedCard from "../components/FeaturedCard";

const Projects = () => {
  return (
    <section id="works" className="max-w-[1024px] mx-auto pt-20">
      <h3 className="text-center text-3xl font-bold my-5 p-10">
        Featured Works
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Projects;
