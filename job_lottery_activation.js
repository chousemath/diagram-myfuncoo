const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[ Pending Lotteries
  | Status is pending
  | StartsAt <= now
  ]
  
[Pending Lotteries] -> [<accident> Set Status to active]
[<accident> Set Status to active] -> [<accident> Set UpdatedAt to now]
[<accident> Set UpdatedAt to now] -> [<ignore> Wait 1 min]
[Wait 1 min] -> [<condition> Get pending lotteries]
[<condition> Get pending lotteries] -> [Pending Lotteries]
`;

console.log(nomnoml.renderSvg(src));