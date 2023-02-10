import { ReactEventHandler, useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberBeings from "./number_beings";
import Calculator from "./calculator";
import Reason from "./reason";
import ShowFormInfo from "./show_form_info";

interface validationsType {
  speciesName: boolean;
  planetName: boolean;
  numberBeings: boolean;
  calculator: boolean;
  reason: boolean;
}

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("");
  const [planetName, setPlanetName] = useState<string>("");
  const [numberBeings, setNumberBeings] = useState<number>(0);
  const [calculator, setCalculator] = useState<boolean>(true);
  const [reason, setReason] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validations, setValidations] = useState<validationsType>({
    speciesName: false,
    planetName: false,
    numberBeings: false,
    calculator: true,
    reason: false,
  });

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
          onChangeSpeciesName={(validated, value: string) => {
            validations.speciesName = validated;
            setValidations(validations);
            setSubmitted(false);
            setSpeciesName(value);
          }}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(validated, value: string) => {
            validations.planetName = validated;
            setValidations(validations);
            setSubmitted(false);
            setPlanetName(value);
          }}
        />
        <NumberBeings
          numberBeings={numberBeings}
          onChangeNumberBeings={(validated, value: number) => {
            validations.numberBeings = validated;
            setValidations(validations);
            setSubmitted(false);
            setNumberBeings(value);
          }}
        />
        <Calculator
          calculator={calculator}
          onChangeCalculator={(validated, value: boolean) => {
            validations.calculator = validated;
            setValidations(validations);
            setSubmitted(false);
            setCalculator(value);
          }}
        />
        <Reason
          reason={reason}
          onChangeReason={(validated, value: string) => {
            validations.reason = validated;
            setValidations(validations);
            setSubmitted(false);
            setReason(value);
          }}
        />

        <div>
          <input
            disabled={Object.values(validations).includes(false)}
            type="submit"
            value="Submit"
          />
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
