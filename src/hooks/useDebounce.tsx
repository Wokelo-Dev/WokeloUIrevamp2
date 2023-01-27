import { useEffect, useState } from 'react';

/**
 * This React hook helps to limit that the component is re-rendered too many times.
 *
 * @param value is the value to be debounced
 * @param delay is the delay between calls
 * @returns the debounced value
 */
function useDebounce(value: string, delay: number = 1000) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}

export default useDebounce;
