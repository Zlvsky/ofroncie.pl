const title = 'oFroncie.pl by Krzysztof Zaleski';
const description =
  'Artykuły dla front-end developerów. React, TypeScript, PIXI.js, CSS i wiele więcej.';
const url = 'https://ofroncie.pl/';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url,
    title,
    description,
    images: [
      {
        url: `${url}images/home.png`,
        alt: title,
        width: 1200,
        height: 628,
      },
    ],
  }
};

export default SEO;
