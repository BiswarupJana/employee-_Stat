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
            <h1>Your eyes can deceive you. don’t trust them </h1>
            <p>
              The galaxy far, far away is filled with words of wisdom and wit
              from Jedi masters, rakish scoundrels, cosmic royalty, rebel
              leaders, dorky droids and more.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="https://www.starwars.com/community">Join the Community</Link>
            <Link href="/movies">Explore Movies</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>The Star Wars Numbers</h2>
          <p>
            The first Star Wars trilogy was released in the late 1970s and early
            1980s. It was followed by the second trilogy—known as the prequel
            trilogy—from 1999 to 2005. Thereafter, another sequel trilogy—this
            one to the original Star Wars trilogy—opened in theaters in 2015.
            The final Star Wars film relating to the Skywalker saga was released
            in 2019. In addition to the nine films, three other Star Wars
            movies—distantly related to the main storyline—were made to keep
            fans sated. According to estimates, the 12 films have garnered more
            than $10 billion at the box office. 2 Remember, that figure only
            includes box office receipts and does not take into account the
            billions of dollars that the franchise has made off its franchise
            deals, T.V. shows, and merchandising, with more content to come.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Is Star Wars Popular?</h2>
          <p>
            The numbers for Star Wars testify to its astounding success. Love it
            or hate it, the Star Wars brand is one of the most successful
            around, right up there with the ones for most well-known
            corporations. While it is difficult to quantify and delineate the
            exact reasons for its enduring appeal, there are some common
            elements that it shares with all successful businesses.
          </p>
        </section>
        <section className={classes.section}>
          <h2>A Story With Many Elements</h2>
          <p>
            Just like any other great film, much of the success of the Star Wars
            franchise is due to its story. On the surface, the Star Wars story
            premise is that of the classic conflict of good versus evil. Within
            this core shell of a story; however, there are several interwoven
            themes and subplots.
          </p>
        </section>
      </main>
    </>
  );
}
