import React from 'react';
import { render, screen } from '@testing-library/react';

import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Home';



const Wrapper = ({ children }) => (
  <Router>
    {children}
  </Router>
);

 
describe('<Home />', () => {
  
  test('Renderiza la página de entrada', () => {
  render(<Home />, {wrapper: Wrapper});
    const linkElement = screen.getByText(/GameStack/i);
      expect(linkElement).toBeInTheDocument();
  });

  test('Se renderizan correctamente tres elementos SVG con clase "starOne, starTwo y starThree"', () => {
    const {container} = render(<Home />, {wrapper: Wrapper});
    
    expect(container.firstChild.firstChild.childNodes[0].firstChild).toHaveClass('starOne')
    expect(container.firstChild.firstChild.childNodes[1].firstChild).toHaveClass('starTwo')
    expect(container.firstChild.firstChild.childNodes[2].firstChild).toHaveClass('starThree')
  });


})



/* describe("<AddVideogame />", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<AddVideogames />).get(0))
  });

  afterEach(() => {
      jest.clearAllMocks();
  });
      describe("Title input", () => {
        it("Should capture title correctly onChange", () => {
            const title = wrapper.find("input").at(0);
            title.instance().value = "Test";
            title.simulate("change");
            expect(setState).toHaveBeenCalledWith("Test");
        });
    });

    describe("Content input", () => {
        it("Should capture content correctly onChange", () => {
            const content = wrapper.find("input").at(1);
            content.instance().value = "Testing";
            content.simulate("change");
            expect(setState).toHaveBeenCalledWith("Testing");
        });
    });
  }); */