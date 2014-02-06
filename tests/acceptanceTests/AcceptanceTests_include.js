/*
 *
 * GPII Acceptance Testing
 *
 * Copyright 2014 Emergya
 *
 * Licensed under the New BSD license. You may not use this file except in
 * compliance with this License.
 *
 * You may obtain a copy of the License at
 * https://github.com/gpii/universal/LICENSE.txt
 * */

"use strict";
var fluid = require("universal"),
    path = require("path"),
    kettle = fluid.registerNamespace("kettle"),
    gpii = fluid.registerNamespace("gpii");

fluid.registerNamespace("gpii.acceptanceTesting.android");

fluid.require("../../node_modules/activitymanager", require);
fluid.require("../../node_modules/androidSettings", require);
fluid.require("../../node_modules/audioManager", require);
fluid.require("../../node_modules/persistentConfiguration", require);

fluid.require("universal/tests/AcceptanceTests", require);

gpii.acceptanceTesting.android.runTests = function (configFile, testDefs) {
    var gpiiConfig = {
       nodeEnv: configFile,
       configPath: path.resolve(__dirname, "./configs")
    };
    fluid.each(testDefs, function (testDef) {
        testDef.config = gpiiConfig;
    });
    testDefs = gpii.acceptanceTesting.buildTests(testDefs);
    module.exports = kettle.tests.bootstrap(testDefs);
}
