import { useState } from "react";
import ErrorMessage from "./error_message";

export interface CalculatorProps {
  calculator: boolean;
  onChangeCalculator: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  calculator,
  onChangeCalculator,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const message = validate(e.target.value);
    setErrorMessage(message);
    onChangeCalculator(e);
  };

  const validate: (value: string) => string | undefined = (value) => {
    const message = value === "true" ? undefined : '"4" must be selected.';
    return message;
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
