'use server';
import { redirect } from "next/navigation";
import { addNewEmployee } from "./apiCollection";
export async function addEmployee(formData){
  
    
    const employee ={
      name: formData.get('name'),
      email: formData.get('email'),
      salary: formData.get('salary'),
      currency: formData.get('currency'),
      department: formData.get('department'),
      sub_department: formData.get('sub_department'),
      on_contract: formData.get('on_contract')
    }
    await addNewEmployee(employee);
    redirect('/employee');
  }