const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById("bedrijf")
    const email = document.getElementById("email")
    const message = document.getElementById("bericht")
    console.log(name.value,email.value,message.value)

    await fetch('https://api.useplunk.com/v1/send', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk_925e66f49a87e8d5bf610cc9dd1de70e97ae5f63ba2a6c9b",
        },
        body: JSON.stringify({
            "to": email.value,
           "subject": "Contact form submitted",
            "body": "Thank you for contacting us. We will get back to you as soon as possible.",
        }),
    });
    window.alert("Message sent successfully!")
    document.getElementById("contact-form").reset();
});