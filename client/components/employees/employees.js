"use client";
import EmployeesGrid from './employees-grid';
import classes from './employees.module.css';
import { getEmployees } from '@/lib/apiCollection';
import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

export default function Employees() {
  const [employees, setEmployees] = useState(null);
  const [searchClick, setSearchClick] = useState(false);
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  const fetchData = async () => {
    const data = await getEmployees();
    setEmployees(data.data);
    setFilteredData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const debouncedHandleSearch = debounce((input) => {
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filteredEmployees);
  }, 500);

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      debouncedHandleSearch(value);
    } else {
      setFilteredData(employees);
    }
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

      {filteredData ? (
        <EmployeesGrid employees={filteredData} />
      ) : (
        <p className={classes.loading}>Loading data...</p>
      )}
    </div>
  );
}
