import { gql, request, GraphQLClient } from 'graphql-request'
import { useToken } from './AsyncStorage'

const endpoint = 'http://localhost:4000/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: useToken(),
    },
})


export const getSalary = async function () {
    const query = gql
        `{
      salaries{
           id,
           employeeId,
           monthYear,
           basic,
           hra,
           lta,
           variable,
           bonus,
           TDS,
           tax,
           total,
           workingDaysInMonth
       
       
         }}
  `
    let response = await graphQLClient.request(query)
    console.log(JSON.stringify(response, undefined, 2))
    return response.salaries;

}

export var getSalaryByEmployeeId = async(employeeId) => {
    const query = gql
        `{
      salaries(employeeId:`+ employeeId + `){
           employeeId,
           monthYear,
           basic,
           hra,
           lta,
           variable,
           bonus,
           TDS,
           tax,
           total,
           workingDaysInMonth
       
       
         }}
  `
    let response = await graphQLClient.request(query)
    console.log(JSON.stringify(response, undefined, 2))
    return response.salaries;

}


export const getSalaryById = async(id) => {
    let salary = await getSalary();
    let empSalary = {}
	for (var i = 0; i < salary.length; i++) {
		if(id === salary[i].id){
			return salary[i];
		}
	}
	return empSalary;
}
// export const getSalaryById = (id) => {
//     let empSalary = {}
// 	for (var i = 0; i < salary.length; i++) {
// 		if(id == salary[i].id){
// 			return salary[i];
// 		}
// 	}
// 	return empSalary;
// }

export const addSalary = async (record) => {
    const query = `mutation {
        addSalary(
            employeeId:${record.employeeId},
            monthYear:"${record.monthYear}",
            basic:${parseFloat(record.basic)},
            hra:${parseFloat(record.hra)},
            lta:${parseFloat(record.lta)},
            variable:${parseFloat(record.variable)},
            bonus:${parseFloat(record.bonus)},
            TDS:${parseFloat(record.TDS)},
            tax:${parseFloat(record.tax)},
            total:${parseFloat(record.total)},
            workingDaysInMonth:${parseFloat(record.workingDaysInMonth)}
        ){id}
    }`;
    console.log("addsalary query :::",query);
    const response = await graphQLClient.request(query);
    return response;
}

// export var addSalary = (employeeSalary)=>{
//     employeeSalary.id = Date.now()+'r';
//     salary.push(employeeSalary);
// }

// export const updateSalary = (data) => {
//     for (let i = 0; i < salary.length; i++) {
//         	if(data.id == salary[i].id){
//         		salary[i] = data;
//         		break;
//         	}
//         }
// }

export const updateSalary = async (record) => {
    console.log("updateRecord:", record)
    const query = `mutation {
        updateSalary(
            id:${record.id},
            employeeId:${record.employeeId},
            monthYear:"${record.monthYear}",
            basic:${parseFloat(record.basic)},
            hra:${parseFloat(record.hra)},
            lta:${parseFloat(record.lta)},
            variable:${parseFloat(record.variable)},
            bonus:${parseFloat(record.bonus)},
            TDS:${parseFloat(record.TDS)},
            tax:${parseFloat(record.tax)},
            total:${parseFloat(record.total)},
            workingDaysInMonth:${parseFloat(record.workingDaysInMonth)}
        ){id}
    }`;
    console.log("query>>>>>>>",query);
    const response = await graphQLClient.request(query);
    console.log(response);
    return response;
}

// export const deleteSalary = async ({id}) => {
//     let salary = await getSalary();
//     salary = salary.filter((item)=>{return item.id!==id});
// }

export const deleteSalary = async ({id}) => {
    const query = 'mutation { deleteSalary(' +
        'id:"' + id +
        '"){id}}';
    console.log("query::", query);
    const response = await graphQLClient.request(query);
    return response;
}

export const getSalaryBySearch = (field,text) => {
	text = text.toLowerCase();
	var tempEmpSalary = []
	for (var i = 0; i < salary.length; i++){
		if(salary[i][field].toLowerCase().startsWith(text)){
			tempEmpSalary.push(salary[i]);
		}
	}
	return tempEmpSalary;
}

// export const getSalaryListForEmp = (empId) => {
// 	let empSalaryList = []
// 	for (var i = 0; i < salary.length; i++) {
// 		if(empId == salary[i].employeeId){
// 			empSalaryList.push(salary[i])
// 		}
// 	}
// 	return empSalaryList;
// }

export const getSalaryListForEmp = async(empId) => {
    let salary = await getSalary();
	let empSalaryList = []
	for (var i = 0; i < salary.length; i++) {
		if(empId == salary[i].employeeId){
			empSalaryList.push(salary[i])
		}
	}
	return empSalaryList;
}

export const getSalaryInit = async()=>{
	// console.log("...............")
    let salary = await getSalary();
	let salaryInit = [];
	let resSalary = []
	for (let i = 0; i < salary.length; i++) {
		if (!(salaryInit.indexOf(salary[i].employeeId) > -1)) {
			// console.log("kkkkkkkk")
        	salaryInit.push(salary[i].employeeId);
			resSalary.push(salary[i])
		}
	}
	return resSalary;
}
