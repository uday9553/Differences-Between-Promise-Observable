const promise=new Promise(resolve=>{
  setTimeout(()=>{
    resolve("Uday");
    resolve("sagar"); //these result is not sent on calling then
    resolve("chinna");//these result is not sent on calling then
  },500)
})
promise.then(result=>{
  console.log('promise '+result);
})

//Here the result is "promise Uday"

//Above promise result will return only first promise i.e Uday
//And also it has no options like filter, map

const observable=new Rx.Observable(observer=>{
  setTimeout(()=>{
    observer.next("udaykumar");
     observer.next("udaysagar");
     observer.next("chinna");
     observer.next("pavan");
     observer.next("kalyan");
  },500)
})

observable.subscribe(result=>{
  console.log('observable '+result);
})
//Here the result is "promise Uday" "observable udaykumar"
//"observable udaysagar" "observable chinna" "observable pavan" "observable kalyan"


observable.filter(result=>result.substring(0,2)=='ud')
.map(result=>result+' map')
.subscribe(result=>{
  console.log('observable '+result)
});

//Here the result is "observable udaykumar map" "observable udaysagar map"