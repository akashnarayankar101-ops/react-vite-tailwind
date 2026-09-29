import { useEffect } from "react";
import { FAQS, LAB, TEST } from "../data";

export default function Seo() {
  useEffect(() => {
    const data = [
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: LAB.name,
        description:
          "Blood collection centre in Dharavi - Sion, Mumbai offering HAV IgG Ab (Hepatitis A IgG Antibody) test and full pathology services with free home sample collection.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dharavi - Sion",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        telephone: "+91-9892223371",
        openingHours: "Mo-Su 08:00-23:00",
        priceRange: "₹₹",
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalTest",
        name: TEST.fullName,
        alternateName: ["HAV IgG Ab", "Anti-HAV IgG", "Hepatitis A Antibody IgG"],
        usedToDiagnose: "Hepatitis A immunity / past Hepatitis A infection",
        offers: {
          "@type": "Offer",
          price: TEST.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: { "@type": "MedicalBusiness", name: LAB.name },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ];

    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(data);
    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
  }, []);

  return null;
}
