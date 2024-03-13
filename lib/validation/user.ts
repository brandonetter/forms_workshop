import { z } from 'zod';

export type IUserSchema = z.infer<typeof UserSchema>;
export const UserSchema = z
  .object({
    name: z.string().min(1, 'Please enter a name'),
    email: z.string().email('Please enter a valid email address'),
    age: z.coerce.number().int().positive('Please enter a valid age'),
    role: z.enum(['student', 'teacher'], {
      required_error: 'Please select a role',
    }),
    subject: z.string().optional(),

    interests: z.array(z.string()).optional(),
  })
  .refine(
    (data) => {
      if (data.role === 'teacher' && !data.subject) {
        return false;
      }
      return true;
    },
    {
      message: 'Please enter a subject',
      path: ['subject'],
    }
  );

export const UserSchema2 = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().positive(),
  role: z.enum(['student', 'teacher']),
  subject: z.string().optional(),
  interests: z.array(z.string()).optional(),
});
