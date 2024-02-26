import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
// import Movies from "@/components/employees/movies";
import Employees from "@/components/employees/employees";

export default function EmployeePage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
        ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON {" "}
          <span className={classes.highlight}>DISNEY+</span>
        </h1>
        <p>
        ~Browse Films~
        </p>
        
      </header>
      <main className={classes.main}>
        
        <Employees />
      </main>
    </>
  );
}