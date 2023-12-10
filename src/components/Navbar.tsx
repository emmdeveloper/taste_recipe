import SearchBar from "./SearchBar";
import { recipe } from "../utils/types";
const Navbar = ({ setRecipes }: recipe) => {
  return (
    <nav className="flex flex-col  lg:justify-evenly items-center lg:flex-row ">
      <h2 className="text-xl font-bold">
        <span className="text-[#8bc53f]">Taste</span>Recipe
      </h2>
      <SearchBar setRecipes={setRecipes} />
    </nav>
  );
};

export default Navbar;
