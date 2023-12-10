export const RecipeTagsOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "53ee2394b3msh25779e4e4fcf647p1f913djsnffa34400ec2c",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const base_url: string = "https://tasty.p.rapidapi.com";
export const fetchData = async (url: string, options: object) => {
  const response = await fetch(`${base_url}/${url}`, options);
  const result = await response.json();
  return result;
};
