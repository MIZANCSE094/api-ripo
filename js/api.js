function jesonLoadData() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}



// function LoadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data=> console.log(data))
// }


function LoadDatas() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data));
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => UserLoad(data));
}

function UserLoad(data) {
   const ul=document.getElementById('userId')
    for (const user of data)
    {
        // console.log(user.name);

        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}







function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json));
}









function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => todosLoad(data));
}

function todosLoad(data) {
// amar user ar nam gula dorkar tai ami loop calabo
    for (const user of data)
    {
    console.log(user.id)
    }

}

// loadPost();

function headingPart() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => heading(data));
}

function heading(data) {
   const ul = document.getElementById('head');
    for (const user of data)
    {
        const li = document.createElement('li');
        li.innerText = `name:${user.name} email:${user.id}`;
        ul.appendChild(li);

}


}
























//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))