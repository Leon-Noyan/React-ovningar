// import { useState } from 'react'
import './App.css'
import RecipeForm from './components/RecipeForm'
import { useState } from 'react'
import RecipeList from './components/RecipeList'
import type { FormData } from './types'

function App() {

  const [recipes, setRecipes] = useState<FormData[]>([])

  const handleAddRecipe = (newRecipe: FormData) => {
    setRecipes([...recipes, newRecipe])
  }

  return (
    <>
    <div className="App">
      <h1>Recipe book</h1>
      <p>You may search for recipes by typing in the search bar</p>
    </div>
     <RecipeForm addedRecipe={handleAddRecipe} />

    <hr />

     <RecipeList recipes={recipes} />
    </>
  )
}

export default App
