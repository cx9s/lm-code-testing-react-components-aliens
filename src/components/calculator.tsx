interface CalculatorProps {
  calculator: boolean;
  onChangeCalculator: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  calculator,
  onChangeCalculator,
}) => {
  return (
    <div>
      <label htmlFor="calculator">What is 2 + 2?</label>

      <select id="calculator" onChange={onChangeCalculator}>
        <option value="true">4</option>
        <option value="false">Not 4</option>
      </select>
    </div>
  );
};

export default Calculator;
