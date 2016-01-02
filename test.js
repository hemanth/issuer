import test from 'ava';
import fn from './';

test('title', t => {
	fn('node').then(data => {
		t.is(typeof data, 'object');
		t.end();
	})
});
