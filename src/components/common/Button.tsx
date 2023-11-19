import classnames from "classnames";

interface ButtonInterface {
  textColor?: string;
  bgColor?: string;
  py?: string;
  size?: "sm" | "md" | "lg" | "full";
  style?:
    | "filled"
    | "transparent"
    | "transparentActive"
    | "trasnparentWithHover";
  textSize?: "base" | "medium" | "lg";
  font?: "normal" | "semibold" | "bold";
  className?: string;
  children: any;
  disabled?: boolean;
  type?: any;
  onSubmit?: any;
  onClick?: any;
  fullHeight?: boolean;
}

function Button({
  textColor,
  bgColor,
  style,
  size,
  py,
  font,
  disabled,
  fullHeight,
  textSize,
  className,
  ...rest
}: ButtonInterface) {
  return (
    <button
      disabled={disabled}
      className={classnames(
        `py-${py} flex items-center justify-center gap-1 rounded-2xl font-bold border`,
        {
          "bg-primary border-primary text-white": style === "filled",
          "bg-transparent border-dark text-dark": style === "transparent",
          "bg-transparent border-primary text-dark border-2":
            style === "transparentActive",
          "bg-transparent border-dark text-dark transition-colors hover:bg-primary hover:border-primary hover:text-white":
            style === "trasnparentWithHover",
          "px-5": size === "sm",
          "px-10": size === "md",
          "px-16": size === "lg",
          "w-full": size === "full",
          "h-full": fullHeight,
          "text-base": textSize === "base",
          "text-medium": textSize === "medium",
          "text-lg": textSize === "lg",
          //   "bg-mediumGrey": disabled === true,
          //   "border-mediumGrey": disabled === true,
          "pointer-events-none": disabled === true,
          "cursor-not-allowed": disabled === true,
          //   "bg-darkBlue": disabled === false || disabled === undefined,
          "pointer-events-auto": disabled === false || disabled === undefined,
        },
        className
      )}
      {...rest}
    />
  );
}

Button.defaultProps = {
  style: "filled",
  textSize: "medium",
  py: "3",
  size: "sm",
};

export default Button;
