// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Manchester', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Manchester').then(function(temp){
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err)
// });


function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and b need to be numbers');
    }
  });
}

addPromise(2, 5).then(function(sum) {
  console.log('both numbers', sum)
}, function(err) {
  console.log('one or more is not a number', err);
});

addPromise('piotr', 5).then(function(sum) {
  console.log('success', sum);
}, function(err){
  console.log('error, something isn\'t correct', err);
});
