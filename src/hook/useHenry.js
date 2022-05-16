import { useState } from "react";

export const useHenry = (valInit) => {
	const [display, setDisplay] = useState(valInit);

	const handleClickDigits = (e) => {
		const value = e.target.outerText;
		console.log(value);
		if (value === "=") {
			console.log("aqui evaluo");
			setDisplay(eval(display));
			return;
		}
		setDisplay(display + value);
	};

	const handleClickOperators = (e) => {
		const value = e.target.outerText;
		if (value === "DEL") {
			setDisplay("");
			return;
		}
		setDisplay(display + value);
	};

	return [display, handleClickDigits, handleClickOperators];
};
