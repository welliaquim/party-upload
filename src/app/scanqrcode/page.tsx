"use client";

import CardActionBox from "@/components/cardActionBox";
import Image from "next/image";
import Link from "next/link";
import QrCodeSkel from "/public/qrcodeSkel.png";
import { useState } from "react";

export default function Scanqrcode() {
  const [albumCode, setAlbumCode] = useState("");

  return (
    <main className="flex min-h-screen flex-col bg-gray-950 p-4">
      {albumCode != "" ? (
        <div className="flex justify-between">
          <Link href="/"> Voltar </Link>
          <p className="font-bold">Álbum existente</p>
          <button>Seg.</button>
        </div>
      ) : (
        <div className="flex">
          <Link href="/" className="mr-10">
            Voltar
          </Link>
          <p className="ml-9 font-bold">Álbum existente</p>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-5 p-2 text-center">
        <p className="p-5 text-xs font-light text-pretty">
          Você pode participar de um álbum existente inserindo o código ou
          escaneando o QR Code da pulseira.
        </p>
        <CardActionBox title={"Digite o código do álbum"}>
          <input
            type="text"
            placeholder="Código do álbum"
            className="h-8 w-36 rounded-2xl bg-neutral-600/20 text-center text-sm font-semibold outline-0 placeholder:text-center"
            value={albumCode}
            onChange={(e) => {
              setAlbumCode(e.target.value);
            }}
          />
        </CardActionBox>
        <CardActionBox title={"Escanear QR Code"}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-600/20">
            <Image
              src={QrCodeSkel}
              alt=""
              width={20}
              height={20}
              className="opacity-50"
            />
          </div>
        </CardActionBox>
      </div>
    </main>
  );
}
