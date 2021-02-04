import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import Store from '../redux/Store';

afterEach(() => {
  cleanup();
});

test('renders the home page with no errors', () => {
  const { getByText } = render(
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );

  expect(getByText(/FREE-TO-PLAY GAMES LIST/i)).toBeInTheDocument();
});
