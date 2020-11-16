import React, { FormEvent, useState } from 'react'
import './Search.scss'

interface SearchProps {
  category: string;
  change: (e: FormEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [hasValue, setHasValue] = useState<boolean>(false);
  const changeInput = (e: FormEvent<HTMLInputElement>) => {
    props.change(e);
    if (e.currentTarget.value.trim().length > 0) {
      setHasValue(true);
    }
    else {
      setHasValue(false);
    }
  }

  return (
    <div className="search">
      <input type="text" name="search" placeholder="search" onChange={changeInput} style={hasValue ? { backgroundImage: 'none', paddingLeft: '10px', fontSize: '18px' } : {}} />
    </div>
  )
}

export default Search;