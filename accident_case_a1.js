const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[VehicleA] -> [<condition> Following (B) too closely?]
[<condition> Following (B) too closely?] --:> [<no> No*]
[<condition> Following (B) too closely?] -> [<yes> Yes*]
[<yes> Yes*] -> [<condition> (B) sudden deceleration?]
[VehicleB] -> [<condition> (B) sudden deceleration?]

[<condition> (B) sudden deceleration?] --:> [<no> *No*]
[<condition> (B) sudden deceleration?] -> [<yes> *Yes*]

[<no> No*] --:> [<ignore> No Accident]
[<no> *No*] --:> [<ignore> No Accident]
[<yes> *Yes*] -> [<accident> Rear-End Collision]
`;
console.log(nomnoml.renderSvg(src));