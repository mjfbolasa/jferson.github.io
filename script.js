document.getElementById("contactButton").addEventListener("click", function() {
    alert("Thank you for your interest! You can reach me at mjfbolasa@tip.edu.ph");
});

document.getElementById("submitComment").addEventListener("click", function() {
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentsList = document.getElementById("commentsList");
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        
        // Clear the input field after submission
        commentInput.value = '';
    } else {
        alert("Please enter a comment before submitting.");
    }
});