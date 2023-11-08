import Link from "next/link";
export default function Footer({ theme }: { theme: string }) {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div>
              <img
                src={`${theme == "dark" ? "/ex-x-2.png" : "/ex-x.png"}`}
                alt="Exams-X"
              />
            </div>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              შენი განათლება შენს ხელშია.
            </p>

            <ul className="mt-8 flex gap-6">
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                ტესტები
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/start/math"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    მათემატიკა
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2023
          {new Date().getFullYear() !== 2023 &&
            ` - ${new Date().getFullYear()}`}
          . Exams-X. ყველა უფლება დაცულია.
        </p>
      </div>
    </footer>
  );
}