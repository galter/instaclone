import React from 'react'
import { toast } from 'react-toastify'
import { FiSearch } from 'react-icons/fi'

import useInput from '../../hooks/useInput'

import { InputWrapper, SearchWrapper } from './styles'

const Search = () => {
  const searchterm = useInput('')

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      searchterm.setValue('')
      return toast.success("Sorry, the search feature isn't finished yet")
    }
  }

  return (
    <SearchWrapper>
      <FiSearch
        style={{ marginLeft: '1rem', position: 'absolute' }}
        color="#8e8e8e"
        size="1.3em"
      />

      <InputWrapper
        type="text"
        value={searchterm.value}
        onKeyDown={handleSearch}
        onChange={searchterm.onChange}
        placeholder="Search"
      />
    </SearchWrapper>
  )
}

export default Search
