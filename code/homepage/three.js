import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen px-3 flex flex-col justify-center items-center">
        <main className="py-20 flex-grow flex flex-col justify-center items-center">
          <h1 className="leading-tight text-6xl text-center">
            Welcome to{' '}
            <a href="https://hackcu.org/007" className="text-blue-500 hover:underline">
              HackCU 007!
            </a>
          </h1>

          <p className="text-center">
            Get started by editing{' '}
            <code className="bg-gray-50 rounded p-3 text-lg font-mono">pages/index.js</code>
          </p>
        </main>
      </div>
    </>
  );
}
