import { render } from '@testing-library/react'
import FabButton from './index'

jest.mock('./fab-button.module.css', () => ({
    fab: 'fab',
}))

describe('FabButton', () => {
    test('deveria renderizar corretamente o componente', () => {
        const { getByRole } = render(<FabButton>Texto simples</FabButton>)

        const button = getByRole('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('fab')
        expect(button).toHaveTextContent('Texto simples')
    })
})
