import { useState } from 'react'
import type { FormData } from '../types'

interface RecipeFormProps {
  addedRecipe: (recipe: FormData) => void
}

function RecipeForm({ addedRecipe }: RecipeFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        ingredients: '',
        time: ''
    })

    // Denna sköter uppdatering av textfälten
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Denna sköter inskickningen
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Sent recipe:", formData)

        addedRecipe(formData)

        setFormData({ name: '', ingredients: '', time: '' })

        // Tömmer formuläret
        setFormData({ name: '', ingredients: '', time: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    name="name" // Matchar formData.name
                    type="text"
                    placeholder="Receptets namn"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    name="ingredients" // Matchar formData.ingredients
                    type="text"
                    placeholder="Ingredienser"
                    value={formData.ingredients}
                    onChange={handleChange}
                />
                <input
                    name="time" // Matchar formData.time
                    type="text"
                    placeholder="Tid"
                    value={formData.time}
                    onChange={handleChange}
                />
                <button type="submit">Add recipe</button>
            </div>

            <p>You typed: {formData.name}</p>
        </form>
    )
}


export default RecipeForm
