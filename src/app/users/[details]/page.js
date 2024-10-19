import Link from 'next/link';

async function getUserDetails(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
}

export default async function UserDetailsPage({params}) {
    const user = await getUserDetails(params.details);
    return (
    <div>User Details Page {params.details}
     <p>{user.name}</p>
     <p>{user.email}</p>
     <p>{user.phone}</p>
     <p>{user.website}</p>  

     <Link href={`/users/${user.id + 1}`}>Next User</Link>
    </div>
    )
}
