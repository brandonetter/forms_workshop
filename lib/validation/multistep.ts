import { z } from 'zod';

export type IFormSchema = z.infer<typeof formSchema>;

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  about: z.string().min(20, {
    message: 'About must be at least 20 characters.',
  }),
  city: z.string().min(2, {
    message: 'City must be at least 2 characters.',
  }),
  country: z.string().min(2, {
    message: 'Country must be at least 2 characters.',
  }),
  zip: z.string().min(2, {
    message: 'Zip must be at least 2 characters.',
  }),
  whereDidYouHear: z.enum(['friend', 'social-media', 'google'], {
    required_error: 'Please select where you heard about us.',
  }),
  subscribe: z.boolean(),
});
