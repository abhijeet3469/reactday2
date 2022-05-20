// ------------------------------------------DOM---------------------------------------
console.log('Connected 🙌');
const head = document.getElementById('head')
head.innerText=`Java Script DOM❤️`
head.style.color=`dodgerblue`
const ul = document.getElementById('list')
const list = document.createElement('li')
list.innerText=`Introduction to Virtual DOM`
ul.append(list)

// we cannot use var, document and window in react because we are creatinf the whole html using virtual dom.

// Virtual DOM : DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object 
// which gets created whenever any React application gets loaded on the screen for the first time., whenever React components 
// gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click 
// because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in 
// react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting 
// of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, 
// updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. 
// this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure 
// is known as Recoinciliation.