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
        const { container } = render(<Header>Meu Header</Header>)

        expect(container.firstChild).toHaveClass('header')
    })
})
