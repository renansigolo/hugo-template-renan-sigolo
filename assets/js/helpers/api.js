/**
 * @typedef GenericApiData
 * @property {object} formData - The data to send
 */

/**
 * @typedef FormData
 * @property {string} name - The form field name
 * @property {string} email - The form field email
 * @property {string} message - The form field message
 */

/**
 * @typedef ApiResponse
 * @property {boolean} success - The response status
 * @property {string} message - The response message
 */

/**
 * Abstract a POST method implementation:
 * @param {string} url A string containing the URL to which the request is sent.
 * @param {FormData|GenericApiData} data An object containing data to be sent to the server.
 * @returns {Promise<ApiResponse|Error>} A Promise object that is resolved with the data from the response.
 */
export const post = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
