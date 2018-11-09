import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const state = {
  turnData: {
    books: ['The Shining', 'It', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet'],
    author: {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
          'The Adventures of Huckleberry Finn',
          'Life on the Mississippi',
          'Roughing It'
      ]
    },
  },
  highlight: 'none'
};


describe("App Author Quiz", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...state} onAnswerSelected={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => wrapper = mount(<App {...state} onAnswerSelected={() => {}}/>));

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
    });
  });

  describe("When the wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <App {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={() => {}} />);
    });

    it("should have a red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("red");
    });
  });

  describe("When the correct answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <App {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={() => {}} />);
    });

    it("should have a green background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("green");
    });
  });

  describe("When the first answer has been selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
    beforeAll(() => {
      wrapper = mount(
        <App {...state} onAnswerSelected={handleAnswerSelected} />);
      wrapper.find('.book').first().simulate('click');
    });

    it("onAnswerSelected sould be called", () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should receive The Shining", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
    });
  });
});
