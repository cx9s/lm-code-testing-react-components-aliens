import { useState } from "react";
import ErrorMessage from "./error_message";

export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const message = validate(e.target.value);
    setErrorMessage(message);
    onChangeSpeciesName(e);
  };

  const validate: (value: string) => string | undefined = (value) => {
    const message = /^[a-zA-Z]{3,23}$/.test(value)
      ? undefined
      : "Must be between 3 and 23 characters. No numbers or special characters allowed!";
    return message;
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
