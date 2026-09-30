import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export const publications: { title: string; journal: string; date: string; url?: string }[] = [
  { title: "Simple Nephrectomy for Non-Functioning Kidney: An Institutional Experience with Non-Neoplastic and Incidentally Detected Neoplastic Lesions", journal: "International Journal of Surgical Pathology", date: "May 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40415282/" },
  { title: "Screening of Peripheral Blood Film for Abnormalities in Leucocyte Morphology in Mild to Moderate COVID-19", journal: "International Journal of Science and Research", date: "May 2022" },
  { title: "M2G1G2 White Blood Cell Flag by Three-Part Automated Hematology Analyzer: A Hint to Dengue Infection", journal: "Journal of Laboratory Physicians", date: "Apr 2019" },
  { title: "Vimentin Positive Acantholytic Penile Squamous Cell Carcinoma with Rhabdoid Features", journal: "Journal of Cancer Research and Therapeutics", date: "Apr 2014" },
  { title: "Polycystic Horseshoe Kidney", journal: "Medical Journal Armed Forces India", date: "Mar 2014" },
  { title: "Intensive Method of Assessment and Classification of the Bone Marrow Iron Status: A Study of 80 Patients", journal: "Indian Journal of Pathology and Microbiology", date: "Aug 2013" },
  { title: "Primary Cutaneous Leiomyosarcoma: A Rare Malignant Neoplasm", journal: "Indian Dermatology Online Journal", date: "Jul 2013" },
  { title: "Congenital Diaphragmatic Hernia with Hypoplastic Lungs, Heart, and Additional Anomalies", journal: "Journal of Dr YSR University of Health Sciences", date: "Jan 2013" },
  { title: "Severe Aplastic Anemia Manifesting After Complete Remission of Acute Promyelocytic Leukemia: Is it a Fortuitous Association?", journal: "Indian Journal of Hematology and Blood Transfusion", date: "Oct 2012" },
  { title: "Cutaneous Clear Cell Sarcoma: A Rare Aggressive Tumor with Potential Diagnostic Challenge", journal: "Journal of Laboratory Physicians", date: "Jul 2012" },
  { title: "Cutaneous Epithelioid Angiosarcoma: A Rare Aggressive Neoplasm", journal: "Indian Journal of Dermatology, Venereology and Leprology", date: "Jul 2012" },
];

export default function Publications() {
  return (
    <section id="publications" aria-labelledby="publications-title" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="publications-title" title="Publications" />
        <p className="-mt-6 mb-10 text-gray-600">
          11 publications, with approximately 74 citations on ResearchGate.
        </p>
        <ol className="space-y-4">
          {publications.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              className="flex gap-5 rounded-lg bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-2xl font-bold text-navy-100">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  <em>{p.journal}</em>, {p.date}
                </p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-navy-500 underline-offset-4 transition-colors hover:text-navy hover:underline"
                  >
                    View on PubMed &rarr;
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
