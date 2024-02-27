import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Employee Statistics </h1>
           <p>All employee & their salary statistics</p>
          </div>
          <div className={classes.cta}>
            <Link href="/stats">Check Statistic</Link>
            <Link href="/employee">Explore Team</Link>
          </div>
        </div>
      </header>
      
    </>
  );
}
