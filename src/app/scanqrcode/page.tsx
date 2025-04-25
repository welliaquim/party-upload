"use client";

import Image from "next/image";
import Link from "next/link";
import QrCodeSkel from "/public/qrcodeSkel.png";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";

export default function Scanqrcode() {
  const [albumCode, setAlbumCode] = useState("");

  return (
    <main className="bg-background flex min-h-svh flex-col p-4">
      {albumCode != "" ? (
        <div className="flex justify-between">
          <Link href="/"> Voltar </Link>
          <p className="font-bold">Álbum existente</p>
          <button>Seg.</button>
        </div>
      ) : (
        <Header title="Álbum existente" />
      )}

      <div className="mt-10 flex flex-col gap-5 p-2 text-center">
        <p className="p-5 text-xs font-light text-pretty">
          Você pode participar de um álbum existente inserindo o código ou
          escaneando o QR Code da pulseira.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Digite o código do álbum</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Código do álbum"
              value={albumCode}
              onChange={(e) => {
                setAlbumCode(e.target.value);
              }}
            />
          </CardContent>
        </Card>
        <Card className="gap-4">
          <CardHeader>
            <CardTitle>Escanear QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-accent flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src={QrCodeSkel}
                alt="QR Code image"
                width={32}
                height={32}
                className="opacity-50"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
