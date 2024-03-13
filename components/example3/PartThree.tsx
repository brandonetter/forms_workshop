import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import {UseFormReturn} from "react-hook-form"
import { IFormSchema } from "@/lib/validation/multistep";
import { Select, SelectContent, SelectItem,  SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";

export default function PartTwo({form}: {form:UseFormReturn<IFormSchema> }) {
    return (
      <div className="space-y-8">
      <FormField
        control={form.control}
        name="whereDidYouHear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Where did you hear about us?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Where did you here about us" />
                </SelectTrigger>
            </FormControl>
                <SelectContent>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                </SelectContent>
              </Select>
            <FormDescription>
              Where did you hear about us?
            </FormDescription>
            <FormMessage />
            </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="subscribe"
        render={({ field }) => (
          <FormItem>
            <div className="flex gap-2 justify-start items-center">
            <FormControl>
              <Checkbox onChange={field.onChange} />
            </FormControl>
            <FormLabel className="ml-2">Subscribe</FormLabel>
            </div>
            <FormDescription>
              Subscribe to our newsletter.
            </FormDescription>
            <FormMessage />
            </FormItem>
        )}

      />

        </div>
    )
}
