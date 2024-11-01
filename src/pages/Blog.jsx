import React from "react";
import BlogArticles from "../../components/Blog/BlogArticles";
import BlogDetailes from "../../components/Blog/BlogDetailes";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogArticles />
      {/* <BlogDetailes /> */}
      <Footer />
    </>
  );
};

export default Blog;
