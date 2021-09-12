import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import FileViewer from 'react-native-file-viewer';
import { getSalaryById } from '../services/SalaryData';
import { getEmployeeById, getSalaryByEmployeeId, getSalaryByEmployeeIdmonthYear } from '../services/Employee-gql';

import { useNavigation } from '@react-navigation/native';




const SalarySlip = (props) => {
    const [empsalary, setEmpsalary] = useState([]);
    const [empname, setEmpname] = useState([]);
    const nav = useNavigation()
    var month = { '1': 'Jan', '2': 'Feb', '3': 'Mar', '4': 'Apr', '5': 'May', '6': 'Jun', '7': 'Jul', '8': 'Aug', '9': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' }

    loadEmpSalary = async (id, monthYear) => {
        let list = await getSalaryByEmployeeIdmonthYear("1", "Feb 2021");
        console.log('list is', list)
        setEmpsalary(list)
    }
    loadEmpName = async (id) => {
        let ename = await getEmployeeById(id);
        setEmpname(ename)
    }
    useEffect(() => {

        console.log("props", props)
        const id = props.route.params.id
        const monthYear = props.route.params.monthYear
        console.log('monthyear is', monthYear)
        loadEmpSalary(id, monthYear);
        loadEmpName(id);
    }, []);




    console.log("salary,employeename", empsalary, empname);
    // const deductions = empsalary[0].TDS + empsalary[0].tax
    //const totalearning = empsalary[0].total - deductions
    printpdf =
        async () => {
            const results = await RNHTMLtoPDF.convert({
                html: `<!DOCTYPE html>
                <html lang="en">
                
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>SalarySlip</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                        crossorigin="anonymous"></script>
                </head>
                
                <body>
                    <div class="container mt-5 mb-5">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-center lh-1 mb-2">
                                    <h6 class="fw-bold">Payslip</h6> <span class="fw-normal">Payment slip for ${empsalary[0].monthYear}
                                     </span>
                                </div>
                               
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">EMPLOYEE ID</span> <small class="ms-3">${empsalary[0].employeeId}</small>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">EMP Name</span> <small class="ms-3">${empname[0].name}</small> </div>
                                            </div>
                                        </div>
                
                                        <div class="row">
                
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">Mode of Pay</span> <small class="ms-3">SBI</small> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">Designation</span> <small class="ms-3">Software Engineer
                                                        </small> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">WorkingDaysInMonth</span> <small class="ms-3">${empsalary[0].workingDaysInMonth}
                                                        </small> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">Ac No.</span> <small class="ms-3">*******0701</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="mt-4 table table-bordered">
                                        <thead class="bg-dark text-white">
                                            <tr>
                                                <th scope="col">Earnings</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Deductions</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Basic</th>
                                                <td>${empsalary[0].basic}</td>
                                                <td>TDS</td>
                                                <td>${empsalary[0].TDS}</td>
                                            </tr>
                                           
                                            <tr>
                                                <th scope="row">HRA</th>
                                                <td>${empsalary[0].hra}</td>
                                                <td>TAX</td>
                                                <td>${empsalary[0].tax}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Variable</th>
                                                <td>${empsalary[0].variable}</td>
                
                
                                            </tr>
                                            <tr>
                                                <th scope="row">LTA</th>
                                                <td>${empsalary[0].lta}</td>
                
                
                                            </tr>
                                        
                
                


                                            <tr>
                                                <th scope="row">Bonus</th>
                                                <td>${empsalary[0].bonus}</td>
                                                <td colspan="2"></td>
                                            </tr>

                                            <tr class="border-top">
                                                <th scope="row">Total Earning</th>
                                                <td>${empsalary[0].total - empsalary[0].TDS + empsalary[0].tax}</td>
                                                <td>Total Deductions</td>
                                                <td>${empsalary[0].TDS + empsalary[0].tax}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            
                
                            </div>
                        </div>
                    </div>
                </body>
                
                </html>`,
                fileName: 'test',
                base64: true,
            })

            await RNPrint.print({ filePath: results.filePath })
        }




    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
            <TouchableHighlight onPress={printpdf}>
                <Text style={{ color: 'blue' }}>Ciick here to generate payslip for the employee</Text>
            </TouchableHighlight>
        </View>
    );

}
export default SalarySlip