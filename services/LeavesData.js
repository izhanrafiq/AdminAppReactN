let leaves = [
    {id:"1",employeeId:"1",startDate:"03/02/2020",endDate:"04/02/2020",count:"",year:"",dateOfEntry:"20/04/2020",dateOfModify:"20/03/2020"},
    {id:"2",employeeId:"2",startDate:"03/03/2020",endDate:"04/03/2020",count:"",year:"",dateOfEntry:"20/05/2020",dateOfModify:"20/04/2020"},
    {id:"3",employeeId:"3",startDate:"03/04/2020",endDate:"04/04/2020",count:"",year:"",dateOfEntry:"20/06/2020",dateOfModify:"20/05/2020"},
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


export const addLeave = (leave)=>{
    leave.id = Date.now()+'r';
    leaves.push(leave);
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
