export default function Btn({
  types,
  onClick,
  children,
}: {
  children: string;
  types?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) {
  return (
    <button
      type={types}
      className="border-2 border-black rounded-md font-medium text-lg transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black p-2 px-6 my-8"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
