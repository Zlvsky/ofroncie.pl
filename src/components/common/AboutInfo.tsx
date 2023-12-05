import MainSVG from "../../../public/images/mainAbout.svg";

import FacebookSVG from "../../../public/icons/facebook.svg";
import GithubSVG from "../../../public/icons/github.svg";
import LinkedinSVG from "../../../public/icons/linkedin.svg";

function AboutInfo() {
    return (
      <div className="flex flex-col md:flex-row items-center ustify-center md:gap-10 max-w-4xl mx-auto">
        <div className="md:w-2/5 h-auto">
          <MainSVG />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left items-center md:w-3/5 text-medium font-medium text-white">
          <p className="leading-7">
            Hej, jestem Krzyś シ
            <br />
            Na co dzień zajmuję się front-endem.
            <br />W wolnej chwili freelancuje jako web-developer, a
            hobbystycznie robię full-stackowe projekty.
            <br />
            <br />
            Mam nadzieję, że znajdziesz na moim blogu coś dla siebie.
          </p>
          <div className="flex flex-row gap-4 md:self-start mt-5">
            <a
              href="https://www.facebook.com/WebZaleskiWebDeveloper"
              target="_blank"
            >
              <FacebookSVG />
            </a>
            <a
              href="https://www.linkedin.com/in/krzysztof-zaleski-216400237/"
              target="_blank"
            >
              <LinkedinSVG />
            </a>
            <a href="https://github.com/Zlvsky" target="_blank">
              <GithubSVG />
            </a>
          </div>
        </div>
      </div>
    );
}

export default AboutInfo;