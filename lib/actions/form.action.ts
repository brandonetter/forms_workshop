'use server';

import { ZodError } from 'zod';
import { UserSchema, IUserSchema } from '../validation/user';

export async function registerUser(data: IUserSchema) {
  try {
    const user = UserSchema.parse(data);
    console.log('User', user);
    // submit to database
  } catch (e) {
    if (e instanceof ZodError) {
      console.log('Zod Error', e.errors);
    }
  }
}
