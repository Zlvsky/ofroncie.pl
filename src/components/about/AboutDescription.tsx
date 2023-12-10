import Image from 'next/image';
import React from 'react';
import SocialIcons from '../common/SocialIcons';

function AboutDescription() {

    const meImage = "/images/me.jpg";
    
    const Text = ({ children }: any) => (
      <p className="text-xl font-medium text-white ">{children}</p>
    );

    return (
      <div className="flex flex-col md:flex-row items-center ustify-center gap-5 md:gap-10 mx-auto mt-20">
        <div className="flex flex-col justify-center md:text-left md:w-3/5 gap-5">
          <Text>Cześć wszystkim {"(●'◡'●)"}</Text>
          <Text>
            Ja nazywam się Krzyś i na codzień pracuje jako Frontend Developer, a
            konkretniej tworzę od podstaw aplikacje webowe za pomocą Reacta dla
            mniejszych i większych startupów.
          </Text>
          <Text>Komerycyjnie zajmuje się również tworzeniem stron oraz sklepów internetowych w Wordpressie</Text>
          <Text>Hobbystycznie rozwijam swój projekt gry webowej, tworząc jednocześnie front-end, back-end i UI🤸</Text>
          <Text>Możesz też zajrzeć na moje sociale 👇</Text>
          <SocialIcons />
        </div>
        <div className="md:w-2/5 h-auto">
          <Image
            src={meImage}
            alt="Krzysztof Zaleski"
            width={450}
            height={450}
            className="rounded-3xl"
          />
        </div>
      </div>
    );
}

export default AboutDescription;