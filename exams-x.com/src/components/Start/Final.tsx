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
  console.log(StrongTags, WeakTags);
  return (
    <div className="w-full flex justify-center py-8">
      <ul className="space-y-2">
        <li>შესრულებული დავალებები: {TotalProblems}</li>
        <li>დაგროვებული ქულები: {Points}</li>
        <li>დაკარგული ქულები: {LostPoints}</li>
        <li>შესრულების დრო:</li>
        <li>შესრულების დრო დავალებაზე:</li>
        <li>
          კარგად შესრულებული თემები:
          <ul>
            {StrongTags?.filter(
              (item, index) => StrongTags.indexOf(item) === index
            ).map((tag: number) => {
              return <li key={tag}>{translate(tag).tag}</li>;
            })}
          </ul>
        </li>
        <li>
          ცუდად შესრულებული თემები:
          <ul>
            {WeakTags?.filter(
              (item, index) => WeakTags.indexOf(item) === index
            ).map((tag: number) => {
              return <li key={tag}>{translate(tag).tag}</li>;
            })}
          </ul>
        </li>
        <li>ნელა შესრულებული თემები:</li>
        <li>პროგრესი:</li>
      </ul>
    </div>
  );
}
