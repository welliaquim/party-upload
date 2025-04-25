import Link from "next/link";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <div className="flex">
      <Link href="/" className="mr-10">
        Voltar
      </Link>
      <p className="ml-9 font-bold">{title}</p>
    </div>
  );
}
