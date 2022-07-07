import { screen, render } from "../../../test-utils";
import Cita from "../Cita";
import userEvent from "@testing-library/user-event";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { API_URL } from "../../../app/constants";

describe("Quotes", () => {
  describe("Initially", () => {
    it("should render loading state", async () => {
      render(<Cita />);
      const searchButton = screen.getByRole("button", {
        name: "Obtener cita aleatoria",
      });
      await userEvent.click(searchButton);
      expect(screen.getByText("CARGANDO...")).toBeInTheDocument();
    });
  });

  describe("on search", () => {
    describe("After searching for a quote without a character input", () => {
      it("should render the correct quote and character", async () => {
        render(<Cita />);
        const searchButton = screen.getByRole("button", {
          name: "Obtener cita aleatoria",
        });
        userEvent.click(searchButton);
        expect(await screen.findByText("Eat my shorts")).toBeInTheDocument();
        expect(await screen.findByText("Bart Simpson")).toBeInTheDocument();
      });
    });

    describe("After searching for a quote with a character input", () => {
      it("should render the correct quote and character", async () => {
        render(<Cita />);
        const input = screen.getByLabelText("Author Cita") as HTMLInputElement;
        await userEvent.type(input, "Homer");
        const searchButton = screen.getByRole("button", {
          name: "Obtener Cita",
        });
        userEvent.click(searchButton);
        expect(
          await screen.findByText("I hope I didn't brain my damage.")
        ).toBeInTheDocument();
        expect(await screen.findByText("Homer Simpson")).toBeInTheDocument();
      });
    });
  });

  describe("on delete", () => {
    it("should no longer render the quote", async () => {
      render(<Cita />);
      const searchButton = screen.getByRole("button", {
        name: "Obtener cita aleatoria",
      });
      userEvent.click(searchButton);
      expect(await screen.findByText("Eat my shorts")).toBeInTheDocument();
      const deleteButton = screen.getByRole("button", {
        name: "Borrar",
      });
      userEvent.click(deleteButton);
      expect(
        await screen.findByText("No se encontro ninguna cita")
      ).toBeInTheDocument();
    });
  });

  describe("on invalid input", () => {
    it("should render message indicating the user to enter a valid name", async () => {
      render(<Cita />);
      const input = screen.getByLabelText("Author Cita") as HTMLInputElement;
      await userEvent.type(input, "32");
      const searchButton = screen.getByRole("button", { name: "Obtener Cita" });
      userEvent.click(searchButton);
      expect(
        await screen.findByText("Por favor ingrese un nombre válido")
      ).toBeInTheDocument();
    });
  });

  describe("On error", () => {
    it("should handle the error", async () => {
      server.use(
        rest.get(API_URL, (req, res, ctx) => {
          return res(ctx.status(500));
        })
      );
      render(<Cita />);
      const searchButton = screen.getByRole("button", {
        name: "Obtener cita aleatoria",
      });
      userEvent.click(searchButton);
      expect(
        await screen.findByText("Por favor ingrese un nombre válido")
      ).toBeInTheDocument();
    });
  });
});
