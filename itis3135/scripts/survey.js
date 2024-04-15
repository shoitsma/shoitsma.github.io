const courses = document.getElementById("courses");
const addCourseBtn = document.getElementById("add-course-btn");
const formData = document.getElementById("form").innerHTML;

/**
 * Source: https://www.geeksforgeeks.org/file-type-validation-while-uploading-it-using-javascript/
 */
function fileValidation() {
    var fileInput = document.getElementById("image");
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.png)$/i;
        
    if (!allowedExtensions.exec(filePath)) {
        alert("Invalid file type, please upload a png or jpg");
        fileInput.value = "";
        return false;
    } 
}

// Creates new text entry box to enter course
function addCourse() {
    const courseEntry = document.createElement("div");
    courseEntry.classList.add("course-entry");
    courseEntry.innerHTML = `
        <input type="text" placeholder="Enter class name">
        <button>Delete</button>
    `;
    const deleteBtn = courseEntry.querySelector("button");
    deleteBtn.addEventListener("click", function() {
        courses.removeChild(courseEntry);
    });
    courses.appendChild(courseEntry);
}

// Overwrites form input with text
function displayForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    // Loads image
    var image = document.getElementById("image").files[0];
    const imageUrl = URL.createObjectURL(image);
    var imageText = "<img style=\"width: 50%; display:block; margin-left: auto; margin-right: auto;\" src=\"" + imageUrl + "\" >";

    const caption = document.getElementById("caption").value;
    const personalbackground = document.getElementById("personalbackground").value;
    const profbackground = document.getElementById("profbackground").value;
    const academicbackground = document.getElementById("academicbackground").value;
    const webdevbackground = document.getElementById("webdevbackground").value;
    const compplatform = document.getElementById("compplatform").value;
    const courses = document.getElementById("courses").value;
    const funny = document.getElementById("funny").value;
    const more = document.getElementById("more").value;

    document.getElementById("form").innerHTML = `
      <h1>${name}'s ${mascot}</h1>
      ${imageText}
      <p style="font-style: italic; text-align: center; margin-left: auto; margin-right: auto;">${caption}</p>
      <p>Personal Background: ${personalbackground}</p>
      <p>Academic Background: ${academicbackground}</p>
      <p>Background in Web Development: ${webdevbackground}</p>
      <p>Primary Computer Platform: ${compplatform}</p>
      <p>Courses I'm Taking: ${courses}</p>
      <p>Funny Thing: ${funny}</p>
      <p>Something Else: ${more}</p>
      <input type="reset" value="Reset" onclick="resetForm()">
    `;
}

// Returns page to its original state
function resetForm() {
    document.getElementById("form").innerHTML = formData;
}

// Event Listeners
addCourseBtn.addEventListener("click", addCourse);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    displayForm();
});