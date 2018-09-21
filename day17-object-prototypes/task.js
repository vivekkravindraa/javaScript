function Task(title, isCompleted) {
    this.title = title;
    this.createdAt = new Date();
    this.isCompleted = isCompleted;
    this.details = function() {
        return `${this.title}-${this.createdAt}-${this.isCompleted}`;
    };
    this.markAsComplete = function() {
        this.isCompleted = true;
        return `the task has been marked as complete`;
    };
    this.markAsIncomplete = function() {
        this.isCompleted = false;
        return `the task has been marked as incomplete`;
    };
}

var t1 = new Task('Go Walk',false);
// console.log(t1.details());
// console.log(t1.markAsComplete());
// console.log(t1.details());
// console.log(t1.markAsIncomplete());
// console.log(t1.details());
var t2 = new Task('Going Home', false);
var t3 = new Task('Going Work', true);
var t4 = new Task('Going Vacation', false);

var tasks = [];
tasks.push(t1,t2,t3,t4);
// console.log(tasks);

var completedResult = tasks.filter(function(task) {
    return task.isCompleted;
});

var incompletedResult = tasks.filter(function(task) {
    return !task.isCompleted;
});

console.log(`List all the completed tasks:`);
completedResult.forEach(function(task) {
    console.log(task.details());
});

console.log(`List all the incompleted tasks:`);
incompletedResult.forEach(function(task) {
    console.log(task.details());
});