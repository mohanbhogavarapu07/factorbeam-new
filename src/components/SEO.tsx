import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schema?: object;
  keywords?: string;
}

const SEO = ({ 
  title, 
  description, 
  canonicalUrl = 'https://factorbeam.com',
  schema,
  keywords = 'FactorBeam, career guidance, psychometric test, GATE prep, skill assessment, brain games, Python quiz, SQL quiz'
}: SEOProps) => {
  const fullTitle = title.includes('FactorBeam') ? title : `${title} | FactorBeam`;
  
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FactorBeam",
    "url": "https://factorbeam.com",
    "logo": "https://factorbeam.com/logo.png",
    "description": "Career guidance and skill mastery platform with psychometric tests, exam preparation, and skill-building games",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://factorbeam.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Remove any existing favicon references */}
      <link rel="icon" href="data:," />
      <link rel="shortcut icon" href="data:," />
      <link rel="apple-touch-icon" href="data:," />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://factorbeam.com/og-image.png" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://factorbeam.com/og-image.png" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(globalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
