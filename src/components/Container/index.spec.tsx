import { render } from '@testing-library/react'
import Container from './index'

describe('Container', () => {
    test('deveria renderizar o componente corretamente', () => {
        const { container, getByText } = render(
            <Container>Qualquer children enviado</Container>,
        )

        expect(getByText('Qualquer children enviado')).toBeInTheDocument()
        expect(container.querySelector('section')).toBeInTheDocument()
    })
})
