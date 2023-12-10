import About from '@/components/about/About';
import Header from '@/components/header/Header';
import BigContainer from '@/components/layout/BigContainer';
import PageWrap from '@/components/layout/PageWrap';
import { NextSeo } from 'next-seo';
import React from 'react';

const title = "oFroncie.pl - O mnie";
const description = "Troche słów o tym kim jestem i czym się zajmuję :)";
const url = "https://ofroncie.pl/o-mnie";

function AboutPage() {
    return (
      <>
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url,
            title,
            description,
            // images: [
            //   {
            //     url: imageThumbnail,
            //     alt: title,
            //     width: 1200,
            //     height: 628,
            //   },
            // ],
          }}
        />
        <Header />
        <PageWrap>
          <BigContainer>
            <About />
          </BigContainer>
        </PageWrap>
      </>
    );
}

export default AboutPage;