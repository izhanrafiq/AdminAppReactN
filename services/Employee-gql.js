//const { createApolloFetch } = require('apollo-fetch');
import { gql, request, GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:4000/graphql'
import { useToken } from './AsyncStorage'

export var signIn = async function (email, password) {
    const query = gql`
    {
      signIn(email:"`+ email + `",password:"` + password + `"){
        id
      }
    }
  `
    let response = await graphQLClient.request(query)
    //console.log(JSON.stringify(response, undefined, 2))
    console.log(response.id);
    return response;

}
const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: useToken(),
    },
})


/*const fetch = createApolloFetch({
    uri: 'http://localhost:4000/graphql',
    headers: {
        "authorization":"rama"
      },
  });

  fetch.use(({ request, options }, next) => {
    options.headers = {
      "authorization": "rama"
    };
    next();
  });

var model ={}; */


export var getEmployees = async function () {
    const query = gql`
    {
      employee{
        id,
       name,
       email,
       address,
       dateOfBirth,
       dateOfJoining,
       education,
       type,
       role      
         }
    }
  `
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(JSON.stringify(response, undefined, 2))
    return response.employee;

}

export var getEmployee = async function () {
    const query = gql`
    {
      employee{
        id
       name,
       email     
         }
    }
  `
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(JSON.stringify(response, undefined, 2))
    return response.employee;

}

export var getEmployeeByEmail = async function (email) {
    const query = gql`
    {
      employee(email:"`+ email + `"){
        id,
        name,
        email,
        address,
        dateOfBirth,
        dateOfJoining,
        education,
        type,
        role   
         }
    }
  `
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(JSON.stringify(response, undefined, 2))
    return response.employee;

}
export var getEmployeeById = async function (id) {
    const query = gql`
    {
      employee(id:`+ id + `){
        id,
        name,
        
         }
    }
  `
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(JSON.stringify(response, undefined, 2))
    return response.employee;

}



export const addEmployee = async (record) => {
    const query = 'mutation { addEmployee(name:"' + record.name +
        '",email:"' + record.email +
        '",address:"' + record.address +
        '",dateOfBirth:"' + record.dateOfBirth +
        '",dateOfJoining:"' + record.dateOfJoining +
        '",education:"' + record.education +
        '",type:"' + record.type +
        '",role:"' + record.role +
        '",password:"' + record.password + '"){id}}';
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    return response;
}


export const deleteEmployee = async (id) => {
    const query = 'mutation { deleteEmployee(' +
        'id:"' + id +
        '"){id}}';
    console.log("query::", query);
    const response = await graphQLClient.request(query);
    return response;
}


export const updateEmployee = async (record) => {
    console.log("updateRecord:", record)
    const query = 'mutation { updateEmployee(' +
        'id:"' + record.id +
        '"name:"' + record.name +
        '",email:"' + record.email +
        '",address:"' + record.address +
        '",dateOfBirth:"' + record.dateOfBirth +
        '",dateOfJoining:"' + record.dateOfJoining +
        '",education:"' + record.education +
        '",address:"' + record.address +
        '",type:"' + record.type +
        '",role:"' + record.role +
        '",password:"' + record.password +
        '"){id}}';
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(response);
    return response;
}

//***salaries */

