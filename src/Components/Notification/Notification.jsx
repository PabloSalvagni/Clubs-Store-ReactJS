
import { useContext } from "react"
import NotificationContext from '../../Context/NotificationContext'
import './Notification.css'
const Notification = () => {

    const { notification } = useContext(NotificationContext)

    if(notification.message === '') {
        return null
    }

    return (
        <div className={notification.severity === 'error' ? 'msg_error text-center p-3' : 'msg_success text-center p-3'}>
            {notification.message}
        </div>
    )
}

export default Notification