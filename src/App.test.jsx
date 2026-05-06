import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import App from "./App";

describe('App component', () => {

    it('Render correct heading', () => {
        render(<App />)
        expect(screen.getByRole("heading").textContent).toMatch(/our first test/i)
    })

})