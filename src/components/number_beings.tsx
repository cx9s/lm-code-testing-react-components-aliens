import { useState } from "react";
import { isNumber } from "util";
import ErrorMessage from "./error_message";

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
    const validated = validate(e.target.value);
    setErrorMessage(
      validated ? undefined : "Numbers ONLY. Must be at least 1,000,000,000."
    );
    onChangeNumberBeings(validated, e);
  };

  const validate: (value: string) => boolean = (value) => {
    return Number.isInteger(+value) && +value >= 10 ** 9;
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
