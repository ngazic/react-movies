import React from "react";
import List from "./List";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";

describe('src/Components/Containers/List/List.tsx', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ searched: ['ONE', 'TWO', 'THREE'] });
  const renderWithStore = (component: React.ReactElement) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>)
    };
  };

  // it('Should render "List" component', () => {
  // match snapshot
  // });

  it('Should render searched list if it is not empty', () => {
    const { getAllByRole } = renderWithStore(<List />);
    const state = store.getState(state => state);

    expect(state.searched.length).toBe(getAllByRole('heading').length);
  });

  it('Should render default list if searched list is empty', () => {
    const { getAllByRole } = renderWithStore(<List />);
    const state = store.getState(state => state);

    expect(state.default.length).toBe(getAllByRole('heading').length);

  });

});