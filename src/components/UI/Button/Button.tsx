import "./Button.scss";

interface IButton {
  type?: any;
  onClickFunction?: any;
  customClasses?: string;
  children: any;
}

const Button = ({
  type = "button",
  onClickFunction,
  customClasses,
  children,
}: IButton) => {
  return (
    <button
      type={type}
      onClick={onClickFunction}
      className={`default-btn ${customClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
