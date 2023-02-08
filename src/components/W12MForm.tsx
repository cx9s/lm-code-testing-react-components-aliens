import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberBeings from "./number_beings";
import Reason from "./reason";
import Calculator from "./calculator";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");
  const [planetName, setPlanetName] = useState<string>("Earth");
  const [numberBeings, setNumberBeings] = useState<number>(0);
  const [reason, setReason] = useState<string>("reason");
  const [calculator, setCalculator] = useState<boolean>(true);

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)}
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(e: any) => setPlanetName(e.target.value)}
      />
      <NumberBeings
        numberBeings={numberBeings}
        onChangeNumberBeings={(e: any) => setNumberBeings(e.target.value)}
      />
      <Calculator
        calculator={calculator}
        onChangeCalculator={(e: any) =>
          setCalculator(e.target.value === "true" ? true : false)
        }
      />
      <Reason
        reason={reason}
        onChangeReason={(e: any) => {
          setReason(e.target.value);
        }}
      />
    </section>
  );
};

export default W12MForm;
