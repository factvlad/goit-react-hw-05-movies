import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./Searchbar.module.scss"

const Searchbar = ({ submitValue }) => {
  const [search, setSearch] = useState('');

  const searchInput = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const submitSearch = e => {
    e.preventDefault();
    if (search === '') {
      reset();
      toast.warn('🦄 Enter movie name', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    }
    submitValue(search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <div className={ s.searchBar }>
      <h1 >SEARCH MOVIES</h1>
      <form onSubmit={ submitSearch }
        className={ s.searchForm }>
        <label className={ s.searchFormInput }>
          <input
            className={ s.searchFormInput }
            type="text"
            value={ search }
            name="search"
            onChange={ searchInput }
          />
        </label>
        <button type="submit"
          className={ s.searchFormButton }>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

Searchbar.propTypes = {
  submitValue: PropTypes.func.isRequired
}

export default Searchbar;
