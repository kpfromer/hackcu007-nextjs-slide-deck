import Head from 'next/head';
import Image from 'next/image';

export default function BlogPost() {
  const title = 'First Blog Post';

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen px-3">
        <div className="mx-auto max-w-xl py-20">
          <main className="flex flex-col space-y-5">
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

            <h1 className="leading-tight text-4xl font-bold">{title}</h1>
          </main>
        </div>
      </div>
    </>
  );
}
