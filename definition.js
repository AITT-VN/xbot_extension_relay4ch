
Blockly.Blocks["xbot_relay4ch"] = {
  init: function () {
    this.jsonInit({
      colour: "#3F63AD",
      tooltip: "",
      message0: "relay 4 kênh cổng %1 %2 kênh %3",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "stat",
          options: [
            ["bật", "1"],
            ["tắt", "0"],
          ],
        },
        {
          type: "field_dropdown",
          name: "change",
          options: [
            ["1", "0"],
            ["2", "1"],
          ],
        },
        ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

// PYTHON


Blockly.Python["xbot_relay4ch"] = function (block) {
  var port = block.getFieldValue("port");
  var stat = block.getFieldValue("stat");
  var change = block.getFieldValue("change");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_relay4ch'] = "from relay4ch import *";
  var code = "relay4ch.set("+port+","+change+","+stat+")\n";
  return code;
};

