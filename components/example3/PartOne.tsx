import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import {UseFormReturn} from "react-hook-form"
import { IFormSchema } from "@/lib/validation/multistep";

export default function PartOne({form}: {form:UseFormReturn<IFormSchema> }) {
    return (
        <>
        <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input placeholder="First Name..." {...field} />
            </FormControl>
            <FormDescription>
              Your first name.
            </FormDescription>
            <FormMessage />
            </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Last Name..." {...field} />
            </FormControl>
            <FormDescription>
              Your last name.
            </FormDescription>
            <FormMessage />
            </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="about"
        render={({ field }) => (
          <FormItem>
            <FormLabel>About</FormLabel>
            <FormControl>
              <Input placeholder="About..." {...field} />
            </FormControl>
            <FormDescription>
              Tell us about yourself.
            </FormDescription>
            <FormMessage />
            </FormItem>
        )}
        />
        </>
    )
}
