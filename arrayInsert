var a = [1, 2, 3, 4, 5];

//value=10
//index= 2

var t, t2;
for (var i = 0, l = a.length; i < l; i++) {
  //debugger;
  if (i == 2) {
    t = a[i];
    a[i] = 10;
  }
  if (t) {
    t2 = a[i + 1] || t;
    a[i + 1] = t;
    t = t2;
  }
}

console.log(a);
