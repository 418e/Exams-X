import Link from "next/link";
import { translate } from "@/data";
export default function Final({
  Points,
  LostPoints,
  TotalProblems,
  StrongTags,
  WeakTags,
}: {
  Points: number;
  LostPoints: number;
  TotalProblems: number;
  StrongTags: number[];
  WeakTags: number[];
}) {
  return (
    <div className="w-full flex justify-center py-8">
      <ul className="space-y-2 ">
        <li>შესრულებული დავალებები: {TotalProblems}</li>
        <li>დაგროვებული ქულები: {Points}</li>
        <li>დაკარგული ქულები: {LostPoints}</li>
        <li>შესრულების დრო:</li>
        <li>
          სწორად შესრულებული დავალებები:
          <ul className="space-y-2 mt-4 text-sm">
            {StrongTags?.filter(
              (item, index) => StrongTags.indexOf(item) === index
            ).map((tag: number) => {
              return (
                <li key={tag} className="font-bold cursor-pointer hover:underline">
                  <Link href={`/start/math/${translate(tag).id}`}>
                    {translate(tag).tag}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          არასწორად შესრულებული დავალებები:
          <ul className="space-y-2 mt-4 text-sm">
            {WeakTags?.filter(
              (item, index) => WeakTags.indexOf(item) === index
            ).map((tag: number) => {
              return (
                <li
                  key={tag}
                  className="font-bold cursor-pointer hover:underline"
                >
                  <Link href={`/start/math/${translate(tag).id}`}>
                    {translate(tag).tag}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
