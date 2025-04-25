"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around bg-gray-950 p-4">
      <div className="flex flex-col items-center gap-5">
        <h1 className="justify-center p-2 text-center text-2xl text-pretty">
          Com quem você quer dividir os registros de um dia tão especial?
        </h1>
        <Link
          className="rounded-2xl bg-blue-500 px-4 py-1 font-light transition-all hover:scale-110 hover:bg-blue-600 hover:ease-in"
          href="/createalbum"
        >
          Criar um álbum
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-500">Já possui um QR Code?</span>
        <Link
          href="/scanqrcode"
          className="font-medium text-blue-300 transition-colors hover:text-blue-500"
        >
          Participar de um álbum
        </Link>
      </div>
    </main>
  );
}
