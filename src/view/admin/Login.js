import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './admin.css'
// import { updateCMS } from '../../Store/Home/action'
import { signIn } from '../../store/user/action'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: ''
		}
		this.updateUserName = this.updateUserName.bind(this)
		this.updatePassword = this.updatePassword.bind(this)
		this.signin = this.signin.bind(this)
	}

	static propTypes = {
		// updateCMS: PropTypes.func.isRequired,
		signIn: PropTypes.func.isRequired
	}
	updateUserName (e) {
		this.setState({ userName: e.target.value })
	}

	updatePassword (e) {
		this.setState({ password: e.target.value })
	}

	signin (e) {
		e.preventDefault()
		let username = this.state.userName
		let passwd = this.state.password
		if (username.length !== 0 && passwd.length !== 0) {
			this.props.signIn(username, passwd)
		}
	}

	// componentDidMount () {
	// 	this.props.updateCMS(true)
  	// }

	render() {
		let username = this.state.userName
		let pass = this.state.password
		return (
			<div>
				<div className="loginForm">
					<form onSubmit={this.signin}>
						{/* <div className="form-group">
							<input className="form-control" value={username} onChange={this.updateUserName} placeholder="User Name" />
						</div>
						<div className="form-group">
							<input type="password" value={pass} className="form-control" onChange={this.updatePassword} placeholder="Password" />
						</div> */}
						<div className="mb-3">
							<label className="form-label">Name</label>
							<input className="form-control" value={username} onChange={this.updateUserName}/>
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input type="password" className="form-control" value={pass} onChange={this.updatePassword}/>
						</div>
						{/* <button type="submit" className="adminButton">Login</button> */}
						<button type="submit" className="btn btn-primary">Login</button>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
	// updateCMS,
	signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
