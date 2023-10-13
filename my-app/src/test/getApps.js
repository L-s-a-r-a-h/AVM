
//getAPI("CVE-2022-2161")
//import axios from "axios";

//affected application for CVE 
// path is  vulerabilities/cve/configurations/nodes/cpeMatch -> criteria
// then 4th (after the third colon) value of criteria string
let list =  [];
let newList =[];
let run = false;
export async function getAppList(dataArr,cveList) {
    console.log(cveList.props)
    list =[];
    if (run===true){
        return list
    }
 try {
    run = true;
    await getList(dataArr).then();

//     for (let row = 0; row< cveList.props.length;row++){  
//     let text = row.Solution +row.Name + row.Description
//    list.forEach(element =>{
//         let el = new RegExp(element[0],'i')
//         console.log(text.search(el));
//         if(text.search(el) != -1){
//             newList.push(element);
//         }
//     })

// console.log(newList);

//         }


        return list;
 } catch (error) {
    console.error(error);
 }

}
// remove list items wehrer they are not in the cve list
// for each item in the list, check if it is in name, synopsis, or 
// list.forEach(element => { 
//     //2 - 6pm, then 10-12pm, then 12 - 4: 
//  });
async function getList(dataArr) {

await getfromAPI("CVE-2021-34425");
await getfromAPI("CVE-2022-41034");
// await getfromAPI("CVE-2022-32864");
// await getfromAPI("CVE-2022-26377");
console.log(list);


};

async function getfromAPI(cve) {
   
    let url = "https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=" + cve
    try {
        let arr = await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                return getAffectedApp(data)
            })
            arr.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse);
            const map = new Map();
            arr.forEach((item) => map.set(item.join(), item));            
          list = [...list,...map.values()]
    } catch (error) {
        console.log(error)
    }


 }
//get all affected applications listed for the specific cve
function getAffectedApp(data) {
    let app = [];
    let vulnerabilites = (data.vulnerabilities);
    for (let x in vulnerabilites[0].cve.configurations) {
        for (let i in vulnerabilites[0].cve.configurations[x].nodes[0].cpeMatch) {
        let affectedApp = vulnerabilites[0].cve.configurations[x].nodes[0].cpeMatch[i].criteria;
        let myArray = affectedApp.split(":");
        myArray = myArray.slice(3, 5);
        app.push(myArray);
        }
    }
    return app;
}

function filterApp(data) {
    const list = [];
    return list;
}

//     console.log(dataArr)
//     let list = [];
//     console.log("dataArr")
//     // let arr = [];
//     console.log(typeof dataArr)
//     try {
//         let response = await fetch('http://localhost:8000/getApiData', { 
//             method: "POST", 
//             headers: {'Content-Type': 'application/json'},
//          body : dataArr}
//          )
// const jsonResult = await response.json();
// console.log(jsonResult);

//             // .then((res) => res.json())
//             // .then((data) => { return (data.message) }
//             // )
//         console.log(response);
//         message = response;
//     } catch (error) {
//         message = "error";
//     }
//     console.log("back here");
//     console.log(list);
//     return;
    // for (let x in dataArr) {
    //     if ((dataArr[x].CVE != "")) {
    //         console.log(dataArr[x].CVE);
    //         // arr = await getfromAPI(dataArr[x].CVE);
    //         try {
    //             let arr = await fetch((url + dataArr[x].CVE), {

    //                 mode: 'cors',
    //             })
    //                 .then((res) => res.json())
    //                 .then((data) => {
    //                     return getAffectedApp(data);
    //                 })
    //             console.log("end try")
    //             list.push(arr);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //}

//const delay = ms => new Promise(res => setTimeout(res, ms));
//await getfromAPI("CVE-2021-34423");

//     for(let x in dataArr){ 
//         console.log(x)
//         if(dataArr[x].CVE != ""){
//             if ( x == 5){
//                timeout(30000);
// console.log ("wait")
//             }
            
//             if (x == 10 )
//             {
//                 return
//             }
//             //getfromAPI(dataArr[x].CVE);
//         } 
//     }