var broj=1;
var broj2=1;
var el=0;
console.log(broj);
console.log(broj2);
for (i=0;i<8;i++){
    el=broj+broj2;
    broj=broj2;
    broj2=el
    console.log(el);
}