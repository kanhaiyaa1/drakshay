import { publications } from "@/components/Publications";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

// JSON-LD structured data, linked by @id. Facts only, taken from the client bio.
// Facebook/Instagram/YouTube/X belong to the eLearningFRCPath brand, so they are
// listed on the organization, not on the person.

const ID = {
  website: `${SITE_URL}/#website`,
  page: `${SITE_URL}/#webpage`,
  person: `${SITE_URL}/#person`,
  elearning: `${SITE_URL}/#elearningfrcpath`,
  lab: `${SITE_URL}/#maitri-diagnostic-lab`,
};

const MONTHS: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

function isoMonth(date: string) {
  const [month, year] = date.split(" ");
  return `${year}-${MONTHS[month]}`;
}

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ID.website,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": ID.person },
    },
    {
      "@type": "ProfilePage",
      "@id": ID.page,
      url: SITE_URL,
      name: "Dr. Akshay Bali | Pathologist & FRCPath Educator",
      isPartOf: { "@id": ID.website },
      inLanguage: "en-IN",
      mainEntity: { "@id": ID.person },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/dr-akshay-bali.webp` },
    },
    {
      "@type": "Person",
      "@id": ID.person,
      name: SITE_NAME,
      honorificPrefix: "Dr.",
      url: SITE_URL,
      image: `${SITE_URL}/dr-akshay-bali.webp`,
      email: "mailto:aks23bali@gmail.com",
      telephone: "+91-82954-18389",
      jobTitle: "Consultant Pathologist",
      description:
        "Pathologist, teacher and entrepreneur based in Ambala, Haryana. Co-owner of Maitri Diagnostic Lab and founder of eLearningFRCPath.",
      hasOccupation: { "@type": "Occupation", name: "Pathologist" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ambala",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Jawaharlal Nehru Medical College, Belgaum",
        address: { "@type": "PostalAddress", addressLocality: "Belgaum", addressRegion: "Karnataka", addressCountry: "IN" },
      },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "MD Pathology", credentialCategory: "degree" },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DipRCPath (Histopathology), UK",
          credentialCategory: "diploma",
        },
      ],
      knowsAbout: [
        "Hematopathology",
        "Surgical Pathology",
        "Histopathology",
        "Chemical Pathology",
        "Clinical Research",
        "Applied Histology",
        "FRCPath examination coaching",
      ],
      worksFor: [{ "@id": ID.lab }, { "@id": ID.elearning }],
      sameAs: [
        "https://www.linkedin.com/in/akshay-bali-3ab64758/",
        "https://www.researchgate.net/profile/Akshay-Bali",
      ],
    },
    {
      "@type": "DiagnosticLab",
      "@id": ID.lab,
      name: "Maitri Diagnostic Lab",
      url: "https://maitridiagnosticlab.in/",
      logo: `${SITE_URL}/maitri-diagnostics-logo.png`,
      image: `${SITE_URL}/maitri-diagnostics-logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Barnala Road, Baldev Nagar, Delhi-Chandigarh Highway",
        addressLocality: "Ambala City",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      employee: { "@id": ID.person },
    },
    {
      "@type": "EducationalOrganization",
      "@id": ID.elearning,
      name: "AM PATH E-Learning Private Limited",
      alternateName: "eLearningFRCPath",
      url: "https://elearningfrcpath.com",
      logo: `${SITE_URL}/elearningfrcpath-logo.png`,
      description:
        "The first platform in India to offer structured coaching for the FRCPath examination, covering Part 1 and Part 2.",
      foundingDate: "2020-06",
      founder: { "@id": ID.person },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ram Nagar, Baldev Nagar",
        addressLocality: "Ambala City",
        addressRegion: "Haryana",
        postalCode: "134007",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/Pathology-e-learning-platform-for-FRCpath-113541467052109",
        "https://www.instagram.com/elearningfrcpath/",
        "https://www.youtube.com/@drmaitrayeeroyfrcpathdraks3532",
        "https://x.com/elearningf8199",
      ],
    },
    ...publications.map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.title,
      author: { "@id": ID.person },
      datePublished: isoMonth(p.date),
      isPartOf: { "@type": "Periodical", name: p.journal },
      inLanguage: "en",
    })),
  ],
};
