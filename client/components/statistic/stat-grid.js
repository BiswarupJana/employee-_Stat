
import classes from './stat-grid.module.css'
import StatCart from './statCart'
export default function StatGrid({stats}){
    
    return <ul className={classes.meals}>
        <StatCart {...stats}/>
    </ul>
}