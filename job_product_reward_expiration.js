const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[ Active ProductRewards
  | Status is Active
  | EndsAt <= now
]
  
[Active ProductRewards] -> [<accident> Set Status to Inactive]
[<accident> Set Status to Inactive] -> [<accident> Set UpdatedAt to now]
[<accident> Set UpdatedAt to now] -> [<ignore> Wait 1 min]
[Wait 1 min] -> [<condition> Get Active ProductRewards]
[<condition> Get Active ProductRewards] -> [Active ProductRewards]
`;

console.log(nomnoml.renderSvg(src));