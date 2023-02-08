import { render, screen } from "@testing-library/react";
import PlanetName, { PlanetNameProps } from "./planet_name";
import user from "@testing-library/user-event";

const props: PlanetNameProps = {
  planetName: "planetName",
  onChangePlanetName: jest.fn(),
};

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  render(<PlanetName {...props} />);
  const planetNameLabel = screen.getByText(/Planet Name:/i);
  expect(planetNameLabel).toBeInTheDocument();

  const planetNameInput = screen.getByDisplayValue(props.planetName);
  expect(planetNameInput).toBeInTheDocument();
  expect(planetNameInput).toHaveAttribute("id", "planetName");
});

test("Given the required props, When the value of input changed, Then the function should be present", async () => {
  render(<PlanetName {...props} />);
  const input = screen.getByDisplayValue(props.planetName);
  await user.type(input, "earth");
  expect(props.onChangePlanetName).toHaveBeenCalledTimes(5);
});
