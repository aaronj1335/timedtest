import { Router } from 'preact-router';
import { html } from 'htm/preact';
import Nav from './nav';
import Home from '../routes/home';
import Store from '../routes/store';

export default () => html`<div>
		<${Router}>
			<${Home} path="/" />
			<${Store} path="/store" />
		</${Router}>
		<${Nav} />
	</div>`;