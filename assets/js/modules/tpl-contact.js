import { api } from '../helpers/api'

/**
 * Send form data to the cloud function
 * @param {SubmitEvent} event
 */
const sendForm = async (event) => {
  // Prevent the default behavior
  event.preventDefault()

  // Set Loading state

  // Select the form values
  const data = {
    email: 'renan.sigolo@gmail.com',
  }

  // Send the data to the cloud function
  try {
    const message = await api.post(
      'https://us-central1-renan-sigolo-website.cloudfunctions.net/sendEmail',
      data
    )
    console.info('🚀 ~ sendForm ~ response', message)
  } catch (err) {
    console.error(err)
  }
}

const sendEmail = document.querySelector('[data-js-send-email]')
sendEmail.addEventListener('click', (event) => sendForm(event))
