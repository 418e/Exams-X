import {
  MdFileCopy,
  MdBook,
  MdPerson2,
  MdSource,
  MdLockPerson,
  MdMoneyOff,
} from "react-icons/md";
import Link from "next/link";

export default function Features() {
  return (
    <section className="bg-white dark:bg-black dark:text-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">მიზნები</h2>

          <p className="mt-4 dark:text-white text-black">
            ჩვენი მიზანია შევქმნათ აპლიკაცია რომელიც დაეხმარება მოსწავლეებს
            მოემზადონ ეროვნული გამოცდებისთვის, გაიგონ სუსტი და ძლიერი მხარეები
            და გადალახონ სირთულეები.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
            href="/"
          >
            <MdFileCopy size={32} />

            <h2 className="mt-4 text-xl font-bold dark:text-white text-black">
              სავარჯიშოები
            </h2>

            <p className="mt-1 text-sm dark:text-white text-black">
              თქვენზე მორგებული და მარტივად გასამართი სავარჯიშოები წარსულში
              ჩატარებული ეროვნული ტესტირებებიდან.
            </p>
          </Link>

          <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
            href="/"
          >
            <MdBook size={32} />

            <h2 className="mt-4 text-xl font-bold dark:text-white text-black">
              მორგებული
            </h2>

            <p className="mt-1 text-sm dark:text-white text-black">
              გაიგე შენი სუსტი და ძლიერი მხარეები და გამოასწორე შეცდომები,
              პერსონალიზირებული ალგორითმის გამოყენებით.
            </p>
          </Link>

          <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
            href="/"
          >
            <MdPerson2 size={32} />

            <h2 className="mt-4 text-xl font-bold dark:text-white text-black">
              პერსონალიზირებული
            </h2>

            <p className="mt-1 text-sm dark:text-white text-black">
              მიიღე პერსონალიზირებული სავარჯიშოები, შედეგები და რჩევები შენზე
              მორგებული ალგორითმის საშუალებით.
            </p>
          </Link>
          <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
            href="/"
          >
            <MdMoneyOff size={32} />

            <h2 className="mt-4 text-xl font-bold dark:text-white text-black">
              უფასო
            </h2>

            <p className="mt-1 text-sm dark:text-white text-black">
              ვებ-გვერდზე არ ხდება რეკლამების განთავსება ან ფასიანი პროდუქტების
              შეთავაზება. სერვისები რომლებსაც ჩვენ გთავაზობთ არის სრულიად უფასო.
            </p>
          </Link>
          <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
            href="/"
          >
            <MdSource size={32} />

            <h2 className="mt-4 text-xl font-bold dark:text-white text-black">
              Open-Source
            </h2>

            <p className="mt-1 text-sm dark:text-white text-black">
              ვებ-გვერდის კოდი არის ღია. რაც იმას იმას ნიშნავს, რომ ყველას
              შეუძლია ნახოს კოდი და წვლილი შეიტანოს მის განვითარებაში.
            </p>
          </Link>

          <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black/10 hover:shadow-black/10 dark:hover:border-white/10 dark:hover:shadow-white/10"
            href="/"
          >
            <MdLockPerson size={32} />

            <h2 className="mt-4 text-xl font-bold dark:text-white text-black">
              უსაფრთხო
            </h2>

            <p className="mt-1 text-sm dark:text-white text-black">
              თქვენი პერსონალური ინფორმაცია დაცულია. ვებ-გვერდზე არ ხდება
              რეკლამების განთავსება ან თქვენი ინფორმაციის მესამე მხარესთან
              გაზიარება.
            </p>
          </Link>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/start"
            className="inline-block rounded bg-black dark:bg-white px-12 py-3 text-sm font-medium text-white dark:text-black transition hover:bg-black dark:hover:bg-white focus:outline-none"
          >
            დაიწყე ახლავე
          </Link>
        </div>
      </div>
    </section>
  );
}
