import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const stateChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value ?? null }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('values', values);
	};
	return (
		<form
			className="mt-8 space-y-6"
			onSubmit={handleSubmit}
		>
			<div className="rounded-md shadow-sm -space-y-px">
				<div>
					<label
						htmlFor="email-address"
						className="sr-only"
					>
						Email address
					</label>
					<input
						id="email-address"
						name="email"
						type="email"
						required
						className="login-input rounded-t-md"
						placeholder="Email address"
						onChange={stateChange}
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="sr-only"
					>
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						required
						className="login-input rounded-b-md"
						placeholder="Password"
						onChange={stateChange}
					/>
				</div>
			</div>

			<div className="flex items-center justify-end">
				<div className="text-sm">
					<NavLink
						to="/registration"
						className="font-medium text-violet-600 hover:text-violet-500"
					>
						Create New Account
					</NavLink>
				</div>
			</div>

			<div>
				<button
					type="submit"
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
				>
					Sign in
				</button>
			</div>
		</form>
	);
};

export default Login;
