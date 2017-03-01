import React from 'react';
import {shallow} from 'enzyme';
import Hello from '../src/components/Hello'

test('first component renders Hello', () => {
  const renderer = shallow(
    <Hello />
  );
  expect(renderer.text()).toEqual('Hello World!');
});
