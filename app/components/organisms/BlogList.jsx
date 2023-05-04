import React from "react";
import BlogDisplay from "../atoms/BlogDisplay";

const BlogList = (props) => {
  return (
    <div className={`grid gap-10 md:mt-20 ${props.className}`}>
      {props.data.map((e, ind) => {
        return (
          <BlogDisplay
            imageLink={e.imageLink}
            heading={e.heading}
            content={e.content}
            linkText={e.linkText}
            className=""
            key={ind}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
