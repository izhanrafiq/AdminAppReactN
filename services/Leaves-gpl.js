// let leaves = [
//     {id:"1",employeeId:"1",startDate:"03/02/2020",endDate:"04/02/2020",count:"1",year:"1999",dateOfEntry:"20/04/2020",dateOfModify:"20/03/2020"},
//     {id:"2",employeeId:"2",startDate:"03/03/2020",endDate:"04/03/2020",count:"2",year:"2000",dateOfEntry:"20/05/2020",dateOfModify:"20/04/2020"},
//     {id:"3",employeeId:"3",startDate:"03/05/2020",endDate:"04/08/2020",count:"3",year:"2020",dateOfEntry:"20/06/2020",dateOfModify:"20/05/2020"},
//     {id:"4",employeeId:"2",startDate:"03/06/2020",endDate:"04/07/2020",count:"4",year:"2021",dateOfEntry:"20/06/2020",dateOfModify:"20/05/2020"},
//     {id:"5",employeeId:"2",startDate:"03/07/2020",endDate:"04/09/2020",count:"5",year:"2021",dateOfEntry:"20/06/2020",dateOfModify:"20/05/2020"},
// ]

import { gql, request, GraphQLClient } from 'graphql-request'
import { useToken } from './AsyncStorage';

const endpoint = 'http://localhost:4000/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: useToken(),
    },
})


export var getLeaves = async ()=> {

    const query = gql `{ leaves{id,employeeId,startDate,endDate,count,year,dateOfEntry,dateOfModify}}`;
    let response = await graphQLClient.request(query)
    console.log(JSON.stringify(response, undefined, 2))
    return response.leaves;
}

// export const getLeaves = () => {
//     return leaves;
// }

export const getLeavesById = async (id) => {
    let leaves = await getLeaves();
    let empLeaves = {}
	for (var i = 0; i < leaves.length; i++) {
		if(id == leaves[i].id){
			return leaves[i];
		}
	}
	return empLeaves;
}

export const addLeaves= async (record) => {
    const query = `mutation {
        addLeave(
            employeeId:${record.employeeId},
            startDate:"${new Date(record.startDate).toISOString()}",
            endDate:"${new Date(record.endDate).toISOString()}",
            count:${parseFloat(record.count)},
            year:"${record.year}",
        ){id}
    }`;
    console.log("addLeave query :::",query);
    const response = await graphQLClient.request(query);
    return response;
}

// export const addLeave = (leave)=>{
//     leave.id = Date.now()+'r';
//     leaves.push(leave);
// }

// export const updateLeaves = (data) => {
//     for (let i = 0; i < leaves.length; i++) {
//         	if(data.id == leaves[i].id){
//         		leaves[i] = data;
//         		break;
//         	}
//         }
// }

export const updateLeaves = async (record) => {
    console.log("updateRecord:", record)
    const query = `mutation {
        updateLeave(
            id:${record.id},
            employeeId:${record.employeeId},
            startDate:"${record.startDate}",
            endDate:"${record.endDate}",
            count:${parseFloat(record.count)},
            year:"${record.year}",
        ){id}
    }`;
    console.log("query>>>>>>>",query);
    const response = await graphQLClient.request(query);
    console.log(response);
    return response;
}

// export const deleteLeaves = ({id}) => {
//     leaves = leaves.filter((item)=>{return item.id!==id});
// }

export const deleteLeaves = async ({id}) => {
    const query = 'mutation { deleteLeave(' +
        'id:"' + id +
        '"){id}}';
    console.log("query::", query);
    const response = await graphQLClient.request(query);
    return response;
}

export const getLeavesBySearch = (field,text) => {
	text = text.toLowerCase();
	var tempEmpLeaves = []
	for (var i = 0; i < leaves.length; i++){
		if(leaves[i][field].toLowerCase().startsWith(text)){
			tempEmpLeaves.push(leaves[i]);
		}
	}
	return tempEmpLeaves;
}

export const getLeavesListForEmp = async(empId) => {
    let leaves = await getLeaves();
	let empLeavesList = []
	for (var i = 0; i < leaves.length; i++) {
		if(empId === leaves[i].employeeId){
			empLeavesList.push(leaves[i])
		}
	}
	return empLeavesList;
}


// export const getLeavesListForEmp = (empId) => {
// 	let empLeavesList = []
// 	for (var i = 0; i < leaves.length; i++) {
// 		if(empId == leaves[i].employeeId){
// 			empLeavesList.push(leaves[i])
// 		}
// 	}
// 	return empLeavesList;
// }

export const getLeavesInit = async()=>{
    let leaves = await getLeaves();
	// console.log("...............")
	let leavesInit = [];
	let resLeaves = []
	for (let i = 0; i < leaves.length; i++) {
		if (!(leavesInit.indexOf(leaves[i].employeeId) > -1)) {
			// console.log("kkkkkkkk")
        	leavesInit.push(leaves[i].employeeId);
			resLeaves.push(leaves[i])
		}
	}
	return resLeaves;
}

