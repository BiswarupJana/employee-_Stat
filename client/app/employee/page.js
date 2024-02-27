import classes from "./page.module.css";
// import Movies from "@/components/employees/movies";
import Employees from "@/components/employees/employees";
import Link from "next/link";
import { Suspense } from "react";

export default function EmployeePage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          ALL {" "}
          <span className={classes.highlight}>Employees</span>
        </h1>
        <p>~Browse peoples~</p>
        <p className={classes.cta}>
          <Link href="/employee/addEmployee">Add Employee</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Employees />
      </main>
    </>
  );
}
