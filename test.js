// Require the anode bridge
//
var bridge = require("bridge");

// Require custom java module
//
var toast = bridge.load("net.gpii.AndroidToastExampleImpl", this);

// Call a java method
//
toast.showToast();
