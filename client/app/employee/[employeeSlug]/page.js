import Image from "next/image"
import Link from "next/link";
import { getEmployee } from "@/lib/apiCollection";
import classes from './page.module.css';
import { notFound } from "next/navigation";
import img from '@/assets/thumbnail4.jpg';
export default async function EmployeeDetailsPage({params}){
    const employee = await getEmployee(params.employeeSlug);
    
    if(!employee) { 
        notFound();
    }

    return (
        <>
        <header className={classes.header}>
        <div className={classes.image}>
                <Image src={img} alt="" sizes="(max-width: 40px) 10vw, (max-width: 768px) 80vw, 1200px" fill />
            </div>
            <div className={classes.headerText}>
                <h1>{employee.name}</h1>
                <p className={classes.creator}>
                         Release Date:{' '}{} 
                </p>
                <p className={classes.summary}>{`Director: `}</p>
                <p className={classes.summary}>{`Producer: `}</p>
                <p className={classes.summary}>{`Episode: `}</p>
                
                <p className={classes.instructions} >{`Opening Crawl: `}</p>
                
            </div>
        </header>
        {/* <main>
            <div className={classes.instructions} >
            <h2> Characters:</h2>
                {movie.characters?.map((item,index)=>
                <div key={index}>
                    <Link href='/' >{item}</Link>
                </div>
                )}
            </div>
            <div className={classes.instructions} >
            <h2> Planets:</h2>
                {movie.planets?.map((item,index)=>
                <div key={index}>
                    <Link href='/' >{item}</Link>
                </div>
                )}
            </div>
           
            <div className={classes.instructions} >
                <h2>Vehicles</h2>
                {movie.vehicles?.map((item,index)=>
                <div key={index}>
                    <Link href='/' >{item}</Link>
                </div>
                )}
            </div>
            <div className={classes.instructions} >
               <h2>Starships:</h2>
               {movie.starships?.map((item,index)=>
               <div key={index}>
                   <Link href='/' >{item}</Link>
               </div>
               )}
           </div>
            <div className={classes.instructions} >
               <h2>Species:</h2>
               {movie.species?.map((item,index)=>
               <div key={index}>
                   <Link href='/' >{item}</Link>
               </div>
               )}
           </div>
           
            
        </main>
         */}
        </>
    )
}