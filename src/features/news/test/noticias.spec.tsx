import { screen, render } from "@testing-library/react";
import Noticias from "../Noticias";

describe("Noticias", () => {
  it("should render news card title", () => {
    render(<Noticias />);
    expect(screen.getByText("Noticias de los Simpsons")).toBeInTheDocument();
  });
});
