export interface IUser {
  id?: number;
  email: string;
  name: string;
  role: string;
}

// simulate a database
// for examples
export const users = {
  list: [
    { id: 1, email: 'test@email.com', name: 'Test', role: 'Student' },
    { id: 2, email: 'other@email.com', name: 'Other', role: 'Teacher' },
  ] as IUser[],
  getAll: async () => {
    return users.list;
  },
  add: async (user: IUser) => {
    user.id = users.list.length + 1;
    users.list.push(user);
    return user;
  },
};
