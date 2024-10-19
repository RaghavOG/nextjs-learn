

// Example of using useParams and usePathname hooks
'use client';

import { useParams, usePathname } from 'next/navigation';

export default function CartWithParams() {
    const params = useParams();
    const pathname = usePathname();

    return (
        <div>
            <h2>Cart Details</h2>
            <p>Current pathname: {pathname}</p>
            <p>Params: {JSON.stringify(params)}</p>
            
        </div>
    );
}