"use client";

import CardActionBox from "@/components/cardActionBox";
import Image from "next/image";
import Link from "next/link";
import QrCodeSkel from "/public/qrcodeSkel.png";
import { useState } from "react";

export default function Scanqrcode() {
  const [albumCode, setAlbumCode] = useState("");

  return (
    <main className="min-h-screen bg-gray-950 p-4 flex flex-col">
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
          <p className="font-bold ml-9">Álbum existente</p>
        </div>
      )}

      <div className="mt-10 p-2 text-center gap-5 flex flex-col ">
        <p className="font-light text-xs text-pretty p-5">
          Você pode participar de um álbum existente inserindo o código ou
          escaneando o QR Code da pulseira.
        </p>
        <CardActionBox title={"Digite o código do álbum"}>
          <input
            type="text"
            placeholder="Código do álbum"
            className="text-center font-semibold text-sm placeholder:text-center h-8 w-36 outline-0 bg-neutral-600/20 rounded-2xl"
            value={albumCode}
            onChange={(e) => {
              setAlbumCode(e.target.value);
            }}
          />
        </CardActionBox>
        <CardActionBox title={"Escanear QR Code"}>
          <div className="w-10 h-10 flex justify-center items-center bg-neutral-600/20 rounded-full">
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
