import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import sanityClient from "../client";
import { useState, useEffect } from "react";

// assets
import sprinting from "../assets/sprinting.png";
import acd_logo from "../assets/acd_logo.png";

const Home = () => {
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
    <div className="flex flex-col items-center">
      <div className="max-w-screen-xl w-full font-NunitoSans mb-10">
        {/* Startseite Layout */}
        <div className="flex flex-row">
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
            <img src={acd_logo} className="w-48" />
            <div className="font-bold text-7xl text-center" id="fontborder">
              AC Diefflen
            </div>
            <div className="font-semibold text-2xl text-gray-800 text-center">
              Ein Verein, der Sport und Gemeinschaft verbindet.
            </div>
          </div>
          <div className="w-1/2 md:flex flex-col items-center hidden">
            <img src={sprinting} />
          </div>
        </div>
        <div className="p-10 bg-track-red rounded-full shadow-2xl md:flex hidden"></div>
      </div>

      {/* Akutelles Row */}
      <div className="bg-gray-100 mt-10 w-full">
        <div className="text-3xl font-bold text-center pt-5">
          Aktuelle Beiträge
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-row justify-evenly pb-10 pt-5">
          {articles.length > 0 ? (
            articles
              .slice(0, 3)
              .map((article) => <ArticleCard article={article} />)
          ) : (
            <div>Keine Beiträge verfügbar</div>
          )}
        </div>
      </div>

      {/* Training Section */}
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center py-10">
          <div className="text-3xl font-semibold text-center">
            Sie oder Ihr Kind haben Interessse?
          </div>
          <div className="text-xl text-center">
            Kommen Sie bei unseren Training vorbei oder kontaktieren Sie uns.
          </div>
          <div className="flex flex-row justify-evenly gap-8 pt-3">
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/training"
              className="p-2 rounded-xl bg-acd-yellow hover:bg-acd-yellow-light"
            >
              Trainingsinfos
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/kontakt"
              className="p-2 rounded-xl bg-acd-yellow hover:bg-acd-yellow-light"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
