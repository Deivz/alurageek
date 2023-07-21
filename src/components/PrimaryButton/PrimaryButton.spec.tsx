import { render } from "@testing-library/react";
import "jest-styled-components"; // access to function toHaveStyleRule
import PrimaryButton from "./PrimaryButton";

describe("/components/PrimaryButton", () => {
  it("should render the 'add' variant to the button component", () => {
    const { getByTestId } = render(<PrimaryButton text="Adicionar" type="button" variant='add' />);

    const buttonComponent = getByTestId("primaryButton");
    expect(buttonComponent).toBeInTheDocument();

    expect(buttonComponent).toHaveStyleRule("width", "100%");
  });
  
  it("should render the 'addProduct' variant to the button component", () => {
    const { getByTestId } = render(<PrimaryButton text="Adicionar" type="button" variant='addProduct' />);

    const buttonComponent = getByTestId("primaryButton");
    expect(buttonComponent).toBeInTheDocument();

    expect(buttonComponent).toHaveStyleRule("width", "151px");
  });

  it("should render the 'sendMessage' variant to the button component", () => {
    const { getByTestId } = render(<PrimaryButton text="Adicionar" type="button" variant='sendMessage' />);

    const buttonComponent = getByTestId("primaryButton");
    expect(buttonComponent).toBeInTheDocument();

    expect(buttonComponent).toHaveStyleRule("width", "151px");
  });

  it("should render the 'login' variant to the button component", () => {
    const { getByTestId } = render(<PrimaryButton text="Adicionar" type="button" variant='login' />);

    const buttonComponent = getByTestId("primaryButton");
    expect(buttonComponent).toBeInTheDocument();

    expect(buttonComponent).toHaveStyleRule("width", "109px");
  });
  
  it("should render the 'showConsoles' variant to the button component", () => {
    const { getByTestId } = render(<PrimaryButton text="Adicionar" type="button" variant='showConsoles' />);

    const buttonComponent = getByTestId("primaryButton");
    expect(buttonComponent).toBeInTheDocument();

    expect(buttonComponent).toHaveStyleRule("width", "130px");
  });
});