import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Peoples from "@/components/peoples/peoples";

export default function PeoplesPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
        ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON {" "}
          <span className={classes.highlight}>DISNEY+</span>
        </h1>
        <p>
        ~Check Peoples~
        </p>
        
      </header>
      <main className={classes.main}>
        {/* <Suspense
          fallback={<p className={classes.loading}>Fetching Data...</p>}
        >
          
        </Suspense> */}
        <Peoples />
      </main>
    </>
  );
}
