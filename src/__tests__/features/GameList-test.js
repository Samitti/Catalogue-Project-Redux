import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Store from '../../redux/Store';

import App from '../../App';

afterEach(() => {
  cleanup();
});

test('has an initial text `Loading dogs for page 1` when loading the dogs', async () => {
  const history = createMemoryHistory();
  history.push('/game/1');

  const { getByText } = render(
    <Provider store={Store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
  );

  expect(getByText('HOME')).toBeTruthy();
});
