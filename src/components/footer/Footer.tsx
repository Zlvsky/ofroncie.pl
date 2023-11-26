function Footer() {
    const year = new Date().getFullYear();

    const footerImage = "/images/footerBackground.png";

    return (
      <div
        className="w-full flex justify-center items-center text-center object-cover pt-56 pb-20 bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <span className="text-white">
          © {year} Krzysztof Zaleski. All rights reserved
        </span>
      </div>
    );
}

export default Footer;