class Item{
    constructor(a,b,c,d,e){
        this.name=a;
        this.category=b;
        this.price=c;
        this.location=d;
        this.img=e;
        this.des="This text is example for description";
    }
}
let item1=new Item("Acer","laptop",30000,"chennai","img/acer.jpg");
let item2=new Item("Oneplus","phone",40000,"mumbai","img/oneplus.jpg");
let item3=new Item("iphone","phone",45000,"bangalore","img/iphone.jpg");
let item4=new Item("Chair","furniture",8000,"chennai","img/dinning.jpg");
let item5=new Item("Dell","laptop",50000,"mumbai","img/dell.jpg");
let item6=new Item("Redmi","phone",15000,"bangalore","img/redmi.jpg");
let item7=new Item("Hp","laptop",20000,"chennai-","img/hp.jpg");
let item8=new Item("samsung","phone",25000,"bangalore","img/samsung.jpg");
let item9=new Item("Table","furniture",12000,"chennai","img/table.jpg");





// function for price Range
 showVal=ele=> ele.nextSibling.innerHTML=ele.value;
                

 let cards=[item1,item2,item3,item4,item5,item6,item7,item8,item9];

 // function for sort
sortBy=ele=>{
    let a = cards;
    let sortArr = a.sort((a,b)=>(a.price - b.price));
     if(ele.value=="up"){
        displayCard(sortArr);
     }else if(ele.value=="down"){
        revArr = sortArr.reverse();
        displayCard(revArr);
     }
     filterCard();
     
}

//  display function
 function displayCard(tiles){
  document.getElementById("count").innerHTML=tiles.length;
  document.getElementById("result").innerHTML="'"+document.getElementById("selectCategory").value+"'";
  let append = document.getElementById("append");
  if(append.innerHTML!=null){
    append.innerHTML="";
  }
  for(let i=0;i<tiles.length;i++){
    let div = document.createElement('div');
    div.setAttribute("class","card");
    let img = document.createElement('img');
    img.setAttribute("src",tiles[i].img);
    div.appendChild(img);
    let nam = document.createElement('p');
    nam.innerHTML="Name :"+tiles[i].name;
    div.appendChild(nam);
    let pri = document.createElement('p');
    pri.innerHTML="Price : ₹ "+tiles[i].price;
    div.appendChild(pri);
    let des = document.createElement('p');
    des.innerHTML=tiles[i].des;
    div.appendChild(des);
    append.appendChild(div);
   }
 }
    
//  creating object
// (function(){
//   let cls = document.getElementsByClassName('new-func');
//   for(let i=0;i<cls.length;i++){
//     cls[i].addEventListener("change",display);
//   }
// })();


function filterCard(){
    let min = Number(document.getElementById("min").innerHTML);
    let max = Number(document.getElementById("max").innerHTML);

    if(min>max){
        alert("Minimum value should be less than maximum Value");
        return;
    }
    
    let newArr = cards.filter(byPrice);
    function byPrice(arr){
        let cate=document.getElementById("selectCategory").value;
        if(cate == "all"){
            return (arr.price >= min) &&( arr.price <= max);
        }else if(arr.category == cate){
          return (arr.price >= min) &&( arr.price <= max);
        }
    }
    displayCard(newArr);
}
{
    let d = new Date();
    let mon=["Jan","Feb","Mar","Apr","May","jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let ddate = d.getDate();
    let dmon = d.getMonth();
    let dyear = d.getFullYear();
    document.getElementById("ondate").innerHTML = ddate+" - "+mon[dmon]+" - "+dyear;
}
