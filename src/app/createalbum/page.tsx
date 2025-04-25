"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CameraIcon, PenIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background flex min-h-svh flex-col gap-10 p-4">
      <Header title="Álbum privado" />

      <Card className="h-40 items-center justify-center gap-2">
        <CardContent>
          <CameraIcon />
        </CardContent>
        <CardContent>Foto de capa</CardContent>
      </Card>
      <div className="flex flex-col gap-2">
        <span className="flex gap-2">
          <PenIcon className="w-4" />
          <p>Nome do evento</p>
        </span>
        <Input className="w-full" placeholder="Adicione um nome ao evento" />
      </div>
      <Button className="bg-primary-foreground mt-80 w-40 self-center">
        Continuar
      </Button>
    </main>
  );
}
