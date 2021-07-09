//class declaration

class user{
    constructor(username, age, email){
        this.username = username;
        this.age = age;
        this.email = email
    }
}

const userOne = new user('flexy', 'flexy@gmail.com');

console.log(userOne)

//class expression
fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);

});

fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data) {
    let users = data.results;
    return users.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p')

        candidate.appendChild(li);
        let paragraph = li.appendChild(p);
        let image = li.appendChild(img)
        let firstName = user.name.first;
        let lastName = user.name.last;
        console.log(user.picture.large);
        paragraph.innerHTML = `${firstName} ${lastName}`;
        image.src = user.picture.large;
    });
})
.catch((error) => console.log(error));