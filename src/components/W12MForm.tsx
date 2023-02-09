import { ReactEventHandler, useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberBeings from "./number_beings";
import Calculator from "./calculator";
import Reason from "./reason";
import ShowFormInfo from "./show_form_info";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("");
  const [planetName, setPlanetName] = useState<string>("");
  const [numberBeings, setNumberBeings] = useState<number>(0);
  const [calculator, setCalculator] = useState<boolean>(true);
  const [reason, setReason] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={onSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(e: any) => {
            setSubmitted(false);
            setSpeciesName(e.target.value);
          }}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(e: any) => {
            setSubmitted(false);
            setPlanetName(e.target.value);
          }}
        />
        <NumberBeings
          numberBeings={numberBeings}
          onChangeNumberBeings={(e: any) => {
            setSubmitted(false);
            setNumberBeings(e.target.value);
          }}
        />
        <Calculator
          calculator={calculator}
          onChangeCalculator={(e: any) => {
            setSubmitted(false);
            setCalculator(e.target.value === "true" ? true : false);
          }}
        />
        <Reason
          reason={reason}
          onChangeReason={(e: any) => {
            setSubmitted(false);
            setReason(e.target.value);
          }}
        />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      {submitted && (
        <ShowFormInfo
          speciesName={speciesName}
          planetName={planetName}
          numberBeings={numberBeings}
          calculator={calculator}
          reason={reason}
        />
      )}
    </section>
  );
};

export default W12MForm;
