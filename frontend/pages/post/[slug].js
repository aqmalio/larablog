import { server } from '../../server'
import Link from 'next/link'
import { useRouter } from 'next/router'

// async function getDetail() {
//     // Fetch data from external API
//     const router = useRouter()
//     const { slug } = router.query
//     const res = await fetch(`${server}/api/get-post/${slug}`)
//     const post = await res.json()
//     console.log(slug)
//     return post
// }

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `${server}/api/get-post/${context.params.slug}`
    );
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
};

export default function Post({ post }) {
    // console.log(post)
    return (
        // <span></span>
        <div class="overflow-x-hidden bg-gray-100">
            <nav class="px-6 py-4 bg-white shadow">
                <div class="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
                    <div class="flex items-center justify-between">
                        <div>
                            <a href="#" class="text-xl font-bold text-gray-800 md:text-2xl">Brand</a>
                        </div>
                        <div>
                            <button type="button" class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex-col hidden md:flex md:flex-row md:-mx-4">
                        <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Home</a>
                        <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Blog</a>
                        <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">About us</a>
                    </div>
                </div>
            </nav>

            <div class="px-6 py-8">
                <div class="container flex justify-between mx-auto">
                    <div class="w-full lg:w-8/12 mx-auto">
                        <div class="flex items-center justify-between">
                            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">{post.title}</h1>
                            <div class="flex items-center justify-between mt-4">
                                <div><a href="#" class="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                    <h1 class="font-bold text-gray-700 hover:underline">{post.author}</h1>
                                </a></div>
                            </div>
                        </div>
                        <div class="mt-6" key={post.id}>
                            <div class="mx-auto bg-white-200 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="font-light text-gray-600">
                                        {Date(post.created_at).toString().substr(3, 8)}</span><a href="#"
                                            class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel and Nextjs</a>
                                </div>

                                <img class="mt-2 rounded w-full" src={post.cover} />
                                <p class="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: post.content.toString() }}></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
