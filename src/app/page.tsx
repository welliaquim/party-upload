"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background flex min-h-svh flex-col justify-around p-4">
      <div className="flex flex-col items-center gap-5">
        <h1 className="justify-center p-2 text-center text-2xl text-pretty">
          Com quem você quer dividir os registros de um dia tão especial?
        </h1>
        <Button asChild>
          <Link href="/createalbum">Criar um álbum</Link>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-muted-foreground">Já possui um QR Code?</span>
        <Button variant="link" asChild>
          <Link href="/scanqrcode">Participar de um álbum</Link>
        </Button>
      </div>
    </main>
  );
}
