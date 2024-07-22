import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link
      className="bg-gray-200 rounded-xl hover:bg-gray-100 font-NunitoSans flex flex-col"
      to={`/aktuelles/${article._id}`}
    >
      {/* Image */}
      <img
        src={article.bild}
        className="rounded-t-xl object-cover h-60 w-full"
      />

      <div className="flex flex-col p-2 justify-between">
        {/* Heading */}
        <div className="font-semibold text-2xl pt-2">{article.uberschrift}</div>

        {/* Date */}
        <div className="text-gray-800">
          {dateFormat(article.datum, "dd.mm.yyyy")}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
