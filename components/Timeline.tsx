import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const milestones = [
  { year: "2010–2013", text: "MD Pathology, Jawaharlal Nehru Medical College, Belgaum, Karnataka" },
  { year: "2013", text: "Cleared MD Pathology and built a foundation in pathology" },
  { year: "2014–2016", text: "Chief of Laboratory, Dr Lal PathLabs" },
  {
    year: "2016",
    text: "Established a standalone histopathology lab in Ambala, bridging the gap between quality histopathology services and regional demand",
  },
  { year: "2016–present", text: "Consultant Pathologist and Co-owner, Maitri Diagnostic Lab" },
  { year: "2019", text: "Cleared FRCPath Part 1 and attained DipRCPath (UK)" },
  {
    year: "2019/2020",
    text: "Founded eLearningFRCPath, the first in India to offer structured FRCPath coaching",
  },
  { year: "Ongoing", text: "12+ batches mentored for FRCPath Part 1" },
];

export default function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-title" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="timeline-title" title="Career Timeline" />
        <ol className="relative ml-3 border-l-2 border-navy-100">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.year + m.text} delay={(i % 4) * 80} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-navy bg-white" />
              <p className="text-sm font-bold uppercase tracking-wide text-navy-500">
                {m.year}
              </p>
              <p className="mt-1 max-w-2xl text-gray-700">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
