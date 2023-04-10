import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Nav from '../../components/Nav'
import './admin.css'
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

	render() {
		let username = this.state.userName
		let pass = this.state.password
		return (
			<div>
				<Nav />
					<div className="loginForm">
						<form onSubmit={this.signin}>
							<div className="mb-3">
								<label className="form-label">Name</label>
								<input className="form-control" value={username} onChange={this.updateUserName}/>
							</div>
							<div className="mb-3">
								<label className="form-label">Password</label>
								<input type="password" className="form-control" value={pass} onChange={this.updatePassword}/>
							</div>
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
