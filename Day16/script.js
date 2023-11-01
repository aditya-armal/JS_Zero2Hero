const obj = {
    name: 'Aditya',
    get: function () {
        console.log(this);
    },
};
obj.get();

const obj1 = {
    name: 'other function',
    get: () => {
        console.log(this);
    },
};
obj1.get();