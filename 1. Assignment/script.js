const countArea = document.querySelector('#countArea');
const incrementButton = document.querySelector('#incrementButton');
const decrementButton = document.querySelector('#decrementButton');

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return { ...state, value: state.value + action.payload };
	}
	if (action.type === 'DECREMENT') {
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
	store.dispatch({ type: 'INCREMENT', payload: 5 });
});
decrementButton.addEventListener('click', () => {
	store.dispatch({ type: 'DECREMENT', payload: 1 });
});
