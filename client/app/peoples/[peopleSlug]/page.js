import Image from "next/image"
import Link from "next/link";
import { getEmployee } from "@/lib/apiCollection";
import classes from './page.module.css';
import { notFound } from "next/navigation";

export default async function PeopleDetailsPage({params}){
    const people = await getEmployee(params.peopleSlug);
    if(!people){
        notFound();
    }

    return (
        <>
        <header className={classes.header}>
            
            <div className={classes.headerText}>
                <h1>{people.name}</h1>
                <p className={classes.creator}>
                         <a href={`mailto:${people.creator_email}`}>{people.creator}</a>
                </p>
                <p className={classes.summary}>{`Gender: ${people.gender}`}</p>
                <p className={classes.summary}>{`DOB: ${people.birth_year}`}</p>
                <p className={classes.summary}>{`Height: ${people.height}`}</p>
                <p className={classes.summary}>{`Mass: ${people.mass}`}</p>
                <p className={classes.summary}>{`Hair Color: ${people.hair_color}`}</p>
                <p className={classes.summary}>{`Skin Color: ${people.skin_color}`}</p>
                <p className={classes.summary}>{`Eye Color: ${people.eye_color}`}</p>
                
            </div>
        </header>
        <main>
            <div className={classes.instructions} >
            <h2> Films:</h2>
                {people.films?.map((item,index)=>
                <div key={index}>
                    <Link href='' >{item}</Link>
                </div>
                )}
            </div>
           
            <div className={classes.instructions} >
                <h2>Vehicles</h2>
                {people.vehicles?.map((item,index)=>
                <div key={index}>
                    <Link href='' >{item}</Link>
                </div>
                )}
            </div>
            <div className={classes.instructions} >
               <h2>Starships:</h2>
               {people.starships?.map((item,index)=>
               <div key={index}>
                   <Link href='' >{item}</Link>
               </div>
               )}
           </div>
           
            
        </main>
        
        </>
    )
}