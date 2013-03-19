

// 1. Read the user's post out of the <textarea>
var getUserPost = function() {
    // what is going on here?
    // $ is the jQuery variable - it just says we're about to write some
    // jquery.
    // #new-post is the way to select this HTML element:
    //
    // <textarea id="new-post"></textarea>
    //
    // Once we have the element selected with $("#new-post"), we can do
    // anything we want with it - hide the element like this:
    //
    // $("#new-post").hide();
    //
    // Attach an element when someone hovers over it with hover()
    //
    // $("#new-post").hover( function() { /* Do something at hover */ }    );
    //
    // In this case we just want to get the *value* of the textarea - what the
    // user typed in. So we use val(). More here: http://api.jquery.com/val/
    return $("#new-post").val();
}
// We can test the above function by typing in the console:
//
// getUserPost()
//
// Or we can get the value with
//
// var post = getUserPost();
// console.log(post);

// 2. Add the new post to our list of posts.
var addPost = function(post) {
    var listItem = "<li>" + post + "</li>";
    $("#posts").append(listItem);
}

// 3. Make some code run when the user clicks "Post"
//
// In this case we want to make an event happen when the user clicks a button.
//
// There are two parts here:
// - select the button
// - attach a function that will run when we click it.
//
// The button HTML looks like this:
// <input id="submit" type="submit" value="Post" />
//
// We select the "submit" id with the following jquery snippet:
//
// $("#submit")

// Then attach a click event:
// $("#submit").click();
//
// Anything we put inside the click() will run when it is clicked. In this
// case, we are going to put *another* function inside the click() parentheses.
// Ive moved it onto multiple lines to make it clear.

// The below line just says "Run all this stuff once the page has loaded fully".
$(document).ready(function() {

$("#submit").click(

function() {
    var post = getUserPost(); // When the button is clicked, retrieve the post.
    addPost(post);            // Then add it to the page.
}

);

});
