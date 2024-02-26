
import classes from './peoples-grid.module.css'
import PeopleCart from './peopleCart'
export default function PeoplesGrid({peoples}){
    return <ul className={classes.meals}>
        {peoples?.map((people,index) => <li key={index}><PeopleCart {...people}/></li>)}
    </ul>
}