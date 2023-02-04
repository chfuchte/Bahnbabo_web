function sendContactMessage() {
    const cc = document.querySelector('#email_input_contact').value;
    const content = document.querySelector('#content_input_contact').value;
    const email = `bahnbabo@gmail.com`;
    if (cc && content) {
        document.querySelector('#error_contact').style.display = 'none';
        document.querySelector('#error_contact').innerText = '';
        window.location.href = `mailto:${email}?cc=${cc}&body=${content}&subject=Kontaktaufnahme via ${window.location.hostname}`
    } else {
        document.querySelector('#error_contact').style.display = 'block';
        document.querySelector('#error_contact').innerText = 'Ungültige Eingaben!';
    }
}