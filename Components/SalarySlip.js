import React, { Component } from 'react';

import {
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
const htmlcontent = `<!DOCTYPE html>
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
                    <h6 class="fw-bold">Payslip</h6> <span class="fw-normal">Payment slip for the month of June
                        2021</span>
                </div>
                <div class="d-flex justify-content-end"> <span>Working Branch:ROHINI</span> </div>
                <div class="row">
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">EMPLOYEE ID</span> <small class="ms-3">39124</small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">EMP Name</span> <small class="ms-3">Ashok</small> </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-6">
                                <div> <span class="fw-bolder">Mode of Pay</span> <small class="ms-3">SBI</small> </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">Designation</span> <small class="ms-3">Marketing Staff
                                        (MK)</small> </div>
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
                                <td>16250.00</td>
                                <td>PF</td>
                                <td>1800.00</td>
                            </tr>
                            <tr>
                                <th scope="row">DA</th>
                                <td>550.00</td>
                                <td>ESI</td>
                                <td>142.00</td>
                            </tr>
                            <tr>
                                <th scope="row">HRA</th>
                                <td>1650.00 </td>
                                <td>SPL. Deduction</td>
                                <td>500.00</td>
                            </tr>
                            <tr>
                                <th scope="row">WA</th>
                                <td>120.00 </td>


                            </tr>
                            <tr>
                                <th scope="row">MA</th>
                                <td>3000.00</td>

                            </tr>


                            <tr>
                                <th scope="row">Holiday Wages</th>
                                <td>500.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Special Allowance</th>
                                <td>100.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Bonus</th>
                                <td>1400.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Individual Incentive</th>
                                <td>2400.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr class="border-top">
                                <th scope="row">Total Earning</th>
                                <td>25970.00</td>
                                <td>Total Deductions</td>
                                <td>2442.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col-md-4"> <br> <span class="fw-bold">TAKE HOME : 24528.00</span> </div>

                </div>

            </div>
        </div>
    </div>
</body>

</html>`

export default class Example extends Component {
    async printPDF() {
        const results = await RNHTMLtoPDF.convert({
            html: htmlcontent,
            fileName: 'test',
            base64: true,
        })

        await RNPrint.print({ filePath: results.filePath })
    }


    async createPDF() {
        let options = {
            html: require('../Salaryhtml/index.html'),
            fileName: 'test',
            directory: 'Downloads',
        };

        let file = await RNHTMLtoPDF.convert(options)
        // console.log(file.filePath);
        alert(file.filePath);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                <TouchableHighlight onPress={this.printPDF}>
                    <Text style={{ color: 'blue' }}>Salary pay slip of employee</Text>
                </TouchableHighlight>
            </View>
        )
    }
}