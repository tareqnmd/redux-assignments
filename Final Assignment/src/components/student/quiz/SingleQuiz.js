const SingleQuiz = ({ quiz }) => {
	const { question, options } = quiz || {};
	return (
		<div className="quiz">
			<h4 className="question">{question}</h4>
			<form className="quizOptions">
				{options?.map((option, id) => (
					<label htmlFor={id}>
						<input
							type="checkbox"
							id={id}
						/>
						{option}
					</label>
				))}
			</form>
		</div>
	);
};

export default SingleQuiz;
