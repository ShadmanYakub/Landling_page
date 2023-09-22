// Get the form element
const form = document.getElementById('myForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Display a greeting message
  const greeting = document.createElement('p');
  greeting.textContent = `Hello, ${firstName} ${lastName}! Welcome to our website.`;

  // Append the greeting message to the section
  const section = document.getElementById('greetingSection');
  section.innerHTML = ''; // Clear previous content
  section.appendChild(greeting);

  // Reset the form
  form.reset();
});