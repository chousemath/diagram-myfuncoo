const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.condition}
${styles._.yes}
${styles._.no}

[<condition> Car Accident?] -> [<yes> yes*]
[<condition> Car Accident?] -> [<no> no*]

[<no> no*] -> [<no> End]

[<yes> yes*] -> [Notify Insurance Company]
[Notify Insurance Company] -> [Send Insurance Agent]
[Send Insurance Agent] -> [<accident> Take Car Photo]
[<accident> Take Car Photo] -> [R&D Neural Net]
[R&D Neural Net] -> [<condition> Successful Classification?]

[<condition> Successful Classification?] -> [<yes> yes]
[<condition> Successful Classification?] -> [<no> no]

[<yes> yes] -> [Car-Specific Damage Assessment]
[<no> no] -> [Generic Damage Assessment]

[Car-Specific Damage Assessment] -> [Detailed Assessment & Estimate]
[Generic Damage Assessment] -> [General Assessment & Estimate]

[Detailed Assessment & Estimate] -> [<accident> Send Report To Customer]
[General Assessment & Estimate] -> [<accident> Send Report To Customer]
`;

console.log(nomnoml.renderSvg(src));