export interface NumberBeingsProps {
  numberBeings: number;
  onChangeNumberBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberBeings: React.FC<NumberBeingsProps> = ({
  numberBeings,
  onChangeNumberBeings,
}) => (
  <div>
    <label htmlFor="numberBeings">Number of beings:</label>
    <input
      id="numberBeings"
      type="text"
      placeholder="number"
      value={numberBeings}
      onChange={onChangeNumberBeings}
    />
  </div>
);

export default NumberBeings;
