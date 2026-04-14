import type { FormData } from '../types'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
    recipes: FormData[]
}

function RecipeList({ recipes }: RecipeListProps) {
    return (
        <div>
          <h2>My recipies</h2>
          {recipes.length === 0 ? (
            <p>No added recipies</p>
          ): (
            recipes.map((item, index) => (
              <RecipeCard key={index} recipe={item} />
          ))
        )}
        </div>
    )
}

export default RecipeList
