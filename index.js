document.querySelectorAll('.edit').forEach(button => {
    button.addEventListener('click', function() {
        let statusDiv = this.previousElementSibling; // Find the status div
        let currentStatus = statusDiv.textContent.split(': ')[1]; // Get the current status (e.g. "Free")

        // Toggle the status between "Free" and "Taken"
        if (currentStatus === "Free") {
            statusDiv.textContent = "Status: Taken";
        } else if (currentStatus === "Taken") {
            statusDiv.textContent = "Status: Free";
        }
    });
});
