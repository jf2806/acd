const GroupCard = ({ group }) => {
  return (
    <div className="bg-gray-200 rounded-xl font-NunitoSans flex flex-col p-4">
      {/* Heading */}
      <div className="font-semibold text-xl pb-1">{group.trainer}</div>

      {/* Altersklasse */}
      <div>
        <div className="inline font-semibold">Altersklasse: </div>
        <div className="inline">{group.altersklasse}</div>
      </div>

      {/* Trainingszeiten */}
      {/* Sommer */}
      <div>
        <div className="font-semibold">
          Sommer ({group.sommertrainingszeit}):
        </div>
        <div className="pl-4">
          {group.trainingszeitenSommer.map((training) => (
            <div>
              - {training.tag} {training.uhrzeit}
            </div>
          ))}
        </div>
      </div>
      {/* Winter */}
      <div>
        <div className="font-semibold">
          Winter ({group.wintertrainingszeit}):
        </div>
        <div className="pl-4">
          {group.trainingszeitenWinter.map((training) => (
            <div>
              - {training.tag} {training.uhrzeit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
