import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="about-title" title="About" />
        <Reveal className="space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            Dr. Akshay Bali is a pathologist, teacher and entrepreneur based in
            Ambala, Haryana. He completed his MD in Pathology at Jawaharlal Nehru
            Medical College, Belgaum, and later cleared FRCPath Part 1 to attain
            the DipRCPath (UK) in Histopathology. He worked as Chief of Laboratory
            at Dr Lal PathLabs before establishing a standalone histopathology lab
            in Ambala in 2016, bridging the gap between quality histopathology
            services and regional demand.
          </p>
          <p>
            He continues to practise as co-owner and consultant pathologist at
            Maitri Diagnostic Lab, where he is in charge of hematology and clinical
            pathology and assists in histopathology and oncopathology reporting.
            Alongside his clinical work, he founded eLearningFRCPath in 2020, the
            first platform in India to offer structured coaching for the FRCPath
            examination, and has mentored more than 12 batches for FRCPath Part 1.
          </p>
          <p>
            His work as a practising pathologist informs how he teaches, and his
            teaching keeps him engaged with examination standards and UK
            protocols. His academic record includes 11 publications, with
            approximately 74 citations on ResearchGate, covering hematopathology,
            dermatopathology, surgical pathology and case reports.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
