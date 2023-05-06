const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})



let fetchdata
function displaydata() {
    fetch("http://localhost:8080/admin/getadmin")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          fetchdata=data
           display(data);
        //   searchbar(fetchdata)
          // page1(fetchdata)

        })
        .catch((err) => {
          console.log(err);
        });
  }
 let container2=document.querySelector("thead")


let heading=document.getElementById("adminheading")
  let conatiner=document.querySelector("tbody")
	  function display(data){
	conatiner.innerHTML=null
	container2.innerHTML=null
	heading.innerText="Admins"
	let tr1=document.createElement("tr")
	let th1=document.createElement("th")
	let th2=document.createElement("th")
	let th3=document.createElement("th")
	let th4=document.createElement("th")
	th1.innerText="Image"
	th2.innerText="Name"
	th3.innerText="City"
	th4.innerText="Mobile Number"


	tr1.append(th1,th2,th3,th4)
	container2.append(tr1)
	data.forEach((element,index)=>{
	let tr=document.createElement("tr")
	let td1=document.createElement("td")
	let image=document.createElement("img")
	image.src=element.Image
	td1.append(image)
	let td2=document.createElement("td")
	td2.innerText=element.name
	let td3=document.createElement("td")
	td3.innerText=element.adress
	let td4=document.createElement("td")
	td4.innerText=element.mobile
	
	
	tr.append(td1,td2,td3,td4)
	conatiner.append(tr)
	})
	  }
  
  let adminbtn=document.querySelector(".btn")
adminbtn.addEventListener("click",()=>{
	displaydata()
	
})

let productdata
function displayproduct(){
	fetch("http://localhost:8080/product/")
	.then((res) => {
	  return res.json();
	})
	.then((data) => {
	  console.log(data);
	  productdata=data
	   products(data);
	//   searchbar(fetchdata)
	  // page1(fetchdata)

	})
	.catch((err) => {
	  console.log(err);
	});
}
function products(data){

conatiner.innerHTML=null
	container2.innerHTML=null
	heading.innerText="Products"
	let tr1=document.createElement("tr")
	let th1=document.createElement("th")
	let th2=document.createElement("th")
	let th3=document.createElement("th")
	let th4=document.createElement("th")
	let th5=document.createElement("th")
	th1.innerText="Image"
	th2.innerText="Name"
	th3.innerText="Category"
	th4.innerText="Price"
	tr1.append(th1,th2,th3,th4)
	container2.append(tr1)
	data.forEach((element,index)=>{
	let tr=document.createElement("tr")
	let td1=document.createElement("td")
	let image=document.createElement("img")
	image.src=element.image
	
	td1.append(image)
	let td2=document.createElement("td")
	td2.innerText=element.name
	let td3=document.createElement("td")
	td3.innerText=element.category
	let td4=document.createElement("td")
	td4.innerText=element.price
	let td5=document.createElement("td")
	
	td5.innerText="Edit"
	
	let td6=document.createElement("td")
    td6.innerText="Delete"
	td6.addEventListener("click",()=>{
		data = data.filter((ele, i) => {
			if (element._id == ele._id) {
			  return false;
			} else {
			  return true;
			}
		  });
		 products(data)
	})
	tr.append(td1,td2,td3,td4,td5,td6)
	conatiner.append(tr)
})
}
let allproduct=document.querySelector(".pro")

allproduct.addEventListener("click",()=>{
	displayproduct()
})