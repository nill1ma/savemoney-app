import { useState } from 'react';
import { faEye, faMoneyCheckAlt, faPiggyBank, faChartBar, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import Theme from "./Theme";
import { SideBarContainer, SideBarLogo, SideBarItems, MenuLink, MenuIcon } from "./styles";

export default function SideBar() {

    const [menu, setMenu] = useState([
        { id: 1, textHover: 'Overview', icon: faEye, path: '/', active: true },
        { id: 2, textHover: 'Expenses', icon: faMoneyCheckAlt, path: '/create-expenses', active: false },
        { id: 3, textHover: 'Money deposit', icon: faPiggyBank, path: '', active: false },
        { id: 4, textHover: 'Charts', icon: faChartBar, path: '', active: false },
        { id: 5, textHover: 'Profile', icon: faUser, path: '', active: false },
        { id: 6, textHover: 'Log out', icon: faPowerOff, path: '', active: false }

    ])

    const handleMenu = (id: number) => {
        menu.map(m => id === m.id ? m.active = true : m.active = false)
        setMenu([...menu])
    }

    return (
        <SideBarContainer>
            <SideBarLogo />
            <SideBarItems>
                {menu.map(m => {
                    return (
                        <>
                        <MenuLink key={m.id} to={m.path}>
                            <MenuIcon
                                data-tip
                                data-for={`${m.id}`}
                                active={m.active}
                                onClick={() => handleMenu(m.id)}
                                size={'2x'} icon={m.icon} />
                            <ReactTooltip
                                id={`${m.id}`}
                                type={'info'}
                                backgroundColor={'#FFFFFF'}
                                textColor={'#2C2C2C'}
                                border={true}
                                place={'right'}
                                getContent={() => m.textHover}
                            />
                        </MenuLink>
                        </>
                    )
                })}
            </SideBarItems>
            <Theme />
        </SideBarContainer>
    )
}