//prioritise the vulnerabilities

const fileProcess=function(data){
    console.log("fileProcess");
    console.log(data);
     const newData =[];

   //remove rows where the risk is none (they dont have cve or cvss)
    for (let x in data)
    {
        if(data[x].Risk!="None"){
            newData.push(data[x]);
        }
    }
    console.log(newData);
        
}
export default fileProcess;


      