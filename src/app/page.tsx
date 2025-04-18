"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 p-4 flex flex-col justify-around">
      <div className="flex flex-col items-center gap-5">
        <h1 className="p-2 text-2xl justify-center text-center text-pretty">
          Com quem você quer dividir os registros de um dia tão especial?
        </h1>
        <button className="bg-blue-500 rounded-2xl px-4 py-1 font-light hover:scale-110 hover:bg-blue-600 transition-all hover:ease-in">
          Criar um álbum
        </button>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-gray-500">Já tem um código ou um QR Code?</span>
        <a
          href=""
          className="text-blue-300 font-medium hover:text-blue-500 transition-colors"
        >
          Participar de um álbum
        </a>
      </div>
    </main>
  );
}
