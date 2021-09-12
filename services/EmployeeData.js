// import LocalStorageApp from '../components/LocalStorageApp';
// import AsyncStorage from '@react-native-community/async-storage';
// import { useEffect, useState } from 'react';

let employees = [
    {id:"1",name:"emp1",email:"emp1@gmail.com", address:"add1", dateOfBirth:"01/01/1001", dateOfJoining:"01/02/1990", education:"DD1",type:"engineer",role:"normal" ,password:"", dateOfEntry:"02/02/2020",dateOfModify:"02/03/2020" },
    {id:"2",name:"emp2",email:"emp2@gmail.com", address:"add2", dateOfBirth:"01/01/1002", dateOfJoining:"01/02/1992", education:"DD2",type:"suppport",role:"admin" ,password:"", dateOfEntry:"02/02/2021",dateOfModify:"02/03/2021" },
    {id:"3",name:"emp3",email:"emp3@gmail.com", address:"add3", dateOfBirth:"01/01/1003", dateOfJoining:"01/02/1993", education:"DD3",type:"engineer",role:"normal" ,password:"", dateOfEntry:"02/02/2022",dateOfModify:"02/03/2022" },
];

// (engineer,support,contract),
// role(admin,normal),

// let localStorage = () => {
// 	AsyncStorage.setItem('customerData',JSON.stringify(customers)).catch(err=>console.log('errrrrr',err));
// }
// AsyncStorage.getItem('customerData').then(value=>{if(value === null){
// 	console.log(';;;;;;;;;;');
// 	localStorage();
// }})

// export const getCustomers =  async function(val){
// 	try {
// 		const data = await AsyncStorage.getItem('customerData');
// 		if(data !== null){
// 			return JSON.parse(data);
// 		}
// 	} catch (error) {
// 		console.log('errror>>>>>>>>',error);
// 		return []
// 	}
// }

// export const getCustomerById = async function(id){	
// 	let customer = {}
// 	customers = await getCustomers();
// 	for (var i = 0; i < customers.length; i++) {
// 		if(id == customers[i].id){
// 			return customers[i];
// 		}
// 	}
// 	return customer;
// }

// export const addCustomer = async function(customer){
// 	console.log("dddd",customers)	
// 	customers = await getCustomers();
// 	customer.id = Date.now()+'';
// 	customers.push(customer);
// 	// saveLocalStorage();
// 	localStorage();
// }

// export const updateCustomer = async function(customer){
// 	console.log('this is updateCusmter>>>>>>>');
// 	customers = await getCustomers()
// 	console.log(':::::::::::::::',customers);
// 	for (var i = 0; i < customers.length; i++) {
// 		if(customer.id == customers[i].id){
// 			customers[i] = customer;
// 			break;
// 		}
// 	}
// 	// saveLocalStorage();
// 	localStorage();
// }



// export var deleteCustomer = async({id}) =>{
//     console.log("ppppppppp",id)
// 	customers = await getCustomers()
//     console.log("rrrr",customers)

//     customers = customers.filter((item)=>{return item.id!==id});
    
// 	localStorage();
//   }

export const getEmployees = () => {
    return employees;
}

export const getEmployeeById = (id) => {
    let employee = {}
	for (var i = 0; i < employees.length; i++) {
		if(id == employees[i].id){
			return employees[i];
		}
	}
	return employee;
}

export var addEmployee = (employee)=>{
    employee.id = Date.now()+'r';
    employees.push(employee);
}

export const updateEmployee = (data) => {
    for (let i = 0; i < employees.length; i++) {
        	if(data.id == employees[i].id){
        		employees[i] = data;
        		break;
        	}
        }
}

export const deleteEmployee = (id) => {
    employees = employees.filter((item)=>{return item.id!==id});
}

export const getEmployeeBySearch = (field,text) => {
	text = text.toLowerCase();
	var tempEmployee = []
	for (var i = 0; i < employees.length; i++){
		if(employees[i][field].toLowerCase().startsWith(text)){
			tempEmployee.push(employees[i]);
		}
	}
	return tempEmployee;
}

