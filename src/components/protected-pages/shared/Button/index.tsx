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
    buttonType:any
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
        onClickAction,
        buttonType
        
    } = props

    return (
        <ButtonContainer
            width={width}
            height={height}
            background={background}
            fontSize={fontSize}
            fontWeight={fontWeight}
            margin={margin}
            type={buttonType}
            onClick={onClickAction}>
            {children}
        </ButtonContainer>
    )
}