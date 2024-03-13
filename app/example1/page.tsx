import {getUsers, addUser} from '@/lib/actions/user.actions';
import UserCardRenderer from '@/components/UserCardRenderer';


interface IData{
  [key:string]:string;
}

export default async function Home() {
  const users = await getUsers();

  const submit = async (formData:FormData) => {
    "use server"
    const {name, email, role} = Object.fromEntries(formData.entries()) as IData;

    await addUser({
      name,
      email,
      role
    })

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="form-card">
      <form action={submit}>
        <section className="input-style">
          <h1 className="text-xl font-bold pb-1">
            Add New User
          </h1>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <select className="w-full border p-1" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button type="submit" className="border px-2 mt-4">Add New User</button>
        </section>
      </form>
      </section>


      <UserCardRenderer users={users} />

    </main>
  );
}
