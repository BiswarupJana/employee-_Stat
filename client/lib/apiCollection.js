import axios from "axios";
import xss from 'xss';

const baseApi = "https://swapi.dev/api";

const url='http://localhost:5000/api/v1';





export async function getEmployees() {
  try {
    const response = await axios.get(`${url}/dataset`);
    
    if (response.status === 200) {
      return response.data.data;
      
      
    } else {
      throw new Error("Failed to fetch employee data");
    }
  } catch (error) {
    console.error("Error fetching employee data:", error);
    throw error; 
  }
}

export async function getEmployee(slug) {
  try {
    const response = await axios.get(`${url}/dataset/getOne/${slug}`);
    
    
    if (response.status === 200) {
      return response.data.data.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}

export async function addNewEmployee(employee) {
  const bodydata ={
    "name": employee.name,
    "email": employee.email,
    "salary": employee.salary,
    "currency": employee.currency,
    "department": employee.department,
    "sub_department": employee.sub_department,
    "on_contract": employee.on_contract
  }
  try {
    const response = await axios.post(`${url}/dataset`,bodydata);
    
  } catch (error) {
    console.error("Error fetching employee data:...", error.message);
    throw error; 
  }
  
 
  
}

export async function getAllStat(slug) {
  try {
    const response = await axios.get(`${url}/dataset/allSummery`);
    
    
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}
export async function getOnContractStat(slug) {
  try {
    const response = await axios.get(`${url}/dataset/onContractSummary`);
    
    
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}
export async function getDepartmentStat(value) {

  try {
    const response = await axios.get(`${url}/dataset/summery/${value}`);
    
    
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}



