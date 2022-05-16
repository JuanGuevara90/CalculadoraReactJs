import React from "react";
import { useHenry } from "../hook/useHenry";
import { arrayDigits, arrayOperators } from "../utils/Values";

const Calculator = () => {
	const [display, handleClickDigits, handleClickOperators] = useHenry("");

	return (
		<div>
			<h1>Titulo</h1>
			<span>{display}</span>
			<div>
				{arrayOperators.map((value, i) => (
					<button onClick={handleClickOperators} key={`operator_${i}`}>
						{value}
					</button>
				))}
			</div>
			<div>
				{arrayDigits.map((digist, i) => (
					<div key={`row_${i}`}>
						{digist.map((digit, item) => (
							<button onClick={handleClickDigits} key={`operator_${item}`}>
								{digit}
							</button>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calculator;
