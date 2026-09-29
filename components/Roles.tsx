import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Co-owner & Consultant Pathologist",
    org: "Maitri Diagnostic Lab, Ambala",
    period: "Aug 2016 – present",
    points: [
      "Hematology: in charge of the department",
      "Clinical Pathology: in charge of the department",
      "Assists in histopathology and oncopathology reporting",
      "Grossing of histopathology samples",
    ],
    logo: { src: "/maitri-diagnostics-logo.png", alt: "Maitri Diagnostics logo", width: 329, height: 193 },
    address: "Barnala Road, Baldev Nagar, Delhi-Chandigarh Highway, Ambala City",
    footer: "maitridiagnosticlab.in",
    href: "https://maitridiagnosticlab.in/" as string | undefined,
  },
  {
    title: "Founder & Owner",
    org: "AM PATH E-Learning Private Limited (eLearningFRCPath.com)",
    period: "Jun 2020 – present",
    points: [
      "First in India to offer structured coaching for the FRCPath examination",
      "12+ batches mentored for FRCPath Part 1",
      "Covers FRCPath Part 1 and Part 2: short cases, long cases, OSPE, viva, cytology, clinical governance, forensic pathology and applied histology",
      "Co-faculty: Dr. Maitrayee Roy, MD FRCPath (Histopathology)",
    ],
    logo: { src: "/elearningfrcpath-logo.png", alt: "eLearning FRCPath logo", width: 380, height: 125 },
    address: undefined as string | undefined,
    footer: "eLearningFRCPath.com",
    href: "https://elearningfrcpath.com" as string | undefined,
  },
];

export default function Roles() {
  return (
    <section id="roles" aria-labelledby="roles-title" className="bg-[#d6e9f7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="roles-title" title="Current Roles" />
        <div className="grid gap-8 md:grid-cols-2">
          {roles.map((r, i) => (
            <Reveal
              as="article"
              key={r.org}
              delay={i * 120}
              className="flex flex-col rounded-xl border border-gray-100 bg-[#d6e9f7] p-8 shadow-md hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={r.logo.src}
                alt={r.logo.alt}
                width={r.logo.width}
                height={r.logo.height}
                className="mb-6 h-20 w-auto self-start rounded-md"
              />
              <p className="text-sm font-semibold text-navy-500">{r.period}</p>
              <h3 className="mt-2 text-xl font-bold text-navy">{r.title}</h3>
              <p className="mt-1 font-medium text-gray-700">{r.org}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-700">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-auto pt-6 text-sm text-gray-500">
                {r.address && <p className="mb-2">{r.address}</p>}
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-navy underline-offset-4 transition-colors hover:text-navy-500 hover:underline"
                  >
                    {r.footer} &rarr;
                  </a>
                ) : (
                  r.footer
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
