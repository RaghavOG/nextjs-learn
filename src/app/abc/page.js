import { redirect } from "next/navigation";

export default function Abc() {
    
    const user = null;

    if (!user) {
        redirect("/products");
    }


    return <div>
        <h1>Abc</h1>
    </div>
}