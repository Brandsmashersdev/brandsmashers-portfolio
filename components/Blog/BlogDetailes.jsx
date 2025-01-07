import React, { useEffect } from "react";
import { useRouter } from "next/router";
import style from "@/styles/blog/blogdetailes.module.css";
import img1 from "../../public/blog/img1.jpg";
import Image from "next/image";

const BlogDetailes = () => {
  const router = useRouter();
  const { id } = router.query;

  const articles = [
    {
      id: 1,
      title:
        "Top Programming Language to Learn in 2024: Stay Ahead of the Curve",
      description:
        "The demand for programming skills keeps growing, and mastering the right language can be a game-changer for your career. Whether you’re just starting out or an experienced developer looking to upskill, choosing the Top Programming Language to Learn in 2024 is essential to staying competitive. In this blog, we’ll explore the most demanding languages in 2024 and why they’re essential for career advancement.",
      image: img1,
      alt: "hire top developer in India",
    },
    // Add other articles here as needed
  ];

  // Find the article based on the id from the query
  const article = articles.find((article) => article.id === parseInt(id));

  // Handle loading state or if article not found
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${style.schedulingcontainer}`}>
      <div className={`${style.herosection}`}>
        <h1>{article.title}</h1>
        <Image
          src={article.image.src}
          alt={article.alt}
          className={`${style.articleimage}`}
        />
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default BlogDetailes;
