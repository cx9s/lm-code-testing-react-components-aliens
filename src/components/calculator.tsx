import { useState } from "react";
import ErrorMessage from "./error_message";

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
    const validated = validate(e.target.value);
    setErrorMessage(validated ? undefined : '"4" must be selected.');
    onChangeCalculator(validated, e);
  };

  const validate: (value: string) => boolean = (value) => {
    return value === "true";
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
