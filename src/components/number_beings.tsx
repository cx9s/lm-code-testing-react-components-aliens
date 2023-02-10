import { useState } from "react";
import { isNumber } from "util";
import ErrorMessage from "./error_message";

export interface NumberBeingsProps {
  numberBeings: number;
  onChangeNumberBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberBeings: React.FC<NumberBeingsProps> = ({
  numberBeings,
  onChangeNumberBeings,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const message = validate(e.target.value);
    setErrorMessage(message);
    onChangeNumberBeings(e);
  };

  const validate: (value: string) => string | undefined = (value) => {
    const message =
      Number.isInteger(+value) && +value >= 10 ** 9
        ? undefined
        : "Numbers ONLY. Must be at least 1,000,000,000.";
    return message;
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
