import { recipe } from "../utils/types";
import RecipeCard from "./RecipeCard";
const Recipe = ({ recipes }: recipe) => {
  return (
    <article className="mt-3 grid gap-4 grid-cols-1 place-items-center max-sm:grid-cols-1 sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
      {recipes?.map((recipe: null | undefined) => (
        <>
          <RecipeCard recipe={recipe} key={recipe.id} />
        </>
      ))}
    </article>
  );
};

export default Recipe;
