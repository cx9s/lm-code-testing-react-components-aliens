export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => (
  <div>
    <label htmlFor="planetName">Planet Name:</label>
    <input
      id="planetName"
      type="text"
      placeholder="planet"
      value={planetName}
      onChange={onChangePlanetName}
    />
  </div>
);

export default PlanetName;
