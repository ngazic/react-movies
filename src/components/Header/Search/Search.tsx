import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import './Search.scss'
import { getSearchItems } from '../../../store/actions/searchActions';

const Search: React.FC = (props?) => {
  const dispatch = useDispatch();

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    console.log('CHANGE')
    console.log(e.currentTarget.value)
    dispatch(getSearchItems(e.currentTarget.value));
  }


  return (
    <div className="search">
      <input type="text" name="search" placeholder="search" onChange={changeHandler} />
    </div>
  )
}

export default Search;