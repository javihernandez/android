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
    gpii = fluid.registerNamespace("gpii");

fluid.require("./AcceptanceTests_include", require);

var testDefs = [
    {
        name: "Testing os_android NP set using a set of basic terms",
        token: "os_android",
        settingsHandlers: {
            "gpii.androidSettings": {
                "com.android.settings.system": [
                    {
                        "settings": {
                            "dim_screen": true,
                            "haptic_feedback_enabled": true,
                            "accelerometer_rotation": false,
                            "user_rotation": 2,
                            "screen_off_timeout": 10000
                        }
                    }
                ]
            },
            "gpii.androidAudioManager": {
                "com.android.audioManager": [
                    {
                        "settings": {
                            "STREAM_SYSTEM": 0.5
                        }
                    }
                ]
            },
            "gpii.androidPersistentConfiguration": {
                "com.android.persistentConfiguration": [
                    {
                        "settings": {
                            "fontScale": 1.5,
                            "locale": "en"
                        }
                    }
                ]
            }
        }
    }
];

gpii.acceptanceTesting.android.runTests("os_android", testDefs);
