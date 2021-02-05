import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import App from '../../App';
import Store from '../../redux/Store';

describe('Navbar', () => {
  afterEach(() => {
    cleanup();
  });
  test('has the app header, home Link', async () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByText } = render(
      <Provider store={Store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(getByText('FREE-TO-PLAY GAMES LIST')).toBeInTheDocument();
    expect(getByText('HOME')).toBeInTheDocument();
  });
});
