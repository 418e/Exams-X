"use client";
export default function PointsBoard({
  points,
  lost_points,
  total_points,
  problem,
  total_problems,
}: {
  points: number;
  lost_points: number;
  total_points: number;
  problem: number;
  total_problems: number;
}) {

  return (
    <div className="mb-8 xl:-mb-32 ml-8 rounded-md border-2 p-2 w-56 md:w-96  border-black dark:text-white dark:border-white z-10">
      <div className="text-center">
        {problem}/{total_problems}
      </div>
      <div>
        მოპოვებული ქულები: {points}
      </div>
      <div>დაკარგული ქულები: {lost_points}</div>
    </div>
  );
}
