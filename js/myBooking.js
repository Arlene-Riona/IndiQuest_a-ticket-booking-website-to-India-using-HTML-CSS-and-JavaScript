function loadBookingHistory() {
    const bookingHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    const tableBody = document.getElementById("bookingHistory");

    if (bookingHistory.length === 0) {
        document.getElementById("information").textContent = "You have not made any bookings at the moment!";
        return;
    }

    document.getElementById("information").textContent = "Here are your bookings:";

    tableBody.innerHTML = ""; // to clear existing rows

    bookingHistory.forEach((booking, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${booking.name}</td>
            <td>${booking.destination}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>${booking.adults}</td>
            <td>${booking.children}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load booking history on page load
document.addEventListener("DOMContentLoaded", loadBookingHistory);
