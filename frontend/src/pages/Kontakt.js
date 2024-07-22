const Kontakt = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto mx-2 font-NunitoSans mb-10 w-full">
      {/* Heading */}
      <div className="text-3xl font-bold mb-5">Kontakt</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Text */}
        <div>
          Wir stehen Ihnen gerne zur Verfügung und beantworten Ihre Fragen.
          Zögern Sie nicht, uns zu kontaktieren, wenn Sie weitere Informationen
          benötigen oder Interesse daran haben, sich uns anzuschließen. Wir
          freuen uns darauf, von Ihnen zu hören und helfen Ihnen gerne weiter.
        </div>

        {/* Contact Data */}
        <div className="bg-gray-200 rounded-xl shadow-xl p-5">
          <div className="flex md:flex-row flex-col py-1">
            <div className="text-xl font-semibold w-1/2">Vereinsleitung</div>
            <div className="text-xl w-1/2">test2445@email.com</div>
          </div>
          <div className="flex md:flex-row flex-col py-1">
            <div className="text-xl font-semibold w-1/2">Trainingsleiter</div>
            <div className="text-xl w-1/2">testdf2445@email.com</div>
          </div>
          <div className="flex md:flex-row flex-col py-1">
            <div className="text-xl font-semibold w-1/2">Sportwart</div>
            <div className="text-xl w-1/2">tsdf545@email.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
