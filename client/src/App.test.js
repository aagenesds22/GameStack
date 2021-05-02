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

