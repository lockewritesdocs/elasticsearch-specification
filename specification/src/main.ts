import ApiSpecification = require("./api-specification");
const _: _.LoDashStatic = require('lodash');

console.log("start");

const specification = ApiSpecification.loadWithValidation();

if (specification.endpoint_errors.length > 0)
  console.error("The specification contains the following endpoint mapping errors:");

for (let e of specification.endpoint_errors) console.error("  - " + e);

if (specification.domain_errors.length +  specification.endpoint_errors.length == 0)
  console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

