
import classes from './employees-grid.module.css'
import EmployeeCart from './employeeCart'
export default function EmployeesGrid({employees}){
    return <ul className={classes.meals}>
        {employees?.map((employee,index) => <li key={index}><EmployeeCart {...employee}/></li>)}
    </ul>
}