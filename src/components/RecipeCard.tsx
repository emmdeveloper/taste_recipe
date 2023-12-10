import { recipecard } from "../utils/types";
import { Link } from "react-router-dom";
const RecipeCard = ({ recipe }: recipecard) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="p-5 shadow-lg rounded-lg hover:bg-[#8bc53f] transition-all hover:text-white hover:scale-110">
        {recipe.beauty_url ? (
          <img
            src={recipe.beauty_url}
            alt={recipe.name}
            className="w-[300px] rounded-md shadow-lg"
            loading="lazy"
          />
        ) : (
          <img
            src={recipe.thumbnail_url}
            alt={recipe.name}
            className="w-[300px] rounded-md"
            loading="lazy"
          />
        )}
        <h1 className="text-center mt-2">{recipe.name}</h1>
      </div>
    </Link>
  );
};

export default RecipeCard;
