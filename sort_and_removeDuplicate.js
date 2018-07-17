let arr=[1,1,1,42,3,3,4,5,9,1,4,3]
let sorted=sort(arr);
console.log(removeDuplicate(sorted));


function removeDuplicate(list){
	let br=true,i=0;
  while(br){
  	if(i===list.length){
    	br=false;
      break;
    }
  	if(list[i]===list[i+1]){
    	list.splice(i+1,1);
    }
    else{
    	i++;
    }
  }

  return list;
}


function sort(list){
	for(let i=0,l=list.length;i<l;i++){
  	for(let k=0;k<i;k++){
    	if (list[i]<list[k]){
      		let a=list[i];
          list[i]=list[k];
          list[k]=a;          
      }
    }
  }
  return list;
}
