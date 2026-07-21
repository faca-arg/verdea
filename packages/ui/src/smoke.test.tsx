import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, Input } from "./index";

test("renders the primary action", () => {
  render(<Button>Comprar</Button>);
  expect(screen.getByRole("button", { name: "Comprar" })).toBeEnabled();
});

test("marks invalid fields", () => {
  render(<Input id="postal" label="Código postal" error="Código inválido" />);
  expect(screen.getByLabelText("Código postal")).toHaveAttribute("aria-invalid", "true");
});
