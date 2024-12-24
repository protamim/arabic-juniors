import React from "react";

interface SvgProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightIcon: React.FC<SvgProps> = ({...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width='1em'
      height='1em'
      viewBox="0 0 15 12"
      fill="none"
      {...props}
    >
      <path
        d="M13.4584 5.77148L0.958374 5.77148"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.41687 0.751158L13.4585 5.77116L8.41687 10.792"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
