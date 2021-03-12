import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../../contexts/auth'


interface PrivateRouteProps {
    component: Function
    path:string
    exact?:boolean
}

const PrivateRoutes = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props
    const { user } = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!user ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to={'/auth'} />
                )
            }
        />
    )
}

export default PrivateRoutes