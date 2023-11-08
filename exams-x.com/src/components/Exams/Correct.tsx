export default function Correct({ correct }: { correct: boolean }) {
  return (
    <div className="w-full flex justify-center">
      <div
        role="alert"
        className={`rounded-xl border-2 bg-white p-4 dark:bg-black max-w-xl ${
          correct
            ? " border-green-600 dark:border-green-400 "
            : " border-red-600 dark:border-red-500 "
        }`}
      >
        <div className="flex items-center justify-center">
          <strong className="font-medium text-gray-900 dark:text-white">
            პასუხი {correct ? "სწორია": "არასწორია"}
          </strong>
        </div>
      </div>
    </div>
  );
}
