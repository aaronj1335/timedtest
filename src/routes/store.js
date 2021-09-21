import { html } from 'htm/preact';
import {useEffect, useState} from "preact/hooks";

export default () => {
	const [time, setTime] = useState(new Date());
	const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	return html`<div>
    <h1>Welcome to the store</h1>

		<div>Current time: ${time.toLocaleString()}</div>

		<p>
			<button onClick=${() => setCount(count + 1)}>Click me</button>
			<br/>
			Clicked ${count} times.
		</p>
	</div>`;
}