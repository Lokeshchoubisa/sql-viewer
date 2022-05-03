import { useMemo } from "react";
import FILE_NAMES from "./data/fileNames";


export const GetData=(fileName) => {
  
  return new Promise((resolve,reject)=>
  {
    if(FILE_NAMES.indexOf(fileName)===-1)
    {
      reject("Table does not exist");
    }
    
    let result={error:null,rows:[],header:[]};
    const startTime=new Date().getTime();
    const fetchUrl=`https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${fileName}.csv?ref=master`
    fetch(fetchUrl)
    .then(res=>
      {
          return res.json()
      })
      .then(res=>
        {
      
          let obj=parseCSV(atob(res.content));
          result.rows=obj.rows;
          result.header=obj.headers;
          result.time=new Date().getTime()-startTime;
          resolve(result);
        })
        .catch(error=>
        {
            reject(error)
        })
        .catch(error=>
        {
            reject(error)
        })

  })

}


export const parseCSV = (text, rowDelimiter = "\n", entryDelimiter = ",") => {
  const lines = text.split(rowDelimiter);
  const headers = lines[0].split(entryDelimiter);
  const rows = [];
  lines.slice(1, lines.length - 1).forEach((line) => {
    const entries = line.split(entryDelimiter);
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = index < entries.length ? entries[index] : null;
    });
    rows.push(obj);
  });
  return {rows,headers};
};

