import Link from "next/link";
export default function Banner() {
  return (
    <section className="dark:bg-black dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 dark:from-gray-300 dark:via-gray-500 dark:to-gray-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            EXAMS-X
            <span className="sm:block sm:py-2"> სლოგანს მერე მოვიფიქრებ. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-black dark:border-white bg-black dark:bg-white px-12 py-3 text-sm font-medium text-white dark:text-black hover:bg-transparent hover:text-black   dark:hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all"
              href="/"
            >
              დაიწყე ახლავე
            </Link>

            <Link
              className="block w-full rounded border border-black dark:border-white px-12 py-3 text-sm font-medium text-black dark:text-white hover:bg-white dark:hover:bg-black focus:outline-none focus:ring active:bg-black dark:active:bg-white sm:w-auto transition-all active:text-whtie dark:active:text-black"
              href="/"
            >
              გაიგე მეტი
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
