import React from "react";
import CommonSection from "./shared/CommonSection";
import BlogsCard from "./shared/BlogsCard";
import Blog1 from "../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
  return (
    <CommonSection id="blogs" title="Blogs & Articles" background="dark">
      <div className="blog-section">
        <BlogsCard
          image={Blog1}
          date="12 Jan 2023"
          author="Aman Gupta"
          title="Things to Know About Front-End Development"
          para = "Front end developer is someone who crates websites & web apps"
        />
        <BlogsCard
          image={Blog2}
          date="12 Jan 2023"
          author="Rahul Jain"
          title="Things to Know About Front-End Development"
          para = "Front end developer is someone who crates websites & web apps"
        />
        <BlogsCard
          image={Blog3}
          date="12 Jan 2023"
          author="Payal Arora"
          title="Things to Know About Front-End Development"
          para = "Front end developer is someone who crates websites & web apps"
        />
       
      </div>
    </CommonSection>
  );
};

export default Blogs;
