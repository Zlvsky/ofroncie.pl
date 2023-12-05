import React from 'react';

import BigContainer from '../layout/BigContainer';
import AboutInfo from '../common/AboutInfo';

function MainAbout() {
    return (
      <div className="w-full items-center bg-darkBg rounded-t-[3.75rem] h-full pt-32 pb-12 -mt-14 ">
        <BigContainer>
          <AboutInfo />
        </BigContainer>
      </div>
    );
}

export default MainAbout;