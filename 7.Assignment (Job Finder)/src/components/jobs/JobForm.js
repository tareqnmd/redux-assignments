import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeJob, createJob, removeEditData } from '../../features/job/jobSlice';

const JobForm = () => {
	const [values, setValues] = useState({ title: '', salary: '', deadline: '', type: '' });
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const reset = () => {
		setValues({ title: '', salary: '', deadline: '', type: '' });
	};
	const { editJobData = {} } = useSelector((state) => state.job);
	const submitHandler = (e) => {
		e.preventDefault();
		const payload = { ...values, salary: Number(values.salary) };
		if (editJobData?.id) {
			dispatch(changeJob({ id: editJobData?.id, data: payload }));
			dispatch(removeEditData());
		} else {
			dispatch(createJob(payload));
		}
		navigate('/');
	};
	const stateChangeHandler = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value ?? '' }));
	};

	useEffect(() => {
		if (editJobData?.id) {
			const { title, type, deadline, salary } = editJobData;
			setValues({ title, type, deadline, salary });
		} else {
			reset();
		}
		return () => {
			reset();
		};
	}, [editJobData]);
	return (
		<div className="max-w-3xl mx-auto">
			<form
				className="space-y-6"
				onSubmit={submitHandler}
			>
				<div className="fieldContainer">
					<label className="text-sm font-medium text-slate-300">Job Title</label>
					<select
						name="title"
						value={values.title}
						required
						onChange={stateChangeHandler}
					>
						<option
							value=""
							hidden
						>
							Select Job
						</option>
						<option>Software Engineer</option>
						<option>Software Developer</option>
						<option>Full Stack Developer</option>
						<option>MERN Stack Developer</option>
						<option>DevOps Engineer</option>
						<option>QA Engineer</option>
						<option>Product Manager</option>
						<option>Social Media Manager</option>
						<option>Senior Executive</option>
						<option>Junior Executive</option>
						<option>Android App Developer</option>
						<option>IOS App Developer</option>
						<option>Frontend Developer</option>
						<option>Frontend Engineer</option>
					</select>
				</div>

				<div className="fieldContainer">
					<label>Job Type</label>
					<select
						name="type"
						value={values.type}
						onChange={stateChangeHandler}
						required
					>
						<option
							value=""
							hidden
						>
							Select Job Type
						</option>
						<option>Full Time</option>
						<option>Internship</option>
						<option>Remote</option>
					</select>
				</div>

				<div className="fieldContainer">
					<label>Salary</label>
					<div className="flex border rounded-md shadow-sm border-slate-600">
						<span className="input-tag">BDT</span>
						<input
							value={values.salary}
							onChange={stateChangeHandler}
							type="number"
							name="salary"
							required
							className="!rounded-l-none !border-0"
							placeholder="20,00,000"
						/>
					</div>
				</div>

				<div className="fieldContainer">
					<label>Deadline</label>
					<input
						value={values.deadline}
						type="date"
						name="deadline"
						onChange={stateChangeHandler}
						required
					/>
				</div>

				<div className="text-right">
					<button
						type="submit"
						id="lws-submit"
						className="cursor-pointer btn btn-primary w-fit"
					>
						{editJobData?.id ? 'Update' : 'Submit'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default JobForm;
