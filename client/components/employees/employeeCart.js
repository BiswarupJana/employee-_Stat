import classes from "./employeeCart.module.css";
import Link from "next/link";

export default function EmployeeCart({
  _id,
  name,
  salary,
  currency,
  department,
  sub_department,
  on_contract,
  // url,
}) {
  // const id = url.split("/").filter(Boolean).pop();

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>Department: {department}</p>
          <p>Sub Department: {sub_department}</p>
          <p>
            Salary:{salary}{' '}{currency}</p>
            
            
        </div>
      </header>
      <div className={classes.content}>
        {/* <p className={classes.summary}>{`Summary`}</p> */}
        <div className={classes.actions}>
          <Link href={`/employee/${_id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
