type GridLayoutType = {
  children: React.ReactNode;
  size: string;
  additional_class: string;
};

export default function GridLayout({
  children,
  size,
  additional_class,
}: GridLayoutType) {
  const max_width =
    size === "boxed"
      ? "max-w-[1440px] px-4 md:px-11"
      : "max-w-[1550px] px-0 md:px-11";
  return (
    <div className={`${max_width} m-auto 2xl:px-0 ${additional_class}`}>
      {children}
    </div>
  );
}
