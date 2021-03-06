import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import Navbar from '../../shared/components/Navbar';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import Alert from '../../shared/components/Alert';
import Loading from '../../shared/components/Loading';
import cowImage from '../../shared/images/cowGrass.png';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttp } from '../../shared/hooks/http-hook';
import { MIN_LENGTH, IS_EMAIL, MAX_LENGTH } from '../../utils/validators';

export default function Login() {
	const [isLoading, error, sendRequest] = useHttp();
	const [state, inputChangeHandler] = useForm(
		{
			password: {
				value: '',
				isValid: false
			},
			email: {
				value: '',
				isValid: false
			}
		},
		false
	);
	const auth = useContext(AuthContext);

	const formSubmitHandler = async e => {
		e.preventDefault();

		try {
			const responseData = await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/users/login`,
				'POST',
				JSON.stringify({
					password: state.inputs.password.value,
					email: state.inputs.email.value
				}),
				{
					'Content-Type': 'application/json'
				}
			);

			auth.login(responseData.user.id, responseData.token);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<Navbar />
			{isLoading && <Loading />}
			{!isLoading && (
				<div className="container p-1">
					<form
						className="form my-3 p-2"
						onSubmit={formSubmitHandler}>
						<h1 className="center L-heading mb-1">
							Log<span className="text-primary">in</span>
						</h1>
						{error && <Alert message={error} type="error" />}
						<Input
							type="email"
							label="Email"
							placeholder="Enter Email..."
							name="email"
							id="email"
							validators={[IS_EMAIL(), MAX_LENGTH(50)]}
							errorText="Please Input A Valid Email"
							onInput={inputChangeHandler}
						/>
						<Input
							type="password"
							label="Password"
							placeholder="Enter Password..."
							name="password"
							id="password"
							validators={[MIN_LENGTH(6), MAX_LENGTH(300)]}
							errorText="Please Input A Valid Password (At least 6 characters)"
							onInput={inputChangeHandler}
						/>
						<Button
							type="submit"
							block
							disabled={!state.isFormValid}
							color="primary"
							extraClasses="my-1">
							Login
						</Button>
						<img
							src={cowImage}
							className="cow-img"
							alt="Cow Eating Grass"
						/>
					</form>
				</div>
			)}
		</div>
	);
}
