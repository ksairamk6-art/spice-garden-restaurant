
function showMessage() {
    alert("Thank you for visiting Spice Garden! Please contact us to know more.");
}
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const message = document.getElementById("orderMessage").value;

    const restaurantNumber = "919876543210";

    const text = `Hello Spice Garden!
Name: ${name}
Phone: ${phone}
Order: ${message}`;

    const whatsappURL =
        "https://wa.me/" + restaurantNumber +
        "?text=" + encodeURIComponent(text);

    window.open(whatsappURL, "_blank");
})