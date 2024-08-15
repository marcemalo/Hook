import Recipes from "./components/Recipe"
import RecipeDetail from "./components/RecipeDeatail"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
        <Routes>
           <Route path="" element={<Recipes/>}/>
          <Route path="recipe/:id" element={<RecipeDetail/>}/>
      </Routes>
      
    </>
  )
}

export default App

