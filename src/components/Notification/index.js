// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notify = props => (
  <div className="mg">
    <div className="card1">
      {props.children}
      <GrFormClose />
    </div>
  </div>
)

export default Notify
