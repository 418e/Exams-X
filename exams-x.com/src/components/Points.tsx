export default function PointsBoard({
  points,
  lost_points,
  total_points,
  problem,
  total_problems,
  timer,
}: {
  points: number;
  lost_points: number;
  total_points: number;
  problem: number;
  total_problems: number;
  timer: boolean;
}) {
  return (
    <div className="mb-8 xl:-mb-32 ml-8 rounded-md border-2 p-2 w-96  border-black dark:text-white dark:border-white z-10">
      <div className="text-center">
        {problem}/{total_problems}
      </div>
      <div>
        მოპოვებული ქულები: {points} / {total_points}
      </div>
      <div>დაკარგული ქულები: {lost_points}</div>
      <div>Timer: Soon</div>
    </div>
  );
}
