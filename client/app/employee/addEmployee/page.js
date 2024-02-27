// import ImagePicker from '@/components/meals/image-picker';
import classes from "./page.module.css";
import { addEmployee } from '@/lib/actions';
import FormSubmit from "@/components/employees/employee-form-submit";

export default function AddEmployeePage() {
  return (
    <>
      <header className={classes.header} >
        <h1>
          <span className={classes.highlight}>Add New Employee</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={addEmployee}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <div className={classes.row}>
            <p>
              <label htmlFor="title">Salary</label>
              <input type="number" id="salary" min="1" name="salary" required />
            </p>
            <select name="currency" id="currency" required className={classes.currencySelect}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>

            <div className={classes.departmentSelect}>
              <label htmlFor="department">Department</label>
              <select name="department" id="department" required>
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Banking">Banking</option>
                <option value="Operations">Operations</option>
                <option value="Administration">Administration</option>
              </select>
            </div>
          </div>
          <div className={classes.row}>
          <div className={classes.departmentSelect}>
              <label htmlFor="sub_department">Sub Department</label>
              <select name="sub_department" id="sub_department" required>
                <option value="">Select Sub Department</option>
                <option value="Platform">Platform</option>
                <option value="Loan">Loan</option>
                <option value="CustomerOnboarding">CustomerOnboarding</option>
                <option value="Agriculture">Agriculture</option>
              </select>
            </div>
          
          <div className={classes.departmentSelect}>
              <label htmlFor="on_contract">On Contract</label>
              <select name="on_contract" id="on_contract" required>

                <option value="false" >No</option>
                <option value="true">Yes</option>

               
              </select>
            </div>
          
          </div>

          {/* <ImagePicker label='Your image' name="image" /> */}
          <p className={classes.actions}>
            <FormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
