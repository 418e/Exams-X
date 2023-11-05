export default function Final({
  Points,
  LostPoints,
  TotalProblems,
}: {
  Points: number;
  LostPoints: number;
  TotalProblems: number;
}) {
    return <div className="w-full flex justify-center py-8">
        <ul className="space-y-2">
            <li>შესრულებული დავალებები: {TotalProblems}</li>
            <li>დაგროვებული ქულები: {Points}</li>
            <li>დაკარგული ქულები: {LostPoints}</li>
            <li>შესრულების დრო:</li>
            <li>შესრულების დრო დავალებაზე:</li>
            <li>კარგად შესრულებული თემები:</li>
            <li>ცუდად შესრულებული თემები:</li>
            <li>ნელა შესრულებული თემები:</li>
            <li>პროგრესი:</li>
        </ul>
    </div>
}
