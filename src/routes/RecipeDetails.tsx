import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeTagsOptions, fetchData } from "../utils/fetchData";
const RecipeDetails = () => {
  const [details, setDetails] = useState<null | undefined>();
  const { id } = useParams();
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const RecipeDetails = await fetchData(
        `recipes/get-more-info?id=${id}`,
        RecipeTagsOptions
      );
      setDetails(RecipeDetails);
      console.log(RecipeDetails);
    };
    fetchRecipeDetails();
  }, [id]);
  return (
    <div className="flex flex-col item-center lg:flex-row p-4 mt-4">
      <a href={details?.original_video_url} target="_blank" rel="noreferrer">
        <img
          src={details?.thumbnail_url}
          alt={details?.name}
          className="w-[800px] rounded-3xl"
        />
      </a>
      <aside>
        <h1 className="font-bold text-2xl text-center transition-all hover:text-[#8bc53f]">
          {details?.name}
        </h1>
        <p className="text-center">{details?.description}</p>

        {details?.credits.map((credit) => (
          <h2 className="text-right transition-all hover:text-[#8bc53f]">
            By {credit?.name}
          </h2>
        ))}
        <aside className="p-5">
          <h2 className="text-center text-xl font-semibold transition-all hover:text-[#8bc53f]">
            Instructions
          </h2>
          {details?.instructions.map((i) => (
            <li className="text"> {i?.display_text}</li>
          ))}
        </aside>
      </aside>
    </div>
  );
};

export default RecipeDetails;
