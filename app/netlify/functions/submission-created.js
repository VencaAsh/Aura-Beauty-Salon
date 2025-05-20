// Netlify funkce pro zpracování odeslání formuláře
exports.handler = async function(event, context) {
  console.log('Formulář byl odeslán!');
  console.log('Data formuláře:', JSON.parse(event.body).payload);
  
  return {
    statusCode: 303,
    headers: {
      Location: '/dekujeme',
    },
  };
};
