let api=`{"fact":"Cats respond better to women than to men, probably due to the fact that women's voices have a higher pitch.","length":107}`;
let res =JSON.parse(api);
//whole object with property
console.log(res);
//single property of objrct
console.log(res.fact);