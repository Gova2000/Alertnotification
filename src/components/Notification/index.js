// Write your code here
import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'
import './index.css'

class Notify extends Component {
  render() {
    const {Children, Children2, Children3, Children4} = this.props

    return (
      <div className="mg">
        <div className="card1">
          <Children className="icon" />
          <div className="card">
            <h1 className="p1">Success</h1>
            <p>you can access all the files in the folder</p>
          </div>
          <GrFormClose />
        </div>

        <div className="card1">
          <Children2 className="icon1" />
          <div className="card">
            <h1 className="p2">Error</h1>
            <p>
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
          <GrFormClose />
        </div>

        <div className="card1">
          <Children3 className="icon2" />
          <div className="card">
            <h1 className="p3">Warning</h1>
            <p>Viewers of this file can see comments and suggestions</p>
          </div>
          <GrFormClose />
        </div>

        <div className="card1">
          <Children4 className="icon3" />
          <div className="card">
            <h1 className="p4">Info</h1>
            <p>Anyone on the internet can view these files</p>
          </div>
          <GrFormClose />
        </div>
      </div>
    )
  }
}

export default Notify
