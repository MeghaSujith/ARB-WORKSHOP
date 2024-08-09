const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("Token", (m) => {
  const lock = m.contract("Megha", [
    "0x2279897c52C1b3800A97806e7bc7a49fCeBe027a",
  ]);

  return { lock };
});
