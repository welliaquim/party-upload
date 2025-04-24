type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CardActionBox({ title, children }: Props) {
  return (
    <div className="h-24 w-full bg-neutral-600/20 flex flex-col justify-center items-center rounded-2xl gap-2 p-3">
      <p className="font-light text-sm">{title}</p>
      {children}
    </div>
  );
}
