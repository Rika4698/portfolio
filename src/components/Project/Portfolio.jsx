import { portfolio } from "../../components/data";
import PortfolioItem from "../Project/PortfolioItem";
import "./Portfolio.css";
// import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  return (
    // <section className="portfolio section">
    //   {/* <Helmet>
    //     <title>Projects | Md. Shamim Islam</title>
    //   </Helmet> */}
    //   <h2 className="section__title">
    //     My <span>Projects</span>
    //   </h2>
    //   <div className="portfolio__container container grid">
    //     {portfolio.map((item) => (
    //       <PortfolioItem key={item.id} {...item}></PortfolioItem>
    //     ))}
    //   </div>
    // </section>
    <section id="projects" className=" py-20 bg-gray-800">
    <h2 className="text-white text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400">My Projects</h2>
    <div className="mx-10 mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
      {portfolio.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
   
  </section>
  );
};

export default Portfolio;