export var getSalary = async function () {
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
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(JSON.stringify(response, undefined, 2))
    return response.salaries;

}
export var getSalaryById = async function (id) {
    const query = gql
        `{
      salaries(id:`+ id + `){
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
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(JSON.stringify(response, undefined, 2))
    return response.salaries;

}
export var getSalaryByEmployeeId = async function (employeeId) {
    const query = gql
        `{
      salaries(employeeId:`+ employeeId + `){id,
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
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)

    console.log(JSON.stringify(response, undefined, 2))
    return response.salaries;

}
export var getSalaryByEmployeeIdmonthYear = async function (employeeId, monthYear) {
    console.log('MONTH ', monthYear)
    const query = gql
        `{
      salaries(employeeId:`+ employeeId + `,monthYear:"` + monthYear + `"){
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
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log(JSON.stringify(response, undefined, 2))
    return response.salaries;

}
export var getSalaryByMonthYear = async function (monthYear) {
    const query = gql
        `{
      salaries(monthyear:`+ monthYear + `{
           employeeId,
           total
         }}
  `
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    const query2 = gql
        `{
    employee(employeeId:`+ response.salaries.employeeId + `{
        name
       }}
`
    let response2 = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    response.salaries.name = response2.employee.name
    console.log(JSON.stringify(response, undefined, 2))
    return response.salaries;

}


export const addSalary = async (record) => {

    const total = record.basic + record.hra + record.lta + record.variable + record.bonus + record.TDS - record.tax

    const query = 'mutation { addSalary(employeeId:"' + record.employeeId +
        '",monthYear:"' + record.monthYear +
        '",basic:' + record.basic +
        ',hra:' + record.hra +
        ',lta:' + record.lta +
        ',variable:' + record.variable +
        ',bonus:' + record.bonus +
        ',TDS:' + record.TDS +
        ',tax:' + record.tax +
        ',workingDaysInMonth:' + record.workingDaysInMonth + ',total:' + total + '){id}}';
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    return response;
}

export const deleteSalary = async (id) => {
    const query = 'mutation { deleteSalary(' +
        'id:"' + id +
        '"){id}}';
    console.log("query::", query);
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    return response;
}

export const updateSalary = async (record) => {
    const total = record.basic + record.hra + record.lta + record.variable + record.bonus + record.TDS - record.tax
    console.log("updateRecord:", record)
    const query = 'mutation { updateSalary(employeeId:"' + record.employeeId +
        '",monthYear:"' + record.monthYear +
        '",basic:' + record.basic +
        ',hra:' + record.hra +
        ',lta:' + record.lta +
        ',variable:' + record.variable +
        ',bonus:' + record.bonus +
        ',TDS:' + record.TDS +
        ',tax:' + record.tax +
        ',workingDaysInMonth:' + record.workingDaysInMonth + ',total:' + total + '){id}}';
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log(response);
    return response;
}




//========================= LEAVES ================
export var getLeaves = async function () {

    const query = '{ leaves{id,employeeId,startDate,endDate,count,year,dateOfEntry,dateOfModify}}';
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    return response.leaves;
}

export var getLeavesByEmployeeId = async function (employeeId) {

    const query = '{ leaves(employeeId:' + employeeId + '){id,employeeId,startDate,endDate,count,year,dateOfEntry,dateOfModify}}';
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    return response.leaves;
}

export var addLeaves = async function (record) {

    //console.log("record",record);

    const query = 'mutation{ addLeave(employeeId:' + record.employeeId +
        ',startDate:' + record.startDate + ',endDate:' + record.endDate +
        ',count:' + record.count + ',year:"' + record.year + '"){id}}'

    console.log("query:" + query);
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log("response:", response);
    return response;

}


export var deleteLeaves = async function (id) {

    console.log(id)
    const query = 'mutation { deleteLeave(id:' + id + "){id}}"
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log("response:", response);
    return response;
}


export var updateLeaves = async function (record) {

    const query = 'mutation{ updateLeave(id:' + record.id + ',employeeId:' + record.employeeId +
        ',startDate:' + record.startDate + ',endDate:' + record.endDate +
        ',count:' + record.count + ',year:"' + record.year + '"){id}}'

    console.log("query:" + query);
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log("response:", response);
    return response;

}


//========================= LEAVES END ======================= 




//==================ATTENDANCE========================

export var getAttendance = async function () {
    const query = gql`
  {
    attendances {
      id,
      employeeId,
      date,
      inTimeDate,
      outTime,
      totalHours
    }
  }
`
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log(JSON.stringify(response, undefined, 2))
    return response.attendances;

}

export var getAttendanceByEmployeeId = async function (employeeId) {
    const query = gql`
  {
    attendances(employeeId:`+ employeeId + `){
      id,
      employeeId,
      date,
      inTimeDate,
      outTime,
      totalHours
    }
  }
`
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log(JSON.stringify(response, undefined, 2))
    return response.attendances;

}


export var addAttendace = async (record) => {
    console.log(record)

    const mutation = gql`mutation { addAttendance 
      (employeeId:"`+ record.employeeId +
        `",email:"` + record.email +
        `",date:"` + record.date +
        `",inTimeDate:"` + record.inTimeDate +
        `",outTime:"` + record.outTime +
        `",totalHours:` + record.totalHours +
        `){id}}"`;
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    return response;
}
export const updateAttendance = async (record) => {
    console.log("updateRecord:", record)
    const mutation = gql`mutation { updateAttendance 
  (employeeId:"`+ record.employeeId +
        `",email:"` + record.email +
        `",date:"` + record.date +
        `",inTimeDate:"` + record.inTimeDate +
        `",outTime:"` + record.outTime +
        `",totalHours:` + record.totalHours +
        `){id}}"`;
    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    return response;
}


export var deleteAttendance = async function (id) {
    const mutation = gql`
    mutation{
        deleteAttendance(id:`+ id + `){
          id
        }
      }
  `

    let response = await new GraphQLClient(endpoint, {
        headers: {
            authorization: useToken(),
        }
    }).request(query)
    console.log("deleted")

}

//==============ATTENDANCE END================




