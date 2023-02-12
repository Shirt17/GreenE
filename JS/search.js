function search() {
  // Input to uppercase
  let filter = document.getElementById('search-input').value.toUpperCase();
  let item = document.querySelectorAll('.column');
  let name = document.getElementsByTagName('h1');
  for (var i = 0; i <= name.length; i++) {
    let a = item[i].getElementsByTagName('h1')[0];
    // Text in column
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    }
    else if (!filter) {
      for (let i = 0; i < a.length; i++) {
        item[i].style.display = "";
      }
    }
    else {
      item[i].style.display = "none";
    }

  }
};

// Tag filters
filterobject('all')

// Function to filter elements based on the 'type' argument passed
function filterobject(type) {
  // Declare variables to store the selected elements and loop index
  var column, i;
  column = document.getElementsByClassName("column");
  // If 'all' is passed as the 'type' argument, set 'type' to an empty string
  if (type == "all") type = "";
  // Loop through the elements in the 'column' variable
  for (i = 0; i < column.length; i++) {
    // Remove the class "show" from the current element
    removeClass(column[i], "show");
    // Check if the className of the current element contains the 'type' argument
    if (column[i].className.indexOf(type) > -1)
      // If it does, add the class "show" to the current element
      addClass(column[i], "show")
  }
}

// Function to add classes to an element
function addClass(column_type, display) {
  var i, type_class, show_class;
  // Split the element's className into an array of classes
  type_class = column_type.className.split(" ");
  // Split the string of classes to add into an array
  show_class = display.split(" ");
  // Loop through the array of classes to add
  for (i = 0; i < show_class.length; i++) {
    // Check if the current class to add already exists in the element's classes
    if (type_class.indexOf(show_class[i]) == -1) {
      // If it doesn't, add the class to the element's className
      column_type.className += " " + show_class[i];
    }
  }
}

// Function to remove classes from an element
function removeClass(column_type, display) {
  var i, type_class, show_class;
  // Split the element's className 
  type_class = column_type.className.split(" ");
  // Split the string of classes to remove into an array
  show_class = display.split(" ");
  // Loop through the array of classes to remove
  for (i = 0; i < show_class.length; i++) {
    // Check if the current class to remove exists in the element's classes
    while (type_class.indexOf(show_class[i]) > -1) {
      // If it does, remove the class from the element's className using the splice method
      type_class.splice(type_class.indexOf(show_class[i]), 1)
    }
  }
  // join the classname back to a string using the join method.
  column_type.className = type_class.join(" ")

}

function filter() {
  let choice = document.getElementById("button")
  if (choice.style.display == "none") {
    choice.style.display = "block";
  }
  else {
    choice.style.display = "none";
  }
}





