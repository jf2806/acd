// assets
import fileIcon from "../assets/icons/file.svg";

const Formulare = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto mx-2 font-NunitoSans mb-10 w-full">
      {/* Heading */}
      <div className="text-3xl font-bold mb-5">Fomulare</div>

      {/* Text */}
      <div className="mb-5">
        Hier finden Sie unsere Fomulare. Drücken Sie auf das Fomular, um es
        herunterzuladen.
      </div>

      {/* Fomular-Download */}
      <a
        className="bg-gray-200 hover:bg-gray-100  p-3 rounded-xl flex-row flex max-w-xs"
        href="/articleImages/Saarlandmeisterschaften.jpg"
        download
      >
        <img src={fileIcon} className="w-7 mr-2" />
        <div className="text-xl font-semibold">Anmeldefomular</div>
      </a>
    </div>
  );
};

export default Formulare;
