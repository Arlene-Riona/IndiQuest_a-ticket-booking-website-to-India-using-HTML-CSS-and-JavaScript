document.addEventListener('DOMContentLoaded', () => {
    // getting the query parameter
    const params = new URLSearchParams(window.location.search);
    const destination = params.get('destination');
    
    // to update the heading dynamically
    const headingElement = document.getElementById('bookTickets');
    if (destination) {
        headingElement.textContent = "Book Tickets to " + destination;
    } else {
        headingElement.textContent = "Book Tickets";
    }
});
