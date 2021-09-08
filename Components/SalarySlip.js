import React, { Component } from 'react';

import {
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
const htmlcontent = `<h1>Salary Pay slip of an employee</h1>`

export default class Example extends Component {
    async printPDF() {
        const results = await RNHTMLtoPDF.convert({
            html: htmlcontent,
            fileName: 'SalarySlip',
            base64: true,
        })

        await RNPrint.print({ filePath: results.filePath })
    }

    async createPDF() {
        let options = {
            html: htmlcontent,
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