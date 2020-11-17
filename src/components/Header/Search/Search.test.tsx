import React from "react";
import Search from "./Search";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import { fireEvent, render } from "@testing-library/react";

describe('src/Components/Header/Search/Search.tsx', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore();
  const changeProp = jest.fn();
  const renderWithStore = (component: React.ReactElement) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>)
    };
  };

  // it('Should render "Search" component', () => {
  // match snapshot
  // });

  it('has "search" placeholder text', () => {
    const { getByPlaceholderText } = renderWithStore(<Search change={changeProp} />);
    expect(getByPlaceholderText('search')).toBeTruthy();
  });

  it('calls binded property function on inputed value in search box', () => {
    const { getByRole } = renderWithStore(<Search change={changeProp} />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'aaa' } });
    expect(changeProp).toBeCalledTimes(1);
  });
});