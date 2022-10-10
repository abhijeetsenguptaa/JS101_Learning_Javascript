bill_price=4000;
minimum_price=3999;
if(bill_price>=minimum_price){
  console.log("New Bill Price =",bill_price-bill_price*10/100);
}else{
  console.log("Not Eligible");
}