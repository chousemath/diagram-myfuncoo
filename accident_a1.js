const nomnoml = require('nomnoml');

const src = `
[<choice> Vel > 15mph] -> [<abstract> No*]
[<choice> Vel > 15mph] -> [<abstract> Yes*]
[<abstract> No*] -> [Ignore]
[<abstract> Yes*] ->[<choice> Accel > 4G]
[<choice> Accel > 4G] -> [<abstract> No**]
[<choice> Accel > 4G] -> [<abstract> Yes**]
[<abstract> No**] -> [Ignore]
[<abstract> Yes**] -> [Accident]
`;

console.log(nomnoml.renderSvg(src));