import FeaturedCard from "../components/FeaturedCard";
import { projects } from "../constants/ProjectList";

const Projects = () => {
  return (
    <section id="works" className="max-w-[1024px] mx-auto pt-10">
      <h3 className="text-center text-3xl font-bold my-5 p-10">
        Featured Works
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map(({ img, title, desc, url, stack }) => (
          <FeaturedCard
            Img={img}
            Title={title}
            Desc={desc}
            Url={url}
            Tech={stack}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
