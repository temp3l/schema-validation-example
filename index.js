const Ajv = require('ajv'); // yarn add ajv
const ajv = new Ajv({allErrors: true});  // https://github.com/epoberezkin/ajv



const sampleSchema = {
  type: 'object',
  title: 'Simple Schema',
  description: 'checking types,formats and required fields',
  $comment: 'Contract-Testing is also Documentation and Specification!',


  properties: {
    firstName: { type: 'string', minLength: 3 },
    birthday:  { type: 'string', format: 'date' },

    address:  { type: 'object', properties: {
      postal: { type: 'number' },
      street: { type: 'string', pattern: "^[A-Z]*$" }
    }},

    addresses: { type: 'array', items: { $ref: '#/properties/address' } }
  },
  required: [ 'firstName', 'birthday', 'address', 'addresses' ],

}



const samplePayload = {
  birthday: 'invalid',
  address: { postal: "invalid", street: 'invalid' },
  addresses: [ { postal: 1234, street: 'VALID'} ]
}



const valid = ajv.validate(sampleSchema, samplePayload);

if (!valid) console.log(ajv.errors);
