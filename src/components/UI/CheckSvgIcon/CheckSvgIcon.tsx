import "./CheckSvgIcon.scss";

interface ICheckSvgIcon {
  size?: string;
}

const CheckSvgIcon = ({ size = "24px" }: ICheckSvgIcon) => {
  return (
    <svg
      className="check-default"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>{"check"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <g
        id="web-app"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="check" fill="#000000">
          <polygon id="Shape" points="6 10 4 12 10 18 20 8 18 6 10 14" />
        </g>
      </g>
    </svg>
  );
};

export default CheckSvgIcon;
