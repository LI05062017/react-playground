import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ setMenuItemsToMild, searchTerm, resetMenuList, handleSearchTermChange, updateMenuList }) => {
  return (
    <div>
      <input onChange={handleSearchTermChange} value={searchTerm} />
      <button tpye='button' onClick={updateMenuList}> Search </button>
      <button type='button' onClick={resetMenuList}> RESET </button>
      <button type='button' onClick={setMenuItemsToMild}> Only Mild </button>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setMenuItemsToMild: PropTypes.string.isRequired

}

export default SearchForm
