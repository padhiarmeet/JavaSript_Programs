console.log("hello World frm node .");
const path = require('path');
console.log(path.normalize('/abc////pqr'));  
console.log(path.join('a/d/fdf/fddf/df/fdf/d','/oo/po/po/oo/oo/oi/uyu/'))
console.log(path.resolve('a/d/fdf/fddf/df/fdf/d','/oo/po/po/oo/oo/oi/uyu/'))
console.log(path.relative('a/d/fdf/fddf/df/fdf/d','/oo/po/po/oo/oo/oi/uyu/'))
console.log(path.dirname('a/d/fdf/fddf/df/fdf/d'))
console.log(path.basename('C:\Users\mannm\OneDrive\Desktop\JAVA_SCRIPT\Lab_WORK\Lab_7_10.html'));
console.log(path.extname('C:\Users\mannm\OneDrive\Desktop\JAVA_SCRIPT\Lab_WORK\Lab_7_10.html'));