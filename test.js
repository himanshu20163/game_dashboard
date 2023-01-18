window.getConfirmation = function(ele){
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

document.querySelectorAll('#employees-table tbody button.btn.btn-warning').forEach(function(ele, idx) {
    ele.addEventListener('click', function(e) {
        var row = this.closest('tr');
        console.log('TR first cell: ' + row.cells[0].textContent);
    });
});