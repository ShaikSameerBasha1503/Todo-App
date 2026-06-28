let todo = [];
let user = prompt("Please enter your choice!");
while(true)
{
  if(user == "quit")
    {
        console.log("quitting app");
        break;
    }  
if(user == "list")
{
    console.log("-----------");
    for(let i = 0; i < todo.length; i++)
    {
        console.log(i,todo[i]);
    }
    console.log("-----------");
}
else if(user == "add")
{
    let task = prompt("Please enter the task you want to add!");
    todo.push(task);
    console.log("task added");
}
else if(user == "delete")
{
    let idx = prompt("Please enter the task index");
    todo.splice(idx,1);
    console.log("task deleted");
}
else {
    console.log("Wrong request:");
}
 user = prompt("please enter your request");
}