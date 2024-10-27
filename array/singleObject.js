const obj = [
  {
    key: "sample 1",
    data: "Data1",
  },
  {
    key: "sample 1",
    data: "Data1",
  },
  {
    key: "sample 1",
    data: "Data1",
  },
  {
    key: "sample 2",
    data: "Data2",
  },
  {
    key: "sample 1",
    data: "Data1",
  },
  {
    key: "sample 3",
    data: "Data3",
  },
  {
    key: "sample 4",
    data: "Data4",
  },
];

const  newObj = {}

 obj.forEach((item)=>{
    if(newObj[item.key]){
        newObj[item.key].push(item)
    }else{
        newObj[item.key] =[item]
    }
})

console.log(newObj)