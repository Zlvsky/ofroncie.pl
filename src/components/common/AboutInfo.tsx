import MainSVG from "../../../public/images/mainAbout.svg";
import SocialIcons from "./SocialIcons";

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
          <SocialIcons />
        </div>
      </div>
    );
}

export default AboutInfo;