import { html } from 'htm/preact';
import Nav from '../src/components/nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
	test('text', () => {
		const context = shallow(html`<${Nav} />`);
		expect(context.find('div').text()).toBe('nav');
	});
});
