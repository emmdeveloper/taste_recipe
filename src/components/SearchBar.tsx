import { RecipeTagsOptions, fetchData } from "../utils/fetchData";
import { recipe } from "../utils/types";
import { useState } from "react";
const SearchBar = ({ setRecipes }: recipe) => {
  const [search, setSearch] = useState("");
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const recipesData = await fetchData(
      `recipes/list?from=0&size=20&q=${search}`,
      RecipeTagsOptions
    );
    const rData = recipesData?.results;
    const searchRecipe = rData?.filter((recipe) =>
      recipe.name.toLowerCase().includes(search)
    );
    setRecipes(searchRecipe);
    setSearch("");
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Recipe..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        className="bg-gray-200 py-1 px-7 rounded-full font-[Inter] outline-none mt-2"
      />
    </form>
  );
};

export default SearchBar;
