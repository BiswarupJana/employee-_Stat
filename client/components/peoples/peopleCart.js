import Link from 'next/link';
import Image from 'next/image';

import classes from './peopleCart.module.css';



export default function PeopleCart({name,birth_year, gender, films,vehicles,starships,url }) {
  const id = url.split('/').filter(Boolean).pop();
  
  return (
    <article className={classes.meal}>
      <header>
       
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>Gender: {gender}</p>
          <p>DOB: {birth_year}</p>
          <p>Films:{films.length}</p>
          <p>Vehicles:{vehicles.length}</p>
          <p>Starships:{starships.length}</p>
        </div>
      </header>
      <div className={classes.content}>
        {/* <p className={classes.summary}>{summary}</p> */}
        <div className={classes.actions}>
          <Link href={`/peoples/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}