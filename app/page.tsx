import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Hazlo Hoy!</h1>
      <p className="mt-4 text-lg">Your productivity companion.</p>
      <Image
        src="/logo.png"
        alt="Hazlo Hoy Logo"
        width={200}
        height={200}
        className="mt-8"
      />
    </main>
  );
}
