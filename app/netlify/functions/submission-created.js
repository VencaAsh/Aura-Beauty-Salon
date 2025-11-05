// Netlify funkce pro zpracování odeslání formuláře
exports.handler = async function(event, context) {
  return {
    statusCode: 303,
    headers: {
      Location: '/dekujeme',
    },
  };
};
