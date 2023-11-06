import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import TrustedBrands from "./components/TrustedBrands";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div className="">
      <Banner></Banner>
      <TrustedBrands></TrustedBrands>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export default Home;
