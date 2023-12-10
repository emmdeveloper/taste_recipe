export type CatergoryProps = {
  SetSelectedCatergory: React.Dispatch<React.SetStateAction<string>>;
  selectedCatergory: string;
};
export type recipe = {
  recipes?: null | undefined;
  setRecipes?: React.Dispatch<React.SetStateAction<null | undefined>>;
};
export type recipecard = {
  recipe: null | undefined;
  setRecipes?: React.Dispatch<React.SetStateAction<null | undefined>>;
};
