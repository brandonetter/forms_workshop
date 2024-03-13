'use server';
import { users, IUser } from '@/database';
import { revalidatePath } from 'next/cache';

export async function addUser(user: IUser) {
  users.add(user);
  // tell Next.js to revalidate the path
  revalidatePath('/');
}

export async function getUsers() {
  return users.getAll();
}
