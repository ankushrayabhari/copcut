import React from 'react'
import Promise from 'bluebird'
import { withRouter } from 'react-router'
import 'whatwg-fetch'

class RegisterUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {errors: null};
	}

	handleSubmit() {
		const data = {
			username: this.refs.username.value,
			firstname: this.refs.firstname.value,
			middlename: this.refs.middlename.value,
			lastname: this.refs.lastname.value,
			password: this.refs.password.value,
			email: this.refs.email.value,
			birthday: this.refs.birthday.value,
			gender: this.refs.gender.value
		};

		fetch('/api/register/user', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			if(data.success) {
				this.props.router.push('/login');
			}
			else {
				this.setState({errors: data.errors});
			}
		});
	}

	render() {
		let errorDisplay = null;

		const style = {
			color: "red"
		};

		if(this.state.errors) {
			errorDisplay = this.state.errors.map((err) => {
				return (<p style={style}>{err}</p>);
			});
		}
		
		return (
			<div>
				<h3>Register as a User</h3>
				<div>
					{errorDisplay}
				</div>
				
				<div>
					Username: <input type='text' ref='username' maxLength='36' /><br/>
					Password: <input type='password' ref='password' /><br/>
					Email: <input type='email' ref='email' maxLength="320" /><br/>
					Birthday: <input type='date' ref='birthday' /><br/>

					First Name: <input type='text' ref='firstname' maxLength="50" /><br/>
					Middle Name: <input type='text' ref='middlename' maxLength="50" /><br/>
					Last Name: <input type='text' ref='lastname' maxLength="50" /><br/>
					Gender: <input type='text' ref='gender' maxLength="1" /><br/>
					<button onClick={this.handleSubmit.bind(this)}>Register</button>
				</div>
			</div>
		);
	}
}

RegisterUser.propTypes = {
  router: React.PropTypes.object.isRequired
};

export default withRouter(RegisterUser);