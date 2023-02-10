import { useState } from "react";
import ErrorMessage from "./error_message";
import { validCalculator } from "./validations";

export interface CalculatorProps {
  calculator: boolean;
  onChangeCalculator: (
    validated: boolean,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  calculator,
  onChangeCalculator,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valid = validCalculator(e.target.value);
    setErrorMessage(valid.message);
    onChangeCalculator(valid.validated, e);
  };

  return (
    <div>
      <label htmlFor="calculator">What is 2 + 2?</label>

      <select id="calculator" onChange={onChangeHandler}>
        <option value="true">4</option>
        <option value="false">Not 4</option>
      </select>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default Calculator;
