const handleSubmit = (e) => {
  e.preventDefault();

  // PASTE YOUR KEYS HERE
  const SERVICE_ID = 'service_n75mta8'; // From Step 2
  const TEMPLATE_ID = 'template_5858j6e'; // From Step 3
  const PUBLIC_KEY = 'C1fzTwcAukT0rpBwk'; // From Step 4

  const templateParams = {
    from_name: formState.name,
    from_email: formState.email,
    subject: formState.subject,
    message: formState.message,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((response) => {
      alert('SUCCESS! Email sent to your inbox.');
      // This resets the form after sending
      setFormState({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      alert('FAILED... check console for error');
      console.log('FAILED...', err);
    });
};