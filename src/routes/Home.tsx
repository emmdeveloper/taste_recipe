import Catergory from "../components/Catergory";
import { useState, useEffect, Suspense } from "react";
import { fetchData, RecipeTagsOptions } from "../utils/fetchData";
import Recipe from "../components/Recipe";
import Navbar from "../components/Navbar";
const Home = () => {
  const [recipes, setRecipes] = useState<null>();
  const [selectedCatergory, SetSelectedCatergory] = useState<string>(
    "black_history_month"
  );
  useEffect(() => {
    if (selectedCatergory) {
      const fetchTaggedFood = async () => {
        const res = await fetchData(
          `recipes/list?from=0&size=20&tags=${selectedCatergory}`,
          RecipeTagsOptions
        );
        const data = res.results;

        setRecipes(data);
        console.log(data);
      };
      fetchTaggedFood();
    }
  }, [selectedCatergory]);
  return (
    <div>
      <Navbar setRecipes={setRecipes} />
      <Suspense fallback="Loading Please Wait">
        <Catergory
          selectedCatergory={selectedCatergory}
          SetSelectedCatergory={SetSelectedCatergory}
        />
        <Recipe recipes={recipes} setRecipes={setRecipes} />
      </Suspense>
    </div>
  );
};

export default Home;
