import React from "react";

const Description = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Czym jest daltonizm?</h2>
            <p className="mb-4">
                Daltonizm, znany także jako ślepota barw, to wada wzroku polegająca na trudności
                w rozróżnianiu pewnych kolorów. Jest spowodowany nieprawidłowym działaniem
                światłoczułych komórek siatkówki oka – czopków odpowiedzialnych za widzenie barw.
                Najczęściej jest dziedziczny i występuje częściej u mężczyzn niż u kobiet.
                Nasza aplikacja pomaga osobom z daltonizmem w dostosowywaniu kolorów, aby obrazy były
                bardziej czytelne i dostosowane do ich potrzeb.
            </p>

            <h3 className="text-xl font-semibold mt-4">Protanopia</h3>
            <p className="mb-2">
                Protanopia to zaburzenie, w którym osoba ma trudności z widzeniem i rozróżnianiem
                koloru czerwonego. Nasz filtr zmienia odcienie czerwieni na bardziej kontrastowe
                i wzmacnia niebieskie oraz zielone tony, co ułatwia interpretację obrazu.
            </p>

            <h3 className="text-xl font-semibold mt-4">Deuteranopia</h3>
            <p className="mb-2">
                Deuteranopia to trudność w widzeniu koloru zielonego. Nasz filtr redukuje intensywność
                zieleni, dostosowuje odcienie czerwonego i niebieskiego, aby ważne szczegóły były
                bardziej widoczne i zrozumiałe.
            </p>

            <h3 className="text-xl font-semibold mt-4">Tritanopia</h3>
            <p>
                Tritanopia to zaburzenie, w którym osoba ma problem z widzeniem koloru niebieskiego.
                Nasz filtr dostosowuje odcienie niebieskiego, wzmacnia czerwone oraz zielone elementy,
                aby obraz był bardziej zrozumiały i wyraźny.
            </p>
        </div>
    );
};

export default Description;