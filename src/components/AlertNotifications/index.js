// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notify from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="main">
    <h1>Alert Notifications</h1>

    <Notify className="card1">
      <div className="cd1">
        <AiFillCheckCircle className="icon" />
        <div className="card">
          <h1 className="p1">Success</h1>
          <p>you can access all the files in the folder</p>
        </div>
      </div>
    </Notify>

    <Notify>
      <div className="cd1">
        <RiErrorWarningFill className="icon1" />
        <div className="card">
          <h1 className="p2">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notify>

    <Notify>
      <div className="cd1">
        <MdWarning className="icon2" />
        <div>
          <h1 className="p3">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </div>
    </Notify>

    <Notify>
      <div className="cd1">
        <MdInfo className="icon3" />
        <div>
          <h1 className="p4">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notify>
  </div>
)

export default AlertNotifications
