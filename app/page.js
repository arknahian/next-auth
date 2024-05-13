import Link from 'next/link'
import { fetchUsers } from "./lib/data";

export default async function Home() {
  const users = await fetchUsers();
  return (
    <main>
      <h1>Welcome to our App</h1>
      <ul>
        here are our users:
        {
          users.map(user => <li key={user._id}>{user.username}</li>)
        }
      </ul>
      <div>
        <Link href='/dashboard'>Dashboard</Link>
        <br />
        <Link href='/logIn'>Login</Link>
        <br />
        <Link href='/signUp'>Sign Up</Link>
      </div>
    </main>
  )
}
