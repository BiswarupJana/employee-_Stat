import Link from 'next/link';
import Image from 'next/image';

import classes from './statCart.module.css';

export default function StatCart({ statistics, department }) {
  
  const { avgSalary, minSalary, maxSalary } = statistics;

 
  const formattedAvgSalary = avgSalary.toFixed(2);
  const formattedMinSalary = minSalary.toFixed(2);
  const formattedMaxSalary = maxSalary.toFixed(2);

  return (
    <article className={classes.meal}>
      <header>
        {department && <p className={classes.summary}>{department}</p>}
        <div className={classes.headerText}>
          
          <h3>Average Salary: {formattedAvgSalary}</h3>
          <h3>Min-Salary: {formattedMinSalary}</h3>
          <h3>Max-Salary: {formattedMaxSalary}</h3>
        </div>
      </header>
      
    </article>
  );
}
