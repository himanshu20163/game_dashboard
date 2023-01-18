let count=0;
let i=1;
function get_data() {
  i++;
  count++;
  let fname = document.getElementById("fname").value
  let lname = document.getElementById("lname").value
  let country = document.getElementById("country").value
  let player = document.getElementById("pscore").value
  //current date
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
  let data = document.getElementById("dashboard_container");
  let tb_data = document.getElementById("table_data");
  if(fname == "" || lname =="" || country == "" || player == "" ) {
  	 alert("Please Enter Your Details");
  }
  else{
  	while (count<i) {
    tb_data.innerHTML += ` 
  <tr id="${count}" style="margin:5px;">
  <td id="first_name${count}" style="width:12%;">${fname} &nbsp;${lname} <br/> &nbsp;${today}</td>
  <td id="country_name" style="width:8%;">${country}</td>
  <td id="player_score" style="width:8%;">${player}</td>
  <td id="delete" onclick="delete_row(this)" style="width:2%;padding:10px;"><i class="fa fa-trash" aria-hidden="true"></i></td>
  <td id="five_add" onclick="five_no_add(this)" style="width:2%;border:"1px solid white;background-color:white;"><span >+5</span></td>
  <td id="five_minus" onclick="five_no_minus(this)" style="width:2%;border:"1px solid white;"><span >-5 </span></td>
  </tr>
  `
  break;

   }

  }
}
 
window.delete_row = function(ele){
  var retVal = confirm("Are you sure you want to delete ?");
  if( retVal == true ){
      var row = ele.closest('tr');
      console.log("User wants to delete: " + row.cells[0].textContent);
      row.remove();
      return true;
  }
  else{
      console.log("User does not want to delete!");
      return false;
  }
}
 
function five_no_add(val) {
  let data = val.closest('tr');
  let children = data.children[2];
  //console.log(children);
  let ans = parseInt(data.cells[4].textContent);
  let score = parseInt(data.cells[2].textContent);
  children.innerHTML = score+ans;
}

function five_no_minus(val) {
  let data = val.closest('tr');
  let children = data.children[2];
  //console.log(children);
  let ans = parseInt(data.cells[4].textContent);
  let score = parseInt(data.cells[2].textContent);
  children.innerHTML = score-ans;
}
