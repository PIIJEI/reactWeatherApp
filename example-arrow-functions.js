var names = ['piotr','mike','josh','andrew'];

// names.forEach(function( name ){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('piotr'));

// var person = {
//   name: 'Piotr',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

function add(a,b) {
  return a + b;
}

console.log(add(4, 10));
