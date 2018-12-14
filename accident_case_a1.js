const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.yes}
${styles._.no}

[VehicleA] -> [Following (B) too closely?]
[Following (B) too closely?] --:> [<no> No*]
[Following (B) too closely?] -> [<yes> Yes*]
[<yes> Yes*] -> [(B) sudden deceleration?]
[VehicleB] -> [(B) sudden deceleration?]

[(B) sudden deceleration?] --:> [<no> *No*]
[(B) sudden deceleration?] -> [<yes> *Yes*]

[<no> No*] --:> [<ignore> No Accident]
[<no> *No*] --:> [<ignore> No Accident]
[<yes> *Yes*] -> [<accident> Accident]
`;
console.log(nomnoml.renderSvg(src));