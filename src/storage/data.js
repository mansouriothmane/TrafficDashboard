import { faker } from "@faker-js/faker";

export let fakeDataRows = [];
for (let i = 0; i < 100; i++) {
  fakeDataRows.push({
    sensorType: faker.helpers.arrayElement(["Caméra", "Radar", "Tube"]),
    location: `P${faker.datatype.number({ min: 1, max: 28 })}`,
    sens: faker.datatype.number({ min: 1, max: 2 }),
    date: faker.date.between(
      "2022-11-01T00:00:00.000Z",
      "2023-01-31T00:00:00.000Z"
    ),
    speed: faker.datatype.number({ min: 0, max: 130 }),
    vehiculeType: faker.helpers.arrayElement(["VL", "PL", "2R"]),
  });
}

export let fakeDataPerDay = [];
for (let i = 1; i < 32; i++) {
  fakeDataPerDay.push({
    day: i,
    in: faker.datatype.number({ min: 0, max: 50 }),
    out: faker.datatype.number({ min: 0, max: 50 }),
  });
}

let vehicleTypes = ["Voiture", "Camion", "Deux roues"];
export let fakeDataPerVehicle = [];
for (let i = 0; i < vehicleTypes.length; i++) {
  fakeDataPerVehicle.push({
    vehicleType: vehicleTypes[i],
    in: faker.datatype.number({ min: 0, max: 100 }),
    out: faker.datatype.number({ min: 0, max: 70 }),
  });
}

let sensorTypes = ["Caméra", "Radar", "Tube"];
export let fakeDataPerSensorType = [];
for (let i = 0; i < sensorTypes.length; i++) {
  fakeDataPerSensorType.push({
    sensorType: sensorTypes[i],
    in: faker.datatype.number({ min: 0, max: 100 }),
    out: faker.datatype.number({ min: 0, max: 70 }),
  });
}

let sensors = [
  "Radar TagMaster",
  "Radar Viking",
  "Tube Mixtra",
  "Tube Delta",
  "Caméra",
];

export let fakeDataPerSensor = [];
for (let i = 0; i < sensors.length; i++) {
  fakeDataPerSensor.push({
    sensor: sensors[i],
    count: faker.datatype.number({ min: 0, max: 200 }),
  });
}
