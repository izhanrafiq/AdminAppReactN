let attendanceList = [
    {id:"1",employeeId:"1", date:"20/04/2020", inTimeDate:"",outTime:"", totalHours:""},
    {id:"2",employeeId:"2", date:"20/05/2020", inTimeDate:"",outTime:"", totalHours:""},
    {id:"3",employeeId:"3", date:"20/06/2020", inTimeDate:"",outTime:"", totalHours:""},
]


export const getAttendances = () => {
    return attendanceList;
}

export const getAttendanceById = (id) => {
    let empAttendance = {}
	for (var i = 0; i < attendanceList.length; i++) {
		if(id == attendanceList[i].id){
			return attendanceList[i];
		}
	}
	return empAttendance;
}

export const updateAttendance = (data) => {
    for (let i = 0; i < attendanceList.length; i++) {
        	if(data.id == attendanceList[i].id){
        		attendanceList[i] = data;
        		break;
        	}
        }
}

export const addAttendance = (data)=>{
    data.id = Date.now()+'r';
    attendanceList.push(data);
}

export const deleteAttendance = ({id}) => {
    attendanceList = attendanceList.filter((item)=>{return item.id!==id});
}

export const getAttendanceBySearch = (field,text) => {
	text = text.toLowerCase();
	var tempEmpAttendance = []
	for (var i = 0; i < attendanceList.length; i++){
		if(attendanceList[i][field].toLowerCase().startsWith(text)){
			tempEmpAttendance.push(attendanceList[i]);
		}
	}
	return tempEmpAttendance;
}
