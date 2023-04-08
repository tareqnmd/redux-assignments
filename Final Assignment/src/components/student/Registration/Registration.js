const Registration = () => {
	return (
		<form
			className="mt-8 space-y-6"
			action="#"
			method="POST"
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
						name="name"
						type="name"
						autocomplete="name"
						required
						className="login-input rounded-t-md"
						placeholder="Student Name"
					/>
				</div>
				<div>
					<label
						htmlFor="email-address"
						className="sr-only"
					>
						Email address
					</label>
					<input
						name="email"
						type="email"
						autocomplete="email"
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
						name="password"
						type="password"
						autocomplete="current-password"
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
						name="confirm-password"
						type="password"
						autocomplete="confirm-password"
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
