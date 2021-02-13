exports.min = function min (array) {
  
  if ((array==null) || (array.length==0)) {return 0}
  let nmin=array[0]
  for (let i=1;i<array.length;i++)
{
  if (array[i]<nmin){
    nmin=array[i]
  }
}  
  return nmin;
}

exports.max = function max (array) {
  
  if ((array==null) || (array.length==0)) {return 0}
  let nmax=array[0]
  for (let i=1;i<array.length;i++)
{
  if (array[i]>nmax){
    nmax=array[i]
  }
}  
  return nmax;
  
}

exports.avg = function avg (array) {
  if ((array==null) || (array.length==0)) {return 0}
  let sum=0
  for (let i=0;i<array.length;i++)
{
  sum+=array[i]
  }
let avr=sum/array.length
  return avr;
  }
