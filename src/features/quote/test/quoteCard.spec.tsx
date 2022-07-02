import { screen, render } from "../../../test-utils";
import Cita from "../Cita";
import userEvent from "@testing-library/user-event";

describe("Quote Card", () => {
  it("should render default text 'No se encontro ninguna cita'", () => {
    render(<Cita />);
    const textNoQuote = screen.getByText("No se encontro ninguna cita");
    expect(textNoQuote).toBeInTheDocument();
  });

  it("should render placeholder text on input", () => {
    render(<Cita />);
    const placeholderText = screen.getByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    expect(placeholderText).toBeInTheDocument();
  });

  it("should render 'Obtener cita aleatoria' button when no input", () => {
    render(<Cita />);
    const buttonTextWhenNoInputSearch = screen.getByRole("button", {
      name: "Obtener cita aleatoria",
    });
    expect(buttonTextWhenNoInputSearch).toBeInTheDocument();
  });

  it("should render 'Obtener cita' button when there is an input", async () => {
    render(<Cita />);
    const input = screen.getByLabelText("Author Cita") as HTMLInputElement;
    await userEvent.type(input, "Homer");
    const buttonTextWhenInputSearch = screen.getByRole("button", {
      name: "Obtener Cita",
    });
    expect(input.value).toBe("Homer");
    expect(buttonTextWhenInputSearch).toBeInTheDocument();
  });

  it("should render 'Borrar' button", () => {
    render(<Cita />);
    const deleteButton = screen.getByRole("button", { name: "Borrar" });
    expect(deleteButton).toBeInTheDocument();
  });
});
