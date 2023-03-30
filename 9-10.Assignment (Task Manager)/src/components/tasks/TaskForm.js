import { useState } from 'react';

const TaskForm = () => {
	const [values, setValues] = useState({
		taskName: '',
		teamMember: '',
		projectName: '',
		deadline: '',
		status: 'pending',
	});
	const stateChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('values', values);
	};
	return (
		<div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
			<form
				className="space-y-6"
				onSubmit={submitHandler}
			>
				<div className="fieldContainer">
					<label htmlFor="lws-taskName">Task Name</label>
					<input
						type="text"
						name="taskName"
						id="lws-taskName"
						onChange={stateChange}
						required
						placeholder="Implement RTK Query"
					/>
				</div>

				<div className="fieldContainer">
					<label htmlFor="lws-teamMember">Assign To</label>
					<select
						name="teamMember"
						onChange={stateChange}
						id="lws-teamMember"
						required
					>
						<option
							value=""
							hidden
							selected
						>
							Select Job
						</option>
						<option>Sumit Saha</option>
						<option>Sadh Hasan</option>
						<option>Akash Ahmed</option>
						<option>Md Salahuddin</option>
						<option>Riyadh Hassan</option>
						<option>Ferdous Hassan</option>
						<option>Arif Almas</option>
					</select>
				</div>
				<div className="fieldContainer">
					<label htmlFor="lws-projectName">Project Name</label>
					<select
						id="lws-projectName"
						onChange={stateChange}
						name="projectName"
						required
					>
						<option
							value=""
							hidden
							selected
						>
							Select Project
						</option>
						<option>Scoreboard</option>
						<option>Flight Booking</option>
						<option>Product Cart</option>
						<option>Book Store</option>
						<option>Blog Application</option>
						<option>Job Finder</option>
					</select>
				</div>

				<div className="fieldContainer">
					<label htmlFor="lws-deadline">Deadline</label>
					<input
						type="date"
						name="deadline"
						onChange={stateChange}
						id="lws-deadline"
						required
					/>
				</div>

				<div className="text-right">
					<button
						type="submit"
						className="lws-submit"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default TaskForm;
