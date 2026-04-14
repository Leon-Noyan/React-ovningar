import type { FormData } from '../types'

interface RecipeCardProps {
    recipe: FormData
}

function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                margin: '10px',
                padding: '10px',
                borderRadius: '8px'
            }}
        >
            <h3>{recipe.name}</h3>
            <p>
                <strong>Ingredienser:</strong> {recipe.ingredients}
            </p>
            <p>
                <strong>Tid:</strong> {recipe.time}
            </p>
        </div>
    )
}

export default RecipeCard
