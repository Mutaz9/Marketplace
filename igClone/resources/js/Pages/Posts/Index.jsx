import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
// import { format } from "date-fns";

export default function Index({ auth, posts }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />
            <div className="grid grid-cols-9 w-8/12 m-auto justify-items-center items-center">
                {posts.map((post, index) => (
                    <div
                        className="col-span-5 col-start-3 m-auto pt-4"
                        key={index}
                    >
                        <img src={`/storage/${post.image}`} alt="post" />
                        <div className=" max-h-full pt-3 pb-1">
                            <Link href={`/profile/${post.user.id}`}>
                                <img
                                    src={
                                        post.user.profile.pfp
                                            ? `/storage/${post.user.profile.pfp}`
                                            : "/storage/profile/94kT6lr3HGnGz9q6uwckDl2FR17gIZrc5ZJib6i9.webp"
                                    }
                                    alt="pfp"
                                    className="inline max-h-full h-10 rounded-full"
                                />
                            </Link>
                            <b className=" inline pl-2 text-2xl text-center align-middle">
                                {post.user.profile.username}{" "}
                            </b>{" "}
                            <p className=" inline text-xl align-middle">
                                {post.caption}
                            </p>
                            <p className=" inline text-xl align-middle">
                                {post.created_at}
                            </p>
                        </div>
                        <div className=" pt-3 border-b-2 border-gray-300"></div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
