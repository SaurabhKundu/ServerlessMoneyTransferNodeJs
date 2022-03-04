
/**
 * AWS Lambda handler
 * 
 * @param {event} event 
 * @param {context} context 
 */
exports.handler = async function(event, context) {

  console.log('## ENVIRONMENT VARIABLES: ' + serialize(process.env))
  console.log('## CONTEXT: ' + serialize(context))
  console.log('## EVENT: ' + serialize(event))
  
}

var serialize = function(object) {
  return JSON.stringify(object, null, 2)
}