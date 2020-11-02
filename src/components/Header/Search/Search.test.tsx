import React from "react";
import Search from "./Search";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import { fireEvent, render } from "@testing-library/react";


describe('src/Components/Header/Search/Search.tsx', () => {
  const renderWithStore = (component: React.ReactElement) => {
    const mockStore = configureStore([thunk]);
    const store = mockStore();
    return {
      ...render(<Provider store={store}>{component}</Provider>)
    };
  };

  it('Should render "Search" component', () => {
    // match snapshot
  });

  it('has "search" placeholder text', () => {
    const { getByPlaceholderText } = renderWithStore(<Search />);
    expect(getByPlaceholderText('search')).toBeTruthy();
  });
  
  it('dispatch "searchAction" on input changed', async () => {
    const { getByRole } = render(<Search />, {
      ini
    })
    await fireEvent.change(getByRole('input');
    expect(store.dispatch()).toBeCalled();
  });
});