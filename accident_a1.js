const nomnoml = require('nomnoml');

const src = `
#.yes: fill=#ceffcf visual=ellipse
#.no: fill=#ffc5c5 visual=ellipse

[<choice> Vel > 15mph] -> [<no> No*]
[<choice> Vel > 15mph] -> [<yes> Yes*]
[<no> No*] --:> [Ignore]
[<yes> Yes*] -> [<choice> Accel > 4G]
[<choice> Accel > 4G] -> [<no> No**]
[<choice> Accel > 4G] -> [<yes> Yes**]
[<no> No**] --:> [Ignore]
[<yes> Yes**] -> [Accident]

[Sudden Stop (1G)] --:> [<choice> Accel > 4G]
[Smartphone Drop (3G)] --:> [<choice> Accel > 4G]
`;

console.log(nomnoml.renderSvg(src));