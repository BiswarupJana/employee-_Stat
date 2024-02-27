import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Statistic from "@/components/statistic/statistic";

export default function StatPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
        ALL  {" "}
          <span className={classes.highlight}>Statistic</span>
        </h1>
        <p>
        ~Check Stat~
        </p>
        
      </header>
      <main className={classes.main}>
        {/* <Suspense
          fallback={<p className={classes.loading}>Fetching Data...</p>}
        >
          
        </Suspense> */}
        <Statistic />
      </main>
    </>
  );
}
