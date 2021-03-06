/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import Header from './Header';
import Button from '../Button';

describe('<Header />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = sinon.spy();
    wrapper = shallow(<Header showSideNav={spy} />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Header showSideNav={spy} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call click handler on click', () => {
    wrapper.find(Button).simulate('click');
    expect(spy.calledOnce).toBe(true);
  });
});
