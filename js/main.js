// Room Data
const roomTypes = [
    {
        id: 1,
        name: 'Single Room',
        description: 'Comfortable private room for individual occupancy',
        price: 5000,
        amenities: [
            'Personal Study Table',
            'Wardrobe',
            'Individual Electrical Points',
            'Wi-Fi Access'
        ],
        image: 'images/rooms/single-room.jpg'
    },
    {
        id: 2,
        name: 'Shared Room',
        description: 'Spacious room designed for two people',
        price: 3500,
        amenities: [
            'Bunk Beds',
            'Shared Study Area',
            'Common Wardrobe',
            'Wi-Fi Access'
        ],
        image: 'images/rooms/shared-room.jpg'
    },
    {
        id: 3,
        name: 'Deluxe Single Room',
        description: 'Premium single room with extra amenities',
        price: 7000,
        amenities: [
            'Attached Bathroom',
            'Air Conditioning',
            'Work Desk',
            'Mini Refrigerator'
        ],
        image: 'images/rooms/deluxe-room.jpg'
    }
];

// Testimonials Data
const testimonials = [
    {
        name: 'Rahul Singh',
        occupation: 'Software Engineer',
        review: 'The best PG I have ever stayed in. Great food, excellent facilities, and very friendly staff.',
        rating: 5
    },
    {
        name: 'Priya Sharma',
        occupation: 'Medical Student',
        review: 'Perfect accommodation for students. Clean rooms, timely meals, and a great study environment.',
        rating: 4.5
    }
];

// Booking Form Validation
function validateBookingForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const roomType = document.getElementById('room-type').value;

    // Basic validation
    if (name.trim() === '') {
        alert('Please enter your name');
        return false;
    }

    if (email.trim() === '' || !email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }

    if (phone.trim() === '' || phone.length < 10) {
        alert('Please enter a valid phone number');
        return false;
    }

    if (roomType === '') {
        alert('Please select a room type');
        return false;
    }

    // If all validations pass
    alert('Booking request submitted successfully!');
    return true;
}

// Dynamically populate rooms
function populateRooms() {
    const roomsContainer = document.getElementById('rooms-container');
    if (roomsContainer) {
        roomTypes.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.classList.add('room-card');
            roomCard.innerHTML = `
                <img src="${room.image}" alt="${room.name}">
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <p>Price: ₹${room.price}/month</p>
                <h4>Amenities:</h4>
                <ul>
                    ${room.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
                </ul>
            `;
            roomsContainer.appendChild(roomCard);
        });
    }
}

// Dynamically populate testimonials
function populateTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.classList.add('testimonial-card');
            testimonialCard.innerHTML = `
                <p>"${testimonial.review}"</p>
                <h4>${testimonial.name}</h4>
                <p>${testimonial.occupation}</p>
                <div class="rating">
                    ${'★'.repeat(Math.floor(testimonial.rating))}
                    ${testimonial.rating % 1 !== 0 ? '½' : ''}
                </div>
            `;
            testimonialsContainer.appendChild(testimonialCard);
        });
    }
}

// Initialize page-specific scripts
document.addEventListener('DOMContentLoaded', () => {
    // Room page population
    populateRooms();

    // Testimonials page population
    populateTestimonials();

    // Booking form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateBookingForm();
        });
    }
});