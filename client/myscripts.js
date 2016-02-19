
    var images = {folder:"images/content/", num:1, ext:".jpg"};
function changeImage() {
    var image = document.getElementById('myImage');
    images.num++;
    if (images.num > 3) {
        images.num = 1;
    }
    image.src = images.folder+images.num+images.ext;

}

var uniqueID = (function() {
   var id = 0; // This is the private persistent value
   // The outer function returns a nested function that has access
   // to the persistent value.  It is this nested function we're storing
   // in the variable uniqueID above.
   return function() {return id++;};  // Return and increment
})(); // Invoke the outer function after defining it.
