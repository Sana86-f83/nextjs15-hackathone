import Chooseyou from "./components/choose-you";
import Active from "./components/active-process";
import Testimonials from "./components/Testimonials";
import Food_Category from "./components/food-categaory";
import Clients1 from "./components/image4-client1";
import Layout from "./components/layout";
import Restaurant from "./components/restaurant";
import BlogPost from "./components/blogpost";
import Mainpageabout from "./components/mainpage-aboutus";
import MainpageMenu from "./components/mainpage-menu";
import MainpageChefs from "./components/mainpageChef";

export default function Home() {
  return (
    <div className=" bg-black w-[350px] md:w-[1920px] h-auto md:h-[7700px]">
      <Layout isHomePage={true}></Layout>


      <Restaurant/>
      <Mainpageabout />
      <Food_Category />
      <Chooseyou />
      <Clients1 />
      <MainpageMenu />
      <MainpageChefs />
      <Testimonials color="text-white" />
      <Active />
      <BlogPost />
    </div>
  );
}
