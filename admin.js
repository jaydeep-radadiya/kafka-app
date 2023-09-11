const { kafka } = require('./client');

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin connected successfully");

  console.log('Creating topic: [rider-updates]');
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log('Topic [rider-updates] created successfully');

  console.log('Admin disconnecting...');
  admin.disconnect();
}

init();