// 1. Make some code run when the user clicks "Post"
// 2. Read the user's post out of the <textarea>
var getUserPost = function() {
    return $("#new-post").val();
}

// 3. Add the new post to our list of posts.
var addPost = function(post) {
    
    var listItem = "<li>" + post + "</li>";
    $("#posts").append(listItem);
}

addPost("example post");
addPost("second example post");