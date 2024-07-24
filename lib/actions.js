'use server'

import { revalidatePath } from "next/cache"
import { saveMeal } from "./meals"

export async function shareMeal(formData){
    const meal={
      title:formData.get('title'),
      summary:formData.get('summary'),
      creator_email:formData.get('email'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
      creator:formData.get('name')
    }
    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
  }