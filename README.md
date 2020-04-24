# schema-validation-example
ajv schema validation

it will throw validation errors:

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
