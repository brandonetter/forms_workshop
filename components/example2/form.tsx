"use client"

import CheckBox from "@/components/shared/CheckBox"

export default function Form() {
  return (
    <div className="mx-auto max-w-md space-y-5">
      <div className="space-y-1 text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
      </div>
        <form>
      <div className="space-y-4">
        <div className="space-y-2 ">
          <label htmlFor="name">Name</label>
          <input className="input-style2" id="name" placeholder="Enter your name"/>

        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input className="input-style2" id="email" placeholder="Enter your email"/>

        </div>
        <div className="space-y-2">
          <label htmlFor="age">Age</label>
          <input className="input-style2" id="age" placeholder="Enter your age" />
        </div>


        <div className="space-y-2">
          <label htmlFor="interests">Interests</label>
          <div className="grid grid-cols-3 gap-y-2 gap-x-1">
          <CheckBox value="sports" category="interests">Sports</CheckBox>
          <CheckBox value="music" category="interests">Music</CheckBox>
          <CheckBox value="movies" category="interests">Movies</CheckBox>
          <CheckBox value="books" category="interests">Books</CheckBox>
          <CheckBox value="travel" category="interests">Travel</CheckBox>
          </div>

        </div>
        <div className="space-y-2">
          <label htmlFor="role">Role</label>
          <select className="select-style" id="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

          <div className="space-y-2">
            <label htmlFor="subject">Subject</label>
            <input className="input-style2" id="subject" placeholder="Enter your subject" />
          </div>

        <button className="button-class" type="submit">
          Sign Up
        </button>

      </div>
        </form>
    </div>
  )
}
