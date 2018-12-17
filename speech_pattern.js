const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[App generates a story] -> [User reads the story when sober]
[User reads the story when sober] -> [App learns user's speech pattern]
[App generates a similar story] -> [User reads the story when drunk]
[App learns user's speech pattern] -> [<condition> Matches user's speech pattern?]
[User reads the story when drunk] -> [<condition> Matches user's speech pattern?]

[<condition> Matches user's speech pattern?] -> [<no> No*]
[<condition> Matches user's speech pattern?] -> [<yes> Yes*]

[<no> No*] -> [<accident> Prevent user from starting car]
[<no> Yes*] -> [<ignore> Ignore]
`;

console.log(nomnoml.renderSvg(src));