import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getSearchItems } from '../../../store/actions';
import './Search.scss'

interface SearchProps {
  category: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  let timer: NodeJS.Timeout;
// const [timer, setTimer] = useState();
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    console.log('change handler')
    const searchTerm = e.currentTarget.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
        dispatch(getSearchItems(searchTerm, props.category))
    }, 1000)
  }


  return (
    <div className="search">
      <input type="text" name="search" placeholder="search" onChange={changeHandler} />
    </div>
  )
}

export default Search;