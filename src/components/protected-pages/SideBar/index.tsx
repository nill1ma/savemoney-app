import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { faChartBar, faEye, faMoneyCheckAlt, faPiggyBank, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { MenuIcon, MenuLink, SideBarContainer, SideBarItems, SideBarLogo } from "./styles";
import ReactTooltip from 'react-tooltip';
import Theme from "../shared/Theme";
import { logOut } from '../../../services/users';
import { RoutesEnum } from '../../../models/RoutesEnum';

export default function SideBar() {
    const { colors } = useContext(ThemeContext)

    const [menu, setMenu] = useState([
        { id: 1, textHover: 'Overview', icon: faEye, path: RoutesEnum.OVERVIEW, active: true },
        { id: 2, textHover: 'Expenses', icon: faMoneyCheckAlt, path: RoutesEnum.CREATE_EXPENSES, active: false },
        { id: 3, textHover: 'Money deposit', icon: faPiggyBank, path: RoutesEnum.MONEY_DEPOSIT, active: false },
        { id: 4, textHover: 'Charts', icon: faChartBar, path: RoutesEnum.CHARTS, active: false },
        { id: 5, textHover: 'Profile', icon: faUser, path: RoutesEnum.PROFILE, active: false },
        { id: 6, textHover: 'Log out', icon: faSignOutAlt, path: '', active: false, click: () => logOut() }

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
                        <MenuLink key={m.path} to={m.path}>
                            <MenuIcon
                                data-tip
                                data-for={`${m.id}`}
                                active={m.active}
                                transform={(m.path === '') ? {rotate:180} : {}}
                                onClick={() => !m.click ? handleMenu(m.id) : m.click()}
                                size={'2x'} icon={m.icon} />
                            <ReactTooltip
                                id={`${m.id}`}
                                backgroundColor={colors.secondaryColor}
                                textColor={colors.primaryColor}
                                border={true}
                                place={'right'}
                                getContent={() => m.textHover}
                            />
                        </MenuLink>
                    )
                })}
            </SideBarItems>
            <Theme />
        </SideBarContainer>
    )
}