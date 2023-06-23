// const axios = require('axios')
// import axios from 'axios';


/**
 * 
 * @param {*} callback 
 */
/*function geztUsersUsingAXIOS(callback) {
    console.log("------------------getUsersUsingAXIOS---------------------------")
    axios.get("https://jsonplaceholder.typicode.com/users",{
        
    })
    .then(response => {
        //ToDo : can we call back from here
        console.log("----------- THEN : result : ", JSON.parse(response), "-----------")
    })
    .catch(error => {
       console.log("----------- CATCH : Error : ", error, "-----------")
    })

}
*/

/**
 * 
 */
function callback(result) {
    console.log("-----------CALLBACK : result : ", result.data, "-----------")
    const listElement = document.getElementsByClassName("my-list")
    const numberOfItemsInList = listElement[0].childElementCount
    console.log("==>debug 1: Total list items = ",listElement[0].childElementCount)
    for(var i = 0; i<numberOfItemsInList; i++) {
        console.log("==>debug 2: Each List item: \n",listElement[0].children[i])
        listElement[0].children[i].children[1].textContent = result.data[i].name
        listElement[0].children[i].children[2].textContent = result.data[i].username
    }
    
}


/**
 * 
 * @param {*} callback 
 */
async function getUsersUsingAxiosAsync(callback) {

    try {
        let result = await axios.get("https://jsonplaceholder.typicode.com/users")
        // let resultObj = await result.json()
        callback(result)
    } catch (error) {
        console.log("---------- Error --------- : ", error)
    }
    

}