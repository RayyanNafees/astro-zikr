export default (start: number, stop: number, inclusive: bool=false) =>
	Array.from({ length: Math.abs(stop - start) + +inclusive }, (_, n) => n);
