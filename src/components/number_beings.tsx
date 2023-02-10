import { useState } from "react";
import ErrorMessage from "./error_message";
import { validNumberBeings } from "./validations";

export interface NumberBeingsProps {
  numberBeings: number;
  onChangeNumberBeings: (
    validated: boolean,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const NumberBeings: React.FC<NumberBeingsProps> = ({
  numberBeings,
  onChangeNumberBeings,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valid = validNumberBeings(e.target.value);
    setErrorMessage(valid.message);
    onChangeNumberBeings(valid.validated, e);
  };

  return (
    <div>
      <label htmlFor="numberBeings">Number of beings:</label>
      <input
        id="numberBeings"
        type="text"
        placeholder="number"
        value={numberBeings}
        onChange={onChangeHandler}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default NumberBeings;
