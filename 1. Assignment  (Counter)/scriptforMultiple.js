const countArea = document.querySelector('#counterArea');
const resetButton = document.querySelector('#resetButton');
const addButton = document.querySelector('#addButton');

const htmlCounter = (id) => `<div
class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
>
<div id="countArea-${id}" class="text-2xl font-semibold">0</div>
<div class="flex space-x-3">
    <button id="incrementButton-${id}" class="bg-indigo-400 text-white px-3 py-2 rounded shadow">
        Increment
    </button>
    <button id="decrementButton-${id}" class="bg-red-400 text-white px-3 py-2 rounded shadow">
        Decrement
    </button>
</div>
</div>`;

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADD_COUNTER = 'addCounter';
const RESET_COUNTER = 'resetCOUNTER';

const increment = (counter) => {
	return { type: INCREMENT, payload: counter };
};
const decrement = (counter) => {
	return { type: DECREMENT, payload: counter };
};
const addCounter = (counter) => {
	return { type: ADD_COUNTER, payload: counter };
};
const resetCounters = () => {
	return { type: RESET_COUNTER };
};

const initialState = { counters: [{ id: 0, value: 0, increaseBy: 1, defaultValue: 0 }] };

const counterReducer = (state = initialState, action) => {
	if (action.type === INCREMENT) {
		return {
			...state,
			counters: state.counters?.map((counter) =>
				counter.id === action.payload.id
					? { ...counter, value: counter.value + counter.increaseBy }
					: { ...counter }
			),
		};
	} else if (action.type === DECREMENT) {
		return {
			...state,
			counters: state.counters?.map((counter) =>
				counter.id === action.payload.id
					? { ...counter, value: counter.value - counter.increaseBy }
					: { ...counter }
			),
		};
	} else if (action.type === ADD_COUNTER) {
		return {
			...state,
			counters: [
				...state.counters,
				{
					id: state.counters.length,
					value: action.payload.defaultValue,
					...action.payload,
				},
			],
		};
	} else if (action.type === RESET_COUNTER) {
		return {
			...state,
			counters: state.counters.map((counter) => ({
				...counter,
				value: counter.defaultValue,
			})),
		};
	} else {
		return state;
	}
};

const store = Redux.createStore(counterReducer);

const render = () => {
	const state = store.getState();
	state.counters.forEach((counter, i) => {
		if (!document.querySelector(`#counter-${i}-${counter.id}`)) {
			const el = document.createElement('div');
			el.setAttribute('id', `counter-${i}-${counter.id}`);
			el.innerHTML = htmlCounter(`${i}-${counter.id}`);
			countArea.insertAdjacentElement('beforeend', el);
			const incrementEl = document.getElementById(`incrementButton-${i}-${counter.id}`);
			const decrementEl = document.getElementById(`decrementButton-${i}-${counter.id}`);
			incrementEl.addEventListener('click', () => {
				store.dispatch(increment(counter));
			});
			decrementEl.addEventListener('click', () => {
				store.dispatch(decrement(counter));
			});
		}

		const counterValueEl = document.getElementById(`countArea-${i}-${counter.id}`);
		counterValueEl.innerHTML = counter.value;
	});
};

store.subscribe(render);

render();

addButton.addEventListener('click', () => {
	store.dispatch(
		addCounter({
			defaultValue: Math.floor(Math.random() * 10 + 1),
			increaseBy: Math.floor(Math.random() * 10 + 1),
		})
	);
});
resetButton.addEventListener('click', () => {
	store.dispatch(resetCounters());
});
