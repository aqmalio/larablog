import { server } from "../server"
import Link from 'next/link'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${server}/api/get-all-post`)
    const posts = await res.json()

    const resPopular = await fetch(`${server}/api/get-popular-post`)
    const popularPosts = await resPopular.json()

    // Pass data to the page via props
    return { props: { posts, popularPosts } }
}

export default function Home({ posts, popularPosts }) {
    return (
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
                    <div class="w-full lg:w-8/12">
                        <div class="flex items-center justify-between">
                            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                        </div>
                        {posts.map((post) => (
                            <div class="mt-6" key={post.id}>
                                <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                    <div class="flex items-center justify-between">
                                        <span class="font-light text-gray-600">
                                            {Date(post.created_at).toString().substr(4, 7)}</span><a href="#"
                                                class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel and Nextjs</a>
                                    </div>
                                    <div class="mt-2"><Link href={`post/${post.slug}`} class="text-2xl font-bold text-gray-700 hover:underline">{post.title}</Link>
                                        <img class="rounded w-full" src={post.cover} />
                                        <p class="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: post.content.substr(0, 200) }}></p>
                                    </div>
                                    <div class="flex items-center justify-between mt-4"><Link href={`post/${post.slug}`}
                                        class="text-blue-500 hover:underline">Read more</Link>
                                        <div><a href="#" class="flex items-center"><img
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                            alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                            <h1 class="font-bold text-gray-700 hover:underline">{post.author}</h1>
                                        </a></div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div class="hidden w-4/12 -mx-8 lg:block">
                        <div class="px-8 mt-10">
                            <h1 class="mb-4 text-xl font-bold text-gray-700">Popular Posts</h1>
                            {popularPosts.map((pPost) => (
                                <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md mt-4">

                                    <div class="mt-4"><Link href={`post/${pPost.slug}`} class="text-lg font-medium text-gray-700 hover:underline">{pPost.title}</Link></div>
                                    <div class="flex items-center justify-between mt-4">
                                        <div class="flex items-center"><img
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                            alt="avatar" class="object-cover w-8 h-8 rounded-full" /><a href="#"
                                                class="mx-3 text-sm text-gray-700 hover:underline">{pPost.author}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
