let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt, 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

// No.1
let dataSaya = {...data,
    name:"faishal",
    email:"faishalramadhan0@gmail.com",
    hobby: "futsal"
}
console.log(dataSaya);
//no.2 
const {street, city} = data.address;
console.log(street,city);

