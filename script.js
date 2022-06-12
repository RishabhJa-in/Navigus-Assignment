var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
    document.getElementById("courseListtd").style.display = "block";
}

function readFormData() {
    var formData = {};
    formData["CourseName"] = document.getElementById("CourseName").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("courseList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.CourseName;
    
    
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = `
                        <button id="black-btn" onclick="onEdit(this)">Edit</button>
                       <button id="black-btn" onclick="onDelete(this)">Delete</button>
                       <button id="black-btn" onclick="window.location.href='take test/index.html'">Add Quiz</button>
                       `;
}

function addQuizPopup() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function resetForm() {
    document.getElementById("CourseName").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("CourseName").value = selectedRow.cells[0].innerHTML;
   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.CourseName;
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("courseList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("CourseName").value == "") {
        isValid = false;
        document.getElementById("CourseNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("CourseNameValidationError").classList.contains("hide"))
            document.getElementById("CourseNameValidationError").classList.add("hide");
    }
    return isValid;
}


