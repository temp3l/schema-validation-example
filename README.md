# schema-validation-example
ajv schema validation

# Usage in Frontend

- it will throw 4 validation errors
- the errors need to be mapped onto form fields 
  - mapping-errors: 
  - "dataPath" tells location in the json-tree and name of form field
  - "schemaPath": can be ignored for now
  - "message": can be customized - see: https://github.com/epoberezkin/ajv-i18n


```js
[
  {
    keyword: 'required',
    dataPath: '',
    schemaPath: '#/required',
    params: { missingProperty: 'firstName' },
    message: "should have required property 'firstName'"
  },
  {
    keyword: 'format',
    dataPath: '.birthday',
    schemaPath: '#/properties/birthday/format',
    params: { format: 'date' },
    message: 'should match format "date"'
  },
  {
    keyword: 'type',
    dataPath: '.address.postal',
    schemaPath: '#/properties/address/properties/postal/type',
    params: { type: 'number' },
    message: 'should be number'
  },
  {
    keyword: 'pattern',
    dataPath: '.address.street',
    schemaPath: '#/properties/address/properties/street/pattern',
    params: { pattern: '^[A-Z]*$' },
    message: 'should match pattern "^[A-Z]*$"'
  }
]
```
