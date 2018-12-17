const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[Vehicle at intersection (GPS) ?]
[Vehicle at intersection (GPS) ?] -> [<no> No*]
[Vehicle at intersection (GPS) ?] -> [<yes> Yes*]

[<yes> Yes*] -> [No movement for 10 min (GPS) ?]

[No movement for 10 min (GPS) ?] -> [<no> *No*]
[No movement for 10 min (GPS) ?] -> [<yes> *Yes*]

[<no> No*] -> [<ignore> Ignore]
[<no> *No*] -> [<ignore> Ignore]

[<yes> *Yes*] -> [<accident> Accident]
`;

console.log(nomnoml.renderSvg(src));