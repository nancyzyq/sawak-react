import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signOut } from '../store/User/action'

class DashNav extends Component {
    constructor(props) {
		super(props)
    }
    static propTypes = {
		signOut: PropTypes.func.isRequired
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand col-sm-2 col-md-1 text-center" href="/admin/menuitem">Sawak</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                            <a className="nav-link" href="/admin/menuitem">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/ingredient">Ingredient</a>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link cursorPointter" onClick={this.props.signOut}>Sign out</a>
                        {/* <button type="button" class="btn btn-link" onClick={this.props.signOut}>Sign out</button> */}
                    </li>
                </ul>
            </nav>
        )
    }
}
const mapStateToProps = (state) => ({
    // foodList: state.Food.food
})
  
const mapDispatchToProps = {
    signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(DashNav)
