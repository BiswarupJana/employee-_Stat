"use client";

import PeoplesGrid from "./peoples-grid";
import classes from "./peoples.module.css";
import {
  getPeoples,
  getSearch,
  getPrevious,
  getNext,
} from "@/lib/apiCollection";
import { debounce } from "lodash";
import { useState, useEffect } from "react";

export default function Peoples() {
  const [peoples, setPeoples] = useState(null);
  const [searchClick, setSearchClick] = useState(false);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    const data = await getPeoples();
    setPeoples(data);
  };

  const previousClick = async () => {
    setPeoples(null);
    const data = await getPrevious({ url: peoples.previous });
    setPeoples(data);
  };

  const nextClick = async () => {
    setPeoples(null);
    const data = await getNext({ url: peoples.next });
    setPeoples(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const debouncedHandleSearch = debounce(async (input) => {
    if (input) {
      const data = await getSearch({ name: 'people', value: input });
      setPeoples(data);
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
      <div className={classes.btnDiv}>
        <button
          onClick={previousClick}
          disabled={!peoples?.previous}
          className={peoples?.previous ? "" : classes.btnDisabled}
        >
          {`< Previous`}
        </button>
        <button
          onClick={nextClick}
          disabled={!peoples?.next}
          className={peoples?.next ? "" : classes.btnDisabled}
        >
          {` Next >`}
        </button>
      </div>

      {peoples ? (
        <PeoplesGrid peoples={peoples.results} />
      ) : (
        <p className={classes.loading}>Loading data...</p>
      )}
    </div>
  );
}
