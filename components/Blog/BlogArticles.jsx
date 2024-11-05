import React from "react";
import style from "@/styles/blog/blogcards.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import img1 from "../../public/blog/img1.jpg";
import img2 from "../../public/blog/img2.jpg";
import img3 from "../../public/blog/img3.jpg";
import img4 from "../../public/blog/img4.jpg";
import img5 from "../../public/blog/img5.jpg";
import img6 from "../../public/blog/img6.jpg";
import img7 from "../../public/blog/img7.jpg";
import img8 from "../../public/blog/img8.jpg";
import img9 from "../../public/blog/img9.jpg";
import img10 from "../../public/blog/img10.jpg";
const BlogArticles = () => {
  const router = useRouter();
  const articles = [
    {
      id: 1,
      title:
        "Top Programming Language to Learn in 2024:Stay Ahead of the Curve",

      readTime: "2 min read",
      description:
        "Programming skills are in high demand, making it essential to master the right language for career advancement. Whether you're starting out or looking to upskill, this blog highlights the top programming languages to learn in 2024 and their significance for your career.",
      image: img1,
      alt: "hire top developer in the india ",
    },
    {
      id: 2,
      title: "The Top 10 Benefits of Cloud Computing for Your Business",

      readTime: "2 min read",
      description:
        "Cloud computing offers agile and cost-effective solutions that transform business operations. This article explores the top 10 benefits and how Brandsmashers Tech can support your growth in the cloud.",
      image: img2,
      alt: "hire top developer in the india ",
    },
    {
      id: 3,
      title: "Emerging Trends in AI and Machine Learning",

      readTime: "2 min read",
      description:
        "Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing the IT industry, driving automation and innovation while enhancing efficiency across sectors like healthcare, finance, and cybersecurity. As we approach 2024, these advancements will continue to reshape the digital landscape, helping businesses streamline operations and unlock new opportunities.",
      image: img10,
      alt: "hire top developer in the india ",
    },
    {
      id: 4,
      title: "The Role of Artificial Intelligence in Software Testing",

      readTime: "2 min read",
      description:
        "Artificial Intelligence (AI) is revolutionizing software testing, enhancing efficiency, accuracy, and scalability. This blog explores the top AI trends in software testing and how Brandsmashers can play a critical role in this transformation.",
      image: img2,
      alt: "hire top developer in the india ",
    },
    {
      id: 5,
      title: "Understanding the DevOps Culture: Why It Matters",

      readTime: "2 min read",
      description:
        "The DevOps culture is transforming how businesses approach software development and IT operations. It's a mindset that fosters collaboration between development and operations teams, enhancing efficiency and speeding up delivery. This blog discusses the importance of DevOps and how Brandsmashers Tech, a leading software development company in India, can support your organization on this journey.",
      image: img7,
      alt: "hire top developer in the india ",
    },
  ];
  const handleArticleClick = (id) => {
    router.push(`/blogdetails/${id}`); // Navigate to the article details page
  };

  return (
    <div className={`${style.blogcontainer}`}>
      <div className={`${style.articlesgrid}`}>
        {articles.map((article) => (
          <div
            key={article.id}
            className={`${style.articlecard}`}
            onClick={() => handleArticleClick(article.id)} // Add click handler
          >
            <div className={`${style.imagecontainer}`}>
              <Image
                src={article.image}
                alt={article.alt}
                // layout="responsive"
                width={570}
                height={300}
                className={`${style.articleimage}`}
              />
            </div>

            <div className={`${style.articlecontent}`}>
              <div className={`${style.articlemeta}`}>
                <span>{article.author}</span>
                <span>{article.readTime}</span>
              </div>

              <h2 className={`${style.articletitle}`}>{article.title}</h2>

              <p className={`${style.articledescription}`}>
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticles;
