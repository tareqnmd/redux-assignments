import { useState } from 'react';

const Registration = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
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
						htmlFor="name"
						className="sr-only"
					>
						Name
					</label>
					<input
						id="name"
						name="name"
						type="name"
						required
						className="login-input rounded-t-md"
						placeholder="Student Name"
						onChange={stateChange}
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="sr-only"
					>
						Email address
					</label>
					<input
						id="email"
						name="email"
						type="email"
						onChange={stateChange}
						required
						className="login-input "
						placeholder="Email address"
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
						onChange={stateChange}
						required
						className="login-input"
						placeholder="Password"
					/>
				</div>
				<div>
					<label
						htmlFor="confirm-password"
						className="sr-only"
					>
						Confirm Password
					</label>
					<input
						id="confirm-password"
						name="confirmPassword"
						type="password"
						onChange={stateChange}
						required
						className="login-input rounded-b-md"
						placeholder="Confirm Password"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
				>
					Create Account
				</button>
			</div>
		</form>
	);
};

export default Registration;
