import { screen, render } from "@testing-library/react";
import NoticiaModal from "../NoticiaModal";

const modalMockNotPremium = {
  id: 1,
  fecha: "",
  esPremium: false,
  imagen: "",
  titulo: "Los Simpsons Se Asocian Con Marvel",
  descripcion:
    "Los Simpson se han asociado con Marvel para lanzar un nuevo corto exclusivo de Disney+. The Good, The Bart y The Loki estará disponible exclusivamente para ver por aquellos que están registrados en el servicio de suscripción.",
};

const modalMockPremium = {
  id: 1,
  fecha: "",
  esPremium: true,
  imagen: "",
  titulo: "Los Simpsons Se Asocian Con Marvel",
  descripcion:
    "Los Simpson se han asociado con Marvel para lanzar un nuevo corto exclusivo de Disney+. The Good, The Bart y The Loki estará disponible exclusivamente para ver por aquellos que están registrados en el servicio de suscripción.",
};

describe("NoticiasModal", () => {
  it("should not render suscribe message on modal when not premium", () => {
    render(<NoticiaModal modal={modalMockNotPremium} setModal={jest.fn()} />);
    expect(
      screen.getByText("Los Simpsons Se Asocian Con Marvel")
    ).toBeInTheDocument();
  });

  it("should render suscribe message on modal when premium", () => {
    render(<NoticiaModal modal={modalMockPremium} setModal={jest.fn()} />);
    expect(
      screen.getByText("Suscríbete a nuestro Newsletter")
    ).toBeInTheDocument();
  });
});
