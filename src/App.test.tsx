import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is ok', () => {
  test('should render the app component without crashing', () => {
    render(<App/>)
    screen.debug()
  })
  
})

