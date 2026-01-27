import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} | EterniEdu</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={`${title} | EterniEdu`} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: 'Future of Education',
  description: 'EterniEdu provides premium education for 10th, 11th, 12th, NEET, JEE, CET, and Programming.',
  keywords: 'education, learning, neet, jee, cet, programming, courses, 10th, 11th, 12th',
};

export default SEO;
