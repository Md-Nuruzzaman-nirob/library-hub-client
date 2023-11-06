import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div className="">
      <Banner></Banner>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export default Home;
