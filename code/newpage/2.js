import Head from 'next/head';
import Image from 'next/image';

export default function BlogPost() {
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

            <h1 className="leading-tight text-3xl text-center font-bold my-3">Kyle Pfromer</h1>
          </div>
        </main>
      </div>
    </>
  );
}
