
function addList() {
// Create an array with the list items
var items = [
    {
      imageSrc: "Assets/Cat-laptop.jpeg",
      text1: "Text 1",
      text2: "Text 2",
    },
    {
      imageSrc: "Assets/Cat-laptop.jpeg",
      text1: "Text 3",
      text2: "Text 4",
    },
    {
      imageSrc: "Assets/Cat-laptop.jpeg",
      text1: "Text 5",
      text2: "Text 6",
    },
  ];
  
  // Create a new unordered list element
  var ul = document.createElement("ul");
  
  // Add a class to the unordered list element
  ul.className = "my-list";
  
  // Get the reference to the body element
  var body = document.getElementsByTagName("body")[0];
  
  // Append the unordered list element to the body
  body.appendChild(ul);
  
  // Loop through the array and create new list items
  for (var i = 0; i < items.length; i++) {
    // Create a new list item
    var li = document.createElement("li");
  
    // Create an image element
    var img = document.createElement("img");
    img.src = items[i].imageSrc;
  
    // Create the first text element
    var text1 = document.createElement("p");
    text1.textContent = items[i].text1;
  
    // Create the second text element
    var text2 = document.createElement("p");
    text2.textContent = items[i].text2;
  
    // Append the image and text elements to the list item
    li.appendChild(img);
    li.appendChild(text1);
    li.appendChild(text2);
  
    // Append the new list item to the unordered list
    ul.appendChild(li);
  }
  
}

