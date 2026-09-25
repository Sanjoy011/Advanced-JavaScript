class User {
    constructor(userName,userId){
        this.name = userName;
        this.id = userId;
        this.login = () => {
            return(" is activated");
        };
    }
}

const user1 = new User("Sanjoy",309711);
const user2 = new User("Sandeep",309712);
const user3 = new User("Sourav",309713);
const user4 = new User("Subhadeep",309714);

console.log(
    `User1 name is: ${user1.name}\n`+
    `User1 id : ${user1.id}\n`+
    `User1 : ${user1.login()}\n\n`+

    `User2 name is: ${user2.name}\n`+
    `User2 id : ${user2.id}\n`+
    `User2 : ${user2.login()}\n\n`+

    `User3 name is: ${user3.name}\n`+
    `User3 id : ${user3.id}\n`+
    `User3 : ${user3.login()}\n\n`+

    `User4 name is: ${user4.name}\n`+
    `User4 id : ${user4.id}\n`+
    `User4 : ${user4.login()}\n\n`

)