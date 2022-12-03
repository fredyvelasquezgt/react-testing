import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is ok', () => {
  test('should render the app component without crashing', () => {
    render(<App/>)
    screen.debug()
  })
  

  test('should select the children that is being passed to the CustomInput component ', () => {
    render(<App/>);
    screen.getByText('Input:') // da error si cambio lo que esta aca
  })
  

})

