import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <h1 className="pb-10 text-3xl">Login</h1>
      <form className="flex flex-col ">
        <label>
          Email
        </label>
          <input className="rounded-md border hover:rotate-1 hover:scale-105 duration-200 text-black border-blue-500" type="email" name="email" />
          <br />

        <label>
          Password
        </label>
          <input className="rounded-md border hover:rotate-1 hover:scale-105 duration-200 text-black border-blue-500" type="password" name="password" />
          <br />
        <button className="rounded-md border hover:scale-110 hover:shadow-sm hover:shadow-blue-500 text-xl duration-200 w-20 self-center text-white border-blue-500" type="submit">Submit</button>
      </form>
    </main>
  )
}
