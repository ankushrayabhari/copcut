import React from 'react'
import Promise from 'bluebird'
import 'whatwg-fetch'

class RegisterBarber extends React.Component {
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
			gender: this.refs.gender.value,
			address: this.refs.address.value,
			city: this.refs.city.value,
			country: this.refs.country.value,
			postcode: this.refs.postcode.value,
			phonenumber: this.refs.phonenumber.value,
			yearscut: this.refs.yearscut.value,
			description: this.refs.description.value
		};

		fetch('/api/register/barber', {
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
				this.setState({errors: ["success"]});
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
				<h3>Register as a Barber</h3>
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

					Address: <input type='text' ref='address' /><br/>
					City: <input type='text' ref='city' /><br/>
					Country: <input type='text' ref='country' /><br/>
					Post Code: <input type='text' ref='postcode' maxlength="15" /><br/>
					Phone Number: <input type='text' ref='phonenumber' maxlength="50" /><br/>

					Profile Picture: <input type='file' ref='profilepicture' /><br/>
					Years Cut: <input type='number' ref='yearscut' min='0' /><br/>
					Description: <textarea ref="description" rows="10" cols="30"></textarea><br/>
					<button onClick={this.handleSubmit.bind(this)}>Register</button>
				</div>
			</div>
		);
	}
}

export default RegisterBarber;