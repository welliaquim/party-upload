type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CardActionBox({ title, children }: Props) {
  return (
    <div className="flex h-24 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-neutral-600/20 p-3">
      <p className="text-sm font-light">{title}</p>
      {children}
    </div>
  );
}
