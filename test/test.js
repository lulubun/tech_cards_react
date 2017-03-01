const chai = require('chai');
const TestUtils = require('react-addons-test-utils')
const should = chai.should();
const react = require ('react')
import Hello from '../src/components/Hello'

describe('first component', function() {
    it('Renders Hello',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Hello/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('hello');
    });
});
