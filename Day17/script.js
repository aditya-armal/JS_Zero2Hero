const obj = {
    name: 'Aditya',
    gender: 'Male',
    yearOfBirth: 1998,
    calculate: function () {
        return 2023 - this.yearOfBirth;
    },
};

let key = 'calculate';
console.log(obj.name);
// console.log(obj[key]);
console.log(obj[key]());