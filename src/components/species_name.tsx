import { useState } from "react";
import ErrorMessage from "./error_message";
import { validSpeciesName } from "./validations";

export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (validated: boolean, value: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valid = validSpeciesName(e.target.value);
    setErrorMessage(valid.message);
    onChangeSpeciesName(valid.validated, e.target.value);
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
