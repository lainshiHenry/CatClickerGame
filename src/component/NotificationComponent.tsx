import React from 'react'
import './NotificationComponent.css'

export enum NotificationStatusType{
  success = 'notificationSuccess',
  warning = 'notificationWarning',
  error = 'notificationError',
  none = '',
}

interface NotificationComponentProps{
    notificationText: string,
    isNotificationVisible: boolean,
    notificationStatusType: NotificationStatusType

}

const NotificationComponent = ({notificationText = '', isNotificationVisible = false, notificationStatusType = NotificationStatusType.none}: NotificationComponentProps) => {
  return (
    <div className={(isNotificationVisible ? `notification notificationShown fade ${notificationStatusType}` : `notification notificationHidden`)}>
        <p className='notificationText'>{notificationText}</p>
    </div>
  )
}

export default NotificationComponent