import { vi, describe, it, expect, Experimental } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CustomButton from './CustomButton'

describe('CustomButton', () => {

    it('Should render a button with the text: Click me', () => {

        render(<CustomButton onClick={() => { }} />)

        const button = screen.getByRole('button', { name: 'Click me' })

        expect(button).toBeInTheDocument()
    })

    it('It should call the onClick function when clicked', async () => {
        const onClick = vi.fn()
        const user = userEvent.setup()

        render(<CustomButton onClick={onClick} />)

        const button = screen.getByRole('button', { name: 'Click me' })

        await user.onClick(button)

        expect(onClick).toHaveBeenCalled()

    })

    it('Should not call the onClick function when it isnt clicked', () => {
        const onClick = vi.fn()
        render(<CustomButton onClick={onClick} />)

        expect(onClick).not.toHaveBeenCalled()
    })


})