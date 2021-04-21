import { useState } from 'react';

const useInputState = (initialState = '') => {
	const [
		input,
		setInputState
	] = useState(initialState);
	const reset = () => {
		setInputState('');
	};
	const setInput = e => {
		setInputState(e.target.value);
	};
	return [
		input,
		setInput,
		reset,
		setInputState
	];
};

export default useInputState;
