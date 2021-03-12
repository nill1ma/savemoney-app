import { useContext } from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ToggleContext } from '../../../../contexts/toggle-theme'
import { Icon, IconBorder, ThemeAreaContainer } from './styles'

export default function Theme() {
    const { handleTheme } = useContext(ToggleContext)
    const choseTheme = [
        { title: 'light', icon: faSun },
        { title: 'dark', icon: faMoon },
    ]

    return (
        <ThemeAreaContainer>
            {choseTheme.map(choose => {
                return (
                    <IconBorder key={choose.title} title={choose.title}>
                        <Icon
                            key={`${choose.title}${Math.random()}`}
                            title={choose.title}
                            icon={choose.icon}
                            onClick={() => handleTheme(choose.title)} />
                    </IconBorder>
                )
            })}
        </ThemeAreaContainer>
    )
}
