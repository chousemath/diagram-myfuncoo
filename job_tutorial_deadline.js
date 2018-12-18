const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[ User with unfinished tutorial
  | TutorialDeadline != 0
  | TutorialDeadline <= now
]
  
[User with unfinished tutorial] -> [<accident> Set TutorialDeadline to 9999999999]
[<accident> Set TutorialDeadline to 9999999999] -> [<accident> Set UpdatedAt to now]
[<accident> Set UpdatedAt to now] -> [<ignore> Wait 1 min]
[Wait 1 min] -> [<condition> Get User with unfinished tutorial]
[<condition> Get User with unfinished tutorial] -> [User with unfinished tutorial]
`;

console.log(nomnoml.renderSvg(src));