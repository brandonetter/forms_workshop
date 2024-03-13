"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {formSchema, IFormSchema} from "@/lib/validation/multistep"


export default function ProfileForm() {

   const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      about: "",
      city: "",
      country: "",
      zip: "",
      whereDidYouHear:  "social-media",
      subscribe: false,
    },
  })

  function onSubmit(values: IFormSchema) {
    console.log(values)
  }

  return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full">

      </form>
  )
}
