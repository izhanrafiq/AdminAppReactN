let leaves = [
    {id:"1",employeeId:"1",startDate:"03/02/2020",endDate:"04/02/2020",count:"1",year:"1999",dateOfEntry:"20/04/2020",dateOfModify:"20/03/2020"},
    {id:"2",employeeId:"2",startDate:"03/03/2020",endDate:"04/03/2020",count:"2",year:"2000",dateOfEntry:"20/05/2020",dateOfModify:"20/04/2020"},
    {id:"3",employeeId:"3",startDate:"03/05/2020",endDate:"04/08/2020",count:"3",year:"2020",dateOfEntry:"20/06/2020",dateOfModify:"20/05/2020"},
    {id:"4",employeeId:"2",startDate:"03/06/2020",endDate:"04/07/2020",count:"4",year:"2021",dateOfEntry:"20/06/2020",dateOfModify:"20/05/2020"},
    {id:"5",employeeId:"2",startDate:"03/07/2020",endDate:"04/09/2020",count:"5",year:"2021",dateOfEntry:"20/06/2020",dateOfModify:"20/05/2020"},
]



export const getLeaves = () => {
    return leaves;
}

export const getLeavesById = (id) => {
    let empLeaves = {}
	for (var i = 0; i < leaves.length; i++) {
		if(id == leaves[i].id){
			return leaves[i];
		}
	}
	return empLeaves;
}

export var addLeaves = (employeeLeave)=>{
    employeeLeave.id = Date.now()+'r';
    leaves.push(employeeLeave);
}

export const updateLeaves = (data) => {
    for (let i = 0; i < leaves.length; i++) {
        	if(data.id == leaves[i].id){
        		leaves[i] = data;
        		break;
        	}
        }
}

export const deleteLeaves = ({id}) => {
    leaves = leaves.filter((item)=>{return item.id!==id});
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


export const getLeavesListForEmp = (empId) => {
	let empLeavesList = []
	for (var i = 0; i < leaves.length; i++) {
		if(empId == leaves[i].employeeId){
			empLeavesList.push(leaves[i])
		}
	}
	return empLeavesList;
}

export const getLeavesInit = ()=>{
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

