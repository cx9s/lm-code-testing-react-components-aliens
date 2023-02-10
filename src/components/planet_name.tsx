import { useState } from "react";
import ErrorMessage from "./error_message";
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
    const validated = validate(e.target.value);
    setErrorMessage(
      validated
        ? undefined
        : "Must be between 2 and 49 characters. Numbers are allowed, but no special characters."
    );
    onChangePlanetName(validated, e);
  };

  const validate: (value: string) => boolean = (value) => {
    return /^[a-zA-Z0-9]{2,49}$/.test(value);
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
