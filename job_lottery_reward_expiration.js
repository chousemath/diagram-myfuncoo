const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[ LotteryUsers with RewardEndsAt
  | Status is LotteryLoser
  | RewardEndsAt != 0
  | RewardEndsAt <= now
]
  
[LotteryUsers with RewardEndsAt] -> [<accident> Set RewardEndsAt to 0]
[<accident> Set RewardEndsAt to 0] -> [<accident> Set UpdatedAt to now]
[<accident> Set UpdatedAt to now] -> [<ignore> Wait 1 min]
[Wait 1 min] -> [<condition> Get LotteryUsers with RewardEndsAt]
[<condition> Get LotteryUsers with RewardEndsAt] -> [LotteryUsers with RewardEndsAt]
`;

console.log(nomnoml.renderSvg(src));