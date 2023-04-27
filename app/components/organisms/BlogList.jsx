import React from "react";
import BlogDisplay from "../atoms/BlogDisplay";

const BlogList = (props) => {
  return (
    <div className={`grid gap-5 md:mt-20 ${props.className}`}>
      {props.data.map((e, ind) => {
        return (
          <BlogDisplay
            imageLink={e.imageLink}
            heading={e.heading}
            content={e.content}
            linkText={e.linkText}
            className=""
            k={ind}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
