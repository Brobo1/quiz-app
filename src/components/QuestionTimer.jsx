import {useEffect, useState} from "react";

export function QuestionTimer({
	timeout,
	onTimeout,
	mode,
}) {
	const [remainingTime, setRemainingTime] = useState(timeout);
	
	useEffect(() => {
		console.log("setting timeout")
		const timer = setTimeout(onTimeout, timeout);
		
		return () => {
			clearTimeout(timer)
		};
		
	}, []);
	
	useEffect(() => {
		console.log("setting interval")
		const interval = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
		}, 10);
		
		return () => {
			clearInterval(interval);
		};
		
	}, []);
	
	return (
		<progress
			id={"question-time"}
			max={timeout}
			value={remainingTime}
			className={mode}
		/>
	)
}