import { useState } from "react";
import ErrorMessage from "./error_message";

export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (
    validated: boolean,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validated = validate(e.target.value);
    setErrorMessage(
      validated
        ? undefined
        : "Must be between 3 and 23 characters. No numbers or special characters allowed!"
    );
    onChangeSpeciesName(validated, e);
  };

  const validate: (value: string) => boolean = (value) => {
    return /^[a-zA-Z]{3,23}$/.test(value) ? true : false;
  };

  return (
    <div>
      <label htmlFor="speciesName">Species Name:</label>
      <input
        id="speciesName"
        type="text"
        placeholder="species"
        value={speciesName}
        onChange={onChangeHandler}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default SpeciesName;
