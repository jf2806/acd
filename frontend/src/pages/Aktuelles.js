import ArticleCard from "../components/ArticleCard";
import sanityClient from "../client";
import { useState, useEffect } from "react";

const Aktuelles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "article"]{
          uberschrift,
          inhalt,
          datum,
          "bild": bild.asset->url,
          _id
      }`
      )
      .then((data) => {
        setArticles(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-screen-xl md:mx-auto mx-2 font-NunitoSans mb-10">
      {/* Heading */}
      <div className="text-3xl font-bold mb-5">Aktuelles</div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {articles.length > 0 ? (
          articles.map((article) => <ArticleCard article={article} />)
        ) : (
          <div>Lädt...</div>
        )}
      </div>
    </div>
  );
};

export default Aktuelles;
