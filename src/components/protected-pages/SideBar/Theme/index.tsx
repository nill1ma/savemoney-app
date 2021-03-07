import React, { useContext } from 'react'
import { faCloudSun, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from 'styled-components'
import { ToggleContext } from '../../../../contexts/toggle-theme'
import { Icon, IconBorder, ThemeAreaContainer } from './styles'

export default function Theme() {
    const { handleTheme } = useContext(ToggleContext)
    const choseTheme = [
        { title: 'light', icon: faSun },
        { title: 'light-dark', icon: faCloudSun },
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
