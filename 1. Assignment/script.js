const countArea = document.querySelector('#countArea');
const incrementButton = document.querySelector('#incrementButton');
const decrementButton = document.querySelector('#decrementButton');
const resetButton = document.querySelector('#resetButton');
const addButton = document.querySelector('#addButton');

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const increment = (value) => {
	return { type: 'INCREMENT', payload: value };
};
const decrement = (value) => {
	return { type: 'DECREMENT', payload: value };
};

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return { ...state, value: state.value + action.payload };
	} else if (action.type === 'DECREMENT') {
		return { ...state, value: state.value - action.payload };
	} else {
		return state;
	}
};

const store = Redux.createStore(counterReducer);

const render = () => {
	const state = store.getState();
	countArea.innerText = state.value.toString();
};

store.subscribe(render);

incrementButton.addEventListener('click', () => {
	store.dispatch(increment(5));
});
decrementButton.addEventListener('click', () => {
	store.dispatch(decrement(4));
});
