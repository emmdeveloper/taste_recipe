import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, RecipeDetails } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <main className="max-w-[1440px] mx-auto font-[Inter]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
