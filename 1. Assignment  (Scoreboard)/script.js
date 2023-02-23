const countArea = document.querySelector('.all-matches.container');
const resetButton = document.querySelector('.lws-reset');
const addButton = document.querySelector('.lws-addMatch');

const htmlCounter = (id, i) => `
<div class="wrapper">
	<button class="lws-delete" id="lws-delete-${id}">
		<img src="./image/delete.svg" alt="" />
	</button>
	<h3 class="lws-matchName">Match ${i}</h3>
</div>
<div class="inc-dec">
	<form class="incrementForm" id="incrementForm-${id}">
		<h4>Increment</h4>
		<input
			type="number"
			name="increment"
			class="lws-increment"
		/>
	</form>
	<form class="decrementForm" id="decrementForm-${id}">
		<h4>Decrement</h4>
		<input
			type="number"
			name="decrement"
			class="lws-decrement"
		/>
	</form>
</div>
<div class="numbers">
	<h2 class="lws-singleResult" id="lws-singleResult-${id}"></h2>
</div>
`;

const UPDATE_SCORECARD = 'match/updateScorecard';
const ADD_SCORECARD = 'match/addScorecard';
const RESET_SCOREBOARD = 'match/resetScorecard';

const update = (payload) => {
	return { type: UPDATE_SCORECARD, payload };
};
const add = (scorecard) => {
	return { type: ADD_SCORECARD };
};
const reset = () => {
	return { type: RESET_SCOREBOARD };
};

const initialState = { scorecards: [{ id: 0, value: 0 }] };

const counterReducer = (state = initialState, action) => {
	if (action.type === UPDATE_SCORECARD) {
		return {
			...state,
			scorecards: state.scorecards?.map((scorecard) =>
				scorecard.id === action.payload.id
					? { ...scorecard, value: scorecard.value + action.payload.value }
					: { ...scorecard }
			),
		};
	} else if (action.type === ADD_SCORECARD) {
		return {
			...state,
			scorecards: [
				...state.scorecards,
				{
					id: state.scorecards.length,
					value: 0,
				},
			],
		};
	} else if (action.type === RESET_SCOREBOARD) {
		return {
			...state,
			scorecards: state.scorecards.map((scorecard) => ({
				...scorecard,
				value: 0,
			})),
		};
	} else {
		return state;
	}
};

const store = Redux.createStore(counterReducer);

const render = () => {
	const state = store.getState();
	state.scorecards.forEach((scoreboard, i) => {
		if (!document.querySelector(`#match-${i}-${scoreboard.id}`)) {
			const el = document.createElement('div');
			el.setAttribute('class', `match`);
			el.setAttribute('id', `match-${i}-${scoreboard.id}`);
			el.innerHTML = htmlCounter(`${i}-${scoreboard.id}`, i + 1);
			countArea.insertAdjacentElement('beforeend', el);
			const incrementEl = document.querySelector(`#incrementForm-${i}-${scoreboard.id}`);
			const decrementEl = document.querySelector(`#decrementForm-${i}-${scoreboard.id}`);
			incrementEl.addEventListener('submit', (e) => {
				e.preventDefault();
				const value = e.target.querySelector('input').value;
				store.dispatch(update({ id: scoreboard.id, value: Number(value) }));
				e.target.reset();
			});
			decrementEl.addEventListener('submit', (e) => {
				e.preventDefault();
				const value = e.target.querySelector('input').value;
				store.dispatch(update({ id: scoreboard.id, value: -Number(value) }));
				e.target.reset();
			});
		}

		const counterValueEl = document.getElementById(`lws-singleResult-${i}-${scoreboard.id}`);
		counterValueEl.innerHTML = scoreboard.value;
	});
};

store.subscribe(render);

render();

addButton.addEventListener('click', () => {
	store.dispatch(add());
});
resetButton.addEventListener('click', () => {
	store.dispatch(reset());
});
