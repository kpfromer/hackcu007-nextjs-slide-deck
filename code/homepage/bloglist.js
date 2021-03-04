import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { getAllBlogPostsFrontmatter } from '../lib/blog';
import { DateTime } from 'luxon';

export async function getStaticProps() {
  const posts = await getAllBlogPostsFrontmatter();

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Kyle's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen px-3 flex flex-col justify-center items-center">
        <main className="py-20 flex-grow max-w-xl flex flex-col space-y-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/me.jpg"
              alt="Kyle Pfromer"
              width={150}
              height={150}
              layout="fixed"
              className="rounded-full"
            />

            <h1 className="leading-tight text-6xl text-center font-bold my-3">Kyle Pfromer</h1>
          </div>

          <div className="text-xl space-y-4">
            <p>
              Hello, I'm Kyle. I'm a student at CU Boulder, that likes to program. You can check me
              out on{' '}
              <a href="https://github.com/kpfromer" className="text-blue-500 hover:underline">
                GitHub
              </a>
              .
            </p>

            <p>(This is a sample website!)</p>
          </div>

          <h1 className="font-bold text-3xl">Blog</h1>

          <ul className="space-y-5">
            {posts.map((post) => (
              <li key={post.title}>
                <NextLink href={`/blog/${post.slug}`}>
                  <a className="space-y-3 text-xl">
                    <h2 className="text-blue-500 hover:underline">{post.title}</h2>
                    <div className="text-gray-400">
                      <time>{DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_FULL)}</time>
                    </div>
                  </a>
                </NextLink>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
