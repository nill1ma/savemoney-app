import { ChangeEvent } from 'react'
import { TextInputElement, InputLabel } from './styles'

type TypesFormFieldsProps = {
    name?: string
    type?: string
    onChangeAction?: (e: ChangeEvent<HTMLInputElement>) => void
    label?: string
    width?: string
}

export default function FormFields(props: TypesFormFieldsProps) {
    const { name, type, label, width } = props

    return (
        <>
            <InputLabel>{label}</InputLabel>
            <TextInputElement
                type={type}
                name={name}
                width={width}
                placeholder={`Type ${label}`}
            />
        </>
    )
}