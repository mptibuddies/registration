    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        icNo: document.getElementById('icNo').value
        gender: document.getElementById('gender').value,
        mobileNo: document.getElementById('mobileNo').value,
        address: document.getElementById('address').value
        passportNo: document.getElementById('passportNo').value,
        passportExpiry: document.getElementById('passportExpiry').value
        emergencyName: document.getElementById('emergencyName').value,
        emergencyMobile: document.getElementById('emergencyMobile').value,
        emergencyRelationship: document.getElementById('emergencyRelationship').value
      };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby1h5hHB_N4y-FkFjX94xa1w5WT4W9khld5NasOWj42DoCyWXgS0QQM90CdRwV_HM9K/exec', {
          method: 'POST',
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          form.reset();
          responseMessage.textContent = 'Thank you! Your message has been sent.';
        } else {
          responseMessage.textContent = 'Error submitting the form. Please try again.';
        }
      } catch (error) {
        responseMessage.textContent = 'An error occurred. Please try again.';
      }
    });