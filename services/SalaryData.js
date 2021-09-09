let salary = [
    {id:"1",employeeId:"1",monthYear:"2", basic:100 , hra:100, lta:100, variable:100, bonus:100, TDS:100, tax:100, total:"", workingDaysInMonth:"4",dateOfEntry:"02/02/2020",dateOfModify:"02/03/2020"},
    {id:"4",employeeId:"1",monthYear:"3", basic:100 , hra:100, lta:100, variable:100, bonus:200, TDS:100, tax:100, total:"", workingDaysInMonth:"4",dateOfEntry:"02/02/2020",dateOfModify:"02/03/2020"},
    {id:"2",employeeId:"2",monthYear:"", basic:100 , hra:100, lta:100, variable:100, bonus:100, TDS:100, tax:100, total:"", workingDaysInMonth:"4",dateOfEntry:"02/02/2020",dateOfModify:"02/03/2020"},
    {id:"3",employeeId:"3",monthYear:"", basic:100 , hra:100, lta:100, variable:100, bonus:100, TDS:100, tax:100, total:"", workingDaysInMonth:"4",dateOfEntry:"02/02/2020",dateOfModify:"02/03/2020"},
]







export const getSalary = () => {
    return salary;
}

export const getSalaryById = (id) => {
    let empSalary = {}
	for (var i = 0; i < salary.length; i++) {
		if(id == salary[i].id){
			return salary[i];
		}
	}
	return empSalary;
}

export const updateSalary = (data) => {
    for (let i = 0; i < salary.length; i++) {
        	if(data.id == salary[i].id){
        		salary[i] = data;
        		break;
        	}
        }
}

export const deleteSalary = ({id}) => {
    salary = salary.filter((item)=>{return item.id!==id});
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

export const getSalaryListForEmp = (empId) => {
	let empSalaryList = []
	for (var i = 0; i < salary.length; i++) {
		if(empId == salary[i].employeeId){
			empSalaryList.push(salary[i])
		}
	}
	return empSalaryList;
}

export const getSalaryInit = ()=>{
	// console.log("...............")
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
