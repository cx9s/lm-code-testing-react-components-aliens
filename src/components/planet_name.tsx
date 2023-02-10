import { useState } from "react";
import ErrorMessage from "./error_message";
import { validPlanetName } from "./validations";
export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (
    validated: boolean,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valid = validPlanetName(e.target.value);
    setErrorMessage(valid.message);
    onChangePlanetName(valid.validated, e);
  };

  return (
    <div>
      <label htmlFor="planetName">Planet Name:</label>
      <input
        id="planetName"
        type="text"
        placeholder="planet"
        value={planetName}
        onChange={onChangeHandler}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default PlanetName;
