const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[ Active Coupons
  | Status is active
  | EndsAt != 0
  | EndsAt <= now
  ]
  
[Active Coupons] -> [<accident> Set Status to inactive]
[<accident> Set Status to inactive] -> [<accident> Set EndsAt to 0]
[<accident> Set EndsAt to 0] -> [<accident> Set UpdatedAt to now]
[<accident> Set UpdatedAt to now] -> [<ignore> Wait 1 min]
[Wait 1 min] -> [<condition> Get active coupons]
[<condition> Get active coupons] -> [Active Coupons]
`;

console.log(nomnoml.renderSvg(src));