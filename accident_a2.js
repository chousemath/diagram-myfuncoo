const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.yes}
${styles._.no}

[ Gyroscope
  | 1. Device is initialized (powered on)
  | 2. Baseline XYZ orientation is set
  | 3. XYZ orientation sensor are now waiting for any/all changes
]

[Gyroscope] -> [ΔGyroX]
[Gyroscope] -> [ΔGyroY]
[Gyroscope] -> [ΔGyroZ]

[ΔGyroX] -> [<choice> ΔGyroX >= Limit]
[<choice> ΔGyroX >= Limit] --:> [<no> No*]
[<choice> ΔGyroX >= Limit] -> [<yes> Yes*]

[ΔGyroY] -> [<choice> ΔGyroY >= Limit]
[<choice> ΔGyroY >= Limit] --:> [<no> *No*]
[<choice> ΔGyroY >= Limit] -> [<yes> *Yes*]

[ΔGyroZ] -> [<choice> ΔGyroZ >= Limit]
[<choice> ΔGyroZ >= Limit] --:> [<no> *No**]
[<choice> ΔGyroZ >= Limit] -> [<yes> *Yes**]

[<no> No*] --:> [<ignore> Ignore]
[<no> *No*] --:> [<ignore> Ignore]
[<no> *No**] --:> [<ignore> Ignore]
[<yes> Yes*] -> [<accident> Start Accident Protocol]
[<yes> *Yes*] -> [<accident> Start Accident Protocol]
[<yes> *Yes**] -> [<accident> Start Accident Protocol]

[<accident> Start Accident Protocol] -> [SnapshotOBD]
[<accident> Start Accident Protocol] -> [SnapshotOtherSensors]
[<accident> Start Accident Protocol] -> [SnapshotBlackBox]
[SnapshotOBD] -> [Send to 119]
[SnapshotOtherSensors] -> [Send to 119]
[SnapshotBlackBox] -> [Send to 119]
`;

/*
[ Definitions
  | GyroX: vehicle's orientation along the x-axis
  | GyroY: vehicle's orientation along the y-axis
  | GyroZ: vehicle's orientation along the z-axis
]
*/

// console.log(src);
console.log(nomnoml.renderSvg(src));