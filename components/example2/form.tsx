"use client"
import { useForm, SubmitHandler } from "react-hook-form"

import {UserSchema,IUserSchema} from "@/lib/validation/user"
import CheckBox from "@/components/shared/CheckBoxComplete"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { registerUser } from "@/lib/actions/form.action";

export default function Form() {

  const { register, handleSubmit, formState, watch } = useForm<IUserSchema>({
    defaultValues: {
      name: '',
      email: '',
      age: undefined,
      role: 'student',
      subject:'',
      interests: []
  },
    resolver: zodResolver(UserSchema)
});

  const userRole = watch('role');

  useEffect(() => {
    console.log(formState.errors);

  }, [formState.errors]);

  const onSubmit: SubmitHandler<IUserSchema> = async(data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await registerUser(data);
    console.log(data);
  }

  return (
    <div className="mx-auto max-w-md space-y-5">
      <div className="space-y-1 text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="space-y-2 ">
          <label htmlFor="name">Name</label>
          <input aria-invalid={formState.errors.name ? "true" : "false"} className="input-style2" id="name" placeholder="Enter your name" {...register('name')}/>
          <p role="alert" className="text-red-600 text-xs">{formState.errors.name?.message}</p>
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input aria-invalid={formState.errors.email ? "true" : "false"} className="input-style2" id="email" placeholder="Enter your email" {...register('email')}/>
          <p role="alert" className="text-red-600 text-xs">{formState.errors.email?.message}</p>
        </div>
        <div className="space-y-2">
          <label htmlFor="age">Age</label>
          <input className="input-style2" id="age" placeholder="Enter your age"  {...register('age')} />
        </div>


        <div className="space-y-2">
          <label htmlFor="interests">Interests</label>
          <div className="grid grid-cols-3 gap-y-2 gap-x-1">
          <CheckBox value="sports" category="interests" {...register('interests')}>Sports</CheckBox>
          <CheckBox value="music" category="interests" {...register('interests')}>Music</CheckBox>
          <CheckBox value="movies" category="interests" {...register('interests')}>Movies</CheckBox>
          <CheckBox value="books" category="interests" {...register('interests')}>Books</CheckBox>
          <CheckBox value="travel" category="interests" {...register('interests')}>Travel</CheckBox>
          </div>

        </div>
        <div className="space-y-2">
          <label htmlFor="role">Role</label>
          <select className="select-style" id="role" {...register('role')}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        {userRole === 'teacher' && (
          <div className="space-y-2">
            <label htmlFor="subject">Subject</label>
            <input className="input-style2" id="subject" placeholder="Enter your subject" required {...register('subject')}/>
          </div>
        )}
        <button className="button-class disabled:bg-black/30" type="submit" disabled={formState.isSubmitting}>
          Sign Up
        </button>

      </div>
        </form>
    </div>
  )
}
