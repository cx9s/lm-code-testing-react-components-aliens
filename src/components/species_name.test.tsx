import { render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./species_name";
import user from "@testing-library/user-event";

test("renders SpeciesName", () => {
  render(<SpeciesName speciesName="" onChangeSpeciesName={() => {}} />);
  const speciesNameText = screen.getByText(/Species Name:/i);
  expect(speciesNameText).toBeInTheDocument();
});

test("renders SpeciesName input", () => {
  render(
    <SpeciesName speciesName="speciesName" onChangeSpeciesName={() => {}} />
  );
  const speciesNameInput = screen.getByDisplayValue("speciesName");
  expect(speciesNameInput).toBeInTheDocument();
  expect(speciesNameInput).toHaveAttribute("id", "speciesName");
});

test("correctly calls handle change", async () => {
  const props: SpeciesNameProps = {
    speciesName: "speciesName",
    onChangeSpeciesName: jest.fn(),
  };
  render(<SpeciesName {...props} />);
  const input = screen.getByDisplayValue("speciesName");
  await user.type(input, "human");
  expect(props.onChangeSpeciesName).toHaveBeenCalledTimes(5);
});
