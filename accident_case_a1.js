const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.yes}
${styles._.no}

[VehicleA] -> [<choice> Following (B) too closely?]
[<choice> Following (B) too closely?] --:> [<no> No*]
[<choice> Following (B) too closely?] -> [<yes> Yes*]
[<yes> Yes*] -> [<choice> (B) sudden deceleration?]
[VehicleB] -> [<choice> (B) sudden deceleration?]

[<choice> (B) sudden deceleration?] --:> [<no> *No*]
[<choice> (B) sudden deceleration?] -> [<yes> *Yes*]

[<no> No*] --:> [<ignore> No Accident]
[<no> *No*] --:> [<ignore> No Accident]
[<yes> *Yes*] -> [<accident> Accident]
`;
console.log(nomnoml.renderSvg(src));