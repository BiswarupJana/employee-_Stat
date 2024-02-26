"use client";

import EmployeesGrid from './employees-grid';
import classes from './employees.module.css';
import { getEmployees, getSearch, getPrevious, getNext } from '@/lib/apiCollection';
import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

export default function Employees() {
  const [employees, setEmployees] = useState(null);
  const [searchClick, setSearchClick] = useState(false);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    const data = await getEmployees();
    setEmployees(data.data);
    
  };

  // const previousClick = async () => {
  //   const data = await getPrevious({ url: movies.previous });
  //   setEmployees(data);
  // };

  // const nextClick = async () => {
  //   const data = await getNext({ url: movies.next });
  //   setEmployees(data);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const debouncedHandleSearch = debounce(async (input) => {
    if (input) {
      const data = await getSearch({ name: 'films', value: input });
      setEmployees(data);
    } else {
      fetchData();
    }
  }, 500);

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    debouncedHandleSearch(value);
  };

  return (
    <div>
      <div className={classes.searchDiv}>
        {searchClick ? (
          <div className={classes.inputWrapper}>
            <input
              type="search"
              onChange={handleSearch}
              placeholder="Search...."
              className={classes.inputField}
              value={input}
            />
            <span
              onClick={() => {
                setSearchClick(false);
                setInput('');
                fetchData();
              }}
              role="button"
              tabIndex="0"
              className={classes.crossButton}
            >
              ❌
            </span>
          </div>
        ) : (
          <span
            onClick={() => setSearchClick(true)}
            role="button"
            tabIndex="0"
            className={classes.magnifier}
          >
            🔍
          </span>
        )}
      </div>

      {/* <div className={classes.btnDiv}>
        <button onClick={previousClick} disabled={!movies?.previous} className={!movies?.previous && classes.btnDisabled}>
          {'< Previous'}
        </button>
        <button onClick={nextClick} disabled={!movies?.next} className={!movies?.next && classes.btnDisabled}>
          {' Next >'}
        </button>
      </div> */}
      
      {employees ? (
        <EmployeesGrid employees={employees} />
      ) : (
        <p className={classes.loading}>Loading data...</p>
      )}
    </div>
  );
}
