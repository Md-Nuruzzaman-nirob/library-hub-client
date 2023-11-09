import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Categories from "./components/categories/Categories";
import TrustedBrands from "./components/TrustedBrands";
import Contact from "./components/Contact";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const categories = useLoaderData() || [];

  const { loader } = useAuth();

  if (loader) {
    return (
      <p className="dark:bg-gray-900 h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </p>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <TrustedBrands></TrustedBrands>
      <Categories categories={categories}></Categories>
      <Contact></Contact>
    </div>
  );
};

export default Home;
