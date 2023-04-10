import PortalIcon from '../icons/PortalIcon';

const SignWrapper = ({ children }) => {
	return (
		<section className="py-6 bg-primary h-screen grid place-items-center">
			<div className="mx-auto max-w-md px-5 lg:px-0">
				<div>
					<PortalIcon />
					<h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
						Sign in to Student Account
					</h2>
				</div>
				{children}
			</div>
		</section>
	);
};

export default SignWrapper;
