import React from "react";

const QuoteIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="76"
        viewBox="0 0 74 76"
        fill="none"
      >
        <g clipPath="url(#clip0_2900_4636)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M74 15.6311C68.72 17.6075 64.716 20.662 61.988 24.7944C59.26 28.9268 57.896 33.8675 57.896 39.6169H74V76H41V39.6169C41 34.5862 41.88 29.9149 43.64 25.6028C45.4 21.2907 47.776 17.4728 50.768 14.1489C53.76 10.825 57.236 7.99538 61.196 5.65967C65.156 3.32397 69.424 1.43736 74 0V15.6311ZM33 15.6311C27.72 17.6075 23.716 20.662 20.988 24.7944C18.26 28.9268 16.896 33.8675 16.896 39.6169H33V76H0V39.6169C0 34.5862 0.87999 29.9149 2.64 25.6028C4.40001 21.2907 6.77599 17.4728 9.76801 14.1489C12.76 10.825 16.236 7.99538 20.196 5.65967C24.156 3.32397 28.424 1.43736 33 0V15.6311Z"
            fill="#E5E5E5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2900_4636">
            <rect width="74" height="76" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default QuoteIcon;
