import { render } from '@testing-library/react'
import Header from './index'

jest.mock('./header.module.css', () => ({
    header: 'header',
}))

describe('Header', () => {
    test('deveria renderizar o componente', () => {
        expect(<Header>Meu Header</Header>).toBeTruthy()
    })

    test('deveria renderizar o componente com a classe correta', () => {
        const { container, debug } = render(<Header>Meu Header</Header>)

        debug()

        expect(container.firstChild).toHaveClass('header')
    })
})
