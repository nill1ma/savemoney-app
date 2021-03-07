import { ButtonContainer } from './styles'


type TypesButtonProps = {
    width?: string
    height?: string
    background?: string
    fontSize?: string
    fontWeight?: string
    margin?: string
    children?: string
    onClickAction?: () => void
}

export function Button(props: TypesButtonProps) {

    const {
        width,
        height,
        background,
        fontSize,
        fontWeight,
        margin,
        children,
        onClickAction
    } = props

    return (
        <ButtonContainer
            width={width}
            height={height}
            background={background}
            fontSize={fontSize}
            fontWeight={fontWeight}
            margin={margin}
            onClick={onClickAction}>
            {children}
        </ButtonContainer>
    )
}