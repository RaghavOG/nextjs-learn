// here we use server side fetching
import Link from 'next/link';


async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

export default async function UsersPage() {
    const users = await getAllUsers();
    return (
      <div>
        <h1 className="text-2xl font-bold">All Users</h1>
        <ul>
          {users.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <li className="text-lg mt-2">{user.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
}
