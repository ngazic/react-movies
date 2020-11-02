import React from "react";
import Search from "./Search";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import { fireEvent, render } from "@testing-library/react";

describe('src/Components/Header/Search/Search.tsx', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore();
  const spyDispatch = jest.spyOn(store, 'dispatch');
  const renderWithStore = (component: React.ReactElement) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>)
    };
  };

  // it('Should render "Search" component', () => {
    // match snapshot
  // });

  it('has "search" placeholder text', () => {
    const { getByPlaceholderText } = renderWithStore(<Search />);
    expect(getByPlaceholderText('search')).toBeTruthy();
  });

  it('dispatch "searchAction" on input changed', () => {
    const { getByRole } = renderWithStore(<Search />);
    fireEvent.change(getByRole('textbox'));
    expect(spyDispatch).toBeCalled();
  });
});