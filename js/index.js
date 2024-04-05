document.addEventListener('DOMContentLoaded', function () {
    const githubForm = document.getElementById('github-form');
    const userList = document.getElementById('user-list');
    const reposList = document.getElementById('repos-list');
    const searchQuery= document.getElementById('search').value;

    githubForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchQuery = document.getElementById('search').value;
        fetchUsers(searchQuery);
    });

function fetchUsers() {
    fetch(`https://api.github.com/search/users?q=${searchQuery}`)
    .then(res=> res.json())
    .then(users=>{
        displayUsers(users)
    })
    .catch(error=> console.error('error fetching', error))
}
function displayUsers () {
    userList.innerHTML=''
    users.forEach(user => {
        const userItem= document.createElement('li')
        userItem.textContent=user.login
        userItem.addEventListener('click', function () {
         fetchUserRepos(user.login)
    })
        userList.appendChild(userItem)
        
    });
}
function fetchUserRepos() {
    fetch(`https://api.github.com/search/users/${username}/repos`)
    .then(res=> res.json())
    .then(repos=>{
        displayRepos(repos)
    })
    .catch(error=>console.error('error fetching', error))
}
function displayRepos() {
    reposList.innerHTML='';
    repos.forEach(repo=>{
        const repoItem=document.createElement('li')
        repoItem.src=repo.repos_url
        repoItem.appendChild(reposList)
    })
}

})