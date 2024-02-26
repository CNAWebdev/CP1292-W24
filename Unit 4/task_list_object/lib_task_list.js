"use strict";
// create a symbol of tasks
const tasks = Symbol("tasks");

// create a tasklist that uses the tasks symbol and sets it to an empty array
const taskList = {
    // set the symbol to the empty array
    [tasks]: [],
    // create a load method that will use the storage retrieve method to load the tasks to the symbol
    load() {
        this[tasks] = storage.retrieve();
        return this;
    },
    // create a save method that will store the task symbol's array usinng the storage object
    save() {
        storage.store(this[tasks]);
        return this;
    },
    // create a sort method taht will sort the symbols array by due date
    sort() {
        this[tasks].sort( (task1, task2) =>{
            if ( task1.dueDate < task2.dueDate ){
                return -1;
            }else if ( task1.dueDate > task2.dueDate ){
                return 1;
            }else{
                return 0;
            }
        });
    },
    // create an add method that will take a task and add it to the symbol's array
    add(task) {
        this[tasks].push(task);
        return this;
    },
    // create a delete method that will take the index of the symbols array and remeove that element reutnring the rest of the array
    delete( index ) {
        this.sort();
        this[tasks].splice(index,1);
        return this;
    },
    // create a clear method taht will use the storage library to clear the array
    clear() {
        storage.clear();
        return this;
    },
    // add an iterator so that we can walk through the tasks
    *[Symbol.iterator]() {
        for (let task of this[tasks]){
            yield task;
        }
    }
};