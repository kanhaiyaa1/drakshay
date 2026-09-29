import SectionHeading from "./SectionHeading";

const quotes = [
  {
    text: "These 2 people are doing a wonderful job. With such a vast syllabus, clearing this exam at the first attempt was a long shot for me, but Akshay sir and Maitrayee ma'am made it easy for me.",
    name: "Vijayambika JB",
  },
  {
    text: "Dr Akshay Bali's sessions on Clinical Governance and Forensic Medicine were also very good.",
    name: "Prachi Sudhir Kate",
  },
  {
    text: "Best of all..Best teachers Dr Bali Sir n Dr Roy Ma'am..they teach with dedication and support you till your final step in FRCPath histopath...a must do course.",
    name: "Suyash Vishwaroop",
  },
  {
    text: "Dr. Akshay Bali and Dr. Maitrayee are great teachers. Notes and practice tests are great. Lectures are thought provoking and give a good insight into UK related protocols.",
    name: "H Mohamadi",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function Testimonials() {
  // The set is rendered 4 times and the track shifts by exactly one set (-25%),
  // so the loop is seamless even on very wide screens.
  const copies = [0, 1, 2, 3];

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="testimonials-title" title="Student Testimonials" />
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max">
          {copies.map((copy) =>
            quotes.map((q) => (
              <figure
                key={`${copy}-${q.name}`}
                aria-hidden={copy > 0}
                className="mr-6 flex w-80 shrink-0 flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-[26rem]"
              >
                <blockquote className="mb-8 text-base leading-relaxed text-gray-700 sm:text-lg">
                  {q.text}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white ring-4 ring-navy-50"
                  >
                    {initials(q.name)}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{q.name}</span>
                    <span className="block text-sm text-gray-500">
                      eLearningFRCPath student &middot; Facebook review
                    </span>
                  </span>
                </figcaption>
              </figure>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
