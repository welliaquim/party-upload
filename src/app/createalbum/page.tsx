"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 p-4 flex flex-col justify-around">
      <Link href="/"> Voltar </Link>
    </main>
  );
}
