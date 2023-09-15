// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notify from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="main">
        <h1>Alert Notifications</h1>
        <Notify
          Children={AiFillCheckCircle}
          Children2={RiErrorWarningFill}
          Children4={MdInfo}
          Children3={MdWarning}
        />
      </div>
    )
  }
}
export default AlertNotifications
