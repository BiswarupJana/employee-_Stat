'use client';
import StatGrid from "./stat-grid";
import classes from "./statistic.module.css";
import {
  getAllStat,
  getDepartmentStat,
  getOnContractStat
} from "@/lib/apiCollection";
import { debounce } from "lodash";
import { useState, useEffect } from "react";

export default function Statistic() {
  const [peoples, setPeoples] = useState(null);
  const [stat, setStat] = useState(null);
  const [clickedButton, setClickedButton] = useState('overall'); // Track clicked button

  const fetchData = async () => {
    const data = await getAllStat();
    setStat(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onContractHandler = async () => {
    const data = await getOnContractStat();
    setStat(data);
    setClickedButton('onContract'); // Mark button as clicked
  };

  const handleDepartmentChange = async (event) => {
    const value = event.target.value;
    const data = await getDepartmentStat(value);
    setStat(data);
    setClickedButton('department'); // Mark selection as clicked
  };

  const overAllHandler = () => {
    fetchData();
    setClickedButton('overall'); // Mark button as clicked
  };

  return (
    <div>
      <div className={classes.btnDiv}>
        <button
          className={clickedButton === 'overall' ? classes.clicked : ''}
          onClick={overAllHandler}
        >
          OverAll
        </button>
        <button
          className={clickedButton === 'onContract' ? classes.clicked : ''}
          onClick={onContractHandler}
        >
          On Contract
        </button>
        <select
          name="department"
          id="department"
          onChange={handleDepartmentChange}
          className={clickedButton === 'department' ? classes.clicked : ''}
        >
          <option value="">Select Department</option>
          <option value="Engineering">Engineering</option>
          <option value="Banking">Banking</option>
          <option value="Operations">Operations</option>
          <option value="Administration">Administration</option>
        </select>
      </div>

      {stat ? (
        <StatGrid stats={stat} />
      ) : (
        <p className={classes.loading}>Loading data...</p>
      )}
    </div>
  );
}
