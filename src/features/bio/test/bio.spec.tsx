import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Bio from "../Bio";

describe("Bio", () => {
  describe("Initially", () => {
    it("should render character Bart information", async () => {
      render(<Bio />);
      expect(screen.getByText("Bart Simpson")).toBeInTheDocument();
    });
  });

  describe("on selecting Homer character", () => {
    it("should render character Homer information", async () => {
      render(<Bio />);
      const homerButton = screen.getByRole("button", {
        name: /homero/i,
      });
      userEvent.click(homerButton);
      expect(await screen.findByText("Homero Simpson")).toBeInTheDocument();
    });
  });
});
