import React from 'react';
import { useState } from 'react';

export default function Search({onChangeSearch}) {
    const [input, setInput] = useState();
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleSearch = (e) => { 
        e.preventDefault();
        onChangeSearch(input);
    }
  return (
    <form className="row">
      <div className="col-lg-12">
        <div className="panel">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={handleInputChange}
                />
                <button
                type='submit'
                className="btn btn-effect-ripple btn-primary"
                onClick={handleSearch}
                >
                <i>Search</i>
              </button>
            </div>
        </div>
      </div>
    </form>
  );
}
