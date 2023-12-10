import FacebookSVG from "../../../public/icons/facebook.svg";
import GithubSVG from "../../../public/icons/github.svg";
import LinkedinSVG from "../../../public/icons/linkedin.svg";


function SocialIcons() {
    return (
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
    );
}

export default SocialIcons;