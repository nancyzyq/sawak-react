import moment from 'moment'
import { useParams } from 'react-router-dom'

export const isLoggedIn = () => {
    let user = localStorage.getItem('user')
    if (user) { 
      user = JSON.parse(user)
      if (moment().isBefore(moment(user.expire))) return true
      localStorage.removeItem('user')
    }
    return false
}

export const isAdmin = () => {
    let user = localStorage.getItem('user')
    if (user) { 
      user = JSON.parse(user)
      if (!moment().isBefore(moment(user.expire))) {
        localStorage.removeItem('user')
        return false
      }
      if (user.role === 'admin') return true
    }
    return false
}

// get url params for class component
export function withRouterParams (Component) {
	return  function WrappedComponent(props) {
		const params = useParams()
		return <Component params={params} {...props}/>
	}
}