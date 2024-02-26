"use strict";
// create a class called storage
const storage = {
    // create a method named retrieve that will return the list of tasks placed in the localstorage
    // this will return an array of tasks ( from the Task class)
    retrieve(){
        const tasks = [];
        const json = localStorage.tasks;
        if(json){
            const taskArray = JSON.parse(json);
            for (let task of taskArray){
                tasks.push(new Task(task));
            }
        }
        return tasks;
    },
    // create a method named store that is passed the tasks array that will store it in local storage
    store(tasks){
        localStorage.tasks = JSON.stringify(tasks);
    },
    // create a method named clear that will empty out the tasks from localstorage
    clear(){
        localStorage.tasks = "";
    }
    
};