"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around bg-gray-950 p-4">
      <Link href="/"> Voltar </Link>
    </main>
  );
}
