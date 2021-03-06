const styles = require('./styles');
const nomnoml = require('nomnoml');

const src = `
${styles._.header}

${styles._.accident}
${styles._.ignore}
${styles._.yes}
${styles._.no}

[<choice> Vel >= 0] --:> [<no> No*]
[<choice> Vel >= 0] -> [<yes> Yes*]
[<no> No*] --:> [<ignore> Ignore]
[<yes> Yes*] -> [<choice> Accel > 4]
[<choice> Accel > 4] --:> [<no> *No*]
[<choice> Accel > 4] -> [<yes> *Yes*]
[<no> *No*] --:> [<ignore> Ignore]
[<yes> *Yes*] -> [<accident> Start Accident Protocol]

[SuddenStop(1)] --:> [<choice> Accel > 4]

[PhoneDrop(3)] --:> [<choice> Accel > 4]

[<accident> Start Accident Protocol] -> [SnapshotOBD]
[<accident> Start Accident Protocol] -> [SnapshotOtherSensors]
[<accident> Start Accident Protocol] -> [SnapshotBlackBox]
[SnapshotOBD] -> [Send to 119]
[SnapshotOtherSensors] -> [Send to 119]
[SnapshotBlackBox] -> [Send to 119]
`;

/*
[ Definitions
  | Vel(km/h): vehicle (veh) velocity (vel) measured by the OBD (mOBD)
  | Accel(G): veh acceleration (accel) mOBD
  | SuddenStop(G): veh accel from driver-initiated stop mOBD
  | PhoneDrop(G): accel from dropped smartphone measure by smartphone
  | SnapshotOBD: last 15s of OBD data
  | SnapshotOtherSensors: last 15s of other sensor data (e.g. sound)
  | SnapshotBlackBox: last 15s of blackbox data
]
*/

// console.log(src);
console.log(nomnoml.renderSvg(src));