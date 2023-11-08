import Link from "next/link";
import { Md123, MdLanguage, MdTranslate } from "react-icons/md";

export default function ChooseList() {
  return (
    <>
      <section className="bg-white dark:bg-black dark:text-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="flex items-center gap-2 justify-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
              href="/start/math"
            >
              <Md123 size={32} />

              <h2 className="text-xl font-bold dark:text-white text-black">
                მათემატიკა
              </h2>
            </Link>

            {/* <Link
              className="flex items-center gap-2 justify-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
              href="/start"
            >
              <MdTranslate size={32} />

              <h2 className="text-xl font-bold dark:text-white text-black">
                ინგლისური
              </h2>
            </Link>

            <Link
              className="flex items-center gap-2 justify-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
              href="/start"
            >
              <MdLanguage size={32} />

              <h2 className="text-xl font-bold dark:text-white text-black">
                ქართული
              </h2>
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
