import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signOut } from '../store/user/action'

class AdminNav extends Component {
    constructor(props) {
		super(props)
    }
    static propTypes = {
		signOut: PropTypes.func.isRequired
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
                    <a className="navbar-brand" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/menuitem">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/ingredient">Ingredients</a>
                        </li>
                        </ul>
                        <div className="d-flex">
                        <button className="btn btn-outline-light" onClick={this.props.signOut}>Log out</button>
                        </div>
                    </div>
                </div>
            </nav>
            
        )
    }
}
  
const mapDispatchToProps = {
    signOut
}

export default connect(null, mapDispatchToProps)(AdminNav)
