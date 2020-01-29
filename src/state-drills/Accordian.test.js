import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Accordian from './Accordian';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Accordian Component`, () => {
  // array of objects, each with a name and content
  const sectionsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];
  
  it('renders the first tab by default', () => {
    const tree = renderer.create(<Accordian tabs={sectionsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Accordian tabs={sectionsProp} />)
    console.log('>>> WRAPPER <<<')
    console.log(wrapper.debug())
    console.log('>>> FIND(BUTTON) <<<')
    console.log(wrapper.find('button').at(1).debug())
    wrapper.find('button').at(1).simulate('click')
    console.log('>>> WRAPPER <<<')
    console.log(wrapper.debug())
    console.log('>>> FIND(BUTTON) <<<')
    console.log(wrapper.find('button').at(1).debug())
    
  })

it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Accordian />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders the first tab by default', () => {
  const wrapper = shallow(<Accordian tabs={sectionsProp} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
})