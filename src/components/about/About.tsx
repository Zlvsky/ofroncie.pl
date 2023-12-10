import React from 'react';
import PageHeader from '../text/PageHeader';
import AboutDescription from './AboutDescription';

function About() {
    return (
      <main id="main">
        <PageHeader>O Mnie</PageHeader>
        <section>
          <AboutDescription />
        </section>
      </main>
    );
}

export default About;