import { render, screen } from "@testing-library/react";
import ShowFormInfo, { ShowFormInfoProps } from "./show_form_info";

const props: ShowFormInfoProps = {
  speciesName: "human",
  planetName: "earth",
  numberBeings: 100,
  calculator: true,
  reason: "some reasons",
};

test("Given the required props, When the component is rendered, Then the text should be present", () => {
  render(<ShowFormInfo {...props} />);
  expect(
    screen.getByText(`Species Name: ${props.speciesName}`)
  ).toBeInTheDocument();
});
