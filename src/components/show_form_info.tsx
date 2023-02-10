export interface ShowFormInfoProps {
  speciesName: string;
  planetName: string;
  numberBeings: number;
  calculator: boolean;
  reason: string;
}

const ShowFormInfo: React.FC<ShowFormInfoProps> = ({
  speciesName,
  planetName,
  numberBeings,
  calculator,
  reason,
}) => (
  <div className="showFormInfo">
    <p>Species Name: {speciesName}</p>
    <p>Planet Name: {planetName}</p>
    <p>Number of beings: {numberBeings}</p>
    <p>What is 2 + 2? {calculator.toString()}</p>
    <p>Reason for sparing: {reason}</p>
  </div>
);

export default ShowFormInfo;
