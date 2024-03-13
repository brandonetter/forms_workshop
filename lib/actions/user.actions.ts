'use server';
import { users, IUser } from '@/database';

export async function getUsers() {
  return users.getAll();
}
