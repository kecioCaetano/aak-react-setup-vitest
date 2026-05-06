import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AppUserEventTest from "./AppUserEventTest";

describe("App component", () => {
    it('render magnificent monkey', () => {
        const { container } = render(<AppUserEventTest />)
        expect(container).toMatchSnapshot()
    })



    it("renders radical rhinos after button click", async () => {
        const user = userEvent.setup()

        render(<AppUserEventTest />)
        const button = screen.getByRole('button', { name: 'Click Me' })

        await user.click(button)

        expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i)
    })

})