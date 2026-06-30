import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/about.php", destination: "/about", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/ielts.php", destination: "/services/ielts", permanent: true },
      { source: "/services/ielts-training", destination: "/services/ielts", permanent: true },
      { source: "/imat-prepration.php", destination: "/services/imat-preparation", permanent: true },
      { source: "/imat-preparation.php", destination: "/services/imat-preparation", permanent: true },
      { source: "/scholarship.php", destination: "/services/scholarship-guidance", permanent: true },
      { source: "/admission.php", destination: "/services/admission-guidance", permanent: true },
      { source: "/financial.php", destination: "/services/financial-assistance", permanent: true },
      // MBBS Country redirects
      { source: "/mbbs-in-italy.php", destination: "/mbbs/italy", permanent: true },
      { source: "/mbbs-in-romania.php", destination: "/mbbs/romania", permanent: true },
      { source: "/mbbs-in-bulgaria.php", destination: "/mbbs/bulgaria", permanent: true },
      { source: "/mbbs-in-russia.php", destination: "/mbbs/russia", permanent: true },
      { source: "/mbbs-in-georgia.php", destination: "/mbbs/georgia", permanent: true },
      { source: "/mbbs-in-kazakhstan.php", destination: "/mbbs/kazakhstan", permanent: true },
      { source: "/mbbs-in-kyrgyzstan.php", destination: "/mbbs/kyrgyzstan", permanent: true },
      { source: "/mbbs-in-poland.php", destination: "/mbbs/poland", permanent: true },
      { source: "/mbbs-in-hungary.php", destination: "/mbbs/hungary", permanent: true },
      { source: "/mbbs-in-serbia.php", destination: "/mbbs/serbia", permanent: true },
      // Study Destination redirects
      { source: "/study-in-Uk.php", destination: "/destinations/uk", permanent: true },
      { source: "/study-in-austria.php", destination: "/destinations/australia", permanent: true }, // Verified as Australia
      { source: "/study-in-USA.php", destination: "/destinations/usa", permanent: true },
      { source: "/study-in-canada.php", destination: "/destinations/canada", permanent: true },
      { source: "/study-in-germany.php", destination: "/destinations/germany", permanent: true },
      { source: "/study-in-ireland.php", destination: "/destinations/ireland", permanent: true },
      { source: "/study-in-newzealand.php", destination: "/destinations/new-zealand", permanent: true },
      { source: "/study-in-france.php", destination: "/destinations/france", permanent: true },
      { source: "/study-in-italy.php", destination: "/destinations/italy", permanent: true },
      { source: "/study-in-spain.php", destination: "/destinations/spain", permanent: true },
      { source: "/study-in-romania.php", destination: "/destinations/romania", permanent: true },
      // Blog and Events redirects
      { source: "/blogs.php", destination: "/blogs", permanent: true },
      { source: "/events.php", destination: "/events", permanent: true },
      // Legal redirects
      { source: "/terms-and-conditions.php", destination: "/terms-and-conditions", permanent: true },
      { source: "/privacy-policy.php", destination: "/privacy-policy", permanent: true },
      { source: "/refund-policy.php", destination: "/refund-policy", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
    ];
  },
};

export default nextConfig;
