const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[VehicleB] -> [<condition> Does not see (A) coming?]
[<condition> Does not see (A) coming?] --:> [<no> *No*]
[<condition> Does not see (A) coming?] -> [<yes> *Yes*]

[<yes> *Yes*] -> [<condition> (A) ran intersection red light?]

[VehicleA] -> [<condition> (A) ran intersection red light?]
[<condition> (A) ran intersection red light?] --:> [<no> No*]
[<condition> (A) ran intersection red light?] -> [<yes> Yes*]

[<no> No*] --:> [<ignore> No Accident]
[<no> *No*] --:> [<ignore> No Accident]
[<yes> Yes*] -> [<accident> T-Bone Collision]
`;
console.log(nomnoml.renderSvg(src));