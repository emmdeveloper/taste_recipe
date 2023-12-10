import { useEffect, useState } from "react";
import { CatergoryProps } from "../utils/types";
import { fetchData, RecipeTagsOptions } from "../utils/fetchData";
const Catergory = ({
  selectedCatergory,
  SetSelectedCatergory,
}: CatergoryProps) => {
  type catergory = {
    display_name?: string;
    id?: number;
    name?: string;
  };
  const [catergorys, setCatergorys] = useState<catergory[]>([]);
  useEffect(() => {
    const fetchRecipeTags = async () => {
      const res = await fetchData("tags/list", RecipeTagsOptions);
      console.log(res.results);
      setCatergorys(res.results);
    };
    fetchRecipeTags();
  }, []);
  return (
    <div className="flex items-center overflow-y-auto">
      {catergorys.slice(0, 50).map((catergory) => (
        <button
          key={catergory.id}
          onClick={() => SetSelectedCatergory(catergory.name)}
          className={
            catergory.name === selectedCatergory
              ? `whitespace-nowrap mr-2 transition-all text-white bg-[#8bc53f] py-[1px] mt-5 rounded-full px-3`
              : `whitespace-nowrap mr-2 transition-all bg-gray-100 py-[1px] mt-5 rounded-full px-3`
          }>
          {catergory.display_name}
        </button>
      ))}
    </div>
  );
};

export default Catergory;
