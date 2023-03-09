import React from 'react'
import './NotificationComponent.css'

interface NotificationComponentProps{
    notificationText: string,
    isNotificationVisible: boolean
}

const NotificationComponent = ({notificationText = '', isNotificationVisible = false}: NotificationComponentProps) => {
  return (
    <div className={isNotificationVisible ? 'notification notificationShown fade' : 'notification notificationHidden'}>
        <p className='notificationText'>{notificationText}</p>
    </div>
  )
}

export default NotificationComponent