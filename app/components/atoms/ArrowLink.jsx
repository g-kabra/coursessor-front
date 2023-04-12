import React from "react";
import Link from "next/link";

const Arrow = (props) => {
  return (
    <>
      {props.external && (
        <a
          href={props.link}
          className={"flex h-5 cursor-pointer group " + props.className}
          target="_blank">
          {props.children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={
              "h-5 group-hover:scale-125 group-hover:rotate-45 transition-all " +
              props.arrowClasses
            }>
            <path
              d="M7.15 6.95l9.8.1.1 9.8-1.95.01-.01-6.44-8 7.99-1.38-1.38 8.12-8.12-6.69-.01V6.95z"
              fillRule="evenodd"
              fill={props.arrowColor}
            />
          </svg>
        </a>
      )}
      {!props.external && (
        <Link
          href={props.link}
          className={"flex items-center h-10 cursor-pointer gap-2 group " + props.className}>
          {props.children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={"h-5 group-hover:rotate-45 transition-all " + props.arrowClasses}>
            <path
              d="M7.15 6.95l9.8.1.1 9.8-1.95.01-.01-6.44-8 7.99-1.38-1.38 8.12-8.12-6.69-.01V6.95z"
              fillRule="evenodd"
              fill={props.arrowColor}
            />
          </svg>
        </Link>
      )}
    </>
  );
};

export default Arrow;
