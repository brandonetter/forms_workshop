"use client"

import {useEffect, useState} from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {formSchema, IFormSchema} from "@/lib/validation/multistep"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import {
  Form,

} from "@/components/ui/form"

import PartOne from "./PartOne"
import PartTwo from "./PartTwo"
import PartThree from "./PartThree"
import ProgressBar from "./ProgressBar"
import Loading from "./Loading"

type IFormPosition = 1 | 2 | 3;
type IFormKeys = Partial<keyof IFormSchema>[];



export default function ProfileForm() {

  const [formPosition, setFormPosition] = useState(1);
  const [isPending, startTransition] = useTransition();
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

  const validateFields = async (fields: (keyof IFormSchema)[]) => {
    const validatePromises = await Promise.all(fields.map((field) => form.trigger(field)));
    const errors = validatePromises.filter((result) => result !== true);
    return errors.length === 0;
  };


  const steps = {
    1: {
      fields: ["firstName", "lastName", "about"],
    },
    2: {
      fields: ["city", "country", "zip"],
    },
    3: {
      fields: ["whereDidYouHear", "subscribe"],
    },
  }



    const handleFormPosition = async(position: number) => {

      if(position === -1) {
        setFormPosition((prev)=>prev+position)
        return;
      }

      startTransition(async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const isValid = await validateFields(steps[formPosition as IFormPosition].fields as IFormKeys);
        if(!isValid) return;

        setFormPosition((prev)=>prev+position)
      })
    }
  function onSubmit(values: IFormSchema) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full">
        <ProgressBar formPosition={formPosition} />

        <section className="space-y-8">
          {formPosition === 1 && <PartOne form={form} />}
          {formPosition === 2 && <PartTwo form={form} />}
          {formPosition === 3 && <PartThree form={form} />}
        </section>

        <div className="flex justify-between">
          <Button onClick={()=>handleFormPosition(-1)} disabled={formPosition===1}>Previous</Button>
          {formPosition < 3 ? (
          <Button onClick={()=>handleFormPosition(1)} type="button">Next</Button>
          ):(
          <Button type="submit">Submit</Button>
          )}
        </div>
      </form>
      <Loading isPending={isPending} />
    </Form>
  )
}
