import { TextInputElement, InputLabel } from './styles'

type TypesFormFieldsProps = {
    name?: string
    type?: string
    onChangeAction: (e: any) => void
    label?: string
    width?: string
}

export default function FormFields(props: TypesFormFieldsProps) {
    const { name, type, onChangeAction, label, width } = props

    return (
        <>
            <InputLabel>{label}</InputLabel>
            <TextInputElement
                onChange={(e) => onChangeAction(e)}
                width={width}
                type={type}
                name={name}
                placeholder={`Type ${label}`}
            />
        </>
    )
}