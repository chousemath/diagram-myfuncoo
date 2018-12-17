const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[ Active CouponCategoryRewards
  | Status is active
  | EndsAt <= now
  ]
  
[Active CouponCategoryRewards] -> [<accident> Set Status to inactive]
[<accident> Set Status to inactive] -> [<accident> Set UpdatedAt to now]
[<accident> Set UpdatedAt to now] -> [<ignore> Wait 1 min]
[Wait 1 min] -> [<condition> Get Active CouponCategoryRewards]
[<condition> Get Active CouponCategoryRewards] -> [Active CouponCategoryRewards]
`;

console.log(nomnoml.renderSvg(src));