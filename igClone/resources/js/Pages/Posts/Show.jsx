import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

export default function Show({ auth, post, username }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Post" />
            <div className="grid grid-cols-9 w-8/12 m-auto justify-items-center items-center">
                <div className="col-span-5 col-start-3 m-auto pt-4">
                    <img src={`/storage/${post.image}`} alt="post" />
                    <b className=" inline text-2xl">{username} </b>{" "}
                    <p className=" inline text-xl">{post.caption}</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
