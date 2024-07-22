import GroupCard from "../components/GroupCard";
import sanityClient from "../client";
import { useState, useEffect } from "react";

const Training = () => {
  const [trainingGroups, setTrainingGroups] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "traininggroups"]`)
      .then((data) => {
        setTrainingGroups(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-screen-xl md:mx-auto mx-2 font-NunitoSans mb-10 w-full">
      {/* Heading */}
      <div className="text-3xl font-bold mb-5">Training</div>

      {/* Text */}
      <div>
        Wir bieten ein breites Trainingsspektrum für verschiedene Altersklassen
        in der Leichtathletik. Egal, ob Sie Anfänger oder erfahren sind, bei uns
        können Sie Ihre Fähigkeiten verbessern und Spaß am Sport haben. Familien
        sind bei uns herzlich willkommen, ob Sie Fragen haben oder einfach Teil
        unserer Gemeinschaft werden möchten. Wir legen Wert auf den Spaß am
        Sport und fördern wichtige Werte wie Teamgeist und Durchhaltevermögen.
        Besuchen Sie uns, um Ihre sportlichen Ziele zu erreichen, unabhängig von
        Ihrem Erfahrungsniveau.
      </div>

      {/* Trainingsgruppen */}
      <div className="text-2xl font-bold mt-5">Trainingsgruppen</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-2">
        {trainingGroups.length > 0 ? (
          trainingGroups.map((gruppe) => <GroupCard group={gruppe} />)
        ) : (
          <div>Lädt...</div>
        )}
      </div>

      {/* Trainingsort */}
      <div className="text-2xl font-bold mt-5">Trainingsort</div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-2">
        {/* Sommer */}
        <div className="bg-gray-200 rounded-xl font-NunitoSans flex flex-col p-4">
          <div className="font-semibold text-xl pb-1">Sommer</div>
          <div>
            <div className="font-semibold inline">Standort: </div>
            <div className="inline">
              Stadion Babelsberg, Friedhofsweg, 66763 Dillingen/Saar
            </div>
          </div>
        </div>

        {/* Winter */}
        <div className="bg-gray-200 rounded-xl font-NunitoSans flex flex-col p-4">
          <div className="font-semibold text-xl pb-1">Winter</div>
          <div>
            <div className="font-semibold inline">Standort: </div>
            <div className="inline">
              Richard-Wagner-Straße 16 , 66763 Dillingen/Saar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

// fetch don't func / no data is there / get empty array
// after this fix need to change GroupCard / anpassen an neur namen und array trainingszeiten
