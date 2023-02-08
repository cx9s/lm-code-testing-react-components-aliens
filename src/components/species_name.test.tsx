import { render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./species_name";
import user from "@testing-library/user-event";

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  const props: SpeciesNameProps = {
    speciesName: "speciesName",
    onChangeSpeciesName: jest.fn(),
  };

  render(<SpeciesName {...props} />);
  const speciesNamelabel = screen.getByText(/Species Name:/i);
  expect(speciesNamelabel).toBeInTheDocument();

  const speciesNameInput = screen.getByDisplayValue(props.speciesName);
  expect(speciesNameInput).toBeInTheDocument();
  expect(speciesNameInput).toHaveAttribute("id", "speciesName");
});

test("Given the required props, When the value of input changed, Then the function should be present", async () => {
  const props: SpeciesNameProps = {
    speciesName: "speciesName",
    onChangeSpeciesName: jest.fn(),
  };
  render(<SpeciesName {...props} />);
  const input = screen.getByDisplayValue(props.speciesName);
  await user.type(input, "human");
  expect(props.onChangeSpeciesName).toHaveBeenCalledTimes(5);
});
