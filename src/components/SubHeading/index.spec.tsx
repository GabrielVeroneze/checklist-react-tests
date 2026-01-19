import { render } from '@testing-library/react'
import SubHeading from './index'

describe('SubHeading', () => {
    test('deveria renderizar o componente corretamente', () => {
        const { getByText } = render(<SubHeading>Para estudar</SubHeading>)

        expect(getByText('Para estudar')).toBeInTheDocument()
    })

    test('não deveria renderizar o componente quando não tem children', () => {
        const { queryByText } = render(
            <SubHeading children={undefined}></SubHeading>,
        )

        expect(queryByText('Para estudar')).toBeNull()
    })
})
