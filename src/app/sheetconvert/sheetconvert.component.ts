import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';
@Component({
  selector: 'app-sheetconvert',
  templateUrl: './sheetconvert.component.html',
  styleUrls: ['./sheetconvert.component.scss']
})
export class SheetconvertComponent implements OnInit {

  constructor() { }

  sheetData ?: string;

  ngOnInit(): void {
  }


  fileUpLoad(event :any){
    const selectFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectFile);
    fileReader.onload =(event :any) =>{
let binaryData = event.target.result;
let workbook =XLSX.read(binaryData,{type :'binary'})

workbook.SheetNames.forEach(sheet =>{
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
 this.sheetData = JSON.stringify(data , undefined , 4)
  console.log(data)
})


    }

  }
}
