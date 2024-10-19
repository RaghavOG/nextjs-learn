'use client';

import { useParams } from 'next/navigation';

export default function CartDetail() {
    const params = useParams();

    return (
        <div>
            <h1>Cart Detail Page</h1>
            <p>Detail parameter: {params.detail}</p>
           <p>
            yaha mera subfolder [detail] hai to me useParam se param ko access kar rha hu and param se detail ko access kar rha hu
           </p>



        <p>
            {/* agar ye server side hota to {params} and SearchParamsContext use krte */}
        </p>

        </div>
    );
}

