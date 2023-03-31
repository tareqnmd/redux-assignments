import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProjectQuery, useGetProjectsQuery } from '../../features/projects/projectsAPi';
import { useAddTaskMutation, useGetTaskQuery } from '../../features/tasks/tasksAPi';
import { useGetTeamQuery, useGetTeamsQuery } from '../../features/team/teamAPi';

const TaskForm = () => {
	const [values, setValues] = useState({
		taskName: '',
		teamMember: '',
		project: '',
		deadline: '',
	});
	const navigate = useNavigate();
	const { id } = useParams();
	const [add, { isLoading, isError, error, isSuccess }] = useAddTaskMutation();
	const { data: editTask } = useGetTaskQuery(id, { skip: !!!id });
	const { data: teamMember } = useGetTeamQuery(values.teamMember, { skip: !!!values.teamMember });
	const { data: project } = useGetProjectQuery(values.project, {
		skip: !!!values.project,
	});
	const { data: teams } = useGetTeamsQuery();
	const { data: projects } = useGetProjectsQuery();
	const stateChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const payload = { ...values, status: 'pending', teamMember, project };
		add(payload);
	};

	useEffect(() => {
		if (editTask?.id) {
			setValues({
				...editTask,
				teamMember: editTask?.teamMember?.id,
				project: editTask?.project?.id,
			});
		}
	}, [editTask]);

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	}, [navigate, isSuccess]);
	return (
		<>
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
							value={values?.taskName}
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
							value={values?.teamMember}
							required
						>
							<option
								value=""
								hidden
								defaultChecked
							>
								Select Job
							</option>
							{teams?.map((item) => (
								<option
									key={item.id}
									value={item.id}
								>
									{item.name}
								</option>
							))}
						</select>
					</div>
					<div className="fieldContainer">
						<label htmlFor="lws-projectName">Project Name</label>
						<select
							id="lws-projectName"
							onChange={stateChange}
							name="project"
							value={values?.project}
							required
						>
							<option
								value=""
								hidden
								defaultChecked
							>
								Select Project
							</option>
							{projects?.map((item) => (
								<option
									key={item.id}
									value={item.id}
								>
									{item.projectName}
								</option>
							))}
						</select>
					</div>

					<div className="fieldContainer">
						<label htmlFor="lws-deadline">Deadline</label>
						<input
							value={values?.deadline}
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
			<div>{isLoading && <>Loading...</>}</div>
			<div>{!isLoading && isError && error.data}</div>
		</>
	);
};

export default TaskForm;
