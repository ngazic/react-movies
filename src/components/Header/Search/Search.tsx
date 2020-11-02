import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import './Search.scss'

const Search: React.FC = (props?) => {
  const dispatch = useDispatch();

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    console.log('CHANGE')
  }


  return (
    <div className="search">
      <input type="text" name="search" placeholder="search" onChange={changeHandler} />
    </div>
  )
}

export default Search;