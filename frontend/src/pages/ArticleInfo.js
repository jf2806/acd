import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";

const ArticleInfo = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_id == "${id}"]{
        uberschrift,
        inhalt,
        datum,
        "bild": bild.asset->url,
        _id
    }`
      )
      .then((data) => {
        setArticle(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-screen-xl w-full font-NunitoSans mb-10">
        {article == null ? (
          <div>Nicht gefunden</div>
        ) : (
          <div className="flex flex-col w-full">
            <img
              src={article.bild}
              className="w-full object-cover h-96 rounded-xl shadow-2xl"
            />
            <div className="w-full flex flex-col md:flex-row md:items-end mt-5 justify-between">
              <div className="font-bold text-3xl">{article.uberschrift}</div>
              <div className="font-semibold text-lg text-gray-800">
                {dateFormat(article.datum, "dd.mm.yyyy")}
              </div>
            </div>
            <div>{article.inhalt}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleInfo;
