"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      imageUrl: "/dota2.png",
      date: "15/04/2025",
      time: "17:32",
      message: "Parabéns aos noivos!",
    },
    {
      id: 2,
      imageUrl: "/home.png",
      date: "15/04/2025",
      time: "18:05",
      message: "Dia incrível!",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F9F9F6] p-4">
      <h1 className="text-2xl font-bold text-center text-[#556B2F] mb-6">
        Álbum do Casamento 💍
      </h1>

      <button className="w-full py-3 rounded-xl bg-[#556B2F] text-white font-semibold mb-8 shadow-md active:scale-95 transition">
        Enviar Foto
      </button>

      <section className="grid grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative h-64 perspective"
            onClick={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
          >
            <div
              className={`w-full h-full transition-transform duration-500 transform ${
                flippedIndex === index ? "rotate-y-180" : ""
              } relative`}
            >
              <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-md">
                <Image
                  width={50}
                  height={50}
                  src={card.imageUrl}
                  alt="Foto do casamento"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Verso do card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-[#556B2F] text-white flex flex-col items-center justify-center p-4 shadow-md">
                <p className="text-sm">📅 {card.date}</p>
                <p className="text-sm">⏰ {card.time}</p>
                {card.message && (
                  <p className="mt-2 text-center text-sm italic">
                    💬 {card.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
