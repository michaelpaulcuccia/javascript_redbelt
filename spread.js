let scores = [97, 45, 36, 90];
console.log(Math.max(scores)); //Nan
console.log(Math.max(...scores)); //97

console.log("------END1------");

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);
arr1.push(4);
console.log(arr2);

console.log("------END2------");

let newArr1 = [1, 2, 3];
let newArr2 = [...newArr1];
console.log(newArr2);
newArr1.push(4);
console.log(newArr2);

console.log("------END3------");

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const moreUsers = [
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

const allUsers = [...users, ...moreUsers];

console.log(allUsers);

console.log("------END4------");

//Update an Object in the Array

const updatedUsers = allUsers.map((user) =>
  user.id === 2 ? { ...user, name: "Robert" } : user
);

console.log(updatedUsers);

console.log("------END5------");

//Adding a New Object and Preserving Existing Ones

const newUser = { id: 5, name: "Eve" };

const withNewUser = [...allUsers, newUser];

console.log(withNewUser);
