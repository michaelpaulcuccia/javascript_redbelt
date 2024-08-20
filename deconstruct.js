const accounts = [
  {
    id: 1,
    //name: "Chase",
    amount: 500,
    owners: ["Sara", "John"],
  },
  {
    id: 2,
    name: "Bank of America",
    amount: 5000,
    owners: ["Sara", "John", "Mary"],
  },
  {
    id: 3,
    name: "Wells Fargo",
    amount: 5000,
    owners: ["Sara", "Mary"],
  },
];

const [one, , b] = accounts;

console.log(one);

console.log("------END1------");

console.log(b);

console.log("------END2------");

const { name: personName = "Fred" } = one;

console.log(personName);

console.log("------END3------");
