export default function Select({
  options,
  onChange,
  ref,
}: {
  options: {
    value: any;
    text: string;
  }[];
  onChange?: (e: any) => void;
  ref?: any;
}) {
  return (
    <select
      ref={ref}
      className="text-lg w-full md:w-64 h-12 px-4 focus:outline-none border-2 border-black bg-white cursor-pointer dark:border-white dark:bg-black"
      onClick={onChange}
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
}
