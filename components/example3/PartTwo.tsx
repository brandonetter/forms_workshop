import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import {UseFormReturn} from "react-hook-form"
import { IFormSchema } from "@/lib/validation/multistep";

export default function PartTwo({form}: {form:UseFormReturn<IFormSchema> }) {
    return (
        <>
    <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City..." {...field} />
              </FormControl>
              <FormDescription>
                Your city.
              </FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Country..." {...field} />
              </FormControl>
              <FormDescription>
                Your country.
              </FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip</FormLabel>
              <FormControl>
                <Input placeholder="Zip..." {...field} />
              </FormControl>
              <FormDescription>
                Your zip code.
              </FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />
        </>
    )
}
