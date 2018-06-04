var pxtTargetBundle = {
  "id": "microbit",
  "nickname": "microbit",
  "name": "makecode.microbit.org",
  "title": "Microsoft MakeCode for micro:bit",
  "description": "A Blocks / JavaScript code editor for the micro:bit powered by Microsoft MakeCode.",
  "corepkg": "core",
  "bundleddirs": [
    "libs/core",
    "libs/radio",
    "libs/devices",
    "libs/bluetooth",
    "libs/minode",
    "libs/pxt-magibit"
  ],
  "cloud": {
    "workspace": false,
    "packages": true,
    "sharing": true,
    "publishing": true,
    "preferredPackages": [
      "Microsoft/pxt-neopixel"
    ],
    "githubPackages": true
  },
  "compile": {
    "isNative": false,
    "hasHex": true,
    "deployDrives": "(MICROBIT|MBED)",
    "driveName": "MICROBIT",
    "hexMimeType": "application/x-microbit-hex",
    "openocdScript": "source [find interface/cmsis-dap.cfg]; source [find target/nrf51.cfg]",
    "flashUsableEnd": 242688,
    "flashEnd": 242688,
    "flashCodeAlign": 1024,
    "floatingPoint": true,
    "taggedInts": true,
    "patches": {
      "0.0.0 - 1.0.0": [
        {
          "type": "package",
          "map": {
            "microbit": "core",
            "microbit-bluetooth": "bluetooth",
            "microbit-radio": "radio",
            "microbit-devices": "devices",
            "microbit-led": "",
            "microbit-music": "",
            "microbit-game": "",
            "microbit-pins": "",
            "microbit-serial": ""
          }
        },
        {
          "type": "missingPackage",
          "map": {
            "radio\\s*\\.": "radio",
            "bluetooth\\s*\\.": "bluetooth",
            "devices\\s*\\.": "devices"
          }
        },
        {
          "type": "api",
          "map": {
            "bluetooth\\s*\\.uartRead\\s*\\((.*?)\\)": "bluetooth.uartReadUntil($1)",
            "bluetooth\\s*\\.uartWrite\\s*\\((.*?)\\)": "bluetooth.uartWriteUntil($1)",
            "input\\s*\\.calibrate\\s*\\(": "input.calibrateCompass(",
            "radio\\s*\\.onDataPacketReceived\\(\\s*\\(\\{\\s*receivedNumber\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedNumber(function (receivedNumber) {",
            "radio\\s*\\.onDataPacketReceived\\(\\s*\\(\\{\\s*receivedString: name, receivedNumber: value\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedValue(function (name, value) {",
            "radio\\s*\\.onDataPacketReceived\\(\\s*\\(\\{\\s*receivedString\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedString(function (receivedString) {"
          }
        },
        {
          "type": "blockId",
          "map": {
            "device_get_acceleration": "device_acceleration"
          }
        },
        {
          "type": "blockValue",
          "map": {
            "device_print_message.message": "text"
          }
        }
      ]
    },
    "hidSelectors": [
      {
        "usagePage": "0xFF00",
        "usageId": "0x0001",
        "vid": "0x0d28",
        "pid": "0x0204"
      }
    ],
    "jsRefCounting": true,
    "nativeType": "thumb",
    "needsUnboxing": true,
    "vtableShift": 2,
    "noSourceInFlash": true
  },
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": true,
    "listsBlocks": true,
    "functionBlocks": true,
    "onStartColor": "#0078D7",
    "onStartNamespace": "basic",
    "onStartWeight": 54
  },
  "simulator": {
    "autoRun": true,
    "enableTrace": true,
    "streams": false,
    "aspectRatio": 1.22,
    "parts": true,
    "instructions": true,
    "partsAspectRatio": 0.69,
    "boardDefinition": {
      "visual": "microbit",
      "gpioPinBlocks": [
        [
          "P0"
        ],
        [
          "P1"
        ],
        [
          "P2"
        ],
        [
          "P3"
        ],
        [
          "P4",
          "P5",
          "P6",
          "P7"
        ],
        [
          "P8",
          "P9",
          "P10",
          "P11",
          "P12"
        ],
        [
          "P16"
        ]
      ],
      "gpioPinMap": {
        "P0": "P0",
        "P1": "P1",
        "P2": "P2",
        "P3": "P3",
        "P4": "P4",
        "P5": "P5",
        "P6": "P6",
        "P7": "P7",
        "P8": "P8",
        "P9": "P9",
        "P10": "P10",
        "P11": "P11",
        "P12": "P12",
        "P13": "P13",
        "P14": "P14",
        "P15": "P15",
        "P16": "P16",
        "P19": "P19",
        "P20": "P20"
      },
      "spiPins": {
        "MOSI": "P15",
        "MISO": "P14",
        "SCK": "P13"
      },
      "i2cPins": {
        "SDA": "P20",
        "SCL": "P19"
      },
      "analogInPins": [
        "P0",
        "P1",
        "P2",
        "P3",
        "P10"
      ],
      "groundPins": [
        "GND"
      ],
      "threeVoltPins": [
        "+3v3"
      ],
      "attachPowerOnRight": true,
      "onboardComponents": [
        "accelerometer",
        "buttonpair",
        "ledmatrix",
        "speaker",
        "bluetooth",
        "thermometer",
        "compass"
      ],
      "useCrocClips": true,
      "marginWhenBreadboarding": [
        0,
        0,
        80,
        0
      ]
    }
  },
  "compileService": {
    "yottaTarget": "bbc-microbit-classic-gcc",
    "yottaCorePackage": "microbit",
    "githubCorePackage": "lancaster-university/microbit",
    "gittag": "v2.0.0-rc11",
    "serviceId": "microbit",
    "yottaBinary": "pxt-microbit-app-combined.hex"
  },
  "serial": {
    "nameFilter": "^(mbed Serial Port|DAPLink CMSIS-DAP)",
    "log": true,
    "useEditor": true,
    "editorTheme": {
      "graphBackground": "#d9d9d9",
      "lineColors": [
        "#6633cc",
        "#3891A6",
        "#3454D1",
        "#EF767A",
        "#F46197",
        "#107C10"
      ]
    },
    "chromeExtension": "hjcflblhjoglmjjkecamiegdigfkgeni",
    "vendorId": "0x0d28",
    "productId": "0x0204",
    "rawHID": true
  },
  "ignoreDocsErrors": true,
  "appTheme": {
    "accentColor": "#5C005C",
    "logoUrl": "/./",
    "logo": "docs/static/logo.portrait.white.svg",
    "docsLogo": "docs/static/logo.square.white.svg",
    "portraitLogo": "docs/static/logo.square.white.svg",
    "footerLogo": "docs/static/logo.portrait.black.svg",
    "cardLogo": "docs/static/icons/apple-touch-icon.png",
    "appLogo": "docs/static/icons/apple-touch-icon.png",
    "organization": "Microsoft MakeCode",
    "organizationUrl": "https://makecode.com/",
    "organizationLogo": "docs/static/Microsoft-logo_rgb_c-gray-square.png",
    "organizationWideLogo": "docs/static/Microsoft-logo_rgb_c-white.png",
    "homeScreenHero": "docs/static/hero.png",
    "homeUrl": "/./",
    "embedUrl": "https://makecode.microbit.org/",
    "shareUrl": "https://makecode.microbit.org/",
    "privacyUrl": "https://makecode.com/privacy",
    "termsOfUseUrl": "https://makecode.com/termsofuse",
    "githubUrl": "https://github.com/Microsoft/pxt-microbit",
    "boardName": "micro:bit",
    "driveDisplayName": "MICROBIT",
    "feedbackUrl": "https://www.research.net/r/MCmicro",
    "appStoreID": "1092687276",
    "mobileSafariDownloadProtocol": "microbithex://?data",
    "extendEditor": true,
    "extendFieldEditors": true,
    "docMenu": [
      {
        "name": "Support",
        "path": "https://support.microbit.org/"
      },
      {
        "name": "Reference",
        "path": "/./docs/reference"
      },
      {
        "name": "Blocks",
        "path": "/./docs/blocks"
      },
      {
        "name": "JavaScript",
        "path": "/./docs/javascript"
      },
      {
        "name": "Hardware",
        "path": "/./docs/device"
      },
      {
        "name": "Buy",
        "path": "https://microbit.org/resellers"
      }
    ],
    "hasReferenceDocs": true,
    "usbDocs": "/device/usb",
    "usbHelp": [
      {
        "name": "connection",
        "os": "*",
        "browser": "*",
        "path": "/static/mb/device/usb-generic.jpg"
      },
      {
        "name": "connection",
        "os": "mac",
        "browser": "*",
        "path": "/static/mb/device/usb-mac.jpg"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "firefox",
        "path": "/static/mb/device/usb-windows-firefox-1.png"
      },
      {
        "name": "save",
        "os": "mac",
        "browser": "firefox",
        "path": "/static/mb/device/usb-osx-firefox-1.jpg"
      },
      {
        "name": "save",
        "os": "mac",
        "browser": "chrome",
        "path": "/static/mb/device/usb-osx-chrome.png"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "edge",
        "path": "/static/mb/device/usb-windows-edge-1.png"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "ie",
        "path": "/static/mb/device/usb-windows-ie11-1.png"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "chrome",
        "path": "/static/mb/device/usb-windows-chrome.png"
      },
      {
        "name": "copy",
        "os": "mac",
        "browser": "*",
        "path": "/static/mb/device/usb-osx-dnd.png"
      },
      {
        "name": "copy",
        "os": "windows",
        "browser": "*",
        "path": "/static/mb/device/usb-windows-sendto.jpg"
      }
    ],
    "invertedMenu": true,
    "coloredToolbox": true,
    "monacoToolbox": true,
    "hasAudio": true,
    "blocklyOptions": {
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": false
      }
    },
    "highContrast": true,
    "greenScreen": true,
    "selectLanguage": true,
    "availableLocales": [
      "en",
      "ar",
      "cs",
      "da",
      "de",
      "el",
      "es-ES",
      "fi",
      "fr",
      "hu",
      "is",
      "it",
      "ja",
      "ko",
      "nl",
      "no",
      "pt-BR",
      "pt-PT",
      "ru",
      "si-LK",
      "sv-SE",
      "tr",
      "uk",
      "zh-CN",
      "zh-TW"
    ],
    "monacoColors": {
      "editor.background": "#ecf0f1"
    },
    "TOC": [
      {
        "name": "About",
        "subitems": [],
        "path": "/about",
        "nextName": "FAQ",
        "nextPath": "/faq"
      },
      {
        "name": "FAQ",
        "subitems": [],
        "path": "/faq",
        "prevName": "About",
        "prevPath": "/about",
        "nextName": "Support",
        "nextPath": "https://support.microbit.org/"
      },
      {
        "name": "Support",
        "subitems": [],
        "path": "https://support.microbit.org/",
        "prevName": "FAQ",
        "prevPath": "/faq",
        "nextName": "Projects",
        "nextPath": "/projects"
      },
      {
        "name": "Projects",
        "subitems": [
          {
            "name": "Flashing heart",
            "subitems": [],
            "path": "/projects/flashing-heart",
            "prevName": "Projects",
            "prevPath": "/projects",
            "nextName": "Smiley buttons",
            "nextPath": "/projects/smiley-buttons"
          },
          {
            "name": "Smiley buttons",
            "subitems": [],
            "path": "/projects/smiley-buttons",
            "prevName": "Flashing heart",
            "prevPath": "/projects/flashing-heart",
            "nextName": "Love meter",
            "nextPath": "/projects/love-meter"
          },
          {
            "name": "Love meter",
            "subitems": [],
            "path": "/projects/love-meter",
            "prevName": "Smiley buttons",
            "prevPath": "/projects/smiley-buttons",
            "nextName": "Rock paper scissors",
            "nextPath": "/projects/rock-paper-scissors"
          },
          {
            "name": "Rock paper scissors",
            "subitems": [],
            "path": "/projects/rock-paper-scissors",
            "prevName": "Love meter",
            "prevPath": "/projects/love-meter",
            "nextName": "Magic button trick",
            "nextPath": "/projects/magic-button-trick"
          },
          {
            "name": "Magic button trick",
            "subitems": [],
            "path": "/projects/magic-button-trick",
            "prevName": "Rock paper scissors",
            "prevPath": "/projects/rock-paper-scissors",
            "nextName": "Coin Flipper",
            "nextPath": "/projects/coin-flipper"
          },
          {
            "name": "Coin Flipper",
            "subitems": [],
            "path": "/projects/coin-flipper",
            "prevName": "Magic button trick",
            "prevPath": "/projects/magic-button-trick",
            "nextName": "Salute!",
            "nextPath": "/projects/salute"
          },
          {
            "name": "Salute!",
            "subitems": [],
            "path": "/projects/salute",
            "prevName": "Coin Flipper",
            "prevPath": "/projects/coin-flipper",
            "nextName": "Hack your headphones",
            "nextPath": "/projects/hack-your-headphones"
          },
          {
            "name": "Hack your headphones",
            "subitems": [],
            "path": "/projects/hack-your-headphones",
            "prevName": "Salute!",
            "prevPath": "/projects/salute",
            "nextName": "Banana keyboard",
            "nextPath": "/projects/banana-keyboard"
          },
          {
            "name": "Banana keyboard",
            "subitems": [],
            "path": "/projects/banana-keyboard",
            "prevName": "Hack your headphones",
            "prevPath": "/projects/hack-your-headphones",
            "nextName": "Guitar",
            "nextPath": "/projects/guitar"
          },
          {
            "name": "Guitar",
            "subitems": [],
            "path": "/projects/guitar",
            "prevName": "Banana keyboard",
            "prevPath": "/projects/banana-keyboard",
            "nextName": "Duct tape wallet",
            "nextPath": "/projects/wallet"
          },
          {
            "name": "Duct tape wallet",
            "subitems": [],
            "path": "/projects/wallet",
            "prevName": "Guitar",
            "prevPath": "/projects/guitar",
            "nextName": "Watch",
            "nextPath": "/projects/watch"
          },
          {
            "name": "Watch",
            "subitems": [],
            "path": "/projects/watch",
            "prevName": "Duct tape wallet",
            "prevPath": "/projects/wallet",
            "nextName": "Soil Moisture",
            "nextPath": "/projects/soil-moisture"
          },
          {
            "name": "Soil Moisture",
            "subitems": [],
            "path": "/projects/soil-moisture",
            "prevName": "Watch",
            "prevPath": "/projects/watch",
            "nextName": "Plant Watering",
            "nextPath": "/projects/plant-watering"
          },
          {
            "name": "Plant Watering",
            "subitems": [],
            "path": "/projects/plant-watering",
            "prevName": "Soil Moisture",
            "prevPath": "/projects/soil-moisture",
            "nextName": "Reaction Time",
            "nextPath": "/projects/reaction-time"
          },
          {
            "name": "Reaction Time",
            "subitems": [],
            "path": "/projects/reaction-time",
            "prevName": "Plant Watering",
            "prevPath": "/projects/plant-watering",
            "nextName": "States of Matter",
            "nextPath": "/projects/states-of-matter"
          },
          {
            "name": "States of Matter",
            "subitems": [],
            "path": "/projects/states-of-matter",
            "prevName": "Reaction Time",
            "prevPath": "/projects/reaction-time",
            "nextName": "Hot Or Cold",
            "nextPath": "/projects/hot-or-cold"
          },
          {
            "name": "Hot Or Cold",
            "subitems": [],
            "path": "/projects/hot-or-cold",
            "prevName": "States of Matter",
            "prevPath": "/projects/states-of-matter",
            "nextName": "Voting Machine",
            "nextPath": "/projects/voting-machine"
          },
          {
            "name": "Voting Machine",
            "subitems": [],
            "path": "/projects/voting-machine",
            "prevName": "Hot Or Cold",
            "prevPath": "/projects/hot-or-cold",
            "nextName": "Infection",
            "nextPath": "/projects/infection"
          },
          {
            "name": "Infection",
            "subitems": [],
            "path": "/projects/infection",
            "prevName": "Voting Machine",
            "prevPath": "/projects/voting-machine",
            "nextName": "Fireflies",
            "nextPath": "/projects/fireflies"
          },
          {
            "name": "Fireflies",
            "subitems": [],
            "path": "/projects/fireflies",
            "prevName": "Infection",
            "prevPath": "/projects/infection",
            "nextName": "Rock Paper Scissors Teams",
            "nextPath": "/projects/rps-teams"
          },
          {
            "name": "Rock Paper Scissors Teams",
            "subitems": [],
            "path": "/projects/rps-teams",
            "prevName": "Fireflies",
            "prevPath": "/projects/fireflies",
            "nextName": "micro:coin",
            "nextPath": "/projects/micro-coin"
          },
          {
            "name": "micro:coin",
            "subitems": [],
            "path": "/projects/micro-coin",
            "prevName": "Rock Paper Scissors Teams",
            "prevPath": "/projects/rps-teams",
            "nextName": "Inchworm",
            "nextPath": "/projects/inchworm"
          },
          {
            "name": "Inchworm",
            "subitems": [],
            "path": "/projects/inchworm",
            "prevName": "micro:coin",
            "prevPath": "/projects/micro-coin",
            "nextName": "Milk Carton Robot",
            "nextPath": "/projects/milk-carton-robot"
          },
          {
            "name": "Milk Carton Robot",
            "subitems": [],
            "path": "/projects/milk-carton-robot",
            "prevName": "Inchworm",
            "prevPath": "/projects/inchworm",
            "nextName": "Milk monster",
            "nextPath": "/projects/milky-monster"
          },
          {
            "name": "Milk monster",
            "subitems": [],
            "path": "/projects/milky-monster",
            "prevName": "Milk Carton Robot",
            "prevPath": "/projects/milk-carton-robot",
            "nextName": "RC Car",
            "nextPath": "/projects/rc-car"
          },
          {
            "name": "RC Car",
            "subitems": [],
            "path": "/projects/rc-car",
            "prevName": "Milk monster",
            "prevPath": "/projects/milky-monster",
            "nextName": "Timing gates",
            "nextPath": "/projects/timing-gates"
          },
          {
            "name": "Timing gates",
            "subitems": [],
            "path": "/projects/timing-gates",
            "prevName": "RC Car",
            "prevPath": "/projects/rc-car",
            "nextName": "Compass",
            "nextPath": "/projects/compass"
          },
          {
            "name": "Compass",
            "subitems": [],
            "path": "/projects/compass",
            "prevName": "Timing gates",
            "prevPath": "/projects/timing-gates",
            "nextName": "Telegraph",
            "nextPath": "/projects/telegraph"
          },
          {
            "name": "Telegraph",
            "subitems": [],
            "path": "/projects/telegraph",
            "prevName": "Compass",
            "prevPath": "/projects/compass",
            "nextName": "Railway Crossing",
            "nextPath": "/projects/railway-crossing"
          },
          {
            "name": "Railway Crossing",
            "subitems": [],
            "path": "/projects/railway-crossing",
            "prevName": "Telegraph",
            "prevPath": "/projects/telegraph",
            "nextName": "Karel",
            "nextPath": "/projects/karel"
          },
          {
            "name": "Karel",
            "subitems": [],
            "path": "/projects/karel",
            "prevName": "Railway Crossing",
            "prevPath": "/projects/railway-crossing",
            "nextName": "Examples",
            "nextPath": "/examples"
          }
        ],
        "path": "/projects",
        "prevName": "Support",
        "prevPath": "https://support.microbit.org/",
        "nextName": "Flashing heart",
        "nextPath": "/projects/flashing-heart"
      },
      {
        "name": "Examples",
        "subitems": [
          {
            "name": "Blinky",
            "subitems": [],
            "path": "/examples/blinky",
            "prevName": "Examples",
            "prevPath": "/examples",
            "nextName": "Name tag",
            "nextPath": "/examples/name-tag"
          },
          {
            "name": "Name tag",
            "subitems": [],
            "path": "/examples/name-tag",
            "prevName": "Blinky",
            "prevPath": "/examples/blinky",
            "nextName": "Rando",
            "nextPath": "/examples/rando"
          },
          {
            "name": "Rando",
            "subitems": [],
            "path": "/examples/rando",
            "prevName": "Name tag",
            "prevPath": "/examples/name-tag",
            "nextName": "Plot acceleration",
            "nextPath": "/examples/plot-acceleration"
          },
          {
            "name": "Plot acceleration",
            "subitems": [],
            "path": "/examples/plot-acceleration",
            "prevName": "Rando",
            "prevPath": "/examples/rando",
            "nextName": "Plot light level",
            "nextPath": "/examples/plot-light-level"
          },
          {
            "name": "Plot light level",
            "subitems": [],
            "path": "/examples/plot-light-level",
            "prevName": "Plot acceleration",
            "prevPath": "/examples/plot-acceleration",
            "nextName": "Plot analog pin",
            "nextPath": "/examples/plot-analog-pin"
          },
          {
            "name": "Plot analog pin",
            "subitems": [],
            "path": "/examples/plot-analog-pin",
            "prevName": "Plot light level",
            "prevPath": "/examples/plot-light-level",
            "nextName": "Servo calibrator",
            "nextPath": "/examples/servo-calibrator"
          },
          {
            "name": "Servo calibrator",
            "subitems": [],
            "path": "/examples/servo-calibrator",
            "prevName": "Plot analog pin",
            "prevPath": "/examples/plot-analog-pin",
            "nextName": "Game of Life",
            "nextPath": "/examples/gameofLife"
          },
          {
            "name": "Game of Life",
            "subitems": [],
            "path": "/examples/gameofLife",
            "prevName": "Servo calibrator",
            "prevPath": "/examples/servo-calibrator",
            "nextName": "Egg and Spoon Race",
            "nextPath": "/examples/egg-and-spoon"
          },
          {
            "name": "Egg and Spoon Race",
            "subitems": [],
            "path": "/examples/egg-and-spoon",
            "prevName": "Game of Life",
            "prevPath": "/examples/gameofLife",
            "nextName": "Stop watch",
            "nextPath": "/examples/stop-watch"
          },
          {
            "name": "Stop watch",
            "subitems": [],
            "path": "/examples/stop-watch",
            "prevName": "Egg and Spoon Race",
            "prevPath": "/examples/egg-and-spoon",
            "nextName": "Radio dashboard",
            "nextPath": "/examples/radio-dashboard"
          },
          {
            "name": "Radio dashboard",
            "subitems": [],
            "path": "/examples/radio-dashboard",
            "prevName": "Stop watch",
            "prevPath": "/examples/stop-watch",
            "nextName": "Courses",
            "nextPath": "/courses"
          }
        ],
        "path": "/examples",
        "prevName": "Karel",
        "prevPath": "/projects/karel",
        "nextName": "Blinky",
        "nextPath": "/examples/blinky"
      },
      {
        "name": "Courses",
        "subitems": [
          {
            "name": "CS Intro",
            "subitems": [
              {
                "name": "About",
                "subitems": [],
                "path": "/courses/csintro/about",
                "prevName": "CS Intro",
                "prevPath": "/courses/csintro",
                "nextName": "Introduction",
                "nextPath": "/courses/csintro/introduction"
              },
              {
                "name": "Introduction",
                "subitems": [],
                "path": "/courses/csintro/introduction",
                "prevName": "About",
                "prevPath": "/courses/csintro/about",
                "nextName": "References",
                "nextPath": "/courses/csintro/references"
              },
              {
                "name": "References",
                "subitems": [],
                "path": "/courses/csintro/references",
                "prevName": "Introduction",
                "prevPath": "/courses/csintro/introduction",
                "nextName": "Acknowledgements",
                "nextPath": "/courses/csintro/acknowledgements"
              },
              {
                "name": "Acknowledgements",
                "subitems": [],
                "path": "/courses/csintro/acknowledgements",
                "prevName": "References",
                "prevPath": "/courses/csintro/references",
                "nextName": "Making",
                "nextPath": "/courses/csintro/making"
              },
              {
                "name": "Making",
                "subitems": [
                  {
                    "name": "Introduction",
                    "subitems": [],
                    "path": "/courses/csintro/making/introduction",
                    "prevName": "Making",
                    "prevPath": "/courses/csintro/making",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/making/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/making/unplugged",
                    "prevName": "Introduction",
                    "prevPath": "/courses/csintro/making/introduction",
                    "nextName": "Walkthrough",
                    "nextPath": "/courses/csintro/making/activity"
                  },
                  {
                    "name": "Walkthrough",
                    "subitems": [],
                    "path": "/courses/csintro/making/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/making/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/making/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/making/project",
                    "prevName": "Walkthrough",
                    "prevPath": "/courses/csintro/making/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/making/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/making/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/making/project",
                    "nextName": "Algorithms",
                    "nextPath": "/courses/csintro/algorithms"
                  }
                ],
                "path": "/courses/csintro/making",
                "prevName": "Acknowledgements",
                "prevPath": "/courses/csintro/acknowledgements",
                "nextName": "Introduction",
                "nextPath": "/courses/csintro/making/introduction"
              },
              {
                "name": "Algorithms",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/overview",
                    "prevName": "Algorithms",
                    "prevPath": "/courses/csintro/algorithms",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/algorithms/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/algorithms/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/algorithms/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/algorithms/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/algorithms/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/algorithms/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/algorithms/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/algorithms/project",
                    "nextName": "Variables",
                    "nextPath": "/courses/csintro/variables"
                  }
                ],
                "path": "/courses/csintro/algorithms",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/making/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/algorithms/overview"
              },
              {
                "name": "Variables",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/variables/overview",
                    "prevName": "Variables",
                    "prevPath": "/courses/csintro/variables",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/variables/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/variables/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/variables/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/variables/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/variables/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/variables/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/variables/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/variables/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/variables/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/variables/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/variables/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/variables/project",
                    "nextName": "Conditionals",
                    "nextPath": "/courses/csintro/conditionals"
                  }
                ],
                "path": "/courses/csintro/variables",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/algorithms/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/variables/overview"
              },
              {
                "name": "Conditionals",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/overview",
                    "prevName": "Conditionals",
                    "prevPath": "/courses/csintro/conditionals",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/conditionals/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/conditionals/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/conditionals/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/conditionals/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/conditionals/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/conditionals/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/conditionals/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/conditionals/project",
                    "nextName": "Iteration",
                    "nextPath": "/courses/csintro/iteration"
                  }
                ],
                "path": "/courses/csintro/conditionals",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/variables/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/conditionals/overview"
              },
              {
                "name": "Iteration",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/overview",
                    "prevName": "Iteration",
                    "prevPath": "/courses/csintro/iteration",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/iteration/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/iteration/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/iteration/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/iteration/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/iteration/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/iteration/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/iteration/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/iteration/project",
                    "nextName": "Mini-project",
                    "nextPath": "/courses/csintro/miniproject"
                  }
                ],
                "path": "/courses/csintro/iteration",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/conditionals/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/iteration/overview"
              },
              {
                "name": "Mini-project",
                "subitems": [
                  {
                    "name": "Review",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/review",
                    "prevName": "Mini-project",
                    "prevPath": "/courses/csintro/miniproject",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/miniproject/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/activity",
                    "prevName": "Review",
                    "prevPath": "/courses/csintro/miniproject/review",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/miniproject/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/miniproject/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/miniproject/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/miniproject/project",
                    "nextName": "Coordinates",
                    "nextPath": "/courses/csintro/coordinates"
                  }
                ],
                "path": "/courses/csintro/miniproject",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/iteration/standards",
                "nextName": "Review",
                "nextPath": "/courses/csintro/miniproject/review"
              },
              {
                "name": "Coordinates",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/overview",
                    "prevName": "Coordinates",
                    "prevPath": "/courses/csintro/coordinates",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/coordinates/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/coordinates/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/coordinates/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/coordinates/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/coordinates/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/coordinates/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/coordinates/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/coordinates/project",
                    "nextName": "Booleans",
                    "nextPath": "/courses/csintro/booleans"
                  }
                ],
                "path": "/courses/csintro/coordinates",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/miniproject/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/coordinates/overview"
              },
              {
                "name": "Booleans",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/overview",
                    "prevName": "Booleans",
                    "prevPath": "/courses/csintro/booleans",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/booleans/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/booleans/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/booleans/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/booleans/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/booleans/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/booleans/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/booleans/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/booleans/project",
                    "nextName": "Binary",
                    "nextPath": "/courses/csintro/binary"
                  }
                ],
                "path": "/courses/csintro/booleans",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/coordinates/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/booleans/overview"
              },
              {
                "name": "Binary",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/binary/overview",
                    "prevName": "Binary",
                    "prevPath": "/courses/csintro/binary",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/binary/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/binary/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/binary/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/binary/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/binary/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/binary/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/binary/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/binary/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/binary/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/binary/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/binary/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/binary/project",
                    "nextName": "Radio",
                    "nextPath": "/courses/csintro/radio"
                  }
                ],
                "path": "/courses/csintro/binary",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/booleans/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/binary/overview"
              },
              {
                "name": "Radio",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/radio/overview",
                    "prevName": "Radio",
                    "prevPath": "/courses/csintro/radio",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/radio/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/radio/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/radio/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/radio/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/radio/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/radio/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/radio/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/radio/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/radio/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/radio/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/radio/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/radio/project",
                    "nextName": "Arrays",
                    "nextPath": "/courses/csintro/arrays"
                  }
                ],
                "path": "/courses/csintro/radio",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/binary/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/radio/overview"
              },
              {
                "name": "Arrays",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/overview",
                    "prevName": "Arrays",
                    "prevPath": "/courses/csintro/arrays",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/arrays/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/arrays/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/arrays/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/arrays/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/arrays/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/arrays/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/arrays/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/arrays/project",
                    "nextName": "Final Project",
                    "nextPath": "/courses/csintro/finalproject"
                  }
                ],
                "path": "/courses/csintro/arrays",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/radio/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/arrays/overview"
              },
              {
                "name": "Final Project",
                "subitems": [
                  {
                    "name": "Review",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/review",
                    "prevName": "Final Project",
                    "prevPath": "/courses/csintro/finalproject",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/finalproject/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/project",
                    "prevName": "Review",
                    "prevPath": "/courses/csintro/finalproject/review",
                    "nextName": "Examples",
                    "nextPath": "/courses/csintro/finalproject/examples"
                  },
                  {
                    "name": "Examples",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/examples",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/finalproject/project",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/finalproject/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/standards",
                    "prevName": "Examples",
                    "prevPath": "/courses/csintro/finalproject/examples",
                    "nextName": "Science experiments",
                    "nextPath": "/courses/ucp-science"
                  }
                ],
                "path": "/courses/csintro/finalproject",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/arrays/standards",
                "nextName": "Review",
                "nextPath": "/courses/csintro/finalproject/review"
              }
            ],
            "path": "/courses/csintro",
            "prevName": "Courses",
            "prevPath": "/courses",
            "nextName": "About",
            "nextPath": "/courses/csintro/about"
          },
          {
            "name": "Science experiments",
            "subitems": [
              {
                "name": "Data collection",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/data-collection/overview",
                    "prevName": "Data collection",
                    "prevPath": "/courses/ucp-science/data-collection",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/data-collection/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/data-collection/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/data-collection/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/data-collection/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/data-collection/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/data-collection/setup-procedure",
                    "nextName": "Population Traits",
                    "nextPath": "/courses/ucp-science/population"
                  }
                ],
                "path": "/courses/ucp-science/data-collection",
                "prevName": "Science experiments",
                "prevPath": "/courses/ucp-science",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/data-collection/overview"
              },
              {
                "name": "Population Traits",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/population/overview",
                    "prevName": "Population Traits",
                    "prevPath": "/courses/ucp-science/population",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/population/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/population/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/population/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/population/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/population/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/population/setup-procedure",
                    "nextName": "Temperature",
                    "nextPath": "/courses/ucp-science/temperature"
                  }
                ],
                "path": "/courses/ucp-science/population",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/data-collection/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/population/overview"
              },
              {
                "name": "Temperature",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/temperature/overview",
                    "prevName": "Temperature",
                    "prevPath": "/courses/ucp-science/temperature",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/temperature/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/temperature/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/temperature/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/temperature/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/temperature/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/temperature/setup-procedure",
                    "nextName": "Soil Moisture",
                    "nextPath": "/courses/ucp-science/soil-moisture"
                  }
                ],
                "path": "/courses/ucp-science/temperature",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/population/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/temperature/overview"
              },
              {
                "name": "Soil Moisture",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/soil-moisture/overview",
                    "prevName": "Soil Moisture",
                    "prevPath": "/courses/ucp-science/soil-moisture",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/soil-moisture/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/soil-moisture/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/soil-moisture/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/soil-moisture/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/soil-moisture/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/soil-moisture/setup-procedure",
                    "nextName": "Gravity, Motion and Waves",
                    "nextPath": "/courses/ucp-science/gravity"
                  }
                ],
                "path": "/courses/ucp-science/soil-moisture",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/temperature/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/soil-moisture/overview"
              },
              {
                "name": "Gravity, Motion and Waves",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/gravity/overview",
                    "prevName": "Gravity, Motion and Waves",
                    "prevPath": "/courses/ucp-science/gravity",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/gravity/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/gravity/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/gravity/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/gravity/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/gravity/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/gravity/setup-procedure",
                    "nextName": "Body Electrical and Waves",
                    "nextPath": "/courses/ucp-science/body-electrical"
                  }
                ],
                "path": "/courses/ucp-science/gravity",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/soil-moisture/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/gravity/overview"
              },
              {
                "name": "Body Electrical and Waves",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/body-electrical/overview",
                    "prevName": "Body Electrical and Waves",
                    "prevPath": "/courses/ucp-science/body-electrical",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/body-electrical/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/body-electrical/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/body-electrical/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/body-electrical/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/body-electrical/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/body-electrical/setup-procedure",
                    "nextName": "Electricity",
                    "nextPath": "/courses/ucp-science/electricity"
                  }
                ],
                "path": "/courses/ucp-science/body-electrical",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/gravity/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/body-electrical/overview"
              },
              {
                "name": "Electricity",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/electricity/overview",
                    "prevName": "Electricity",
                    "prevPath": "/courses/ucp-science/electricity",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/electricity/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/electricity/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/electricity/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/electricity/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/electricity/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/electricity/setup-procedure",
                    "nextName": "Reference",
                    "nextPath": "/reference"
                  }
                ],
                "path": "/courses/ucp-science/electricity",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/body-electrical/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/electricity/overview"
              }
            ],
            "path": "/courses/ucp-science",
            "prevName": "Standards",
            "prevPath": "/courses/csintro/finalproject/standards",
            "nextName": "Data collection",
            "nextPath": "/courses/ucp-science/data-collection"
          }
        ],
        "path": "/courses",
        "prevName": "Radio dashboard",
        "prevPath": "/examples/radio-dashboard",
        "nextName": "CS Intro",
        "nextPath": "/courses/csintro"
      },
      {
        "name": "Reference",
        "subitems": [
          {
            "name": "Basic",
            "subitems": [
              {
                "name": "show number",
                "subitems": [],
                "path": "/reference/basic/show-number",
                "prevName": "Basic",
                "prevPath": "/reference/basic",
                "nextName": "show icon",
                "nextPath": "/reference/basic/show-icon"
              },
              {
                "name": "show icon",
                "subitems": [],
                "path": "/reference/basic/show-icon",
                "prevName": "show number",
                "prevPath": "/reference/basic/show-number",
                "nextName": "show leds",
                "nextPath": "/reference/basic/show-leds"
              },
              {
                "name": "show leds",
                "subitems": [],
                "path": "/reference/basic/show-leds",
                "prevName": "show icon",
                "prevPath": "/reference/basic/show-icon",
                "nextName": "show string",
                "nextPath": "/reference/basic/show-string"
              },
              {
                "name": "show string",
                "subitems": [],
                "path": "/reference/basic/show-string",
                "prevName": "show leds",
                "prevPath": "/reference/basic/show-leds",
                "nextName": "clear screen",
                "nextPath": "/reference/basic/clear-screen"
              },
              {
                "name": "clear screen",
                "subitems": [],
                "path": "/reference/basic/clear-screen",
                "prevName": "show string",
                "prevPath": "/reference/basic/show-string",
                "nextName": "forever",
                "nextPath": "/reference/basic/forever"
              },
              {
                "name": "forever",
                "subitems": [],
                "path": "/reference/basic/forever",
                "prevName": "clear screen",
                "prevPath": "/reference/basic/clear-screen",
                "nextName": "pause",
                "nextPath": "/reference/basic/pause"
              },
              {
                "name": "pause",
                "subitems": [],
                "path": "/reference/basic/pause",
                "prevName": "forever",
                "prevPath": "/reference/basic/forever",
                "nextName": "show arrow",
                "nextPath": "/reference/basic/show-arrow"
              },
              {
                "name": "show arrow",
                "subitems": [],
                "path": "/reference/basic/show-arrow",
                "prevName": "pause",
                "prevPath": "/reference/basic/pause",
                "nextName": "show animation",
                "nextPath": "/reference/basic/show-animation"
              },
              {
                "name": "show animation",
                "subitems": [],
                "path": "/reference/basic/show-animation",
                "prevName": "show arrow",
                "prevPath": "/reference/basic/show-arrow",
                "nextName": "Input",
                "nextPath": "/reference/input"
              }
            ],
            "path": "/reference/basic",
            "prevName": "Reference",
            "prevPath": "/reference",
            "nextName": "show number",
            "nextPath": "/reference/basic/show-number"
          },
          {
            "name": "Input",
            "subitems": [
              {
                "name": "on button pressed",
                "subitems": [],
                "path": "/reference/input/on-button-pressed",
                "prevName": "Input",
                "prevPath": "/reference/input",
                "nextName": "on gesture",
                "nextPath": "/reference/input/on-gesture"
              },
              {
                "name": "on gesture",
                "subitems": [],
                "path": "/reference/input/on-gesture",
                "prevName": "on button pressed",
                "prevPath": "/reference/input/on-button-pressed",
                "nextName": "on pin pressed",
                "nextPath": "/reference/input/on-pin-pressed"
              },
              {
                "name": "on pin pressed",
                "subitems": [],
                "path": "/reference/input/on-pin-pressed",
                "prevName": "on gesture",
                "prevPath": "/reference/input/on-gesture",
                "nextName": "button is pressed",
                "nextPath": "/reference/input/button-is-pressed"
              },
              {
                "name": "button is pressed",
                "subitems": [],
                "path": "/reference/input/button-is-pressed",
                "prevName": "on pin pressed",
                "prevPath": "/reference/input/on-pin-pressed",
                "nextName": "compass heading",
                "nextPath": "/reference/input/compass-heading"
              },
              {
                "name": "compass heading",
                "subitems": [],
                "path": "/reference/input/compass-heading",
                "prevName": "button is pressed",
                "prevPath": "/reference/input/button-is-pressed",
                "nextName": "pin is pressed",
                "nextPath": "/reference/input/pin-is-pressed"
              },
              {
                "name": "pin is pressed",
                "subitems": [],
                "path": "/reference/input/pin-is-pressed",
                "prevName": "compass heading",
                "prevPath": "/reference/input/compass-heading",
                "nextName": "temperature",
                "nextPath": "/reference/input/temperature"
              },
              {
                "name": "temperature",
                "subitems": [],
                "path": "/reference/input/temperature",
                "prevName": "pin is pressed",
                "prevPath": "/reference/input/pin-is-pressed",
                "nextName": "acceleration",
                "nextPath": "/reference/input/acceleration"
              },
              {
                "name": "acceleration",
                "subitems": [],
                "path": "/reference/input/acceleration",
                "prevName": "temperature",
                "prevPath": "/reference/input/temperature",
                "nextName": "light level",
                "nextPath": "/reference/input/light-level"
              },
              {
                "name": "light level",
                "subitems": [],
                "path": "/reference/input/light-level",
                "prevName": "acceleration",
                "prevPath": "/reference/input/acceleration",
                "nextName": "rotation",
                "nextPath": "/reference/input/rotation"
              },
              {
                "name": "rotation",
                "subitems": [],
                "path": "/reference/input/rotation",
                "prevName": "light level",
                "prevPath": "/reference/input/light-level",
                "nextName": "magnetic force",
                "nextPath": "/reference/input/magnetic-force"
              },
              {
                "name": "magnetic force",
                "subitems": [],
                "path": "/reference/input/magnetic-force",
                "prevName": "rotation",
                "prevPath": "/reference/input/rotation",
                "nextName": "running time",
                "nextPath": "/reference/input/running-time"
              },
              {
                "name": "running time",
                "subitems": [],
                "path": "/reference/input/running-time",
                "prevName": "magnetic force",
                "prevPath": "/reference/input/magnetic-force",
                "nextName": "set accelerometer range",
                "nextPath": "/reference/input/set-accelerometer-range"
              },
              {
                "name": "set accelerometer range",
                "subitems": [],
                "path": "/reference/input/set-accelerometer-range",
                "prevName": "running time",
                "prevPath": "/reference/input/running-time",
                "nextName": "Music",
                "nextPath": "/reference/music"
              }
            ],
            "path": "/reference/input",
            "prevName": "show animation",
            "prevPath": "/reference/basic/show-animation",
            "nextName": "on button pressed",
            "nextPath": "/reference/input/on-button-pressed"
          },
          {
            "name": "Music",
            "subitems": [
              {
                "name": "play tone",
                "subitems": [],
                "path": "/reference/music/play-tone",
                "prevName": "Music",
                "prevPath": "/reference/music",
                "nextName": "ring tone",
                "nextPath": "/reference/music/ring-tone"
              },
              {
                "name": "ring tone",
                "subitems": [],
                "path": "/reference/music/ring-tone",
                "prevName": "play tone",
                "prevPath": "/reference/music/play-tone",
                "nextName": "rest",
                "nextPath": "/reference/music/rest"
              },
              {
                "name": "rest",
                "subitems": [],
                "path": "/reference/music/rest",
                "prevName": "ring tone",
                "prevPath": "/reference/music/ring-tone",
                "nextName": "beat",
                "nextPath": "/reference/music/beat"
              },
              {
                "name": "beat",
                "subitems": [],
                "path": "/reference/music/beat",
                "prevName": "rest",
                "prevPath": "/reference/music/rest",
                "nextName": "tempo",
                "nextPath": "/reference/music/tempo"
              },
              {
                "name": "tempo",
                "subitems": [],
                "path": "/reference/music/tempo",
                "prevName": "beat",
                "prevPath": "/reference/music/beat",
                "nextName": "change tempo by",
                "nextPath": "/reference/music/change-tempo-by"
              },
              {
                "name": "change tempo by",
                "subitems": [],
                "path": "/reference/music/change-tempo-by",
                "prevName": "tempo",
                "prevPath": "/reference/music/tempo",
                "nextName": "set tempo",
                "nextPath": "/reference/music/set-tempo"
              },
              {
                "name": "set tempo",
                "subitems": [],
                "path": "/reference/music/set-tempo",
                "prevName": "change tempo by",
                "prevPath": "/reference/music/change-tempo-by",
                "nextName": "Led",
                "nextPath": "/reference/led"
              }
            ],
            "path": "/reference/music",
            "prevName": "set accelerometer range",
            "prevPath": "/reference/input/set-accelerometer-range",
            "nextName": "play tone",
            "nextPath": "/reference/music/play-tone"
          },
          {
            "name": "Led",
            "subitems": [
              {
                "name": "plot",
                "subitems": [],
                "path": "/reference/led/plot",
                "prevName": "Led",
                "prevPath": "/reference/led",
                "nextName": "unplot",
                "nextPath": "/reference/led/unplot"
              },
              {
                "name": "unplot",
                "subitems": [],
                "path": "/reference/led/unplot",
                "prevName": "plot",
                "prevPath": "/reference/led/plot",
                "nextName": "point",
                "nextPath": "/reference/led/point"
              },
              {
                "name": "point",
                "subitems": [],
                "path": "/reference/led/point",
                "prevName": "unplot",
                "prevPath": "/reference/led/unplot",
                "nextName": "toggle",
                "nextPath": "/reference/led/toggle"
              },
              {
                "name": "toggle",
                "subitems": [],
                "path": "/reference/led/toggle",
                "prevName": "point",
                "prevPath": "/reference/led/point",
                "nextName": "brightness",
                "nextPath": "/reference/led/brightness"
              },
              {
                "name": "brightness",
                "subitems": [],
                "path": "/reference/led/brightness",
                "prevName": "toggle",
                "prevPath": "/reference/led/toggle",
                "nextName": "set brightness",
                "nextPath": "/reference/led/set-brightness"
              },
              {
                "name": "set brightness",
                "subitems": [],
                "path": "/reference/led/set-brightness",
                "prevName": "brightness",
                "prevPath": "/reference/led/brightness",
                "nextName": "stop animation",
                "nextPath": "/reference/led/stop-animation"
              },
              {
                "name": "stop animation",
                "subitems": [],
                "path": "/reference/led/stop-animation",
                "prevName": "set brightness",
                "prevPath": "/reference/led/set-brightness",
                "nextName": "plot bar graph",
                "nextPath": "/reference/led/plot-bar-graph"
              },
              {
                "name": "plot bar graph",
                "subitems": [],
                "path": "/reference/led/plot-bar-graph",
                "prevName": "stop animation",
                "prevPath": "/reference/led/stop-animation",
                "nextName": "enable",
                "nextPath": "/reference/led/enable"
              },
              {
                "name": "enable",
                "subitems": [],
                "path": "/reference/led/enable",
                "prevName": "plot bar graph",
                "prevPath": "/reference/led/plot-bar-graph",
                "nextName": "Radio",
                "nextPath": "/reference/radio"
              }
            ],
            "path": "/reference/led",
            "prevName": "set tempo",
            "prevPath": "/reference/music/set-tempo",
            "nextName": "plot",
            "nextPath": "/reference/led/plot"
          },
          {
            "name": "Radio",
            "subitems": [
              {
                "name": "send number",
                "subitems": [],
                "path": "/reference/radio/send-number",
                "prevName": "Radio",
                "prevPath": "/reference/radio",
                "nextName": "send value",
                "nextPath": "/reference/radio/send-value"
              },
              {
                "name": "send value",
                "subitems": [],
                "path": "/reference/radio/send-value",
                "prevName": "send number",
                "prevPath": "/reference/radio/send-number",
                "nextName": "send string",
                "nextPath": "/reference/radio/send-string"
              },
              {
                "name": "send string",
                "subitems": [],
                "path": "/reference/radio/send-string",
                "prevName": "send value",
                "prevPath": "/reference/radio/send-value",
                "nextName": "on data packet received",
                "nextPath": "/reference/radio/on-data-packet-received"
              },
              {
                "name": "on data packet received",
                "subitems": [],
                "path": "/reference/radio/on-data-packet-received",
                "prevName": "send string",
                "prevPath": "/reference/radio/send-string",
                "nextName": "set group",
                "nextPath": "/reference/radio/set-group"
              },
              {
                "name": "set group",
                "subitems": [],
                "path": "/reference/radio/set-group",
                "prevName": "on data packet received",
                "prevPath": "/reference/radio/on-data-packet-received",
                "nextName": "set transmit power",
                "nextPath": "/reference/radio/set-transmit-power"
              },
              {
                "name": "set transmit power",
                "subitems": [],
                "path": "/reference/radio/set-transmit-power",
                "prevName": "set group",
                "prevPath": "/reference/radio/set-group",
                "nextName": "set transmit serial number",
                "nextPath": "/reference/radio/set-transmit-serial-number"
              },
              {
                "name": "set transmit serial number",
                "subitems": [],
                "path": "/reference/radio/set-transmit-serial-number",
                "prevName": "set transmit power",
                "prevPath": "/reference/radio/set-transmit-power",
                "nextName": "write received packet to serial",
                "nextPath": "/reference/radio/write-received-packet-to-serial"
              },
              {
                "name": "write received packet to serial",
                "subitems": [],
                "path": "/reference/radio/write-received-packet-to-serial",
                "prevName": "set transmit serial number",
                "prevPath": "/reference/radio/set-transmit-serial-number",
                "nextName": "Game",
                "nextPath": "/reference/game"
              }
            ],
            "path": "/reference/radio",
            "prevName": "enable",
            "prevPath": "/reference/led/enable",
            "nextName": "send number",
            "nextPath": "/reference/radio/send-number"
          },
          {
            "name": "Game",
            "subitems": [
              {
                "name": "create sprite",
                "subitems": [],
                "path": "/reference/game/create-sprite",
                "prevName": "Game",
                "prevPath": "/reference/game",
                "nextName": "delete",
                "nextPath": "/reference/game/delete"
              },
              {
                "name": "delete",
                "subitems": [],
                "path": "/reference/game/delete",
                "prevName": "create sprite",
                "prevPath": "/reference/game/create-sprite",
                "nextName": "move",
                "nextPath": "/reference/game/move"
              },
              {
                "name": "move",
                "subitems": [],
                "path": "/reference/game/move",
                "prevName": "delete",
                "prevPath": "/reference/game/delete",
                "nextName": "turn",
                "nextPath": "/reference/game/turn"
              },
              {
                "name": "turn",
                "subitems": [],
                "path": "/reference/game/turn",
                "prevName": "move",
                "prevPath": "/reference/game/move",
                "nextName": "in on edge bounce",
                "nextPath": "/reference/game/if-on-edge-bounce"
              },
              {
                "name": "in on edge bounce",
                "subitems": [],
                "path": "/reference/game/if-on-edge-bounce",
                "prevName": "turn",
                "prevPath": "/reference/game/turn",
                "nextName": "get",
                "nextPath": "/reference/game/get"
              },
              {
                "name": "get",
                "subitems": [],
                "path": "/reference/game/get",
                "prevName": "in on edge bounce",
                "prevPath": "/reference/game/if-on-edge-bounce",
                "nextName": "set",
                "nextPath": "/reference/game/set"
              },
              {
                "name": "set",
                "subitems": [],
                "path": "/reference/game/set",
                "prevName": "get",
                "prevPath": "/reference/game/get",
                "nextName": "change",
                "nextPath": "/reference/game/change"
              },
              {
                "name": "change",
                "subitems": [],
                "path": "/reference/game/change",
                "prevName": "set",
                "prevPath": "/reference/game/set",
                "nextName": "is touching",
                "nextPath": "/reference/game/is-touching"
              },
              {
                "name": "is touching",
                "subitems": [],
                "path": "/reference/game/is-touching",
                "prevName": "change",
                "prevPath": "/reference/game/change",
                "nextName": "is touching edge",
                "nextPath": "/reference/game/is-touching-edge"
              },
              {
                "name": "is touching edge",
                "subitems": [],
                "path": "/reference/game/is-touching-edge",
                "prevName": "is touching",
                "prevPath": "/reference/game/is-touching",
                "nextName": "add score",
                "nextPath": "/reference/game/add-score"
              },
              {
                "name": "add score",
                "subitems": [],
                "path": "/reference/game/add-score",
                "prevName": "is touching edge",
                "prevPath": "/reference/game/is-touching-edge",
                "nextName": "score",
                "nextPath": "/reference/game/score"
              },
              {
                "name": "score",
                "subitems": [],
                "path": "/reference/game/score",
                "prevName": "add score",
                "prevPath": "/reference/game/add-score",
                "nextName": "set score",
                "nextPath": "/reference/game/set-score"
              },
              {
                "name": "set score",
                "subitems": [],
                "path": "/reference/game/set-score",
                "prevName": "score",
                "prevPath": "/reference/game/score",
                "nextName": "start countdown",
                "nextPath": "/reference/game/start-countdown"
              },
              {
                "name": "start countdown",
                "subitems": [],
                "path": "/reference/game/start-countdown",
                "prevName": "set score",
                "prevPath": "/reference/game/set-score",
                "nextName": "game over",
                "nextPath": "/reference/game/game-over"
              },
              {
                "name": "game over",
                "subitems": [],
                "path": "/reference/game/game-over",
                "prevName": "start countdown",
                "prevPath": "/reference/game/start-countdown",
                "nextName": "pause",
                "nextPath": "/reference/game/pause"
              },
              {
                "name": "pause",
                "subitems": [],
                "path": "/reference/game/pause",
                "prevName": "game over",
                "prevPath": "/reference/game/game-over",
                "nextName": "resume",
                "nextPath": "/reference/game/resume"
              },
              {
                "name": "resume",
                "subitems": [],
                "path": "/reference/game/resume",
                "prevName": "pause",
                "prevPath": "/reference/game/pause",
                "nextName": "Images",
                "nextPath": "/reference/images"
              }
            ],
            "path": "/reference/game",
            "prevName": "write received packet to serial",
            "prevPath": "/reference/radio/write-received-packet-to-serial",
            "nextName": "create sprite",
            "nextPath": "/reference/game/create-sprite"
          },
          {
            "name": "Images",
            "subitems": [
              {
                "name": "create image",
                "subitems": [],
                "path": "/reference/images/create-image",
                "prevName": "Images",
                "prevPath": "/reference/images",
                "nextName": "create big image",
                "nextPath": "/reference/images/create-big-image"
              },
              {
                "name": "create big image",
                "subitems": [],
                "path": "/reference/images/create-big-image",
                "prevName": "create image",
                "prevPath": "/reference/images/create-image",
                "nextName": "show image",
                "nextPath": "/reference/images/show-image"
              },
              {
                "name": "show image",
                "subitems": [],
                "path": "/reference/images/show-image",
                "prevName": "create big image",
                "prevPath": "/reference/images/create-big-image",
                "nextName": "scroll image",
                "nextPath": "/reference/images/scroll-image"
              },
              {
                "name": "scroll image",
                "subitems": [],
                "path": "/reference/images/scroll-image",
                "prevName": "show image",
                "prevPath": "/reference/images/show-image",
                "nextName": "arrow image",
                "nextPath": "/reference/images/arrow-image"
              },
              {
                "name": "arrow image",
                "subitems": [],
                "path": "/reference/images/arrow-image",
                "prevName": "scroll image",
                "prevPath": "/reference/images/scroll-image",
                "nextName": "icon image",
                "nextPath": "/reference/images/icon-image"
              },
              {
                "name": "icon image",
                "subitems": [],
                "path": "/reference/images/icon-image",
                "prevName": "arrow image",
                "prevPath": "/reference/images/arrow-image",
                "nextName": "arrow number",
                "nextPath": "/reference/images/arrow-number"
              },
              {
                "name": "arrow number",
                "subitems": [],
                "path": "/reference/images/arrow-number",
                "prevName": "icon image",
                "prevPath": "/reference/images/icon-image",
                "nextName": "Pins",
                "nextPath": "/reference/pins"
              }
            ],
            "path": "/reference/images",
            "prevName": "resume",
            "prevPath": "/reference/game/resume",
            "nextName": "create image",
            "nextPath": "/reference/images/create-image"
          },
          {
            "name": "Pins",
            "subitems": [
              {
                "name": "digital read pin",
                "subitems": [],
                "path": "/reference/pins/digital-read-pin",
                "prevName": "Pins",
                "prevPath": "/reference/pins",
                "nextName": "digital write pin",
                "nextPath": "/reference/pins/digital-write-pin"
              },
              {
                "name": "digital write pin",
                "subitems": [],
                "path": "/reference/pins/digital-write-pin",
                "prevName": "digital read pin",
                "prevPath": "/reference/pins/digital-read-pin",
                "nextName": "analog read pin",
                "nextPath": "/reference/pins/analog-read-pin"
              },
              {
                "name": "analog read pin",
                "subitems": [],
                "path": "/reference/pins/analog-read-pin",
                "prevName": "digital write pin",
                "prevPath": "/reference/pins/digital-write-pin",
                "nextName": "analog write pin",
                "nextPath": "/reference/pins/analog-write-pin"
              },
              {
                "name": "analog write pin",
                "subitems": [],
                "path": "/reference/pins/analog-write-pin",
                "prevName": "analog read pin",
                "prevPath": "/reference/pins/analog-read-pin",
                "nextName": "analog set period",
                "nextPath": "/reference/pins/analog-set-period"
              },
              {
                "name": "analog set period",
                "subitems": [],
                "path": "/reference/pins/analog-set-period",
                "prevName": "analog write pin",
                "prevPath": "/reference/pins/analog-write-pin",
                "nextName": "map",
                "nextPath": "/reference/pins/map"
              },
              {
                "name": "map",
                "subitems": [],
                "path": "/reference/pins/map",
                "prevName": "analog set period",
                "prevPath": "/reference/pins/analog-set-period",
                "nextName": "on pulsed",
                "nextPath": "/reference/pins/on-pulsed"
              },
              {
                "name": "on pulsed",
                "subitems": [],
                "path": "/reference/pins/on-pulsed",
                "prevName": "map",
                "prevPath": "/reference/pins/map",
                "nextName": "pulse duration",
                "nextPath": "/reference/pins/pulse-duration"
              },
              {
                "name": "pulse duration",
                "subitems": [],
                "path": "/reference/pins/pulse-duration",
                "prevName": "on pulsed",
                "prevPath": "/reference/pins/on-pulsed",
                "nextName": "pulse in",
                "nextPath": "/reference/pins/pulse-in"
              },
              {
                "name": "pulse in",
                "subitems": [],
                "path": "/reference/pins/pulse-in",
                "prevName": "pulse duration",
                "prevPath": "/reference/pins/pulse-duration",
                "nextName": "servo write pin",
                "nextPath": "/reference/pins/servo-write-pin"
              },
              {
                "name": "servo write pin",
                "subitems": [],
                "path": "/reference/pins/servo-write-pin",
                "prevName": "pulse in",
                "prevPath": "/reference/pins/pulse-in",
                "nextName": "servo set pulse",
                "nextPath": "/reference/pins/servo-set-pulse"
              },
              {
                "name": "servo set pulse",
                "subitems": [],
                "path": "/reference/pins/servo-set-pulse",
                "prevName": "servo write pin",
                "prevPath": "/reference/pins/servo-write-pin",
                "nextName": "i2c read number",
                "nextPath": "/reference/pins/i2c-read-number"
              },
              {
                "name": "i2c read number",
                "subitems": [],
                "path": "/reference/pins/i2c-read-number",
                "prevName": "servo set pulse",
                "prevPath": "/reference/pins/servo-set-pulse",
                "nextName": "i2c write number",
                "nextPath": "/reference/pins/i2c-write-number"
              },
              {
                "name": "i2c write number",
                "subitems": [],
                "path": "/reference/pins/i2c-write-number",
                "prevName": "i2c read number",
                "prevPath": "/reference/pins/i2c-read-number",
                "nextName": "set pull",
                "nextPath": "/reference/pins/set-pull"
              },
              {
                "name": "set pull",
                "subitems": [],
                "path": "/reference/pins/set-pull",
                "prevName": "i2c write number",
                "prevPath": "/reference/pins/i2c-write-number",
                "nextName": "analog pitch",
                "nextPath": "/reference/pins/analog-pitch"
              },
              {
                "name": "analog pitch",
                "subitems": [],
                "path": "/reference/pins/analog-pitch",
                "prevName": "set pull",
                "prevPath": "/reference/pins/set-pull",
                "nextName": "analog set pitch pin",
                "nextPath": "/reference/pins/analog-set-pitch-pin"
              },
              {
                "name": "analog set pitch pin",
                "subitems": [],
                "path": "/reference/pins/analog-set-pitch-pin",
                "prevName": "analog pitch",
                "prevPath": "/reference/pins/analog-pitch",
                "nextName": "spi write",
                "nextPath": "/reference/pins/spi-write"
              },
              {
                "name": "spi write",
                "subitems": [],
                "path": "/reference/pins/spi-write",
                "prevName": "analog set pitch pin",
                "prevPath": "/reference/pins/analog-set-pitch-pin",
                "nextName": "spi Pins",
                "nextPath": "/reference/pins/spi-pins"
              },
              {
                "name": "spi Pins",
                "subitems": [],
                "path": "/reference/pins/spi-pins",
                "prevName": "spi write",
                "prevPath": "/reference/pins/spi-write",
                "nextName": "spi format",
                "nextPath": "/reference/pins/spi-format"
              },
              {
                "name": "spi format",
                "subitems": [],
                "path": "/reference/pins/spi-format",
                "prevName": "spi Pins",
                "prevPath": "/reference/pins/spi-pins",
                "nextName": "spi frequency",
                "nextPath": "/reference/pins/spi-frequency"
              },
              {
                "name": "spi frequency",
                "subitems": [],
                "path": "/reference/pins/spi-frequency",
                "prevName": "spi format",
                "prevPath": "/reference/pins/spi-format",
                "nextName": "Serial",
                "nextPath": "/reference/serial"
              }
            ],
            "path": "/reference/pins",
            "prevName": "arrow number",
            "prevPath": "/reference/images/arrow-number",
            "nextName": "digital read pin",
            "nextPath": "/reference/pins/digital-read-pin"
          },
          {
            "name": "Serial",
            "subitems": [
              {
                "name": "write line",
                "subitems": [],
                "path": "/reference/serial/write-line",
                "prevName": "Serial",
                "prevPath": "/reference/serial",
                "nextName": "write number",
                "nextPath": "/reference/serial/write-number"
              },
              {
                "name": "write number",
                "subitems": [],
                "path": "/reference/serial/write-number",
                "prevName": "write line",
                "prevPath": "/reference/serial/write-line",
                "nextName": "write value",
                "nextPath": "/reference/serial/write-value"
              },
              {
                "name": "write value",
                "subitems": [],
                "path": "/reference/serial/write-value",
                "prevName": "write number",
                "prevPath": "/reference/serial/write-number",
                "nextName": "write string",
                "nextPath": "/reference/serial/write-string"
              },
              {
                "name": "write string",
                "subitems": [],
                "path": "/reference/serial/write-string",
                "prevName": "write value",
                "prevPath": "/reference/serial/write-value",
                "nextName": "read until",
                "nextPath": "/reference/serial/read-until"
              },
              {
                "name": "read until",
                "subitems": [],
                "path": "/reference/serial/read-until",
                "prevName": "write string",
                "prevPath": "/reference/serial/write-string",
                "nextName": "read line",
                "nextPath": "/reference/serial/read-line"
              },
              {
                "name": "read line",
                "subitems": [],
                "path": "/reference/serial/read-line",
                "prevName": "read until",
                "prevPath": "/reference/serial/read-until",
                "nextName": "read string",
                "nextPath": "/reference/serial/read-string"
              },
              {
                "name": "read string",
                "subitems": [],
                "path": "/reference/serial/read-string",
                "prevName": "read line",
                "prevPath": "/reference/serial/read-line",
                "nextName": "on data received",
                "nextPath": "/reference/serial/on-data-received"
              },
              {
                "name": "on data received",
                "subitems": [],
                "path": "/reference/serial/on-data-received",
                "prevName": "read string",
                "prevPath": "/reference/serial/read-string",
                "nextName": "redirect",
                "nextPath": "/reference/serial/redirect"
              },
              {
                "name": "redirect",
                "subitems": [],
                "path": "/reference/serial/redirect",
                "prevName": "on data received",
                "prevPath": "/reference/serial/on-data-received",
                "nextName": "redirect to usb",
                "nextPath": "/reference/serial/redirect-to-usb"
              },
              {
                "name": "redirect to usb",
                "subitems": [],
                "path": "/reference/serial/redirect-to-usb",
                "prevName": "redirect",
                "prevPath": "/reference/serial/redirect",
                "nextName": "write buffer",
                "nextPath": "/reference/serial/write-buffer"
              },
              {
                "name": "write buffer",
                "subitems": [],
                "path": "/reference/serial/write-buffer",
                "prevName": "redirect to usb",
                "prevPath": "/reference/serial/redirect-to-usb",
                "nextName": "read buffer",
                "nextPath": "/reference/serial/read-buffer"
              },
              {
                "name": "read buffer",
                "subitems": [],
                "path": "/reference/serial/read-buffer",
                "prevName": "write buffer",
                "prevPath": "/reference/serial/write-buffer",
                "nextName": "Control",
                "nextPath": "/reference/control"
              }
            ],
            "path": "/reference/serial",
            "prevName": "spi frequency",
            "prevPath": "/reference/pins/spi-frequency",
            "nextName": "write line",
            "nextPath": "/reference/serial/write-line"
          },
          {
            "name": "Control",
            "subitems": [
              {
                "name": "in background",
                "subitems": [],
                "path": "/reference/control/in-background",
                "prevName": "Control",
                "prevPath": "/reference/control",
                "nextName": "reset",
                "nextPath": "/reference/control/reset"
              },
              {
                "name": "reset",
                "subitems": [],
                "path": "/reference/control/reset",
                "prevName": "in background",
                "prevPath": "/reference/control/in-background",
                "nextName": "wait micros",
                "nextPath": "/reference/control/wait-micros"
              },
              {
                "name": "wait micros",
                "subitems": [],
                "path": "/reference/control/wait-micros",
                "prevName": "reset",
                "prevPath": "/reference/control/reset",
                "nextName": "on event",
                "nextPath": "/reference/control/on-event"
              },
              {
                "name": "on event",
                "subitems": [],
                "path": "/reference/control/on-event",
                "prevName": "wait micros",
                "prevPath": "/reference/control/wait-micros",
                "nextName": "raise event",
                "nextPath": "/reference/control/raise-event"
              },
              {
                "name": "raise event",
                "subitems": [],
                "path": "/reference/control/raise-event",
                "prevName": "on event",
                "prevPath": "/reference/control/on-event",
                "nextName": "event timestamp",
                "nextPath": "/reference/control/event-timestamp"
              },
              {
                "name": "event timestamp",
                "subitems": [],
                "path": "/reference/control/event-timestamp",
                "prevName": "raise event",
                "prevPath": "/reference/control/raise-event",
                "nextName": "event value",
                "nextPath": "/reference/control/event-value"
              },
              {
                "name": "event value",
                "subitems": [],
                "path": "/reference/control/event-value",
                "prevName": "event timestamp",
                "prevPath": "/reference/control/event-timestamp",
                "nextName": "Bluetooth",
                "nextPath": "/reference/bluetooth"
              }
            ],
            "path": "/reference/control",
            "prevName": "read buffer",
            "prevPath": "/reference/serial/read-buffer",
            "nextName": "in background",
            "nextPath": "/reference/control/in-background"
          },
          {
            "name": "Bluetooth",
            "subitems": [
              {
                "name": "",
                "subitems": [],
                "prevName": "Bluetooth",
                "prevPath": "/reference/bluetooth"
              },
              {
                "name": "Pairing",
                "subitems": [],
                "path": "/reference/bluetooth/bluetooth-pairing",
                "prevName": "Bluetooth",
                "prevPath": "/reference/bluetooth",
                "nextName": "on bluetooth connected",
                "nextPath": "/reference/bluetooth/on-bluetooth-connected"
              },
              {
                "name": "on bluetooth connected",
                "subitems": [],
                "path": "/reference/bluetooth/on-bluetooth-connected",
                "prevName": "Pairing",
                "prevPath": "/reference/bluetooth/bluetooth-pairing",
                "nextName": "on bluetooth disconnected",
                "nextPath": "/reference/bluetooth/on-bluetooth-disconnected"
              },
              {
                "name": "on bluetooth disconnected",
                "subitems": [],
                "path": "/reference/bluetooth/on-bluetooth-disconnected",
                "prevName": "on bluetooth connected",
                "prevPath": "/reference/bluetooth/on-bluetooth-connected",
                "nextName": "start accelerometer service",
                "nextPath": "/reference/bluetooth/start-accelerometer-service"
              },
              {
                "name": "start accelerometer service",
                "subitems": [],
                "path": "/reference/bluetooth/start-accelerometer-service",
                "prevName": "on bluetooth disconnected",
                "prevPath": "/reference/bluetooth/on-bluetooth-disconnected",
                "nextName": "start button service",
                "nextPath": "/reference/bluetooth/start-button-service"
              },
              {
                "name": "start button service",
                "subitems": [],
                "path": "/reference/bluetooth/start-button-service",
                "prevName": "start accelerometer service",
                "prevPath": "/reference/bluetooth/start-accelerometer-service",
                "nextName": "start io pin service",
                "nextPath": "/reference/bluetooth/start-io-pin-service"
              },
              {
                "name": "start io pin service",
                "subitems": [],
                "path": "/reference/bluetooth/start-io-pin-service",
                "prevName": "start button service",
                "prevPath": "/reference/bluetooth/start-button-service",
                "nextName": "start led service",
                "nextPath": "/reference/bluetooth/start-led-service"
              },
              {
                "name": "start led service",
                "subitems": [],
                "path": "/reference/bluetooth/start-led-service",
                "prevName": "start io pin service",
                "prevPath": "/reference/bluetooth/start-io-pin-service",
                "nextName": "start magnetometer service",
                "nextPath": "/reference/bluetooth/start-magnetometer-service"
              },
              {
                "name": "start magnetometer service",
                "subitems": [],
                "path": "/reference/bluetooth/start-magnetometer-service",
                "prevName": "start led service",
                "prevPath": "/reference/bluetooth/start-led-service",
                "nextName": "start temperature service",
                "nextPath": "/reference/bluetooth/start-temperature-service"
              },
              {
                "name": "start temperature service",
                "subitems": [],
                "path": "/reference/bluetooth/start-temperature-service",
                "prevName": "start magnetometer service",
                "prevPath": "/reference/bluetooth/start-magnetometer-service",
                "nextName": "start uart service",
                "nextPath": "/reference/bluetooth/start-uart-service"
              },
              {
                "name": "start uart service",
                "subitems": [],
                "path": "/reference/bluetooth/start-uart-service",
                "prevName": "start temperature service",
                "prevPath": "/reference/bluetooth/start-temperature-service",
                "nextName": "uart read until",
                "nextPath": "/reference/bluetooth/uart-read-until"
              },
              {
                "name": "uart read until",
                "subitems": [],
                "path": "/reference/bluetooth/uart-read-until",
                "prevName": "start uart service",
                "prevPath": "/reference/bluetooth/start-uart-service",
                "nextName": "uart write string",
                "nextPath": "/reference/bluetooth/uart-write-string"
              },
              {
                "name": "uart write string",
                "subitems": [],
                "path": "/reference/bluetooth/uart-write-string",
                "prevName": "uart read until",
                "prevPath": "/reference/bluetooth/uart-read-until",
                "nextName": "uart write number",
                "nextPath": "/reference/bluetooth/uart-write-number"
              },
              {
                "name": "uart write number",
                "subitems": [],
                "path": "/reference/bluetooth/uart-write-number",
                "prevName": "uart write string",
                "prevPath": "/reference/bluetooth/uart-write-string",
                "nextName": "uart write value",
                "nextPath": "/reference/bluetooth/uart-write-value"
              },
              {
                "name": "uart write value",
                "subitems": [],
                "path": "/reference/bluetooth/uart-write-value",
                "prevName": "uart write number",
                "prevPath": "/reference/bluetooth/uart-write-number",
                "nextName": "advertise url",
                "nextPath": "/reference/bluetooth/advertise-url"
              },
              {
                "name": "advertise url",
                "subitems": [],
                "path": "/reference/bluetooth/advertise-url",
                "prevName": "uart write value",
                "prevPath": "/reference/bluetooth/uart-write-value",
                "nextName": "stop advertising",
                "nextPath": "/reference/bluetooth/stop-advertising"
              },
              {
                "name": "stop advertising",
                "subitems": [],
                "path": "/reference/bluetooth/stop-advertising",
                "prevName": "advertise url",
                "prevPath": "/reference/bluetooth/advertise-url",
                "nextName": "advertise uid",
                "nextPath": "/reference/bluetooth/advertise-uid"
              },
              {
                "name": "advertise uid",
                "subitems": [],
                "path": "/reference/bluetooth/advertise-uid",
                "prevName": "stop advertising",
                "prevPath": "/reference/bluetooth/stop-advertising",
                "nextName": "advertise-uid-buffer",
                "nextPath": "/reference/bluetooth/advertise-uid-buffer"
              },
              {
                "name": "advertise-uid-buffer",
                "subitems": [],
                "path": "/reference/bluetooth/advertise-uid-buffer",
                "prevName": "advertise uid",
                "prevPath": "/reference/bluetooth/advertise-uid",
                "nextName": "Devices",
                "nextPath": "/reference/devices"
              }
            ],
            "path": "/reference/bluetooth",
            "prevName": "event value",
            "prevPath": "/reference/control/event-value",
            "nextName": "Pairing",
            "nextPath": "/reference/bluetooth/bluetooth-pairing"
          },
          {
            "name": "Devices",
            "subitems": [
              {
                "name": "tell camera to",
                "subitems": [],
                "path": "/reference/devices/tell-camera-to",
                "prevName": "Devices",
                "prevPath": "/reference/devices",
                "nextName": "tell remote control to",
                "nextPath": "/reference/devices/tell-remote-control-to"
              },
              {
                "name": "tell remote control to",
                "subitems": [],
                "path": "/reference/devices/tell-remote-control-to",
                "prevName": "tell camera to",
                "prevPath": "/reference/devices/tell-camera-to",
                "nextName": "raise alert to",
                "nextPath": "/reference/devices/raise-alert-to"
              },
              {
                "name": "raise alert to",
                "subitems": [],
                "path": "/reference/devices/raise-alert-to",
                "prevName": "tell remote control to",
                "prevPath": "/reference/devices/tell-remote-control-to",
                "nextName": "on notified",
                "nextPath": "/reference/devices/on-notified"
              },
              {
                "name": "on notified",
                "subitems": [],
                "path": "/reference/devices/on-notified",
                "prevName": "raise alert to",
                "prevPath": "/reference/devices/raise-alert-to",
                "nextName": "on gamepad button",
                "nextPath": "/reference/devices/on-gamepad-button"
              },
              {
                "name": "on gamepad button",
                "subitems": [],
                "path": "/reference/devices/on-gamepad-button",
                "prevName": "on notified",
                "prevPath": "/reference/devices/on-notified",
                "nextName": "signal strength",
                "nextPath": "/reference/devices/signal-strength"
              },
              {
                "name": "signal strength",
                "subitems": [],
                "path": "/reference/devices/signal-strength",
                "prevName": "on gamepad button",
                "prevPath": "/reference/devices/on-gamepad-button",
                "nextName": "on signal strength changed",
                "nextPath": "/reference/devices/on-signal-strength-changed"
              },
              {
                "name": "on signal strength changed",
                "subitems": [],
                "path": "/reference/devices/on-signal-strength-changed",
                "prevName": "signal strength",
                "prevPath": "/reference/devices/signal-strength",
                "nextName": "Packages",
                "nextPath": "/packages"
              }
            ],
            "path": "/reference/devices",
            "prevName": "advertise-uid-buffer",
            "prevPath": "/reference/bluetooth/advertise-uid-buffer",
            "nextName": "tell camera to",
            "nextPath": "/reference/devices/tell-camera-to"
          }
        ],
        "path": "/reference",
        "prevName": "Resources",
        "prevPath": "/courses/ucp-science/electricity/resources",
        "nextName": "Basic",
        "nextPath": "/reference/basic"
      },
      {
        "name": "Packages",
        "subitems": [],
        "path": "/packages",
        "prevName": "on signal strength changed",
        "prevPath": "/reference/devices/on-signal-strength-changed",
        "nextName": "Blocks",
        "nextPath": "/blocks"
      },
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "prevName": "Packages",
        "prevPath": "/packages",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
            "nextName": "Buffer",
            "nextPath": "/types/buffer"
          },
          {
            "name": "Buffer",
            "subitems": [
              {
                "name": "Using buffers",
                "subitems": [],
                "path": "/types/buffer/using-buffers",
                "prevName": "Buffer",
                "prevPath": "/types/buffer",
                "nextName": "Number format",
                "nextPath": "/types/buffer/number-format"
              },
              {
                "name": "Number format",
                "subitems": [],
                "path": "/types/buffer/number-format",
                "prevName": "Using buffers",
                "prevPath": "/types/buffer/using-buffers",
                "nextName": "Hardware",
                "nextPath": "/device"
              }
            ],
            "path": "/types/buffer",
            "prevName": "Function",
            "prevPath": "/types/function",
            "nextName": "Using buffers",
            "nextPath": "/types/buffer/using-buffers"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "Hardware",
        "subitems": [
          {
            "name": "Data Analysis",
            "subitems": [
              {
                "name": "Plotting with LEDs",
                "subitems": [],
                "path": "/device/data-analysis/led-plotting",
                "prevName": "Data Analysis",
                "prevPath": "/device/data-analysis",
                "nextName": "Viewing Data",
                "nextPath": "/device/data-analysis/viewing"
              },
              {
                "name": "Viewing Data",
                "subitems": [],
                "path": "/device/data-analysis/viewing",
                "prevName": "Plotting with LEDs",
                "prevPath": "/device/data-analysis/led-plotting",
                "nextName": "Writing Data",
                "nextPath": "/device/data-analysis/writing"
              },
              {
                "name": "Writing Data",
                "subitems": [],
                "path": "/device/data-analysis/writing",
                "prevName": "Viewing Data",
                "prevPath": "/device/data-analysis/viewing",
                "nextName": "Generating Data",
                "nextPath": "/device/data-analysis/generating"
              },
              {
                "name": "Generating Data",
                "subitems": [],
                "path": "/device/data-analysis/generating",
                "prevName": "Writing Data",
                "prevPath": "/device/data-analysis/writing",
                "nextName": "Analyzing Data",
                "nextPath": "/device/data-analysis/analyze"
              },
              {
                "name": "Analyzing Data",
                "subitems": [],
                "path": "/device/data-analysis/analyze",
                "prevName": "Generating Data",
                "prevPath": "/device/data-analysis/generating",
                "nextName": "Remote Data",
                "nextPath": "/device/data-analysis/remote"
              },
              {
                "name": "Remote Data",
                "subitems": [],
                "path": "/device/data-analysis/remote",
                "prevName": "Analyzing Data",
                "prevPath": "/device/data-analysis/analyze",
                "nextName": "Error codes",
                "nextPath": "/device/error-codes"
              }
            ],
            "path": "/device/data-analysis",
            "prevName": "Hardware",
            "prevPath": "/device",
            "nextName": "Plotting with LEDs",
            "nextPath": "/device/data-analysis/led-plotting"
          },
          {
            "name": "Error codes",
            "subitems": [],
            "path": "/device/error-codes",
            "prevName": "Remote Data",
            "prevPath": "/device/data-analysis/remote",
            "nextName": "Foil circuits",
            "nextPath": "/device/foil-circuits"
          },
          {
            "name": "Foil circuits",
            "subitems": [],
            "path": "/device/foil-circuits",
            "prevName": "Error codes",
            "prevPath": "/device/error-codes",
            "nextName": "MES events",
            "nextPath": "/device/mes-events"
          },
          {
            "name": "MES events",
            "subitems": [],
            "path": "/device/mes-events",
            "prevName": "Foil circuits",
            "prevPath": "/device/foil-circuits",
            "nextName": "Pins",
            "nextPath": "/device/pins"
          },
          {
            "name": "Pins",
            "subitems": [],
            "path": "/device/pins",
            "prevName": "MES events",
            "prevPath": "/device/mes-events",
            "nextName": "Reactive",
            "nextPath": "/device/reactive"
          },
          {
            "name": "Reactive",
            "subitems": [],
            "path": "/device/reactive",
            "prevName": "Pins",
            "prevPath": "/device/pins",
            "nextName": "Screen",
            "nextPath": "/device/screen"
          },
          {
            "name": "Screen",
            "subitems": [],
            "path": "/device/screen",
            "prevName": "Reactive",
            "prevPath": "/device/reactive",
            "nextName": "Serial",
            "nextPath": "/device/serial"
          },
          {
            "name": "Serial",
            "subitems": [],
            "path": "/device/serial",
            "prevName": "Screen",
            "prevPath": "/device/screen",
            "nextName": "Servo",
            "nextPath": "/device/servo"
          },
          {
            "name": "Servo",
            "subitems": [],
            "path": "/device/servo",
            "prevName": "Serial",
            "prevPath": "/device/serial",
            "nextName": "Simulator",
            "nextPath": "/device/simulator"
          },
          {
            "name": "Simulator",
            "subitems": [],
            "path": "/device/simulator",
            "prevName": "Servo",
            "prevPath": "/device/servo",
            "nextName": "Usb",
            "nextPath": "/device/usb"
          },
          {
            "name": "Usb",
            "subitems": [],
            "path": "/device/usb",
            "prevName": "Simulator",
            "prevPath": "/device/simulator",
            "nextName": "Flashing via HID (CMSIS-DAP)",
            "nextPath": "/hidflash"
          },
          {
            "name": "Flashing via HID (CMSIS-DAP)",
            "subitems": [],
            "path": "/hidflash",
            "prevName": "Usb",
            "prevPath": "/device/usb",
            "nextName": "About",
            "nextPath": "/about"
          }
        ],
        "path": "/device",
        "prevName": "Number format",
        "prevPath": "/types/buffer/number-format",
        "nextName": "Data Analysis",
        "nextPath": "/device/data-analysis"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "About",
            "subitems": [],
            "path": "/about",
            "prevName": "Flashing via HID (CMSIS-DAP)",
            "prevPath": "/hidflash",
            "nextName": "Support",
            "nextPath": "/support"
          },
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "About",
            "prevPath": "/about",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Save",
            "nextPath": "/save"
          },
          {
            "name": "Save",
            "subitems": [],
            "path": "/save",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Flashing via HID (CMSIS-DAP)",
        "prevPath": "/hidflash"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Save",
            "prevPath": "/save",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Blocks Embed",
            "nextPath": "/blocks-embed"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code"
          }
        ],
        "prevName": "Save",
        "prevPath": "/save"
      }
    ],
    "id": "microbit",
    "title": "Microsoft MakeCode for micro:bit",
    "name": "makecode.microbit.org",
    "description": "A Blocks / JavaScript code editor for the micro:bit powered by Microsoft MakeCode.",
    "htmlDocIncludes": {}
  },
  "versions": {
    "target": "1.1.26",
    "pxt": "3.18.10"
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0} block",
      "dependencies": {
        "core": "*",
        "radio": "*",
        "minode": "*",
        "pxt-magibit": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": "",
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <block type=\"pxt-on-start\"></block>\n  <block type=\"device_forever\"></block>\n</xml>",
      "main.ts": "\n"
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0} bit",
      "dependencies": {
        "core": "*",
        "radio": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": "",
      "main.ts": "basic.showLeds(`\n    . . . . .\n    . # . # .\n    . . . . .\n    # . . . #\n    . # # # .\n    `);"
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# core\n\nThe core library.\n\n",
      "basic.cpp": "#include \"pxt.h\"\n\n\n/**\n * Provides access to basic micro:bit functionality.\n */\n//% color=#0078D7 weight=100 icon=\"\\uf00a\"\nnamespace basic {\n\n    /**\n     * Draws an image on the LED screen.\n     * @param leds the pattern of LED to turn on/off\n     * @param interval time in milliseconds to pause after drawing\n     */\n    //% help=basic/show-leds\n    //% weight=95 blockGap=8\n    //% imageLiteral=1 async\n    //% blockId=device_show_leds\n    //% block=\"show leds\" icon=\"\\uf00a\"\n    //% parts=\"ledmatrix\"\n    void showLeds(ImageLiteral_ leds, int interval = 400) {\n      uBit.display.print(MicroBitImage(imageBytes(leds)), 0, 0, 0, interval);\n    }\n\n    /**\n     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.\n     * @param text the text to scroll on the screen, eg: \"Hello!\"\n     * @param interval how fast to shift characters; eg: 150, 100, 200, -100\n     */\n    //% help=basic/show-string\n    //% weight=87 blockGap=8\n    //% block=\"show|string %text\"\n    //% async\n    //% blockId=device_print_message\n    //% parts=\"ledmatrix\"\n    void showString(String text, int interval = 150) {\n      if (interval <= 0)\n        interval = 1;\n      int l = text ? text->length : 0;\n      if (l == 0) {\n        uBit.display.clear();\n        fiber_sleep(interval * 5);\n      } else if (l > 1) {\n        uBit.display.scroll(MSTR(text), interval);\n      } else {\n        uBit.display.print(text->data[0], interval * 5);\n      }\n    }\n\n    /**\n     * Turn off all LEDs\n     */\n    //% help=basic/clear-screen weight=79\n    //% blockId=device_clear_display block=\"clear screen\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    void clearScreen() {\n      uBit.display.image.clear();\n    }\n\n    /**\n     * Shows a sequence of LED screens as an animation.\n     * @param leds pattern of LEDs to turn on/off\n     * @param interval time in milliseconds between each redraw\n     */\n    //% help=basic/show-animation imageLiteral=1 async\n    //% parts=\"ledmatrix\"\n    void showAnimation(ImageLiteral_ leds, int interval = 400) {\n      uBit.display.animate(MicroBitImage(imageBytes(leds)), interval, 5, 0, 0);\n    }\n\n    /**\n     * Draws an image on the LED screen.\n     * @param leds pattern of LEDs to turn on/off\n     */\n    //% help=basic/plot-leds weight=80\n    //% parts=\"ledmatrix\"\n    void plotLeds(ImageLiteral_ leds) {\n      MicroBitImage i(imageBytes(leds));\n      uBit.display.print(i, 0, 0, 0, 0);\n    }\n\n    /**\n     * Repeats the code forever in the background. On each iteration, allows other codes to run.\n     * @param body code to execute\n     */\n    //% help=basic/forever weight=55 blockGap=8 blockAllowMultiple=1 afterOnStart=true\n    //% blockId=device_forever block=\"forever\" icon=\"\\uf01e\"\n    void forever(Action a) {\n      runForever(a);\n    }\n\n    /**\n     * Pause for the specified time in milliseconds\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\n     */\n    //% help=basic/pause weight=54\n    //% async block=\"pause (ms) %pause\"\n    //% blockId=device_pause icon=\"\\uf110\"\n    void pause(int ms) {\n      fiber_sleep(ms);\n    }\n}",
      "basic.ts": "namespace basic {\n    \n    /**\n     * Scroll a number on the screen. If the number fits on the screen (i.e. is a single digit), do not scroll.\n     * @param interval speed of scroll; eg: 150, 100, 200, -100\n     */\n    //% help=basic/show-number\n    //% weight=96\n    //% blockId=device_show_number block=\"show|number %number\" blockGap=8\n    //% async\n    //% parts=\"ledmatrix\" interval.defl=150\n    export function showNumber(value: number, interval?: number) {\n        showString(value.toString(), interval);\n    }\n}",
      "buffer.cpp": "#include \"pxtbase.h\"\n#include <limits.h>\n\nusing namespace std;\n\n//% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte\nnamespace BufferMethods {\n//%\nuint8_t *getBytes(Buffer buf) {\n    return buf->data;\n}\n\n//%\nint getByte(Buffer buf, int off) {\n    if (buf && 0 <= off && off < buf->length)\n        return buf->data[off];\n    return 0;\n}\n\n//%\nvoid setByte(Buffer buf, int off, int v) {\n    if (buf && 0 <= off && off < buf->length)\n        buf->data[off] = v;\n}\n\nint writeBuffer(Buffer buf, int dstOffset, Buffer src, int srcOffset = 0, int length = -1) {\n    if (length < 0)\n        length = src->length;\n\n    if (srcOffset < 0 || dstOffset < 0 || dstOffset > buf->length)\n        return -1;\n\n    length = min(src->length - srcOffset, buf->length - dstOffset);\n\n    if (length < 0)\n        return -1;\n\n    if (buf == src) {\n        memmove(buf->data + dstOffset, src->data + srcOffset, length);\n    } else {\n        memcpy(buf->data + dstOffset, src->data + srcOffset, length);\n    }\n\n    return 0;\n}\n\n/**\n * Write a number in specified format in the buffer.\n */\n//%\nvoid setNumber(Buffer buf, NumberFormat format, int offset, TNumber value) {\n    if (offset < 0)\n        return;\n    setNumberCore(buf->data + offset, buf->length - offset, format, value);\n}\n\n/**\n * Read a number in specified format from the buffer.\n */\n//%\nTNumber getNumber(Buffer buf, NumberFormat format, int offset) {\n    if (offset < 0)\n        return fromInt(0);\n    return getNumberCore(buf->data + offset, buf->length - offset, format);\n}\n\n/** Returns the length of a Buffer object. */\n//% property\nint length(Buffer s) {\n    return s->length;\n}\n\n/**\n * Fill (a fragment) of the buffer with given value.\n */\n//%\nvoid fill(Buffer buf, int value, int offset = 0, int length = -1) {\n    if (offset < 0 || offset > buf->length)\n        return; // DEVICE_INVALID_PARAMETER;\n    if (length < 0)\n        length = buf->length;\n    length = min(length, buf->length - offset);\n    memset(buf->data + offset, value, length);\n}\n\n/**\n * Return a copy of a fragment of a buffer.\n */\n//%\nBuffer slice(Buffer buf, int offset = 0, int length = -1) {\n    offset = min((int)buf->length, offset);\n    if (length < 0)\n        length = buf->length;\n    length = min(length, buf->length - offset);\n    return mkBuffer(buf->data + offset, length);\n}\n\n/**\n * Shift buffer left in place, with zero padding.\n * @param offset number of bytes to shift; use negative value to shift right\n * @param start start offset in buffer. Default is 0.\n * @param length number of elements in buffer. If negative, length is set as the buffer length minus\n * start. eg: -1\n */\n//%\nvoid shift(Buffer buf, int offset, int start = 0, int length = -1) {\n    if (length < 0)\n        length = buf->length - start;\n    if (start < 0 || start + length > buf->length || start + length < start || length == 0 ||\n        offset == 0 || offset == INT_MIN)\n        return;\n    if (offset <= -length || offset >= length) {\n        fill(buf, 0);\n        return;\n    }\n\n    uint8_t *data = buf->data + start;\n    if (offset < 0) {\n        offset = -offset;\n        memmove(data + offset, data, length - offset);\n        memset(data, 0, offset);\n    } else {\n        length = length - offset;\n        memmove(data, data + offset, length);\n        memset(data + length, 0, offset);\n    }\n}\n\n/**\n * Convert a buffer to its hexadecimal representation.\n */\n//%\nString toHex(Buffer buf) {\n    const char *hex = \"0123456789abcdef\";\n    auto res = mkString(NULL, buf->length * 2);\n    for (int i = 0; i < buf->length; ++i) {\n        res->data[i << 1] = hex[buf->data[i] >> 4];\n        res->data[(i << 1) + 1] = hex[buf->data[i] & 0xf];\n    }\n    return res;\n}\n\n/**\n * Rotate buffer left in place.\n * @param offset number of bytes to shift; use negative value to shift right\n * @param start start offset in buffer. Default is 0.\n * @param length number of elements in buffer. If negative, length is set as the buffer length minus\n * start. eg: -1\n */\n//%\nvoid rotate(Buffer buf, int offset, int start = 0, int length = -1) {\n    if (length < 0)\n        length = buf->length - start;\n    if (start < 0 || start + length > buf->length || start + length < start || length == 0 ||\n        offset == 0 || offset == INT_MIN)\n        return;\n\n    if (offset < 0)\n        offset += length << 8; // try to make it positive\n    offset %= length;\n    if (offset < 0)\n        offset += length;\n\n    uint8_t *data = buf->data + start;\n\n    uint8_t *n_first = data + offset;\n    uint8_t *first = data;\n    uint8_t *next = n_first;\n    uint8_t *last = data + length;\n\n    while (first != next) {\n        uint8_t tmp = *first;\n        *first++ = *next;\n        *next++ = tmp;\n        if (next == last) {\n            next = n_first;\n        } else if (first == n_first) {\n            n_first = next;\n        }\n    }\n}\n\n/**\n * Write contents of `src` at `dstOffset` in current buffer.\n */\n//%\nvoid write(Buffer buf, int dstOffset, Buffer src) {\n    // srcOff and length not supported, we only do up to 4 args :/\n    writeBuffer(buf, dstOffset, src, 0, -1);\n}\n}\n\nnamespace control {\n/**\n * Create a new zero-initialized buffer.\n * @param size number of bytes in the buffer\n */\n//%\nBuffer createBuffer(int size) {\n    return mkBuffer(NULL, size);\n}\n}\n\nnamespace pxt {\nstatic int writeBytes(uint8_t *dst, uint8_t *src, int length, bool swapBytes, int szLeft) {\n    if (szLeft < length) {\n        return -1;\n    }\n\n    if (swapBytes) {\n        uint8_t *p = dst + length;\n        for (int i = 0; i < length; ++i)\n            *--p = src[i];\n    } else {\n        if (length == 4 && ((uint32_t)dst & 3) == 0)\n            *(uint32_t *)dst = *(uint32_t *)src;\n        else if (length == 2 && ((uint32_t)dst & 1) == 0)\n            *(uint16_t *)dst = *(uint16_t *)src;\n        else\n            memcpy(dst, src, length);\n    }\n\n    return 0;\n}\n\nstatic int readBytes(uint8_t *src, uint8_t *dst, int length, bool swapBytes, int szLeft) {\n    if (szLeft < length) {\n        memset(dst, 0, length);\n        return -1;\n    }\n\n    if (swapBytes) {\n        uint8_t *p = src + length;\n        for (int i = 0; i < length; ++i)\n            dst[i] = *--p;\n    } else {\n        if (length == 4 && ((uint32_t)src & 3) == 0)\n            *(uint32_t *)dst = *(uint32_t *)src;\n        else if (length == 2 && ((uint32_t)src & 1) == 0)\n            *(uint16_t *)dst = *(uint16_t *)src;\n        else\n            memcpy(dst, src, length);\n    }\n\n    return 0;\n}\n\nvoid setNumberCore(uint8_t *buf, int szLeft, NumberFormat format, TNumber value) {\n    int8_t i8;\n    uint8_t u8;\n    int16_t i16;\n    uint16_t u16;\n    int32_t i32;\n    uint32_t u32;\n    float f32;\n    double f64;\n\n// Assume little endian\n#define WRITEBYTES(isz, swap, toInt)                                                               \\\n    isz = toInt(value);                                                                            \\\n    writeBytes(buf, (uint8_t *)&isz, sizeof(isz), swap, szLeft);                                   \\\n    break\n\n    switch (format) {\n    case NumberFormat::Int8LE:\n        WRITEBYTES(i8, false, toInt);\n    case NumberFormat::UInt8LE:\n        WRITEBYTES(u8, false, toInt);\n    case NumberFormat::Int16LE:\n        WRITEBYTES(i16, false, toInt);\n    case NumberFormat::UInt16LE:\n        WRITEBYTES(u16, false, toInt);\n    case NumberFormat::Int32LE:\n        WRITEBYTES(i32, false, toInt);\n    case NumberFormat::UInt32LE:\n        WRITEBYTES(u32, false, toUInt);\n\n    case NumberFormat::Int8BE:\n        WRITEBYTES(i8, true, toInt);\n    case NumberFormat::UInt8BE:\n        WRITEBYTES(u8, true, toInt);\n    case NumberFormat::Int16BE:\n        WRITEBYTES(i16, true, toInt);\n    case NumberFormat::UInt16BE:\n        WRITEBYTES(u16, true, toInt);\n    case NumberFormat::Int32BE:\n        WRITEBYTES(i32, true, toInt);\n    case NumberFormat::UInt32BE:\n        WRITEBYTES(u32, true, toUInt);\n\n    case NumberFormat::Float32LE:\n        WRITEBYTES(f32, false, toFloat);\n    case NumberFormat::Float32BE:\n        WRITEBYTES(f32, true, toFloat);\n    case NumberFormat::Float64LE:\n        WRITEBYTES(f64, false, toDouble);\n    case NumberFormat::Float64BE:\n        WRITEBYTES(f64, true, toDouble);\n    }\n}\n\nTNumber getNumberCore(uint8_t *buf, int szLeft, NumberFormat format) {\n    int8_t i8;\n    uint8_t u8;\n    int16_t i16;\n    uint16_t u16;\n    int32_t i32;\n    uint32_t u32;\n    float f32;\n    double f64;\n\n// Assume little endian\n#define READBYTES(isz, swap, conv)                                                                 \\\n    readBytes(buf, (uint8_t *)&isz, sizeof(isz), swap, szLeft);                                    \\\n    return conv(isz)\n\n    switch (format) {\n    case NumberFormat::Int8LE:\n        READBYTES(i8, false, fromInt);\n    case NumberFormat::UInt8LE:\n        READBYTES(u8, false, fromInt);\n    case NumberFormat::Int16LE:\n        READBYTES(i16, false, fromInt);\n    case NumberFormat::UInt16LE:\n        READBYTES(u16, false, fromInt);\n    case NumberFormat::Int32LE:\n        READBYTES(i32, false, fromInt);\n    case NumberFormat::UInt32LE:\n        READBYTES(u32, false, fromUInt);\n\n    case NumberFormat::Int8BE:\n        READBYTES(i8, true, fromInt);\n    case NumberFormat::UInt8BE:\n        READBYTES(u8, true, fromInt);\n    case NumberFormat::Int16BE:\n        READBYTES(i16, true, fromInt);\n    case NumberFormat::UInt16BE:\n        READBYTES(u16, true, fromInt);\n    case NumberFormat::Int32BE:\n        READBYTES(i32, true, fromInt);\n    case NumberFormat::UInt32BE:\n        READBYTES(u32, true, fromUInt);\n\n    case NumberFormat::Float32LE:\n        READBYTES(f32, false, fromFloat);\n    case NumberFormat::Float32BE:\n        READBYTES(f32, true, fromFloat);\n    case NumberFormat::Float64LE:\n        READBYTES(f64, false, fromDouble);\n    case NumberFormat::Float64BE:\n        READBYTES(f64, true, fromDouble);\n    }\n\n    return 0;\n}\n}",
      "codal.cpp": "#include \"pxt.h\"\n#include <stdarg.h>\n\nPXT_ABI(__aeabi_dadd)\nPXT_ABI(__aeabi_dcmplt)\nPXT_ABI(__aeabi_dcmpgt)\nPXT_ABI(__aeabi_dsub)\nPXT_ABI(__aeabi_ddiv)\nPXT_ABI(__aeabi_dmul)\n\nextern \"C\" void target_panic(int error_code)\n{\n    // wait for serial to flush\n    wait_us(300000);\n    microbit_panic(error_code);\n}\n\nextern \"C\" void target_reset()\n{\n    microbit_reset();\n}\n\nnamespace pxt {\n\nMicroBit uBit;\nMicroBitEvent lastEvent;\n\nvoid platform_init() {}\n\nvoid platform_init();\nvoid usb_init();\n\nstruct FreeList {\n    FreeList *next;\n};\n\nstatic void initCodal() {\n\n    uBit.init();\n\n    // repeat error 4 times and restart as needed\n    microbit_panic_timeout(4);\n}\n\nvoid dumpDmesg() {}\n\n// ---------------------------------------------------------------------------\n// An adapter for the API expected by the run-time.\n// ---------------------------------------------------------------------------\n\n// We have the invariant that if [dispatchEvent] is registered against the DAL\n// for a given event, then [handlersMap] contains a valid entry for that\n// event.\nvoid dispatchEvent(MicroBitEvent e) {\n    lastEvent = e;\n\n    auto curr = findBinding(e.source, e.value);\n    auto value = fromInt(e.value);\n    if (curr)\n        runAction1(curr->action, value);\n\n    curr = findBinding(e.source, DEVICE_EVT_ANY);\n    if (curr)\n        runAction1(curr->action, value);\n}\n\nvoid registerWithDal(int id, int event, Action a, int flags) {\n    // first time?\n    if (!findBinding(id, event))\n        uBit.messageBus.listen(id, event, dispatchEvent, flags);\n    setBinding(id, event, a);\n}\n\nvoid fiberDone(void *a) {\n    decr((Action)a);\n    release_fiber();\n}\n\nvoid releaseFiber() {\n    release_fiber();\n}\n\nvoid sleep_ms(unsigned ms) {\n    fiber_sleep(ms);\n}\n\nvoid sleep_us(uint64_t us) {\n    wait_us(us);\n}\n\nvoid forever_stub(void *a) {\n    while (true) {\n        runAction0((Action)a);\n        fiber_sleep(20);\n    }\n}\n\nvoid runForever(Action a) {\n    if (a != 0) {\n        incr(a);\n        create_fiber(forever_stub, (void *)a);\n    }\n}\n\nvoid runInParallel(Action a) {\n    if (a != 0) {\n        incr(a);\n        create_fiber((void (*)(void *))runAction0, (void *)a, fiberDone);\n    }\n}\n\nvoid waitForEvent(int id, int event) {\n    fiber_wait_for_event(id, event);\n}\n\nvoid initRuntime() {\n    initCodal();\n    platform_init();\n}\n\n//%\nunsigned afterProgramPage() {\n    unsigned ptr = (unsigned)&bytecode[0];\n    ptr += programSize();\n    ptr = (ptr + (PAGE_SIZE - 1)) & ~(PAGE_SIZE - 1);\n    return ptr;\n}\n\n\nint current_time_ms() {\n    return system_timer_current_time();\n}\n\nstatic void logwriten(const char *msg, int l)\n{\n    uBit.serial.send((uint8_t*)msg, l);\n}\n\nstatic void logwrite(const char *msg)\n{\n    logwriten(msg, strlen(msg));\n}\n\n\nstatic void writeNum(char *buf, uint32_t n, bool full)\n{\n    int i = 0;\n    int sh = 28;\n    while (sh >= 0)\n    {\n        int d = (n >> sh) & 0xf;\n        if (full || d || sh == 0 || i)\n        {\n            buf[i++] = d > 9 ? 'A' + d - 10 : '0' + d;\n        }\n        sh -= 4;\n    }\n    buf[i] = 0;\n}\n\nstatic void logwritenum(uint32_t n, bool full, bool hex)\n{\n    char buff[20];\n\n    if (hex)\n    {\n        writeNum(buff, n, full);\n        logwrite(\"0x\");\n    }\n    else\n    {\n        itoa(n, buff);\n    }\n\n    logwrite(buff);\n}\n\nvoid vdebuglog(const char *format, va_list ap)\n{\n    const char *end = format;\n\n    while (*end)\n    {\n        if (*end++ == '%')\n        {\n            logwriten(format, end - format - 1);\n            uint32_t val = va_arg(ap, uint32_t);\n            switch (*end++)\n            {\n            case 'c':\n                logwriten((const char *)&val, 1);\n                break;\n            case 'd':\n                logwritenum(val, false, false);\n                break;\n            case 'x':\n                logwritenum(val, false, true);\n                break;\n            case 'p':\n            case 'X':\n                logwritenum(val, true, true);\n                break;\n            case 's':\n                logwrite((char *)(void *)val);\n                break;\n            case '%':\n                logwrite(\"%\");\n                break;\n            default:\n                logwrite(\"???\");\n                break;\n            }\n            format = end;\n        }\n    }\n    logwriten(format, end - format);\n    logwrite(\"\\n\");\n}\n\nvoid debuglog(const char *format, ...)\n{\n    va_list arg;\n    va_start(arg, format);\n    vdebuglog(format, arg);\n    va_end(arg);\n}\n\n\n\n\n} // namespace pxt\n\n\n\n",
      "control.cpp": "#include \"pxt.h\"\n\n/**\n * How to create the event.\n */\nenum class EventCreationMode {\n    /**\n     * MicroBitEvent is initialised, and no further processing takes place.\n     */\n    CreateOnly = CREATE_ONLY,\n    /**\n     * MicroBitEvent is initialised, and its event handlers are immediately fired (not suitable for use in interrupts!).\n     */\n    CreateAndFire = CREATE_AND_FIRE,\n};\n\n// note the trailing '_' in names - otherwise we get conflict with the pre-processor\n// this trailing underscore is removed by enums.d.ts generation process\n\n// TODO shouldn't these be renamed to something more sensible anyways?\n\nenum EventBusSource {\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_A_ = MICROBIT_ID_BUTTON_A,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_B_ = MICROBIT_ID_BUTTON_B,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_AB_ = MICROBIT_ID_BUTTON_AB,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_RADIO_ = MICROBIT_ID_RADIO,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_GESTURE_ = MICROBIT_ID_GESTURE,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_ACCELEROMETER_ = MICROBIT_ID_ACCELEROMETER,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P0_ = MICROBIT_ID_IO_P0,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P1_ = MICROBIT_ID_IO_P1,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P2_ = MICROBIT_ID_IO_P2,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P3_ = MICROBIT_ID_IO_P3,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P4_ = MICROBIT_ID_IO_P4,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P5_ = MICROBIT_ID_IO_P5,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P6_ = MICROBIT_ID_IO_P6,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P7_ = MICROBIT_ID_IO_P7,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P8_ = MICROBIT_ID_IO_P8,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P9_ = MICROBIT_ID_IO_P9,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P10_ = MICROBIT_ID_IO_P10,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P11_ = MICROBIT_ID_IO_P11,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P12_ = MICROBIT_ID_IO_P12,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P13_ = MICROBIT_ID_IO_P13,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P14_ = MICROBIT_ID_IO_P14,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P15_ = MICROBIT_ID_IO_P15,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P16_ = MICROBIT_ID_IO_P16,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P19_ = MICROBIT_ID_IO_P19,\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P20_ = MICROBIT_ID_IO_P20,\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_DEVICE_INFO_ID_ = MES_DEVICE_INFO_ID,\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_SIGNAL_STRENGTH_ID_ = MES_SIGNAL_STRENGTH_ID,\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_DPAD_CONTROLLER_ID_ = MES_DPAD_CONTROLLER_ID,\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_BROADCAST_GENERAL_ID_ = MES_BROADCAST_GENERAL_ID,\n};\n\nenum EventBusValue {\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_EVT_ANY_ = MICROBIT_EVT_ANY,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_DOWN_ = MICROBIT_BUTTON_EVT_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_UP_ = MICROBIT_BUTTON_EVT_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_CLICK_ = MICROBIT_BUTTON_EVT_CLICK,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_RADIO_EVT_DATAGRAM_ = MICROBIT_RADIO_EVT_DATAGRAM,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE_ = MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_RISE_ = MICROBIT_PIN_EVT_RISE,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_FALL_ = MICROBIT_PIN_EVT_FALL,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_PULSE_HI_ = MICROBIT_PIN_EVT_PULSE_HI,\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_PULSE_LO_ = MICROBIT_PIN_EVT_PULSE_LO,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM1_ = MES_ALERT_EVT_ALARM1,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM2_ = MES_ALERT_EVT_ALARM2,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM3_ = MES_ALERT_EVT_ALARM3,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM4_ = MES_ALERT_EVT_ALARM4,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM5_ = MES_ALERT_EVT_ALARM5,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM6_ = MES_ALERT_EVT_ALARM6,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_DISPLAY_TOAST_ = MES_ALERT_EVT_DISPLAY_TOAST,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_FIND_MY_PHONE_ = MES_ALERT_EVT_FIND_MY_PHONE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_PLAY_RINGTONE_ = MES_ALERT_EVT_PLAY_RINGTONE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_PLAY_SOUND_ = MES_ALERT_EVT_PLAY_SOUND,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_VIBRATE_ = MES_ALERT_EVT_VIBRATE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE_ = MES_CAMERA_EVT_LAUNCH_PHOTO_MODE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE_ = MES_CAMERA_EVT_LAUNCH_VIDEO_MODE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_START_VIDEO_CAPTURE_ = MES_CAMERA_EVT_START_VIDEO_CAPTURE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_PHOTO_MODE_ = MES_CAMERA_EVT_STOP_PHOTO_MODE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE_ = MES_CAMERA_EVT_STOP_VIDEO_CAPTURE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_VIDEO_MODE_ = MES_CAMERA_EVT_STOP_VIDEO_MODE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_TAKE_PHOTO_ = MES_CAMERA_EVT_TAKE_PHOTO,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_TOGGLE_FRONT_REAR_ = MES_CAMERA_EVT_TOGGLE_FRONT_REAR,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_DISPLAY_OFF_ = MES_DEVICE_DISPLAY_OFF,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_DISPLAY_ON_ = MES_DEVICE_DISPLAY_ON,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_GESTURE_DEVICE_SHAKEN_ = MES_DEVICE_GESTURE_DEVICE_SHAKEN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_INCOMING_CALL_ = MES_DEVICE_INCOMING_CALL,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_INCOMING_MESSAGE_ = MES_DEVICE_INCOMING_MESSAGE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_ORIENTATION_LANDSCAPE_ = MES_DEVICE_ORIENTATION_LANDSCAPE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_ORIENTATION_PORTRAIT_ = MES_DEVICE_ORIENTATION_PORTRAIT,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_1_DOWN_ = MES_DPAD_BUTTON_1_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_1_UP_ = MES_DPAD_BUTTON_1_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_2_DOWN_ = MES_DPAD_BUTTON_2_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_2_UP_ = MES_DPAD_BUTTON_2_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_3_DOWN_ = MES_DPAD_BUTTON_3_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_3_UP_ = MES_DPAD_BUTTON_3_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_4_DOWN_ = MES_DPAD_BUTTON_4_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_4_UP_ = MES_DPAD_BUTTON_4_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_A_DOWN_ = MES_DPAD_BUTTON_A_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_A_UP_ = MES_DPAD_BUTTON_A_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_B_DOWN_ = MES_DPAD_BUTTON_B_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_B_UP_ = MES_DPAD_BUTTON_B_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_C_DOWN_ = MES_DPAD_BUTTON_C_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_C_UP_ = MES_DPAD_BUTTON_C_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_D_DOWN_ = MES_DPAD_BUTTON_D_DOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_D_UP_ = MES_DPAD_BUTTON_D_UP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_FORWARD_ = MES_REMOTE_CONTROL_EVT_FORWARD,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_NEXTTRACK_ = MES_REMOTE_CONTROL_EVT_NEXTTRACK,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PAUSE_ = MES_REMOTE_CONTROL_EVT_PAUSE,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PLAY_ = MES_REMOTE_CONTROL_EVT_PLAY,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PREVTRACK_ = MES_REMOTE_CONTROL_EVT_PREVTRACK,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_REWIND_ = MES_REMOTE_CONTROL_EVT_REWIND,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_STOP_ = MES_REMOTE_CONTROL_EVT_STOP,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN_ = MES_REMOTE_CONTROL_EVT_VOLUMEDOWN,\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_VOLUMEUP_ = MES_REMOTE_CONTROL_EVT_VOLUMEUP,\n};\n\n//% weight=1 color=\"#333333\"\n//% advanced=true\nnamespace control {\n    void fiberDone(void *a)\n    {\n      decr((Action)a);\n      release_fiber();\n    }\n\n    /**\n     * Schedules code that run in the background.\n     */\n    //% help=control/in-background blockAllowMultiple=1 afterOnStart=true\n    //% blockId=\"control_in_background\" block=\"run in background\" blockGap=8\n    void inBackground(Action a) {\n      runInParallel(a);\n    }\n\n    /**\n     * Resets the BBC micro:bit.\n     */\n    //% weight=30 async help=control/reset blockGap=8\n    //% blockId=\"control_reset\" block=\"reset\"\n    void reset() {\n      microbit_reset();\n    }\n\n    /**\n    * Blocks the current fiber for the given microseconds\n    * @param micros number of micro-seconds to wait. eg: 4\n    */\n    //% help=control/wait-micros weight=29\n    //% blockId=\"control_wait_us\" block=\"wait (µs)%micros\"\n    void waitMicros(int micros) {\n        wait_us(micros);\n    }\n\n    /**\n     * Raises an event in the event bus.\n     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.\n     * @param value Component specific code indicating the cause of the event.\n     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_FIRE).\n     */\n    //% weight=21 blockGap=12 blockId=\"control_raise_event\" block=\"raise event|from source %src=control_event_source_id|with value %value=control_event_value_id\" blockExternalInputs=1\n    //% help=control/raise-event\n    //% mode.defl=CREATE_AND_FIRE\n    void raiseEvent(int src, int value, EventCreationMode mode) {\n        MicroBitEvent evt(src, value, (MicroBitEventLaunchMode)mode);\n    }\n\n    /**\n     * Registers an event handler.\n     */\n    //% weight=20 blockGap=8 blockId=\"control_on_event\" block=\"on event|from %src=control_event_source_id|with value %value=control_event_value_id\"\n    //% help=control/on-event\n    //% blockExternalInputs=1\n    void onEvent(int src, int value, Action handler) {\n        registerWithDal(src, value, handler);\n    }\n\n    /**\n    * Gets the value of the last event executed on the bus\n    */\n    //% blockId=control_event_value\" block=\"event value\"\n    //% help=control/event-value\n    //% weight=18\n    int eventValue() {\n        return pxt::lastEvent.value;\n    }\n\n    /**\n    * Gets the timestamp of the last event executed on the bus\n    */\n    //% blockId=control_event_timestamp\" block=\"event timestamp\"\n    //% help=control/event-timestamp\n    //% weight=19 blockGap=8\n    int eventTimestamp() {\n        return pxt::lastEvent.timestamp;\n    }\n\n    /**\n     * Make a friendly name for the device based on its serial number\n     */\n    //% blockId=\"control_device_name\" block=\"device name\" weight=10 blockGap=8\n    //% advanced=true\n    String deviceName() {\n        return mkString(microbit_friendly_name(), -1);\n    }\n\n    /**\n    * Derive a unique, consistent serial number of this device from internal data.\n    */\n    //% blockId=\"control_device_serial_number\" block=\"device serial number\" weight=9\n    //% advanced=true\n    int deviceSerialNumber() {\n        return microbit_serial_number();\n    }\n}\n",
      "control.ts": "/**\n* Runtime and event utilities.\n*/\n//% weight=1 color=\"#333333\" icon=\"\\uf233\"\n//% advanced=true\nnamespace control {\n\n    /**\n     * Returns the value of a C++ runtime constant\n     */\n    //% weight=2 weight=19 blockId=\"control_event_source_id\" block=\"%id\" blockGap=8\n    //% shim=TD_ID advanced=true\n    export function eventSourceId(id: EventBusSource): number {\n        return id;\n    }\n    /**\n     * Returns the value of a C++ runtime constant\n     */\n    //% weight=1 weight=19 blockId=\"control_event_value_id\" block=\"%id\"\n    //% shim=TD_ID advanced=true\n    export function eventValueId(id: EventBusValue): number {\n        return id;\n    }\n\n    /**\n     * Display specified error code and stop the program.\n     */\n    //% shim=pxtrt::panic\n    export function panic(code: number) { }\n\n    /**\n     * If the condition is false, display msg on serial console, and panic with code 098.\n     */\n    export function assert(condition: boolean, msg?: string) {\n        if (!condition) {\n            console.log(\"ASSERTION FAILED\")\n            if (msg != null) {\n                console.log(msg)\n            }\n            panic(98)\n        }\n    }\n\n    /**\n     * Display warning in the simulator.\n     */\n    //% shim=pxtrt::runtimeWarning\n    export function runtimeWarning(message: string) { }\n}\n",
      "core.cpp": "#include \"pxtbase.h\"\n#include <limits.h>\n#include <stdlib.h>\n\nusing namespace std;\n\n\n#define p10(v) __builtin_powi(10, v)\n\n\nnamespace pxt {\n\nstatic HandlerBinding *handlerBindings;\n\nHandlerBinding *findBinding(int source, int value) {\n    for (auto p = handlerBindings; p; p = p->next) {\n        if (p->source == source && p->value == value) {\n            return p;\n        }\n    }\n    return 0;\n}\n\nvoid setBinding(int source, int value, Action act) {\n    auto curr = findBinding(source, value);\n    incr(act);\n    if (curr) {\n        decr(curr->action);\n        curr->action = act;\n        return;\n    }\n    curr = new HandlerBinding();\n    curr->next = handlerBindings;\n    curr->source = source;\n    curr->value = value;\n    curr->action = act;\n    handlerBindings = curr;\n}\n\nstatic const uint16_t emptyString[]\n    __attribute__((aligned(4))) = {0xffff, PXT_REF_TAG_STRING, 0, 0};\n\nstatic const uint16_t emptyBuffer[]\n    __attribute__((aligned(4))) = {0xffff, PXT_REF_TAG_BUFFER, 0, 0};\n\nString mkString(const char *data, int len) {\n    if (len < 0)\n        len = strlen(data);\n    if (len == 0)\n        return (String)emptyString;\n    String r = new (::operator new(sizeof(BoxedString) + len + 1)) BoxedString();\n    r->length = len;\n    if (data)\n        memcpy(r->data, data, len);\n    r->data[len] = 0;\n    MEMDBG(\"mkString: len=%d => %p\", len, r);\n    return r;\n}\n\nBuffer mkBuffer(const uint8_t *data, int len) {\n    if (len <= 0)\n        return (Buffer)emptyBuffer;\n    Buffer r = new (::operator new(sizeof(BoxedBuffer) + len)) BoxedBuffer();\n    r->length = len;\n    if (data)\n        memcpy(r->data, data, len);\n    else\n        memset(r->data, 0, len);\n    MEMDBG(\"mkBuffer: len=%d => %p\", len, r);\n    return r;\n}\n\n#ifndef X86_64\nTNumber mkNaN() {\n    // TODO optimize\n    return fromDouble(NAN);\n}\n#endif\n\nstatic unsigned random_value = 0xC0DA1;\n\nvoid seedRandom(unsigned seed) {\n    random_value = seed;\n}\n\nunsigned getRandom(unsigned max) {\n    unsigned m, result;\n\n    do {\n        m = (unsigned)max;\n        result = 0;\n\n        do {\n            // Cycle the LFSR (Linear Feedback Shift Register).\n            // We use an optimal sequence with a period of 2^32-1, as defined by Bruce Schneier here\n            // (a true legend in the field!),\n            // For those interested, it's documented in his paper:\n            // \"Pseudo-Random Sequence Generator for 32-Bit CPUs: A fast, machine-independent\n            // generator for 32-bit Microprocessors\"\n            // https://www.schneier.com/paper-pseudorandom-sequence.html\n            unsigned r = random_value;\n\n            r = ((((r >> 31) ^ (r >> 6) ^ (r >> 4) ^ (r >> 2) ^ (r >> 1) ^ r) & 1) << 31) |\n                (r >> 1);\n\n            random_value = r;\n\n            result = ((result << 1) | (r & 0x00000001));\n        } while (m >>= 1);\n    } while (result > (unsigned)max);\n\n    return result;\n}\n\nPXT_DEF_STRING(sTrue, \"\\x04\\x00true\")\nPXT_DEF_STRING(sFalse, \"\\x05\\x00false\")\nPXT_DEF_STRING(sUndefined, \"\\x09\\x00undefined\")\nPXT_DEF_STRING(sNull, \"\\x04\\x00null\")\nPXT_DEF_STRING(sObject, \"\\x08\\x00[Object]\")\nPXT_DEF_STRING(sFunction, \"\\x0A\\x00[Function]\")\nPXT_DEF_STRING(sNaN, \"\\x03\\x00NaN\")\nPXT_DEF_STRING(sInf, \"\\x08\\x00Infinity\")\nPXT_DEF_STRING(sMInf, \"\\x09\\x00-Infinity\")\n} // namespace pxt\n\n#ifndef X86_64\n\nnamespace String_ {\n\n//%\nString mkEmpty() {\n    return mkString(\"\", 0);\n}\n\n//%\nString fromCharCode(int code) {\n    char buf[] = {(char)code, 0};\n    return mkString(buf, 1);\n}\n\n//%\nString charAt(String s, int pos) {\n    if (s && 0 <= pos && pos < s->length) {\n        return fromCharCode(s->data[pos]);\n    } else {\n        return mkEmpty();\n    }\n}\n\n//%\nTNumber charCodeAt(String s, int pos) {\n    if (s && 0 <= pos && pos < s->length) {\n        return fromInt(s->data[pos]);\n    } else {\n        return mkNaN();\n    }\n}\n\n//%\nString concat(String s, String other) {\n    if (!s)\n        s = (String)sNull;\n    if (!other)\n        other = (String)sNull;\n    if (s->length == 0)\n        return (String)incrRC(other);\n    if (other->length == 0)\n        return (String)incrRC(s);\n    String r = mkString(NULL, s->length + other->length);\n    memcpy(r->data, s->data, s->length);\n    memcpy(r->data + s->length, other->data, other->length);\n    return r;\n}\n\n//%\nint compare(String s, String that) {\n    if (s == that)\n        return 0;\n    // TODO this isn't quite right, in JS both `null < \"foo\"` and `null > \"foo\"` are false\n    if (!s)\n        return -1;\n    if (!that)\n        return 1;\n    int compareResult = strcmp(s->data, that->data);\n    if (compareResult < 0)\n        return -1;\n    else if (compareResult > 0)\n        return 1;\n    return 0;\n}\n\n//%\nint length(String s) {\n    return s->length;\n}\n\n#define isspace(c) ((c) == ' ')\n\ndouble mystrtod(const char *p, char **endp) {\n    while (isspace(*p))\n        p++;\n    double m = 1;\n    double v = 0;\n    int dot = 0;\n    if (*p == '+')\n        p++;\n    if (*p == '-') {\n        m = -1;\n        p++;\n    }\n    if (*p == '0' && (p[1] | 0x20) == 'x') {\n        return m * strtol(p, endp, 16);\n    }\n    while (*p) {\n        int c = *p - '0';\n        if (0 <= c && c <= 9) {\n            v *= 10;\n            v += c;\n            if (dot)\n                m /= 10;\n        } else if (!dot && *p == '.') {\n            dot = 1;\n        } else if (*p == 'e' || *p == 'E') {\n            break;\n        } else {\n            while (isspace(*p))\n                p++;\n            if (*p)\n                return NAN;\n            break;\n        }\n        p++;\n    }\n\n    v *= m;\n\n    if (*p) {\n        p++;\n        int pw = strtol(p, endp, 10);\n        v *= p10(pw);\n    }\n\n    return v;\n}\n\n//%\nTNumber toNumber(String s) {\n    // JSCHECK\n    char *endptr;\n    double v = mystrtod(s->data, &endptr);\n    if (endptr != s->data + s->length)\n        v = NAN;\n    else if (v == 0.0 || v == -0.0)\n        v = v;\n    else if (!isnormal(v))\n        v = NAN;\n    return fromDouble(v);\n}\n\n//%\nString substr(String s, int start, int length) {\n    if (length <= 0)\n        return mkEmpty();\n    if (start < 0)\n        start = max(s->length + start, 0);\n    length = min(length, s->length - start);\n    return mkString(s->data + start, length);\n}\n} // namespace String_\n\nnamespace Boolean_ {\n//%\nbool bang(int v) {\n    return v == 0;\n}\n} // namespace Boolean_\n\nnamespace pxt {\n\n// ES5 9.5, 9.6\nunsigned toUInt(TNumber v) {\n    if (isNumber(v))\n        return numValue(v);\n    if (isSpecial(v)) {\n        if ((intptr_t)v >> 6)\n            return 1;\n        else\n            return 0;\n    }\n    if (!v)\n        return 0;\n\n    double num = toDouble(v);\n    if (!isnormal(num))\n        return 0;\n    double rem = fmod(trunc(num), 4294967296.0);\n    if (rem < 0.0)\n        rem += 4294967296.0;\n    return (unsigned)rem;\n}\nint toInt(TNumber v) {\n    return (int)toUInt(v);\n}\n\n// only support double in tagged mode\ndouble toDouble(TNumber v) {\n    if (isTagged(v))\n        return toInt(v);\n\n    // JSCHECK\n    ValType t = valType(v);\n    if (t == ValType::Number) {\n        BoxedNumber *p = (BoxedNumber *)v;\n        return p->num;\n    } else if (t == ValType::String) {\n        return toDouble(String_::toNumber((String)v));\n    } else {\n        return NAN;\n    }\n}\n\nfloat toFloat(TNumber v) {\n    // TODO optimize?\n    return (float)toDouble(v);\n}\n\nTNumber fromDouble(double r) {\n#ifndef PXT_BOX_DEBUG\n    int ri = ((int)r) << 1;\n    if ((ri >> 1) == r)\n        return (TNumber)(ri | 1);\n#endif\n    BoxedNumber *p = new BoxedNumber();\n    p->num = r;\n    MEMDBG(\"mkNum: %p\", p);\n    return (TNumber)p;\n}\n\nTNumber fromFloat(float r) {\n    // TODO optimize\n    return fromDouble(r);\n}\n\nTNumber fromInt(int v) {\n    if (canBeTagged(v))\n        return TAG_NUMBER(v);\n    return fromDouble(v);\n}\n\nTNumber fromUInt(unsigned v) {\n#ifndef PXT_BOX_DEBUG\n    if (v <= 0x3fffffff)\n        return TAG_NUMBER(v);\n#endif\n    return fromDouble(v);\n}\n\nTValue fromBool(bool v) {\n    if (v)\n        return TAG_TRUE;\n    else\n        return TAG_FALSE;\n}\n\nTNumber eqFixup(TNumber v) {\n    if (v == TAG_NULL)\n        return TAG_UNDEFINED;\n    if (v == TAG_TRUE)\n        return TAG_NUMBER(1);\n    if (v == TAG_FALSE)\n        return TAG_NUMBER(0);\n    return v;\n}\n\nbool eqq_bool(TValue a, TValue b) {\n    // TODO improve this\n\n    if (a == b)\n        return true;\n\n    ValType ta = valType(a);\n    ValType tb = valType(b);\n\n    if (ta != tb)\n        return false;\n\n    if (ta == ValType::String)\n        return String_::compare((String)a, (String)b) == 0;\n\n    int aa = (int)a;\n    int bb = (int)b;\n\n    // if at least one of the values is tagged, they are not equal\n    if ((aa | bb) & 3)\n        return false;\n\n    if (ta == ValType::Number)\n        return toDouble(a) == toDouble(b);\n    else\n        return a == b;\n}\n\nbool eq_bool(TValue a, TValue b) {\n    return eqq_bool(eqFixup(a), eqFixup(b));\n}\n\n//%\nbool switch_eq(TValue a, TValue b) {\n    if (eqq_bool(eqFixup(a), eqFixup(b))) {\n        decr(b);\n        return true;\n    }\n    return false;\n}\n\n} // namespace pxt\n\nnamespace langsupp {\n//%\nTValue ptreq(TValue a, TValue b) {\n    return eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n\n//%\nTValue ptreqq(TValue a, TValue b) {\n    return eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n\n//%\nTValue ptrneq(TValue a, TValue b) {\n    return !eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n\n//%\nTValue ptrneqq(TValue a, TValue b) {\n    return !eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n} // namespace langsupp\n\n#define NUMOP(op) return fromDouble(toDouble(a) op toDouble(b));\n#define BITOP(op) return fromInt(toInt(a) op toInt(b));\nnamespace numops {\n\n//%\nint toBool(TValue v) {\n    if (isTagged(v)) {\n        if (v == TAG_UNDEFINED || v == TAG_NULL || v == TAG_FALSE || v == TAG_NUMBER(0))\n            return 0;\n        else\n            return 1;\n    }\n\n    ValType t = valType(v);\n    if (t == ValType::String) {\n        String s = (String)v;\n        if (s->length == 0)\n            return 0;\n    } else if (t == ValType::Number) {\n        double x = toDouble(v);\n        if (isnan(x) || x == 0.0 || x == -0.0)\n            return 0;\n        else\n            return 1;\n    }\n\n    return 1;\n}\n\n//%\nint toBoolDecr(TValue v) {\n    if (v == TAG_TRUE)\n        return 1;\n    if (v == TAG_FALSE)\n        return 0;\n    int r = toBool(v);\n    decr(v);\n    return r;\n}\n\n// TODO\n// The integer, non-overflow case for add/sub/bit opts is handled in assembly\n\n//%\nTNumber adds(TNumber a, TNumber b){NUMOP(+)}\n\n//%\nTNumber subs(TNumber a, TNumber b){NUMOP(-)}\n\n//%\nTNumber muls(TNumber a, TNumber b) {\n    if (bothNumbers(a, b)) {\n        int aa = (int)a;\n        int bb = (int)b;\n        // if both operands fit 15 bits, the result will not overflow int\n        if ((aa >> 15 == 0 || aa >> 15 == -1) && (bb >> 15 == 0 || bb >> 15 == -1)) {\n            // it may overflow 31 bit int though - use fromInt to convert properly\n            return fromInt((aa >> 1) * (bb >> 1));\n        }\n    }\n    NUMOP(*)\n}\n\n//%\nTNumber div(TNumber a, TNumber b){NUMOP(/)}\n\n//%\nTNumber mod(TNumber a, TNumber b) {\n    if (isNumber(a) && isNumber(b) && numValue(b))\n        BITOP(%)\n    return fromDouble(fmod(toDouble(a), toDouble(b)));\n}\n\n//%\nTNumber lsls(TNumber a, TNumber b){BITOP(<<)}\n\n//%\nTNumber lsrs(TNumber a, TNumber b) {\n    return fromUInt(toUInt(a) >> toUInt(b));\n}\n\n//%\nTNumber asrs(TNumber a, TNumber b){BITOP(>>)}\n\n//%\nTNumber eors(TNumber a, TNumber b){BITOP (^)}\n\n//%\nTNumber orrs(TNumber a, TNumber b){BITOP(|)}\n\n//%\nTNumber bnot(TNumber a) {\n    return fromInt(~toInt(a));\n}\n\n//%\nTNumber ands(TNumber a, TNumber b) {\n    BITOP(&)\n}\n\n#define CMPOP_RAW(op)                                                                              \\\n    if (bothNumbers(a, b))                                                                         \\\n        return (int)a op((int)b);                                                                  \\\n    return toDouble(a) op toDouble(b);\n\n#define CMPOP(op)                                                                                  \\\n    if (bothNumbers(a, b))                                                                         \\\n        return ((int)a op((int)b)) ? TAG_TRUE : TAG_FALSE;                                         \\\n    return toDouble(a) op toDouble(b) ? TAG_TRUE : TAG_FALSE;\n\n//%\nbool lt_bool(TNumber a, TNumber b){CMPOP_RAW(<)}\n\n//%\nTNumber le(TNumber a, TNumber b){CMPOP(<=)}\n\n//%\nTNumber lt(TNumber a, TNumber b){CMPOP(<)}\n\n//%\nTNumber ge(TNumber a, TNumber b){CMPOP(>=)}\n\n//%\nTNumber gt(TNumber a, TNumber b){CMPOP(>)}\n\n//%\nTNumber eq(TNumber a, TNumber b) {\n    return pxt::eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n\n//%\nTNumber neq(TNumber a, TNumber b) {\n    return !pxt::eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n\n//%\nTNumber eqq(TNumber a, TNumber b) {\n    return pxt::eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n\n//%\nTNumber neqq(TNumber a, TNumber b) {\n    return !pxt::eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\n}\n\nvoid mycvt(double d, char *buf) {\n    if (d < 0) {\n        *buf++ = '-';\n        d = -d;\n    }\n\n    if (!d) {\n        *buf++ = '0';\n        *buf++ = 0;\n        return;\n    }\n\n    int pw = (int)log10(d);\n    int e = 1;\n    int beforeDot = 1;\n\n    if (0.000001 <= d && d < 1e21) {\n        if (pw > 0) {\n            d /= p10(pw);\n            beforeDot = 1 + pw;\n        }\n    } else {\n        d /= p10(pw);\n        e = pw;\n    }\n\n    int sig = 0;\n    while (sig < 17 || beforeDot > 0) {\n        //printf(\"%f sig=%d bd=%d\\n\", d, sig, beforeDot);\n        int c = (int)d;\n        *buf++ = '0' + c;\n        d = (d - c) * 10;\n        if (--beforeDot == 0)\n            *buf++ = '.';\n        if (sig || c)\n            sig++;\n    }\n\n    buf--;\n    while (*buf == '0')\n        buf--;\n    if (*buf == '.')\n        buf--;\n    buf++;\n    \n    if (e != 1) {\n        *buf++ = 'e';\n        itoa(e, buf);\n    } else {\n        *buf = 0;\n    }\n}\n\n\n//%\nString toString(TValue v) {\n\n    if (v == TAG_UNDEFINED)\n        return (String)(void *)sUndefined;\n    else if (v == TAG_FALSE)\n        return (String)(void *)sFalse;\n    else if (v == TAG_TRUE)\n        return (String)(void *)sTrue;\n    else if (v == TAG_NULL)\n        return (String)(void *)sNull;\n    ValType t = valType(v);\n\n    if (t == ValType::String) {\n        return (String)(void *)incr(v);\n    } else if (t == ValType::Number) {\n        char buf[64];\n\n        double x = toDouble(v);\n\n        if (isnan(x))\n            return (String)(void *)sNaN;\n        if (isinf(x)) {\n            if (x < 0)\n                return (String)(void *)sMInf;\n            else\n                return (String)(void *)sInf;\n        }\n        mycvt(x, buf);\n\n        return mkString(buf);\n    } else if (t == ValType::Function) {\n        return (String)(void *)sFunction;\n    } else {\n        return (String)(void *)sObject;\n    }\n}\n} // namespace numops\n\nnamespace Math_ {\n//%\nTNumber pow(TNumber x, TNumber y) {\n    // regular pow() from math.h is 4k of code\n    return fromDouble(__builtin_powi(toDouble(x), toInt(y)));\n}\n\n//%\nTNumber atan2(TNumber y, TNumber x) {\n    return fromDouble(::atan2(toDouble(y), toDouble(y)));\n}\n\ndouble randomDouble() {\n    return getRandom(UINT_MAX) / ((double)UINT_MAX + 1) +\n           getRandom(0xffffff) / ((double)UINT_MAX * 0xffffff);\n}\n\n//%\nTNumber random() {\n    return fromDouble(randomDouble());\n}\n\n//%\nTNumber randomRange(TNumber min, TNumber max) {\n    if (isNumber(min) && isNumber(max)) {\n        int mini = numValue(min);\n        int maxi = numValue(max);\n        if (mini > maxi) {\n            int temp = mini;\n            mini = maxi;\n            maxi = temp;\n        }\n        if (maxi == mini)\n            return fromInt(mini);\n        else\n            return fromInt(mini + getRandom(maxi - mini));\n    } else {\n        double mind = toDouble(min);\n        double maxd = toDouble(max);\n        if (mind > maxd) {\n            double temp = mind;\n            mind = maxd;\n            maxd = temp;\n        }\n        if (maxd == mind)\n            return fromDouble(mind);\n        else {\n            return fromDouble(mind + randomDouble() * (maxd - mind));\n        }\n    }\n}\n\n#define SINGLE(op) return fromDouble(::op(toDouble(x)));\n\n//%\nTNumber log(TNumber x){SINGLE(log)}\n\n//%\nTNumber log10(TNumber x){SINGLE(log10)}\n\n//%\nTNumber sqrt(TNumber x){SINGLE(sqrt)}\n\n//%\nTNumber floor(TNumber x){SINGLE(floor)}\n\n//%\nTNumber ceil(TNumber x){SINGLE(ceil)}\n\n//%\nTNumber trunc(TNumber x){SINGLE(trunc)}\n\n//%\nTNumber round(TNumber x) {\n    SINGLE(round)\n}\n\n//%\nint imul(int x, int y) {\n    return x * y;\n}\n\n//%\nint idiv(int x, int y) {\n    return x / y;\n}\n} // namespace Math_\n\nnamespace Array_ {\n//%\nRefCollection *mk(unsigned flags) {\n    auto r = new RefCollection();\n    MEMDBG(\"mkColl: %p\", r);\n    return r;\n}\n//%\nint length(RefCollection *c) {\n    return c->length();\n}\n//%\nvoid setLength(RefCollection *c, int newLength) {\n    c->setLength(newLength);\n}\n//%\nvoid push(RefCollection *c, TValue x) {\n    c->push(x);\n}\n//%\nTValue pop(RefCollection *c) {\n    return c->pop();\n}\n//%\nTValue getAt(RefCollection *c, int x) {\n    return c->getAt(x);\n}\n//%\nvoid setAt(RefCollection *c, int x, TValue y) {\n    c->setAt(x, y);\n}\n//%\nTValue removeAt(RefCollection *c, int x) {\n    return c->removeAt(x);\n}\n//%\nvoid insertAt(RefCollection *c, int x, TValue value) {\n    c->insertAt(x, value);\n}\n//%\nint indexOf(RefCollection *c, TValue x, int start) {\n    return c->indexOf(x, start);\n}\n//%\nbool removeElement(RefCollection *c, TValue x) {\n    return c->removeElement(x);\n}\n} // namespace Array_\n\nnamespace pxt {\n//%\nvoid *ptrOfLiteral(int offset);\n\n//%\nunsigned programSize() {\n    return bytecode[17] * 2;\n}\n\n//%\nint getConfig(int key, int defl) {\n    int *cfgData = *(int **)&bytecode[18];\n    for (int i = 0;; i += 2) {\n        if (cfgData[i] == key)\n            return cfgData[i + 1];\n        if (cfgData[i] == 0)\n            return defl;\n    }\n}\n\n} // namespace pxt\n\nnamespace pxtrt {\n//%\nTValue ldloc(RefLocal *r) {\n    return r->v;\n}\n\n//%\nTValue ldlocRef(RefRefLocal *r) {\n    TValue tmp = r->v;\n    incr(tmp);\n    return tmp;\n}\n\n//%\nvoid stloc(RefLocal *r, TValue v) {\n    r->v = v;\n}\n\n//%\nvoid stlocRef(RefRefLocal *r, TValue v) {\n    decr(r->v);\n    r->v = v;\n}\n\n//%\nRefLocal *mkloc() {\n    auto r = new RefLocal();\n    MEMDBG(\"mkloc: %p\", r);\n    return r;\n}\n\n//%\nRefRefLocal *mklocRef() {\n    auto r = new RefRefLocal();\n    MEMDBG(\"mklocRef: %p\", r);\n    return r;\n}\n\n// All of the functions below unref() self. This is for performance reasons -\n// the code emitter will not emit the unrefs for them.\n\n//%\nTValue ldfld(RefRecord *r, int idx) {\n    TValue tmp = r->ld(idx);\n    r->unref();\n    return tmp;\n}\n\n//%\nTValue ldfldRef(RefRecord *r, int idx) {\n    TValue tmp = r->ldref(idx);\n    r->unref();\n    return tmp;\n}\n\n//%\nvoid stfld(RefRecord *r, int idx, TValue val) {\n    r->st(idx, val);\n    r->unref();\n}\n\n//%\nvoid stfldRef(RefRecord *r, int idx, TValue val) {\n    r->stref(idx, val);\n    r->unref();\n}\n\n// Store a captured local in a closure. It returns the action, so it can be chained.\n//%\nRefAction *stclo(RefAction *a, int idx, TValue v) {\n    // DBG(\"STCLO \"); a->print(); DBG(\"@%d = %p\\n\", idx, (void*)v);\n    a->stCore(idx, v);\n    return a;\n}\n\n//%\nvoid panic(int code) {\n    target_panic(code);\n}\n\n//%\nString emptyToNull(String s) {\n    if (!s || s->length == 0)\n        return NULL;\n    return s;\n}\n\n//%\nint ptrToBool(TValue p) {\n    if (p) {\n        decr(p);\n        return 1;\n    } else {\n        return 0;\n    }\n}\n\n//%\nRefMap *mkMap() {\n    auto r = new RefMap();\n    MEMDBG(\"mkMap: %p\", r);\n    return r;\n}\n\n//%\nTValue mapGet(RefMap *map, unsigned key) {\n    int i = map->findIdx(key);\n    if (i < 0) {\n        map->unref();\n        return 0;\n    }\n    TValue r = incr(map->values.get(i));\n    map->unref();\n    return r;\n}\n\n//%\nTValue mapGetRef(RefMap *map, unsigned key) {\n    return mapGet(map, key);\n}\n\n//%\nvoid mapSet(RefMap *map, unsigned key, TValue val) {\n    int i = map->findIdx(key);\n    if (i < 0) {\n        map->keys.push((TValue)key);\n        map->values.push(val);\n    } else {\n        map->values.setRef(i, val);\n    }\n    map->unref();\n}\n\n//%\nvoid mapSetRef(RefMap *map, unsigned key, TValue val) {\n    mapSet(map, key, val);\n}\n\n//\n// Debugger\n//\n\n// This is only to be called once at the beginning of lambda function\n//%\nvoid *getGlobalsPtr() {\n#ifdef DEVICE_GROUP_ID_USER\n    fiber_set_group(DEVICE_GROUP_ID_USER);\n#endif\n\n    return globals;\n}\n\n//%\nvoid runtimeWarning(String s) {\n    // noop for now\n}\n} // namespace pxtrt\n#endif\n\nnamespace pxt {\n\n//%\nValType valType(TValue v) {\n    if (isTagged(v)) {\n        if (!v)\n            return ValType::Undefined;\n\n        if (isNumber(v))\n            return ValType::Number;\n        if (v == TAG_TRUE || v == TAG_FALSE)\n            return ValType::Boolean;\n        else if (v == TAG_NULL)\n            return ValType::Object;\n        else {\n            oops();\n            return ValType::Object;\n        }\n    } else {\n        int tag = ((RefObject *)v)->vtable;\n\n        if (tag == PXT_REF_TAG_STRING)\n            return ValType::String;\n        else if (tag == PXT_REF_TAG_NUMBER)\n            return ValType::Number;\n        else if (tag == PXT_REF_TAG_ACTION || getVTable((RefObject *)v) == &RefAction_vtable)\n            return ValType::Function;\n\n        return ValType::Object;\n    }\n}\n\nPXT_DEF_STRING(sObjectTp, \"\\x06\\x00object\")\nPXT_DEF_STRING(sBooleanTp, \"\\x07\\x00boolean\")\nPXT_DEF_STRING(sStringTp, \"\\x06\\x00string\")\nPXT_DEF_STRING(sNumberTp, \"\\x06\\x00number\")\nPXT_DEF_STRING(sFunctionTp, \"\\x08\\x00function\")\nPXT_DEF_STRING(sUndefinedTp, \"\\x09\\x00undefined\")\n\n//%\nString typeOf(TValue v) {\n    switch (valType(v)) {\n    case ValType::Undefined:\n        return (String)sUndefinedTp;\n    case ValType::Boolean:\n        return (String)sBooleanTp;\n    case ValType::Number:\n        return (String)sNumberTp;\n    case ValType::String:\n        return (String)sStringTp;\n    case ValType::Object:\n        return (String)sObjectTp;\n    case ValType::Function:\n        return (String)sFunctionTp;\n    default:\n        oops();\n        return 0;\n    }\n}\n\n// Maybe in future we will want separate print methods; for now ignore\nvoid anyPrint(TValue v) {\n    if (valType(v) == ValType::Object) {\n        if (isRefCounted(v)) {\n            auto o = (RefObject *)v;\n            auto meth = ((RefObjectMethod)getVTable(o)->methods[1]);\n            if ((void *)meth == (void *)&anyPrint)\n                DMESG(\"[RefObject refs=%d vt=%p]\", o->refcnt, o->vtable);\n            else\n                meth(o);\n        } else {\n            DMESG(\"[Native %p]\", v);\n        }\n    } else {\n#ifndef X86_64\n        String s = numops::toString(v);\n        DMESG(\"[%s %p = %s]\", pxt::typeOf(v)->data, v, s->data);\n        decr((TValue)s);\n#endif\n    }\n}\n\nvoid dtorDoNothing() {}\n\n#define PRIM_VTABLE(name, sz)                                                                      \\\n    const VTable name = {sz,                                                                       \\\n                         0,                                                                        \\\n                         0,                                                                        \\\n                         {                                                                         \\\n                             (void *)&dtorDoNothing,                                               \\\n                             (void *)&anyPrint,                                                    \\\n                         }};\nPRIM_VTABLE(string_vt, 0)\nPRIM_VTABLE(image_vt, 0)\nPRIM_VTABLE(buffer_vt, 0)\nPRIM_VTABLE(number_vt, 12)\nPRIM_VTABLE(action_vt, 0)\n\nstatic const VTable *primVtables[] = {0,          // 0\n                                      &string_vt, // 1\n                                      &buffer_vt, // 2\n                                      &image_vt,  // 3\n                                      // filler:\n                                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n                                      0, 0, 0, 0, 0, 0, 0,\n                                      &number_vt, // 32\n                                      &action_vt, // 33\n                                      0};\n\nVTable *getVTable(RefObject *r) {\n    if (r->vtable >= 34)\n        return (VTable *)((uintptr_t)r->vtable << vtableShift);\n    if (r->vtable == 0)\n        target_panic(100);\n    return (VTable *)primVtables[r->vtable];\n}\n} // namespace pxt\n",
      "dal.d.ts": "// Auto-generated. Do not edit.\ndeclare const enum DAL {\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/ExternalEvents.h\n    MICROBIT_ID_BLE = 1000,\n    MICROBIT_ID_BLE_UART = 1200,\n    MICROBIT_BLE_EVT_CONNECTED = 1,\n    MICROBIT_BLE_EVT_DISCONNECTED = 2,\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MESEvents.h\n    MES_REMOTE_CONTROL_ID = 1001,\n    MES_REMOTE_CONTROL_EVT_PLAY = 1,\n    MES_REMOTE_CONTROL_EVT_PAUSE = 2,\n    MES_REMOTE_CONTROL_EVT_STOP = 3,\n    MES_REMOTE_CONTROL_EVT_NEXTTRACK = 4,\n    MES_REMOTE_CONTROL_EVT_PREVTRACK = 5,\n    MES_REMOTE_CONTROL_EVT_FORWARD = 6,\n    MES_REMOTE_CONTROL_EVT_REWIND = 7,\n    MES_REMOTE_CONTROL_EVT_VOLUMEUP = 8,\n    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN = 9,\n    MES_CAMERA_ID = 1002,\n    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE = 1,\n    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE = 2,\n    MES_CAMERA_EVT_TAKE_PHOTO = 3,\n    MES_CAMERA_EVT_START_VIDEO_CAPTURE = 4,\n    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE = 5,\n    MES_CAMERA_EVT_STOP_PHOTO_MODE = 6,\n    MES_CAMERA_EVT_STOP_VIDEO_MODE = 7,\n    MES_CAMERA_EVT_TOGGLE_FRONT_REAR = 8,\n    MES_ALERTS_ID = 1004,\n    MES_ALERT_EVT_DISPLAY_TOAST = 1,\n    MES_ALERT_EVT_VIBRATE = 2,\n    MES_ALERT_EVT_PLAY_SOUND = 3,\n    MES_ALERT_EVT_PLAY_RINGTONE = 4,\n    MES_ALERT_EVT_FIND_MY_PHONE = 5,\n    MES_ALERT_EVT_ALARM1 = 6,\n    MES_ALERT_EVT_ALARM2 = 7,\n    MES_ALERT_EVT_ALARM3 = 8,\n    MES_ALERT_EVT_ALARM4 = 9,\n    MES_ALERT_EVT_ALARM5 = 10,\n    MES_ALERT_EVT_ALARM6 = 11,\n    MES_SIGNAL_STRENGTH_ID = 1101,\n    MES_SIGNAL_STRENGTH_EVT_NO_BAR = 1,\n    MES_SIGNAL_STRENGTH_EVT_ONE_BAR = 2,\n    MES_SIGNAL_STRENGTH_EVT_TWO_BAR = 3,\n    MES_SIGNAL_STRENGTH_EVT_THREE_BAR = 4,\n    MES_SIGNAL_STRENGTH_EVT_FOUR_BAR = 5,\n    MES_DEVICE_INFO_ID = 1103,\n    MES_DEVICE_ORIENTATION_LANDSCAPE = 1,\n    MES_DEVICE_ORIENTATION_PORTRAIT = 2,\n    MES_DEVICE_GESTURE_NONE = 3,\n    MES_DEVICE_GESTURE_DEVICE_SHAKEN = 4,\n    MES_DEVICE_DISPLAY_OFF = 5,\n    MES_DEVICE_DISPLAY_ON = 6,\n    MES_DEVICE_INCOMING_CALL = 7,\n    MES_DEVICE_INCOMING_MESSAGE = 8,\n    MES_DPAD_CONTROLLER_ID = 1104,\n    MES_DPAD_BUTTON_A_DOWN = 1,\n    MES_DPAD_BUTTON_A_UP = 2,\n    MES_DPAD_BUTTON_B_DOWN = 3,\n    MES_DPAD_BUTTON_B_UP = 4,\n    MES_DPAD_BUTTON_C_DOWN = 5,\n    MES_DPAD_BUTTON_C_UP = 6,\n    MES_DPAD_BUTTON_D_DOWN = 7,\n    MES_DPAD_BUTTON_D_UP = 8,\n    MES_DPAD_BUTTON_1_DOWN = 9,\n    MES_DPAD_BUTTON_1_UP = 10,\n    MES_DPAD_BUTTON_2_DOWN = 11,\n    MES_DPAD_BUTTON_2_UP = 12,\n    MES_DPAD_BUTTON_3_DOWN = 13,\n    MES_DPAD_BUTTON_3_UP = 14,\n    MES_DPAD_BUTTON_4_DOWN = 15,\n    MES_DPAD_BUTTON_4_UP = 16,\n    MES_BROADCAST_GENERAL_ID = 2000,\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitAccelerometerService.h\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitBLEManager.h\n    MICROBIT_BLE_PAIR_REQUEST = 0x01,\n    MICROBIT_BLE_PAIR_COMPLETE = 0x02,\n    MICROBIT_BLE_PAIR_PASSCODE = 0x04,\n    MICROBIT_BLE_PAIR_SUCCESSFUL = 0x08,\n    MICROBIT_BLE_PAIRING_TIMEOUT = 90,\n    MICROBIT_BLE_POWER_LEVELS = 8,\n    MICROBIT_BLE_MAXIMUM_BONDS = 4,\n    MICROBIT_BLE_EDDYSTONE_ADV_INTERVAL = 400,\n    MICROBIT_BLE_EDDYSTONE_DEFAULT_POWER = 0xF0,\n    MICROBIT_BLE_STATUS_STORE_SYSATTR = 0x02,\n    MICROBIT_BLE_STATUS_DISCONNECT = 0x04,\n    MICROBIT_BLE_DISCONNECT_AFTER_PAIRING_DELAY = 500,\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitButtonService.h\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitDFUService.h\n    MICROBIT_DFU_OPCODE_START_DFU = 1,\n    MICROBIT_DFU_HISTOGRAM_WIDTH = 5,\n    MICROBIT_DFU_HISTOGRAM_HEIGHT = 5,\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitEddystone.h\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitEventService.h\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitIOPinService.h\n    MICROBIT_IO_PIN_SERVICE_PINCOUNT = 19,\n    MICROBIT_IO_PIN_SERVICE_DATA_SIZE = 10,\n    MICROBIT_PWM_PIN_SERVICE_DATA_SIZE = 2,\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitLEDService.h\n    MICROBIT_BLE_MAXIMUM_SCROLLTEXT = 20,\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitMagnetometerService.h\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitTemperatureService.h\n    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitUARTService.h\n    MICROBIT_UART_S_DEFAULT_BUF_SIZE = 20,\n    MICROBIT_UART_S_EVT_DELIM_MATCH = 1,\n    MICROBIT_UART_S_EVT_HEAD_MATCH = 2,\n    MICROBIT_UART_S_EVT_RX_FULL = 3,\n    // built/yt/yotta_modules/microbit-dal/inc/core/ErrorNo.h\n    MICROBIT_OK = 0,\n    MICROBIT_INVALID_PARAMETER = -1001,\n    MICROBIT_NOT_SUPPORTED = -1002,\n    MICROBIT_CALIBRATION_IN_PROGRESS = -1003,\n    MICROBIT_CALIBRATION_REQUIRED = -1004,\n    MICROBIT_NO_RESOURCES = -1005,\n    MICROBIT_BUSY = -1006,\n    MICROBIT_CANCELLED = -1007,\n    MICROBIT_I2C_ERROR = -1010,\n    MICROBIT_SERIAL_IN_USE = -1011,\n    MICROBIT_NO_DATA = -1012,\n    MICROBIT_OOM = 20,\n    MICROBIT_HEAP_ERROR = 30,\n    MICROBIT_NULL_DEREFERENCE = 40,\n    // built/yt/yotta_modules/microbit-dal/inc/core/EventModel.h\n    // built/yt/yotta_modules/microbit-dal/inc/core/MemberFunctionCallback.h\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitCompat.h\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitComponent.h\n    MICROBIT_ID_BUTTON_A = 1,\n    MICROBIT_ID_BUTTON_B = 2,\n    MICROBIT_ID_BUTTON_RESET = 3,\n    MICROBIT_ID_ACCELEROMETER = 4,\n    MICROBIT_ID_COMPASS = 5,\n    MICROBIT_ID_DISPLAY = 6,\n    MICROBIT_IO_PINS = 20,\n    MICROBIT_ID_IO_P0 = 7,\n    MICROBIT_ID_IO_P1 = 8,\n    MICROBIT_ID_IO_P2 = 9,\n    MICROBIT_ID_IO_P3 = 10,\n    MICROBIT_ID_IO_P4 = 11,\n    MICROBIT_ID_IO_P5 = 12,\n    MICROBIT_ID_IO_P6 = 13,\n    MICROBIT_ID_IO_P7 = 14,\n    MICROBIT_ID_IO_P8 = 15,\n    MICROBIT_ID_IO_P9 = 16,\n    MICROBIT_ID_IO_P10 = 17,\n    MICROBIT_ID_IO_P11 = 18,\n    MICROBIT_ID_IO_P12 = 19,\n    MICROBIT_ID_IO_P13 = 20,\n    MICROBIT_ID_IO_P14 = 21,\n    MICROBIT_ID_IO_P15 = 22,\n    MICROBIT_ID_IO_P16 = 23,\n    MICROBIT_ID_IO_P19 = 24,\n    MICROBIT_ID_IO_P20 = 25,\n    MICROBIT_ID_BUTTON_AB = 26,\n    MICROBIT_ID_GESTURE = 27,\n    MICROBIT_ID_THERMOMETER = 28,\n    MICROBIT_ID_RADIO = 29,\n    MICROBIT_ID_RADIO_DATA_READY = 30,\n    MICROBIT_ID_MULTIBUTTON_ATTACH = 31,\n    MICROBIT_ID_SERIAL = 32,\n    MICROBIT_ID_MESSAGE_BUS_LISTENER = 1021,\n    MICROBIT_ID_NOTIFY_ONE = 1022,\n    MICROBIT_ID_NOTIFY = 1023,\n    MICROBIT_COMPONENT_RUNNING = 0x01,\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitDevice.h\n    MICROBIT_NAME_LENGTH = 5,\n    MICROBIT_NAME_CODE_LETTERS = 5,\n    MICROBIT_PANIC_ERROR_CHARS = 4,\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitFiber.h\n    MICROBIT_SCHEDULER_RUNNING = 0x01,\n    MICROBIT_FIBER_FLAG_FOB = 0x01,\n    MICROBIT_FIBER_FLAG_PARENT = 0x02,\n    MICROBIT_FIBER_FLAG_CHILD = 0x04,\n    MICROBIT_FIBER_FLAG_DO_NOT_PAGE = 0x08,\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitFont.h\n    MICROBIT_FONT_WIDTH = 5,\n    MICROBIT_FONT_HEIGHT = 5,\n    MICROBIT_FONT_ASCII_START = 32,\n    MICROBIT_FONT_ASCII_END = 126,\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitHeapAllocator.h\n    MICROBIT_MAXIMUM_HEAPS = 2,\n    MICROBIT_HEAP_BLOCK_FREE = 0x80000000,\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitListener.h\n    MESSAGE_BUS_LISTENER_PARAMETERISED = 0x0001,\n    MESSAGE_BUS_LISTENER_METHOD = 0x0002,\n    MESSAGE_BUS_LISTENER_BUSY = 0x0004,\n    MESSAGE_BUS_LISTENER_REENTRANT = 0x0008,\n    MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY = 0x0010,\n    MESSAGE_BUS_LISTENER_DROP_IF_BUSY = 0x0020,\n    MESSAGE_BUS_LISTENER_NONBLOCKING = 0x0040,\n    MESSAGE_BUS_LISTENER_URGENT = 0x0080,\n    MESSAGE_BUS_LISTENER_DELETING = 0x8000,\n    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitSystemTimer.h\n    // built/yt/yotta_modules/microbit-dal/inc/core/NotifyEvents.h\n    MICROBIT_DISPLAY_EVT_FREE = 1,\n    MICROBIT_SERIAL_EVT_TX_EMPTY = 2,\n    MICROBIT_UART_S_EVT_TX_EMPTY = 3,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/DynamicPwm.h\n    MICROBIT_DEFAULT_PWM_PERIOD = 20000,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitAccelerometer.h\n    MICROBIT_ACCEL_PITCH_ROLL_VALID = 0x02,\n    MICROBIT_ACCEL_ADDED_TO_IDLE = 0x04,\n    MMA8653_DEFAULT_ADDR = 0x3A,\n    MMA8653_STATUS = 0x00,\n    MMA8653_OUT_X_MSB = 0x01,\n    MMA8653_WHOAMI = 0x0D,\n    MMA8653_XYZ_DATA_CFG = 0x0E,\n    MMA8653_CTRL_REG1 = 0x2A,\n    MMA8653_CTRL_REG2 = 0x2B,\n    MMA8653_CTRL_REG3 = 0x2C,\n    MMA8653_CTRL_REG4 = 0x2D,\n    MMA8653_CTRL_REG5 = 0x2E,\n    MMA8653_WHOAMI_VAL = 0x5A,\n    MMA8653_SAMPLE_RANGES = 3,\n    MMA8653_SAMPLE_RATES = 8,\n    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE = 1,\n    MICROBIT_ACCELEROMETER_EVT_NONE = 0,\n    MICROBIT_ACCELEROMETER_EVT_TILT_UP = 1,\n    MICROBIT_ACCELEROMETER_EVT_TILT_DOWN = 2,\n    MICROBIT_ACCELEROMETER_EVT_TILT_LEFT = 3,\n    MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT = 4,\n    MICROBIT_ACCELEROMETER_EVT_FACE_UP = 5,\n    MICROBIT_ACCELEROMETER_EVT_FACE_DOWN = 6,\n    MICROBIT_ACCELEROMETER_EVT_FREEFALL = 7,\n    MICROBIT_ACCELEROMETER_EVT_3G = 8,\n    MICROBIT_ACCELEROMETER_EVT_6G = 9,\n    MICROBIT_ACCELEROMETER_EVT_8G = 10,\n    MICROBIT_ACCELEROMETER_EVT_SHAKE = 11,\n    MICROBIT_ACCELEROMETER_REST_TOLERANCE = 200,\n    MICROBIT_ACCELEROMETER_TILT_TOLERANCE = 200,\n    MICROBIT_ACCELEROMETER_FREEFALL_TOLERANCE = 400,\n    MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE = 400,\n    MICROBIT_ACCELEROMETER_3G_TOLERANCE = 3072,\n    MICROBIT_ACCELEROMETER_6G_TOLERANCE = 6144,\n    MICROBIT_ACCELEROMETER_8G_TOLERANCE = 8192,\n    MICROBIT_ACCELEROMETER_GESTURE_DAMPING = 5,\n    MICROBIT_ACCELEROMETER_SHAKE_DAMPING = 10,\n    MICROBIT_ACCELEROMETER_SHAKE_RTX = 30,\n    MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitButton.h\n    MICROBIT_BUTTON_EVT_DOWN = 1,\n    MICROBIT_BUTTON_EVT_UP = 2,\n    MICROBIT_BUTTON_EVT_CLICK = 3,\n    MICROBIT_BUTTON_EVT_LONG_CLICK = 4,\n    MICROBIT_BUTTON_EVT_HOLD = 5,\n    MICROBIT_BUTTON_EVT_DOUBLE_CLICK = 6,\n    MICROBIT_BUTTON_LONG_CLICK_TIME = 1000,\n    MICROBIT_BUTTON_HOLD_TIME = 1500,\n    MICROBIT_BUTTON_STATE = 1,\n    MICROBIT_BUTTON_STATE_HOLD_TRIGGERED = 2,\n    MICROBIT_BUTTON_STATE_CLICK = 4,\n    MICROBIT_BUTTON_STATE_LONG_CLICK = 8,\n    MICROBIT_BUTTON_SIGMA_MIN = 0,\n    MICROBIT_BUTTON_SIGMA_MAX = 12,\n    MICROBIT_BUTTON_SIGMA_THRESH_HI = 8,\n    MICROBIT_BUTTON_SIGMA_THRESH_LO = 2,\n    MICROBIT_BUTTON_DOUBLE_CLICK_THRESH = 50,\n    MICROBIT_BUTTON_SIMPLE_EVENTS = 0,\n    MICROBIT_BUTTON_ALL_EVENTS = 1,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitCompass.h\n    MAG3110_DEFAULT_ADDR = 0x1D,\n    MAG_DR_STATUS = 0x00,\n    MAG_OUT_X_MSB = 0x01,\n    MAG_OUT_X_LSB = 0x02,\n    MAG_OUT_Y_MSB = 0x03,\n    MAG_OUT_Y_LSB = 0x04,\n    MAG_OUT_Z_MSB = 0x05,\n    MAG_OUT_Z_LSB = 0x06,\n    MAG_WHOAMI = 0x07,\n    MAG_SYSMOD = 0x08,\n    MAG_OFF_X_MSB = 0x09,\n    MAG_OFF_X_LSB = 0x0A,\n    MAG_OFF_Y_MSB = 0x0B,\n    MAG_OFF_Y_LSB = 0x0C,\n    MAG_OFF_Z_MSB = 0x0D,\n    MAG_OFF_Z_LSB = 0x0E,\n    MAG_DIE_TEMP = 0x0F,\n    MAG_CTRL_REG1 = 0x10,\n    MAG_CTRL_REG2 = 0x11,\n    MAG3110_SAMPLE_RATES = 11,\n    MICROBIT_COMPASS_EVT_CAL_REQUIRED = 1,\n    MICROBIT_COMPASS_EVT_CAL_START = 2,\n    MICROBIT_COMPASS_EVT_CAL_END = 3,\n    MICROBIT_COMPASS_EVT_DATA_UPDATE = 4,\n    MICROBIT_COMPASS_EVT_CONFIG_NEEDED = 5,\n    MICROBIT_COMPASS_EVT_CALIBRATE = 6,\n    MICROBIT_COMPASS_STATUS_CALIBRATED = 2,\n    MICROBIT_COMPASS_STATUS_CALIBRATING = 4,\n    MICROBIT_COMPASS_STATUS_ADDED_TO_IDLE = 8,\n    MAG3110_WHOAMI_VAL = 0xC4,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitCompassCalibrator.h\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitDisplay.h\n    MICROBIT_DISPLAY_EVT_ANIMATION_COMPLETE = 1,\n    MICROBIT_DISPLAY_EVT_LIGHT_SENSE = 2,\n    MICROBIT_DISPLAY_DEFAULT_AUTOCLEAR = 1,\n    MICROBIT_DISPLAY_SPACING = 1,\n    MICROBIT_DISPLAY_GREYSCALE_BIT_DEPTH = 8,\n    MICROBIT_DISPLAY_ANIMATE_DEFAULT_POS = -255,\n    ANIMATION_MODE_NONE = 0,\n    ANIMATION_MODE_STOPPED = 1,\n    ANIMATION_MODE_SCROLL_TEXT = 2,\n    ANIMATION_MODE_PRINT_TEXT = 3,\n    ANIMATION_MODE_SCROLL_IMAGE = 4,\n    ANIMATION_MODE_ANIMATE_IMAGE = 5,\n    ANIMATION_MODE_ANIMATE_IMAGE_WITH_CLEAR = 6,\n    ANIMATION_MODE_PRINT_CHARACTER = 7,\n    DISPLAY_MODE_BLACK_AND_WHITE = 0,\n    DISPLAY_MODE_GREYSCALE = 1,\n    DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE = 2,\n    MICROBIT_DISPLAY_ROTATION_0 = 0,\n    MICROBIT_DISPLAY_ROTATION_90 = 1,\n    MICROBIT_DISPLAY_ROTATION_180 = 2,\n    MICROBIT_DISPLAY_ROTATION_270 = 3,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitFile.h\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitFileSystem.h\n    MBFS_FILENAME_LENGTH = 16,\n    MB_READ = 0x01,\n    MB_WRITE = 0x02,\n    MB_CREAT = 0x04,\n    MB_APPEND = 0x08,\n    MB_SEEK_SET = 0x01,\n    MB_SEEK_END = 0x02,\n    MB_SEEK_CUR = 0x04,\n    MBFS_STATUS_INITIALISED = 0x01,\n    MBFS_UNUSED = 0xFFFF,\n    MBFS_EOF = 0xEFFF,\n    MBFS_DELETED = 0x0000,\n    MBFS_DIRECTORY_ENTRY_FREE = 0x8000,\n    MBFS_DIRECTORY_ENTRY_VALID = 0x4000,\n    MBFS_DIRECTORY_ENTRY_DIRECTORY = 0x2000,\n    MBFS_DIRECTORY_ENTRY_NEW = 0xffff,\n    MBFS_DIRECTORY_ENTRY_DELETED = 0x0000,\n    MBFS_BLOCK_TYPE_FILE = 1,\n    MBFS_BLOCK_TYPE_DIRECTORY = 2,\n    MBFS_BLOCK_TYPE_FILETABLE = 3,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitFlash.h\n    PAGE_SIZE = 1024,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitI2C.h\n    MICROBIT_I2C_MAX_RETRIES = 9,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitIO.h\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitLightSensor.h\n    MICROBIT_LIGHT_SENSOR_CHAN_NUM = 3,\n    MICROBIT_LIGHT_SENSOR_AN_SET_TIME = 4000,\n    MICROBIT_LIGHT_SENSOR_TICK_PERIOD = 5,\n    MICROBIT_LIGHT_SENSOR_MAX_VALUE = 338,\n    MICROBIT_LIGHT_SENSOR_MIN_VALUE = 75,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitMatrixMaps.h\n    NO_CONN = 0,\n    MICROBIT_DISPLAY_WIDTH = 5,\n    MICROBIT_DISPLAY_HEIGHT = 5,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitMessageBus.h\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitMultiButton.h\n    MICROBIT_MULTI_BUTTON_STATE_1 = 0x01,\n    MICROBIT_MULTI_BUTTON_STATE_2 = 0x02,\n    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_1 = 0x04,\n    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_2 = 0x08,\n    MICROBIT_MULTI_BUTTON_SUPRESSED_1 = 0X10,\n    MICROBIT_MULTI_BUTTON_SUPRESSED_2 = 0x20,\n    MICROBIT_MULTI_BUTTON_ATTACHED = 0x40,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitPin.h\n    IO_STATUS_DIGITAL_IN = 0x01,\n    IO_STATUS_DIGITAL_OUT = 0x02,\n    IO_STATUS_ANALOG_IN = 0x04,\n    IO_STATUS_ANALOG_OUT = 0x08,\n    IO_STATUS_TOUCH_IN = 0x10,\n    IO_STATUS_EVENT_ON_EDGE = 0x20,\n    IO_STATUS_EVENT_PULSE_ON_EDGE = 0x40,\n    MICROBIT_PIN_MAX_OUTPUT = 1023,\n    MICROBIT_PIN_MAX_SERVO_RANGE = 180,\n    MICROBIT_PIN_DEFAULT_SERVO_RANGE = 2000,\n    MICROBIT_PIN_DEFAULT_SERVO_CENTER = 1500,\n    MICROBIT_PIN_EVENT_NONE = 0,\n    MICROBIT_PIN_EVENT_ON_EDGE = 1,\n    MICROBIT_PIN_EVENT_ON_PULSE = 2,\n    MICROBIT_PIN_EVENT_ON_TOUCH = 3,\n    MICROBIT_PIN_EVT_RISE = 2,\n    MICROBIT_PIN_EVT_FALL = 3,\n    MICROBIT_PIN_EVT_PULSE_HI = 4,\n    MICROBIT_PIN_EVT_PULSE_LO = 5,\n    PIN_CAPABILITY_DIGITAL_IN = 0x01,\n    PIN_CAPABILITY_DIGITAL_OUT = 0x02,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitQuadratureDecoder.h\n    QDEC_USE_SYSTEM_TICK = 0x01,\n    QDEC_USE_DEBOUNCE = 0x02,\n    QDEC_LED_ACTIVE_LOW = 0x04,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitRadio.h\n    MICROBIT_RADIO_STATUS_INITIALISED = 0x0001,\n    MICROBIT_RADIO_BASE_ADDRESS = 0x75626974,\n    MICROBIT_RADIO_DEFAULT_GROUP = 0,\n    MICROBIT_RADIO_DEFAULT_TX_POWER = 6,\n    MICROBIT_RADIO_DEFAULT_FREQUENCY = 7,\n    MICROBIT_RADIO_MAX_PACKET_SIZE = 32,\n    MICROBIT_RADIO_HEADER_SIZE = 4,\n    MICROBIT_RADIO_MAXIMUM_RX_BUFFERS = 4,\n    MICROBIT_RADIO_PROTOCOL_DATAGRAM = 1,\n    MICROBIT_RADIO_PROTOCOL_EVENTBUS = 2,\n    MICROBIT_RADIO_EVT_DATAGRAM = 1,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitRadioDatagram.h\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitRadioEvent.h\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitSerial.h\n    MICROBIT_SERIAL_DEFAULT_BAUD_RATE = 115200,\n    MICROBIT_SERIAL_DEFAULT_BUFFER_SIZE = 20,\n    MICROBIT_SERIAL_EVT_DELIM_MATCH = 1,\n    MICROBIT_SERIAL_EVT_HEAD_MATCH = 2,\n    MICROBIT_SERIAL_EVT_RX_FULL = 3,\n    MICROBIT_SERIAL_RX_IN_USE = 1,\n    MICROBIT_SERIAL_TX_IN_USE = 2,\n    MICROBIT_SERIAL_RX_BUFF_INIT = 4,\n    MICROBIT_SERIAL_TX_BUFF_INIT = 8,\n    ASYNC = 0,\n    SYNC_SPINWAIT = 1,\n    SYNC_SLEEP = 2,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitStorage.h\n    MICROBIT_STORAGE_MAGIC = 0xCAFE,\n    MICROBIT_STORAGE_BLOCK_SIZE = 48,\n    MICROBIT_STORAGE_KEY_SIZE = 16,\n    MICROBIT_STORAGE_STORE_PAGE_OFFSET = 17,\n    MICROBIT_STORAGE_SCRATCH_PAGE_OFFSET = 19,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitThermometer.h\n    MICROBIT_THERMOMETER_PERIOD = 1000,\n    MICROBIT_THERMOMETER_EVT_UPDATE = 1,\n    MICROBIT_THERMOMETER_ADDED_TO_IDLE = 2,\n    // built/yt/yotta_modules/microbit-dal/inc/drivers/TimedInterruptIn.h\n    // built/yt/yotta_modules/microbit-dal/inc/platform/yotta_cfg_mappings.h\n    // built/yt/yotta_modules/microbit-dal/inc/types/ManagedString.h\n    // built/yt/yotta_modules/microbit-dal/inc/types/ManagedType.h\n    // built/yt/yotta_modules/microbit-dal/inc/types/Matrix4.h\n    // built/yt/yotta_modules/microbit-dal/inc/types/MicroBitCoordinateSystem.h\n    RAW = 0,\n    SIMPLE_CARTESIAN = 1,\n    NORTH_EAST_DOWN = 2,\n    // built/yt/yotta_modules/microbit-dal/inc/types/MicroBitEvent.h\n    MICROBIT_ID_ANY = 0,\n    MICROBIT_EVT_ANY = 0,\n    CREATE_ONLY = 0,\n    CREATE_AND_FIRE = 1,\n    // built/yt/yotta_modules/microbit-dal/inc/types/MicroBitImage.h\n    // built/yt/yotta_modules/microbit-dal/inc/types/PacketBuffer.h\n    // built/yt/yotta_modules/microbit-dal/inc/types/RefCounted.h\n}\n",
      "enums.d.ts": "// Auto-generated. Do not edit.\n\n\n    declare const enum NumberFormat {\n    Int8LE = 1,\n    UInt8LE = 2,\n    Int16LE = 3,\n    UInt16LE = 4,\n    Int32LE = 5,\n    Int8BE = 6,\n    UInt8BE = 7,\n    Int16BE = 8,\n    UInt16BE = 9,\n    Int32BE = 10,\n\n    UInt32LE = 11,\n    UInt32BE = 12,\n    Float32LE = 13,\n    Float64LE = 14,\n    Float32BE = 15,\n    Float64BE = 16,\n    }\n\n\n    declare const enum ValType {\n    Undefined = 0,\n    Boolean = 1,\n    Number = 2,\n    String = 3,\n    Object = 4,\n    Function = 5,\n    }\ndeclare namespace images {\n}\ndeclare namespace basic {\n}\n\n\n    declare const enum Button {\n    A = 1,  // MICROBIT_ID_BUTTON_A\n    B = 2,  // MICROBIT_ID_BUTTON_B\n    //% block=\"A+B\"\n    AB = 26,  // MICROBIT_ID_BUTTON_AB\n    }\n\n\n    declare const enum Dimension {\n    //% block=x\n    X = 0,\n    //% block=y\n    Y = 1,\n    //% block=z\n    Z = 2,\n    //% block=strength\n    Strength = 3,\n    }\n\n\n    declare const enum Rotation {\n    //% block=pitch\n    Pitch = 0,\n    //% block=roll\n    Roll = 1,\n    }\n\n\n    declare const enum TouchPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    }\n\n\n    declare const enum AcceleratorRange {\n    /**\n     * The accelerator measures forces up to 1 gravity\n     */\n    //%  block=\"1g\"\n    OneG = 1,\n    /**\n     * The accelerator measures forces up to 2 gravity\n     */\n    //%  block=\"2g\"\n    TwoG = 2,\n    /**\n     * The accelerator measures forces up to 4 gravity\n     */\n    //% block=\"4g\"\n    FourG = 4,\n    /**\n     * The accelerator measures forces up to 8 gravity\n     */\n    //% block=\"8g\"\n    EightG = 8,\n    }\n\n\n    declare const enum Gesture {\n    /**\n     * Raised when shaken\n     */\n    //% block=shake\n    //% jres=gestures.shake\n    Shake = 11,  // MICROBIT_ACCELEROMETER_EVT_SHAKE\n    /**\n     * Raised when the logo is upward and the screen is vertical\n     */\n    //% block=\"logo up\"\n    //% jres=gestures.tiltforward\n    LogoUp = 1,  // MICROBIT_ACCELEROMETER_EVT_TILT_UP\n    /**\n     * Raised when the logo is downward and the screen is vertical\n     */\n    //% block=\"logo down\"\n    //% jres=gestures.tiltbackwards\n    LogoDown = 2,  // MICROBIT_ACCELEROMETER_EVT_TILT_DOWN\n    /**\n     * Raised when the screen is pointing down and the board is horizontal\n     */\n    //% block=\"screen up\"\n    //% jres=gestures.frontsideup\n    ScreenUp = 5,  // MICROBIT_ACCELEROMETER_EVT_FACE_UP\n    /**\n     * Raised when the screen is pointing up and the board is horizontal\n     */\n    //% block=\"screen down\"\n    //% jres=gestures.backsideup\n    ScreenDown = 6,  // MICROBIT_ACCELEROMETER_EVT_FACE_DOWN\n    /**\n     * Raised when the screen is pointing left\n     */\n    //% block=\"tilt left\"\n    //% jres=gestures.tiltleft\n    TiltLeft = 3,  // MICROBIT_ACCELEROMETER_EVT_TILT_LEFT\n    /**\n     * Raised when the screen is pointing right\n     */\n    //% block=\"tilt right\"\n    //% jres=gestures.tiltright\n    TiltRight = 4,  // MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT\n    /**\n     * Raised when the board is falling!\n     */\n    //% block=\"free fall\"\n    //% jres=gestures.freefall\n    FreeFall = 7,  // MICROBIT_ACCELEROMETER_EVT_FREEFALL\n    /**\n     * Raised when a 3G shock is detected\n     */\n    //% block=\"3g\"\n    //% jres=gestures.impact3g\n    ThreeG = 8,  // MICROBIT_ACCELEROMETER_EVT_3G\n    /**\n     * Raised when a 6G shock is detected\n     */\n    //% block=\"6g\"\n    //% jres=gestures.impact6g\n    SixG = 9,  // MICROBIT_ACCELEROMETER_EVT_6G\n    /**\n     * Raised when a 8G shock is detected\n     */\n    //% block=\"8g\"\n    //% jres=gestures.impact8g\n    EightG = 10,  // MICROBIT_ACCELEROMETER_EVT_8G\n    }\n\n\n    declare const enum MesDpadButtonInfo {\n    //% block=\"A down\"\n    ADown = 1,  // MES_DPAD_BUTTON_A_DOWN\n    //% block=\"A up\"\n    AUp = 2,  // MES_DPAD_BUTTON_A_UP\n    //% block=\"B down\"\n    BDown = 3,  // MES_DPAD_BUTTON_B_DOWN\n    //% block=\"B up\"\n    BUp = 4,  // MES_DPAD_BUTTON_B_UP\n    //% block=\"C down\"\n    CDown = 5,  // MES_DPAD_BUTTON_C_DOWN\n    //% block=\"C up\"\n    CUp = 6,  // MES_DPAD_BUTTON_C_UP\n    //% block=\"D down\"\n    DDown = 7,  // MES_DPAD_BUTTON_D_DOWN\n    //% block=\"D up\"\n    DUp = 8,  // MES_DPAD_BUTTON_D_UP\n    //% block=\"1 down\"\n    _1Down = 9,  // MES_DPAD_BUTTON_1_DOWN\n    //% block=\"1 up\"\n    _1Up = 10,  // MES_DPAD_BUTTON_1_UP\n    //% block=\"2 down\"\n    _2Down = 11,  // MES_DPAD_BUTTON_2_DOWN\n    //% block=\"2 up\"\n    _2Up = 12,  // MES_DPAD_BUTTON_2_UP\n    //% block=\"3 down\"\n    _3Down = 13,  // MES_DPAD_BUTTON_3_DOWN\n    //% block=\"3 up\"\n    _3Up = 14,  // MES_DPAD_BUTTON_3_UP\n    //% block=\"4 down\"\n    _4Down = 15,  // MES_DPAD_BUTTON_4_DOWN\n    //% block=\"4 up\"\n    _4Up = 16,  // MES_DPAD_BUTTON_4_UP\n    }\ndeclare namespace input {\n}\n\n\n    /**\n     * How to create the event.\n     */\n\n    declare const enum EventCreationMode {\n    /**\n     * MicroBitEvent is initialised, and no further processing takes place.\n     */\n    CreateOnly = 0,  // CREATE_ONLY\n    /**\n     * MicroBitEvent is initialised, and its event handlers are immediately fired (not suitable for use in interrupts!).\n     */\n    CreateAndFire = 1,  // CREATE_AND_FIRE\n    }\n\n\n    declare const enum EventBusSource {\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_A = 1,  // MICROBIT_ID_BUTTON_A\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_B = 2,  // MICROBIT_ID_BUTTON_B\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_AB = 26,  // MICROBIT_ID_BUTTON_AB\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_RADIO = 29,  // MICROBIT_ID_RADIO\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_GESTURE = 27,  // MICROBIT_ID_GESTURE\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_ACCELEROMETER = 4,  // MICROBIT_ID_ACCELEROMETER\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P0 = 7,  // MICROBIT_ID_IO_P0\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P1 = 8,  // MICROBIT_ID_IO_P1\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P2 = 9,  // MICROBIT_ID_IO_P2\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P3 = 10,  // MICROBIT_ID_IO_P3\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P4 = 11,  // MICROBIT_ID_IO_P4\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P5 = 12,  // MICROBIT_ID_IO_P5\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P6 = 13,  // MICROBIT_ID_IO_P6\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P7 = 14,  // MICROBIT_ID_IO_P7\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P8 = 15,  // MICROBIT_ID_IO_P8\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P9 = 16,  // MICROBIT_ID_IO_P9\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P10 = 17,  // MICROBIT_ID_IO_P10\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P11 = 18,  // MICROBIT_ID_IO_P11\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P12 = 19,  // MICROBIT_ID_IO_P12\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P13 = 20,  // MICROBIT_ID_IO_P13\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P14 = 21,  // MICROBIT_ID_IO_P14\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P15 = 22,  // MICROBIT_ID_IO_P15\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P16 = 23,  // MICROBIT_ID_IO_P16\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P19 = 24,  // MICROBIT_ID_IO_P19\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P20 = 25,  // MICROBIT_ID_IO_P20\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_DEVICE_INFO_ID = 1103,  // MES_DEVICE_INFO_ID\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_SIGNAL_STRENGTH_ID = 1101,  // MES_SIGNAL_STRENGTH_ID\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_DPAD_CONTROLLER_ID = 1104,  // MES_DPAD_CONTROLLER_ID\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_BROADCAST_GENERAL_ID = 2000,  // MES_BROADCAST_GENERAL_ID\n    }\n\n\n    declare const enum EventBusValue {\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_EVT_ANY = 0,  // MICROBIT_EVT_ANY\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_DOWN = 1,  // MICROBIT_BUTTON_EVT_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_UP = 2,  // MICROBIT_BUTTON_EVT_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_CLICK = 3,  // MICROBIT_BUTTON_EVT_CLICK\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_RADIO_EVT_DATAGRAM = 1,  // MICROBIT_RADIO_EVT_DATAGRAM\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE = 1,  // MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_RISE = 2,  // MICROBIT_PIN_EVT_RISE\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_FALL = 3,  // MICROBIT_PIN_EVT_FALL\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_PULSE_HI = 4,  // MICROBIT_PIN_EVT_PULSE_HI\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_PULSE_LO = 5,  // MICROBIT_PIN_EVT_PULSE_LO\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM1 = 6,  // MES_ALERT_EVT_ALARM1\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM2 = 7,  // MES_ALERT_EVT_ALARM2\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM3 = 8,  // MES_ALERT_EVT_ALARM3\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM4 = 9,  // MES_ALERT_EVT_ALARM4\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM5 = 10,  // MES_ALERT_EVT_ALARM5\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM6 = 11,  // MES_ALERT_EVT_ALARM6\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_DISPLAY_TOAST = 1,  // MES_ALERT_EVT_DISPLAY_TOAST\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_FIND_MY_PHONE = 5,  // MES_ALERT_EVT_FIND_MY_PHONE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_PLAY_RINGTONE = 4,  // MES_ALERT_EVT_PLAY_RINGTONE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_PLAY_SOUND = 3,  // MES_ALERT_EVT_PLAY_SOUND\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_VIBRATE = 2,  // MES_ALERT_EVT_VIBRATE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE = 1,  // MES_CAMERA_EVT_LAUNCH_PHOTO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE = 2,  // MES_CAMERA_EVT_LAUNCH_VIDEO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_START_VIDEO_CAPTURE = 4,  // MES_CAMERA_EVT_START_VIDEO_CAPTURE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_PHOTO_MODE = 6,  // MES_CAMERA_EVT_STOP_PHOTO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE = 5,  // MES_CAMERA_EVT_STOP_VIDEO_CAPTURE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_VIDEO_MODE = 7,  // MES_CAMERA_EVT_STOP_VIDEO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_TAKE_PHOTO = 3,  // MES_CAMERA_EVT_TAKE_PHOTO\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_TOGGLE_FRONT_REAR = 8,  // MES_CAMERA_EVT_TOGGLE_FRONT_REAR\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_DISPLAY_OFF = 5,  // MES_DEVICE_DISPLAY_OFF\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_DISPLAY_ON = 6,  // MES_DEVICE_DISPLAY_ON\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_GESTURE_DEVICE_SHAKEN = 4,  // MES_DEVICE_GESTURE_DEVICE_SHAKEN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_INCOMING_CALL = 7,  // MES_DEVICE_INCOMING_CALL\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_INCOMING_MESSAGE = 8,  // MES_DEVICE_INCOMING_MESSAGE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_ORIENTATION_LANDSCAPE = 1,  // MES_DEVICE_ORIENTATION_LANDSCAPE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_ORIENTATION_PORTRAIT = 2,  // MES_DEVICE_ORIENTATION_PORTRAIT\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_1_DOWN = 9,  // MES_DPAD_BUTTON_1_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_1_UP = 10,  // MES_DPAD_BUTTON_1_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_2_DOWN = 11,  // MES_DPAD_BUTTON_2_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_2_UP = 12,  // MES_DPAD_BUTTON_2_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_3_DOWN = 13,  // MES_DPAD_BUTTON_3_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_3_UP = 14,  // MES_DPAD_BUTTON_3_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_4_DOWN = 15,  // MES_DPAD_BUTTON_4_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_4_UP = 16,  // MES_DPAD_BUTTON_4_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_A_DOWN = 1,  // MES_DPAD_BUTTON_A_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_A_UP = 2,  // MES_DPAD_BUTTON_A_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_B_DOWN = 3,  // MES_DPAD_BUTTON_B_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_B_UP = 4,  // MES_DPAD_BUTTON_B_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_C_DOWN = 5,  // MES_DPAD_BUTTON_C_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_C_UP = 6,  // MES_DPAD_BUTTON_C_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_D_DOWN = 7,  // MES_DPAD_BUTTON_D_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_D_UP = 8,  // MES_DPAD_BUTTON_D_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_FORWARD = 6,  // MES_REMOTE_CONTROL_EVT_FORWARD\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_NEXTTRACK = 4,  // MES_REMOTE_CONTROL_EVT_NEXTTRACK\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PAUSE = 2,  // MES_REMOTE_CONTROL_EVT_PAUSE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PLAY = 1,  // MES_REMOTE_CONTROL_EVT_PLAY\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PREVTRACK = 5,  // MES_REMOTE_CONTROL_EVT_PREVTRACK\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_REWIND = 7,  // MES_REMOTE_CONTROL_EVT_REWIND\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_STOP = 3,  // MES_REMOTE_CONTROL_EVT_STOP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN = 9,  // MES_REMOTE_CONTROL_EVT_VOLUMEDOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_VOLUMEUP = 8,  // MES_REMOTE_CONTROL_EVT_VOLUMEUP\n    }\ndeclare namespace control {\n}\n\n\n    declare const enum DisplayMode {\n    //% block=\"black and white\"\n    BackAndWhite = 0,  // DISPLAY_MODE_BLACK_AND_WHITE\n    //% block=\"greyscale\"\n    Greyscale = 1,  // DISPLAY_MODE_GREYSCALE\n    // TODO DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE\n    }\ndeclare namespace led {\n}\n\n\n    declare const enum DigitalPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    P3 = 10,  // MICROBIT_ID_IO_P3\n    P4 = 11,  // MICROBIT_ID_IO_P4\n    P5 = 12,  // MICROBIT_ID_IO_P5\n    P6 = 13,  // MICROBIT_ID_IO_P6\n    P7 = 14,  // MICROBIT_ID_IO_P7\n    P8 = 15,  // MICROBIT_ID_IO_P8\n    P9 = 16,  // MICROBIT_ID_IO_P9\n    P10 = 17,  // MICROBIT_ID_IO_P10\n    P11 = 18,  // MICROBIT_ID_IO_P11\n    P12 = 19,  // MICROBIT_ID_IO_P12\n    P13 = 20,  // MICROBIT_ID_IO_P13\n    P14 = 21,  // MICROBIT_ID_IO_P14\n    P15 = 22,  // MICROBIT_ID_IO_P15\n    P16 = 23,  // MICROBIT_ID_IO_P16\n    P19 = 24,  // MICROBIT_ID_IO_P19\n    P20 = 25,  // MICROBIT_ID_IO_P20\n    }\n\n\n    declare const enum AnalogPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    P3 = 10,  // MICROBIT_ID_IO_P3\n    P4 = 11,  // MICROBIT_ID_IO_P4\n    P10 = 17,  // MICROBIT_ID_IO_P10\n    //% block=\"P5 (write only)\"\n    P5 = 12,  // MICROBIT_ID_IO_P5\n    //% block=\"P6 (write only)\"\n    P6 = 13,  // MICROBIT_ID_IO_P6\n    //% block=\"P7 (write only)\"\n    P7 = 14,  // MICROBIT_ID_IO_P7\n    //% block=\"P8 (write only)\"\n    P8 = 15,  // MICROBIT_ID_IO_P8\n    //% block=\"P9 (write only)\"\n    P9 = 16,  // MICROBIT_ID_IO_P9\n    //% block=\"P11 (write only)\"\n    P11 = 18,  // MICROBIT_ID_IO_P11\n    //% block=\"P12 (write only)\"\n    P12 = 19,  // MICROBIT_ID_IO_P12\n    //% block=\"P13 (write only)\"\n    P13 = 20,  // MICROBIT_ID_IO_P13\n    //% block=\"P14 (write only)\"\n    P14 = 21,  // MICROBIT_ID_IO_P14\n    //% block=\"P15 (write only)\"\n    P15 = 22,  // MICROBIT_ID_IO_P15\n    //% block=\"P16 (write only)\"\n    P16 = 23,  // MICROBIT_ID_IO_P16\n    //% block=\"P19 (write only)\"\n    P19 = 24,  // MICROBIT_ID_IO_P19\n    //% block=\"P20 (write only)\"\n    P20 = 25,  // MICROBIT_ID_IO_P20\n    }\n\n\n    declare const enum PulseValue {\n    //% block=high\n    High = 4,  // MICROBIT_PIN_EVT_PULSE_HI\n    //% block=low\n    Low = 5,  // MICROBIT_PIN_EVT_PULSE_LO\n    }\n\n\n    declare const enum PinPullMode {\n    //% block=\"down\"\n    PullDown = 0,\n    //% block=\"up\"\n    PullUp = 1,\n    //% block=\"none\"\n    PullNone = 2,\n    }\n\n\n    declare const enum PinEventType {\n    //% block=\"edge\"\n    Edge = 1,  // MICROBIT_PIN_EVENT_ON_EDGE\n    //% block=\"pulse\"\n    Pulse = 2,  // MICROBIT_PIN_EVENT_ON_PULSE\n    //% block=\"touch\"\n    Touch = 3,  // MICROBIT_PIN_EVENT_ON_TOUCH\n    //% block=\"none\"\n    None = 0,  // MICROBIT_PIN_EVENT_NONE\n    }\n\n\n    declare const enum SerialPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    P8 = 15,  // MICROBIT_ID_IO_P8\n    P12 = 19,  // MICROBIT_ID_IO_P12\n    P13 = 20,  // MICROBIT_ID_IO_P13\n    P14 = 21,  // MICROBIT_ID_IO_P14\n    P15 = 22,  // MICROBIT_ID_IO_P15\n    P16 = 23,  // MICROBIT_ID_IO_P16\n    }\n\n\n    declare const enum BaudRate {\n    //% block=115200\n    BaudRate115200 = 115200,\n    //% block=57600\n    BaudRate57600 = 57600,\n    //% block=38400\n    BaudRate38400 = 38400,\n    //% block=31250\n    BaudRate31250 = 31250,\n    //% block=28800\n    BaudRate28800 = 28800,\n    //% block=19200\n    BaudRate19200 = 19200,\n    //% block=14400\n    BaudRate14400 = 14400,\n    //% block=9600\n    BaudRate9600 = 9600,\n    //% block=4800\n    BaudRate4800 = 4800,\n    //% block=2400\n    BaudRate2400 = 2400,\n    //% block=1200\n    BaudRate1200 = 1200,\n    //% block=300\n    BaudRate300 = 300,\n    }\n\n\n    declare const enum Delimiters {\n    //% block=\"new line\"\n    NewLine = 1,\n    //% block=\",\"\n    Comma = 2,\n    //% block=\"$\"\n    Dollar = 3,\n    //% block=\":\"\n    Colon = 4,\n    //% block=\".\"\n    Fullstop = 5,\n    //% block=\"#\"\n    Hash = 6,\n    }\ndeclare namespace serial {\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "game.ts": "enum Direction {\n    //% block=right\n    Right,\n    //% block=left\n    Left\n}\n\nenum LedSpriteProperty {\n    //% block=x\n    X,\n    //% block=y\n    Y,\n    //% block=direction\n    Direction,\n    //% block=brightness\n    Brightness,\n    //% block=blink\n    Blink\n}\n\n/**\n * A single-LED sprite game engine\n */\n//% color=#008272 weight=32 icon=\"\\uf11b\"\n//% advanced=true\nnamespace game {\n    let _score: number = 0;\n    let _life: number = 3;\n    let _startTime: number = 0;\n    let _endTime: number = 0;\n    let _isGameOver: boolean = false;\n    let _countdownPause: number = 0;\n    let _level: number = 1;\n    let _gameId: number = 0;\n    let _img: Image;\n    let _sprites: LedSprite[];\n    let _paused: boolean = false;\n    let _backgroundAnimation = false; // indicates if an auxiliary animation (and fiber) is already running\n\n    /**\n     * Creates a new LED sprite pointing to the right.\n     * @param x sprite horizontal coordinate, eg: 2\n     * @param y sprite vertical coordinate, eg: 2\n     */\n    //% weight=60 blockGap=8 help=game/create-sprite\n    //% blockId=game_create_sprite block=\"create sprite at|x: %x|y: %y\"\n    //% parts=\"ledmatrix\"\n    export function createSprite(x: number, y: number): LedSprite {\n        init();\n        let p = new LedSprite(x, y);\n        return p;\n    }\n\n    /**\n     * Gets the current score\n     */\n    //% weight=9 help=game/score\n    //% blockId=game_score block=\"score\" blockGap=8\n    export function score(): number {\n        return _score;\n    }\n\n    /**\n     * Adds points to the current score and shows an animation\n     * @param points amount of points to change, eg: 1\n     */\n    //% weight=10 help=game/add-score\n    //% blockId=game_add_score block=\"change score by|%points\" blockGap=8\n    //% parts=\"ledmatrix\"\n    export function addScore(points: number): void {\n        setScore(_score + points);\n        if (!_paused && !_backgroundAnimation) {\n            _backgroundAnimation = true;\n            control.inBackground(() => {\n                led.stopAnimation();\n                basic.showAnimation(`0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0\n    0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0\n    0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n    0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0\n    0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0`, 20);\n                _backgroundAnimation = false;\n            });\n        }\n    }\n\n    /**\n     * Shows an animation, then starts a game countdown timer, which causes Game Over when it reaches 0\n     * @param ms countdown duration in milliseconds, eg: 10000\n     */\n    //% weight=9 help=game/start-countdown\n    //% blockId=game_start_countdown block=\"start countdown|(ms) %duration\" blockGap=8\n    //% parts=\"ledmatrix\"\n    export function startCountdown(ms: number): void {\n        if (checkStart()) {\n            basic.showAnimation(`1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0`, 400);\n            _countdownPause = Math.max(500, ms);\n            _startTime = -1;\n            _endTime = input.runningTime() + _countdownPause;\n            _paused = false;\n            control.inBackground(() => {\n                basic.pause(_countdownPause);\n                gameOver();\n            });\n        }\n    }\n\n    /**\n     * Displays a game over animation and the score.\n     */\n    //% weight=8 help=game/game-over\n    //% blockId=game_game_over block=\"game over\"\n    //% parts=\"ledmatrix\"\n    export function gameOver(): void {\n        if (!_isGameOver) {\n            _isGameOver = true;\n            unplugEvents();\n            led.stopAnimation();\n            led.setBrightness(255);\n            while (true) {\n                for (let i = 0; i < 8; i++) {\n                    basic.clearScreen();\n                    basic.pause(100);\n                    basic.showLeds(`1 1 1 1 1\n1 1 1 1 1\n1 1 1 1 1\n1 1 1 1 1\n1 1 1 1 1`, 300);\n                }\n                basic.showAnimation(`1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 1 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n1 1 0 1 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 1 1 1 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 1 1 1 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0`, 100);\n                for (let j = 0; j < 3; j++) {\n                    basic.showString(\" GAMEOVER \", 100);\n                    showScore();\n                }\n            }\n        } else {\n            // already in game over mode in another fiber\n            while (true) {\n                basic.pause(10000);\n            }\n        }\n    }\n\n    /**\n     * Sets the current score value\n     * @param value new score value.\n     */\n    //% blockId=game_set_score block=\"set score %points\" blockGap=8\n    //% weight=10 help=game/set-score\n    export function setScore(value: number): void {\n        _score = Math.max(0, value);\n    }\n\n    /**\n     * Gets the current life\n     */\n    //% weight=10\n    export function life(): number {\n        return _life;\n    }\n\n    /**\n     * Sets the current life value\n     * @param value TODO\n     */\n    //% weight=10\n    export function setLife(value: number): void {\n        _life = Math.max(0, value);\n        if (_life <= 0) {\n            gameOver();\n        }\n    }\n\n    /**\n     * Adds life points to the current life\n     * @param lives TODO\n     */\n    //% weight=10\n    export function addLife(lives: number): void {\n        setLife(_life + lives);\n    }\n\n    /**\n     * Gets the remaining time (since `start countdown`) or current time (since the device started or `start stopwatch`) in milliseconds.\n     */\n    //% weight=10\n    export function currentTime(): number {\n        if (_endTime > 0) {\n            return Math.max(0, _endTime - input.runningTime());\n        } else {\n            return input.runningTime() - _startTime;\n        }\n    }\n\n    /**\n     * Removes some life\n     * @param life TODO\n     */\n    //% weight=10\n    //% parts=\"ledmatrix\"\n    export function removeLife(life: number): void {\n        setLife(_life - life);\n        if (!_paused)\n            control.inBackground(() => {\n                led.stopAnimation();\n                basic.showAnimation(`1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0\n0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0\n0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0\n0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0\n1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0`, 40);\n            });\n    }\n\n    /**\n     * Increments the level and display a message.\n     */\n    //% weight=10\n    //% parts=\"ledmatrix\"\n    export function levelUp(): void {\n        _level = _level + 1;\n        basic.showString(\"LEVEL:\", 150);\n        basic.showNumber(_level, 150);\n    }\n\n    /**\n     * Gets the current level\n     */\n    //% weight=10\n    export function level(): number {\n        return _level;\n    }\n\n    /**\n     * Starts a stopwatch timer. `current time` will return the elapsed time.\n     */\n    //% weight=10\n    export function startStopwatch(): void {\n        _startTime = input.runningTime();\n        _endTime = -1;\n    }\n\n    /**\n     * Gets a value indicating if the game is still running. Returns `false` if game over.\n     */\n    //% weight=10\n    export function isRunning(): boolean {\n        let running: boolean;\n        return !_isGameOver;\n    }\n\n    /**\n     * Displays the score on the screen.\n     */\n    //%  weight=60\n    //% parts=\"ledmatrix\"\n    export function showScore(): void {\n        basic.showString(\" SCORE \", 100);\n        basic.showNumber(_score, 150);\n        basic.showString(\" \", 150);\n    }\n\n    /**\n     * Indicates if the game is display the game over sequence.\n     */\n    export function isGameOver(): boolean {\n        return _isGameOver;\n    }\n\n    /**\n     * Indicates if the game rendering is paused to allow other animations\n     */\n    //%\n    export function isPaused(): boolean {\n        return _paused;\n    }\n\n    /**\n     * Pauses the game rendering engine to allow other animations\n     */\n    //% blockId=game_pause block=\"pause\"\n    //% advanced=true blockGap=8 help=game/pause\n    export function pause(): void {\n        plot()\n        _paused = true;\n    }\n\n\n    /**\n     * Resumes the game rendering engine\n     */\n    //% blockId=game_resume block=\"resume\"\n    //% advanced=true blockGap=8 help=game/resumeP\n    export function resume(): void {\n        _paused = false;\n        plot();\n    }\n\n    /**\n     * returns false if game can't start\n     */\n    function checkStart(): boolean {\n        if (_countdownPause > 0 || _startTime > 0) {\n            return false;\n        } else {\n            return true;\n        }\n    }\n\n    function unplugEvents(): void {\n        input.onButtonPressed(Button.A, () => { });\n        input.onButtonPressed(Button.B, () => { });\n        input.onButtonPressed(Button.AB, () => {\n            control.reset();\n        });\n    }\n\n    /**\n     * A game sprite rendered as a single LED\n     */\n    //%\n    export class LedSprite {\n        private _x: number;\n        private _y: number;\n        private _dir: number;\n        private _brightness: number;\n        private _blink: number;\n        private _enabled: boolean;\n\n        constructor(x: number, y: number) {\n            this._x = Math.clamp(0, 4, x);\n            this._y = Math.clamp(0, 4, y);\n            this._dir = 90;\n            this._brightness = 255;\n            this._enabled = true;\n            init();\n            _sprites.push(this);\n            plot();\n        }\n\n        /**\n         * Move a certain number of LEDs in the current direction\n         * @param this the sprite to move\n         * @param leds number of leds to move, eg: 1, -1\n         */\n        //% weight=50 help=game/move\n        //% blockId=game_move_sprite block=\"%sprite|move by %leds\" blockGap=8\n        //% parts=\"ledmatrix\"\n        public move(leds: number): void {\n            if (this._dir == 0) {\n                this._y = this._y - leds;\n            } else if (this._dir == 45) {\n                this._x = this._x + leds;\n                this._y = this._y - leds;\n            } else if (this._dir == 90) {\n                this._x = this._x + leds;\n            } else if (this._dir == 135) {\n                this._x = this._x + leds;\n                this._y = this._y + leds;\n            } else if (this._dir == 180) {\n                this._y = this._y + leds;\n            } else if (this._dir == -45) {\n                this._x = this._x - leds;\n                this._y = this._y - leds;\n            } else if (this._dir == -90) {\n                this._x = this._x - leds;\n            } else {\n                this._x = this._x - leds;\n                this._y = this._y + leds;\n            }\n            this._x = Math.clamp(0, 4, this._x);\n            this._y = Math.clamp(0, 4, this._y);\n            plot();\n        }\n\n        /**\n         * Go to this position on the screen\n         * @param this TODO\n         * @param x TODO\n         * @param y TODO\n         */\n        //% parts=\"ledmatrix\"\n        public goTo(x: number, y: number): void {\n            this._x = x;\n            this._y = y;\n            this._x = Math.clamp(0, 4, this._x);\n            this._y = Math.clamp(0, 4, this._y);\n            plot();\n        }\n\n        /**\n         * If touching the edge of the stage and facing towards it, then turn away.\n         * @param this TODO\n         */\n        //% weight=18 help=game/if-on-edge-bounce\n        //% blockId=game_sprite_bounce block=\"%sprite|if on edge, bounce\"\n        //% parts=\"ledmatrix\"\n        public ifOnEdgeBounce(): void {\n            if (this._dir == 0 && this._y == 0) {\n                this._dir = 180;\n            } else if (this._dir == 45 && (this._x == 4 || this._y == 0)) {\n                if (this._x == 0 && this._y == 0) {\n                    this._dir = -135;\n                } else if (this._y == 0) {\n                    this._dir = 135;\n                } else {\n                    this._dir = -45;\n                }\n            } else if (this._dir == 90 && this._x == 4) {\n                this._dir = -90;\n            } else if (this._dir == 135 && (this._x == 4 || this._y == 4)) {\n                if (this.x() == 4 && this.y() == 4) {\n                    this._dir = -45;\n                } else if (this._y == 4) {\n                    this._dir = 45;\n                } else {\n                    this._dir = -135;\n                }\n            } else if (this._dir == 180 && this._y == 4) {\n                this._dir = 0;\n            } else if (this._dir == -45 && (this._x == 0 || this._y == 0)) {\n                if (this.x() == 0 && this.y() == 0) {\n                    this._dir = 135;\n                } else if (this._y == 0) {\n                    this._dir = -135;\n                } else {\n                    this._dir = 45;\n                }\n            } else if (this._dir == -90 && this._x == 0) {\n                this._dir = 90;\n            } else if (this._dir == -135 && (this._x == 0 || this._y == 4)) {\n                if (this._x == 0 && this._y == 4) {\n                    this._dir = 45;\n                } else if (this._y == 4) {\n                    this._dir = -45;\n                } else {\n                    this._dir = 135;\n                }\n            }\n            plot();\n        }\n\n        /**\n         * Turn the sprite\n         * @param this TODO\n         * @param direction left or right\n         * @param degrees angle in degrees to turn, eg: 45, 90, 180, 135\n         */\n        //% weight=49 help=game/turn\n        //% blockId=game_turn_sprite block=\"%sprite|turn %direction|by (°) %degrees\"\n        public turn(direction: Direction, degrees: number) {\n            if (direction == Direction.Right)\n                this.setDirection(this._dir + degrees);\n            else\n                this.setDirection(this._dir - degrees);\n        }\n\n        /**\n         * Turn to the right (clockwise)\n         * @param this TODO\n         * @param degrees TODO\n         */\n        public turnRight(degrees: number): void {\n            this.turn(Direction.Right, degrees);\n        }\n\n        /**\n         * Turn to the left (counter-clockwise)\n         * @param this TODO\n         * @param degrees TODO\n         */\n        public turnLeft(degrees: number): void {\n            this.turn(Direction.Left, degrees);\n        }\n\n        /**\n         * Sets a property of the sprite\n         * @param property the name of the property to change\n         * @param the updated value\n         */\n        //% weight=29 help=game/set\n        //% blockId=game_sprite_set_property block=\"%sprite|set %property|to %value\" blockGap=8\n        public set(property: LedSpriteProperty, value: number) {\n            switch (property) {\n                case LedSpriteProperty.X: this.setX(value); break;\n                case LedSpriteProperty.Y: this.setY(value); break;\n                case LedSpriteProperty.Direction: this.setDirection(value); break;\n                case LedSpriteProperty.Brightness: this.setBrightness(value); break;\n                case LedSpriteProperty.Blink: this.setBlink(value); break;\n            }\n        }\n\n        /**\n         * Changes a property of the sprite\n         * @param property the name of the property to change\n         * @param value amount of change, eg: 1\n         */\n        //% weight=30 help=game/change\n        //% blockId=game_sprite_change_xy block=\"%sprite|change %property|by %value\" blockGap=8\n        public change(property: LedSpriteProperty, value: number) {\n            switch (property) {\n                case LedSpriteProperty.X: this.changeXBy(value); break;\n                case LedSpriteProperty.Y: this.changeYBy(value); break;\n                case LedSpriteProperty.Direction: this.changeDirectionBy(value); break;\n                case LedSpriteProperty.Brightness: this.changeBrightnessBy(value); break;\n                case LedSpriteProperty.Blink: this.changeBlinkBy(value); break;\n            }\n        }\n\n        /**\n         * Gets a property of the sprite\n         * @param property the name of the property to change\n         */\n        //% weight=28 help=game/get\n        //% blockId=game_sprite_property block=\"%sprite|%property\"\n        public get(property: LedSpriteProperty) {\n            switch (property) {\n                case LedSpriteProperty.X: return this.x();\n                case LedSpriteProperty.Y: return this.y();\n                case LedSpriteProperty.Direction: return this.direction()\n                case LedSpriteProperty.Brightness: return this.brightness();\n                case LedSpriteProperty.Blink: return this.blink();\n                default: return 0;\n            }\n        }\n\n        /**\n         * Set the direction of the current sprite, rounded to the nearest multiple of 45\n         * @param this TODO\n         * @param degrees TODO\n         */\n        //% parts=\"ledmatrix\"\n        public setDirection(degrees: number): void {\n            this._dir = ((degrees / 45) % 8) * 45;\n            if (this._dir <= -180) {\n                this._dir = this._dir + 360;\n            } else if (this._dir > 180) {\n                this._dir = this._dir - 360;\n            }\n            plot();\n        }\n\n        /**\n         * Reports the ``x`` position of a sprite on the LED screen\n         * @param this TODO\n         */\n        public x(): number {\n            return this._x;\n        }\n\n        /**\n         * Reports the ``y`` position of a sprite on the LED screen\n         * @param this TODO\n         */\n        public y(): number {\n            return this._y;\n        }\n\n        /**\n         * Reports the current direction of a sprite\n         * @param this TODO\n         */\n        public direction(): number {\n            return this._dir;\n        }\n\n        /**\n         * Set the ``x`` position of a sprite\n         * @param this TODO\n         * @param x TODO\n         */\n        public setX(x: number): void {\n            this.goTo(x, this._y);\n        }\n\n        /**\n         * Set the ``y`` position of a sprite\n         * @param this TODO\n         * @param y TODO\n         */\n        public setY(y: number): void {\n            this.goTo(this._x, y);\n        }\n\n        /**\n         * Changes the ``y`` position by the given amount\n         * @param this TODO\n         * @param y TODO\n         */\n        public changeYBy(y: number): void {\n            this.goTo(this._x, this._y + y);\n        }\n\n        /**\n         * Changes the ``x`` position by the given amount\n         * @param this TODO\n         * @param x TODO\n         */\n        public changeXBy(x: number): void {\n            this.goTo(this._x + x, this._y);\n        }\n\n        /**\n         * Reports true if sprite has the same position as specified sprite\n         * @param this TODO\n         * @param other TODO\n         */\n        //% weight=20 help=game/is-touching\n        //% blockId=game_sprite_touching_sprite block=\"%sprite|touching %other|?\" blockGap=8\n        public isTouching(other: LedSprite): boolean {\n            return this._enabled && other._enabled && this._x == other._x && this._y == other._y;\n        }\n\n        /**\n         * Reports true if sprite is touching an edge\n         * @param this TODO\n         */\n        //% weight=19 help=game/is-touching-edge\n        //% blockId=game_sprite_touching_edge block=\"%sprite|touching edge?\" blockGap=8\n        public isTouchingEdge(): boolean {\n            return this._x == 0 || this._x == 4 || this._y == 0 || this._y == 4;\n        }\n\n        /**\n         * Turns on the sprite (on by default)\n         * @param this the sprite\n         */\n        public on(): void {\n            this.setBrightness(255);\n        }\n\n        /**\n         * Turns off the sprite (on by default)\n         * @param this the sprite\n         */\n        public off(): void {\n            this.setBrightness(0);\n        }\n\n        /**\n         * Set the ``brightness`` of a sprite\n         * @param this the sprite\n         * @param brightness the brightness from 0 (off) to 255 (on), eg: 255.\n         */\n        //% parts=\"ledmatrix\"\n        public setBrightness(brightness: number): void {\n            this._brightness = Math.clamp(0, 255, brightness);\n            plot();\n        }\n\n        /**\n         * Reports the ``brightness` of a sprite on the LED screen\n         * @param this the sprite\n         */\n        //% parts=\"ledmatrix\"\n        public brightness(): number {\n            let r: number;\n            return this._brightness;\n        }\n\n        /**\n         * Changes the ``y`` position by the given amount\n         * @param this the sprite\n         * @param value the value to change brightness\n         */\n        public changeBrightnessBy(value: number): void {\n            this.setBrightness(this._brightness + value);\n        }\n\n        /**\n         * Changes the ``direction`` position by the given amount by turning right\n         * @param this TODO\n         * @param angle TODO\n         */\n        public changeDirectionBy(angle: number): void {\n            this.turnRight(angle);\n        }\n\n        /**\n         * Deletes the sprite from the game engine. The sprite will no longer appear on the screen or interact with other sprites.\n         * @param this sprite to delete\n         */\n        //% weight=59 help=game/delete\n        //% blockId=\"game_delete_sprite\" block=\"delete %this\"\n        public delete(): void {\n            this._enabled = false;\n            if (_sprites.removeElement(this))\n                plot();\n        }\n\n        /**\n         * Sets the blink duration interval in millisecond.\n         * @param sprite TODO\n         * @param ms TODO\n         */\n        public setBlink(ms: number): void {\n            this._blink = Math.clamp(0, 10000, ms);\n        }\n\n        /**\n         * Changes the ``blink`` duration by the given amount of millisecons\n         * @param this TODO\n         * @param ms TODO\n         */\n        public changeBlinkBy(ms: number): void {\n            this.setBlink(this._blink + ms);\n        }\n\n        /**\n         * Reports the ``blink`` duration of a sprite\n         * @param this TODO\n         */\n        public blink(): number {\n            let r: number;\n            return this._blink;\n        }\n\n        //% weight=-1\n        //% parts=\"ledmatrix\"\n        public _plot(now: number) {\n            let ps = this\n            if (ps._brightness > 0) {\n                let r = 0;\n                if (ps._blink > 0) {\n                    r = (now / ps._blink) % 2;\n                }\n                if (r == 0) {\n                    _img.setPixelBrightness(ps._x, ps._y, _img.pixelBrightness(ps._x, ps._y) + ps._brightness);\n                }\n            }\n        }\n    }\n\n    function init(): void {\n        if (_img) return;\n        const img = images.createImage(\n`0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0`);\n        _sprites = (<LedSprite[]>[]);\n        basic.forever(() => {\n            basic.pause(30);\n            plot();\n            if (game.isGameOver()) {\n                basic.pause(600);\n            }\n        });\n        _img = img;\n    }\n\n    /**\n     * Plots the current sprites on the screen\n     */\n    //% parts=\"ledmatrix\"\n    function plot(): void {\n        if (game.isGameOver() || game.isPaused() || !_img || _backgroundAnimation) {\n            return;\n        }\n        // ensure greyscale mode\n        const dm = led.displayMode();\n        if (dm != DisplayMode.Greyscale)            \n            led.setDisplayMode(DisplayMode.Greyscale);\n        // render sprites\n        const now = input.runningTime();\n        _img.clear();\n        for (let i = 0; i < _sprites.length; i++) {\n            _sprites[i]._plot(now);\n        }\n        _img.plotImage(0);\n        // restore previous display mode\n        if (dm != DisplayMode.Greyscale)\n            led.setDisplayMode(dm);\n    }\n\n    /**\n     * Gets an invalid sprite; used to initialize locals.\n     */\n    //% weight=0\n    export function invalidSprite(): LedSprite {\n        return null;\n    }\n\n}\n\n",
      "gestures.jres": "{\n  \"*\": {\n    \"namespace\": \"gestures\",\n    \"dataEncoding\": \"base64\"\n  },\n  \"shake\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEe0lEQVR4nO2a0XHjNhCGP2bybnZgpgLzKjBTwTkVRKkgSgXhVRC5Assd+CoIXUHkCkJXELmCzQMWIQSREgjSB4/CfwYDAlgSi5/A7gJkJiL8n/FdagVSYyEgtQKpsRCQWoHUWAhIrUBqLASkViA1FgJSKzA3MigzKELlL4qADFZAAzyF3nNRBCiugJsM6hDh7NJ2gxlsgZ+1+INAe1J+JgIqTMfXWn7BdLzTZK/fHRnk2t8V8ChmWQzLz0BAgRncFfCqnd8OyD5re4tZq/Z6VmSwBv7Q4sEsyKA4mBUiMjWtxWDr1RciUolIrW2tDKNRmVrvKabqhcheC1stV4jsENl7cpMJ2OoghpTOReRJB+kSs48gJh9BwEYLey0XjkA1JwE7HURfW+UMsHYIsPeslIgx2CsxGzGzr5cYREp/wIi0Wq5lJgJyVeqpp23jKV5FDjgUjXhE+ANGZKtlOxsnxwGl5juvbgf86snWwAPGWL4HbjkOgBrNK81bzQsrMJUA+2Db0Rr4C7jpkbWe4QXjDV4n9t0H3/u0mheaN5pbd833Ezu0M6DVhw+5P4CvGIJar77CKFjodUn8LHnzyg3wO86AfUwloNJObRwwhEe6gKTEBCtWwaZHPseQtT7zXB99z3LRAl/ciimBUAH8HSD3qrI5Zo36s8QGTw3HUWOJWVKh+IKzB9Bd4QpAhvYGZ6z8qXQXaJ1XKl87dad8v20veu47h//8e2iaYgSrQLnWk78HNmfuuXZktiN0Gr3fmGIDyvMivfDdo4tHzFJ4AD5rXRv43BdgP1aZKTPglMV3YYk699YB7hw56yaLwH6idpuxBPhv/yvwG+Yt+KjpDOCPmLfcJwfG4lurb4moAnWK226PNRqa7A5QxMT1tr4cME476d8slWKMaS3dhqmRznDmct5gWpQxY4m1Ae4MaJzrnH7cYFzmI90hiZv6zvByffZgEOMhagbExgE7DsPdXzAGaEO4wtAFUb7/v8P479Ag6JnwpXKAGAJy4J+YzmbCC8d7jXtM1DgaMUYw1v1NxRvwSfv/yWtrYh8aQ0AV29lE2KUCxzYj+sB1kIAMGk3+G081A0q6mKB26t+YcrBq3QEijaZSDo+KVp7reK8TnVDsvHLfaVTUXuBWk33Dz5oXjkzB+53ohMI3gJO+N7gE9A3YL/ttHwHNlJv7bIB7WAHp1nwoZpsBjeaV9+Cb7JCUoTg+BaJ2gC5cAvwBN07bnXNdYQKPZ47P4L41pn9vlM4L5L7lR+TJP0fvSbmYk5i1mG8BjXw7T7EOsfSn0kEonJkAYw9sBHb6w8GDNp/91OyhoDvptdehZwih+MTEWXB2L5AZQoI+NQeiYB5i3hjefYbj3BRBpHYqRh86jkiFHH5N9gMeH/Uc/QbtBjMz9a8xx1SlTLS8I2FD4JLOJW8Z8R/QKYQSUAF/avFeIreeHxFBu0ExLvEes+5mYf6jYNSByNHvJReAi/tLbCwu8T/BUVgISK1AaiwEpFYgNRYCUiuQGgsBqRVIjYWA1Aqkxr8PLUpMvtN12gAAAABJRU5ErkJggg==\"\n  },\n  \"freefall\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVR4nO2b4XWbMBSFP3r6P2wQOkGcCUonqDtB0wnqbuBO0GSCJhvYG5AJiiconaD2BK8/JGpZAVtIYJGEew7HRAi9x0W670kiiYjwmvEmtgOxMREQ24HYmAiI7YCJBMoEVme1OaYokIAACCTnsjmqHtCEBIoEloO1P/YeMHSvGH0PGBoTAbEMJyAJlLHs//cjlga4jvdJAwbGREBsB2JjIiC2A7ExERDR9hr441DvDngcyonRzwWGxqsfAm9jO2DhOzA7p8G+hkAO3AOX+u8NUKFy/dI4Hx36ICBDPdwFStQq4H1L3Ud9vQIK4zwa+iBgAfwAHoAbozzTR278XtKMaMT0QcA98Bl4R7PTqa6TsicjQy1+ruhGTAlsQx0+gIiEHqWIVC3Xcn1NRGSpyzLjnhsR2Uo3bEWkEJFbEVloG6mv/6EPn2qnVg3Xbi3Hc88HdkUhHkSEEpBr40ujbCbqDTc5ODSKBh+PHqGJUK5/C/27AH4BVw1168iwQY1tlzS4K9qiTytCE6E6aalQJBxzYI0iqLLKcw4jxgwVUn2w63pDaBQwFfmY02aInKEiAux7jo0URdbiRLs21sC8Q/0gDcgcx2UdIVJp1oFKly9FZC5KQ0w96QJTiwYXwbmjUze6/tJ66GOoRBFs33cK+RF/exfB3LFeZdW/A25P3HNp1Lnv4FPn+UaICPrO2r4eufaA0oWfwEddVjm2u8EjSwzpAa4hpybq1FsHJWB1vTpMZo52vGabvgTYb38NfEO9BRtLlKqvgA+ot9xUD5Ti16pfE5E7+uQ33e4qGvpYGMJTGuVtql0aooZVf66FbiUqGhSyF85UTgtmDTN6OB++GmD2gMI4T2nGFfAb9fbLhqPps5hUt902U7Th1QN8E6GSw3T3C0qAbnF3GFTm1rRqNEclTq5J0CPuQ+UAPgSkwF8fYz1hw9O5xh0qa+wMHxE866KlgR1wre1/sq4Vvo36EJD7GgtEPVTgqWZ4L7g+px4wY58TLI3yHQHrhz5RIPc1FogLVCSxNaAIabRrD8jwn6v3BVsAg/YbfAgYG4qQm1/C3uBZe0BBex4fA14zQBO+YbDes++8BtczgvcbfaLAlsOsK0WFqDpM1efnEMtgAob8QCLjcG8ww2PZ+gSuCSQhxhciGf0Qs6N99umMGB9IVOz3EUxkHBIzo3mDpYbLCtNJjOoboRbY2gJqobSXf615DgQMipeQCAVhIiC2A7ExERDbgdh49QT8A9YP5MUcc2wYAAAAAElFTkSuQmCC\"\n  },\n  \"frontsideup\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVR4nO2a63XaQBCFP+Xkv9WB1QG4AquD0EFwBy6BElwC7oBUEFxBoAKLDnAFkx+jjVZCbyQNOeieswehx+7cuzOzDykQEe4Z36wNsMYsgLUB1pgFsDbAGqYCBLAJYGNqg9UwGMAS+JP+fRI4WNhh6QHbiuNJYSJA6vYL79TCKhQmD4EAIuCz4vLkoWDhAduaa29TGeEwqQABvALPNbc8p/dMBrNRACAAARAIrGy4+4nQd8vGLXve4e49wHoqLC4PWOHuPWDOAdYGWGPOAZaN3wLmHGBtgDXmHGDZ+C3g7nPAWAKE6Lp+DTym577Q3R5XEmA/UvutMcZ+wBIl9gC8k5GMgDj9ffTuP5GJkZAJNAmGFsCRByVbR+QV3QjdoaIsUdEcjuQFcV4zKIYUoIl8mJ5fpeUBeCHbI1yhIXNOy5q8IA4fqBAJmdckfY0eSoAq8hFKLAZ+FJ75hfb+qnDtRD5E2sDPL4l3fG56cAgBiuRDMtKL0iemgxNm75UcrhXAT3hHtMfL3LZo1I7MfR2itD5Xmurpg4th9xoBfPJt8IUmvi35EQHyrusQkokRoV7VNTSK7YcXZ0WkT1mKyFna4yAiYVq2Le7dichGRFYiEnntvnZo08dZ1OYLLlOQT0SJIyJ77/y68L8OK6/9Q4e2RWrISw8Bysg3ibHxnm+LveR729URtmivaFsleekoQJH8oVB5Vc/svHtW6f+kheEOiWRh0BQ+xTpqyUsHAcp6PvauN8XmTvJu7EosGgpvor1eJL4R7fVI2oeLSEvyItJqFKjL9h90H7JOXE5vq6bMS3Tk+Nmh/i+ap+H/0CRA16HuGhzJz9z6zAU6kYd6AaYk3xZuZgflr9mf6LiSrNoPCNHZ2i2Rf0cXSA5n8va90GMZXbYlFqI9f82sawy4r0eWXHaOv6rshLIQiIHffSozQm/yUO4BBzS7/w+4ijw0jwIxuhCJ0uOxVml9cDV56LcaLK7Sxly+VmEQ8jDsllhEfpkbUf9FWF8MRh6m+UosIr/REdF/p2hQ8mD7mZwfQjGX2+U+TugcYD+0EabfCVYgJgsh0DF/tPcEtyjApLj7l6OzANYGWGMWwNoAa8wCWBtgjVkAawOs8ReItTjrXj7vnAAAAABJRU5ErkJggg==\"\n  },\n  \"backsideup\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACbUlEQVR4nO2a75GbMBDFf2TyPXRwdHCkgqOEdJCkg5TgElyCS0gJTgVxKojdwV0Fmw9CA7H5Zwx6HOjNMCNAg/Y97a6EpMTM2DI+qA1QIwqgNkCNKIDaADWkAiSwS2AntUE1DCaQA7/L288GJ4UdSg84tJSDQiJA6fbPtUfPqlAIHgIJZMDfltfBQ0HhAYeOd/tQRngEFSCBH8BLR5WXsk4wyEYBgAQMwCBR2bD5idBHZePKnvfYvAeop8Lm84AKm/eAmAPUBqgRc4Cy8SUg5gC1AWrEHKBsfAnYfA6YS4AU91//DXgqn73hVnv8dQaOM7U/GHOsB+Q4Yp8G1r9QiXGmEigIphbgXvJd+MP/gvjypJhSgCnJX+MN+MJtyKTldR774alGgbnJFzSTP+JWmA34OerrZvbolZvZq82HfUObqZmdanVeSzua7EvNbGdmRdP7R0Ngzp6v40KVCzJcOPg2vYc05QfvJX4T5nbY7eldZc8PQVfPY2aHq7o3dcbmgFA934c97SPDAfhalr2X3GBMCCyFvEd9gnXGhUhB5fZdIXK3AEsj34dO8nDfMLg68jBcgFWSh2ECrJY89AuwavLQLcDqyUO7ACluHH0v5MGtP9z9t9gkwPX08T3gOyMPWjUJkLMR8tAswAn4NfaDgfEQeeifCRa4qWVWlnOWkxceJg/j/gVSnBA5ThhfDinMJORh2iWxjMpTfLnrRNhYTEYewpwSy6i8xHvN2CQ7KXnQHpOrh1BRlp9a6l5wewzHqY2QnhNsQUEVQuAWO2fbJ1iiAEGx+c3RKIDaADWiAGoD1IgCqA1QIwqgNkCNf+aBYPgHiIEjAAAAAElFTkSuQmCC\"\n  },\n  \"impact3g\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVR4nO2a/5XiNhDHP87L/0sqWKeCdQdxB6GDkArCVXCkA0rwdcBWcN4Kju3A2wFUMPljpEMI/5AtEXMc3/f8hKVhNJoZjWYEmYjwM+OXuQWYGw8FzC3A3HgoYG4B5sZDAXMLMDceCphbgGsig0UGVR/Nr/+TLHOhAhZ9BHfrARksgT+H6O5SARnkDLi+xV0qAF38Uwjh3SkggzXwRyj9XSkggwLYjPnOXSmAEa5vcdMKyGCZwSqQdgO8tAzlvV8UkZt9ECnMS41I0UNX9jHqmyO79SuxDFwB/wW2AgdnfAHsgecuHgJZ5wRzWznAC2qvs0GkdMa3Q0z6hm86BhjsTXs07TPwNYOdyfb+8ehfR3Gf28IBHrA0L4Wxft8XGkQWd+kBom0BvHfQHYGlGx9CkEoBOVCjAetgPm/RrKxkoCLrg0CDcX+zuJJ2N1/L5XYJmCCNq+7V06QRkVpEDnKJgxnbishanEAWsA12LX2V07H1xs4CZx/vFPcBBZqAvKJByWJhxuxTmtbP0z9QK9emtZ9dVP6kAqtMaUtRT5uGBNZfGQt3WXRprL8077mIVKJWrVs8xcJ608bMMcZj/KOzL4mKVsDWCLzw+hfOmJiFL8zCxYy1bZUhuIpZGr7+ovzc4IBuu6soYG8et68wglocRC3o9qXEylvUpkPYHZ6hUihARF3avm9aBJxi6TFofLnQ+qBqEfiAs51ia4ES+Ap8AnbmaavIQI+mCj2qcs6D5KgStgOt+X6mMu68OY5o8NzHngKFaXN0YV0LeUXL2q4kxT8xlj282vDhd5giaQ18Nl1HjJFEW6WL9IAdwzev76gVQGt2q7SGy+PPIqffm3x8wbk3MFavHBl3cnm0Ki63yKgnJKjZ468OoLXR3Z4iobHje4RHZG1Ogc6jz31iFr8IFM6nLQMWZpWwHaBzeU5aR0wtUI6gdWuBivb9/YZeeLi8dy10bahHyHKGGAUUwyTf6Rp0gdB9c2ODn4uQIuptmKQbqTzgiFqvrVTdmHaJBquucvaJU9CrTLsKkGM/TNKNmFPgwMmVfzPvBfCthfYsShsUaLS3R5+1dmWeLl4+/ibwZ7A2TFWAK9yRk/B9Qn+ge7pBrVYP8K8JywV+5/wIHYWpiZC7/584ZYGbnu88c3l/55bCNkkqgL8C5TgSsXiY7gFbLhdzbbyhnvbi9ZUxTKcGwahJJ+ALpwsVN+rXsYynKiA0RU0FNx9w64k6lvGUGFDGTjoBG04Xom7tEXUEwjQFhCZAKfGClt0uPhh5Bd6GKVugjJ00EeoUTKYoYPIdf2JEuz9MU0CdYuIESKKAmDxgRZqrrKno/sl7DJOIWgA0l8/RuGA/B/9BKQLRCZBF7J1gQ/svOTnXVUwS94fr/VW2oVsx7uVnzrSkKpkCbuUvMn5pnNOtmHcS5iK3ooAuuIoBTXwqEiRAFreugKvjR/iHyFXxUMDcAsyNhwLmFmBuPBQwtwBz4z9jSdC1TZEC4AAAAABJRU5ErkJggg==\"\n  },\n  \"impact6g\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEjElEQVR4nO2a0ZGkNhCGP1x+XxzBkcGNI7AcgdcR3GRgQsAReJwBm8FkYDYDLgKzEdxMBO0HtQotIwZGaI6hvH8VBUhNq/UjtboRmYjwf8YPaxuwNj4IWNuAtfFBwNoGrI3NEZBBmVLf5ggAygx2qZRtigDt+CfApNK5KQKAvZ5NKoXZliLBDE7AE3AWyFPo3MwIyOAZ23mAp1R+YDMEYAnwYVIo3TIBw/sobIKAzDq/p0HxLyl0b4IARt52lmAaPDwBmfX2v41Um6X6VyMggyKbt5Rdm+tmqR1rjoAc+JZBPTGU91fqZvuBDEwwjxCR1Q5EGq+gQ2SPSO7VF4OHuoAiE9BrECkRqRFpvcpDQHZVAkyg4qSG77QTft1e6/2yWssPg86G9OYBG9YjQA3otBPHCeFO5afkxo4qVPwIq0AF5GKd3a/A24hcrecmoo03se1cYu0RoG+18a5zRKqx4YudGrc28nyl7SSdyEWklh6N3ldindTF3BsYUTGQwTpA5yQPg7qhHzjp1Cix/sCva661nSodroEvwBlogQL74cKHq2uBzrs+uXhAbLr7DpoFtmKfcWUH7DON1rVenbPF4We//kJ/IgIEO3d39J3I9d4dLqAZxvSjxNxqRGaJ/9crepHrcUSSKWB02Jcj9TsRaaX3wrleu2kyhpPKHERkL4H1PjCVDiG/MfHMYgJKNThkYOV1yNUf9L4Wu7Tdik6JqZSYndcZP1D6bgS4t+iXFWqkDyN2JNwDpXZmx3sH2UzZn4IA90bc/V7s8B0iVJYS/jLpk3AR/vrHj7c6mgFyrLc/6nXNeOoK8IL13IXeG8IrRgx2QCPQqjNsgM/AH5ldKergU9fYmXEYZb+eeMOt2GkxpasU+8ZiRstwaOf0ucEJz1cM5BYRUM0w7CS9M6rETpdGRI56/yyXxg0Dqym0I53L6XOHjjskQ80M4yqVPUwJSr9cOkPnOs1QmltgI0x/ZTgG5BYRMGeomoHs84yO1dI71DnYex3KsSHxUQnYY9Pu4JK4pPPFTOMcAQ7diFw36PAtbQTn95xjSTpsZsoVen7R85jH/0Qftp71POeboQulo7CEAH9r6gz8DXwNyJXe+U/g9YpO942v1vOczY/ozgOLpoDvAN0wz0eGeC2Xc7DQ5yqxzqmRPsR1uub4GCcfdSzJBv0Hf6LP3sYUnrEBU8t0xleo7OcZdvyuslGIJcAA/3j3r9hhWzLPaIdhKnxS3f5O8BR88m9GLAEl8Fdso5H4iu2ovxfwRu9koxDrBJP9ozMTr9qmoV9NYKkDJJ4As7ThG9F4191IeRRiskGXAX5PlPTfGv3trcUjIMYHGN47wDWRLVUQMwXM0kYTIRR03YxH2BmKRZNCSQwBXYqGE2Dx/Ic4AmpsTH+ekLs3khCwdGPE3/wovOu5UVwsziT6UfJef4o6YgyWmIJEf3UpXknkjJd+FR7DCeukmkF5oYdhGTFDvdF4lH+FC+YTc9b66ATIx6MQMIaCnhiHA4k6D49PwN2x5UAoCT4IWNuAtfFBwNoGrI0PAtY2YG38B6VuuBeejFXUAAAAAElFTkSuQmCC\"\n  },\n  \"impact8g\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAFVUlEQVR4nO2a7XHjNhCGH2Tuv5kKzFQgXgXHVHDq4HQVxCUoHSgVRK4gcgWhK4hUwUkVhK5g8wOABYMACRHUUTfxO4ORjY8F8AJY7C6hRIT/CxSUAkc376eZxhKFgkJBcwW5W2Dl598cAUANfFKwnEKYIXQPfAF2fvmtEgCwVVDkCFJQobf8AjiJJuINbpmAO/S2HQWlt/s/Rg7EjpWI3ExCpAgU1CPkbAMFy0jd+SfuDGYZKDgiUiS2LxHZhwpjbW7tCNSBvHtgPdRQ6bZ79Hn38RRtOPeqeysYXD2Tqp52DwPCVz1t55+4s337Ku0DbQrC591P5Y9wBOqB8oVyjoKCEq3Zvwy0O/jWn4sfiQCABwXlwHn30TF+XCiR2/AFlF6l+4Sqp8R6Fh9DBtBrv7dAgNnO37zsF85GzFicRMuO4kNmB70wE+sdgEEVyFsBGy5bbR+92x+uTAB68n+PaHcS2Blf4M+M/pvBGt/heku5pvz04LQ/juy8TRzf1QkoEGlNxhKRNSLNQMPCaV/3TbJH1i5lfFe/BgVazvd3IbAWqAUU8BH4CvwBHEydR9PGtm+A54DoA2HdYTF4/nUHV94BzkruEWkS6pWBvMqruLW7JGUXzXoEAlu5M8HE9laXrBKOR8dsnp0AZxKbkW1LPIcIrU9CDVrTVzAGMCcBxSWrkyBvSJkK+hbZENl5390SNKGqVlKVVL+sSwd/QBtXO6top7oFSrS2FrTgxnT0gHZcXoObkhHnc6H6b4AYFmjD6l8bdZ5qB1jP7IR2aiq6dvyLqbc3dfZMEP83nqFNnxKbPcmEBFTo6OsTb2P5hSmzqTZ5PjGWtMb82r9HwaxsbVLIXT6g7RBta0ygjFaiUUfKl6LNUquRSxHZirbUGonjaMrXpo+Y/JiC3AQK9nj2wRQEbMyAfcOjcMrETLwwExdT1vYQkELMUsKGU8g+aEM3wRQE7KV7tVVmoBat6BV086bEyplQQdeBaokEVacgQERvafv/OjDAMSt9CY5ynlBo60cjyrnxgNr87tFX4S6ieO7Qt8DWqesqydzIjxs0WXllh76QWC4B9i4u0Z3EJvJkBtZGyv0bY9kjK4ST83eJvkXsQiyU9kDXwZaxrZGYrELrw1608rNKsTFpK/q41NJVTqVplwr3CL6a3CnHIJeAFKVmr78moW4jmhREE5aqO14jSBInIfiNMWfyReLg/Lp1wsQsCZuBeq7M4Dh5G5LrRIlyfIH6grruQ4ct4fP9DPzuyU51mJqesh1aAQN8Vp6SzCEg1RmxrzRsWCsW5rbKz0XKC5FOuEzBUukXJi3wF2fCn/0+ptoBL+jVOwTqrc3vEniM1AE9SKu5t+Z3lTCO1ytOQa20F1qZ/CXwq4AyqRaPgBxnqOXM7M/mf+sY+XikO5kKfWXZq8+u9takmCwfX8l5SjOSAHdwL5wH3zfoE/o8Hhl2hStTnmIL/ELP198hjDWE3PN/h57Yjv6XHPfAb16e6wpbI6li+JO3xQsZk4fxO2BDdzLXxjN6py28vDpH6FglmNXpCDyaPiveav0mV/BYAlIeJkwJ1x5w/YkmV/AYHVDndjoCa/TEa+Czkx/18lIxhoAx0dhcLOh+Zj8R9y6TMeYI1LmdToRmCiFjCMh6wDwhsrc/jCOgmaLjCTAJATl2wIr8UFYO1CRCMnwBOD+Cqp2/U7/O5CDbALLIjQkeCX/JKbkuMZNsf7jeK7EjcWLc4GfJOKNqMgJu4qEkXde4JE7M0Nugi3ArBMTgEgPa8NkygQFkcesEXB239Fp8FrwTMPcA5sY7AXMPYG68EzD3AObGf4L8LJx8Ylq2AAAAAElFTkSuQmCC\"\n  },\n  \"tiltleft\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAD5ElEQVR4nO1b7XWbMBS99PR/2CBM0HiDsEG9QckG3qDqBu4EpRt4g+AN6AZ4AzLB7Q89HTA1BiEJuYnvORwsIYn3rt6HJJKEJD4yPsUWIDbuBMQWIDbuBIQcPAFUAlQJsJFyKeVtyPdagaS3C2QOsgK5lXIrDwspc1BuQB5AbnzKYXN99sxnCeARQAPgIOVUygDwQ+7GKh7lKgHUCbAhUHuW6To8zPoO5EF+FyBrYwET/VJpb/pu5aFa0wJcOxe9ikmlJ8aqpFCDTP8XAlIRuHIVWsYqIfEAEidukgCQKuRMCREEuQ9NgHUalOD1HcATAOU7Jg2wCTz+YgvYBbaAdC0XSMj5u8EEyAGAQBVoPlaHrQsoAK8JsA8gSxTMJiDRCxrjk1UQaSLAygUA7QbvyQVmL4UToIBe0jaBZIkCmxhQAHiV+5pIoYNvkJQ46gLi84de1bPcT+isYM/zNj6RA9gB+NqrO0JvpVtvb5mx4htrUAfKzTnJiuOo6XH7PKdBPfLQ9x6+INlcUbyPlo6bLxsC8gsPlCelU0vFh3CWY26jfa+igfsSOBXh24WK93GggzxzG6WiOKF9dKniGfUOz4fifSyOCzYNcyzfnmYkywklKjcOlsUFFzOec+XUJjomsKImp9+n4HULqaTf2Li7WyAgZzejQ0EbUfILtVU0Ul/3yNjPVG6MqJIz44Lv7wIF9CJJoVss5XI/AXiBXsjkAP7Ib7OQesL09wIzZgZ9kvww0u4b9H4lm5TYw2ynMjNmJgvqgGRmpxKL6FuFQdvr14oFpFdm1hYtJ4K2q+JKXlKK4qQ235pdULqk+BAVNWmZ9PWNgp4J2LFTPOP5jFN+b9j58phSB3YzZMYMhYsZYqny7Ame8l8FjcmTWqlhIDTEGStqGB6KnghoeW5SQ+XNJqkY1LfUFpHJZdxnLVx0gyXfBh8kAkPuT4Pnbe9ZKlfbKyuJ0mviJzqZz3GJlYmLcldX2B7625bTK0Hf6MeoUX2szwQBEDqf/5poZw5Onifa+cYb9Kn1HjMOTpYScIs4QStdwuLEyPffB8TACTqulEs62xKQXqg7yn1tUz9Cz7jTmaQtAcOT2Rd0zK/lGkfoGa98DObiAr/RKa+cJZn3PgXP3yVcCDDn9QXC5fU3aBNXCPRBxjYL5NAfR0LDKpW54NaywKJU5oJbIcAplbkgNgFeUpkLbAnIPb3XaypzwdoWECSVuWANAoKnMheEJGC1VOaCEASsnspc4JOAaKnMBbYENBfqoqcyF9gSUELvAbbQf9d/wA2kMhcsORF6V7j/01RsAWLjTkBsAWLjTkBsAWLjwxPwF0Pxx3Dj8Xp5AAAAAElFTkSuQmCC\"\n  },\n  \"tiltright\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEIElEQVR4nO2a77WbRhDFf+Tk+6MD4wqsDowriFKBeRVE7oB0oFRg3IHSAelAr4KQDpQKbj7M7gHLgFj+CEnRPYejB+wuM5fZubPLiyTxf8ZPaxuwNp4ErG3A2ngSsLYBHhEUEZQRZO58765lSz53NQIiyCOoIti5Swnw0f0CbIDP/twRso/q+/NA0lUPpMT9lu5i6c4zpBwpbZwfkFKkuDFIPrM913Mc6YhUOYdSpAJpM6BvjLRv9PVjXex7SwRsGxeyiWP56DnhIupmCUDaUIf1bqrzbpzUOT/HWIs6H2NhK6TtQs/I3DOSMf2XVoENELu/Tws9Yw+8Aw6jel9hCsRLvf1GBJSMTIiR9DirwQgyQRHS5+eFbLk6IptiLxEQQsLNlMIz4Oh+NyGdHmYK+BJZUIX0e5gIcI4nEWQh64WHIcChAL4C26EdliBgiyUkuaNkwSVtYxldUtccO38tgrx3gJl1OZd00veavJWt+CrNULq21AFpT4OLa4W5DImdk0d1PzBtEJG7PnORsO+4ubtGIbTBytB3wBv9JW+JJagUC9e9OyaVyZGNdXQ2eLxpiCROZD9zIR8CP0USSYU7L3oiZ+xUGFQaT3G+CHS8SUCpesrojIjRmxzYDpII2DUaMwUSLOQ/BPb7F5MpH+4JphgvLW3/wrJ3GfIANxUOsik2DIEsp/ox5DN3L5F06HnrPultZMlp6/pkssTYhlILKMdZ1AxunHcYmZ61a8sJhWqS2u6lztGy4xnVUkQMaRSr+802nch72lUtBOSqc4Cc86lquewaJ9e8EtrbYHNm5BT4KMgutDu6Nht1E3HSTET03cwULnGXcHBGp7qsIpWMhEuEFZogoV030jC/gtB8e4naichlBPia4RIJcuMER0TXjXyUa2E4SdrLSEhUryPOkTubuqZDE0cFEtC1GgzS35F4AX4D/sY0v8Bqg9+Bfxrt/E7PEJs+EFID0L0cLoFXrHi5Bj5jRBTU64XIHX67O2irayguVYIx9vV2R3vFthTeMMdLZ0MG/DKw7yshO8MD50qs/ortluBzxqQccI4T9Rx95fs5etcYsyVWYER8whYtd40pe4IllnE/AX/OYUwAvgC/MsMLmGNTtMSWte+BbzOMNwRHLEmmWMIcjTl3hSssW78H/mBZCT1Q7/3vetpdxBLb4hVmVIIVNUsQ8YLVDSVjP4s7LPlh5IRVeAnLKcdHJtYn1/gydNMSeu1PYwU3JqFrfRssqSX0WsrRirU/jpbUyrEKEWsT4FFREzFVOZKQxrdCgEdFrRxjiUhCGt8aAR5eQmMWVo5bJaCJglpCJ5W9bbgHAjwKbFdoVgm9JwI8SvolNKg0foT/EkswBUmwVeI+pPMjEDAJ9zgFZsWTgLUNWBtPAtY2YG08CVjbgLXxH2loFxEWi9ZNAAAAAElFTkSuQmCC\"\n  },\n  \"tiltbackwards\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACyUlEQVR4nO2Z7W3bMBCGXxX9H21gbVBngmgEb1BlgqIb2BtkgzobpBNUmaDyBHE2kCe4/iAJEQo/JRKX2nwAQbJM8o6vT8czVRERbpkv3A5wUwTgdoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW6+BrZr5PFZGACMKQYKEaAD8CuFsYRcALQQQqyi8uwINQDe1hrJxDsSRKUvB6w2kJFNikFuPglerQAVQBXg3fG9WgFCCV0G/zsIqELa3XwEXK0AJQcEskSAVwCn1I54OMXaJKAKyQOxAjxClKBbAL8j+y7lWdrbyuukxApw1K5X1+ELbB4tbT4QmgNil8FOOlED2HnanhD2j62Bu6ztAPTadVqIyHW09JGeiM6G+4oXImo845rsDI4xB8v3MTaMh+/fYAvgT4SePwE8yesa4rn10WvtewDfIuwFFTtOFkSAjV7r9xTRbySiTvar5edQrL6rC1cbIkpaB6hffgfgR0S/O4gNlwYiZ7wk9MlLSgHO8txp93zL1qt2rZJqn8KZXHWAi3F2fgewl2cT6vs59RLjFdCopc9xNPN+KQVo5fkozxuI7TTbErfBlGAvmELflziNVSGJCDw4+h1oilKtY54kuI/oNxLRjsKS4CDb9PKzKfkNhokMpraUYRk8YArr1MvgSfozynYPMDzjlbD5d3b7nmyVq00Zio8ARa5CqNbaWyNARsFeu7F32U4dATpLSuELxLI4H6edjdXDEgGKSj7v5NnZzrklFlPRAdPLDj18TZMPpQtp9Fn2BE1vetZMHhRYT3DuCKnlbMnkG3kOSbJOfAIkeQFpQE3wjLjJbyHqhQ2EcNnfDQKisPm+1lAGHhGxQWIjRABAJJQdFpapiTlDTLxPMVioAFdL2RbndoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW5uXoB/c4v7pl/dd2gAAAAASUVORK5CYII=\"\n  },\n  \"tiltforward\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2klEQVR4nO2Y3ZHaMBRGjzN5hw5CB0sqiNMBqSCUQDogHZAKQjqgg7AVLFtB2ApiKrh5kDxoja0fY+9liM6MByMk67ufpCuZQkT4n3mnLUCbbIC2AG2yAdoCtMkGaAvQJhugLUCbbIC2AG2yAdoCtMkGaAvQJmTAFNgDckPXEZhfFbVDEfhDZA98svePnnpz4NBRNgcmPfV1cQJmQHX1k0TEd9XMPXWWto5bthWRvfPbGJQB7VFXjAF7z+9ugG7wIiLVsPFeMIgB1yTBJfCzUbYFvtr7oaf9KPQ1YIk/eHUKKAsoQ/Xe93j2ksvg4Rz8I7DjMim2McOIHMO4rdNHN4E1IvI6B/iSWiUii55rcS7pOaMzByCydgrWvr5D26BgRrSke+RrvmBGHlt3gTlH+NhhRqrCbJd74nPHZ1v/FYV5zlOj+KN0zcjIGRDaztxZsg3UbXIQkaltu0lo1zoDEDm0BHJoqyuR22DM1FzZ+gunbB9o4xpVty8j+qq5MKAx9ZtX61KIMSBFzLpRduyofxSRmfN7PYOmPfqsA5lHJJuLA12fXaCNev266+y3p/4H4I/zvW7X+4xv13iR2m6ot8GF/dwBz4ltT8DG3pcD6aEAKUwS99eT8C4QS52Vp8CKuGCOwNp+zjCjeNUuUFMHL6FZEVg2KVTNdZlwzcRk6hT69tU7B5ww+zuYvbs5UhPMuv+FWQqxr6oL+9yukf+GmRkb4CFWbDQBh1zcU95C3oaN02dzh/DOACcAb4wpSbDquB+T0ftMMWCDSXBTzll7bFact8ZtSkOBIpgASXsbfAD+pogYgAmX5/pBudt/hWPPAXdrQCxDHYVvjpj1D3kG3K8BOQdEknPA2EJunZABP95ERTrPeF6FUwgZsAK+Ay9DdDYAL5i3zXKoB4b+ELl7cg7QFqBNNkBbgDbZAG0B2mQDtAVokw3QFqBNNkBbgDbZAG0B2mQDtAVo8w/leGQvtJ6OAwAAAABJRU5ErkJggg==\"\n  }\n}",
      "helpers.ts": "namespace console {\n    export function log(msg: string) {\n        serial.writeString(msg);\n        serial.writeString(\"\\r\\n\");\n    }\n}\n\nnamespace Math {\n    /**\n     * Generates a `true` or `false` value randomly, just like flipping a coin.\n     */\n    //% blockId=logic_random block=\"pick random true or false\"\n    //% help=math/random-boolean weight=0\n    export function randomBoolean(): boolean {\n        return Math.floor(Math.randomRange(0, 1) * 2) == 1;\n    }\n}",
      "icons.jres": "{\n  \"*\": {\n    \"namespace\": \"icons\",\n    \"dataEncoding\": \"base64\"\n  },\n  \"heart\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO3dwXETQRQE0JVS4o6TgovTgjRIwyYKfw62LpTpAka783f83l3j9qhaOml7206iqh6q6ntVPdeY57dzHmb/T0dyfwurqsfBN/U9L1X1OPt/O4L7W1i9fvK97PAG397kpT8J3d+Y6+wAf+Hrtm2Xnc6+bNv2Zaezu3B/A85QkE8nP3829zdgr0+Wu6mq2vtvXC6X9vfwv9zfmDN8g8A0CgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgLBGQryc+fzn3c+fzb3N+AMBflx8vNnc38rO+A31Z9n/497cn8fQL0+lePeb/KHeSqH+/sA6vWT8FtVPQ2+sU9v5yz9NI7fuT8AAAAAAAAAAAAAAFhPNd/Rlk++afmq+Y62fPJNy1fNd7Tlk29mvuvWf0dbvjHyDbhu/Xe05Zv7+r3Pb53vUtV7R1s++UaN5DvDg+NgGgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWB4Lr139GWb4x8A65b/x1t+ea+fu/ze+c74DfBQzva8sk3M98tZOsdbfnkm5nvFvKhGu9oyyffzHwAAAAAAAAAAAAAANBRdd6plk++mfmq8061fPLNzFfNd6rlk29mPjvp8o1YPp+ddPlGLZ3PTvom36iV83n0KAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGddPlGLZ3PTrp8o9bOd8Bvgpfe0ZZv7Xy3kK13quWTb2a+W8iHarxTLZ98M/MBAAAAAAAAAAAAAAD/rjrvaMvHTNV5R1s+ZqrmO9ryrf1NcobnYrXe0d7kG83X2hkK0npH+w6v3/v87vla2+uT5W6qeu9oyzeWr7szfIPANAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCwRkK0npHe5NvNF9rZyhI7x1t+fY+n+SA31QvvfPdPR93UM13tOVjumq+oy0fAAAAAAAAAAAAAADAuZQdcnhf2SGH95Ud8qWd4akm3dkhX5iCjLNDvrBl962PUmWHfGW+QSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUZJwd8oUpyDg75PAnB/wm3Q4551Z2yCErO+QAAAAAAAAAAAAAAMAxfgEvTlEYacaGsgAAAABJRU5ErkJggg==\"\n  },\n  \"smallheart\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACWElEQVR4nO3dy3HbQBAEUMAp6W4lZV2UlpWG0xAdhUYHyhcV3eXyCtgP3wtgORxUAyegtw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgUVX1WFUvVXWpNpePcx57/6cz2d/Cquq58aLe8lZVz73/2xnsb2F1vfO9HXCB/1zkpe+E9tfmW+8B/sHTtm37QWfv27b9OOjsUdhfgxkC8jD5+b3ZX4Oj7ixfpqrq6N/Y9334Pfwv+2szwxMEuhEQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCGYIyO+Dz78cfH5v9tdghoD8mvz83uxvZSe8U/299388kv3dgbp+leOrL/LdfJXD/u5AXe+EP6vqtfHCvn6cs/TXOD6zPwAAAAAAAAAAAAAA4Gw1eM+3+eimBu/5Nh/d1OA93+Zb+0kyw1dNRu/5Nt/CZgjI6D3f5lvY8P3WVWP3fJtPTzrcLQGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBYIaAjN7zbb6FzRCQ0Xu+zUc/J7xT3dTzbT496d3V4D3f5qO7Grzn23wAAAAAAAAAAAAAAABzKT3kcFvpIYfbSg/50mb4qsno9JAvTEDa6SFf2LL91mep0kO+Mk8QCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgFpp4d8YQLSTg85/M0J76TrIWdupYccstJDDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIzpHa9p3ognZZNyAAAAAElFTkSuQmCC\"\n  },\n  \"yes\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVR4nO3dwW3cMBRFUWpayj5uKtm4raSNtOFJFf5ZjLMIID8E5mhI0efsrYEIX2glvdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ISq6qmqflbVtfpc367zNPqe4C6q6rkzij2vVfU8+t6gS92eHK8HBPI3kq4nyeVeNwof9L21th107a219q3nAgJhtC8zX/+ocuG/VFUd/Rvbtn34/9wTBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAmG03wdf/9rzxwJhtF8nvz4c5wHvpH8dfY/QpW5fNbl3JL5qwjrq9iT5UVUvnWG8vF3Hd7EAAAAAAAAAAAAAAIBTKzvksK/skMO+mnyHfHa+arK+qXfIZyeQ9U29Qz47O+mLq5p7h3x2niAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBDI+qbeIZ+dQNZnhxze84B30u2Qc25lhxyyskMOAAAAAAAAAAAAAADLKTvaXZzfwsqOdhfnt7Cyo93F+a3t0uxo93J+C7s0O9q9nN/Ctio72j2c39p8OA4CgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBJdmR7uX81vYpdnR7uX8VvaAd6qX3tF2fp9A2dHu4vw+gbKj3cX5AQAAAAAAAAAAAAAA/KvskMO+skMO+8oOOQOd4btYdsgZ5gyB2CFnmOn3t6vskDPOGZ4gMIxAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCASCMwRih5xhzhCIHXJ4zwPeSbdDzrmVHXLIyg45AAAAAAAAAAAAAABAa639Abe2uakJmTAPAAAAAElFTkSuQmCC\"\n  },\n  \"no\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQUlEQVR4nO3dwXHbMBAFUIgt5R43lVzcVtJG2ohThTcHOwdPrD+aASkC0HsF0NDOfvNE/NbeVdVTVf2sqpfq8/L+nKcGNxp6/6rqufNQn3mtqufdDsmyht6/ekvu6wEH/HdIbxKuGn3/ttba99baZZ+f+59La+3bQc9mDUPv39Za+7LPWa46+vnMbej9u1RV7XWSq3/kcjnqPwSTG33/tj0PAqsREAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAi21tqfg//Gy8HPZ25D79/WWvu100GuOfr5zG3s/bvDN8Ffd/qhLGiK/au3WyX2PqRbTbjJFPtXb0n+UVW/Ow/2+/05bjPhZvYPAAAAAAAAAAAAAADWUyP3aE/A/BZWI/doT8D8FlaD92iPzvz6zHAv1tA92hMwvw4zBGToHu0JmF+H4fvLq8bu0R6d+fWZ4Q0CpxEQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCGYIyNA92hMwvw4zBGTsHu3xmd/K7vBN9dI97ub3AGqGHu2Bmd8DKD3aXcwPAAAAAAAAAAAAAADgo9JDDp8rPeTwudJDvrQZbjUZnR7yhQlIPz3kC1u23/peqvSQr8wbBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBA+ukhX5iA9NNDDtfc4Zt0PeTMrfSQQ1Z6yAEAAAAAAAAAAAAAAD4oPeRdzG9hpYe8i/ktrPSQdzG/PjPcaqKHvI/5dZghIHrI+5hfh+H7t6v0kPcwvz4zvEHgNAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICwQwB0UPex/w6zBAQPeR9zG9ld/imeukecvN7AKWHvIv5PYDSQ97F/AAAAAAAAAAAAAAAYD2lR5sTDb1/pUebEw29f6VHmxONvn9b06PNuYbev63p0eZcQ+/fpUqPNucZff9muDgOTiMgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEGxNjzbnGnr/tqZHm3ONvX93+CZYjzZXTbF/pUebE02xf6VHmxPZPwAAAAAAAAAAAAAAuNlffgNN7fHG9EQAAAAASUVORK5CYII=\"\n  },\n  \"happy\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3ElEQVR4nO3dMVrjMBAG0HGuRE8uBU2uBdfgGoRTZLZIaHZhPr6VFUvmvT7jsazfrqKJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANipzDxm5mtmnrPN+VbnuPU93ZP127HMPDU+1K9cMvO09b3dg/Xbsby++S4dHvDnQ971m9D6tTls3cAPPEfE0qn2EhFPnWqPwvo1mCEgD5PX35r1a9DrzbKazMze11iWZfh1+F/Wr80MXxDYjIBAQUCgICBQEBAoCAgUBAQKAgIFAYGCgEBBQKAgIFAQECgICBRmCMhH5/rnzvW3Zv0azBCQt8nrb8367dkd/lP9uPU99mT9foG8nsqx9kP+NadyWL9fIK9vwpfMfG98sO+3Ors+jeNv1g8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIzGNmvmbmOducb3WOW98T8xh6/2XmqbGpr1wy87Rak+zW0Psvr8m9dGjws0lfEr41+v47RMRzRCzr3O4/loh46lSbfRh6/x0i4mGdXr7Vuz5zG3r/LZmZa3Xy7UWWpdcbgsmNvv8OazYCeyMgUBAQKAgIFAQECgICBQGBgoBAQUCgICBQEBAoCAgUBAQKAgKFQ0R8dL7GuXN95jb0/jtExNtKjXynd33mNvb+u8N/gh9XulF2aIr9l9dTJdZu0qkm/MgU+y+vSX7JzPfGxt5vdZxmwo/ZfwAAAAAAAAAAAAAAsD858hxt/bGlHHmOtv7YUg4+R1t/+/6SzHAu1tBztEN/rf0NbYaADD1He4Xf964/en9DG35+eebYc7T119bf6Gb4gsBmBAQKAgIFAYGCgEBBQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoDBDQIaeox36a+1vaDMEZOw52vrrXZ/KHf5T3TRHW38rzCGnTQ4+R1t/bC4Hn6OtPwAAAAAAAAAAAAAA4E7+AEZUA5tI2DftAAAAAElFTkSuQmCC\"\n  },\n  \"sad\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACs0lEQVR4nO3dwVEjMRAFUI1T4o6TWi6kBWmQhk0U/nswXLbYLgp5LM3w3p2m3dKXT5ZaAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANipJMckr0nO6XP+qHMc/Znuyfx2LMlz56J+5ZLkefRnuwfz27FcT77LCgv8uci7PgnNr89hdAPf8NRaW1aqvbTW/qxUexbm12ELAXnYeP3RzK/DWifLzSTJ2v9jWZbp5/BT5tdnC98gMIyAQEFAoCAgUBAQKAgIFAQECgICBQGBgoBAQUCgICBQEBAoCAgUthCQ95Xrn1euP5r5ddhCQN42Xn8089uzO/ym+nH0Z1yT+f0Cud7KcetF/jW3cpjfL5DrSfiS5NS5sKePOru+jeNf5gcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMLskxyWuSc/qcP+oc9TdPf3RI8ty5qF+5JHnW3/j+6JDryXdZYYE/F7nrJNTfvr9JDqMb+Ian1tqyUu2ltfans4b+dmwLAXmYvL7+dmytk+VmkmTt/7Esy4/noL++/ma3hW8QGEZAoCAgUBAQKAgIFAQECgICBQGBgoBAQUCgICBQEBAoCAgUBAQKWwjI+8r1z51/r78d20JA3iavrz/GucNvqh/1N64/biDXWzluvci3vjVEf4yT60n4kuTUubCnjzpr3DulPwAAAAAAAAAAAAAA4G7iHW0Gmnr/xTvaDDT1/ot3tBlo9v13aN7RZqyp99+heUebsabef0viHW3GmX3/beHiOBhGQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKAgIFAQECofmHW3Gmnr/HZp3tBlr7v13h98Ee0eb/9rE/ot3tBloE/sv3tFmIPsPAAAAAAAAAAAAAAC+7S8SegObJuUCMwAAAABJRU5ErkJggg==\"\n  },\n  \"confused\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO3dQVICMRAF0AxXci+X0g3X0mt4DfAUtAtwY1ldlk3IZHjvAA35qR9WJK0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbFRE7CPiPSJOUXO6ztmPXtM9yW/DIuJQ3NTfnCPiMHpt9yC/DYvLyXfusMHfm7zpk1B+NbvRX+APXltrS6fZS2vtpdPstZBfwQwFeZp8/mjyK+h1stxMRETvz1iWZfU5/Jf8amb4BYFhFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIDFDQT47zz91nj+a/ApmKMjH5PNHk9+W3eE/1c+j19iT/B5AXG7luPUmP8ytHPJ7AHE5Cd8i4ljc2ON1zqZv4/hJfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDaRcQ+It4j4hQ1p+uc/eg13ZP8NiwiDsVN/c05Ig6j13YP8tuwuJx85w4b/L3Jmz4J5VezG/0F/uC1tbZ0mr201l46zV4L+RXMUJCnyeePJr+CXifLzURE9P6MZVlWn8N/ya9mhl8QGEZBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSMxTks/P8U+f5o8mvYIaCfEw+fzT5bdkd/lP9PHqNPcnvAcTlVo5bb/LD3MohvwcQl5PwLSKOxY09Xuds+jaOn+QHAAAAAAAAAAAAAADbE97RLpFfzarzC+9ol8ivZtX5hXe0S+RXs/b8ds072lXyq1l1frvmHe0q+dWsOr8lwjvaFfKrWXt+M1wcB8MoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAYte8o10lv5pV57dr3tGukl/NuvO7w3+CN/2OtvxqpsgvvKNdIr+aKfIL72iXyK9GfgAAAAAAAAAAAAAA8GdfRlQDm/tyTScAAAAASUVORK5CYII=\"\n  },\n  \"angry\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADY0lEQVR4nO3dQXYaSwwFUMGWMg+bSiZsK9lGtmGyCisD49EPOj5f3UbVuXdO8dCpByNaEXeZecnMn5l5y57b/ZxLwAeNvn+ZeW2G+pvXzLxuFpLDGn3/8q25rzsEfA/pl4SHpt+/c0R8j4jTNh/3P04R8W2nszmG0ffvHBFftsny0N7ns7bR9++UmblVkodvcjrt9Q3B4qbfv/OWQeBoFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoHCOiN87v8dt5/NZ2+j7d46IXxsFeWTv81nb7Pv3Cf8J/rrRB+WAlrh/+fZUia1DeqoJH7LE/cu3Jv/IzJdmsJf7OZ5mwoe5fwAAAAAAAAAAAAAAcDw5eY/2AszvwHLyHu0FmN+B5fA92tOZX88Kz8UavUd7AebXsEJBRu/RXoD5NYzfX545e4/2dObXs8IvCDyNgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFFYoyOg92gswv4YVCjJ7j/Z85ndkn/Cf6kPvcTe/f0CusEd7MPP7B6Q92i3mBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTmJTN/ZuYte273cy7yyXeIfJl5bYb6m9fMvMon39L58q25rzsEfA/ZarJ88j0z3zkivkfEqXNI4RQR35pnyNcjX8M5Ir5sk+Wh7vnyPff1e58/Ot8pM3OrJA/f5HT6398Q8snX1cl33jIIHI2CQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUzhHxe+f3uDVfL1+PfA3niPi1UZBHuufL99zX733+7Hyf8J/gr/LJt2q+95DXHUJu/dQL+eR7Sr73kJfM/JGZL81gL/dz9nhuknzyPSUfAAAAAAAAAAAAAABMlJP3VC/A/HpGzy8n76legPn1jJ5fDt9TPZ359Uyf3wp70qczv57R81thT/p05tczen7j96RPZ3490+fn0aNQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgcIKe9KnM7+e0fNbYU/6dObXM3t+n/Cf4P6e6sHMr2eJ+eUKe6oHM7+eJeaX9lS3mF+P+QEAAAAAAAAAAAAAwIf9Ac/YvNRE2K36AAAAAElFTkSuQmCC\"\n  },\n  \"asleep\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbElEQVR4nO3csVErQRAE0D2lhI+SAkdpQRqkgYhC/Q1JHkz9Yu/QIN7zNdc1V71naccAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+KYk+ySvSY6Zc7zM2f+lfN1131/rfEkOk6E+c0py+Av5uuu+v9b5cm7uaYOA15BTTe6er7vu++uebzfGeB5jLDNDCssY42lyRvd83XXfX+t8uzHGwzpZvjQ7v3u+7rrvr3W+JUnWSvLlQ5bl2ydE93zddd9f93y7NYPAvVEQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYHCbozxsfEzjpO/756vu+77a51vN8Z4WynIV2bnd8/XXff99c73A/8JfrznfN1131/3fNeQhw1Crn3rRdt83XXfX/d815D7JC9J3ieDvV/mbHFvUtt83XXfX/d8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPaS7JO8JjlmzvEyZy9fn3xMSHKYfKmfOSU5yHf7fEzI+eQ7bfCCry956iSU776/JLtbB/gPz2OMZaPZyxjjaXKGfHfsNxTkofl8+e7YVifLapJk62csy/LtPcg3l6+73/AFgZtRECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBwm8oyMfG84+Tv5fvjv2Ggrw1ny8ft/MD/6l+lO92+VhBzrdyrP2S1741RD5uJ+eT8CXJ++SLfb/M2eLeKfkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAbv4BRucDdqzl6ywAAAAASUVORK5CYII=\"\n  },\n  \"surprised\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC70lEQVR4nO3dwVHjQBCGUWlT4g5JwYW0IA3SwEThfw82h93ydlHbyGLG7wUwoFZ90snqZRlEkockr0kO6Tmcz3nY+5quyfwmluS5eVMvOSZ53vvarsH8JpbTk++4wQ3+vMlTPwnNr+fX3v/AFzwty7JudPa6LMvjRmf/FObXMEIgd4Ofvzfza9jqyfJtkmTrv7Gu64+fw/8yv54R3iCwG4FAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAYYRAPjY+/7Dx+Xszv4YRAnkb/Py9md/MrvCb6vu9r3FL5ncDcvoqx3ff5Jv5Kof53YCcnoQvSd6bN/b9fM7UX+P4m/kBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9CR5SPKa5JCew/mch72vCb5FkudmFJcckzzvfW3QktOb47hBIJ+ReJPs6Nfe/8AEnpZlWTc6e12W5XGjs/kCgfTdDX4+ha2efDcjSbb+G+u6uk878QaBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIJC+j43PP2x8PgWB9L0Nfj5s5wq/Sb/f+xqhJaevmnx3JL5qwjxyepO8JHlvhvF+PsfXTAAAAAAAAAAAAAAAgKHFHvIW85tY7CFvMb+JxR7yFvPrGeGrJvaQ95hfwwiB2EPeY34NP37/dmIPeYf59YzwBoHdCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKIwRiD3mP+TWMEIg95D3mN7Mr/KZ66j3k5ncDYg95i/ndgNhD3mJ+AAAAAAAAAAAAAAAAf4o95HBZ7CGHy2IP+dRG+KrJT2cP+cQE0mcP+cSm3W99LYk95DPzBoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgkD57yCcmkD57yOFfrvCbdHvIGVvsIYda7CEHAAAAAAAAAAAAAACu4zePgd6tFHehqAAAAABJRU5ErkJggg==\"\n  },\n  \"silly\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSElEQVR4nO3dwXHbQAwFUJAt5W41FV/UVtKG27BchZGD5VMsjCdLSuDmvTvBr5n94olExFVmnjLzd2ZecszlOucU8E2tz19mngdDfeU9M8+bhWRarc9ffjT3fYeAnyE9Sbip+/lbI+I5IpZtfu5floj4udNs5tD6/K0R8WObLDftPZ9ja33+lszMrZLcvMmy7PUPwcF1P3/rlkFgNgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBYI+Jt53tcdp7PsbU+f2tEvGwU5Ja953Nsvc/fHd4JftrohzKhQ5y//PiqxNYhfdWEbznE+cuPJv/KzNfBYK/XOb5mwrc5fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALC/zDxl5u/MvOSYy3XOST75psiXmefBUF95z8yzfPIdOl9+NPd9h4CfIYeaLJ98j8y3RsRzRCwjQwpLRPwcnCHfGPkGrBHxY5ssN43Ol++x1+89v3W+JTNzqyQ3b7Is//wPIZ98o0byrVsGgdkoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAYY2It53vcRm8Xr4x8g1YI+JloyC3jM6X77HX7z2/d747vBP8JJ98R833GfK8Q8itv3ohn3wPyfcZ8pSZvzLzdTDY63XOHt9Nkk++h+QDAAAAAAAAAAAAAAC4t+y8h/wA+ZhYdt5DfoB8TCyb7yHvns93sebXeg95NM+nIPNrvYd8g+t3nb9Xc2kis/ce8u75PEGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFmV/rPeTRPJ+CzK/3HvL++ZjZHd75nn9POnPL5nvIu+fjP5DN95B3zwcAAAAAAAAAAAAAAHBv2XwPefd8TCyb7yHvno+JZfM95N3z+arJ/FrvIY/m+RRkfq33kG9w/a7z7UmfXGbvPeTd83mCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCjK/1nvIo3k+BZlf9z3k3fMxszu8821POseWzfeQd8/HfyCb7yHvng8AAAAAAAAAAAAAABr5A+m9l9DwJ/KjAAAAAElFTkSuQmCC\"\n  },\n  \"fabulous\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbUlEQVR4nO3dwXHiQBAF0BEp+W6SWl9Iy07DaYCjoPcAXLbsri0Pw7TEe3eGT6u+OEnd2lVE7CPiIyJO0ed0PWff7kg++abli4hDZ6jvnCPiIJ98q84Xl+aeBwS8hexqsnzyzcy3a629tdaWnkMSS2vtT+cZ8vWRr8OutfZynyw/6j1fvrmfH31+6XxLRMS9kvz4Jcvy6zuEfPL16sm3u2cQ2BoFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBI7FprX4O/49T5efn6yNdh11r7vFOQn/SeL9/cz48+v3a+BzwT/CqffGvNdwt5GBDy3m+9kE++KfluIfcR8R4Rx85gx+s5I96bJJ98U/IBAAAAAAAAAAAAAEBFUXlP9QryVVd9fqXzReU91SvIV131+ZXOF8X3VFfPV131+VXPZ096f77qqs+vdD570sefP1v1+ZXOZ09668tXXfX5Vc/n1aOQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYQ96f35qqs+v9L57Ekff/5s1edXO98Dngne/h7twqrPr3q+W8jSe6qr56uu+vyq57uF3EfhPdXV81VXfX7V8wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjRcQ+Ij4i4hR9Ttdz9rN/0yOZ34ZFxKHzon7nHBGH2b/tEcxvw+Jy5zsPuMC3i7zpO6H59dnNDvAf3lpry6Czl9ban0FnV2F+HdZQkJeVnz+b+XUYdWe5m4iI0d+xLEv5OfyW+fVZwz8ITKMgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgKJNRTka/D5p8Hnz2Z+HdZQkM+Vnz+b+W3ZA56pfp39G0cyvycQl7dy3PsiP81bOczvCcTlTvgeEcfOC3u8nrPpt3H8y/wAAAAAAAAAAAAAAIBHi+J7vuVjmii+51s+ponie77l2/Y/yRrealJ9z7d8G7aGglTf8y3fhpXfbx1Re8+3fPakw9NSEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBxBoKUn3Pt3wbtoaCVN/zLR/zPOCZ6q493/LZkz5dFN/zLR/TRfE93/IBAAAAAAAAAAAAAAAP8hdMcQbrWeMI9gAAAABJRU5ErkJggg==\"\n  },\n  \"meh\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDUlEQVR4nO3dMZLTQBCG0ZGvRI4vBYmvBdfgGmtOsT/BegOq7A4Yy2qJ93LG7Sm+VWT1GDdJzkl+JrlmzvV2znk8Uff5uut+f63nS3KZHOqe9ySX/2G+7rrfX+v58lHu+woDfg45VXL3+brrfn/d5zuNMb6PMZaZQwrLGOPb5Bnd5+uu+/21nu80xvjynFkemj2/+3zddb+/1vMtSfKsSR5+yLL881+I7vN11/3+us93euYgcDQCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgcJpjPF75c+4Tv777vN11/3+Ws93GmP8etIgj8ye332+7rrfX+/5XvCb4K9Hnq+77vfXfb7PIS8rDPnst160na+77vfXfb7PIc9JfiR5mxzs7XbOGu9Najtfd93vr/t8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN0lOSf5meSaOdfbOeetvxM8RZLLZBT3vCe5bP3dYEo+nhzvKwTyGcmhnySnrQdgdd/HGMtKZy9jjG8rnd2CQI7vy87P39Raf1loIknW/oxlWQ77/8gTBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAju/3yudfVz5/UwI5vl87Px/W84LfpH/d+jvClHy81eTZkXirCceRjyfJjyRvk2G83c459NtMAAAAAAAAAAAAAACA44s95HBf7CGH+2IP+aF5q8k8e8gPTCDz7CE/sMPut36VxB7yI/MEgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCCQefaQH5hA5tlDDo+84Dfp9pCzb7GHHGqxhxwAAAAAAAAAAAAAAOAvsYcc7os95HBf7CFnQ3t4q4k95GxmD4HYQ85m2u/fTuwhZzt7eILAZgQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQChT0EYg85m9lDIPaQwyMv+E26PeTsW+whh1rsIQcAAAAAAAAAAAAAABhjjD/nswPAlE/S9gAAAABJRU5ErkJggg==\"\n  },\n  \"tshirt\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADi0lEQVR4nO3dQW4TQRRF0bK3xJxsCibZFmyDbRBWwWdAPEAiX4Jqu15Xzpmnc9XSS0b2H+NVVT1V1deqeqk5L6/PeRoHSu9Ll/7+ovuq6nky6m9+VtXze+hLl/7+ovvq93J/3iHwFjm15PS+dOnvL73vOsb4PMa4zDykcRljfJp8RnpfuvT3F913HWN8OKblTbPPT+9Ll/7+ovsuVVVHlbz5Sy6X//4Lkd6XLv39pfddjwyB3RgINAwEGgYCDQOBhoFAw0CgYSDQMBBoGAg0DAQaBgINA4GGgUDjOsb4ceff8TL58+l96dLfX3TfdYzx7aCQt8w+P70vXfr7y+57wGeCP+7cly79/aX33SKf7xB59LdexPalS39/6X23yKeq+lJV3yfDvr8+5x7fmxTbly79/aX3AQAAAAAAAAAAAABAokq+U61P38q+Sr5TrU/fyr4Kv1OtT9/KPnfS9c3Yvs+ddH2ztu5zJ33om7Vzn68ehYaBQMNAoGEg0DAQaBgINAwEGgYCDQOBhoFAw0CgYSDQMBBoGAg03EnXN2vrPnfS9c3au+8Bnwne+o62vr37bpHRd6r16VvZd4t8quA71fr0rewDAAAAAAAAAAAAAAD+XSXf0dbHSpV8R1sfK1X4HW19e/8nOcP3YkXf0R76ZvuinWEg0Xe0D/j5ez8/vS/avf6yHKYq+462vrm+dGf4DwLLGAg0DAQaBgINA4GGgUDDQKBhINAwEGgYCDQMBBoGAg0DgYaBQOMMA4m+oz30zfZFO8NAsu9o67v38+k84DPVW9/5Tu/jABV+R1sfy1X4HW19AAAAAAAAAAAAAAAAf6rwO9/6WKbC73zrY5kKv/Otb+//JGf4VpP0O9/6NnaGgaTf+da3sfj71lXZd771uZMO75aBQMNAoGEg0DAQaBgINAwEGgYCDQOBhoFAw0CgYSDQMBBoGAg0zjCQ9Dvf+jZ2hoGk3/nWxzoP+Ez11nfI0/s4QIXf+dbHchV+51sfAAAAAAAAAAAAAADAnyr8zrc+lqnwO9/6WKbC73zr2/s/yRm+1ST9zre+jZ1hIOl3vvVtLP6+dVX2nW997qTDu2Ug0DAQaBgINAwEGgYCDQOBhoFAw0CgYSDQMBBoGAg0DAQaBgKNMwwk/c63vo2dYSDpd771sc4DPlO99R3y9D4OUOF3vvWxXIXf+dYHAAAAAAAAAAAAAAA8yC/mVJsgRokLGwAAAABJRU5ErkJggg==\"\n  },\n  \"rollerskate\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcElEQVR4nO3dsXHbQBQE0KNacm42ZSVqy27DbUiuQt+BxMyzM9YRxMfhvRzQzg2WioAdg1OoqmtV/aqqt5rz9nmf65nysbCqepl86P7lvapezpCPhdXHL/P7Bg/g7SGc+qXunu9p5mIO4XmMcdno3pcxxo/Je7TOpyDr+9b8/q3zbdVcmqiq2vpvXC6XLz9H3fP5DwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIOv7s/H93yavb51PQdb3u/n9u+djZQ945/v7yvk4gfr4asi9H8J7f9WkbT5OoD5+qX9W1evkg/f6eZ8tvovVNh8AAAAAAAAAAAAAAMCjVfMd8u75WFg13yHvno+FVfMd8u75fNVkfa13yEfzfAqyvtY75He4ftP720lfXFXvHfLu+fwHgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFCQ9bXeIR/N8ynI+rrvkHfPx8oe8M63nXSOrZrvkHfPxwlU8x3y7vkAAAAAAAAAAAAAAKCjar5TLZ98u+Wr5jvV8sm3W75qvlMtn3x75nsazXeqh3zyfd1ddtJb71Tf4fqt7y/fvtdvev9LVe+davnkm2UnHTaiIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBA8jeY71UM++eZM76R336mWb9/rt75/73wPeCd46R1t+dbOdwvZeqdaPvn2zHcLea3GO9XyybdnPgAAAAAAAAAAAAAA6Kg671TLJ9+e+arzTrV88u2Zr5rvVMsn35757KTLN2P5fHbS5Zu1dD476UO+WSvn8+lRCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAjvp8s1aOp+ddPlmrZ3vAe8EL72jLd/a+W4hW+9UyyffnvluIa/VeKdaPvn2zAcAAAAAAAAAAAAAAPy/6ryjfQDOb2HVeUf7AJzfwqr5jnZ3zm/OEb6L1XpH+wCc34QjFKT1jvYBOL8JW/2y3E1V7x3t7pzfnCP8B4HdKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgERyhI6x3tA3B+E45QkN472v05v5U94J3q+R3txpzfCdQRdrQbc34nUHa0pzg/AAAAAAAAAAAAAABYxl/DLlEY5aIlfAAAAABJRU5ErkJggg==\"\n  },\n  \"duck\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nO3dwXHUQBQE0NlNiTtOCi5OC9IgDZso/DnY3KhfgFY7PbPv3TXucqml06rHWERVPVXV96p6rWNeP855eqR8bKyqng/edH/yVlXPj5CPjdX7k/nthBvw90146Emdno9jrrMD/IWvY4zLSWdfxhhfDp6Rno8DVijIp/Dz0/NxwFlPvpupqjr7b1wul//+P6Tn45gV3iAwjYJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINBQEGgoCDRWKMjPk89/PXh9ej4OWKEgP8LPT8/Hzu7wm+/PO+fjAdT7V0NufRPe+qsmsfl4APX+pP5WVS8Hb7yXj3PO+C5WbD4AAAAAAAAAAAAAAGA/Fb7zLR/TVPjOt3xMU+E73/J5k8x0Hfk73/IxzXXk73zLxzSXquydb/nspM+0wofjYBoFgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoXEf+zrd8THMd+Tvf8jHPHX5TvfUOeXo+bqDCd77lY7oK3/mWDwAAAAAAAAAAAAAAYC0VvkMu3975olX4Drl8e+eLVuE75PLtnW+F72Kl75DLd0x0vhUKkr5DLt/c6089P35/uyp7h1y+vfOt8AaBaRQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaCxQkHSd8jlOyY63woFSd8hl2/u9bPPn+sOv1neeiddvgfYma/wHXL59s63hArfIZdv73wAAAAAAAAAAAAAAMC/q/AdbfmYpsJ3tOVjmgrf0ZZv7zfJCl81id7RHvIdzRdthYJE72jf4Pqzz0/PF81O+th75zs9X7oV3iAwjYJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINBQEGgoCDRWKEj0jvaQ72i+aCsUJH1HWz7mucNvqrfe+U7Pxw1U+I62fExX4Tva8gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChfgF0fbzUSCLJJQAAAABJRU5ErkJggg==\"\n  },\n  \"house\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYElEQVR4nO3dQXITSRQE0JauxH58KdhwLeYacw3MKfgsjBdETGTMxFerfrXf26tIFZHulTqPg4eoqpeq+ruqXqvn9fc5L6u/EzxEVX1tluLf/Kyqr6u/G7TU25Pj5wkFeS+JJ8lC99UBLuDLcRy3k86+Hcfx+aSz+Q8UpO/T5ucTnPWX78Ooqjr737jdbv6fFvEEgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFCQvh8nn/968vkECtL3z+bnw3me8Jv0v1Z/R2ipt7eaPLok3mrCddTbk+RbVX1vFuP773O8zQQAAAAAAAAAAAAAANhaDd8hl49lavgOuXwsU8N3yOW79pNkh7eaTN8hl+/CdijI9B1y+S5s/P521ewdcvmuveO+wxMEllEQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCHYoyPQdcvkubIeCTN8hl491nvCb6tYOuXx23Jer4Tvk8rFcDd8hlw8AAAAAAAAAAAAAAHi2Gr6jLZ98y/LV8B1t+eRblq+G72jLJ9/KfPdj/o62fD3yNdyP+Tva8q39/Nnnj853q5q9oy2ffF2dfDu8OA6WURAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAI7sf8HW35euRruB/zd7TlW/v5s8+fne8Jvwm+9M63fNfO9x5y9I62fPKtzPce8qUG72jLJ9/KfAAAAAAAAAAAAAAAwP9Xk3e05WOlmryjLR8r1fAdbfmu/STZ4b1Yo3e0D/m6+UbboSCjd7Qf8Pmzz5+eb7Sz/rI8TNXsHW35evmm2+EJAssoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQ7FGT0jvYhXzffaDsUZPaOtnxnn0/yhN9UX3rne3o+HqCG72jLx3I1fEdbPgAAAAAAAAAAAAAAgD+Vne8W93dhZee7xf1dWNn5bnF/PTu81cTOd4/7a9ihIHa+e9xfw/h96yo73x3ur2eHJwgsoyAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQ7FAQO9897q9hh4LY+e5xf1f2hN9UX3rn2/19AGXnu8X9fQBl57vF/QEAAAAAAAAAAAAAwGX8Aq9kBxBOoCa9AAAAAElFTkSuQmCC\"\n  },\n  \"tortoise\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACj0lEQVR4nO3dwXHbQAwF0KVayj1qKr64LaeNtGGlCiMHWTcPJglELZZ6787VH3A+eRIxBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBBRcQ5In5GxCVqLp/nnOXrk4+CiHgt3tSvfETEq3zz81EQ1yffxw43+HaTS09C+Y79JjnNDvAXXsYY205nb2OMH8Uz5DuwFQryrfn58h3YXk+Wu4mI2Ps3tm377znIV8vX3QpvEJhGQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEisU5PfO51+K18t3YCsU5Ffz8+Vjngf8p/q7fPPycQdx/SrHvW/yvb8aIh/zxPVJ+BYR78Ub+/55zh7fnZIPAAAAAAAAAAAAAAB4mGi+R1s++abli+Z7tOWTb1q+aL5HWz75ZuY7jf57tOWrka/gNPrv0ZZv7vV7n9863xbRe4+2fPJVVfKt8OE4mEZBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSp9F/j7Z8NfIVnEb/Pdryzb1+7/N753vAf4IPvedbvmPnu4VsvUdbPvlm5ruFPEfjPdryyTczHwAAAAAAAAAAAAAA8O+i8x7tBZjfgUXnPdoLML8Di+Z7tLszv5oVvovVeo/2AsyvYIWCtN6jvQDzK9jryXI3Eb33aHdnfjUrvEFgGgWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEisUJDWe7QXYH4FKxSk9x7t/szvyB7wn+r6Hu3GzO8JxAp7tBszvycQ9miXmB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8rT8dk3Kn7lNqRgAAAABJRU5ErkJggg==\"\n  },\n  \"butterfly\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADqElEQVR4nO3dMXYbRxBF0Qa2pNzYlJ1wW/Y2vA3Rq1A5ECczK3Bh0J+je3NC7/Q5n4qIWutDVT2q6q+qeq+Z94/PeawnSu9Ll/5+0X1V9TaM+i8/qurtV+hLl/5+0X31c7k/Tgg8IkdLTu9Ll/5+6X33tdYfa63b5EMat7XW78PPSO9Ll/5+0X33tda357R8avr56X3p0t8vuu9WVfWskk//kdvtf/+GSO9Ll/5+6X33Z4bA1RgINAwEGgYCDQOBhoFAw0CgYSDQMBBoGAg0DAQaBgINA4GGgUDjvtb65+R/43348+l96dLfL7rvvtb6+0khn5l+fnpfuvT3y+57wd8E/3blvnTp75fed0S+nRD57G+9iO1Ll/5+6X1H5KOq/qyq78Ow7x+fc8b3JsX2pUt/v/Q+AAAAAAAAAAAAAABIVMl3qvXp29lXyXeq9enb2Vfhd6r16dvZ5066vonL97mTrm/q0n3upC99U1fu89Wj0DAQaBgINAwEGgYCDQOBhoFAw0CgYSDQMBBoGAg0DAQaBgINA4GGO+n6pi7d5066vqlr973gb4IvfUdb37X7jsjoO9X69O3sOyIfFXynWp++nX0AAAAAAAAAAAAAAMD1VPKdb9ipku98w04VfuebGd+LNRd955sZA5mLvvPNzFm/+X4ZVdl3vpnxPwg0DAQaBgINA4GGgUDDQKBhINAwEGgYCDQMBBoGAg0DgYaBQMNAoGEgc9F3vpkxkLnsO9+w0wv+Jn1+5xt2qq9w5xt2Kne+AQAAAAAAAAAAAACAF6vwO9/69G3rq/A73/r0beur8Dvf+vTt7Luv/Dvf+mb0DdxX/p1vfXt//uzPj+67VWXf+danb2rS54vjoGEg0DAQaBgINAwEGgYCDQOBhoFAw0CgYSDQMBBoGAg0DAQaBgKN+8q/861vRt/AfeXf+da39+fP/vzsvhf8TfDozrc+fTv7jsjoO9/69O3sOyIfFXznW5++nX0AAAAAAAAAAAAAAJCoku9Uf4G+dOnvF91XyXeqv0BfuvT3i+6r8DvV6X3p0t8vvc+d9HlfuvT3i+5zJ/38z98t/f2i+9xJX7O+dOnvl97nq0ehYSDQMBBoGAg0DAQaBgINA4GGgUDDQKBhINAwEGgYCDQMBBoGAg130ud96dLfL7rPnfTzP3+39PfL7nvB3wRf/452sPT3S+87IqPvVKf3pUt/v/S+I/JRwXeq0/vSpb9feh8AAAAAAAAAAAAAAAT5FxFdwCR8Y4QGAAAAAElFTkSuQmCC\"\n  },\n  \"stickfigure\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNUlEQVR4nO3dsXHcMBAFUJAtObeashO1ZbfhNiRXoXUgKfCM/UczKx5A3nv5QXsQ/jEi/hh8iqp6qKqfVfVcPc9v6zzM/k7wKarqsRmKf3mpqsfZ3w1a6vXJ8XJAQN5D4kky0T57gAv4PsbYDlp7G2N8O2htPkBA+r6cfH2Co3757kZV1dF/Y9s2/6dJPEEgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBKTv98HrPx+8PoGA9P06+fpwnBu8k/519neElnq91eSzQ+JWE66jXp8kP6rqqRmMp7d13GYCAAAAAAAAAAAAAABEtXjPt/nMN22+Wrzn23zmmzZfLd7zbT7zzZxvH+v3fJuvx3wN+1i/59t8cz9/9PpLz7dVrd3zbT7zdXXmc3EcBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICwT7W7/k2X4/5Gvaxfs+3+eZ+/uj1157vBu8Et3q+zWe+mfO9D7l0z7f5zDdzvvchH2rhnm/zmW/mfAAAAAAAAAAAAAAAwPXUyj3fMFOt3PMNM9XiPd/0uBerb+meb3oEpG/pnm96jvrluxtVa/d80+MJAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgfUv3fNMjIH1r93zDTDd4J73f8w0z1Rl6vmGm0vMNAAAAAAAAAAAAAADwl9JD3mL/Lqz0kLfYvwsrPeQt9q/nDLea6CHvsX8NZwiIHvIe+9ewfP92lR7yDvvXc4YnCEwjIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBCcISB6yHvsX8MZAqKHvMf+XdkN3qm+dA+5/bsDpYe8xf7dgdJD3mL/AAAAAAAAAAAAAADgekqPNhMtff5KjzYTLX3+So82E61+/vahR5u5lj5/+9CjzVxLn7+tSo8286x+/s5wcRxMIyAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQ7EOPNnMtff72oUebudY+fzd4J1iPNv91ivNXerSZ6BTnr/RoM5HzBwAAAAAAAAAAAAAAH/YHAT6X9Vq+iRYAAAAASUVORK5CYII=\"\n  },\n  \"ghost\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfklEQVR4nO3dwXEbVxAE0AVS8t1MyrooLSsNp0E6Co4OFG6qLtrDxZ+/9d4dy65GNXgC5jg2UVUvVfWjqt6q5+3Xc17km5OPhqr63nxTf+e9qr7Ltz4fDfXxyfd+whv8eJNbn4TyXfs/yX11gE/4dhzH7aRn347j+Kv5DPkubIeB/DH8+fJd2FmfLF+mqursv3G73f53D/L18k23w38QWMZAIDAQCAwEAgOBwEAgMBAIDAQCA4HAQCAwEAgMBAIDgcBAINhhIP+e/Py35uvlu7AdBvLP8OfLxzpP+E71n/Kty8cXqI9f5fjqN/mrfzVEPtapj0/Cv6vqtfnGvv56zhm/OyUfAAAAAAAAAAAAAADwNOWOdov+ekb3V+5ot+ivZ3R/5Y52i/56pvd3P9zR7tJfz+j+7oc72l366xnd363KHe0O/fVM72+HH46DZQwEAgOBwEAgMBAIDAQCA4HAQCAwEAgMBAIDgcBAIDAQCAwEgvvhjnaX/npG93c/3NHu0l/P7P6e8J3gS9/R1l/PFv2VO9ot+uvZor9yR7tFfz36AwAAAAAAAAAAAACA/64m36mWT76V+WrynWr55FuZr4bfqZZPvpX5driTLl+PfA073EmXb+3rz37+6Hzj76TLJ1+XO+lwEgOBwEAgMBAIDAQCA4HAQCAwEAgMBAIDgcBAIDAQCAwEAgOBYIc76fL1yNeww510+da+/uznz873hO8Et+5UyyffynyPkKPvVMsn38p8j5AvNfhOtXzyrcwHAAAAAAAAAAAAAAAT1eQ71fLJtzJfTb5TLZ98K/PV8DvV8sm3Mp876fJ1XD6fO+nydV06nzvph3xdV87np0chMBAIDAQCA4HAQCAwEAgMBAIDgcBAIDAQCAwEAgOBwEAgMBAI3EmXr+vS+dxJl6/r2vme8J3gS9/Rlu/a+R4hR9+plk++lfkeIV9q8J1q+eRbmQ8AAAAAAAAAAAAAACaqyXeqN6C/ntH91eQ71RvQX8/o/mr4nerp9Nczvb8d7qRPp7+e0f3tcCd9Ov31jO5v/J306fTXM70/Pz0KgYFAYCAQGAgEBgKBgUBgIBAYCAQGAoGBQGAgEBgIBAYCgYFAsMOd9On01zO6vx3upE+nv57Z/T3hO8H9O9WD6a9ni/5qhzvVg+mvZ4v+yp3qFv316A8AAAAAAAAAAAAAAD7tJ3kRwCQnM7vbAAAAAElFTkSuQmCC\"\n  },\n  \"sword\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC00lEQVR4nO3dzW0UQQCE0VlS4o6TgovTgjRIwyYKF4c1B6TZElJ7/pr3Ahh6hT73aaaWhQ+R5CnJjySvGfP6/pyno38TfIgkz4NRrHlL8nz0b4Mhud8cbxsE8icSN8mBPh19gAl8W5blttGzb8uyfN3o2fwDgYz7fPHnU2z1l++/kSRb/xu3283/00HcIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEMi4Xxs//3Xj51MIZNzPiz8ftrPDO+lfjv6NMCT3r5p8dCS+asI8cr9Jvid5GQzj5f05vmYCAAAAAAAAAAAAAACwodhJh3Wxkw7rYid9ar5qMs5O+sQEMs5O+sTsbw9K7KTPzA0ChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBjLOTPjGBjLOTDo/s8E66nXSuLXbSoYuddAAAAAAAAAAAAAAAgEuJnXRYFzvpsC520qfmqybj7KRPTCDj7KRPzP72oMRO+szcIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEMg4O+kTE8g4O+nwyA7vpNtJ59piJx262EkHAAAAAAAAAAAAAAD4S06+Q+58HCYn3yF3Pg6Tk++QO9/cN8kVvmpy9h1y55vYFQI5+w65803s9Pvbybl3yJ1v7h33K9wgcBiBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUVwjk7DvkzjexKwRy9h1y5+M4O7xTPbRD7nx23A+Xk++QOx+Hy8l3yJ0PAAAAAAAAAAAAAADgWmKHHNbFDjmsix3yqV3hqyZnZ4d8YgIZZ4d8YtPuW+8lsUM+MzcIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEMs4O+cQEMs4OOTyywzvpdsi5ttghhy52yAEAAAAAAAAAAAAAgH38Bi6xA+VbUkCIAAAAAElFTkSuQmCC\"\n  },\n  \"giraffe\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO3du3HbQBiF0SVbcm41ZSVqy27DbYiuQr8DyYFmqBt4Ce6D5+QCdzD8hIi4rX2oqqeq+lVVl+pz+bjOU7uh2c/HxqrqpfNLd81bVb08wvnYWL3/Z3474Av470vY9Z969vOxt3Nr7bm1djro+qfW2o/Oa8x+PjZ2bq19O/gzeq8/+/nY2Kmq6vAPOZ3++wkw+/nY23n0AWBmAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCM6ttT8Hf8al8+9nPx8bO7fWfh/8Gb3Xn/187OwOv/n+vvP5eAD1/taQW38Jb/1Wk2nPxwOo9//UP6vqtfOL9/pxnSPeizXt+QAAAAAAAAAAAAAAAPis7KTDdWUnHa4rO+kMtMJ7seykM8wKgdhJZ5jp98Gr7KQzzgpPEBhGIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCwQqB2ElnmBUCsZMOX7nDb9LtpLO2spMOWdlJBwAAAAAAAAAAAAAAWErZSYfryk46XFd20hlohbea2ElnmBUCsZPOMNPvg1fZSWecFZ4gMIxAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCASCFQKxk84wKwRiJx2+coffpNtJZ21lJx2yspMOAAAAAAAAAAAAAACwlJp8J935GKYm30l3PoapyXfSnW/vJ8kKbzWZfSfd+Ta2QiCz76Q738am3wevmnsn3fn23plf4QkCwwgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCBYIZDZd9Kdb2MrBDL7TrrzMc4dflPdtZPufHbmh6vJd9Kdj+Fq8p105wMAAAAAAAAAAAAAAPis7Hx3cf82Vna+u7h/Gys7313cvz4rvNXEzncf96/DCoHY+e7j/nWYft+6ys53D/evzwpPEBhGIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCwQqB2Pnu4/51WCEQO9993L+d3eE31VvvfLt/D6DsfHdx/x5A2fnu4v4BAAAAAAAAAAAAAMA2/gKZA03t6yCCpgAAAABJRU5ErkJggg==\"\n  },\n  \"skull\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADe0lEQVR4nO3dwXEbVxAE0AVS0t1MyrooLTkNpyE6Co4OFA+qcnVZHiz+/NV7dy67BtXACejj2ERVvVTVX1X1Wj2vP57zIt+cfDRU1Zfmi/pv3qrqi3zr89FQ7+98bye8wB8vcuudUL5rf5LcVwf4Dz4fx3E76dm34zj+bD5DvgvboSCfhj9fvgs7653lYaqqzv4ft9vtf99Bvl6+6Xb4BIFlFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFASCHQryz8nPf23+vXwXtkNB/h7+fPlY5wnfqf5DvnX5eIB6/1WOR7/Ij/7VEPlYp97fCb9W1bfmC/vtx3PO+N0p+QAAAAAAAAAAAAAAgKcpO9ot7tcz+n5lR7vF/XpG36/saLe4X8/0+90PO9pd7tcz+n73w452l/v1jL7frcqOdof79Uy/3w4/HAfLKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgE98OOdpf79Yy+3/2wo93lfj2z7/eE7wRfekfb/Xq2uF/Z0W5xv54t7ld2tFvcr8f9AAAAAAAAAAAAAADg19XknWr55FuZrybvVMsn38p8NXynWj75VubbYSddvh75GnbYSZdv7d+f/fzR+cbvpMsnX5eddDiJgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCww066fD3yNeywky7f2r8/+/mz8z3hO8GtnWr55FuZ7yPk6J1q+eRbme8j5EsN3qmWT76V+QAAAAAAAAAAAAAAgF9Xk3e05WOlmryjLR8r1fAdbfmu/Umyw+9ijd7RPuTr5htth4KM3tF+wN+f/fzp+UY7653lYapm72jL18s33Q6fILCMgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCwQ0FG72gf8nXzjbZDQWbvaMt39vNJnvCd6kvvfE/PxwPU8B1t+Viuhu9oywcAAAAAAAAAAAAAAPCzGr7zLR/L1PCdb/lYpobvfMt37U+SHX7VZPrOt3wXtkNBpu98y3dh4/etq2bvfMtnJx1+WwoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCwQ4Fmb7zLd+F7VCQ6Tvf8rHOE75Tfekd8un5eIAavvMtH8vV8J1v+QAAAAAAAAAAAAAAgCf5DlpIdhzYi8MKAAAAAElFTkSuQmCC\"\n  },\n  \"umbrella\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVR4nO3dwXHUQBQE0FmlxB0nBRenBWmQhk0U/hxs36guim/tjMbv3S13jaq1J6nHuIiqeqiqn1X1XD3Pb9d5kG+dfDRU1WPzpv7NS1U9yjc/Hw31+uR7OeEGv9/k1pNQvr1/SY7ZAf7B9zHG7aRr38YY35rXkG9jVyjIl8WvL9/GznqyfJiqqrP/x+12++9zkK+Xb3VX+AWBaRQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEgisU5PfJ139u/r18G7tCQX4tfn35mOcO71R/lW9ePj5AvX6V46Nv8kd/NUQ+5qnXJ+GPqnpq3tint+uc8d0p+QAAAAAAAAAAAAAAgLupxXe05ZNvWr5afEdbPvmm5avFd7Tlk29mvmOsv6MtX498DcdYf0dbvrl/f/b1l853q1p7R1s++bo6+a7w4TiYRkEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgOMb6O9ry9cjXcIz1d7Tlm/v3Z19/7Xx3eCd4651v+fbO9x5y6R1t+eSbme895EMtvKMtn3wz8wEAAAAAAAAAAAAAAPuplXe+YaZaeecbZqrFd77p8V2svqV3vulRkL6ld77pOevJ92lUrb3zTY9fEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIF6Vt655seBelbe+cbZrrDO+n9nW+Yqa6w8w0zlZ1vAAAAAAAAAAAAAADgzsrOd4vz21jZ+W5xfhsrO98tzm9vx7Dz3eX8NnYMO99dzm9jtyo73x3Ob28+HAeBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkBwDDvfXc5vY8ew893l/HZ2h3eqt975dn6fQNn5bnF+n0DZ+W5xfgAAAAAAAAAAAAAAwL3V4jvf8jFNLb7zLR/T1OI73/L5JZnpCjvp8jHNFXbS5WOa5XfS5bOTPpNPj0KgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBBcYSddPqa5wk66fMxzh3eqWzvf8tlJn64W3/mWj+lq8Z1v+QAAAAAAAAAAAAAAAMYYY/wBX18HEANVbHQAAAAASUVORK5CYII=\"\n  },\n  \"snake\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCUlEQVR4nO3dwXFTQRAE0JVS4o6TgovTgjRIwyYKDwfZN2qqYP31e1fv3S11Tanlk36P8a6qnqrqZ1W91pzX99d5Gp8oPR8bq6rnyQ/d37xV1fMj5GNjdftmfjvgA/jxIZz6pk7Px96uY4zvY4zLQa9/GWN8m3yN9Hxs7DrG+HLwe8y+fno+Nnapqjr8TS6X//4PkJ6PvV3PDgDJFAQaCgINBYGGgkBDQaChINBQEGgoCDQUBBoKAg0FgYaCQENBoHEdY/w++D1eJ/8+PR8bu44xfh38HrOvn56Pnd3hN99fd87HA6jbU0M++0P42U81ic3HA6jbN/WPqnqZ/OC9vL/OEc/Fis0HAAAAAAAAAAAAAABwbxW+Q56eL136/aLzVfgOeXq+dOn3i85X4Tvk6fnSpd8vPZ+d9P130tPvF53PTvr+O+np94vOZyd97L2Tnn6/9HwePQoNBYGGgkBDQaChINBQEGgoCDQUBBoKAg0FgYaCQENBoKEg0FAQaNhJ338nPf1+0fnspO+/k55+v+x8d/hNsJ30E6XfLz3fR8joHfL0fOnS75ee7yPkUwXvkKfnS5d+v/R8AAAAAAAAAAAAAADAv6vkHe0FuN/GKnlHewHut7EK39FO535zVnguVvSO9gLcb8IKBYne0V6A+02I3wevyt7RTud+c1b4DwKnURBoKAg0FAQaCgINBYGGgkBDQaChINBQEGgoCDQUBBoKAg0FgcYKBYne0V6A+01YoSDZO9r53G9nd/hNtZ1091tbrbCjHcz9HkDZ0Z7ifgAAAAAAAAAAAAAAwL1V+M63fJymwne+5eM0Fb7zLd/e/0lWeKpJ+s63fBtboSDpO9/ybSx+37oqe+dbPjvp8LAUBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgsUJB0ne+5dvYCgVJ3/mWj/Pc4TfVUzvf8tlJP12F73zLx+kqfOdbPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDUHwj5l9Do4v0BAAAAAElFTkSuQmCC\"\n  },\n  \"rabbit\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADU0lEQVR4nO3dwXEbVxAE0A+k5LuZlHVhWnIaSkN0FBwfSN1cXVZ9LnYw+96di+agGjeg1/pUVS9V9XdVvdWet8/nvKwLcb/Bqup18039L+9V9Xr2//YI7jdYfXzyvR/wBv96k0d/ErrfbPe11re11u2g59/WWn8d9Owu3G+w+1rrj4Nf4+jnn839BrtVVR3+IrfbUZ+wp3O/2e5nB4DOFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFASC+1rrn4Nf4+3g55/N/Qa7r7V+HPwaRz//bO432QO+U/3n2f/jkdzvAurjVzm++k2+zK9yuN8F1Mcn4feq+rn5xv78fM6lfo3D/QAAAAAAAAAAAAAAgEcrO99b3G+wsvO9xf0GKzvfW9xvNjvp+9xvMDvp+9xvMDvpm9xvNj89CoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQGAnfZ/7DWYnfZ/7TfaA71SP3vl2vwsoO99b3O8Cys73FvcDAAAAAAAAAAAAAAAerZrvfMs3O19r1XznW77Z+Vqr5jvf8s3O190z7KTLt6d7vtaeYSddvnP//uznn6r9Trp8s/N156dHIVAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCJ5hJ12+Pd3ztfYMO+nynfv3Zz//XA/4zvLWzrd8s/M9hWq+8y3f7HxPoZrvfMs3Ox8AAAAAAAAAAAAAAPD7qvmOdvd83bnfhmq+o909X3fut6Ga72h3z9ed++2xkz5853u53xY76cN3vpf7bbGTvmbvfLvfHj89CoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQGAnffjO93K/LXbSp+98u9+eB3xn2c73idzvC1TzHe3u+bpzvy9QzXe0u+frzv0AAAAAAAAAAAAAAGCear6jLd/sfK1V8x1t+Wbna62a72jLNztfd3bS5dthJ/0LTN9Jl28wO+lLvl120uGiFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCO+ny7bKTvmn6Trp8kz3gO8ujd9Lls5O+c7xL7KTLdwHVfEdbvtn5AAAAAAAAAAAAAACA/+1fDRwsFApwCYUAAAAASUVORK5CYII=\"\n  },\n  \"cow\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADU0lEQVR4nO3dwVHcUBAE0L+bku8mKftCWnYaTgMcBeMDcDLbBSVp/3zVe3dEUzXNnlY9xpuqeqiq31X1XNs8vz3nYcAntb6/qnrcGOojL1X1uFtITqv1/dVrc18OCPge0icJN3W/v+sY4+cY47LPn/ufyxjjx0HP5hxa3991jPFtnyw3Hf181tb6/i5VVXsluflLLpej/kOwuO73d90zCJyNgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkBwHWP8Pfh3PB/8fNbW+v6uY4w/OwW55ejns7be93eH7wR/3+kP5YSWuL96favE3iG91YRPWeL+6rXJv6rqaWOwp7fneJsJn+b+AAAAAAAAAAAAAADg66rzTjWn1/r+qvNONafX+v6q+U4159b9/uykM1vr+7OTzmyt789OOlN1vz+vHoVAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSCwk85sre/PTjqz9b6/O3wn2E46Ny1xf7XCTjWntcT9lZ1qJnJ/AAAAAAAAAAAAAADwddV5p1o++Wbmq8471fLJNzNfNd+plk++mflW2EmXbxv5NlhhJ12+uT9/9PNb52u/ky6ffFvZSYeDKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgEK+yky7eNfBussJMu39yfP/r5vfPd4TvBm3aq5ZNvZr73kK13quWTb2a+95AP1XinWj75ZuYDAAAAAAAAAAAAAAC+rjrvaMvHTNV5R1s+ZqrmO9rynfuTZIX3YrXe0R7ybc3X2goFab2jvcPPH/387vlaO+o/y26qeu9oy7ctX3crfILANAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCwQoFab2jPeTbmq+1FQrSe0dbvqOfT3KH71Sfeue7ez52UM13tOVjumq+oy0fAAAAAAAAAAAAAADAWsoOOXys7JDDx8oO+amt8FaT7uyQn5iCbGeH/MROu299L1V2yM/MJwgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgmxnh/zEFGQ7O+Rwyx2+k26HnLWVHXLIyg45AAAAAAAAAAAAAABwH/8AuETh/YZvAccAAAAASUVORK5CYII=\"\n  },\n  \"quarternote\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nO3dwW0bSxBF0SZT8t5Kyt4oLTsNpyE5CpUXlBcGqAcDxWE3W+cEML+Ej+tZcd4Y3ERVPVXVz6p6rZ7X9+c8zf6b4Caq6rkZxTVvVfU8+2+Dlrq8Od4OCORvJN4kE51nH7CB72OM00HPPo0xvh30bP6DQPq+PPjzCY76l+/TqKo6+r9xOp38f5rEGwQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBALp+33w818Pfj6BQPp+Pfjz4Th3+E3619l/I7TU5asmt47EV03YR13eJD+q6qUZxsv7c3zNBAAAAAAAAAAAAAAA4EBlJx2uKzvpcF3ZSd+ar5r02UnfmED67KRvzP52U5Wd9J15g0AgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCB9dtI3JpA+O+nwkTv8Jt1OOo+t7KRDVnbSAQAAAAAAAAAAAAAAHkrZSYfryk46XFd20rfmqyZ9dtI3JpA+O+kbs7/dVGUnfWfeIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEEifnfSNCaTPTjp85A6/SbeTzmMrO+mQlZ10AAAAAAAAAAAAAADgzmrxnW/3MU0tvvPtPqapxXe+3edNMtN5rL/z7T6mOY/1d77dxzSnqrV3vt1nJ30mH46DQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAsF5rL/z7T6mOY/1d77dxzx3+E11a+fbfXbSp6vFd77dx3S1+M63+wAAAAAAAAAAAAAAAP5Vi+98u49pavGdb/cxTS2+8+0+b5KZ7KTvfx8NdtL3v48GO+lj7/vo8elRCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBDYSd//PhrspO9/Hx13+E311jvkq9/HDdTiO9/uY7pafOfbfQAAAAAAAAAAAAAAAGOMMf4AjFNN7dkSpisAAAAASUVORK5CYII=\"\n  },\n  \"eigthnote\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADL0lEQVR4nO3dsY0UQRQE0N5NCZ9LChzSgjRI444o+Bh3GEioBPo7O/963/NpahsVY83UWtxEVT1V1beqeqmel7dzns7+TXATVfWlWYq/+VlVX87+bdBSr0+OnwcU5HdJPElOdD07wAY+r7UuB519WWt9Ouhs/oGC9H145+cTHPU/38Ooqjr677hcLv6dTuIJAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgfT8OPv/l4PMJFKTv+zs/H45zh3fSP579G6GlXr9qcuuS+KoJ+6jXJ8nXqnpuFuP57RxfMwEAAAAAAAAAAAAAADhQDd9Jn56PjdXwnfTp+dhYDd9Jn55vOl816Zu+kz4932gK0jd9J316vtHsbzdVzd5Jn55vOk8QCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgXpm76TPj3faArSN30nfXo+dnaHd75bO+nT8/EAavhO+vR8PIAavpM+PR8AAAAAAAAAAAAAAMC9lR3yFve3sbJD3uL+NlZ2yFum35+vmvTZIe8ZfX8K0meHvGf0/W27b30vVXbIO6bfnycIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYL02SHvGX1/CtJnh7zH/e3sDu9Ub71D7v4eQNkhb3F/D6DskLe4PwAAAAAAAAAAAAAA+H81fKdaPk5Tw3eq5eM0NXynWj5PkjNd1/Cd6iXf7jvpo13X8J3qG/z5o8+fno+GS9XsnWr59t5Jn86H4yBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAiua/hO9ZJv95300a5r/k61fJznDu9Ut3aq5bPzfboavlMtH6er4TvV8gEAAAAAAAAAAAAAAPyphu98y8dpavjOt3ycpobvfMvnSXImO+n756PBTvr++Wiwk772zkePT49CoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQ2EnfPx8NdtL3z0fHHd6p3nqHfHo+bqCG73zLx+lq+M63fAAAAAAAAAAAAAAAAGuttX4Bo/SX9Rjj/xUAAAAASUVORK5CYII=\"\n  },\n  \"pitchfork\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVR4nO3dQVIjVxAE0C9dafbmUvZmrjW+hq8BPsWUF8BmBmUELrW6unlvT1NkRIqVOtd6U1VPVfV3Vb1Uz8vbc57WFyK/ntH5VdX35lEf+VlV3+925GDy6xmdX7029+cGB74feepPQvn1TM/vutb6a611uc+f+5vLWuvPjZ49hfx6Rud3XWt9u88tN239/L3Jr2d0fpeqqntdcvOXXC5bfULsTn490/O73vMQOBsFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgeC61vp349/xsvHz9ya/ntH5Xdda/9zpkFu2fv7e5NczO78HfCf4jzv9oSPJr+cQ+dXrWyXufeRXeyuH/P6nQ+RXr03+UVXPzcOe355z6rdx/Ep+PfIDAAAAAAAAAAAAAIDPq8k71Qcgv57R+dXkneoDkF/P6Pxq+E71dPLrmZ6fnfQ++fWMzs9Oep/8ekbnZye9SX490/Pz6lEIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCO+l98usZnZ+d9D759czO7wHfCbbzLb+bDpFfHWGnejD59Rwiv7JT3SK/HvkBAAAAAAAAAAAAAMDn1eSdave5b8/7avJOtfvct+d9NXyn2n3u2/O+I+yku6/HfQ1H2El3374/v/XzR983fifdfe7rspMOG1EQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCI6wk+6+Hvc1HGEn3X37/vzWz5993wO+E9zaqXaf+/a87/3I0TvV7nPfnve9H/lUg3eq3ee+Pe8DAAAAAAAAAAAAAADOpybvfMOeavLON+yphu980+O9WH2jd77pUZC+0Tvf9Gz1yfdlVM3e+abHfxAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBekbvfNNj4L0zd75hj094Dvp/Z1v2FMdYecb9lR2vgEAAAAAAAAAAAAAAA6l7KTDx8pOOnys7KSfmrea9NlJPzEF6bOTfmL2t5uq7KSfmf8gECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBArSZyf9xBSkz0463PKA76TbSefYyk46ZGUnHQAAAAAAAAAAAAAAeIz/ALTz4f0rCFc3AAAAAElFTkSuQmCC\"\n  },\n  \"target\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVR4nO3dMZLUSBQEUHVfCX/nUuBwLfYaew2GU/AxhvFmM3ZDrVaqeM+nyC4ikSXltvEQM/MyM3/PzOvs8/r7nJezfxM8xMx83VmKj/ycma9n/zbYZd6eHD8PKMh7STxJTnQ/O8ACvmzbdjvo7Nu2bZ8POpv/QEH2+3Tx8wmO+p/vjzEzc/Tfcbvd/DudxBMEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEH2+3Hw+a8Hn0+gIPv9c/Hz4ThPeCf9r7N/I+wyb181eXRJfNWEdczbk+TbzHzfWYzvv8/xNRMAAAAAAAAAAAAAAODSpnyHXD5OM+U75PJxminfIZdv7SfJFb5q0r5DLt/CrlCQ9h1y+RZWv789071DLt/aO+5XeILAaRQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEgisUpH2HXL6FXaEg7Tvk8nGeJ7xTvWuHXD477qeb8h1y+TjdlO+QywcAAAAAAAAAAAAAADzblO9ot+dr135/1fmmfEe7PV+79vurzjflO9rt+dq13197vvvWv6Pdnq9d+/1V57tv/Tva7fnatd9fdb7bTPeOdnu+du33157vCh+Og9MoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAT3rX9Huz1fu/b7q8533/p3tNvztWu/v+58T3gn2M73idrvrz3fe8jqHe32fO3a768933vIlyne0W7P1679/trzAQAAAAAAAAAAAAAA/98072jLx5mmeUdbPs405Tva8q39JLnCd7Gqd7Q3+Zbemb9CQap3tB/w548+vz1ftfp98JnuHW351t6Zv8ITBE6jIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBBcoSDVO9qbfEvvzF+hIN072vKtvjPf7QnvVC+9892ejweY8h1t+TjdlO9oywcAAAAAAAAAAAAAAHAtY4ccPjZ2yOFjY4d8aVf4qkk7O+QLU5D97JAvbNl962eZsUO+Mk8QCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgXZzw75whRkPzvk8G+e8E66HXKubeyQQzZ2yAEAAAAAAAAAAAAAgOf4BZCbvPmPUa66AAAAAElFTkSuQmCC\"\n  },\n  \"triangle\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVR4nO3dsXHbQBQE0ANbcm42ZSVqy27DbUiuQt8Bxcyz45kv8A7ge7lOy9OsEBE7BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTVNW1qn5V1Xv1vH+ec539meBLVNVrsxT/8lFVr7M/G7TU7cnxsUNB7iXxJJnoMjvACbyMMbadzt7GGD92Opv/oCB93w5+PsFe//meRlXV3r9j2zZ/p0k8QSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUpO/Pzue/73w+gYL0/T74+bCfB3wn/fvszwgtdXuryVeXxFtNOI+6PUl+VtVbsxhvn+d4mwkAAAAAAAAAAAAAAHBoZYe8xf2dWNkhb3F/J1Z2yFvcX88R3mpih7zH/TUcoSB2yHvcX8Py+9tVdsg73F/PEZ4gMI2CQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQHCEgtgh73F/DUcoiB3yHvd3Zg/4TvWpd8jd3xMoO+Qt7u8JlB3yFvcHAAAAAAAAAAAAAADnU4vvaMsn37R8tfiOtnzyTctXi+9oyyffzHyXsf6Otnw98jVcxvo72vLN/fm9z18631a19o62fPJ1dfId4cVxMI2CQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQHAZ6+9oy9cjX8NlrL+jLd/cn9/7/LXzPeA7wa0dbfnkm5nvHnLpHW355JuZ7x7yWgvvaMsn38x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcGB/AWnPKJ95bVdxAAAAAElFTkSuQmCC\"\n  },\n  \"lefttriangle\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJUlEQVR4nO3dsXEbMRQEUJAtObeashO1ZbfhNiRXoe9AUubZBMLdP/C9XMcVMDuMeDvGh6p6qqrfVfVac14/nvM0YAdV9TxZiv95q6rns/83mFLv3xxvCwryWRLfJFzWfYzxc4xxW/T82xjjx6Jnw3L3Mca3xZ+x+vmwzK2qavmH3G6rvqFgqfvZAaAzBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYHgPsb4u/gzXhc/H5a5jzH+LP6M1c+HdQ74Tfr3s/9HmFLvbzX56pJ4qwn7qPdvkl9V9TJZjJeP53ibCQAAAAAAAAAAAAAAwELVfCe9ez42Vs130rvnY2PVfCe9ez72doWd9O752NgVdtK752Nj7XfSu+djb149CoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQHCFnfTu+djYFXbSu+djZwf85ntqJ717Ph5ANd9J756PB1DNd9K75wMAAAAAAAAAAAAAADha2SGf4vw2VnbIpzi/jZUd8inOb29X2Envzvlt7Ao76d05v42130nvzvntzatHIVAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCK6wk96d89vYFXbSu3N+OzvgN9Vb75A7vwdQdsinOL8HUHbIpzg/AAAAAAAAAAAAAADgaGXne2vud0LZ+d6a+51Qdr635n7n2Enfn/udYCd9f+53gp30zbnfOV49CoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQGAnfX/ud4Kd9P253xkH/GbZzveJ3O8XKDvfW3O/X6DsfG/N/QIAAAAAAAAAAAAAwH6q+Y62fPKdlq+a72jLJ99p+ar5jrZ88p2Z7wo76fLNkW/CFXbS5Tv371c/v3W+9jvp8sk3ayafV49CoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQXGEnXb458k24wk66fOf+/ern9853wG+Cp3a05ZPvzHyfIVvvaMsn35n5PkM+VeMdbfnkOzMfAAAAAAAAAAAAAAA08g9OYLz5DSWlVQAAAABJRU5ErkJggg==\"\n  },\n  \"chessboard\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADd0lEQVR4nO3dwXHUQBAF0FmlxB2SgovTgjRIwyYKNwebC0V1UTRadc++F8DY+1VfOkl/rSEi4lNEfIuIl6h5eT/n09W/6Z7kt7GIeCpe1D95jYinq3/bPchvY/F253s94QL/ushb3wnlV3Nc/Q/8hS9rrdtJZ9/WWp9POrsL+RVMKMiH4edfTX4FZ91Z/puIiLP/xu12a5/Dv5JfzYQnCFxGQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEhMK8uPk819OPv9q8iuYUJDvw8+/mvx2dod3qj9e/RvPJL8HEG9f5fjfF/lhvsohvwcQb3fCrxHxXLywz+/nbP01jt/JDwAAAAAAAAAAAAAA9hN2tEvkV9M6v7CjXSK/mtb5hR3tEvnVdM/vWHa0q+RX0zq/Y9nRrpJfTev8bhF2tCvkV9M9vwkfjoPLKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQOJYdrSr5FfTOr9j2dGukl9N7/zu8E7w1jva8qsZkV/Y0S6RX82I/MKOdon8auQHAAAAAAAAAAAAAAD7ic472gPIb2PReUd7APltLJrvaHcnv5oJ38VqvaM9gPwKJhSk9Y72APIraL+/HdF7R7s7+dVMeILAZRQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSAxoSCtd7QHkF/BhIL03tHuT347u8M71XbI5TdbTNjRbkx+DyDsaJfIDwAAAAAAAAAAAAAA9hN2tEvkV9M6v7CjXSK/mtb5hR3tEvnVdM/vWHa0q+RX0zq/Y9nRrpJfTev8bhF2tCvkV9M9vwkfjoPLKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQOJYdrSr5FfTOr9j2dGukl9N7/zu8E7w1jva8qsZkV/Y0S6RX82I/MKOdon8auQHAAAAAAAAAAAAAAD7ic472gPIb2PReUd7APltLJrvaHcnv5oJ38VqvaM9gPwKJhSk9Y72APIraL+/HdF7R7s7+dVMeILAZRQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSAxoSCtd7QHkF/BhIL03tHuT347u8M71XbI5TdbTNjRbkx+DyDsaJfIDwAAAAAAAAAAAAAAtvETkJu8+csJVfAAAAAASUVORK5CYII=\"\n  },\n  \"diamond\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO3dy3HUUBRFUXWnxBwnBROnBWmQhk0UvgxsBlTZp6i6Vr9PrxWAoB/aaCSd4+BTVNVDVf2squfqeX67zsPo3wSfoqoem1G856WqHkf/Nmip1yfHywmB/I3Ek2Sg6+i/wAa+H8dxOenal+M4vp10bf6DQPq+LH59grP+57sbVVVn/xmXy8W/0yCeIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEEjf75Ov/3zy9QkE0vdr8evDeW7wTvrX0b8RWur1qyafHYmvmrCPen2S/Kiqp2YYT2/X8TUTAAAAAAAAAAAAAABgaWWHvMX5bazskLc4v42VHfIW59ezwldN7JD3OL+GFQKxQ97j/Bqm39+uskPe4fx6VniCwDACgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIVgjEDnmP82tYIRA75D3Ob2c3eKd66x1y53cHyg55i/O7A2WHvMX5AQAAAAAAAAAAAADAfsqONgNNff+VHW0Gmvr+KzvaDDT7/Xc97Ggz1tT33/Wwo81YU99/lyo72owz+/23wofjYBiBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgE18OONmNNff9dDzvajDX3/XeDd4LtaPOhJe6/sqPNQEvcf2VHm4HcfwAAAAAAAAAAAAAAsJ+aeUd7Ac5vYzXzjvYCnN/GavId7dk5v54Vvos19Y72ApxfwwqBTL2jvQDn1zD9fnnV3Dvas3N+PSs8QWAYgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBCsEMvWO9gKcX8MKgcy9oz0/57ezG7xTvfWOu/O7A7XCjvbEnN8dKDvaLc4PAAAAAAAAAAAAAADgX2WHHN5XdsjhfWWHfGsrfNVkdnbINyaQPjvkG9t23/pWquyQ78wTBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAumzQ74xgfTZIYeP3OCddDvkrK3skENWdsgBAAAAAAAAAAAAAIDb+AMigCjpBTXsYgAAAABJRU5ErkJggg==\"\n  },\n  \"smalldiamond\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACL0lEQVR4nO3dwVEUURiF0R5Tci9J6Ya0NA3TAKPgugAXVo23rPrp6enHOQE8mEd99Gr6bhsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAh0jykORHkufMPL+d83D0Z4J3keRxGMU1L0kej/5sMJLXJ8fLDoH8icST5ECfjv4FFvBt27bLTmdftm37utPZ/AeBzH0++fkUe/3n+zCSZO+fcblc/J0O4gkChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBzP3a+fznnc+nEMjcz5OfD/u5wXfSvxz9GWEkr281ee9IvNWEdeT1SfI9ydMwjKe3c7zNBAAAAAAAAAAAAAAAOLXYIR9xfwuLHfIR97ew2CEfcX8zZ3iriR3yGfc3cIZA7JDPuL+Bu9/fTuyQT7i/mTM8QeAwAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKM4QiB3yGfc3cIZA7JDPuL+V3eA71UvvkLu/DyB2yEfc3wcQO+Qj7g8AAAAAAAAAAAAAAOBvsUMO18UOOVwXO+RLO8NbTe6dHfKFCWTODvnClt23vpXEDvnKPEGgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCGQOTvkCxPInB1y+JcbfCfdDjnnFjvk0MUOOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCffgMsPZSAS6EJqQAAAABJRU5ErkJggg==\"\n  },\n  \"square\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nO3dMXJbRxAE0AWu5Fy8lJ3wWtY1dA3Rp9A4MJEZXUUtgJ3dei//nx1MM/voMT5V1VtVfa+qj5rz8fmet/FA8sm3LF9VvU+G+j+/qupdPvm2zlf/NffXEwLeQk41WT75Vua7jjH+GmNcZl4SXMYYf06+Q7458k24jjH+eEyWu2bfL9/a55/9/tb5LlVVj0py949cLr/9H0I++WbN5Ls+MgicRkEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEguI4x/nny3/iYfF6+OfJNuI4xfjwoyD2z75dv7fPPfn/vfC/4JvibfPLtmu8W8v0JIR/9qxfyybck3y3kW1X9XVU/J4P9/HzPM343ST75luQDAAAAAAAAAAAAAICOqvNONcdrfX/Veaea47W+v2q+U83Zut/fDjvpnK31/e2wk87ZWt9f+510ztb9/vz0KAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAsEOO+mcrfX97bCTztl6398Lvgme36nmWFvcX+2wU82xtri/slPNQu4PAAAAAAAAAAAAAAC+rjrvVHO81vdXnXeqOV7r+6vmO9Wcrfv92Ulntdb3Zyed1Vrfn510lup+f356FAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgcBOOqu1vj876azW+/5e8E2wnXTu2uL+aoedao61xf2VnWoWcn8AAAAAAAAAAAAAAPB11XmnmuO1vr/qvFPN8VrfXzXfqeZs3e/PTjqrtb4/O+ms1vr+7KSzVPf789OjECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBHbSWa31/dlJZ7Xe9/eCb4LtpHPXFvdXO+xUc6wt7q/sVLOQ+wMAAAAAAAAAAAAAgK+rzjvV8sm3Ml913qmWT76V+ar5TrV88q3Mt8NOunxz5Juww066fGuff/b7W+drv5Mun3yz7KTDkygIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBDvspMs3R74JO+yky7f2+We/v3e+F3wTPLVTLZ98K/PdQrbeqZZPvpX5biHfqvFOtXzyrcwHAAAAAAAAAAAAAACN/Av+tlEY/jH1KgAAAABJRU5ErkJggg==\"\n  },\n  \"smallsquare\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO3dS3LTUBQEUJktMSebgkm2BdtgGwmrSDOwmVG3KK7l9/E58yhdT9XSyOrjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANhUkpckP5K8p+f9dp0X+ebJR0OS1+ZN/ZuPJK/yjc9HQ65Pvo8TbvCfm9x6Esq395vk0+gA/+DbcRyXk659OY7ja/Ma8m1shYJ8nvz68m3srCfL3STJ2f/jcrn89znI18s3uxXeIDCMgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFFYoyK+Tr//e/Hv5NrZCQX5Ofn35GOcBv6n+It+4fNxBrl/luPdNvvdXQ+RjnFyfhN+TvDVv7NvtOmd8d0o+AAAAAAAAAAAAAACAm9j5bnF+G4ud7xbnt7HY+W5xfj0rfNXEzneP82tYoSB2vnucX8P0+9aJne8O59ezwhsEhlEQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYHCCgWx893j/BpWKIid7x7nt7MH/KZ6651v5/cEYue7xfk9gdj5bnF+AAAAAAAAAAAAAADAo2XynW/5GCaT73zLxzCZfOdbvr3fJCt81WT2nW/5NrZCQWbf+ZZvY9PvWydz73zLZycdnpaCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUVijI7Dvf8m1shYLMvvMtH+M84DfVrZ1v+eykD5fJd77lY7hMvvMtHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCp35pYKJ+xIBJxAAAAAElFTkSuQmCC\"\n  },\n  \"scissors\": {\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgElEQVR4nO3dQXIUVxAE0D99JfbmUrDhWvgavgbiFCoWEguHNRW2qzVkf97bq1WqioRVd671qqo+VtWfVfVUM0+vz/m4TpQ+HzPR962qL8Oh3vJcVV9+h/mYib5vvST3+R0G/DnkKMnp8zGTft9jrfV5rXU758/9h9ta69PwGenzMRN932Ot9eGcWe6aPj99Pmai73urqjprkru/5Hb73/9CpM/HTPp9jzMHgd0ICDQEBBoCAg0BgYaAQENAoCEg0BAQaAgINAQEGgICDQGBhoBA41hrfX/n3/E0/Pn0+ZiJvu+x1vrrpEHumT4/fT5msu/7gHeC/9h5PmYucd96+arE2UOe/VWT2PmYucR96yXJX6vq23Cwb6/PeY/vYsXOx4z7AgAAAAAAAAAAAADAf1fJPdUXmC+d/Q1Uck/1BeZLZ38DFd5TnT5fOvub0ZO+f0+6/Q3oSd+/J93+BvSkr7170u1vxqdHoSEg0BAQaAgINAQEGgICDQGBhoBAQ0CgISDQEBBoCAg0BAQaAgINPen796Tb34Ce9P170u1v4gHvLOtJ/4Xs7wQV3lOdPl86+ztBhfdUp8+Xzv4AAAAAAAAAAAAAAAD+rvSQw9tKDzm8rfSQb813seb0kG9MQOb0kG9s237rR6nSQ74z/4NAQ0CgISDQEBBoCAg0BAQaAgINAYGGgEBDQKAhINAQEGgICDQEBBoCMqeHfGMCMqeHHO55wDvp+/eQs7fSQw690kMOAAAAAAAAAAAAAAA8WIX3fKfPl87+Biq85zt9vnT2N1DhPd/p86Wzv5lj5fd8p8+Xzv4GjpXf850+Xzr7G7hVZfd8p8+Xzv5mfDgOGgICDQGBhoBAQ0CgISDQEBBoCAg0BAQaAgINAYGGgEBDQKAhINA4Vn7Pd/p86exv4Fj5Pd/p86Wzv4kHvLM86vlOny+d/Z2gwnu+0+dLZ38nqPCe7/T50tkfAAAAAAAAAAAAAADsp8J7tNPnYyb6vhXeo50+HzPR963wHu30+ZhJv6+e9M17vi8g+r560jfv+b6A6PvqSV9793ynS7+vT49CQ0CgISDQEBBoCAg0BAQaAgINAYGGgEBDQKAhINAQEGgICDQEBBp60jfv+b6A6PvqSd+95ztf9n0f8E6wnnTuusR9K7xHO30+Zi5x3wrv0U6fjxn3BQAAAAAAAAAAAACAf+0Hw0Ph/foXXsgAAAAASUVORK5CYII=\"\n  }\n}",
      "icons.ts": "/*\nThe MIT License (MIT)\n\nCopyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed\nin the accompanying AUTHORS file\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n\n// Images from file microbitconstimage.cpp https://github.com/bbcmicrobit/micropython\n\nenum IconNames {\n    //% block=\"heart\"\n    //% jres=icons.heart\n    Heart = 0,\n    //% block=\"small heart\"\n    //% jres=icons.smallheart\n    SmallHeart,\n    //% block=\"yes\"\n    //% jres=icons.yes\n    Yes,\n    //% block=\"no\"\n    //% jres=icons.no\n    No,\n    //% block=\"happy\"\n    //% jres=icons.happy\n    Happy,\n    //% block=\"sad\"\n    //% jres=icons.sad\n    Sad,\n    //% block=\"confused\"\n    //% jres=icons.confused\n    Confused,\n    //% block=\"angry\"\n    //% jres=icons.angry\n    Angry,\n    //% block=\"asleep\"\n    //% jres=icons.asleep\n    Asleep,\n    //% block=\"surprised\"\n    //% jres=icons.surprised\n    Surprised,\n    //% block=\"silly\"\n    //% jres=icons.silly\n    Silly,\n    //% block=\"fabulous\"\n    //% jres=icons.fabulous\n    Fabulous,\n    //% block=\"meh\"\n    //% jres=icons.meh\n    Meh,\n    //% block=\"t-shirt\"\n    //% jres=icons.tshirt\n    TShirt,\n    //% block=\"roller skate\"\n    //% jres=icons.rollerskate\n    Rollerskate,\n    //% block=\"duck\"\n    //% jres=icons.duck\n    Duck,\n    //% block=\"house\"\n    //% jres=icons.house\n    House,\n    //% block=\"tortoise\"\n    //% jres=icons.tortoise\n    Tortoise,\n    //% block=\"butterfly\"\n    //% jres=icons.butterfly\n    Butterfly,\n    //% block=\"stick figure\"\n    //% jres=icons.stickfigure\n    StickFigure,\n    //% block=\"ghost\"\n    //% jres=icons.ghost\n    Ghost,\n    //% block=\"sword\"\n    //% jres=icons.sword\n    Sword,\n    //% block=\"giraffe\"\n    //% jres=icons.giraffe\n    Giraffe,\n    //% block=\"skull\"\n    //% jres=icons.skull\n    Skull,\n    //% block=\"umbrella\"\n    //% jres=icons.umbrella\n    Umbrella,\n    //% block=\"snake\"\n    //% jres=icons.snake\n    Snake,\n    //% block=\"rabbit\"\n    //% jres=icons.rabbit\n    Rabbit,\n    //% block=\"cow\"\n    //% jres=icons.cow\n    Cow,\n    //% block=\"quarter note\"\n    //% jres=icons.quarternote\n    QuarterNote,\n    //% block=\"eigth note\"\n    //% jres=icons.eigthnote\n    EigthNote,\n    //% block=\"pitchfork\"\n    //% jres=icons.pitchfork\n    Pitchfork,\n    //% block=\"target\"\n    //% jres=icons.target\n    Target,\n    //% block=\"triangle\"\n    //% jres=icons.triangle\n    Triangle,\n    //% block=\"left triangle\"\n    //% jres=icons.lefttriangle\n    LeftTriangle,\n    //% block=\"chess board\"\n    //% jres=icons.chessboard\n    Chessboard,\n    //% block=\"diamond\"\n    //% jres=icons.diamond\n    Diamond,\n    //% block=\"small diamond\"\n    //% jres=icons.smalldiamond\n    SmallDiamond,\n    //% block=\"square\"\n    //% jres=icons.square\n    Square,\n    //% block=\"small square\"\n    //% jres=icons.smallsquare\n    SmallSquare,\n    //% block=\"scissors\"\n    //% jres=icons.scissors\n    Scissors\n}\n\nenum ArrowNames {\n    //% blockIdentity=images.arrowNumber block=\"North\"\n    North = 0,\n    //% blockIdentity=images.arrowNumber block=\"North East\"\n    NorthEast,\n    //% blockIdentity=images.arrowNumber block=\"East\"\n    East,\n    //% blockIdentity=images.arrowNumber block=\"South East\"\n    SouthEast,\n    //% blockIdentity=images.arrowNumber block=\"South\"\n    South,\n    //% blockIdentity=images.arrowNumber block=\"South West\"\n    SouthWest,\n    //% blockIdentity=images.arrowNumber block=\"West\"\n    West,\n    //% blockIdentity=images.arrowNumber block=\"North West\"\n    NorthWest,\n}\n\nnamespace basic {\n\n    /**\n     * Draws the selected icon on the LED screen\n     * @param icon the predifined icon id\n     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.\n     */\n    //% weight=90 blockGap=8\n    //% blockId=basic_show_icon\n    //% block=\"show icon %i\" icon=\"\\uf00a\"\n    //% parts=\"ledmatrix\"\n    //% help=basic/show-icon\n    //% icon.fieldEditor=\"imagedropdown\"\n    //% icon.fieldOptions.columns=\"5\"\n    //% icon.fieldOptions.width=\"380\"\n    export function showIcon(icon: IconNames, interval = 600) {\n        let res = images.iconImage(icon)\n        res.showImage(0, interval)\n    }\n\n    /**\n     * Shows an arrow on screent\n     * @param direction the direction of the arrow\n     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.\n     */\n    //% weight=50 blockGap=8\n    //% blockId=basic_show_arrow\n    //% block=\"show arrow %i=device_arrow\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    //% help=basic/show-arrow\n    export function showArrow(direction: number, interval = 600) {\n        let res = images.arrowImage(direction)\n        res.showImage(0, interval)\n    }\n}\n\n\nnamespace images {\n\n    //% weight=50 blockGap=8\n    //% help=images/arrow-image\n    //% blockId=builtin_arrow_image block=\"arrow image %i=device_arrow\"\n    export function arrowImage(i: ArrowNames): Image {\n        switch (i) {\n            // compass directions\n            case ArrowNames.North: return images.createImage(`    \n                                        . . # . .\n                                        . # # # .\n                                        # . # . #\n                                        . . # . .\n                                        . . # . .`);\n            case ArrowNames.NorthEast: return images.createImage(` \n                                        . . # # #\n                                        . . . # #\n                                        . . # . #\n                                        . # . . .\n                                        # . . . .`);\n            case ArrowNames.East: return images.createImage(` \n                                        . . # . .\n                                        . . . # .\n                                        # # # # #\n                                        . . . # .\n                                        . . # . .`);\n            case ArrowNames.SouthEast: return images.createImage(` \n                                        # . . . .\n                                        . # . . .\n                                        . . # . #\n                                        . . . # #\n                                        . . # # #`);\n            case ArrowNames.South: return images.createImage(` \n                                        . . # . .\n                                        . . # . .\n                                        # . # . #\n                                        . # # # .\n                                        . . # . .`);\n            case ArrowNames.SouthWest: return images.createImage(` \n                                        . . . . #\n                                        . . . # .\n                                        # . # . .\n                                        # # . . .\n                                        # # # . .`);\n            case ArrowNames.West: return images.createImage(` \n                                        . . # . .\n                                        . # . . .\n                                        # # # # #\n                                        . # . . .\n                                        . . # . .`);\n            case ArrowNames.NorthWest: return images.createImage(` \n                                        # # # . .\n                                        # # . . .\n                                        # . # . .\n                                        . . . # .\n                                        . . . . #`);\n            default: return images.createImage(`\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        `);\n        }\n    }\n\n    //% weight=50 blockGap=8\n    //% help=images/icon-image\n    //% blockId=builtin_image block=\"icon image %i\"\n    //% i.fieldEditor=\"imagedropdown\"\n    //% i.fieldOptions.width=\"400\" i.fieldOptions.columns=\"5\"\n    export function iconImage(i: IconNames): Image {\n        switch (i) {\n            case IconNames.Heart: return images.createImage(`\n                                        . # . # .\n                                        # # # # #\n                                        # # # # #\n                                        . # # # .\n                                        . . # . .`);\n\n            case IconNames.SmallHeart: return images.createImage(`\n                                        . . . . .\n                                        . # . # .\n                                        . # # # .\n                                        . . # . .\n                                        . . . . .`);\n            //faces\n            case IconNames.Happy: return images.createImage(`\n                                        . . . . .\n                                        . # . # .\n                                        . . . . .\n                                        # . . . #\n                                        . # # # .`);\n            case IconNames.Sad: return images.createImage(`\n                                        . . . . .\n                                        . # . # .\n                                        . . . . .\n                                        . # # # .\n                                        # . . . #`);\n            case IconNames.Confused: return images.createImage(`\n                                        . . . . .\n                                        . # . # .\n                                        . . . . .\n                                        . # . # .\n                                        # . # . #`);\n            case IconNames.Angry: return images.createImage(`\n                                        # . . . #\n                                        . # . # .\n                                        . . . . .\n                                        # # # # #\n                                        # . # . #`);\n            case IconNames.Asleep: return images.createImage(`\n                                        . . . . .\n                                        # # . # #\n                                        . . . . .\n                                        . # # # .\n                                        . . . . .`);\n            case IconNames.Surprised: return images.createImage(`\n                                        . # . # .\n                                        . . . . .\n                                        . . # . .\n                                        . # . # .\n                                        . . # . .`);\n            case IconNames.Silly: return images.createImage(`\n                                        # . . . #\n                                        . . . . .\n                                        # # # # #\n                                        . . . # #\n                                        . . . # #`);\n            case IconNames.Fabulous: return images.createImage(`\n                                        # # # # #\n                                        # # . # #\n                                        . . . . .\n                                        . # . # .\n                                        . # # # .`);\n            case IconNames.Meh: return images.createImage(`\n                                        # # . # #\n                                        . . . . .\n                                        . . . # .\n                                        . . # . .\n                                        . # . . .`);\n            case IconNames.Yes: return images.createImage(`\n                                        . . . . .\n                                        . . . . #\n                                        . . . # .\n                                        # . # . .\n                                        . # . . .`);\n            case IconNames.No: return images.createImage(`\n                                        # . . . #\n                                        . # . # .\n                                        . . # . .\n                                        . # . # .\n                                        # . . . #`);\n            case IconNames.Triangle: return images.createImage(`\n                                        . . . . .\n                                        . . # . .\n                                        . # . # .\n                                        # # # # #\n                                        . . . . .`);\n            case IconNames.LeftTriangle: return images.createImage(`\n                                        # . . . .\n                                        # # . . .\n                                        # . # . .\n                                        # . . # .\n                                        # # # # #`);\n            case IconNames.Chessboard: return images.createImage(`\n                                        . # . # .\n                                        # . # . #\n                                        . # . # .\n                                        # . # . #\n                                        . # . # .`);\n            case IconNames.Diamond: return images.createImage(`\n                                        . . # . .\n                                        . # . # .\n                                        # . . . #\n                                        . # . # .\n                                        . . # . .`);\n            case IconNames.SmallDiamond: return images.createImage(`\n                                        . . . . .\n                                        . . # . .\n                                        . # . # .\n                                        . . # . .\n                                        . . . . .`);\n            case IconNames.Square: return images.createImage(`\n                                        # # # # #\n                                        # . . . #\n                                        # . . . #\n                                        # . . . #\n                                        # # # # #`);\n            case IconNames.SmallSquare: return images.createImage(`\n                                        . . . . .\n                                        . # # # .\n                                        . # . # .\n                                        . # # # .\n                                        . . . . .`);\n\n            case IconNames.Scissors: return images.createImage(`\n                                        # # . . #\n                                        # # . # .\n                                        . . # . .\n                                        # # . # .\n                                        # # . . #`);\n            // The following images were designed by Abbie Brooks.\n            case IconNames.TShirt: return images.createImage(`\n                                        # # . # #\n                                        # # # # #\n                                        . # # # .\n                                        . # # # .\n                                        . # # # .`);\n            case IconNames.Rollerskate: return images.createImage(`\n                                        . . . # #\n                                        . . . # #\n                                        # # # # #\n                                        # # # # #\n                                        . # . # .`);\n            case IconNames.Duck: return images.createImage(`\n                                        . # # . .\n                                        # # # . .\n                                        . # # # #\n                                        . # # # .\n                                        . . . . .`);\n            case IconNames.House: return images.createImage(`\n                                        . . # . .\n                                        . # # # .\n                                        # # # # #\n                                        . # # # .\n                                        . # . # .`);\n            case IconNames.Tortoise: return images.createImage(`\n                                        . . . . .\n                                        . # # # .\n                                        # # # # #\n                                        . # . # .\n                                        . . . . .`);\n            case IconNames.Butterfly: return images.createImage(`\n                                        # # . # #\n                                        # # # # #\n                                        . . # . .\n                                        # # # # #\n                                        # # . # #`);\n            case IconNames.StickFigure: return images.createImage(`\n                                        . . # . .\n                                        # # # # #\n                                        . . # . .\n                                        . # . # .\n                                        # . . . #`);\n            case IconNames.Ghost: return images.createImage(`\n                                        . # # # .\n                                        # . # . #\n                                        # # # # #\n                                        # # # # #\n                                        # . # . #`);\n            case IconNames.Sword: return images.createImage(`\n                                        . . # . .\n                                        . . # . .\n                                        . . # . .\n                                        . # # # .\n                                        . . # . .`);\n            case IconNames.Giraffe: return images.createImage(`\n                                        # # . . .\n                                        . # . . .\n                                        . # . . .\n                                        . # # # .\n                                        . # . # .`);\n            case IconNames.Skull: return images.createImage(`\n                                        . # # # .\n                                        # . # . #\n                                        # # # # #\n                                        . # # # .\n                                        . # # # .`);\n            case IconNames.Umbrella: return images.createImage(`\n                                        . # # # .\n                                        # # # # #\n                                        . . # . .\n                                        # . # . .\n                                        # # # . .`);\n            case IconNames.Snake: return images.createImage(`\n                                        # # . . .\n                                        # # . # #\n                                        . # . # .\n                                        . # # # .\n                                        . . . . .`);\n            // animals\n            case IconNames.Rabbit: return images.createImage(`\n                                        # . # . .\n                                        # . # . .\n                                        # # # # .\n                                        # # . # .\n                                        # # # # .`);\n            case IconNames.Cow: return images.createImage(`\n                                        # . . . #\n                                        # . . . #\n                                        # # # # #\n                                        . # # # .\n                                        . . # . .`);\n            // musical notes\n            case IconNames.QuarterNote: return images.createImage(`\n                                        . . # . .\n                                        . . # . .\n                                        . . # . .\n                                        # # # . .\n                                        # # # . .`);\n            case IconNames.EigthNote: return images.createImage(`\n                                        . . # . .\n                                        . . # # .\n                                        . . # . #\n                                        # # # . .\n                                        # # # . .`);\n            // other icons\n            case IconNames.Pitchfork: return images.createImage(`\n                                        # . # . #\n                                        # . # . #\n                                        # # # # #\n                                        . . # . .\n                                        . . # . .`);\n            case IconNames.Target: return images.createImage(`\n                                        . . # . .\n                                        . # # # .\n                                        # # . # #\n                                        . # # # .\n                                        . . # . .`);\n            default: return images.createImage(`\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        `);\n        }\n    }\n\n    //% weight=50 blockGap=8\n    //% help=images/arrow-number\n    //% blockId=device_arrow block=\"%arrow\"\n    //% shim=TD_ID\n    export function arrowNumber(arrow: ArrowNames): number {\n        return arrow;\n    }\n}\n",
      "images.cpp": "#include \"pxt.h\"\n\nPXT_VTABLE_BEGIN(RefMImage, 0, 0)\nPXT_VTABLE_END\n\nRefMImage::RefMImage(ImageData *d) : PXT_VTABLE_INIT(RefMImage), img(d) {\n    img->incr();\n}\n\nvoid RefMImage::destroy(RefMImage *t) {\n    t->img->decr();\n}\n\nvoid RefMImage::print(RefMImage *t) {\n    DMESG(\"RefMImage %p r=%d size=%d x %d\", t, t->refcnt, img->width, img->height);\n}\n\nvoid RefMImage::makeWritable() {\n    if (img->isReadOnly()) {\n        MicroBitImage i(img);\n        img = i.clone().leakData();\n    }\n}\n\n/**\n * Creation, manipulation and display of LED images.\n */\n//% color=#5C2D91 weight=31 icon=\"\\uf03e\"\n//% advanced=true\nnamespace images {\n/**\n * Creates an image that fits on the LED screen.\n */\n//% weight=75 help=images/create-image\n//% blockId=device_build_image block=\"create image\"\n//% parts=\"ledmatrix\"\nImage createImage(ImageLiteral_ leds) {\n    return new RefMImage(imageBytes(leds));\n}\n\n/**\n * Creates an image with 2 frames.\n */\n//% weight=74 help=images/create-big-image\n//% blockId=device_build_big_image block=\"create big image\" imageLiteral=2\n//% parts=\"ledmatrix\"\nImage createBigImage(ImageLiteral_ leds) {\n    return createImage(leds);\n}\n} // namespace images\n\nnamespace ImageMethods {\n/**\n * Plots the image at a given column to the screen\n */\n//% help=images/plot-image\n//% parts=\"ledmatrix\"\nvoid plotImage(Image i, int xOffset = 0) {\n    uBit.display.print(MicroBitImage(i->img), -xOffset, 0, 0, 0);\n}\n\n/**\n * Shows an frame from the image at offset ``x offset``.\n * @param xOffset column index to start displaying the image\n */\n//% help=images/show-image weight=80 blockNamespace=images\n//% blockId=device_show_image_offset block=\"show image %sprite|at offset %offset\" blockGap=8\n//% parts=\"ledmatrix\" async\nvoid showImage(Image sprite, int xOffset, int interval = 400) {\n    uBit.display.print(MicroBitImage(sprite->img), -xOffset, 0, 0, interval);\n}\n\n/**\n * Draws the ``index``-th frame of the image on the screen.\n * @param xOffset column index to start displaying the image\n */\n//% help=images/plot-frame weight=80\n//% parts=\"ledmatrix\"\nvoid plotFrame(Image i, int xOffset) {\n    // TODO showImage() used in original implementation\n    plotImage(i, xOffset * 5);\n}\n\n/**\n * Scrolls an image .\n * @param frameOffset x offset moved on each animation step, eg: 1, 2, 5\n * @param interval time between each animation step in milli seconds, eg: 200\n */\n//% help=images/scroll-image weight=79 async blockNamespace=images\n//% blockId=device_scroll_image\n//% block=\"scroll image %sprite|with offset %frameoffset|and interval (ms) %delay\"\n//% blockGap=8 parts=\"ledmatrix\"\nvoid scrollImage(Image id, int frameOffset, int interval) {\n    MicroBitImage i(id->img);\n    uBit.display.animate(i, interval, frameOffset, MICROBIT_DISPLAY_ANIMATE_DEFAULT_POS, 0);\n}\n\n/**\n * Sets all pixels off.\n */\n//% help=images/clear\n//% parts=\"ledmatrix\"\nvoid clear(Image i) {\n    i->makeWritable();\n    MicroBitImage(i->img).clear();\n}\n\n/**\n * Sets a specific pixel brightness at a given position\n */\n//%\n//% parts=\"ledmatrix\"\nvoid setPixelBrightness(Image i, int x, int y, int value) {\n    i->makeWritable();\n    MicroBitImage(i->img).setPixelValue(x, y, value);\n}\n\n/**\n * Gets the pixel brightness ([0..255]) at a given position\n */\n//%\n//% parts=\"ledmatrix\"\nint pixelBrightness(Image i, int x, int y) {\n    int pix = MicroBitImage(i->img).getPixelValue(x, y);\n    if (pix < 0)\n        return 0;\n    return pix;\n}\n\n/**\n * Gets the width in columns\n */\n//% help=functions/width\nint width(Image i) {\n    return i->img->width;\n}\n\n/**\n * Gets the height in rows (always 5)\n */\n//%\nint height(Image i) {\n    return i->img->height;\n}\n\n/**\n * Set a pixel state at position ``(x,y)``\n * @param x TODO\n * @param y TODO\n * @param value TODO\n */\n//% help=images/set-pixel\n//% parts=\"ledmatrix\"\nvoid setPixel(Image i, int x, int y, bool value) {\n    setPixelBrightness(i, x, y, value ? 255 : 0);\n}\n\n/**\n * Get the pixel state at position ``(x,y)``\n * @param x TODO\n * @param y TODO\n */\n//% help=images/pixel\n//% parts=\"ledmatrix\"\nbool pixel(Image i, int x, int y) {\n    return pixelBrightness(i, x, y) > 0;\n}\n\n/**\n * Shows a particular frame of the image strip.\n * @param frame TODO\n */\n//% weight=70 help=images/show-frame\n//% parts=\"ledmatrix\"\nvoid showFrame(Image i, int frame, int interval = 400) {\n    showImage(i, frame * 5, interval);\n}\n} // namespace ImageMethods",
      "input.cpp": "#include \"pxt.h\"\n\nenum class Button {\n    A = MICROBIT_ID_BUTTON_A,\n    B = MICROBIT_ID_BUTTON_B,\n    //% block=\"A+B\"\n    AB = MICROBIT_ID_BUTTON_AB,\n};\n\nenum class Dimension {\n    //% block=x\n    X = 0,\n    //% block=y\n    Y = 1,\n    //% block=z\n    Z = 2,\n    //% block=strength\n    Strength = 3,\n};\n\nenum class Rotation {\n    //% block=pitch\n    Pitch = 0,\n    //% block=roll\n    Roll = 1,\n};\n\nenum class TouchPin {\n    P0 = MICROBIT_ID_IO_P0,\n    P1 = MICROBIT_ID_IO_P1,\n    P2 = MICROBIT_ID_IO_P2,\n};\n\nenum class AcceleratorRange {\n    /**\n     * The accelerator measures forces up to 1 gravity\n     */\n    //%  block=\"1g\"\n    OneG = 1,\n    /**\n     * The accelerator measures forces up to 2 gravity\n     */\n    //%  block=\"2g\"\n    TwoG = 2,\n    /**\n     * The accelerator measures forces up to 4 gravity\n     */\n    //% block=\"4g\"\n    FourG = 4,\n    /**\n     * The accelerator measures forces up to 8 gravity\n     */\n    //% block=\"8g\"\n    EightG = 8\n};\n\nenum class Gesture {\n    /**\n     * Raised when shaken\n     */\n    //% block=shake\n    //% jres=gestures.shake\n    Shake = MICROBIT_ACCELEROMETER_EVT_SHAKE,\n    /**\n     * Raised when the logo is upward and the screen is vertical\n     */\n    //% block=\"logo up\"\n    //% jres=gestures.tiltforward\n    LogoUp = MICROBIT_ACCELEROMETER_EVT_TILT_UP,\n    /**\n     * Raised when the logo is downward and the screen is vertical\n     */\n    //% block=\"logo down\"\n    //% jres=gestures.tiltbackwards\n    LogoDown = MICROBIT_ACCELEROMETER_EVT_TILT_DOWN,\n    /**\n     * Raised when the screen is pointing down and the board is horizontal\n     */\n    //% block=\"screen up\"\n    //% jres=gestures.frontsideup\n    ScreenUp = MICROBIT_ACCELEROMETER_EVT_FACE_UP,\n    /**\n     * Raised when the screen is pointing up and the board is horizontal\n     */\n    //% block=\"screen down\"\n    //% jres=gestures.backsideup\n    ScreenDown = MICROBIT_ACCELEROMETER_EVT_FACE_DOWN,\n    /**\n     * Raised when the screen is pointing left\n     */\n    //% block=\"tilt left\"\n    //% jres=gestures.tiltleft\n    TiltLeft = MICROBIT_ACCELEROMETER_EVT_TILT_LEFT,\n    /**\n     * Raised when the screen is pointing right\n     */\n    //% block=\"tilt right\"\n    //% jres=gestures.tiltright\n    TiltRight = MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT,\n    /**\n     * Raised when the board is falling!\n     */\n    //% block=\"free fall\"\n    //% jres=gestures.freefall\n    FreeFall = MICROBIT_ACCELEROMETER_EVT_FREEFALL,\n    /**\n    * Raised when a 3G shock is detected\n    */\n    //% block=\"3g\"\n    //% jres=gestures.impact3g\n    ThreeG = MICROBIT_ACCELEROMETER_EVT_3G,\n    /**\n    * Raised when a 6G shock is detected\n    */\n    //% block=\"6g\"\n    //% jres=gestures.impact6g\n    SixG = MICROBIT_ACCELEROMETER_EVT_6G,\n    /**\n    * Raised when a 8G shock is detected\n    */\n    //% block=\"8g\"\n    //% jres=gestures.impact8g\n    EightG = MICROBIT_ACCELEROMETER_EVT_8G\n};\n\nenum class MesDpadButtonInfo {\n    //% block=\"A down\"\n    ADown = MES_DPAD_BUTTON_A_DOWN,\n    //% block=\"A up\"\n    AUp = MES_DPAD_BUTTON_A_UP,\n    //% block=\"B down\"\n    BDown = MES_DPAD_BUTTON_B_DOWN,\n    //% block=\"B up\"\n    BUp = MES_DPAD_BUTTON_B_UP,\n    //% block=\"C down\"\n    CDown = MES_DPAD_BUTTON_C_DOWN,\n    //% block=\"C up\"\n    CUp = MES_DPAD_BUTTON_C_UP,\n    //% block=\"D down\"\n    DDown = MES_DPAD_BUTTON_D_DOWN,\n    //% block=\"D up\"\n    DUp = MES_DPAD_BUTTON_D_UP,\n    //% block=\"1 down\"\n    _1Down = MES_DPAD_BUTTON_1_DOWN,\n    //% block=\"1 up\"\n    _1Up = MES_DPAD_BUTTON_1_UP,\n    //% block=\"2 down\"\n    _2Down = MES_DPAD_BUTTON_2_DOWN,\n    //% block=\"2 up\"\n    _2Up = MES_DPAD_BUTTON_2_UP,\n    //% block=\"3 down\"\n    _3Down = MES_DPAD_BUTTON_3_DOWN,\n    //% block=\"3 up\"\n    _3Up = MES_DPAD_BUTTON_3_UP,\n    //% block=\"4 down\"\n    _4Down = MES_DPAD_BUTTON_4_DOWN,\n    //% block=\"4 up\"\n    _4Up = MES_DPAD_BUTTON_4_UP,\n};\n\n//% color=#B4009E weight=99 icon=\"\\uf192\"\nnamespace input {\n    /**\n     * Do something when a button (A, B or both A+B) is pushed down and released again.\n     * @param button the button that needs to be pressed\n     * @param body code to run when event is raised\n     */\n    //% help=input/on-button-pressed weight=85 blockGap=8\n    //% blockId=device_button_event block=\"on button|%NAME|pressed\"\n    //% parts=\"buttonpair\"\n    void onButtonPressed(Button button, Action body) {\n        registerWithDal((int)button, MICROBIT_BUTTON_EVT_CLICK, body);\n    }\n\n    /**\n     * Do something when when a gesture is done (like shaking the micro:bit).\n     * @param gesture the type of gesture to track, eg: Gesture.Shake\n     * @param body code to run when gesture is raised\n     */\n    //% help=input/on-gesture weight=84 blockGap=8\n    //% blockId=device_gesture_event block=\"on |%NAME\"\n    //% parts=\"accelerometer\"\n    //% NAME.fieldEditor=\"gestures\" NAME.fieldOptions.columns=4\n    void onGesture(Gesture gesture, Action body) {\n        int gi = (int)gesture;\n        if (gi == MICROBIT_ACCELEROMETER_EVT_3G && uBit.accelerometer.getRange() < 3)\n            uBit.accelerometer.setRange(4);\n        else if ((gi == MICROBIT_ACCELEROMETER_EVT_6G || gi == MICROBIT_ACCELEROMETER_EVT_8G) && uBit.accelerometer.getRange() < 6)\n            uBit.accelerometer.setRange(8);\n        registerWithDal(MICROBIT_ID_GESTURE, gi, body);\n    }\n\n     /**\n     * Do something when a pin is touched and released again (while also touching the GND pin).\n     * @param name the pin that needs to be pressed, eg: TouchPin.P0\n     * @param body the code to run when the pin is pressed\n     */\n    //% help=input/on-pin-pressed weight=83\n    //% blockId=device_pin_event block=\"on pin %name|pressed\"\n    void onPinPressed(TouchPin name, Action body) {\n        auto pin = getPin((int)name);\n        if (!pin) return;\n\n        // Forces the PIN to switch to makey-makey style detection.\n        pin->isTouched();\n        registerWithDal((int)name, MICROBIT_BUTTON_EVT_CLICK, body);\n    }\n\n    /**\n     * Do something when a pin is released.\n     * @param name the pin that needs to be released, eg: TouchPin.P0\n     * @param body the code to run when the pin is released\n     */\n    //% help=input/on-pin-released weight=6 blockGap=8\n    //% blockId=device_pin_released block=\"on pin %NAME|released\"\n    //% advanced=true\n    void onPinReleased(TouchPin name, Action body) {\n        auto pin = getPin((int)name);\n        if (!pin) return;\n\n        // Forces the PIN to switch to makey-makey style detection.\n        pin->isTouched();\n        registerWithDal((int)name, MICROBIT_BUTTON_EVT_UP, body);\n    }\n\n    /**\n     * Get the button state (pressed or not) for ``A`` and ``B``.\n     * @param button the button to query the request, eg: Button.A\n     */\n    //% help=input/button-is-pressed weight=60\n    //% block=\"button|%NAME|is pressed\"\n    //% blockId=device_get_button2\n    //% icon=\"\\uf192\" blockGap=8\n    //% parts=\"buttonpair\"\n    bool buttonIsPressed(Button button) {\n      if (button == Button::A)\n        return uBit.buttonA.isPressed();\n      else if (button == Button::B)\n        return uBit.buttonB.isPressed();\n      else if (button == Button::AB)\n        return uBit.buttonAB.isPressed();\n      return false;\n    }\n\n    /**\n     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.\n     * @param name pin used to detect the touch, eg: TouchPin.P0\n     */\n    //% help=input/pin-is-pressed weight=58\n    //% blockId=\"device_pin_is_pressed\" block=\"pin %NAME|is pressed\"\n    //% blockGap=8\n    bool pinIsPressed(TouchPin name) {\n        auto pin = getPin((int)name);\n        return pin && pin->isTouched();\n    }\n\n    int getAccelerationStrength() {\n        double x = uBit.accelerometer.getX();\n        double y = uBit.accelerometer.getY();\n        double z = uBit.accelerometer.getZ();\n        return (int)sqrt(x*x+y*y+z*z);\n    }\n\n    /**\n     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up, x=0, y=0 and z=-1024)\n     * @param dimension TODO\n     */\n    //% help=input/acceleration weight=58\n    //% blockId=device_acceleration block=\"acceleration (mg)|%NAME\" blockGap=8\n    //% parts=\"accelerometer\"\n    int acceleration(Dimension dimension) {\n      switch (dimension) {\n      case Dimension::X: return uBit.accelerometer.getX();\n      case Dimension::Y: return uBit.accelerometer.getY();\n      case Dimension::Z: return uBit.accelerometer.getZ();\n      case Dimension::Strength: return getAccelerationStrength();\n      }\n      return 0;\n    }\n\n    /**\n     * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright.\n     */\n    //% help=input/light-level weight=57\n    //% blockId=device_get_light_level block=\"light level\" blockGap=8\n    //% parts=\"ledmatrix\"\n    int lightLevel() {\n        return uBit.display.readLightLevel();\n    }\n\n    /**\n     * Get the current compass heading in degrees.\n     */\n    //% help=input/compass-heading\n    //% weight=56\n    //% blockId=device_heading block=\"compass heading (°)\" blockGap=8\n    //% parts=\"compass\"\n    int compassHeading() {\n        return uBit.compass.heading();\n    }\n\n\n    /**\n     * Gets the temperature in Celsius degrees (°C).\n     */\n    //% weight=55\n    //% help=input/temperature\n    //% blockId=device_temperature block=\"temperature (°C)\" blockGap=8\n    //% parts=\"thermometer\"\n    int temperature() {\n        return uBit.thermometer.getTemperature();\n    }\n\n    /**\n     * The pitch or roll of the device, rotation along the ``x-axis`` or ``y-axis``, in degrees.\n     * @param kind TODO\n     */\n    //% help=input/rotation weight=52\n    //% blockId=device_get_rotation block=\"rotation (°)|%NAME\" blockGap=8\n    //% parts=\"accelerometer\" advanced=true\n    int rotation(Rotation kind) {\n      switch (kind) {\n      case Rotation::Pitch: return uBit.accelerometer.getPitch();\n      case Rotation::Roll: return uBit.accelerometer.getRoll();\n      }\n      return 0;\n    }\n\n    /**\n     * Get the magnetic force value in ``micro-Teslas`` (``µT``). This function is not supported in the simulator.\n     * @param dimension TODO\n     */\n    //% help=input/magnetic-force weight=51\n    //% blockId=device_get_magnetic_force block=\"magnetic force (µT)|%NAME\" blockGap=8\n    //% parts=\"compass\"\n    //% advanced=true\n    int magneticForce(Dimension dimension) {\n      if (!uBit.compass.isCalibrated())\n        uBit.compass.calibrate();\n\n      switch (dimension) {\n      case Dimension::X: return uBit.compass.getX() / 1000;\n      case Dimension::Y: return uBit.compass.getY() / 1000;\n      case Dimension::Z: return uBit.compass.getZ() / 1000;\n      case Dimension::Strength: return uBit.compass.getFieldStrength() / 1000;\n      }\n      return 0;\n    }\n\n    /**\n     * Gets the number of milliseconds elapsed since power on.\n     */\n    //% help=input/running-time weight=50 blockGap=8\n    //% blockId=device_get_running_time block=\"running time (ms)\"\n    //% advanced=true\n    int runningTime() {\n        return system_timer_current_time();\n    }\n\n    /**\n     * Gets the number of microseconds elapsed since power on.\n     */\n    //% help=input/running-time-micros weight=49\n    //% blockId=device_get_running_time_micros block=\"running time (micros)\"\n    //% advanced=true\n    int runningTimeMicros() {\n        return system_timer_current_time_us();\n    }\n\n    /**\n     * Obsolete, compass calibration is automatic.\n     */\n    //% help=input/calibrate-compass advanced=true\n    //% blockId=\"input_compass_calibrate\" block=\"calibrate compass\"\n    void calibrateCompass() { \n        uBit.compass.calibrate();        \n    }\n\n    /**\n     * Sets the accelerometer sample range in gravities.\n     * @param range a value describe the maximum strengh of acceleration measured\n     */\n    //% help=input/set-accelerometer-range\n    //% blockId=device_set_accelerometer_range block=\"set accelerometer|range %range\"\n    //% weight=5\n    //% parts=\"accelerometer\"\n    //% advanced=true\n    void setAccelerometerRange(AcceleratorRange range) {\n        uBit.accelerometer.setRange((int)range);\n    }\n}\n",
      "input.ts": "/**\n * Events and data from sensors\n */\n//% color=#B4009E weight=99 icon=\"\\uf192\"\nnamespace input {\n    /**\n     * Attaches code to run when the screen is facing up.\n     * @param body TODO\n     */\n    //% help=input/on-screen-up\n    export function onScreenUp(body: () => void): void {\n        onGesture(Gesture.ScreenUp, body);\n    }\n\n    /**\n     * Attaches code to run when the screen is facing down.\n     * @param body TODO\n     */\n    //% help=input/on-screen-down\n    export function onScreenDown(body: () => void): void {\n        onGesture(Gesture.ScreenDown, body);\n    }\n\n    /**\n     * Attaches code to run when the device is shaken.\n     * @param body TODO\n     */\n    //% help=input/on-shake\n    export function onShake(body: () => void): void {\n        onGesture(Gesture.Shake, body);\n    }\n\n    /**\n     * Attaches code to run when the logo is oriented upwards and the board is vertical.\n     * @param body TODO\n     */\n    //% help=input/on-logo-up\n    export function onLogoUp(body: () => void): void {\n        onGesture(Gesture.LogoUp, body);\n    }\n\n    /**\n     * Attaches code to run when the logo is oriented downwards and the board is vertical.\n     * @param body TODO\n     */\n    //% help=input/on-logo-down\n    export function onLogoDown(body: () => void): void {\n        onGesture(Gesture.LogoDown, body);\n    }\n\n    /**\n     * Obsolete, use input.calibrateCompass instead.\n     */\n    //% weight=0 help=input/calibrate-compass\n    export function calibrate() {\n        input.calibrateCompass();\n    }\n}\n",
      "led.cpp": "#include \"pxt.h\"\n\nenum class DisplayMode_ {\n    //% block=\"black and white\"\n    BackAndWhite = DISPLAY_MODE_BLACK_AND_WHITE,\n    //% block=\"greyscale\"\n    Greyscale = DISPLAY_MODE_GREYSCALE,\n    // TODO DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE\n};\n\n//% color=#5C2D91 weight=97 icon=\"\\uf205\"\nnamespace led {\n\n    /**\n     * Turn on the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x the horizontal coordinate of the LED starting at 0\n     * @param y the vertical coordinate of the LED starting at 0\n     */\n    //% help=led/plot weight=78\n    //% blockId=device_plot block=\"plot|x %x|y %y\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4\n    void plot(int x, int y) {\n      uBit.display.image.setPixelValue(x, y, 0xff);\n    }\n\n    /**\n     * Turn on the specified LED with specific brightness using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x the horizontal coordinate of the LED starting at 0\n     * @param y the vertical coordinate of the LED starting at 0\n     * @param brightness the brightness from 0 (off) to 255 (bright), eg:255\n     */\n    //% help=led/plot-brightness weight=78\n    //% blockId=device_plot_brightness block=\"plot|x %x|y %y|brightness %brightness\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4 brightness.min=0 brightness.max=255\n    //% advanced=true\n    void plotBrightness(int x, int y, int brightness) {\n        brightness = max(0, min(0xff, brightness));\n        // enable greyscale as needed\n        if (brightness != 0 && brightness != 0xff && uBit.display.getDisplayMode() != DISPLAY_MODE_GREYSCALE)\n            uBit.display.setDisplayMode(DISPLAY_MODE_GREYSCALE);\n        uBit.display.image.setPixelValue(x, y, brightness);\n    }\n\n    /**\n     * Turn off the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=led/unplot weight=77\n    //% blockId=device_unplot block=\"unplot|x %x|y %y\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4\n    void unplot(int x, int y) {\n      uBit.display.image.setPixelValue(x, y, 0);\n    }\n\n    /**\n     * Get the on/off state of the specified LED using x, y coordinates. (0,0) is upper left.\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=led/point weight=76\n    //% blockId=device_point block=\"point|x %x|y %y\"\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4\n    bool point(int x, int y) {\n      int pix = uBit.display.image.getPixelValue(x, y);\n      return pix > 0;\n    }\n\n    /**\n     * Get the screen brightness from 0 (off) to 255 (full bright).\n     */\n    //% help=led/brightness weight=60\n    //% blockId=device_get_brightness block=\"brightness\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    int brightness() {\n      return uBit.display.getBrightness();\n    }\n\n    /**\n     * Set the screen brightness from 0 (off) to 255 (full bright).\n     * @param value the brightness value, eg:255, 127, 0\n     */\n    //% help=led/set-brightness weight=59\n    //% blockId=device_set_brightness block=\"set brightness %value\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    //% value.min=0 value.max=255\n    void setBrightness(int value) {\n       uBit.display.setBrightness(value);\n    }\n\n    /**\n     * Cancels the current animation and clears other pending animations.\n     */\n    //% weight=50 help=led/stop-animation\n    //% blockId=device_stop_animation block=\"stop animation\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    void stopAnimation() {\n       uBit.display.stopAnimation();\n    }\n\n    /**\n     * Sets the display mode between black and white and greyscale for rendering LEDs.\n     * @param mode mode the display mode in which the screen operates\n     */\n    //% weight=1 help=led/set-display-mode\n    //% parts=\"ledmatrix\" advanced=true\n    void setDisplayMode(DisplayMode_ mode) {\n        uBit.display.setDisplayMode((DisplayMode)mode);\n    }\n\n    /**\n    * Gets the current display mode\n    */\n    //% weight=1 parts=\"ledmatrix\" advanced=true\n    DisplayMode_ displayMode() {\n        return (DisplayMode_)uBit.display.getDisplayMode();\n    }\n\n    /**\n    * Turns on or off the display\n    */\n    //% help=led/enable blockId=device_led_enable block=\"led enable %on\"\n    //% advanced=true parts=\"ledmatrix\"\n    void enable(bool on) {\n        if (on) uBit.display.enable();\n        else uBit.display.disable();\n    }\n\n    /**\n     * Takes a screenshot of the LED screen and returns an image.\n     */\n    //% help=led/screenshot\n    //% parts=\"ledmatrix\"\n    Image screenshot() {\n        auto d = uBit.display.screenShot().leakData();\n        auto r = new RefMImage(d);\n        d->decr();\n        return r;\n        /*\n        let Image img;\n        img = image.createImage(\"\");\n        for (let i = 0; i < 5; i++) {\n            for (let j = 0; j < 5; j++) {\n                if (led.point(i, j)) {\n                    img.setPixel(i, j, true);\n                }\n            }\n        }\n        return img;\n        */\n    }\n}\n",
      "led.ts": "/**\n * Control of the LED screen.\n */\n//% color=#5C2D91 weight=97 icon=\"\\uf205\"\n    namespace led {\n\n    // what's the current high value\n    let barGraphHigh = 0;\n    // when was the current high value recorded\n    let barGraphHighLast = 0;\n\n    /**\n     * Displays a vertical bar graph based on the `value` and `high` value.\n     * If `high` is 0, the chart gets adjusted automatically.\n     * @param value current value to plot\n     * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0\n     */\n    //% help=led/plot-bar-graph weight=20\n    //% blockId=device_plot_bar_graph block=\"plot bar graph of %value up to %high\" icon=\"\\uf080\" blockExternalInputs=true\n    //% parts=\"ledmatrix\"\n    export function plotBarGraph(value: number, high: number): void {\n        let now = input.runningTime();\n        serial.writeLine(value.toString());\n        value = Math.abs(value);\n\n        if (high != 0) barGraphHigh = high;\n        else if (value > barGraphHigh || now - barGraphHighLast > 10000) {\n            barGraphHigh = value;\n            barGraphHighLast = now;\n        }\n\n        barGraphHigh = Math.max(barGraphHigh, 16);\n\n        let v = (value * 15) / barGraphHigh;\n        let k = 0;\n        for (let y = 4; y >= 0; --y) {\n            for (let x = 0; x < 3; ++x) {\n                if (k > v) {\n                    unplot(2 - x, y);\n                    unplot(2 + x, y);\n                } else {\n                    plot(2 - x, y);\n                    plot(2 + x, y);\n                }\n                ++k;\n            }\n        }\n    }\n\n    /**\n     * Toggles a particular pixel\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=led/toggle weight=77\n    //% blockId=device_led_toggle block=\"toggle|x %x|y %y\" icon=\"\\uf204\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4\n    export function toggle(x: number, y: number): void {\n        if (led.point(x, y)) {\n            led.unplot(x, y);\n        } else {\n            led.plot(x, y);\n        }\n    }\n\n    /**\n     * Turns all LEDS on\n     */\n    //% help=led/plot-all\n    //% parts=\"ledmatrix\"\n    export function plotAll(): void {\n        for (let i = 0; i < 5; i++) {\n            for (let j = 0; j < 5; j++) {\n                led.plot(i, j);\n            }\n        }\n    }\n\n    /**\n     * Inverts the current LED display\n     */\n    //% help=led/toggle-all\n    //% parts=\"ledmatrix\"\n    export function toggleAll(): void {\n        for (let i = 0; i < 5; i++) {\n            for (let j = 0; j < 5; j++) {\n                led.toggle(i, j);\n            }\n        }\n    }\n\n    /**\n     * Fades in the screen display.\n     * @param ms TODO\n     */\n    //% help=led/fade-in\n    //% parts=\"ledmatrix\"\n    export function fadeIn(ms: number = 700): void {\n        if (ms < 20) {\n            led.setBrightness(255);\n            return;\n        }\n        let dt = 50;\n        let brightness = led.brightness();\n        let start = input.runningTime();\n        let elapsed = 0;\n        while (elapsed < ms) {\n            led.setBrightness(brightness + ((255 - brightness) * elapsed) / ms);\n            basic.pause(dt);\n            elapsed = input.runningTime() - start;\n        }\n        led.setBrightness(255);\n    }\n\n    /**\n     * Fades out the screen brightness.\n     * @param ms TODO\n     */\n    //% help=led/fade-out\n    //% parts=\"ledmatrix\"\n    export function fadeOut(ms: number = 700): void {\n        if (ms < 20) {\n            led.setBrightness(0);\n            return;\n        }\n        let brightness = led.brightness();\n        let dt = 50;\n        let start = input.runningTime();\n        let elapsed = 0;\n        while (elapsed < ms) {\n            led.setBrightness(brightness - (brightness * elapsed) / ms);\n            basic.pause(dt);\n            elapsed = input.runningTime() - start;\n        }\n        led.setBrightness(0);\n    }\n\n\n}\n",
      "melodies.ts": "/*\nThe MIT License (MIT)\n\nCopyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed\nin the accompanying AUTHORS file\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n\n// Melodies from file microbitmusictunes.c https://github.com/bbcmicrobit/MicroPython\n\nenum Melodies {\n    //% block=\"dadadum\" blockIdentity=music.builtInMelody\n    Dadadadum = 0,\n    //% block=\"entertainer\" blockIdentity=music.builtInMelody\n    Entertainer,\n    //% block=\"prelude\" blockIdentity=music.builtInMelody\n    Prelude,\n    //% block=\"ode\" blockIdentity=music.builtInMelody\n    Ode,\n    //% block=\"nyan\" blockIdentity=music.builtInMelody\n    Nyan,\n    //% block=\"ringtone\" blockIdentity=music.builtInMelody\n    Ringtone,\n    //% block=\"funk\" blockIdentity=music.builtInMelody\n    Funk,\n    //% block=\"blues\" blockIdentity=music.builtInMelody\n    Blues,\n    //% block=\"birthday\" blockIdentity=music.builtInMelody\n    Birthday,\n    //% block=\"wedding\" blockIdentity=music.builtInMelody\n    Wedding,\n    //% block=\"funereal\" blockIdentity=music.builtInMelody\n    Funeral,\n    //% block=\"punchline\" blockIdentity=music.builtInMelody\n    Punchline,\n    //% block=\"baddy\" blockIdentity=music.builtInMelody\n    Baddy,\n    //% block=\"chase\" blockIdentity=music.builtInMelody\n    Chase,\n    //% block=\"ba ding\" blockIdentity=music.builtInMelody\n    BaDing,\n    //% block=\"wawawawaa\" blockIdentity=music.builtInMelody\n    Wawawawaa,\n    //% block=\"jump up\" blockIdentity=music.builtInMelody\n    JumpUp,\n    //% block=\"jump down\" blockIdentity=music.builtInMelody\n    JumpDown,\n    //% block=\"power up\" blockIdentity=music.builtInMelody\n    PowerUp,\n    //% block=\"power down\" blockIdentity=music.builtInMelody\n    PowerDown,\n}\n\nnamespace music {\n\n    export function getMelody(melody: Melodies): string[] {\n        switch (melody) {\n            case Melodies.Dadadadum:\n                return ['r4:2', 'g', 'g', 'g', 'eb:8', 'r:2', 'f', 'f', 'f', 'd:8'];\n            case Melodies.Entertainer:\n                return ['d4:1', 'd#', 'e', 'c5:2', 'e4:1', 'c5:2', 'e4:1', 'c5:3', 'c:1', 'd', 'd#', 'e', 'c', 'd', 'e:2', 'b4:1', 'd5:2', 'c:4'];\n            case Melodies.Prelude:\n                return ['c4:1', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'd', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'c4', 'd', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'b3', 'd4', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'b3', 'd4', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e'];\n            case Melodies.Ode:\n                return ['e4', 'e', 'f', 'g', 'g', 'f', 'e', 'd', 'c', 'c', 'd', 'e', 'e:6', 'd:2', 'd:8', 'e:4', 'e', 'f', 'g', 'g', 'f', 'e', 'd', 'c', 'c', 'd', 'e', 'd:6', 'c:2', 'c:8'];\n            case Melodies.Nyan:\n                return ['f#5:2', 'g#', 'c#:1', 'd#:2', 'b4:1', 'd5:1', 'c#', 'b4:2', 'b', 'c#5', 'd', 'd:1', 'c#', 'b4:1', 'c#5:1', 'd#', 'f#', 'g#', 'd#', 'f#', 'c#', 'd', 'b4', 'c#5', 'b4', 'd#5:2', 'f#', 'g#:1', 'd#', 'f#', 'c#', 'd#', 'b4', 'd5', 'd#', 'd', 'c#', 'b4', 'c#5', 'd:2', 'b4:1', 'c#5', 'd#', 'f#', 'c#', 'd', 'c#', 'b4', 'c#5:2', 'b4', 'c#5', 'b4', 'f#:1', 'g#', 'b:2', 'f#:1', 'g#', 'b', 'c#5', 'd#', 'b4', 'e5', 'd#', 'e', 'f#', 'b4:2', 'b', 'f#:1', 'g#', 'b', 'f#', 'e5', 'd#', 'c#', 'b4', 'f#', 'd#', 'e', 'f#', 'b:2', 'f#:1', 'g#', 'b:2', 'f#:1', 'g#', 'b', 'b', 'c#5', 'd#', 'b4', 'f#', 'g#', 'f#', 'b:2', 'b:1', 'a#', 'b', 'f#', 'g#', 'b', 'e5', 'd#', 'e', 'f#', 'b4:2', 'c#5'];\n            case Melodies.Ringtone:\n                return ['c4:1', 'd', 'e:2', 'g', 'd:1', 'e', 'f:2', 'a', 'e:1', 'f', 'g:2', 'b', 'c5:4'];\n            case Melodies.Funk:\n                return ['c2:2', 'c', 'd#', 'c:1', 'f:2', 'c:1', 'f:2', 'f#', 'g', 'c', 'c', 'g', 'c:1', 'f#:2', 'c:1', 'f#:2', 'f', 'd#'];\n            case Melodies.Blues:\n                return ['c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'f', 'a', 'c3', 'd', 'd#', 'd', 'c', 'a2', 'c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'g', 'b', 'd3', 'f', 'f2', 'a', 'c3', 'd#', 'c2:2', 'e', 'g', 'e', 'g', 'f', 'e', 'd'];\n            case Melodies.Birthday:\n                return ['c4:3', 'c:1', 'd:4', 'c:4', 'f', 'e:8', 'c:3', 'c:1', 'd:4', 'c:4', 'g', 'f:8', 'c:3', 'c:1', 'c5:4', 'a4', 'f', 'e', 'd', 'a#:3', 'a#:1', 'a:4', 'f', 'g', 'f:8'];\n            case Melodies.Wedding:\n                return ['c4:4', 'f:3', 'f:1', 'f:8', 'c:4', 'g:3', 'e:1', 'f:8', 'c:4', 'f:3', 'a:1', 'c5:4', 'a4:3', 'f:1', 'f:4', 'e:3', 'f:1', 'g:8'];\n            case Melodies.Funeral:\n                return ['c3:4', 'c:3', 'c:1', 'c:4', 'd#:3', 'd:1', 'd:3', 'c:1', 'c:3', 'b2:1', 'c3:4'];\n            case Melodies.Punchline:\n                return ['c4:3', 'g3:1', 'f#', 'g', 'g#:3', 'g', 'r', 'b', 'c4'];\n            case Melodies.Baddy:\n                return ['c3:3', 'r', 'd:2', 'd#', 'r', 'c', 'r', 'f#:8'];\n            case Melodies.Chase:\n                return ['a4:1', 'b', 'c5', 'b4', 'a:2', 'r', 'a:1', 'b', 'c5', 'b4', 'a:2', 'r', 'a:2', 'e5', 'd#', 'e', 'f', 'e', 'd#', 'e', 'b4:1', 'c5', 'd', 'c', 'b4:2', 'r', 'b:1', 'c5', 'd', 'c', 'b4:2', 'r', 'b:2', 'e5', 'd#', 'e', 'f', 'e', 'd#', 'e'];\n            case Melodies.BaDing:\n                return ['b5:1', 'e6:3'];\n            case Melodies.Wawawawaa:\n                return ['e3:3', 'r:1', 'd#:3', 'r:1', 'd:4', 'r:1', 'c#:8'];\n            case Melodies.JumpUp:\n                return ['c5:1', 'd', 'e', 'f', 'g'];\n            case Melodies.JumpDown:\n                return ['g5:1', 'f', 'e', 'd', 'c'];\n            case Melodies.PowerUp:\n                return ['g4:1', 'c5', 'e', 'g:2', 'e:1', 'g:3'];\n            case Melodies.PowerDown:\n                return ['g5:1', 'd#', 'c', 'g4:2', 'b:1', 'c5:3'];\n            default:\n                return [];\n        }\n    }\n}",
      "music.ts": "enum Note {\n    //% blockIdentity=music.noteFrequency enumval=262\n    C = 262,\n    //% block=C#\n    //% blockIdentity=music.noteFrequency enumval=277\n    CSharp = 277,\n    //% blockIdentity=music.noteFrequency enumval=294\n    D = 294,\n    //% blockIdentity=music.noteFrequency enumval=311\n    Eb = 311,\n    //% blockIdentity=music.noteFrequency enumval=330\n    E = 330,\n    //% blockIdentity=music.noteFrequency enumval=349\n    F = 349,\n    //% block=F#\n    //% blockIdentity=music.noteFrequency enumval=370\n    FSharp = 370,\n    //% blockIdentity=music.noteFrequency enumval=392\n    G = 392,\n    //% block=G#\n    //% blockIdentity=music.noteFrequency enumval=415\n    GSharp = 415,\n    //% blockIdentity=music.noteFrequency enumval=440\n    A = 440,\n    //% blockIdentity=music.noteFrequency enumval=466\n    Bb = 466,\n    //% blockIdentity=music.noteFrequency enumval=494\n    B = 494,\n    //% blockIdentity=music.noteFrequency enumval=131\n    C3 = 131,\n    //% block=C#3\n    //% blockIdentity=music.noteFrequency enumval=139\n    CSharp3 = 139,\n    //% blockIdentity=music.noteFrequency enumval=147\n    D3 = 147,\n    //% blockIdentity=music.noteFrequency enumval=156\n    Eb3 = 156,\n    //% blockIdentity=music.noteFrequency enumval=165\n    E3 = 165,\n    //% blockIdentity=music.noteFrequency enumval=175\n    F3 = 175,\n    //% block=F#3\n    //% blockIdentity=music.noteFrequency enumval=185\n    FSharp3 = 185,\n    //% blockIdentity=music.noteFrequency enumval=196\n    G3 = 196,\n    //% block=G#3\n    //% blockIdentity=music.noteFrequency enumval=208\n    GSharp3 = 208,\n    //% blockIdentity=music.noteFrequency enumval=220\n    A3 = 220,\n    //% blockIdentity=music.noteFrequency enumval=233\n    Bb3 = 233,\n    //% blockIdentity=music.noteFrequency enumval=247\n    B3 = 247,\n    //% blockIdentity=music.noteFrequency enumval=262\n    C4 = 262,\n    //% block=C#4\n    //% blockIdentity=music.noteFrequency enumval=277\n    CSharp4 = 277,\n    //% blockIdentity=music.noteFrequency enumval=294\n    D4 = 294,\n    //% blockIdentity=music.noteFrequency enumval=311\n    Eb4 = 311,\n    //% blockIdentity=music.noteFrequency enumval=330\n    E4 = 330,\n    //% blockIdentity=music.noteFrequency enumval=349\n    F4 = 349,\n    //% block=F#4\n    //% blockIdentity=music.noteFrequency enumval=370\n    FSharp4 = 370,\n    //% blockIdentity=music.noteFrequency enumval=392\n    G4 = 392,\n    //% block=G#4\n    //% blockIdentity=music.noteFrequency enumval=415\n    GSharp4 = 415,\n    //% blockIdentity=music.noteFrequency enumval=440\n    A4 = 440,\n    //% blockIdentity=music.noteFrequency enumval=466\n    Bb4 = 466,\n    //% blockIdentity=music.noteFrequency enumval=494\n    B4 = 494,\n    //% blockIdentity=music.noteFrequency enumval=523\n    C5 = 523,\n    //% block=C#5\n    //% blockIdentity=music.noteFrequency enumval=555\n    CSharp5 = 555,\n    //% blockIdentity=music.noteFrequency enumval=587\n    D5 = 587,\n    //% blockIdentity=music.noteFrequency enumval=622\n    Eb5 = 622,\n    //% blockIdentity=music.noteFrequency enumval=659\n    E5 = 659,\n    //% blockIdentity=music.noteFrequency enumval=698\n    F5 = 698,\n    //% block=F#5\n    //% blockIdentity=music.noteFrequency enumval=740\n    FSharp5 = 740,\n    //% blockIdentity=music.noteFrequency enumval=784\n    G5 = 784,\n    //% block=G#5\n    //% blockIdentity=music.noteFrequency enumval=831\n    GSharp5 = 831,\n    //% blockIdentity=music.noteFrequency enumval=880\n    A5 = 880,\n    //% blockIdentity=music.noteFrequency enumval=932\n    Bb5 = 932,\n    //% blockIdentity=music.noteFrequency enumval=988\n    B5 = 988,\n}\n\nenum BeatFraction {\n    //% block=1\n    Whole = 1,\n    //% block=\"1/2\"\n    Half = 2,\n    //% block=\"1/4\"\n    Quarter = 4,\n    //% block=\"1/8\"\n    Eighth = 8,\n    //% block=\"1/16\"\n    Sixteenth = 16,\n    //% block=\"2\"\n    Double = 32,\n    //% block=\"4\",\n    Breve = 64\n}\n\nenum MelodyOptions {\n    //% block=\"once\"\"\n    Once = 1,\n    //% block=\"forever\"\n    Forever = 2,\n    //% block=\"once in background\"\n    OnceInBackground = 4,\n    //% block=\"forever in background\"\n    ForeverInBackground = 8\n}\n\nenum MusicEvent {\n    //% block=\"melody note played\"\n    MelodyNotePlayed = 1,\n    //% block=\"melody started\"\n    MelodyStarted = 2,\n    //% block=\"melody ended\"\n    MelodyEnded = 3,\n    //% block=\"melody repeated\"\n    MelodyRepeated = 4,\n    //% block=\"background melody note played\"\n    BackgroundMelodyNotePlayed = MelodyNotePlayed | 0xf0,\n    //% block=\"background melody started\"\n    BackgroundMelodyStarted = MelodyStarted | 0xf0,\n    //% block=\"background melody ended\"\n    BackgroundMelodyEnded = MelodyEnded | 0xf0,\n    //% block=\"background melody repeated\"\n    BackgroundMelodyRepeated = MelodyRepeated | 0xf0,\n    //% block=\"background melody paused\"\n    BackgroundMelodyPaused = 5 | 0xf0,\n    //% block=\"background melody resumed\"\n    BackgroundMelodyResumed = 6 | 0xf0\n}\n\n/**\n * Generation of music tones.\n */\n//% color=#D83B01 weight=98 icon=\"\\uf025\"\nnamespace music {\n    let beatsPerMinute: number = 120;\n    let freqTable: number[] = [];\n    let _playTone: (frequency: number, duration: number) => void;\n    const MICROBIT_MELODY_ID = 2000;\n\n    /**\n     * Plays a tone through pin ``P0`` for the given duration.\n     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C\n     * @param ms tone duration in milliseconds (ms)\n     */\n    //% help=music/play-tone weight=90\n    //% blockId=device_play_note block=\"play|tone %note=device_note|for %duration=device_beat\" blockGap=8\n    //% parts=\"headphone\"\n    //% useEnumVal=1\n    export function playTone(frequency: number, ms: number): void {\n        if (_playTone) _playTone(frequency, ms);\n        else pins.analogPitch(frequency, ms);\n    }\n\n    /**\n     * Plays a tone through pin ``P0``.\n     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C\n     */\n    //% help=music/ring-tone weight=80\n    //% blockId=device_ring block=\"ring tone (Hz)|%note=device_note\" blockGap=8\n    //% parts=\"headphone\"\n    //% useEnumVal=1\n    export function ringTone(frequency: number): void {\n        playTone(frequency, 0);\n    }\n\n    /**\n     * Rests (plays nothing) for a specified time through pin ``P0``.\n     * @param ms rest duration in milliseconds (ms)\n     */\n    //% help=music/rest weight=79\n    //% blockId=device_rest block=\"rest(ms)|%duration=device_beat\"\n    //% parts=\"headphone\"\n    export function rest(ms: number): void {\n        playTone(0, ms);\n    }\n\n\n    /**\n     * Gets the frequency of a note.\n     * @param name the note name, eg: Note.C\n     */\n    //% weight=50 help=music/note-frequency\n    //% blockId=device_note block=\"%note\"\n    //% shim=TD_ID color=\"#FFFFFF\" colorSecondary=\"#FFFFFF\"\n    //% note.fieldEditor=\"note\" note.defl=\"262\"\n    //% note.fieldOptions.decompileLiterals=true\n    //% useEnumVal=1\n    export function noteFrequency(name: Note): number {\n        return name;\n    }\n\n    function init() {\n        if (beatsPerMinute <= 0) beatsPerMinute = 120;\n        if (freqTable.length == 0) freqTable = [31, 33, 35, 37, 39, 41, 44, 46, 49, 52, 55, 58, 62, 65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951, 4186]\n    }\n\n    /**\n     * Returns the duration of a beat in milli-seconds\n     */\n    //% help=music/beat weight=49\n    //% blockId=device_beat block=\"%fraction|beat\"\n    export function beat(fraction?: BeatFraction): number {\n        init();\n        if (fraction == null) fraction = BeatFraction.Whole;\n        let beat = 60000 / beatsPerMinute;\n        switch (fraction) {\n            case BeatFraction.Half: return beat / 2;\n            case BeatFraction.Quarter: return beat / 4;\n            case BeatFraction.Eighth: return beat / 8;\n            case BeatFraction.Sixteenth: return beat / 16;\n            case BeatFraction.Double: return beat * 2;\n            case BeatFraction.Breve: return beat * 4;\n            default: return beat;\n        }\n    }\n\n    /**\n     * Returns the tempo in beats per minute. Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.\n     */\n    //% help=music/tempo weight=40\n    //% blockId=device_tempo block=\"tempo (bpm)\" blockGap=8\n    export function tempo(): number {\n        init();\n        return beatsPerMinute;\n    }\n\n    /**\n     * Change the tempo by the specified amount\n     * @param bpm The change in beats per minute to the tempo, eg: 20\n     */\n    //% help=music/change-tempo-by weight=39\n    //% blockId=device_change_tempo block=\"change tempo by (bpm)|%value\" blockGap=8\n    export function changeTempoBy(bpm: number): void {\n        init();\n        setTempo(beatsPerMinute + bpm);\n    }\n\n    /**\n     * Sets the tempo to the specified amount\n     * @param bpm The new tempo in beats per minute, eg: 120\n     */\n    //% help=music/set-tempo weight=38\n    //% blockId=device_set_tempo block=\"set tempo to (bpm)|%value\"\n    //% bpm.min=4 bpm.max=400\n    export function setTempo(bpm: number): void {\n        init();\n        if (bpm > 0) {\n            beatsPerMinute = Math.max(1, bpm);\n        }\n    }\n\n    let currentMelody: Melody;\n    let currentBackgroundMelody: Melody;\n\n    /**\n     * Gets the melody array of a built-in melody.\n     * @param name the note name, eg: Note.C\n     */\n    //% weight=50 help=music/builtin-melody\n    //% blockId=device_builtin_melody block=\"%melody\"\n    //% blockHidden=true\n    export function builtInMelody(melody: Melodies): string[] {\n        return getMelody(melody);\n    }\n\n    /**\n     * Registers code to run on various melody events\n     */\n    //% blockId=melody_on_event block=\"music on %value\"\n    //% help=music/on-event weight=59\n    export function onEvent(value: MusicEvent, handler: () => void) {\n        control.onEvent(MICROBIT_MELODY_ID, value, handler);\n    }\n\n    /**\n     * Starts playing a melody.\n     * Notes are expressed as a string of characters with this format: NOTE[octave][:duration]\n     * @param melodyArray the melody array to play, eg: Melodies.Dadadadum\n     * @param options melody options, once / forever, in the foreground / background\n     */\n    //% help=music/begin-melody weight=60 blockGap=8\n    //% blockId=device_start_melody block=\"start melody %melody=device_builtin_melody| repeating %options\"\n    //% parts=\"headphone\"\n    export function beginMelody(melodyArray: string[], options: MelodyOptions = 1) {\n        init();\n        if (currentMelody != undefined) {\n            if (((options & MelodyOptions.OnceInBackground) == 0)\n                && ((options & MelodyOptions.ForeverInBackground) == 0)\n                && currentMelody.background) {\n                currentBackgroundMelody = currentMelody;\n                currentMelody = null;\n                control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyPaused);\n            }\n            if (currentMelody)\n                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);\n            currentMelody = new Melody(melodyArray, options);\n            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);\n        } else {\n            currentMelody = new Melody(melodyArray, options);\n            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);\n            // Only start the fiber once\n            control.inBackground(() => {\n                while (currentMelody.hasNextNote()) {\n                    playNextNote(currentMelody);\n                    if (!currentMelody.hasNextNote() && currentBackgroundMelody) {\n                        // Swap the background melody back\n                        currentMelody = currentBackgroundMelody;\n                        currentBackgroundMelody = null;\n                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.MelodyEnded);\n                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyResumed);\n                    }\n                }\n                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);\n                currentMelody = null;\n            })\n        }\n    }\n\n    /**\n     * Sets a custom playTone function for playing melodies\n     */\n    //% help=music/set-play-tone\n    //% advanced=true\n    export function setPlayTone(f: (frequency: number, duration: number) => void) {\n        _playTone = f;\n    }\n\n    function playNextNote(melody: Melody): void {\n        // cache elements\n        let currNote = melody.nextNote();\n        let currentPos = melody.currentPos;\n        let currentDuration = melody.currentDuration;\n        let currentOctave = melody.currentOctave;\n\n        let note: number;\n        let isrest: boolean = false;\n        let beatPos: number;\n        let parsingOctave: boolean = true;\n\n        for (let pos = 0; pos < currNote.length; pos++) {\n            let noteChar = currNote.charAt(pos);\n            switch (noteChar) {\n                case 'c': case 'C': note = 1; break;\n                case 'd': case 'D': note = 3; break;\n                case 'e': case 'E': note = 5; break;\n                case 'f': case 'F': note = 6; break;\n                case 'g': case 'G': note = 8; break;\n                case 'a': case 'A': note = 10; break;\n                case 'b': case 'B': note = 12; break;\n                case 'r': case 'R': isrest = true; break;\n                case '#': note++; break;\n                case 'b': note--; break;\n                case ':': parsingOctave = false; beatPos = pos; break;\n                default: if (parsingOctave) currentOctave = parseInt(noteChar);\n            }\n        }\n        if (!parsingOctave) {\n            currentDuration = parseInt(currNote.substr(beatPos + 1, currNote.length - beatPos));\n        }\n        let beat = (60000 / beatsPerMinute) / 4;\n        if (isrest) {\n            music.rest(currentDuration * beat)\n        } else {\n            let keyNumber = note + (12 * (currentOctave - 1));\n            let frequency = keyNumber >= 0 && keyNumber < freqTable.length ? freqTable[keyNumber] : 0;\n            music.playTone(frequency, currentDuration * beat);\n        }\n        melody.currentDuration = currentDuration;\n        melody.currentOctave = currentOctave;\n        const repeating = melody.repeating && currentPos == melody.melodyArray.length - 1;\n        melody.currentPos = repeating ? 0 : currentPos + 1;\n\n        control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyNotePlayed : MusicEvent.MelodyNotePlayed);\n        if (repeating)\n            control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyRepeated : MusicEvent.MelodyRepeated);\n    }\n\n    class Melody {\n        public melodyArray: string[];\n        public currentDuration: number;\n        public currentOctave: number;\n        public currentPos: number;\n        public repeating: boolean;\n        public background: boolean;\n\n        constructor(melodyArray: string[], options: MelodyOptions) {\n            this.melodyArray = melodyArray;\n            this.repeating = ((options & MelodyOptions.Forever) != 0);\n            this.repeating = this.repeating ? true : ((options & MelodyOptions.ForeverInBackground) != 0)\n            this.background = ((options & MelodyOptions.OnceInBackground) != 0);\n            this.background = this.background ? true : ((options & MelodyOptions.ForeverInBackground) != 0);\n            this.currentDuration = 4; //Default duration (Crotchet)\n            this.currentOctave = 4; //Middle octave\n            this.currentPos = 0;\n        }\n\n        hasNextNote() {\n            return this.repeating || this.currentPos < this.melodyArray.length;\n        }\n\n        nextNote(): string {\n            const currentNote = this.melodyArray[this.currentPos];\n            return currentNote;\n        }\n    }\n}\n",
      "parts/headphone.svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"142\" height=\"180\" viewBox=\"0 0 142 180\"><rect ry=\".3\" rx=\"1\" y=\"58.615\" x=\"-8.878\" height=\"23.571\" width=\"17.143\" transform=\"rotate(-45)\" fill=\"#b3b3b3\"/><rect ry=\".3\" rx=\"1\" y=\"32.043\" x=\"-8.878\" height=\"23.571\" width=\"17.143\" transform=\"rotate(-45)\" fill=\"#b3b3b3\"/><path d=\"M.346 7.296c-.394.39-.31 4.797-.18 4.898l13.404 10.18c.117.12.337 4.76.73 4.368l5.506-5.56.01.01 6.51-6.444c.39-.392-4.25-.614-4.366-.73L11.777.612c-.1-.132-4.51-.215-4.898.18L4.087 3.636l-.01-.01-3.73 3.67z\" fill=\"#b3b3b3\"/><rect ry=\"6.85\" rx=\"4.571\" y=\"84.758\" x=\"-20.128\" height=\"75.571\" width=\"39.643\" transform=\"rotate(-45)\"/><rect ry=\".374\" rx=\"1.038\" y=\"29.442\" x=\"-8.925\" height=\"2.228\" width=\"17.238\" transform=\"rotate(-45)\" fill=\"#fff\"/><rect ry=\".374\" rx=\"1.038\" y=\"55.939\" x=\"-8.925\" height=\"2.228\" width=\"17.238\" transform=\"rotate(-45)\" fill=\"#fff\"/><rect ry=\".374\" rx=\"1.038\" y=\"82.392\" x=\"-8.925\" height=\"2.228\" width=\"17.238\" transform=\"rotate(-45)\" fill=\"#fff\"/><rect ry=\"2.317\" rx=\"2.183\" y=\"158.876\" x=\"-9.774\" height=\"25.568\" width=\"18.935\" transform=\"rotate(-45)\"/><path d=\"M128.588 128.82s14.97 11.165 7.547 26.35c-8.426 17.24-25.57 20.653-25.57 20.653\" fill=\"none\" stroke=\"#000\" stroke-width=\"6.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
      "parts/speaker.svg": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 500 500\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(1, 0, 0, 1, -0.00023, -58.230297)\">\n    <ellipse style=\"fill: rgb(70, 70, 70);\" cx=\"250.58\" cy=\"308.81\" rx=\"215\" ry=\"215\"/>\n    <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 1.000001, -232.069031, 248.780606)\" cx=\"482.069\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\n    <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -232.067871, 110.041956)\" cx=\"482.067\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\n    <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"389.12\" cy=\"308.23\" rx=\"23.028\" ry=\"23.028\"/>\n    <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"110.88\" cy=\"308.23\" rx=\"23.028\" ry=\"23.028\"/>\n    <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"169.393\" rx=\"23.028\" ry=\"23.028\"/>\n    <g transform=\"matrix(1, 0, 0, 1, -0.000009, 0.000015)\">\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"238.513\" rx=\"23.028\" ry=\"23.028\" transform=\"matrix(1.000001, 0, 0, 0.999999, 69.996739, 69.71816)\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -302.064453, 110.043115)\" cx=\"482.064\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\n    </g>\n    <g transform=\"matrix(0.866026, 0.5, -0.5, 0.866026, 7.386552, -105.261086)\">\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(0.999999, 0, 0, 0.999999, -65.212313, 177.387415)\" cx=\"482.068\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"555.975\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"277.735\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"416.855\" cy=\"97.999\" rx=\"23.028\" ry=\"23.028\"/>\n    </g>\n    <g transform=\"matrix(0.5, 0.866026, -0.866026, 0.5, 246.635941, -171.170502)\">\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(0.999999, 0, 0, 0.999999, -65.212313, 177.387415)\" cx=\"482.068\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"555.975\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"277.735\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"416.855\" cy=\"97.999\" rx=\"23.028\" ry=\"23.028\"/>\n    </g>\n    <g transform=\"matrix(-0.5, 0.866026, -0.866026, -0.5, 641.934998, 245.84082)\">\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"238.513\" rx=\"23.028\" ry=\"23.028\" transform=\"matrix(1.000001, 0, 0, 0.999999, 69.996739, 69.71816)\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -302.064453, 110.043115)\" cx=\"482.064\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\n    </g>\n    <g transform=\"matrix(-0.500001, -0.866026, 0.866026, -0.500001, 108.063393, 678.85083)\">\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"238.513\" rx=\"23.028\" ry=\"23.028\" transform=\"matrix(1.000001, 0, 0, 0.999999, 69.996739, 69.71816)\"/>\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -302.064453, 110.043115)\" cx=\"482.064\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\n    </g>\n  </g>\n</svg>",
      "pins.cpp": "#include \"pxt.h\"\n\nenum class DigitalPin {\n    P0 = MICROBIT_ID_IO_P0,\n    P1 = MICROBIT_ID_IO_P1,\n    P2 = MICROBIT_ID_IO_P2,\n    P3 = MICROBIT_ID_IO_P3,\n    P4 = MICROBIT_ID_IO_P4,\n    P5 = MICROBIT_ID_IO_P5,\n    P6 = MICROBIT_ID_IO_P6,\n    P7 = MICROBIT_ID_IO_P7,\n    P8 = MICROBIT_ID_IO_P8,\n    P9 = MICROBIT_ID_IO_P9,\n    P10 = MICROBIT_ID_IO_P10,\n    P11 = MICROBIT_ID_IO_P11,\n    P12 = MICROBIT_ID_IO_P12,\n    P13 = MICROBIT_ID_IO_P13,\n    P14 = MICROBIT_ID_IO_P14,\n    P15 = MICROBIT_ID_IO_P15,\n    P16 = MICROBIT_ID_IO_P16,\n    P19 = MICROBIT_ID_IO_P19,\n    P20 = MICROBIT_ID_IO_P20,\n};\n\nenum class AnalogPin {\n    P0 = MICROBIT_ID_IO_P0,\n    P1 = MICROBIT_ID_IO_P1,\n    P2 = MICROBIT_ID_IO_P2,\n    P3 = MICROBIT_ID_IO_P3,\n    P4 = MICROBIT_ID_IO_P4,\n    P10 = MICROBIT_ID_IO_P10,\n    //% block=\"P5 (write only)\"\n    P5 = MICROBIT_ID_IO_P5,\n    //% block=\"P6 (write only)\"\n    P6 = MICROBIT_ID_IO_P6,\n    //% block=\"P7 (write only)\"\n    P7 = MICROBIT_ID_IO_P7,\n    //% block=\"P8 (write only)\"\n    P8 = MICROBIT_ID_IO_P8,\n    //% block=\"P9 (write only)\"\n    P9 = MICROBIT_ID_IO_P9,\n    //% block=\"P11 (write only)\"\n    P11 = MICROBIT_ID_IO_P11,\n    //% block=\"P12 (write only)\"\n    P12 = MICROBIT_ID_IO_P12,\n    //% block=\"P13 (write only)\"\n    P13 = MICROBIT_ID_IO_P13,\n    //% block=\"P14 (write only)\"\n    P14 = MICROBIT_ID_IO_P14,\n    //% block=\"P15 (write only)\"\n    P15 = MICROBIT_ID_IO_P15,\n    //% block=\"P16 (write only)\"\n    P16 = MICROBIT_ID_IO_P16,\n    //% block=\"P19 (write only)\"\n    P19 = MICROBIT_ID_IO_P19,\n    //% block=\"P20 (write only)\"\n    P20 = MICROBIT_ID_IO_P20\n};\n\nenum class PulseValue {\n    //% block=high\n    High = MICROBIT_PIN_EVT_PULSE_HI,\n    //% block=low\n    Low = MICROBIT_PIN_EVT_PULSE_LO\n};\n\nenum class PinPullMode {\n    //% block=\"down\"\n    PullDown = 0,\n    //% block=\"up\"\n    PullUp = 1,\n    //% block=\"none\"\n    PullNone = 2\n};\n\nenum class PinEventType {\n    //% block=\"edge\"\n    Edge = MICROBIT_PIN_EVENT_ON_EDGE,\n    //% block=\"pulse\"\n    Pulse = MICROBIT_PIN_EVENT_ON_PULSE,\n    //% block=\"touch\"\n    Touch = MICROBIT_PIN_EVENT_ON_TOUCH,\n    //% block=\"none\"\n    None = MICROBIT_PIN_EVENT_NONE\n};\n\n\nnamespace pxt\n{\nMicroBitPin *getPin(int id) {\n    switch (id) {\n        case MICROBIT_ID_IO_P0: return &uBit.io.P0;\n        case MICROBIT_ID_IO_P1: return &uBit.io.P1;\n        case MICROBIT_ID_IO_P2: return &uBit.io.P2;\n        case MICROBIT_ID_IO_P3: return &uBit.io.P3;\n        case MICROBIT_ID_IO_P4: return &uBit.io.P4;\n        case MICROBIT_ID_IO_P5: return &uBit.io.P5;\n        case MICROBIT_ID_IO_P6: return &uBit.io.P6;\n        case MICROBIT_ID_IO_P7: return &uBit.io.P7;\n        case MICROBIT_ID_IO_P8: return &uBit.io.P8;\n        case MICROBIT_ID_IO_P9: return &uBit.io.P9;\n        case MICROBIT_ID_IO_P10: return &uBit.io.P10;\n        case MICROBIT_ID_IO_P11: return &uBit.io.P11;\n        case MICROBIT_ID_IO_P12: return &uBit.io.P12;\n        case MICROBIT_ID_IO_P13: return &uBit.io.P13;\n        case MICROBIT_ID_IO_P14: return &uBit.io.P14;\n        case MICROBIT_ID_IO_P15: return &uBit.io.P15;\n        case MICROBIT_ID_IO_P16: return &uBit.io.P16;\n        case MICROBIT_ID_IO_P19: return &uBit.io.P19;\n        case MICROBIT_ID_IO_P20: return &uBit.io.P20;\n        default: return NULL;\n    }\n}\n\n} // pxt\n\nnamespace pins {\n    #define PINOP(op) \\\n      MicroBitPin *pin = getPin((int)name); \\\n      if (!pin) return; \\\n      pin->op\n\n    #define PINREAD(op) \\\n      MicroBitPin *pin = getPin((int)name); \\\n      if (!pin) return 0; \\\n      return pin->op\n\n\n    //%\n    MicroBitPin *getPinAddress(int id) {\n        return getPin(id);\n    }\n\n    /**\n     * Read the specified pin or connector as either 0 or 1\n     * @param name pin to read from, eg: DigitalPin.P0\n     */\n    //% help=pins/digital-read-pin weight=30\n    //% blockId=device_get_digital_pin block=\"digital read|pin %name\" blockGap=8\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"300\"\n    int digitalReadPin(DigitalPin name) {\n        PINREAD(getDigitalValue());\n    }\n\n    /**\n      * Set a pin or connector value to either 0 or 1.\n      * @param name pin to write to, eg: DigitalPin.P0\n      * @param value value to set on the pin, 1 eg,0\n      */\n    //% help=pins/digital-write-pin weight=29\n    //% blockId=device_set_digital_pin block=\"digital write|pin %name|to %value\"\n    //% value.min=0 value.max=1\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"300\"\n    void digitalWritePin(DigitalPin name, int value) {\n        PINOP(setDigitalValue(value));\n    }\n\n    /**\n     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.\n     * @param name pin to write to, eg: AnalogPin.P0\n     */\n    //% help=pins/analog-read-pin weight=25\n    //% blockId=device_get_analog_pin block=\"analog read|pin %name\" blockGap=\"8\"\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\"\n    int analogReadPin(AnalogPin name) {\n        PINREAD(getAnalogValue());\n    }\n\n    /**\n     * Set the connector value as analog. Value must be comprised between 0 and 1023.\n     * @param name pin name to write to, eg: AnalogPin.P0\n     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0\n     */\n    //% help=pins/analog-write-pin weight=24\n    //% blockId=device_set_analog_pin block=\"analog write|pin %name|to %value\" blockGap=8\n    //% value.min=0 value.max=1023\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\"\n    void analogWritePin(AnalogPin name, int value) {\n        PINOP(setAnalogValue(value));\n    }\n\n    /**\n     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in **microseconds** or `1/1000` milliseconds.\n     * If this pin is not configured as an analog output (using `analog write pin`), the operation has no effect.\n     * @param name analog pin to set period to, eg: AnalogPin.P0\n     * @param micros period in micro seconds. eg:20000\n     */\n    //% help=pins/analog-set-period weight=23 blockGap=8\n    //% blockId=device_set_analog_period block=\"analog set period|pin %pin|to (µs)%micros\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\"\n    void analogSetPeriod(AnalogPin name, int micros) {\n        PINOP(setAnalogPeriodUs(micros));\n    }\n\n    /**\n    * Configures this pin to a digital input, and generates events where the timestamp is the duration that this pin was either ``high`` or ``low``.\n    * @param name digital pin to register to, eg: DigitalPin.P0\n    * @param pulse the value of the pulse, eg: PulseValue.High\n    */\n    //% help=pins/on-pulsed weight=22 blockGap=8 advanced=true\n    //% blockId=pins_on_pulsed block=\"on|pin %pin|pulsed %pulse\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"300\"\n    void onPulsed(DigitalPin name, PulseValue pulse, Action body) {\n        MicroBitPin* pin = getPin((int)name);\n        if (!pin) return;\n\n        pin->eventOn(MICROBIT_PIN_EVENT_ON_PULSE);\n        registerWithDal((int)name, (int)pulse, body);\n    }\n\n    /**\n    * Gets the duration of the last pulse in micro-seconds. This function should be called from a ``onPulsed`` handler.\n    */\n    //% help=pins/pulse-duration advanced=true\n    //% blockId=pins_pulse_duration block=\"pulse duration (µs)\"\n    //% weight=21 blockGap=8\n    int pulseDuration() {\n        return pxt::lastEvent.timestamp;\n    }\n\n    /**\n    * Returns the duration of a pulse in microseconds\n    * @param name the pin which measures the pulse, eg: DigitalPin.P0\n    * @param value the value of the pulse, eg: PulseValue.High\n    * @param maximum duration in micro-seconds\n    */\n    //% blockId=\"pins_pulse_in\" block=\"pulse in (µs)|pin %name|pulsed %value\"\n    //% weight=20 advanced=true\n    //% help=pins/pulse-in\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"300\"\n    int pulseIn(DigitalPin name, PulseValue value, int maxDuration = 2000000) {\n        MicroBitPin* pin = getPin((int)name);\n        if (!pin) return 0;\n\n        int pulse = value == PulseValue::High ? 1 : 0;\n        uint64_t tick =  system_timer_current_time_us();\n        uint64_t maxd = (uint64_t)maxDuration;\n        while(pin->getDigitalValue() != pulse) {\n            if(system_timer_current_time_us() - tick > maxd)\n                return 0;\n        }\n\n        uint64_t start =  system_timer_current_time_us();\n        while(pin->getDigitalValue() == pulse) {\n            if(system_timer_current_time_us() - tick > maxd)\n                return 0;\n        }\n        uint64_t end =  system_timer_current_time_us();\n        return end - start;\n    }\n\n    /**\n     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).\n     * @param name pin to write to, eg: AnalogPin.P0\n     * @param value angle or rotation speed, eg:180,90,0\n     */\n    //% help=pins/servo-write-pin weight=20\n    //% blockId=device_set_servo_pin block=\"servo write|pin %name|to %value\" blockGap=8\n    //% parts=microservo trackArgs=0\n    //% value.min=0 value.max=180\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\"\n    void servoWritePin(AnalogPin name, int value) {\n        PINOP(setServoValue(value));\n    }\n\n    /**\n     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.\n     * @param name pin name\n     * @param micros pulse duration in micro seconds, eg:1500\n     */\n    //% help=pins/servo-set-pulse weight=19\n    //% blockId=device_set_servo_pulse block=\"servo set pulse|pin %value|to (µs) %micros\"\n    //% value.fieldEditor=\"gridpicker\" value.fieldOptions.columns=4\n    //% value.fieldOptions.tooltips=\"false\"\n    void servoSetPulse(AnalogPin name, int micros) {\n        PINOP(setServoPulseUs(micros));\n    }\n\n\n    MicroBitPin* pitchPin = NULL;\n\n    /**\n     * Sets the pin used when using `analog pitch` or music.\n     * @param name pin to modulate pitch from\n     */\n    //% blockId=device_analog_set_pitch_pin block=\"analog set pitch pin %name\"\n    //% help=pins/analog-set-pitch-pin weight=3 advanced=true\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\"\n    void analogSetPitchPin(AnalogPin name) {\n      pitchPin = getPin((int)name);\n    }\n\n    /**\n     * Emits a Pulse-width modulation (PWM) signal to the current pitch pin. Use `analog set pitch pin` to define the pitch pin.\n     * @param frequency frequency to modulate in Hz.\n     * @param ms duration of the pitch in milli seconds.\n     */\n    //% blockId=device_analog_pitch block=\"analog pitch %frequency|for (ms) %ms\"\n    //% help=pins/analog-pitch weight=4 async advanced=true blockGap=8\n    void analogPitch(int frequency, int ms) {\n      if (pitchPin == NULL)\n        analogSetPitchPin(AnalogPin::P0);\n      if (frequency <= 0) {\n        pitchPin->setAnalogValue(0);\n      } else {\n        pitchPin->setAnalogValue(512);\n        pitchPin->setAnalogPeriodUs(1000000/frequency);\n      }\n\n      if (ms > 0) {\n          fiber_sleep(ms);\n          pitchPin->setAnalogValue(0);\n          // TODO why do we use wait_ms() here? it's a busy wait I think\n          wait_ms(5);\n      }\n    }\n\n\n    /**\n    * Configures the pull of this pin.\n    * @param name pin to set the pull mode on, eg: DigitalPin.P0\n    * @param pull one of the mbed pull configurations, eg: PinPullMode.PullUp\n    */\n    //% help=pins/set-pull weight=3 advanced=true\n    //% blockId=device_set_pull block=\"set pull|pin %pin|to %pull\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"300\"\n    void setPull(DigitalPin name, PinPullMode pull) {\n        PinMode m = pull == PinPullMode::PullDown\n            ? PinMode::PullDown\n            : pull == PinPullMode::PullUp ? PinMode::PullUp\n            : PinMode::PullNone;\n        PINOP(setPull(m));\n    }\n\n    /**\n    * Configures the events emitted by this pin. Events can be subscribed to\n    * using ``control.onEvent()``.\n    * @param name pin to set the event mode on, eg: DigitalPin.P0\n    * @param type the type of events for this pin to emit, eg: PinEventType.Edge\n    */\n    //% help=pins/set-events weight=4 advanced=true\n    //% blockId=device_set_pin_events block=\"set pin %pin|to emit %type|events\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"300\"\n    void setEvents(DigitalPin name, PinEventType type) {\n        getPin((int)name)->eventOn((int)type);\n    }\n\n    /**\n     * Create a new zero-initialized buffer.\n     * @param size number of bytes in the buffer\n     */\n    //%\n    Buffer createBuffer(int size)\n    {\n        return mkBuffer(NULL, size);\n    }\n\n    /**\n     * Read `size` bytes from a 7-bit I2C `address`.\n     */\n    //%\n    Buffer i2cReadBuffer(int address, int size, bool repeat = false)\n    {\n      Buffer buf = createBuffer(size);\n      uBit.i2c.read(address << 1, (char*)buf->data, size, repeat);\n      return buf;\n    }\n\n    /**\n     * Write bytes to a 7-bit I2C `address`.\n     */\n    //%\n    void i2cWriteBuffer(int address, Buffer buf, bool repeat = false)\n    {\n      uBit.i2c.write(address << 1, (char*)buf->data, buf->length, repeat);\n    }\n\n    SPI* spi = NULL;\n    SPI* allocSPI() {\n        if (NULL == spi)\n            spi = new SPI(MOSI, MISO, SCK);\n        return spi;\n    }\n\n    /**\n    * Write to the SPI slave and return the response\n    * @param value Data to be sent to the SPI slave\n    */\n    //% help=pins/spi-write weight=5 advanced=true\n    //% blockId=spi_write block=\"spi write %value\"\n    int spiWrite(int value) {\n        auto p = allocSPI();\n        return p->write(value);\n    }\n\n    /**\n    * Sets the SPI frequency\n    * @param frequency the clock frequency, eg: 1000000\n    */\n    //% help=pins/spi-frequency weight=4 advanced=true\n    //% blockId=spi_frequency block=\"spi frequency %frequency\"\n    void spiFrequency(int frequency) {\n        auto p = allocSPI();\n        p->frequency(frequency);\n    }\n\n    /**\n    * Sets the SPI bits and mode\n    * @param bits the number of bits, eg: 8\n    * @param mode the mode, eg: 3\n    */\n    //% help=pins/spi-format weight=3 advanced=true\n    //% blockId=spi_format block=\"spi format|bits %bits|mode %mode\"\n    void spiFormat(int bits, int mode) {\n        auto p = allocSPI();\n        p->format(bits, mode);        \n    }\n\n    /**\n    * Sets the MOSI, MISO, SCK pins used by the SPI instance\n    *\n    */\n    //% help=pins/spi-pins weight=2 advanced=true\n    //% blockId=spi_pins block=\"spi set pins|MOSI %mosi|MISO %miso|SCK %sck\"\n    //% mosi.fieldEditor=\"gridpicker\" mosi.fieldOptions.columns=4\n    //% mosi.fieldOptions.tooltips=\"false\" mosi.fieldOptions.width=\"300\"\n    //% miso.fieldEditor=\"gridpicker\" miso.fieldOptions.columns=4\n    //% miso.fieldOptions.tooltips=\"false\" miso.fieldOptions.width=\"300\"\n    //% sck.fieldEditor=\"gridpicker\" sck.fieldOptions.columns=4\n    //% sck.fieldOptions.tooltips=\"false\" sck.fieldOptions.width=\"300\"\n    void spiPins(DigitalPin mosi, DigitalPin miso, DigitalPin sck) {\n        if (NULL != spi) {\n            delete spi;\n            spi = NULL;\n        }\n\n        spi = new SPI(getPin((int)mosi)->name, getPin((int)miso)->name, getPin((int)sck)->name);\n    }\n}\n",
      "pins.ts": "/**\n * Control currents in Pins for analog/digital signals, servos, i2c, ...\n */\n//% color=#A80000 weight=30 icon=\"\\uf140\"\n//% advanced=true\nnamespace pins {\n    /**\n     * Re-maps a number from one range to another. That is, a value of ``from low`` would get mapped to ``to low``, a value of ``from high`` to ``to high``, values in-between to values in-between, etc.\n     * @param value value to map in ranges\n     * @param fromLow the lower bound of the value's current range\n     * @param fromHigh the upper bound of the value's current range, eg: 1023\n     * @param toLow the lower bound of the value's target range\n     * @param toHigh the upper bound of the value's target range, eg: 4\n     */\n    //% help=pins/map weight=23\n    //% blockId=math_map block=\"map %value|from low %fromLow|from high %fromHigh|to low %toLow|to high %toHigh\"\n    export function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {\n        return ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow;\n    }\n\n    /**\n     * Read one number from 7-bit I2C address.\n     */\n    //% help=pins/i2c-read-number blockGap=8 advanced=true\n    //% blockId=pins_i2c_readnumber block=\"i2c read number|at address %address|of format %format=i2c_sizeof|repeated %repeat\" weight=7\n    export function i2cReadNumber(address: number, format: NumberFormat, repeated?: boolean): number {\n        let buf = pins.i2cReadBuffer(address, pins.sizeOf(format), repeated)\n        return buf.getNumber(format, 0)\n    }\n\n    /**\n     * Write one number to a 7-bit I2C address.\n     */\n    //% help=pins/i2c-write-number blockGap=8 advanced=true\n    //% blockId=i2c_writenumber block=\"i2c write number|at address %address|with value %value|of format %format=i2c_sizeof|repeated %repeat\" weight=6\n    export function i2cWriteNumber(address: number, value: number, format: NumberFormat, repeated?: boolean): void {\n        let buf = createBuffer(pins.sizeOf(format))\n        buf.setNumber(format, 0, value)\n        pins.i2cWriteBuffer(address, buf, repeated)\n    }\n\n    /**\n     * Get the size in bytes of specified number format.\n     */\n    //%\n    export function sizeOf(format: NumberFormat) {\n        switch (format) {\n            case NumberFormat.Int8LE:\n            case NumberFormat.UInt8LE:\n            case NumberFormat.Int8BE:\n            case NumberFormat.UInt8BE:\n                return 1;\n            case NumberFormat.Int16LE:\n            case NumberFormat.UInt16LE:\n            case NumberFormat.Int16BE:\n            case NumberFormat.UInt16BE:\n                return 2;\n            case NumberFormat.Int32LE:\n            case NumberFormat.Int32BE:\n                return 4;\n        }\n        return 0;\n    }\n}\n\n\ninterface Buffer {\n    [index: number]: number;\n    // rest defined in buffer.cpp\n}\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockGap=64\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * joins all elements of an array into a string and returns this string.\n      * @param sep the string separator\n      */\n    //% helper=arrayJoin weight=40\n    join(sep: string): string;\n    \n    /**\n      * Tests whether at least one element in the array passes the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arraySome weight=40\n    some(callbackfn: (value: T, index: number) => boolean): boolean;\n\n    /**\n      * Tests whether all elements in the array pass the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayEvery weight=40\n    every(callbackfn: (value: T, index: number) => boolean): boolean;\n    \n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Call a defined callback function on each element of an array.\n      * @param callbackfn A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayForEach weight=40\n    forEach(callbackfn: (value: T, index: number) => void): void;\n    \n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=15\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    export function arrayJoin<T>(arr: T[], sep: string): string {\n        let r = \"\";\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            if (i > 0 && sep)\n                r += sep;\n            r += arr[i] || \"\";\n        }\n        return r;\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arraySome<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (callbackfn(arr[i], i))\n                return true;\n        return false;\n    }\n\n    export function arrayEvery<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (!callbackfn(arr[i], i))\n                return false;\n        return true;\n    }\n\n    export function arrayForEach<T>(arr: T[], callbackfn: (value: T, index: number) => void): void {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            callbackfn(arr[i], i);\n        }\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n\n    /**\n     * Rounds ``x`` to a number with the given number of ``digits``\n     * @param x the number to round\n     * @param digits the number of resulting digits\n     */\n    //%\n    export function roundWithPrecision(x: number, digits: number): number {\n        digits = digits | 0;\n        if (digits <= 0) return Math.round(x);\n        let d = Math.pow(10, digits);\n        return Math.round(x * d) / d;\n    }\n}\n",
      "pxt.cpp": "#include \"pxtbase.h\"\n\nusing namespace std;\n\nnamespace pxt {\n\nTValue incr(TValue e) {\n    if (isRefCounted(e)) {\n        getVTable((RefObject *)e);\n#if MEMDBG_ENABLED\n        if (((RefObject *)e)->refcnt != 0xffff)\n            MEMDBG(\"INCR: %p refs=%d\", e, ((RefObject *)e)->refcnt);\n#endif\n        ((RefObject *)e)->ref();\n    }\n    return e;\n}\n\nvoid decr(TValue e) {\n    if (isRefCounted(e)) {\n#if MEMDBG_ENABLED\n        if (((RefObject *)e)->refcnt != 0xffff)\n            MEMDBG(\"DECR: %p refs=%d\", e, ((RefObject *)e)->refcnt);\n#endif\n        ((RefObject *)e)->unref();\n    }\n}\n\n// TODO\nAction mkAction(int reflen, int totallen, int startptr) {\n    check(0 <= reflen && reflen <= totallen, ERR_SIZE, 1);\n    check(reflen <= totallen && totallen <= 255, ERR_SIZE, 2);\n    check(bytecode[startptr] == 0xffff, ERR_INVALID_BINARY_HEADER, 3);\n    check(bytecode[startptr + 1] == PXT_REF_TAG_ACTION, ERR_INVALID_BINARY_HEADER, 4);\n\n    uintptr_t tmp = (uintptr_t)&bytecode[startptr];\n\n    if (totallen == 0) {\n        return (TValue)tmp; // no closure needed\n    }\n\n    void *ptr = ::operator new(sizeof(RefAction) + totallen * sizeof(unsigned));\n    RefAction *r = new (ptr) RefAction();\n    r->len = totallen;\n    r->reflen = reflen;\n    r->func = (ActionCB)((tmp + 4) | 1);\n    memset(r->fields, 0, r->len * sizeof(unsigned));\n\n    MEMDBG(\"mkAction: start=%p => %p\", startptr, r);\n\n    return (Action)r;\n}\n\n// TODO\nTValue runAction3(Action a, TValue arg0, TValue arg1, TValue arg2) {\n    auto aa = (RefAction *)a;\n    if (aa->vtable == PXT_REF_TAG_ACTION) {\n        check(aa->refcnt == 0xffff, ERR_INVALID_BINARY_HEADER, 4);\n        return ((ActionCB)(((uintptr_t)a + 4) | 1))(NULL, arg0, arg1, arg2);\n    } else {\n        check(aa->refcnt != 0xffff, ERR_INVALID_BINARY_HEADER, 4);\n        return aa->runCore(arg0, arg1, arg2);\n    }\n}\n\nTValue runAction2(Action a, TValue arg0, TValue arg1) {\n    return runAction3(a, arg0, arg1, 0);\n}\n\nTValue runAction1(Action a, TValue arg0) {\n    return runAction3(a, arg0, 0, 0);\n}\n\nTValue runAction0(Action a) {\n    return runAction3(a, 0, 0, 0);\n}\n\nRefRecord *mkClassInstance(int vtableOffset) {\n    VTable *vtable = (VTable *)&bytecode[vtableOffset];\n\n    intcheck(vtable->methods[0] == &RefRecord_destroy, ERR_SIZE, 3);\n    intcheck(vtable->methods[1] == &RefRecord_print, ERR_SIZE, 4);\n\n    void *ptr = ::operator new(vtable->numbytes);\n    RefRecord *r = new (ptr) RefRecord(PXT_VTABLE_TO_INT(vtable));\n    memset(r->fields, 0, vtable->numbytes - sizeof(RefRecord));\n    MEMDBG(\"mkClass: vt=%p => %p\", vtable, r);\n    return r;\n}\n\nTValue RefRecord::ld(int idx) {\n    // intcheck((reflen == 255 ? 0 : reflen) <= idx && idx < len, ERR_OUT_OF_BOUNDS, 1);\n    return fields[idx];\n}\n\nTValue RefRecord::ldref(int idx) {\n    // DMESG(\"LD %p len=%d reflen=%d idx=%d\", this, len, reflen, idx);\n    // intcheck(0 <= idx && idx < reflen, ERR_OUT_OF_BOUNDS, 2);\n    TValue tmp = fields[idx];\n    incr(tmp);\n    return tmp;\n}\n\nvoid RefRecord::st(int idx, TValue v) {\n    // intcheck((reflen == 255 ? 0 : reflen) <= idx && idx < len, ERR_OUT_OF_BOUNDS, 3);\n    fields[idx] = v;\n}\n\nvoid RefRecord::stref(int idx, TValue v) {\n    // DMESG(\"ST %p len=%d reflen=%d idx=%d\", this, len, reflen, idx);\n    // intcheck(0 <= idx && idx < reflen, ERR_OUT_OF_BOUNDS, 4);\n    decr(fields[idx]);\n    fields[idx] = v;\n}\n\nvoid RefObject::destroyVT() {\n    ((RefObjectMethod)getVTable(this)->methods[0])(this);\n    ::operator delete(this);\n}\n\nvoid RefObject::printVT() {\n    ((RefObjectMethod)getVTable(this)->methods[1])(this);\n}\n\nvoid RefRecord_destroy(RefRecord *r) {\n    VTable *tbl = getVTable(r);\n    uint8_t *refmask = (uint8_t *)&tbl->methods[tbl->userdata & 0xff];\n    int len = (tbl->numbytes >> 2) - 1;\n    for (int i = 0; i < len; ++i) {\n        if (refmask[i])\n            decr(r->fields[i]);\n        r->fields[i] = 0;\n    }\n}\n\nvoid RefRecord_print(RefRecord *r) {\n    DMESG(\"RefRecord %p r=%d size=%d bytes\", r, r->refcnt, getVTable(r)->numbytes);\n}\n\nTValue Segment::get(unsigned i) {\n#ifdef DEBUG_BUILD\n    DMESG(\"In Segment::get index:%d\", i);\n    this->print();\n#endif\n\n    if (i < length) {\n        return data[i];\n    }\n    return Segment::DefaultValue;\n}\n\nvoid Segment::setRef(unsigned i, TValue value) {\n    decr(get(i));\n    set(i, value);\n}\n\nvoid Segment::set(unsigned i, TValue value) {\n    if (i < size) {\n        data[i] = value;\n    } else if (i < Segment::MaxSize) {\n        growByMin(i + 1);\n        data[i] = value;\n    } else {\n        return;\n    }\n    if (length <= i) {\n        length = i + 1;\n    }\n\n#ifdef DEBUG_BUILD\n    DMESG(\"In Segment::set\");\n    this->print();\n#endif\n\n    return;\n}\n\nramint_t Segment::growthFactor(ramint_t size) {\n    if (size == 0) {\n        return 4;\n    }\n    if (size < 64) {\n        return size * 2; // Double\n    }\n    if (size < 512) {\n        return size * 5 / 3; // Grow by 1.66 rate\n    }\n     // Grow by constant rate\n    if ((unsigned)size + 256 < MaxSize)\n        return size + 256;\n    else\n        return MaxSize;\n}\n\nvoid Segment::growByMin(ramint_t minSize) {\n    growBy(max(minSize, growthFactor(size)));\n}\n\nvoid Segment::growBy(ramint_t newSize) {\n#ifdef DEBUG_BUILD\n    DMESG(\"growBy: %d\", newSize);\n    this->print();\n#endif\n    if (size < newSize) {\n        // this will throw if unable to allocate\n        TValue *tmp = (TValue *)(::operator new(newSize * sizeof(TValue)));\n\n        // Copy existing data\n        if (size) {\n            memcpy(tmp, data, size * sizeof(TValue));\n        }\n        // fill the rest with default value\n        memset(tmp + size, 0, (newSize - size) * sizeof(TValue));\n\n        // free older segment;\n        ::operator delete(data);\n\n        data = tmp;\n        size = newSize;\n\n#ifdef DEBUG_BUILD\n        DMESG(\"growBy - after reallocation\");\n        this->print();\n#endif\n    }\n    // else { no shrinking yet; }\n    return;\n}\n\nvoid Segment::ensure(ramint_t newSize) {\n    if (newSize < size) {\n        return;\n    }\n    growByMin(newSize);\n}\n\nvoid Segment::setLength(unsigned newLength) {\n    if (newLength > size) {\n        ensure(length);\n    }\n    length = newLength;\n    return;\n}\n\nvoid Segment::push(TValue value) {\n    this->set(length, value);\n}\n\nTValue Segment::pop() {\n#ifdef DEBUG_BUILD\n    DMESG(\"In Segment::pop\");\n    this->print();\n#endif\n\n    if (length > 0) {\n        --length;\n        TValue value = data[length];\n        data[length] = Segment::DefaultValue;\n        return value;\n    }\n    return Segment::DefaultValue;\n}\n\n// this function removes an element at index i and shifts the rest of the elements to\n// left to fill the gap\nTValue Segment::remove(unsigned i) {\n#ifdef DEBUG_BUILD\n    DMESG(\"In Segment::remove index:%d\", i);\n    this->print();\n#endif\n    if (i < length) {\n        // value to return\n        TValue ret = data[i];\n        if (i + 1 < length) {\n            // Move the rest of the elements to fill in the gap.\n            memmove(data + i, data + i + 1, (length - i - 1) * sizeof(unsigned));\n        }\n        length--;\n        data[length] = Segment::DefaultValue;\n#ifdef DEBUG_BUILD\n        DMESG(\"After Segment::remove index:%d\", i);\n        this->print();\n#endif\n        return ret;\n    }\n    return Segment::DefaultValue;\n}\n\n// this function inserts element value at index i by shifting the rest of the elements right.\nvoid Segment::insert(unsigned i, TValue value) {\n#ifdef DEBUG_BUILD\n    DMESG(\"In Segment::insert index:%d value:%d\", i, value);\n    this->print();\n#endif\n\n    if (i < length) {\n        ensure(length + 1);\n        \n        // Move the rest of the elements to fill in the gap.\n        memmove(data + i + 1, data + i, (length - i) * sizeof(unsigned));\n\n        data[i] = value;\n        length++;\n    } else {\n        // This is insert beyond the length, just call set which will adjust the length\n        set(i, value);\n    }\n#ifdef DEBUG_BUILD\n    DMESG(\"After Segment::insert index:%d\", i);\n    this->print();\n#endif\n}\n\nvoid Segment::print() {\n    DMESG(\"Segment: %p, length: %d, size: %d\", data, (unsigned)length, (unsigned)size);\n    for (unsigned i = 0; i < size; i++) {\n        DMESG(\"-> %d\", (unsigned)(uintptr_t)data[i]);\n    }\n}\n\nbool Segment::isValidIndex(unsigned i) {\n    if (i > length) {\n        return false;\n    }\n    return true;\n}\n\nvoid Segment::destroy() {\n#ifdef DEBUG_BUILD\n    DMESG(\"In Segment::destroy\");\n    this->print();\n#endif\n    length = size = 0;\n    ::operator delete(data);\n    data = nullptr;\n}\n\nvoid RefCollection::push(TValue x) {\n    incr(x);\n    head.push(x);\n}\n\nTValue RefCollection::pop() {\n    TValue ret = head.pop();\n    incr(ret);\n    return ret;\n}\n\nTValue RefCollection::getAt(int i) {\n    TValue tmp = head.get(i);\n    incr(tmp);\n    return tmp;\n}\n\nTValue RefCollection::removeAt(int i) {\n    return head.remove(i);\n}\n\nvoid RefCollection::insertAt(int i, TValue value) {\n    head.insert(i, value);\n    incr(value);\n}\n\nvoid RefCollection::setAt(int i, TValue value) {\n    incr(value);\n    head.setRef(i, value);\n}\n\nint RefCollection::indexOf(TValue x, int start) {\n#ifndef X86_64\n    unsigned i = start;\n    while (head.isValidIndex(i)) {\n        if (pxt::eq_bool(head.get(i), x)) {\n            return (int)i;\n        }\n        i++;\n    }\n#endif\n    return -1;\n}\n\nbool RefCollection::removeElement(TValue x) {\n    int idx = indexOf(x, 0);\n    if (idx >= 0) {\n        decr(removeAt(idx));\n        return 1;\n    }\n    return 0;\n}\n\nnamespace Coll0 {\nPXT_VTABLE_BEGIN(RefCollection, 0, 0)\nPXT_VTABLE_END\n} // namespace Coll0\n\nRefCollection::RefCollection() : RefObject(0) {\n    vtable = PXT_VTABLE_TO_INT(&Coll0::RefCollection_vtable);\n}\n\nvoid RefCollection::destroy(RefCollection *t) {\n    for (unsigned i = 0; i < t->head.getLength(); i++) {\n        decr(t->head.get(i));\n    }\n    t->head.destroy();\n}\n\nvoid RefCollection::print(RefCollection *t) {\n    DMESG(\"RefCollection %p r=%d size=%d\", t, t->refcnt, t->head.getLength());\n    t->head.print();\n}\n\nPXT_VTABLE_CTOR(RefAction) {}\n\n// fields[] contain captured locals\nvoid RefAction::destroy(RefAction *t) {\n    for (int i = 0; i < t->reflen; ++i) {\n        decr(t->fields[i]);\n        t->fields[i] = 0;\n    }\n}\n\nvoid RefAction::print(RefAction *t) {\n    DMESG(\"RefAction %p r=%d pc=%X size=%d (%d refs)\", t, t->refcnt,\n          (const uint8_t *)t->func - (const uint8_t *)bytecode, t->len, t->reflen);\n}\n\nvoid RefLocal::print(RefLocal *t) {\n    DMESG(\"RefLocal %p r=%d v=%d\", t, t->refcnt, t->v);\n}\n\nvoid RefLocal::destroy(RefLocal *) {}\n\nPXT_VTABLE_CTOR(RefLocal) {\n    v = 0;\n}\n\nPXT_VTABLE_CTOR(RefRefLocal) {\n    v = 0;\n}\n\nvoid RefRefLocal::print(RefRefLocal *t) {\n    DMESG(\"RefRefLocal %p r=%d v=%p\", t, t->refcnt, (void *)t->v);\n}\n\nvoid RefRefLocal::destroy(RefRefLocal *t) {\n    decr(t->v);\n}\n\nPXT_VTABLE_BEGIN(RefMap, 0, RefMapMarker)\nPXT_VTABLE_END\nRefMap::RefMap() : PXT_VTABLE_INIT(RefMap) {}\n\nvoid RefMap::destroy(RefMap *t) {\n    for (unsigned i = 0; i < t->values.getLength(); ++i) {\n        decr(t->values.get(i));\n        t->values.set(i, 0);\n    }\n    t->keys.destroy();\n    t->values.destroy();\n}\n\nint RefMap::findIdx(unsigned key) {\n    for (unsigned i = 0; i < keys.getLength(); ++i) {\n        if ((uintptr_t)keys.get(i) == key)\n            return i;\n    }\n    return -1;\n}\n\nvoid RefMap::print(RefMap *t) {\n    DMESG(\"RefMap %p r=%d size=%d\", t, t->refcnt, t->keys.getLength());\n}\n\n#ifdef PXT_MEMLEAK_DEBUG\nstd::set<TValue> allptrs;\nvoid debugMemLeaks() {\n    DMESG(\"LIVE POINTERS:\");\n    for (std::set<TValue>::iterator itr = allptrs.begin(); itr != allptrs.end(); itr++) {\n        anyPrint(*itr);\n    }\n    DMESG(\"LIVE POINTERS END.\");\n    dumpDmesg();\n}\n#else\nvoid debugMemLeaks() {}\n#endif\n\nvoid error(PXT_ERROR code, int subcode) {\n    DMESG(\"Error: %d [%d]\", code, subcode);\n    target_panic(42);\n}\n\nuint16_t *bytecode;\nTValue *globals;\n\nunsigned *allocate(ramint_t sz) {\n    unsigned *arr = new unsigned[sz];\n    memset(arr, 0, sz * sizeof(unsigned));\n    return arr;\n}\n\nvoid checkStr(bool cond, const char *msg) {\n    if (!cond) {\n        while (true) {\n            // uBit.display.scroll(msg, 100);\n            // uBit.sleep(100);\n        }\n    }\n}\n\nint templateHash() {\n    return ((int *)bytecode)[4];\n}\n\nint programHash() {\n    return ((int *)bytecode)[6];\n}\n\nint getNumGlobals() {\n    return bytecode[16];\n}\n\n#ifndef X86_64\nvoid exec_binary(unsigned *pc) {\n    // XXX re-enable once the calibration code is fixed and [editor/embedded.ts]\n    // properly prepends a call to [internal_main].\n    // ::touch_develop::internal_main();\n\n    // unique group for radio based on source hash\n    // ::touch_develop::micro_bit::radioDefaultGroup = programHash();\n\n    unsigned ver = *pc++;\n    checkStr(ver == 0x4209, \":( Bad runtime version\");\n\n    bytecode = *((uint16_t **)pc++); // the actual bytecode is here\n    globals = (TValue *)allocate(getNumGlobals());\n\n    // can be any valid address, best in RAM for speed\n    globals[0] = (TValue)&globals;\n\n    // just compare the first word\n    // TODO\n    checkStr(((uint32_t *)bytecode)[0] == 0x923B8E70 && (unsigned)templateHash() == *pc,\n             \":( Failed partial flash\");\n\n    uintptr_t startptr = (uintptr_t)bytecode;\n\n    startptr += 48; // header\n    startptr |= 1;  // Thumb state\n\n    initRuntime();\n\n    ((unsigned (*)())startptr)();\n\n#ifdef PXT_MEMLEAK_DEBUG\n    pxt::debugMemLeaks();\n#endif\n\n    pxt::releaseFiber();\n}\n\nvoid start() {\n    exec_binary((unsigned *)functionsAndBytecode);\n}\n#endif\n\n} // namespace pxt\n",
      "pxt.h": "#ifndef __PXT_H\n#define __PXT_H\n\n//#define DEBUG_MEMLEAKS 1\n\n#pragma GCC diagnostic ignored \"-Wunused-parameter\"\n\n#include \"pxtbase.h\"\n\nnamespace pxt {\n\nclass RefMImage : public RefObject {\n  public:\n    ImageData *img;\n\n    RefMImage(ImageData *d);\n    void makeWritable();\n    static void destroy(RefMImage *map);\n    static void print(RefMImage *map);\n};\n\n#define MSTR(s) ManagedString((s)->data, (s)->length)\n\nstatic inline String PSTR(ManagedString s) {\n    return mkString(s.toCharArray(), s.length());\n}\n\ntypedef uint32_t ImageLiteral_;\n\nstatic inline ImageData *imageBytes(ImageLiteral_ lit) {\n    return (ImageData*)ptrOfLiteral(lit);\n}\n\ntypedef RefMImage *Image;\n\nextern MicroBit uBit;\nextern MicroBitEvent lastEvent;\n\nMicroBitPin *getPin(int id);\n\nstatic inline int min_(int a, int b) {\n    if (a < b) return a;\n    else return b;\n}\n\nstatic inline int max_(int a, int b) {\n    if (a > b) return a;\n    else return b;\n}\n\n}\n\nusing namespace pxt;\n\n#define DEVICE_EVT_ANY 0\n\n#endif\n\n// vim: ts=2 sw=2 expandtab\n",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"The microbit core library\",\n    \"files\": [\n        \"README.md\",\n        \"pxt.cpp\",\n        \"pxt.h\",\n        \"pxtbase.h\",\n        \"pxtcore.h\",\n        \"dal.d.ts\",\n        \"enums.d.ts\",\n        \"shims.d.ts\",\n        \"pxt-core.d.ts\",\n        \"core.cpp\",\n        \"pxt-helpers.ts\",\n        \"helpers.ts\",\n        \"codal.cpp\",\n        \"images.cpp\",\n        \"basic.cpp\",\n        \"basic.ts\",\n        \"icons.ts\",\n        \"icons.jres\",\n        \"input.cpp\",\n        \"input.ts\",\n        \"gestures.jres\",\n        \"control.ts\",\n        \"control.cpp\",\n        \"game.ts\",\n        \"led.cpp\",\n        \"led.ts\",\n        \"music.ts\",\n        \"melodies.ts\",\n        \"pins.cpp\",\n        \"pins.ts\",\n        \"serial.cpp\",\n        \"serial.ts\",\n        \"buffer.cpp\",\n        \"pxtparts.json\",\n        \"parts/speaker.svg\",\n        \"parts/headphone.svg\"\n    ],\n    \"public\": true,\n    \"dependencies\": {},\n    \"yotta\": {\n        \"optionalConfig\": {\n            \"microbit-dal\": {\n                \"bluetooth\": {\n                    \"private_addressing\": 0,\n                    \"advertising_timeout\": 0,\n                    \"tx_power\": 6,\n                    \"dfu_service\": 1,\n                    \"event_service\": 1,\n                    \"device_info_service\": 1,\n                    \"eddystone_url\": 1,\n                    \"eddystone_uid\": 1,\n                    \"open\": 0,\n                    \"pairing_mode\": 1,\n                    \"whitelist\": 1,\n                    \"security_level\": \"SECURITY_MODE_ENCRYPTION_NO_MITM\"\n                }\n            }\n        }\n    },\n    \"targetVersions\": {\n        \"target\": \"1.1.26\"\n    }\n}",
      "pxtbase.h": "#ifndef __PXTBASE_H\n#define __PXTBASE_H\n\n//#define PXT_MEMLEAK_DEBUG 1\n\n#pragma GCC diagnostic ignored \"-Wunused-parameter\"\n#pragma GCC diagnostic ignored \"-Wformat\"\n#pragma GCC diagnostic ignored \"-Warray-bounds\"\n\n// needed for gcc6; not sure why\n#undef min\n#undef max\n\n#define NOLOG(...)                                                                                 \\\n    do {                                                                                           \\\n    } while (0)\n\n#define MEMDBG_ENABLED 0\n#define MEMDBG NOLOG\n\n#include \"pxtconfig.h\"\n\n#define intcheck(...) check(__VA_ARGS__)\n//#define intcheck(...) do {} while (0)\n\n#include <string.h>\n#include <stdint.h>\n#include <math.h>\n\n#include <new>\n\n#ifdef PXT_MEMLEAK_DEBUG\n#include <set>\n#endif\n\n#include \"pxtcore.h\"\n\n#ifndef PXT_VTABLE_SHIFT\n#define PXT_VTABLE_SHIFT 2\n#endif\n\n#define CONCAT_1(a, b) a##b\n#define CONCAT_0(a, b) CONCAT_1(a, b)\n#define STATIC_ASSERT(e) enum { CONCAT_0(_static_assert_, __LINE__) = 1 / ((e) ? 1 : 0) };\n\n#ifndef ramint_t\n// this type limits size of arrays\n#ifdef __linux__\n#define ramint_t uint32_t\n#else\n#define ramint_t uint16_t\n#endif\n#endif\n\n#if 0\ninline void *operator new(size_t, void *p) {\n    return p;\n}\ninline void *operator new[](size_t, void *p) {\n    return p;\n}\n#endif\n\nnamespace pxt {\n\ntemplate <typename T> inline const T &max(const T &a, const T &b) {\n    if (a < b)\n        return b;\n    return a;\n}\n\ntemplate <typename T> inline const T &min(const T &a, const T &b) {\n    if (a < b)\n        return a;\n    return b;\n}\n\ntemplate <typename T> inline void swap(T &a, T &b) {\n    T tmp = a;\n    a = b;\n    b = tmp;\n}\n\n//\n// Tagged values (assume 4 bytes for now, Cortex-M0)\n//\nstruct TValueStruct {};\ntypedef TValueStruct *TValue;\n\ntypedef TValue TNumber;\ntypedef TValue Action;\ntypedef TValue ImageLiteral;\n\n// To be implemented by the target\nextern \"C\" void target_panic(int error_code);\nextern \"C\" void target_reset();\nvoid sleep_ms(unsigned ms);\nvoid sleep_us(uint64_t us);\nvoid releaseFiber();\nint current_time_ms();\nvoid initRuntime();\nvoid sendSerial(const char *data, int len);\nint getSerialNumber();\nvoid registerWithDal(int id, int event, Action a, int flags = 16); // EVENT_LISTENER_DEFAULT_FLAGS\nvoid runInParallel(Action a);\nvoid runForever(Action a);\nvoid waitForEvent(int id, int event);\n//%\nunsigned afterProgramPage();\n//%\nvoid dumpDmesg();\n\n// also defined DMESG macro\n// end\n\n#define TAGGED_SPECIAL(n) (TValue)(void *)((n << 2) | 2)\n#define TAG_FALSE TAGGED_SPECIAL(2)\n#define TAG_TRUE TAGGED_SPECIAL(16)\n#define TAG_UNDEFINED (TValue)0\n#define TAG_NULL TAGGED_SPECIAL(1)\n#define TAG_NUMBER(n) (TNumber)(void *)((n << 1) | 1)\n\ninline bool isTagged(TValue v) {\n    return ((intptr_t)v & 3) || !v;\n}\n\ninline bool isNumber(TValue v) {\n    return (intptr_t)v & 1;\n}\n\ninline bool isSpecial(TValue v) {\n    return (intptr_t)v & 2;\n}\n\ninline bool bothNumbers(TValue a, TValue b) {\n    return (intptr_t)a & (intptr_t)b & 1;\n}\n\ninline int numValue(TValue n) {\n    return (intptr_t)n >> 1;\n}\n\n#ifdef PXT_BOX_DEBUG\ninline bool canBeTagged(int) {\n    return false;\n}\n#else\ninline bool canBeTagged(int v) {\n    return (v << 1) >> 1 == v;\n}\n#endif\n\ntypedef enum {\n    ERR_INVALID_BINARY_HEADER = 5,\n    ERR_OUT_OF_BOUNDS = 8,\n    ERR_REF_DELETED = 7,\n    ERR_SIZE = 9,\n} PXT_ERROR;\n\nextern const unsigned functionsAndBytecode[];\nextern TValue *globals;\nextern uint16_t *bytecode;\nclass RefRecord;\n\n// Utility functions\n\n//%\nTValue runAction3(Action a, TValue arg0, TValue arg1, TValue arg2);\n//%\nTValue runAction2(Action a, TValue arg0, TValue arg1);\n//%\nTValue runAction1(Action a, TValue arg0);\n//%\nTValue runAction0(Action a);\n//%\nAction mkAction(int reflen, int totallen, int startptr);\n// allocate [sz] words and clear them\n//%\nunsigned *allocate(ramint_t sz);\n//%\nint templateHash();\n//%\nint programHash();\n//%\nunsigned programSize();\n//%\nint getNumGlobals();\n//%\nRefRecord *mkClassInstance(int vtableOffset);\n//%\nvoid debugMemLeaks();\n//%\nvoid anyPrint(TValue v);\n\nint getConfig(int key, int defl = -1);\n\n//%\nint toInt(TNumber v);\n//%\nunsigned toUInt(TNumber v);\n//%\ndouble toDouble(TNumber v);\n//%\nfloat toFloat(TNumber v);\n//%\nTNumber fromDouble(double r);\n//%\nTNumber fromFloat(float r);\n\n//%\nTNumber fromInt(int v);\n//%\nTNumber fromUInt(unsigned v);\n//%\nTValue fromBool(bool v);\n//%\nbool eq_bool(TValue a, TValue b);\n//%\nbool eqq_bool(TValue a, TValue b);\n\nvoid error(PXT_ERROR code, int subcode = 0);\nvoid exec_binary(unsigned *pc);\nvoid start();\n\nstruct HandlerBinding {\n    HandlerBinding *next;\n    int source;\n    int value;\n    Action action;\n};\nHandlerBinding *findBinding(int source, int value);\nvoid setBinding(int source, int value, Action act);\n\n// The standard calling convention is:\n//   - when a pointer is loaded from a local/global/field etc, and incr()ed\n//     (in other words, its presence on stack counts as a reference)\n//   - after a function call, all pointers are popped off the stack and decr()ed\n// This does not apply to the RefRecord and st/ld(ref) methods - they unref()\n// the RefRecord* this.\n//%\nTValue incr(TValue e);\n//%\nvoid decr(TValue e);\n\nclass RefObject;\n\nstatic inline RefObject *incrRC(RefObject *r) {\n    return (RefObject *)incr((TValue)r);\n}\nstatic inline void decrRC(RefObject *r) {\n    decr((TValue)r);\n}\n\ninline void *ptrOfLiteral(int offset) {\n    return &bytecode[offset];\n}\n\n// Checks if object is ref-counted, and has a custom PXT vtable in front\n// TODO\ninline bool isRefCounted(TValue e) {\n    return !isTagged(e) && (*((unsigned *)e) & 1) == 1;\n}\n\ninline void check(int cond, PXT_ERROR code, int subcode = 0) {\n    if (!cond)\n        error(code, subcode);\n}\n\ninline void oops() {\n    target_panic(47);\n}\n\nclass RefObject;\n#ifdef PXT_MEMLEAK_DEBUG\nextern std::set<TValue> allptrs;\n#endif\n\ntypedef void (*RefObjectMethod)(RefObject *self);\ntypedef void *PVoid;\ntypedef void **PPVoid;\n\ntypedef void *Object_;\n\nconst PPVoid RefMapMarker = (PPVoid)(void *)43;\n\nstruct VTable {\n    uint16_t numbytes; // in the entire object, including the vtable pointer\n    uint16_t userdata;\n    PVoid *ifaceTable;\n    PVoid methods[2]; // we only use up to two methods here; pxt will generate more\n                      // refmask sits at &methods[nummethods]\n};\n\nconst int vtableShift = PXT_VTABLE_SHIFT;\n\n// A base abstract class for ref-counted objects.\nclass RefObject {\n  public:\n    uint16_t refcnt;\n    uint16_t vtable;\n\n    RefObject(uint16_t vt) {\n        refcnt = 3;\n        vtable = vt;\n#ifdef PXT_MEMLEAK_DEBUG\n        allptrs.insert((TValue)this);\n#endif\n    }\n\n    void destroyVT();\n    void printVT();\n\n    // Call to disable pointer tracking on the current instance (in destructor or some other hack)\n    inline void untrack() {\n#ifdef PXT_MEMLEAK_DEBUG\n        allptrs.erase((TValue)this);\n#endif\n    }\n\n    inline bool isReadOnly() { return refcnt == 0xffff; }\n\n    // Increment/decrement the ref-count. Decrementing to zero deletes the current object.\n    inline void ref() {\n        if (isReadOnly())\n            return;\n        check(refcnt > 1, ERR_REF_DELETED);\n        // DMESG(\"INCR \"); this->print();\n        refcnt += 2;\n    }\n\n    inline void unref() {\n        if (isReadOnly())\n            return;\n        check(refcnt > 1, ERR_REF_DELETED);\n        check((refcnt & 1), ERR_REF_DELETED);\n        // DMESG(\"DECR \"); this->print();\n        refcnt -= 2;\n        if (refcnt == 1) {\n            untrack();\n            destroyVT();\n        }\n    }\n};\n\nclass Segment {\n  private:\n    TValue *data;\n    ramint_t length;\n    ramint_t size;\n\n    // this just gives max value of ramint_t\n    static constexpr ramint_t MaxSize = (((1U << (8 * sizeof(ramint_t) - 1)) - 1) << 1) + 1;\n    static constexpr TValue DefaultValue = TAG_UNDEFINED;\n\n    static ramint_t growthFactor(ramint_t size);\n    void growByMin(ramint_t minSize);\n    void growBy(ramint_t newSize);\n    void ensure(ramint_t newSize);\n\n  public:\n    Segment() : data(nullptr), length(0), size(0){};\n\n    TValue get(unsigned i);\n    void set(unsigned i, TValue value);\n    void setRef(unsigned i, TValue value);\n\n    unsigned getLength() { return length; };\n    void setLength(unsigned newLength);\n    void resize(unsigned newLength) { setLength(newLength); }\n\n    void push(TValue value);\n    TValue pop();\n\n    TValue remove(unsigned i);\n    void insert(unsigned i, TValue value);\n\n    bool isValidIndex(unsigned i);\n\n    void destroy();\n\n    void print();\n};\n\n// A ref-counted collection of either primitive or ref-counted objects (String, Image,\n// user-defined record, another collection)\nclass RefCollection : public RefObject {\n  private:\n    Segment head;\n\n  public:\n    RefCollection();\n\n    static void destroy(RefCollection *coll);\n    static void print(RefCollection *coll);\n\n    unsigned length() { return head.getLength(); }\n    void setLength(unsigned newLength) { head.setLength(newLength); }\n\n    void push(TValue x);\n    TValue pop();\n    TValue getAt(int i);\n    void setAt(int i, TValue x);\n    // removes the element at index i and shifts the other elements left\n    TValue removeAt(int i);\n    // inserts the element at index i and moves the other elements right.\n    void insertAt(int i, TValue x);\n\n    int indexOf(TValue x, int start);\n    bool removeElement(TValue x);\n};\n\nclass RefMap : public RefObject {\n  public:\n    Segment keys;\n    Segment values;\n\n    RefMap();\n    static void destroy(RefMap *map);\n    static void print(RefMap *map);\n    int findIdx(unsigned key);\n};\n\n// A ref-counted, user-defined JS object.\nclass RefRecord : public RefObject {\n  public:\n    // The object is allocated, so that there is space at the end for the fields.\n    TValue fields[];\n\n    RefRecord(uint16_t v) : RefObject(v) {}\n\n    TValue ld(int idx);\n    TValue ldref(int idx);\n    void st(int idx, TValue v);\n    void stref(int idx, TValue v);\n};\n\n//%\nVTable *getVTable(RefObject *r);\n\n// these are needed when constructing vtables for user-defined classes\n//%\nvoid RefRecord_destroy(RefRecord *r);\n//%\nvoid RefRecord_print(RefRecord *r);\n\nclass RefAction;\ntypedef TValue (*ActionCB)(TValue *captured, TValue arg0, TValue arg1, TValue arg2);\n\n// Ref-counted function pointer.\nclass RefAction : public RefObject {\n  public:\n    // This is the same as for RefRecord.\n    uint8_t len;\n    uint8_t reflen;\n    ActionCB func; // The function pointer\n    // fields[] contain captured locals\n    TValue fields[];\n\n    static void destroy(RefAction *act);\n    static void print(RefAction *act);\n\n    RefAction();\n\n    inline void stCore(int idx, TValue v) {\n        // DMESG(\"ST [%d] = %d \", idx, v); this->print();\n        intcheck(0 <= idx && idx < len, ERR_OUT_OF_BOUNDS, 10);\n        intcheck(fields[idx] == 0, ERR_OUT_OF_BOUNDS, 11); // only one assignment permitted\n        fields[idx] = v;\n    }\n\n    inline TValue runCore(TValue arg0, TValue arg1,\n                          TValue arg2) // internal; use runAction*() functions\n    {\n        this->ref();\n        TValue r = this->func(&this->fields[0], arg0, arg1, arg2);\n        this->unref();\n        return r;\n    }\n};\n\n// These two are used to represent locals written from inside inline functions\nclass RefLocal : public RefObject {\n  public:\n    TValue v;\n    static void destroy(RefLocal *l);\n    static void print(RefLocal *l);\n    RefLocal();\n};\n\nclass RefRefLocal : public RefObject {\n  public:\n    TValue v;\n    static void destroy(RefRefLocal *l);\n    static void print(RefRefLocal *l);\n    RefRefLocal();\n};\n\ntypedef int color;\n\n// note: this is hardcoded in PXT (hexfile.ts)\n\n#define PXT_REF_TAG_STRING 1\n#define PXT_REF_TAG_BUFFER 2\n#define PXT_REF_TAG_IMAGE 3\n#define PXT_REF_TAG_NUMBER 32\n#define PXT_REF_TAG_ACTION 33\n\nclass BoxedNumber : public RefObject {\n  public:\n    double num;\n    BoxedNumber() : RefObject(PXT_REF_TAG_NUMBER) {}\n} __attribute__((packed));\n\nclass BoxedString : public RefObject {\n  public:\n    uint16_t length;\n    char data[0];\n    BoxedString() : RefObject(PXT_REF_TAG_STRING) {}\n};\n\nclass BoxedBuffer : public RefObject {\n  public:\n    // data needs to be word-aligned, so we use 32 bits for length\n    int length;\n    uint8_t data[0];\n    BoxedBuffer() : RefObject(PXT_REF_TAG_BUFFER) {}\n};\n\n\n// the first byte of data indicates the format - currently 0xE1 or 0xE4 to 1 or 4 bit bitmaps\n// second byte indicates width in pixels\n// third byte indicates the height (which should also match the size of the buffer)\n// just like ordinary buffers, these can be layed out in flash\nclass RefImage : public RefObject {\n    uintptr_t _buffer;\n    uint8_t _data[0];\n\n  public:\n    RefImage(BoxedBuffer *buf);\n    RefImage(uint32_t sz);\n\n    bool hasBuffer() { return !(_buffer & 1); }\n    BoxedBuffer *buffer() { return hasBuffer() ? (BoxedBuffer *)_buffer : NULL; }\n    void setBuffer(BoxedBuffer *b);\n    bool isDirty() { return (_buffer & 3) == 3; }\n    void clearDirty() { if (isDirty()) _buffer &= ~2; }\n\n    uint8_t *data() { return hasBuffer() ? buffer()->data : _data; }\n    int length() { return hasBuffer() ? buffer()->length : (_buffer >> 2); }\n    int pixLength() { return length() - 4; }\n\n    int height();\n    int width();\n    int byteHeight();\n    int wordHeight();\n    int bpp();\n\n    bool hasPadding() { return (height() & 0x1f) != 0; }\n\n    uint8_t *pix() { return data() + 4; }\n    uint8_t *pix(int x, int y);\n    uint8_t fillMask(color c);\n    bool inRange(int x, int y);\n    void clamp(int *x, int *y);\n    void makeWritable();\n\n    static void destroy(RefImage *t);\n    static void print(RefImage *t);\n};\n\nRefImage *mkImage(int w, int h, int bpp);\n\n\ntypedef BoxedBuffer *Buffer;\ntypedef BoxedString *String;\ntypedef RefImage *Image_;\n\n// keep in sync with github/pxt/pxtsim/libgeneric.ts\nenum class NumberFormat {\n    Int8LE = 1,\n    UInt8LE,\n    Int16LE,\n    UInt16LE,\n    Int32LE,\n    Int8BE,\n    UInt8BE,\n    Int16BE,\n    UInt16BE,\n    Int32BE,\n\n    UInt32LE,\n    UInt32BE,\n    Float32LE,\n    Float64LE,\n    Float32BE,\n    Float64BE,\n};\n\n// data can be NULL in both cases\nString mkString(const char *data, int len = -1);\nBuffer mkBuffer(const uint8_t *data, int len);\n\nTNumber getNumberCore(uint8_t *buf, int size, NumberFormat format);\nvoid setNumberCore(uint8_t *buf, int size, NumberFormat format, TNumber value);\n\nTNumber mkNaN();\n\nvoid seedRandom(unsigned seed);\n// max is inclusive\nunsigned getRandom(unsigned max);\n\nextern const VTable string_vt;\nextern const VTable image_vt;\nextern const VTable buffer_vt;\nextern const VTable number_vt;\nextern const VTable RefAction_vtable;\n\nenum class ValType {\n    Undefined,\n    Boolean,\n    Number,\n    String,\n    Object,\n    Function,\n};\n\nValType valType(TValue v);\n} // namespace pxt\n\n#define PXT_DEF_STRING(name, val)                                                                  \\\n    static const char name[] __attribute__((aligned(4))) = \"\\xff\\xff\\x01\\x00\" val;\n\nusing namespace pxt;\n\nnamespace pins {\nBuffer createBuffer(int size);\n}\n\nnamespace String_ {\nint compare(String s, String that);\n}\n\n// The ARM Thumb generator in the JavaScript code is parsing\n// the hex file and looks for the magic numbers as present here.\n//\n// Then it fetches function pointer addresses from there.\n//\n// The vtable pointers are there, so that the ::emptyData for various types\n// can be patched with the right vtable.\n//\n#define PXT_SHIMS_BEGIN                                                                            \\\n    namespace pxt {                                                                                \\\n    const unsigned functionsAndBytecode[]                                                          \\\n        __attribute__((aligned(0x20))) = {0x08010801, 0x42424242, 0x08010801, 0x8de9d83e,\n\n#define PXT_SHIMS_END                                                                              \\\n    }                                                                                              \\\n    ;                                                                                              \\\n    }\n\n#ifndef X86_64\n#pragma GCC diagnostic ignored \"-Wpmf-conversions\"\n#endif\n\n#define PXT_VTABLE_TO_INT(vt) ((uintptr_t)(vt) >> vtableShift)\n#define PXT_VTABLE_BEGIN(classname, flags, iface)                                                  \\\n    const VTable classname##_vtable __attribute__((aligned(1 << vtableShift))) = {                 \\\n        sizeof(classname), flags, iface, {(void *)&classname::destroy, (void *)&classname::print,\n\n#define PXT_VTABLE_END                                                                             \\\n    }                                                                                              \\\n    }                                                                                              \\\n    ;\n\n#define PXT_VTABLE_INIT(classname) RefObject(PXT_VTABLE_TO_INT(&classname##_vtable))\n\n#define PXT_VTABLE_CTOR(classname)                                                                 \\\n    PXT_VTABLE_BEGIN(classname, 0, 0)                                                              \\\n    PXT_VTABLE_END classname::classname() : PXT_VTABLE_INIT(classname)\n\n#define PXT_MAIN                                                                                   \\\n    int main() {                                                                                   \\\n        pxt::start();                                                                              \\\n        return 0;                                                                                  \\\n    }\n\n#define PXT_FNPTR(x) (unsigned)(void *)(x)\n\n#define PXT_ABI(...)\n\n#define JOIN(a, b) a##b\n/// Defines getClassName() function to fetch the singleton\n#define SINGLETON(ClassName)                                                                       \\\n    static ClassName *JOIN(inst, ClassName);                                                       \\\n    ClassName *JOIN(get, ClassName)() {                                                            \\\n        if (!JOIN(inst, ClassName))                                                                \\\n            JOIN(inst, ClassName) = new ClassName();                                               \\\n        return JOIN(inst, ClassName);                                                              \\\n    }\n\n#endif\n",
      "pxtcore.h": "#ifndef __PXTCORE_H\n#define __PXTCORE_H\n\n#include \"MicroBit.h\"\n#include \"MicroBitImage.h\"\n#include \"ManagedString.h\"\n#include \"ManagedType.h\"\n\nnamespace pxt {\nvoid debuglog(const char *format, ...);\n}\n\n\n#define DMESG NOLOG\n\n#endif\n",
      "pxtparts.json": "{ \n     \"buttonpair\": {\n        \"simulationBehavior\": \"buttonpair\",\n        \"visual\": {\n            \"builtIn\": \"buttonpair\",\n            \"width\": 75,\n            \"height\": 45,\n            \"pinDistance\": 15,\n            \"pinLocations\": [\n                {\"x\": 0, \"y\": 0},\n                {\"x\": 30, \"y\": 45},\n                {\"x\": 45, \"y\": 0},\n                {\"x\": 75, \"y\": 45}\n            ]\n        },\n        \"numberOfPins\": 4,\n        \"pinDefinitions\": [\n            {\"target\": \"P14\", \"style\": \"male\", \"orientation\": \"-Z\"},\n            {\"target\": \"ground\", \"style\": \"male\", \"orientation\": \"-Z\"},\n            {\"target\": \"P15\", \"style\": \"male\", \"orientation\": \"-Z\"},\n            {\"target\": \"ground\", \"style\": \"male\", \"orientation\": \"-Z\"}\n        ],\n        \"instantiation\": {\n            \"kind\": \"singleton\"\n        },\n        \"assembly\": [\n            {\"part\": true},\n            {\"pinIndices\": [0, 1]},\n            {\"pinIndices\": [2, 3]}\n        ]\n    },\n    \"microservo\": {\n        \"simulationBehavior\": \"microservo\",\n        \"visual\": {\n            \"builtIn\": \"microservo\",\n            \"width\": 74.85,\n            \"height\": 200,\n            \"pinDistance\": 10,\n            \"pinLocations\": [\n                {\"x\": 30, \"y\": 5},\n                {\"x\": 37, \"y\": 5},\n                {\"x\": 45, \"y\": 5}\n            ]\n        },\n        \"numberOfPins\": 3,\n        \"pinDefinitions\": [\n            {\"target\": {\"pinInstantiationIdx\": 0}, \"style\": \"croc\", \"orientation\": \"+Z\"},\n            {\"target\": \"threeVolt\", \"style\": \"croc\", \"orientation\": \"+Z\"},\n            {\"target\": \"ground\", \"style\": \"croc\", \"orientation\": \"+Z\"}\n        ],\n        \"instantiation\": {\n            \"kind\": \"function\",\n            \"fullyQualifiedName\": \"pins.servoWritePin\",\n            \"argumentRoles\": [\n                {\"pinInstantiationIdx\": 0, \"partParameter\": \"name\"}\n            ]\n        },\n        \"assembly\": [\n            {\"part\": true, \"pinIndices\": [2]},\n            {\"pinIndices\": [0, 1]}\n        ]\n    },\n    \"neopixel\": {\n        \"simulationBehavior\": \"neopixel\",\n        \"visual\": {\n            \"builtIn\": \"neopixel\",\n            \"width\": 58,\n            \"height\": 113,\n            \"pinDistance\": 9,\n            \"pinLocations\": [\n                {\"x\": 10, \"y\": 0},\n                {\"x\": 19, \"y\": 0},\n                {\"x\": 28, \"y\": 0}\n            ]\n        },\n        \"numberOfPins\": 3,\n        \"pinDefinitions\": [\n            {\"target\": {\"pinInstantiationIdx\": 0}, \"style\": \"solder\", \"orientation\": \"+Z\"},\n            {\"target\": \"threeVolt\", \"style\": \"solder\", \"orientation\": \"+Z\"},\n            {\"target\": \"ground\", \"style\": \"solder\", \"orientation\": \"+Z\"}\n        ],\n        \"instantiation\": {\n            \"kind\": \"function\",\n            \"fullyQualifiedName\": \"neopixel.create\",\n            \"argumentRoles\": [\n                {\"pinInstantiationIdx\": 0, \"partParameter\": \"pin\"},\n                {\"partParameter\": \"mode\"}\n            ]\n        },\n        \"assembly\": [\n            {\"part\": true, \"pinIndices\": [2]},\n            {\"pinIndices\": [0, 1]}\n        ]\n    },\n    \"ledmatrix\": {\n        \"visual\": {\n            \"builtIn\": \"ledmatrix\",\n            \"width\": 105,\n            \"height\": 105,\n            \"pinDistance\": 15,\n            \"pinLocations\": [\n                {\"x\": 0, \"y\": 0},\n                {\"x\": 15, \"y\": 0},\n                {\"x\": 30, \"y\": 0},\n                {\"x\": 45, \"y\": 0},\n                {\"x\": 105, \"y\": 105},\n                {\"x\": 0, \"y\": 105},\n                {\"x\": 15, \"y\": 105},\n                {\"x\": 30, \"y\": 105},\n                {\"x\": 45, \"y\": 105},\n                {\"x\": 60, \"y\": 0}\n            ]\n        },\n        \"simulationBehavior\": \"ledmatrix\",\n        \"numberOfPins\": 10,\n        \"instantiation\": {\"kind\": \"singleton\"},\n        \"pinDefinitions\": [\n            {\"target\": \"P6\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 0},\n            {\"target\": \"P7\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 0},\n            {\"target\": \"P8\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 0},\n            {\"target\": \"P9\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 0},\n            {\"target\": \"P10\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 0},\n            {\"target\": \"P12\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 1},\n            {\"target\": \"P13\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 1},\n            {\"target\": \"P16\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 1},\n            {\"target\": \"P19\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 1},\n            {\"target\": \"P20\", \"style\": \"male\", \"orientation\": \"-Z\", \"colorGroup\": 1}\n        ],\n        \"assembly\": [\n            {\"part\": true},\n            {\"pinIndices\": [0, 1, 2, 3, 4]},\n            {\"pinIndices\": [5, 6, 7, 8, 9]}\n        ]\n    },\n    \"headphone\": {\n        \"numberOfPins\": 2,\n        \"visual\": {\n            \"image\": \"parts/headphone.svg\",\n            \"width\": 142,\n            \"height\": 180,\n            \"pinDistance\": 20,\n            \"pinLocations\": [\n                {\"x\": 17, \"y\": 11},\n                {\"x\": 55, \"y\": 50}\n            ]\n        },\n        \"pinDefinitions\": [\n            {\"target\": \"P0\", \"style\": \"croc\", \"orientation\": \"Y\"},\n            {\"target\": \"ground\", \"style\": \"croc\", \"orientation\": \"Y\"}\n        ],\n        \"instantiation\": {\"kind\": \"singleton\"},\n        \"assembly\": [\n            {\"part\": true, \"pinIndices\": [0]},\n            {\"pinIndices\": [1]}\n        ]\n    },\n    \"speaker\": {\n        \"numberOfPins\": 2,\n        \"visual\": {\n            \"image\": \"parts/speaker.svg\",\n            \"width\": 500,\n            \"height\": 500,\n            \"pinDistance\": 70,\n            \"pinLocations\": [\n                {\"x\": 180, \"y\": 135},\n                {\"x\": 320, \"y\": 135}\n            ]\n        },\n        \"pinDefinitions\": [\n            {\"target\": \"P0\", \"style\": \"male\", \"orientation\": \"-Z\"},\n            {\"target\": \"ground\", \"style\": \"male\", \"orientation\": \"-Z\"}\n        ],\n        \"instantiation\": {\"kind\": \"singleton\"},\n        \"assembly\": [\n            {\"part\": true, \"pinIndices\": [0]},\n            {\"pinIndices\": [1]}\n        ]\n    }\n}",
      "serial.cpp": "#include \"pxt.h\"\n\n#define MICROBIT_SERIAL_READ_BUFFER_LENGTH 64\n\nenum SerialPin {\n    P0 = MICROBIT_ID_IO_P0,\n    P1 = MICROBIT_ID_IO_P1,\n    P2 = MICROBIT_ID_IO_P2,\n    P8 = MICROBIT_ID_IO_P8,\n    P12 = MICROBIT_ID_IO_P12,\n    P13 = MICROBIT_ID_IO_P13,\n    P14 = MICROBIT_ID_IO_P14,\n    P15 = MICROBIT_ID_IO_P15,\n    P16 = MICROBIT_ID_IO_P16\n};\n\nenum BaudRate {\n  //% block=115200\n  BaudRate115200 = 115200,\n  //% block=57600\n  BaudRate57600 = 57600,\n  //% block=38400\n  BaudRate38400 = 38400,\n  //% block=31250\n  BaudRate31250 = 31250,\n  //% block=28800\n  BaudRate28800 = 28800,\n  //% block=19200\n  BaudRate19200 = 19200,\n  //% block=14400\n  BaudRate14400 = 14400,\n  //% block=9600\n  BaudRate9600 = 9600,\n  //% block=4800\n  BaudRate4800 = 4800,\n  //% block=2400\n  BaudRate2400 = 2400,\n  //% block=1200\n  BaudRate1200 = 1200,\n  //% block=300\n  BaudRate300 = 300\n};\n\nenum Delimiters {\n    //% block=\"new line\"\n    NewLine = 1,\n    //% block=\",\"\n    Comma = 2,\n    //% block=\"$\"\n    Dollar = 3,\n    //% block=\":\"\n    Colon = 4,\n    //% block=\".\"\n    Fullstop = 5,\n    //% block=\"#\"\n    Hash = 6,\n};\n\n//% weight=2 color=#002050 icon=\"\\uf287\"\n//% advanced=true\nnamespace serial {\n    // note that at least one // followed by % is needed per declaration!\n\n    /**\n     * Read a line of text from the serial port and return the buffer when the delimiter is met.\n     * @param delimiter text delimiter that separates each text chunk\n     */\n    //% help=serial/read-until\n    //% blockId=serial_read_until block=\"serial|read until %delimiter=serial_delimiter_conv\"\n    //% weight=19\n    String readUntil(String delimiter) {\n      return PSTR(uBit.serial.readUntil(MSTR(delimiter)));\n    }\n\n    /**\n    * Read the buffered received data as a string\n    */\n    //% help=serial/read-string\n    //% blockId=serial_read_buffer block=\"serial|read string\"\n    //% weight=18\n    String readString() {\n      int n = uBit.serial.getRxBufferSize();\n      if (n == 0) return mkString(\"\", 0);\n      return PSTR(uBit.serial.read(n, MicroBitSerialMode::ASYNC));\n    }\n\n    /**\n    * Register an event to be fired when one of the delimiter is matched.\n    * @param delimiters the characters to match received characters against.\n    */\n    //% help=serial/on-data-received\n    //% weight=18 blockId=serial_on_data_received block=\"serial|on data received %delimiters=serial_delimiter_conv\"\n    void onDataReceived(String delimiters, Action body) {\n      uBit.serial.eventOn(MSTR(delimiters));\n      registerWithDal(MICROBIT_ID_SERIAL, MICROBIT_SERIAL_EVT_DELIM_MATCH, body);\n      // lazy initialization of serial buffers\n      uBit.serial.read(MicroBitSerialMode::ASYNC);\n    }\n\n    /**\n     * Send a piece of text through the serial connection.\n     */\n    //% help=serial/write-string\n    //% weight=87 blockGap=8\n    //% blockId=serial_writestring block=\"serial|write string %text\"\n    void writeString(String text) {\n      if (!text) return;\n\n      uBit.serial.send(MSTR(text));\n    }\n\n    /**\n    * Send a buffer through serial connection\n    */\n    //% blockId=serial_writebuffer block=\"serial|write buffer %buffer\"\n    //% help=serial/write-buffer advanced=true weight=6\n    void writeBuffer(Buffer buffer) {\n      if (!buffer) return;\n\n      uBit.serial.send(buffer->data, buffer->length);\n    }\n\n    /**\n    * Read multiple characters from the receive buffer. Pause until enough characters are present.\n    * @param length default buffer length, eg: 64\n    */\n    //% blockId=serial_readbuffer block=\"serial|read buffer %length\"\n    //% help=serial/read-buffer advanced=true weight=5\n    Buffer readBuffer(int length) {\n      if (length <= 0)\n        length = MICROBIT_SERIAL_READ_BUFFER_LENGTH;\n        \n      auto buf = mkBuffer(NULL, length);\n      int read = uBit.serial.read(buf->data, buf->length);\n      if (read != length) {\n        auto prev = buf;\n        buf = mkBuffer(buf->data, read);\n        decrRC(prev);\n      }\n\n      return buf;\n    }\n\n    /**\n    * Set the serial input and output to use pins instead of the USB connection.\n    * @param tx the new transmission pin, eg: SerialPin.P0\n    * @param rx the new reception pin, eg: SerialPin.P1\n    * @param rate the new baud rate. eg: 115200\n    */\n    //% weight=10\n    //% help=serial/redirect\n    //% blockId=serial_redirect block=\"serial|redirect to|TX %tx|RX %rx|at baud rate %rate\"\n    //% blockExternalInputs=1\n    //% tx.fieldEditor=\"gridpicker\" tx.fieldOptions.columns=3\n    //% tx.fieldOptions.tooltips=\"false\"\n    //% rx.fieldEditor=\"gridpicker\" rx.fieldOptions.columns=3\n    //% rx.fieldOptions.tooltips=\"false\"\n    //% blockGap=8\n    void redirect(SerialPin tx, SerialPin rx, BaudRate rate) {\n      MicroBitPin* txp = getPin(tx); if (!txp) return;\n      MicroBitPin* rxp = getPin(rx); if (!rxp) return;\n\n      uBit.serial.redirect(txp->name, rxp->name);\n      uBit.serial.baud((int)rate);\n    }\n\n    /**\n    * Direct the serial input and output to use the USB connection.\n    */\n    //% weight=9 help=serial/redirect-to-usb\n    //% blockId=serial_redirect_to_usb block=\"serial|redirect to USB\"    \n    void redirectToUSB() {\n      uBit.serial.redirect(USBTX, USBRX);\n      uBit.serial.baud(115200);\n    }\n}\n",
      "serial.ts": "/**\n * Reading and writing data over a serial connection.\n */\n//% weight=2 color=#002050 icon=\"\\uf287\"\n//% advanced=true\nnamespace serial {\n    /**\n     * Print a line of text to the serial port  \n     * @param value to send over serial\n     */\n    //% weight=90\n    //% help=serial/write-line blockGap=8\n    //% blockId=serial_writeline block=\"serial|write line %text\"\n    export function writeLine(text: string): void {\n        if (!text) text = \"\";\n        // pad data to the 32 byte boundary\n        // to ensure apps receive the packet\n        let r = (32 - (text.length + 2) % 32) % 32;\n        serial.writeString(text);\n        for (let i = 0; i < r; ++i)\n            serial.writeString(\" \");\n        serial.writeString(\"\\r\\n\");\n    }\n\n    /**\n     * Print a numeric value to the serial port\n     */\n    //% help=serial/write-number\n    //% weight=89 blockGap=8\n    //% blockId=serial_writenumber block=\"serial|write number %value\"\n    export function writeNumber(value: number): void {\n        writeString(value.toString());\n    }\n\n    /**\n     * Print an array of numeric values as CSV to the serial port\n     */\n    //% help=serial/write-numbers\n    //% weight=86\n    //% blockId=serial_writenumbers block=\"serial|write numbers %values\"\n    export function writeNumbers(values: number[]): void {\n        if (!values) return;\n        for(let i = 0; i < values.length; ++i) {\n            if (i > 0) writeString(\",\");\n            writeNumber(values[i]);\n        }\n        writeLine(\"\")\n    }\n\n    /**\n     * Write a name:value pair as a line to the serial port.\n     * @param name name of the value stream, eg: x\n     * @param value to write\n     */\n    //% weight=88 blockGap=8\n    //% help=serial/write-value\n    //% blockId=serial_writevalue block=\"serial|write value %name|= %value\"\n    export function writeValue(name: string, value: number): void {\n        writeLine(name + \":\" + value);\n    }\n\n    /**\n     * Read a line of text from the serial port.\n     */\n    //% help=serial/read-line\n    //% blockId=serial_read_line block=\"serial|read line\"\n    //% weight=20 blockGap=8\n    export function readLine(): string {\n        return serial.readUntil(delimiters(Delimiters.NewLine));\n    }\n\n    /**\n     * Return the corresponding delimiter string\n     */\n    //% blockId=\"serial_delimiter_conv\" block=\"%del\"\n    //% weight=1 blockHidden=true\n    export function delimiters(del: Delimiters): string {\n        // even though it might not look like, this is more\n        // (memory) efficient than the C++ implementation, because the\n        // strings are statically allocated and take no RAM \n        switch (del) {\n            case Delimiters.NewLine: return \"\\n\"\n            case Delimiters.Comma: return \",\"\n            case Delimiters.Dollar: return \"$\"\n            case Delimiters.Colon: return \":\"\n            case Delimiters.Fullstop: return \".\"\n            case Delimiters.Hash: return \"#\"\n            default: return \"\\n\"\n        }\n    }\n}\n",
      "shims.d.ts": "// Auto-generated. Do not edit.\n\n\n    /**\n     * Creation, manipulation and display of LED images.\n     */\n    //% color=#5C2D91 weight=31 icon=\"\\uf03e\"\n    //% advanced=true\ndeclare namespace images {\n\n    /**\n     * Creates an image that fits on the LED screen.\n     */\n    //% weight=75 help=images/create-image\n    //% blockId=device_build_image block=\"create image\"\n    //% parts=\"ledmatrix\" imageLiteral=1 shim=images::createImage\n    function createImage(leds: string): Image;\n\n    /**\n     * Creates an image with 2 frames.\n     */\n    //% weight=74 help=images/create-big-image\n    //% blockId=device_build_big_image block=\"create big image\" imageLiteral=2\n    //% parts=\"ledmatrix\" shim=images::createBigImage\n    function createBigImage(leds: string): Image;\n}\n\n\ndeclare interface Image {\n    /**\n     * Plots the image at a given column to the screen\n     */\n    //% help=images/plot-image\n    //% parts=\"ledmatrix\" xOffset.defl=0 shim=ImageMethods::plotImage\n    plotImage(xOffset?: int32): void;\n\n    /**\n     * Shows an frame from the image at offset ``x offset``.\n     * @param xOffset column index to start displaying the image\n     */\n    //% help=images/show-image weight=80 blockNamespace=images\n    //% blockId=device_show_image_offset block=\"show image %sprite|at offset %offset\" blockGap=8\n    //% parts=\"ledmatrix\" async interval.defl=400 shim=ImageMethods::showImage\n    showImage(xOffset: int32, interval?: int32): void;\n\n    /**\n     * Draws the ``index``-th frame of the image on the screen.\n     * @param xOffset column index to start displaying the image\n     */\n    //% help=images/plot-frame weight=80\n    //% parts=\"ledmatrix\" shim=ImageMethods::plotFrame\n    plotFrame(xOffset: int32): void;\n\n    /**\n     * Scrolls an image .\n     * @param frameOffset x offset moved on each animation step, eg: 1, 2, 5\n     * @param interval time between each animation step in milli seconds, eg: 200\n     */\n    //% help=images/scroll-image weight=79 async blockNamespace=images\n    //% blockId=device_scroll_image\n    //% block=\"scroll image %sprite|with offset %frameoffset|and interval (ms) %delay\"\n    //% blockGap=8 parts=\"ledmatrix\" shim=ImageMethods::scrollImage\n    scrollImage(frameOffset: int32, interval: int32): void;\n\n    /**\n     * Sets all pixels off.\n     */\n    //% help=images/clear\n    //% parts=\"ledmatrix\" shim=ImageMethods::clear\n    clear(): void;\n\n    /**\n     * Sets a specific pixel brightness at a given position\n     */\n    //%\n    //% parts=\"ledmatrix\" shim=ImageMethods::setPixelBrightness\n    setPixelBrightness(x: int32, y: int32, value: int32): void;\n\n    /**\n     * Gets the pixel brightness ([0..255]) at a given position\n     */\n    //%\n    //% parts=\"ledmatrix\" shim=ImageMethods::pixelBrightness\n    pixelBrightness(x: int32, y: int32): int32;\n\n    /**\n     * Gets the width in columns\n     */\n    //% help=functions/width shim=ImageMethods::width\n    width(): int32;\n\n    /**\n     * Gets the height in rows (always 5)\n     */\n    //% shim=ImageMethods::height\n    height(): int32;\n\n    /**\n     * Set a pixel state at position ``(x,y)``\n     * @param x TODO\n     * @param y TODO\n     * @param value TODO\n     */\n    //% help=images/set-pixel\n    //% parts=\"ledmatrix\" shim=ImageMethods::setPixel\n    setPixel(x: int32, y: int32, value: boolean): void;\n\n    /**\n     * Get the pixel state at position ``(x,y)``\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=images/pixel\n    //% parts=\"ledmatrix\" shim=ImageMethods::pixel\n    pixel(x: int32, y: int32): boolean;\n\n    /**\n     * Shows a particular frame of the image strip.\n     * @param frame TODO\n     */\n    //% weight=70 help=images/show-frame\n    //% parts=\"ledmatrix\" interval.defl=400 shim=ImageMethods::showFrame\n    showFrame(frame: int32, interval?: int32): void;\n}\n\n\n    /**\n     * Provides access to basic micro:bit functionality.\n     */\n    //% color=#0078D7 weight=100 icon=\"\\uf00a\"\ndeclare namespace basic {\n\n    /**\n     * Draws an image on the LED screen.\n     * @param leds the pattern of LED to turn on/off\n     * @param interval time in milliseconds to pause after drawing\n     */\n    //% help=basic/show-leds\n    //% weight=95 blockGap=8\n    //% imageLiteral=1 async\n    //% blockId=device_show_leds\n    //% block=\"show leds\" icon=\"\\uf00a\"\n    //% parts=\"ledmatrix\" interval.defl=400 shim=basic::showLeds\n    function showLeds(leds: string, interval?: int32): void;\n\n    /**\n     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.\n     * @param text the text to scroll on the screen, eg: \"Hello!\"\n     * @param interval how fast to shift characters; eg: 150, 100, 200, -100\n     */\n    //% help=basic/show-string\n    //% weight=87 blockGap=8\n    //% block=\"show|string %text\"\n    //% async\n    //% blockId=device_print_message\n    //% parts=\"ledmatrix\" interval.defl=150 shim=basic::showString\n    function showString(text: string, interval?: int32): void;\n\n    /**\n     * Turn off all LEDs\n     */\n    //% help=basic/clear-screen weight=79\n    //% blockId=device_clear_display block=\"clear screen\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true shim=basic::clearScreen\n    function clearScreen(): void;\n\n    /**\n     * Shows a sequence of LED screens as an animation.\n     * @param leds pattern of LEDs to turn on/off\n     * @param interval time in milliseconds between each redraw\n     */\n    //% help=basic/show-animation imageLiteral=1 async\n    //% parts=\"ledmatrix\" interval.defl=400 shim=basic::showAnimation\n    function showAnimation(leds: string, interval?: int32): void;\n\n    /**\n     * Draws an image on the LED screen.\n     * @param leds pattern of LEDs to turn on/off\n     */\n    //% help=basic/plot-leds weight=80\n    //% parts=\"ledmatrix\" imageLiteral=1 shim=basic::plotLeds\n    function plotLeds(leds: string): void;\n\n    /**\n     * Repeats the code forever in the background. On each iteration, allows other codes to run.\n     * @param body code to execute\n     */\n    //% help=basic/forever weight=55 blockGap=8 blockAllowMultiple=1 afterOnStart=true\n    //% blockId=device_forever block=\"forever\" icon=\"\\uf01e\" shim=basic::forever\n    function forever(a: () => void): void;\n\n    /**\n     * Pause for the specified time in milliseconds\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\n     */\n    //% help=basic/pause weight=54\n    //% async block=\"pause (ms) %pause\"\n    //% blockId=device_pause icon=\"\\uf110\" shim=basic::pause\n    function pause(ms: int32): void;\n}\n\n\n\n    //% color=#B4009E weight=99 icon=\"\\uf192\"\ndeclare namespace input {\n\n    /**\n     * Do something when a button (A, B or both A+B) is pushed down and released again.\n     * @param button the button that needs to be pressed\n     * @param body code to run when event is raised\n     */\n    //% help=input/on-button-pressed weight=85 blockGap=8\n    //% blockId=device_button_event block=\"on button|%NAME|pressed\"\n    //% parts=\"buttonpair\" shim=input::onButtonPressed\n    function onButtonPressed(button: Button, body: () => void): void;\n\n    /**\n     * Do something when when a gesture is done (like shaking the micro:bit).\n     * @param gesture the type of gesture to track, eg: Gesture.Shake\n     * @param body code to run when gesture is raised\n     */\n    //% help=input/on-gesture weight=84 blockGap=8\n    //% blockId=device_gesture_event block=\"on |%NAME\"\n    //% parts=\"accelerometer\"\n    //% NAME.fieldEditor=\"gestures\" NAME.fieldOptions.columns=4 shim=input::onGesture\n    function onGesture(gesture: Gesture, body: () => void): void;\n\n    /**\n     * Do something when a pin is touched and released again (while also touching the GND pin).\n     * @param name the pin that needs to be pressed, eg: TouchPin.P0\n     * @param body the code to run when the pin is pressed\n     */\n    //% help=input/on-pin-pressed weight=83\n    //% blockId=device_pin_event block=\"on pin %name|pressed\" shim=input::onPinPressed\n    function onPinPressed(name: TouchPin, body: () => void): void;\n\n    /**\n     * Do something when a pin is released.\n     * @param name the pin that needs to be released, eg: TouchPin.P0\n     * @param body the code to run when the pin is released\n     */\n    //% help=input/on-pin-released weight=6 blockGap=8\n    //% blockId=device_pin_released block=\"on pin %NAME|released\"\n    //% advanced=true shim=input::onPinReleased\n    function onPinReleased(name: TouchPin, body: () => void): void;\n\n    /**\n     * Get the button state (pressed or not) for ``A`` and ``B``.\n     * @param button the button to query the request, eg: Button.A\n     */\n    //% help=input/button-is-pressed weight=60\n    //% block=\"button|%NAME|is pressed\"\n    //% blockId=device_get_button2\n    //% icon=\"\\uf192\" blockGap=8\n    //% parts=\"buttonpair\" shim=input::buttonIsPressed\n    function buttonIsPressed(button: Button): boolean;\n\n    /**\n     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.\n     * @param name pin used to detect the touch, eg: TouchPin.P0\n     */\n    //% help=input/pin-is-pressed weight=58\n    //% blockId=\"device_pin_is_pressed\" block=\"pin %NAME|is pressed\"\n    //% blockGap=8 shim=input::pinIsPressed\n    function pinIsPressed(name: TouchPin): boolean;\n\n    /**\n     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up, x=0, y=0 and z=-1024)\n     * @param dimension TODO\n     */\n    //% help=input/acceleration weight=58\n    //% blockId=device_acceleration block=\"acceleration (mg)|%NAME\" blockGap=8\n    //% parts=\"accelerometer\" shim=input::acceleration\n    function acceleration(dimension: Dimension): int32;\n\n    /**\n     * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright.\n     */\n    //% help=input/light-level weight=57\n    //% blockId=device_get_light_level block=\"light level\" blockGap=8\n    //% parts=\"ledmatrix\" shim=input::lightLevel\n    function lightLevel(): int32;\n\n    /**\n     * Get the current compass heading in degrees.\n     */\n    //% help=input/compass-heading\n    //% weight=56\n    //% blockId=device_heading block=\"compass heading (°)\" blockGap=8\n    //% parts=\"compass\" shim=input::compassHeading\n    function compassHeading(): int32;\n\n    /**\n     * Gets the temperature in Celsius degrees (°C).\n     */\n    //% weight=55\n    //% help=input/temperature\n    //% blockId=device_temperature block=\"temperature (°C)\" blockGap=8\n    //% parts=\"thermometer\" shim=input::temperature\n    function temperature(): int32;\n\n    /**\n     * The pitch or roll of the device, rotation along the ``x-axis`` or ``y-axis``, in degrees.\n     * @param kind TODO\n     */\n    //% help=input/rotation weight=52\n    //% blockId=device_get_rotation block=\"rotation (°)|%NAME\" blockGap=8\n    //% parts=\"accelerometer\" advanced=true shim=input::rotation\n    function rotation(kind: Rotation): int32;\n\n    /**\n     * Get the magnetic force value in ``micro-Teslas`` (``µT``). This function is not supported in the simulator.\n     * @param dimension TODO\n     */\n    //% help=input/magnetic-force weight=51\n    //% blockId=device_get_magnetic_force block=\"magnetic force (µT)|%NAME\" blockGap=8\n    //% parts=\"compass\"\n    //% advanced=true shim=input::magneticForce\n    function magneticForce(dimension: Dimension): int32;\n\n    /**\n     * Gets the number of milliseconds elapsed since power on.\n     */\n    //% help=input/running-time weight=50 blockGap=8\n    //% blockId=device_get_running_time block=\"running time (ms)\"\n    //% advanced=true shim=input::runningTime\n    function runningTime(): int32;\n\n    /**\n     * Gets the number of microseconds elapsed since power on.\n     */\n    //% help=input/running-time-micros weight=49\n    //% blockId=device_get_running_time_micros block=\"running time (micros)\"\n    //% advanced=true shim=input::runningTimeMicros\n    function runningTimeMicros(): int32;\n\n    /**\n     * Obsolete, compass calibration is automatic.\n     */\n    //% help=input/calibrate-compass advanced=true\n    //% blockId=\"input_compass_calibrate\" block=\"calibrate compass\" shim=input::calibrateCompass\n    function calibrateCompass(): void;\n\n    /**\n     * Sets the accelerometer sample range in gravities.\n     * @param range a value describe the maximum strengh of acceleration measured\n     */\n    //% help=input/set-accelerometer-range\n    //% blockId=device_set_accelerometer_range block=\"set accelerometer|range %range\"\n    //% weight=5\n    //% parts=\"accelerometer\"\n    //% advanced=true shim=input::setAccelerometerRange\n    function setAccelerometerRange(range: AcceleratorRange): void;\n}\n\n\n\n    //% weight=1 color=\"#333333\"\n    //% advanced=true\ndeclare namespace control {\n\n    /**\n     * Schedules code that run in the background.\n     */\n    //% help=control/in-background blockAllowMultiple=1 afterOnStart=true\n    //% blockId=\"control_in_background\" block=\"run in background\" blockGap=8 shim=control::inBackground\n    function inBackground(a: () => void): void;\n\n    /**\n     * Resets the BBC micro:bit.\n     */\n    //% weight=30 async help=control/reset blockGap=8\n    //% blockId=\"control_reset\" block=\"reset\" shim=control::reset\n    function reset(): void;\n\n    /**\n     * Blocks the current fiber for the given microseconds\n     * @param micros number of micro-seconds to wait. eg: 4\n     */\n    //% help=control/wait-micros weight=29\n    //% blockId=\"control_wait_us\" block=\"wait (µs)%micros\" shim=control::waitMicros\n    function waitMicros(micros: int32): void;\n\n    /**\n     * Raises an event in the event bus.\n     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.\n     * @param value Component specific code indicating the cause of the event.\n     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_FIRE).\n     */\n    //% weight=21 blockGap=12 blockId=\"control_raise_event\" block=\"raise event|from source %src=control_event_source_id|with value %value=control_event_value_id\" blockExternalInputs=1\n    //% help=control/raise-event\n    //% mode.defl=1 shim=control::raiseEvent\n    function raiseEvent(src: int32, value: int32, mode?: EventCreationMode): void;\n\n    /**\n     * Registers an event handler.\n     */\n    //% weight=20 blockGap=8 blockId=\"control_on_event\" block=\"on event|from %src=control_event_source_id|with value %value=control_event_value_id\"\n    //% help=control/on-event\n    //% blockExternalInputs=1 shim=control::onEvent\n    function onEvent(src: int32, value: int32, handler: () => void): void;\n\n    /**\n     * Gets the value of the last event executed on the bus\n     */\n    //% blockId=control_event_value\" block=\"event value\"\n    //% help=control/event-value\n    //% weight=18 shim=control::eventValue\n    function eventValue(): int32;\n\n    /**\n     * Gets the timestamp of the last event executed on the bus\n     */\n    //% blockId=control_event_timestamp\" block=\"event timestamp\"\n    //% help=control/event-timestamp\n    //% weight=19 blockGap=8 shim=control::eventTimestamp\n    function eventTimestamp(): int32;\n\n    /**\n     * Make a friendly name for the device based on its serial number\n     */\n    //% blockId=\"control_device_name\" block=\"device name\" weight=10 blockGap=8\n    //% advanced=true shim=control::deviceName\n    function deviceName(): string;\n\n    /**\n     * Derive a unique, consistent serial number of this device from internal data.\n     */\n    //% blockId=\"control_device_serial_number\" block=\"device serial number\" weight=9\n    //% advanced=true shim=control::deviceSerialNumber\n    function deviceSerialNumber(): int32;\n}\n\n\n\n    //% color=#5C2D91 weight=97 icon=\"\\uf205\"\ndeclare namespace led {\n\n    /**\n     * Turn on the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x the horizontal coordinate of the LED starting at 0\n     * @param y the vertical coordinate of the LED starting at 0\n     */\n    //% help=led/plot weight=78\n    //% blockId=device_plot block=\"plot|x %x|y %y\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4 shim=led::plot\n    function plot(x: int32, y: int32): void;\n\n    /**\n     * Turn on the specified LED with specific brightness using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x the horizontal coordinate of the LED starting at 0\n     * @param y the vertical coordinate of the LED starting at 0\n     * @param brightness the brightness from 0 (off) to 255 (bright), eg:255\n     */\n    //% help=led/plot-brightness weight=78\n    //% blockId=device_plot_brightness block=\"plot|x %x|y %y|brightness %brightness\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4 brightness.min=0 brightness.max=255\n    //% advanced=true shim=led::plotBrightness\n    function plotBrightness(x: int32, y: int32, brightness: int32): void;\n\n    /**\n     * Turn off the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=led/unplot weight=77\n    //% blockId=device_unplot block=\"unplot|x %x|y %y\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4 shim=led::unplot\n    function unplot(x: int32, y: int32): void;\n\n    /**\n     * Get the on/off state of the specified LED using x, y coordinates. (0,0) is upper left.\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=led/point weight=76\n    //% blockId=device_point block=\"point|x %x|y %y\"\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4 shim=led::point\n    function point(x: int32, y: int32): boolean;\n\n    /**\n     * Get the screen brightness from 0 (off) to 255 (full bright).\n     */\n    //% help=led/brightness weight=60\n    //% blockId=device_get_brightness block=\"brightness\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% advanced=true shim=led::brightness\n    function brightness(): int32;\n\n    /**\n     * Set the screen brightness from 0 (off) to 255 (full bright).\n     * @param value the brightness value, eg:255, 127, 0\n     */\n    //% help=led/set-brightness weight=59\n    //% blockId=device_set_brightness block=\"set brightness %value\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    //% value.min=0 value.max=255 shim=led::setBrightness\n    function setBrightness(value: int32): void;\n\n    /**\n     * Cancels the current animation and clears other pending animations.\n     */\n    //% weight=50 help=led/stop-animation\n    //% blockId=device_stop_animation block=\"stop animation\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true shim=led::stopAnimation\n    function stopAnimation(): void;\n\n    /**\n     * Sets the display mode between black and white and greyscale for rendering LEDs.\n     * @param mode mode the display mode in which the screen operates\n     */\n    //% weight=1 help=led/set-display-mode\n    //% parts=\"ledmatrix\" advanced=true shim=led::setDisplayMode\n    function setDisplayMode(mode: DisplayMode): void;\n\n    /**\n     * Gets the current display mode\n     */\n    //% weight=1 parts=\"ledmatrix\" advanced=true shim=led::displayMode\n    function displayMode(): DisplayMode;\n\n    /**\n     * Turns on or off the display\n     */\n    //% help=led/enable blockId=device_led_enable block=\"led enable %on\"\n    //% advanced=true parts=\"ledmatrix\" shim=led::enable\n    function enable(on: boolean): void;\n\n    /**\n     * Takes a screenshot of the LED screen and returns an image.\n     */\n    //% help=led/screenshot\n    //% parts=\"ledmatrix\" shim=led::screenshot\n    function screenshot(): Image;\n}\ndeclare namespace pins {\n\n    /**\n     * Read the specified pin or connector as either 0 or 1\n     * @param name pin to read from, eg: DigitalPin.P0\n     */\n    //% help=pins/digital-read-pin weight=30\n    //% blockId=device_get_digital_pin block=\"digital read|pin %name\" blockGap=8\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"300\" shim=pins::digitalReadPin\n    function digitalReadPin(name: DigitalPin): int32;\n\n    /**\n     * Set a pin or connector value to either 0 or 1.\n     * @param name pin to write to, eg: DigitalPin.P0\n     * @param value value to set on the pin, 1 eg,0\n     */\n    //% help=pins/digital-write-pin weight=29\n    //% blockId=device_set_digital_pin block=\"digital write|pin %name|to %value\"\n    //% value.min=0 value.max=1\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"300\" shim=pins::digitalWritePin\n    function digitalWritePin(name: DigitalPin, value: int32): void;\n\n    /**\n     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.\n     * @param name pin to write to, eg: AnalogPin.P0\n     */\n    //% help=pins/analog-read-pin weight=25\n    //% blockId=device_get_analog_pin block=\"analog read|pin %name\" blockGap=\"8\"\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" shim=pins::analogReadPin\n    function analogReadPin(name: AnalogPin): int32;\n\n    /**\n     * Set the connector value as analog. Value must be comprised between 0 and 1023.\n     * @param name pin name to write to, eg: AnalogPin.P0\n     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0\n     */\n    //% help=pins/analog-write-pin weight=24\n    //% blockId=device_set_analog_pin block=\"analog write|pin %name|to %value\" blockGap=8\n    //% value.min=0 value.max=1023\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" shim=pins::analogWritePin\n    function analogWritePin(name: AnalogPin, value: int32): void;\n\n    /**\n     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in **microseconds** or `1/1000` milliseconds.\n     * If this pin is not configured as an analog output (using `analog write pin`), the operation has no effect.\n     * @param name analog pin to set period to, eg: AnalogPin.P0\n     * @param micros period in micro seconds. eg:20000\n     */\n    //% help=pins/analog-set-period weight=23 blockGap=8\n    //% blockId=device_set_analog_period block=\"analog set period|pin %pin|to (µs)%micros\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" shim=pins::analogSetPeriod\n    function analogSetPeriod(name: AnalogPin, micros: int32): void;\n\n    /**\n     * Configures this pin to a digital input, and generates events where the timestamp is the duration that this pin was either ``high`` or ``low``.\n     * @param name digital pin to register to, eg: DigitalPin.P0\n     * @param pulse the value of the pulse, eg: PulseValue.High\n     */\n    //% help=pins/on-pulsed weight=22 blockGap=8 advanced=true\n    //% blockId=pins_on_pulsed block=\"on|pin %pin|pulsed %pulse\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"300\" shim=pins::onPulsed\n    function onPulsed(name: DigitalPin, pulse: PulseValue, body: () => void): void;\n\n    /**\n     * Gets the duration of the last pulse in micro-seconds. This function should be called from a ``onPulsed`` handler.\n     */\n    //% help=pins/pulse-duration advanced=true\n    //% blockId=pins_pulse_duration block=\"pulse duration (µs)\"\n    //% weight=21 blockGap=8 shim=pins::pulseDuration\n    function pulseDuration(): int32;\n\n    /**\n     * Returns the duration of a pulse in microseconds\n     * @param name the pin which measures the pulse, eg: DigitalPin.P0\n     * @param value the value of the pulse, eg: PulseValue.High\n     * @param maximum duration in micro-seconds\n     */\n    //% blockId=\"pins_pulse_in\" block=\"pulse in (µs)|pin %name|pulsed %value\"\n    //% weight=20 advanced=true\n    //% help=pins/pulse-in\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"300\" maxDuration.defl=2000000 shim=pins::pulseIn\n    function pulseIn(name: DigitalPin, value: PulseValue, maxDuration?: int32): int32;\n\n    /**\n     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).\n     * @param name pin to write to, eg: AnalogPin.P0\n     * @param value angle or rotation speed, eg:180,90,0\n     */\n    //% help=pins/servo-write-pin weight=20\n    //% blockId=device_set_servo_pin block=\"servo write|pin %name|to %value\" blockGap=8\n    //% parts=microservo trackArgs=0\n    //% value.min=0 value.max=180\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" shim=pins::servoWritePin\n    function servoWritePin(name: AnalogPin, value: int32): void;\n\n    /**\n     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.\n     * @param name pin name\n     * @param micros pulse duration in micro seconds, eg:1500\n     */\n    //% help=pins/servo-set-pulse weight=19\n    //% blockId=device_set_servo_pulse block=\"servo set pulse|pin %value|to (µs) %micros\"\n    //% value.fieldEditor=\"gridpicker\" value.fieldOptions.columns=4\n    //% value.fieldOptions.tooltips=\"false\" shim=pins::servoSetPulse\n    function servoSetPulse(name: AnalogPin, micros: int32): void;\n\n    /**\n     * Sets the pin used when using `analog pitch` or music.\n     * @param name pin to modulate pitch from\n     */\n    //% blockId=device_analog_set_pitch_pin block=\"analog set pitch pin %name\"\n    //% help=pins/analog-set-pitch-pin weight=3 advanced=true\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" shim=pins::analogSetPitchPin\n    function analogSetPitchPin(name: AnalogPin): void;\n\n    /**\n     * Emits a Pulse-width modulation (PWM) signal to the current pitch pin. Use `analog set pitch pin` to define the pitch pin.\n     * @param frequency frequency to modulate in Hz.\n     * @param ms duration of the pitch in milli seconds.\n     */\n    //% blockId=device_analog_pitch block=\"analog pitch %frequency|for (ms) %ms\"\n    //% help=pins/analog-pitch weight=4 async advanced=true blockGap=8 shim=pins::analogPitch\n    function analogPitch(frequency: int32, ms: int32): void;\n\n    /**\n     * Configures the pull of this pin.\n     * @param name pin to set the pull mode on, eg: DigitalPin.P0\n     * @param pull one of the mbed pull configurations, eg: PinPullMode.PullUp\n     */\n    //% help=pins/set-pull weight=3 advanced=true\n    //% blockId=device_set_pull block=\"set pull|pin %pin|to %pull\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"300\" shim=pins::setPull\n    function setPull(name: DigitalPin, pull: PinPullMode): void;\n\n    /**\n     * Configures the events emitted by this pin. Events can be subscribed to\n     * using ``control.onEvent()``.\n     * @param name pin to set the event mode on, eg: DigitalPin.P0\n     * @param type the type of events for this pin to emit, eg: PinEventType.Edge\n     */\n    //% help=pins/set-events weight=4 advanced=true\n    //% blockId=device_set_pin_events block=\"set pin %pin|to emit %type|events\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"300\" shim=pins::setEvents\n    function setEvents(name: DigitalPin, type: PinEventType): void;\n\n    /**\n     * Create a new zero-initialized buffer.\n     * @param size number of bytes in the buffer\n     */\n    //% shim=pins::createBuffer\n    function createBuffer(size: int32): Buffer;\n\n    /**\n     * Read `size` bytes from a 7-bit I2C `address`.\n     */\n    //% repeat.defl=0 shim=pins::i2cReadBuffer\n    function i2cReadBuffer(address: int32, size: int32, repeat?: boolean): Buffer;\n\n    /**\n     * Write bytes to a 7-bit I2C `address`.\n     */\n    //% repeat.defl=0 shim=pins::i2cWriteBuffer\n    function i2cWriteBuffer(address: int32, buf: Buffer, repeat?: boolean): void;\n\n    /**\n     * Write to the SPI slave and return the response\n     * @param value Data to be sent to the SPI slave\n     */\n    //% help=pins/spi-write weight=5 advanced=true\n    //% blockId=spi_write block=\"spi write %value\" shim=pins::spiWrite\n    function spiWrite(value: int32): int32;\n\n    /**\n     * Sets the SPI frequency\n     * @param frequency the clock frequency, eg: 1000000\n     */\n    //% help=pins/spi-frequency weight=4 advanced=true\n    //% blockId=spi_frequency block=\"spi frequency %frequency\" shim=pins::spiFrequency\n    function spiFrequency(frequency: int32): void;\n\n    /**\n     * Sets the SPI bits and mode\n     * @param bits the number of bits, eg: 8\n     * @param mode the mode, eg: 3\n     */\n    //% help=pins/spi-format weight=3 advanced=true\n    //% blockId=spi_format block=\"spi format|bits %bits|mode %mode\" shim=pins::spiFormat\n    function spiFormat(bits: int32, mode: int32): void;\n\n    /**\n     * Sets the MOSI, MISO, SCK pins used by the SPI instance\n     *\n     */\n    //% help=pins/spi-pins weight=2 advanced=true\n    //% blockId=spi_pins block=\"spi set pins|MOSI %mosi|MISO %miso|SCK %sck\"\n    //% mosi.fieldEditor=\"gridpicker\" mosi.fieldOptions.columns=4\n    //% mosi.fieldOptions.tooltips=\"false\" mosi.fieldOptions.width=\"300\"\n    //% miso.fieldEditor=\"gridpicker\" miso.fieldOptions.columns=4\n    //% miso.fieldOptions.tooltips=\"false\" miso.fieldOptions.width=\"300\"\n    //% sck.fieldEditor=\"gridpicker\" sck.fieldOptions.columns=4\n    //% sck.fieldOptions.tooltips=\"false\" sck.fieldOptions.width=\"300\" shim=pins::spiPins\n    function spiPins(mosi: DigitalPin, miso: DigitalPin, sck: DigitalPin): void;\n}\n\n\n\n    //% weight=2 color=#002050 icon=\"\\uf287\"\n    //% advanced=true\ndeclare namespace serial {\n\n    /**\n     * Read a line of text from the serial port and return the buffer when the delimiter is met.\n     * @param delimiter text delimiter that separates each text chunk\n     */\n    //% help=serial/read-until\n    //% blockId=serial_read_until block=\"serial|read until %delimiter=serial_delimiter_conv\"\n    //% weight=19 shim=serial::readUntil\n    function readUntil(delimiter: string): string;\n\n    /**\n     * Read the buffered received data as a string\n     */\n    //% help=serial/read-string\n    //% blockId=serial_read_buffer block=\"serial|read string\"\n    //% weight=18 shim=serial::readString\n    function readString(): string;\n\n    /**\n     * Register an event to be fired when one of the delimiter is matched.\n     * @param delimiters the characters to match received characters against.\n     */\n    //% help=serial/on-data-received\n    //% weight=18 blockId=serial_on_data_received block=\"serial|on data received %delimiters=serial_delimiter_conv\" shim=serial::onDataReceived\n    function onDataReceived(delimiters: string, body: () => void): void;\n\n    /**\n     * Send a piece of text through the serial connection.\n     */\n    //% help=serial/write-string\n    //% weight=87 blockGap=8\n    //% blockId=serial_writestring block=\"serial|write string %text\" shim=serial::writeString\n    function writeString(text: string): void;\n\n    /**\n     * Send a buffer through serial connection\n     */\n    //% blockId=serial_writebuffer block=\"serial|write buffer %buffer\"\n    //% help=serial/write-buffer advanced=true weight=6 shim=serial::writeBuffer\n    function writeBuffer(buffer: Buffer): void;\n\n    /**\n     * Read multiple characters from the receive buffer. Pause until enough characters are present.\n     * @param length default buffer length, eg: 64\n     */\n    //% blockId=serial_readbuffer block=\"serial|read buffer %length\"\n    //% help=serial/read-buffer advanced=true weight=5 shim=serial::readBuffer\n    function readBuffer(length: int32): Buffer;\n\n    /**\n     * Set the serial input and output to use pins instead of the USB connection.\n     * @param tx the new transmission pin, eg: SerialPin.P0\n     * @param rx the new reception pin, eg: SerialPin.P1\n     * @param rate the new baud rate. eg: 115200\n     */\n    //% weight=10\n    //% help=serial/redirect\n    //% blockId=serial_redirect block=\"serial|redirect to|TX %tx|RX %rx|at baud rate %rate\"\n    //% blockExternalInputs=1\n    //% tx.fieldEditor=\"gridpicker\" tx.fieldOptions.columns=3\n    //% tx.fieldOptions.tooltips=\"false\"\n    //% rx.fieldEditor=\"gridpicker\" rx.fieldOptions.columns=3\n    //% rx.fieldOptions.tooltips=\"false\"\n    //% blockGap=8 shim=serial::redirect\n    function redirect(tx: SerialPin, rx: SerialPin, rate: BaudRate): void;\n\n    /**\n     * Direct the serial input and output to use the USB connection.\n     */\n    //% weight=9 help=serial/redirect-to-usb\n    //% blockId=serial_redirect_to_usb block=\"serial|redirect to USB\" shim=serial::redirectToUSB\n    function redirectToUSB(): void;\n}\n\n\n\n    //% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte\ndeclare interface Buffer {\n    /**\n     * Write a number in specified format in the buffer.\n     */\n    //% shim=BufferMethods::setNumber\n    setNumber(format: NumberFormat, offset: int32, value: number): void;\n\n    /**\n     * Read a number in specified format from the buffer.\n     */\n    //% shim=BufferMethods::getNumber\n    getNumber(format: NumberFormat, offset: int32): number;\n\n    /** Returns the length of a Buffer object. */\n    //% property shim=BufferMethods::length\n    length: int32;\n\n    /**\n     * Fill (a fragment) of the buffer with given value.\n     */\n    //% offset.defl=0 length.defl=-1 shim=BufferMethods::fill\n    fill(value: int32, offset?: int32, length?: int32): void;\n\n    /**\n     * Return a copy of a fragment of a buffer.\n     */\n    //% offset.defl=0 length.defl=-1 shim=BufferMethods::slice\n    slice(offset?: int32, length?: int32): Buffer;\n\n    /**\n     * Shift buffer left in place, with zero padding.\n     * @param offset number of bytes to shift; use negative value to shift right\n     * @param start start offset in buffer. Default is 0.\n     * @param length number of elements in buffer. If negative, length is set as the buffer length minus\n     * start. eg: -1\n     */\n    //% start.defl=0 length.defl=-1 shim=BufferMethods::shift\n    shift(offset: int32, start?: int32, length?: int32): void;\n\n    /**\n     * Convert a buffer to its hexadecimal representation.\n     */\n    //% shim=BufferMethods::toHex\n    toHex(): string;\n\n    /**\n     * Rotate buffer left in place.\n     * @param offset number of bytes to shift; use negative value to shift right\n     * @param start start offset in buffer. Default is 0.\n     * @param length number of elements in buffer. If negative, length is set as the buffer length minus\n     * start. eg: -1\n     */\n    //% start.defl=0 length.defl=-1 shim=BufferMethods::rotate\n    rotate(offset: int32, start?: int32, length?: int32): void;\n\n    /**\n     * Write contents of `src` at `dstOffset` in current buffer.\n     */\n    //% shim=BufferMethods::write\n    write(dstOffset: int32, src: Buffer): void;\n}\ndeclare namespace control {\n\n    /**\n     * Create a new zero-initialized buffer.\n     * @param size number of bytes in the buffer\n     */\n    //% shim=control::createBuffer\n    function createBuffer(size: int32): Buffer;\n}\n\n// Auto-generated. Do not edit. Really.\n"
    },
    "radio": {
      "README.md": "# radio\n\nThe radio library.\n\n",
      "enums.d.ts": "// Auto-generated. Do not edit.\ndeclare namespace radio {\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "pxt.json": "{\n    \"name\": \"radio\",\n    \"description\": \"The radio services\",\n    \"files\": [\n        \"README.md\",\n        \"shims.d.ts\",\n        \"enums.d.ts\",\n        \"radio.cpp\",\n        \"radio.ts\"\n    ],\n    \"icon\": \"./static/packages/radio/icon.png\",\n    \"public\": true,\n    \"dependencies\": {\n        \"core\": \"*\"\n    },\n    \"yotta\": {\n        \"config\": {\n            \"microbit-dal\": {\n                \"bluetooth\": {\n                    \"enabled\": 0\n                }\n            }\n        }\n    },\n    \"targetVersions\": {\n        \"target\": \"1.1.26\"\n    }\n}",
      "radio.cpp": "#include \"pxt.h\"\n\nusing namespace pxt;\n\n#define MAX_FIELD_NAME_LENGTH 12\n#define MAX_PAYLOAD_LENGTH 20\n#define PACKET_PREFIX_LENGTH 9\n#define VALUE_PACKET_NAME_LEN_OFFSET 13\n\n\n// Packet Spec:\n// | 0              | 1 ... 4       | 5 ... 8           | 9 ... 28\n// ----------------------------------------------------------------\n// | packet type    | system time   | serial number     | payload\n//\n// Serial number defaults to 0 unless enabled by user\n\n// payload: number (9 ... 12)\n#define PACKET_TYPE_NUMBER 0\n\n// payload: number (9 ... 12), name length (13), name (14 ... 26)\n#define PACKET_TYPE_VALUE 1\n\n// payload: string length (9), string (10 ... 28)\n#define PACKET_TYPE_STRING 2\n\n// payload: buffer length (9), buffer (10 ... 28)\n#define PACKET_TYPE_BUFFER 3\n\n//% color=270 weight=96 icon=\"\\uf012\"\nnamespace radio {\n\n    // -------------------------------------------------------------------------\n    // Radio\n    // -------------------------------------------------------------------------\n    bool radioEnabled = false;\n    bool transmitSerialNumber = false;\n\n    PacketBuffer packet;\n\n    uint8_t type;\n    uint32_t time;\n    uint32_t serial;\n    int value;\n    String msg; // may be NULL before first packet\n    Buffer bufMsg; // may be NULL before first packet\n\n    int radioEnable() {\n        int r = uBit.radio.enable();\n        if (r != MICROBIT_OK) {\n            uBit.panic(43);\n            return r;\n        }\n        if (!radioEnabled) {\n            uBit.radio.setGroup(pxt::programHash());\n            radioEnabled = true;\n        }\n        return r;\n    }\n\n    void broadcastMessage(int message) {\n        if (radioEnable() != MICROBIT_OK) return;\n        uBit.radio.event.eventReceived(MicroBitEvent(MES_BROADCAST_GENERAL_ID, message, CREATE_ONLY));\n    }\n\n    void onBroadcastMessageReceived(int message, Action f) {\n        if (radioEnable() != MICROBIT_OK) return;\n        registerWithDal(MES_BROADCAST_GENERAL_ID, message, f);\n    }\n\n    void setPacketPrefix(uint8_t* buf, int type) {\n        // prefix: type (0), time (1..4), serial (5..8)\n        uint32_t t = system_timer_current_time();\n        uint32_t sn = transmitSerialNumber ? microbit_serial_number() : 0;\n\n        buf[0] = (uint8_t) type;\n        memcpy(buf + 1, &t, 4);\n        memcpy(buf + 5, &sn, 4);\n    }\n\n    uint8_t copyStringValue(uint8_t* buf, String data, uint8_t maxLength) {\n        uint8_t len = min_(maxLength, data->length);\n\n        // One byte for length of the string\n        buf[0] = len;\n\n        if (len > 0) {\n            memcpy(buf + 1, data->data, len);\n        }\n        return len + 1;\n    }\n\n    String getStringValue(uint8_t* buf, uint8_t maxLength) {\n        // First byte is the string length\n        uint8_t len = min_(maxLength, buf[0]);\n        return mkString((char*)buf + 1, len);\n    }\n\n    uint8_t copyBufferValue(uint8_t* buf, Buffer data, uint8_t maxLength) {\n        uint8_t len = min_(maxLength, data->length);\n\n        // One byte for length of the buffer\n        buf[0] = len;\n        if (len > 0) {\n            memcpy(buf + 1, data->data, len);\n        }\n        return len + 1;\n    }    \n\n    Buffer getBufferValue(uint8_t* buf, uint8_t maxLength) {\n        // First byte is the buffer length\n        uint8_t len = min_(maxLength, buf[0]);\n        // skip first byte\n        return mkBuffer(buf + 1, len);\n    }\n\n    void writePacketAsJSON(uint8_t tp, int v, int s, int t, String m, Buffer b) {\n        // Convert the packet to JSON and send over serial\n        uBit.serial.send(\"{\");\n        uBit.serial.send(\"\\\"t\\\":\");\n        uBit.serial.send(t);\n        uBit.serial.send(\",\\\"s\\\":\");\n        uBit.serial.send(s);\n        if ((tp == PACKET_TYPE_STRING || tp == PACKET_TYPE_VALUE) && NULL != m) {\n            uBit.serial.send(\",\\\"n\\\":\\\"\");\n            uBit.serial.send((uint8_t*)m->data, m->length);\n            uBit.serial.send(\"\\\"\");\n        }\n        if (tp == PACKET_TYPE_BUFFER && NULL != b) {\n            uBit.serial.send(\",\\\"b\\\":\\\"\");\n            // TODO: proper base64 encoding\n            uBit.serial.send(b->data, b->length);\n            uBit.serial.send(\"\\\"\");\n        }\n        if (tp == PACKET_TYPE_NUMBER || tp == PACKET_TYPE_VALUE) {\n            uBit.serial.send(\",\\\"v\\\":\");\n            uBit.serial.send(v);\n        }\n        uBit.serial.send(\"}\\r\\n\");\n    }\n\n    /**\n     * Takes a packet from the micro:bit radio queue.\n     * @param writeToSerial if true, write the received packet to serial without updating the global packet;\n                            if false, update the global packet instead\n     */\n    void receivePacket(bool writeToSerial) {\n        PacketBuffer p = uBit.radio.datagram.recv();\n\n        uint8_t* buf = p.getBytes();\n        uint8_t tp;\n        int t;\n        int s;\n        int v = 0;\n        String m = NULL;\n        Buffer b = NULL;\n\n        memcpy(&tp, buf, 1);\n        memcpy(&t, buf + 1, 4);\n        memcpy(&s, buf + 5, 4);\n\n        if (tp == PACKET_TYPE_STRING) {\n            m = getStringValue(buf + PACKET_PREFIX_LENGTH, MAX_PAYLOAD_LENGTH - 1);\n        }\n        else if (tp == PACKET_TYPE_BUFFER) {\n            b = getBufferValue(buf + PACKET_PREFIX_LENGTH, MAX_PAYLOAD_LENGTH - 1);\n        }\n        else {\n            memcpy(&v, buf + 9, 4);\n            if (tp == PACKET_TYPE_VALUE) {\n                m = getStringValue(buf + VALUE_PACKET_NAME_LEN_OFFSET, MAX_FIELD_NAME_LENGTH);\n            }\n        }\n\n        if (NULL == m)\n            m = mkString(\"\", 0);\n        if (NULL == b)\n            b = mkBuffer(NULL, 0);\n\n        if (!writeToSerial) {\n            // Refresh global packet\n            packet = p;\n            type = tp;\n            time = t;\n            serial = s;\n            value = v;\n            decrRC(msg);\n            decrRC(bufMsg);\n            msg = m;\n            bufMsg = b;\n        }\n        else {\n            writePacketAsJSON(tp, v, s, t, m, b);\n            decrRC(m);\n            decrRC(b);\n        }\n    }\n\n    /**\n     * Broadcasts a number over radio to any connected micro:bit in the group.\n     */\n    //% help=radio/send-number\n    //% weight=60\n    //% blockId=radio_datagram_send block=\"radio send number %value\" blockGap=8\n    void sendNumber(int value) {\n        if (radioEnable() != MICROBIT_OK) return;\n        uint8_t length = PACKET_PREFIX_LENGTH + sizeof(uint32_t);\n        uint8_t buf[length];\n        memset(buf, 0, length);\n\n        setPacketPrefix(buf, PACKET_TYPE_NUMBER);\n        memcpy(buf + PACKET_PREFIX_LENGTH, &value, 4);\n\n        uBit.radio.datagram.send(buf, length);\n    }\n\n    /**\n    * Broadcasts a name / value pair along with the device serial number\n    * and running time to any connected micro:bit in the group.\n    * @param name the field name (max 12 characters), eg: \"name\"\n    * @param value the numberic value\n    */\n    //% help=radio/send-value\n    //% weight=59\n    //% blockId=radio_datagram_send_value block=\"radio send|value %name|= %value\" blockGap=8\n    void sendValue(String name, int value) {\n        if (radioEnable() != MICROBIT_OK) return;\n\n        uint8_t buf[32];\n        memset(buf, 0, 32);\n\n        setPacketPrefix(buf, PACKET_TYPE_VALUE);\n        memcpy(buf + PACKET_PREFIX_LENGTH, &value, 4);\n\n        int stringLen = copyStringValue(buf + VALUE_PACKET_NAME_LEN_OFFSET, name, MAX_FIELD_NAME_LENGTH);\n\n        uBit.radio.datagram.send(buf, VALUE_PACKET_NAME_LEN_OFFSET + stringLen);\n    }\n\n    /**\n     * Broadcasts a string along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-string\n    //% weight=58\n    //% blockId=radio_datagram_send_string block=\"radio send string %msg\"\n    void sendString(String msg) {\n        if (radioEnable() != MICROBIT_OK || NULL == msg) return;\n\n        uint8_t buf[32];\n        memset(buf, 0, 32);\n\n        setPacketPrefix(buf, PACKET_TYPE_STRING);\n        int stringLen = copyStringValue(buf + PACKET_PREFIX_LENGTH, msg, MAX_PAYLOAD_LENGTH - 1);\n\n        uBit.radio.datagram.send(buf, PACKET_PREFIX_LENGTH + stringLen);\n    }\n\n    /**\n     * Broadcasts a buffer (up to 19 bytes long) along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-buffer\n    //% weight=57\n    //% advanced=true\n    void sendBuffer(Buffer msg) {\n        if (radioEnable() != MICROBIT_OK || NULL == msg) return;\n\n        uint8_t buf[32];\n        memset(buf, 0, 32);\n\n        setPacketPrefix(buf, PACKET_TYPE_BUFFER);\n        int bufLen = copyBufferValue(buf + PACKET_PREFIX_LENGTH, msg, MAX_PAYLOAD_LENGTH - 1);\n\n        uBit.radio.datagram.send(buf, PACKET_PREFIX_LENGTH + bufLen);\n    }\n\n\n    /**\n    * Reads the next packet from the radio queue and and writes it to serial\n    * as JSON.\n    */\n    //% help=radio/write-value-to-serial\n    //% weight=3\n    //% blockId=radio_write_value_serial block=\"radio write value to serial\"\n    //% deprecated=true\n    void writeValueToSerial() {\n        if (radioEnable() != MICROBIT_OK) return;\n        receivePacket(true);\n    }\n\n    /**\n    * Writes the last received packet to serial as JSON. This should be called\n    * within an ``onDataPacketReceived`` callback.\n    */\n    //% help=radio/write-received-packet-to-serial\n    //% weight=3\n    //% blockId=radio_write_packet_serial block=\"radio write received packet to serial\"\n    //% advanced=true\n    void writeReceivedPacketToSerial() {\n        if (radioEnable() != MICROBIT_OK) return;\n        writePacketAsJSON(type, value, (int) serial, (int) time, msg, bufMsg);\n    }\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's number\n     * payload or 0 if the packet did not contain a number.\n     */\n    //% help=radio/receive-number\n    //% weight=46\n    //% blockId=radio_datagram_receive block=\"radio receive number\" blockGap=8\n    //% deprecated=true\n    int receiveNumber()\n    {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        receivePacket(false);\n        return value;\n    }\n\n    /**\n     * Registers code to run when a packet is received over radio.\n     */\n    //% help=radio/on-data-received\n    //% weight=50\n    //% blockId=radio_datagram_received_event block=\"radio on data received\" blockGap=8\n    //% deprecated=true\n    void onDataReceived(Action body) {\n        if (radioEnable() != MICROBIT_OK) return;\n        registerWithDal(MICROBIT_ID_RADIO, MICROBIT_RADIO_EVT_DATAGRAM, body);\n        // make sure the receive buffer has a free spot\n        receiveNumber();\n    }\n\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's string\n     * payload or the empty string if the packet did not contain a string.\n     */\n    //% blockId=radio_datagram_receive_string block=\"radio receive string\" blockGap=8\n    //% weight=44\n    //% help=radio/receive-string\n    //% deprecated=true\n    String receiveString() {\n        if (radioEnable() != MICROBIT_OK) return mkString(\"\", 0);\n        receivePacket(false);\n        return msg;\n    }\n\n    /**\n     * Gets the received signal strength indicator (RSSI) from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc). Not supported in simulator.\n     * namespace=radio\n     */\n    //% help=radio/received-signal-strength\n    //% weight=40\n    //% blockId=radio_datagram_rssi block=\"radio received signal strength\"\n    //% deprecated=true\n    int receivedSignalStrength() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return packet.getRSSI();\n    }\n\n    /**\n     * Sets the group id for radio communications. A micro:bit can only listen to one group ID at any time.\n     * @param id the group id between ``0`` and ``255``, eg: 1\n     */\n    //% help=radio/set-group\n    //% weight=10 blockGap=8\n    //% blockId=radio_set_group block=\"radio set group %ID\"\n    //% id.min=0 id.max=255\n    void setGroup(int id) {\n        if (radioEnable() != MICROBIT_OK) return;\n        uBit.radio.setGroup(id);\n    }\n\n    /**\n     * Change the output power level of the transmitter to the given value.\n    * @param power a value in the range 0..7, where 0 is the lowest power and 7 is the highest. eg: 7\n    */\n    //% help=radio/set-transmit-power\n    //% weight=9 blockGap=8\n    //% blockId=radio_set_transmit_power block=\"radio set transmit power %power\"\n    //% power.min=0 power.max=7\n    //% advanced=true\n    void setTransmitPower(int power) {\n        if (radioEnable() != MICROBIT_OK) return;\n        uBit.radio.setTransmitPower(power);\n    }\n\n    /**\n    * Set the radio to transmit the serial number in each message.\n    * @param transmit value indicating if the serial number is transmitted, eg: true\n    */\n    //% help=radio/set-transmit-serial-number\n    //% weight=8 blockGap=8\n    //% blockId=radio_set_transmit_serial_number block=\"radio set transmit serial number %transmit\"\n    //% advanced=true\n    void setTransmitSerialNumber(bool transmit) {\n        if (radioEnable() != MICROBIT_OK) return;\n        transmitSerialNumber = transmit;\n    }\n\n    /**\n     * Returns the number payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or 0 if that packet did not\n     * contain a number.\n     */\n    //% help=radio/received-number\n    int receivedNumber() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return value;\n    }\n\n    /**\n     * Returns the serial number of the sender micro:bit from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc) or 0 if\n     * that packet did not send a serial number.\n     */\n    //% help=radio/received-serial\n    uint32_t receivedSerial() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return serial;\n    }\n\n    /**\n     * Returns the string payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-string\n    String receivedString() {\n        if (radioEnable() != MICROBIT_OK || NULL == msg) return mkString(\"\", 0);\n        incrRC(msg);\n        return msg;\n    }\n\n    /**\n     * Returns the buffer payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-buffer\n    Buffer receivedBuffer() {\n        if (radioEnable() != MICROBIT_OK || NULL == bufMsg) return mkBuffer(NULL, 0);\n        incrRC(bufMsg);\n        return bufMsg;\n    }\n\n    /**\n     * Returns the system time of the sender micro:bit at the moment when it sent the\n     * last packet taken from the radio queue (via ``receiveNumber``,\n     * ``receiveString``, etc).\n     */\n    //% help=radio/received-time\n    uint32_t receivedTime() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return time;\n    }\n}\n",
      "radio.ts": "/**\n * Communicate data using radio packets\n */\n//% color=#E3008C weight=96 icon=\"\\uf012\"\nnamespace radio {\n    export class Packet {\n        /**\n         * The number payload if a number was sent in this packet (via ``sendNumber()`` or ``sendValue()``)\n         * or 0 if this packet did not contain a number.\n         */\n        public receivedNumber: number;\n        /**\n         * The string payload if a string was sent in this packet (via ``sendString()`` or ``sendValue()``)\n         * or the empty string if this packet did not contain a string.\n         */\n        public receivedString: string;\n        /**\n         * The buffer payload if a buffer was sent in this packet\n         * or the empty buffer\n         */\n        public receivedBuffer: Buffer;\n        /**\n         * The system time of the sender of the packet at the time the packet was sent.\n         */\n        public time: number;\n        /**\n         * The serial number of the sender of the packet or 0 if the sender did not sent their serial number.\n         */\n        public serial: number;\n        /**\n         * The received signal strength indicator (RSSI) of the packet.\n         */\n        public signal: number;\n    }\n\n    export enum PacketProperty {\n        //% blockIdentity=radio._packetProperty\n        //% block=\"time\"\n        Time,\n        //% block=\"serial number\"\n        //% blockIdentity=radio._packetProperty\n        SerialNumber,\n        //% blockIdentity=radio._packetProperty\n        //% block=\"signal strength\"\n        SignalStrength\n    }\n\n    /**\n     * Registers code to run when the radio receives a packet. Also takes the\n     * received packet from the radio queue.\n     */\n    //% help=radio/on-data-packet-received blockHandlerKey=\"radioreceived\" deprecated=true\n    //% mutate=objectdestructuring\n    //% mutateText=Packet\n    //% mutateDefaults=\"receivedNumber;receivedString:name,receivedNumber:value;receivedString\"\n    //% blockId=radio_on_packet block=\"on radio received\" blockGap=8\n    export function onDataPacketReceived(cb: (packet: Packet) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.receivedNumber = receivedNumber();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.receivedString = receivedString();\n            packet.receivedBuffer = receivedBuffer();\n            packet.signal = receivedSignalStrength();\n            lastPacket = packet;\n            cb(packet)\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a number.\n     */\n    //% help=radio/on-radio-received-number blockHandlerKey=\"radioreceived\"\n    //% blockId=radio_on_number block=\"on radio received\" blockGap=8\n    export function onReceivedNumber(cb: (receivedNumber: number) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedNumber = receivedNumber();\n            lastPacket = packet;\n            cb(packet.receivedNumber);\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a key value pair.\n     */\n    //% help=radio/on-radio-received-value blockHandlerKey=\"radioreceived\"\n    //% blockId=radio_on_value block=\"on radio received\" blockGap=8\n    export function onReceivedValue(cb: (name: string, value: number) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedNumber = receivedNumber();\n            packet.receivedString = receivedString();\n            lastPacket = packet;\n            cb(packet.receivedString, packet.receivedNumber)\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a string.\n     */\n    //% help=radio/on-radio-received-string blockHandlerKey=\"radioreceived\"\n    //% blockId=radio_on_string block=\"on radio received\" blockGap=8\n    export function onReceivedString(cb: (receivedString: string) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedString = receivedString();\n            lastPacket = packet;\n            cb(packet.receivedString);\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a buffer.\n     */\n    //% help=radio/on-radio-received-buffer blockHandlerKey=\"radioreceived\" blockHidden=1\n    //% blockId=radio_on_buffer block=\"on radio received\" blockGap=8\n    export function onReceivedBuffer(cb: (buffer: Buffer) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedBuffer = receivedBuffer();\n            lastPacket = packet;\n            cb(packet.receivedBuffer)\n        });\n    }\n\n    let lastPacket: Packet;\n    /**\n     * Returns properties of the last radio packet received.\n     * @param type the type of property to retrieve from the last packet\n     */\n    //% help=radio/get-received-packet-property advanced=true\n    //% blockId=radio_received_packet_property block=\"received packet %type=radio_packet_property\" blockGap=8\n    export function getReceivedPacketProperty(type: number) {\n        if (lastPacket) {\n            switch(type) {\n                case PacketProperty.Time: return lastPacket.time;\n                case PacketProperty.SerialNumber: return lastPacket.serial;\n                case PacketProperty.SignalStrength: return lastPacket.signal;\n            }\n        }\n        return 0;\n    }\n\n    /**\n     * Gets a packet property.\n     * @param type the packet property type, eg: PacketProperty.time\n     */\n    //% blockId=radio_packet_property block=\"%note\"\n    //% shim=TD_ID blockHidden=1\n    export function _packetProperty(type: PacketProperty): number {\n        return type;\n    }\n}\n",
      "shims.d.ts": "// Auto-generated. Do not edit.\n\n\n\n    //% color=270 weight=96 icon=\"\\uf012\"\ndeclare namespace radio {\n\n    /**\n     * Broadcasts a number over radio to any connected micro:bit in the group.\n     */\n    //% help=radio/send-number\n    //% weight=60\n    //% blockId=radio_datagram_send block=\"radio send number %value\" blockGap=8 shim=radio::sendNumber\n    function sendNumber(value: int32): void;\n\n    /**\n     * Broadcasts a name / value pair along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     * @param name the field name (max 12 characters), eg: \"name\"\n     * @param value the numberic value\n     */\n    //% help=radio/send-value\n    //% weight=59\n    //% blockId=radio_datagram_send_value block=\"radio send|value %name|= %value\" blockGap=8 shim=radio::sendValue\n    function sendValue(name: string, value: int32): void;\n\n    /**\n     * Broadcasts a string along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-string\n    //% weight=58\n    //% blockId=radio_datagram_send_string block=\"radio send string %msg\" shim=radio::sendString\n    function sendString(msg: string): void;\n\n    /**\n     * Broadcasts a buffer (up to 19 bytes long) along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-buffer\n    //% weight=57\n    //% advanced=true shim=radio::sendBuffer\n    function sendBuffer(msg: Buffer): void;\n\n    /**\n     * Reads the next packet from the radio queue and and writes it to serial\n     * as JSON.\n     */\n    //% help=radio/write-value-to-serial\n    //% weight=3\n    //% blockId=radio_write_value_serial block=\"radio write value to serial\"\n    //% deprecated=true shim=radio::writeValueToSerial\n    function writeValueToSerial(): void;\n\n    /**\n     * Writes the last received packet to serial as JSON. This should be called\n     * within an ``onDataPacketReceived`` callback.\n     */\n    //% help=radio/write-received-packet-to-serial\n    //% weight=3\n    //% blockId=radio_write_packet_serial block=\"radio write received packet to serial\"\n    //% advanced=true shim=radio::writeReceivedPacketToSerial\n    function writeReceivedPacketToSerial(): void;\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's number\n     * payload or 0 if the packet did not contain a number.\n     */\n    //% help=radio/receive-number\n    //% weight=46\n    //% blockId=radio_datagram_receive block=\"radio receive number\" blockGap=8\n    //% deprecated=true shim=radio::receiveNumber\n    function receiveNumber(): int32;\n\n    /**\n     * Registers code to run when a packet is received over radio.\n     */\n    //% help=radio/on-data-received\n    //% weight=50\n    //% blockId=radio_datagram_received_event block=\"radio on data received\" blockGap=8\n    //% deprecated=true shim=radio::onDataReceived\n    function onDataReceived(body: () => void): void;\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's string\n     * payload or the empty string if the packet did not contain a string.\n     */\n    //% blockId=radio_datagram_receive_string block=\"radio receive string\" blockGap=8\n    //% weight=44\n    //% help=radio/receive-string\n    //% deprecated=true shim=radio::receiveString\n    function receiveString(): string;\n\n    /**\n     * Gets the received signal strength indicator (RSSI) from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc). Not supported in simulator.\n     * namespace=radio\n     */\n    //% help=radio/received-signal-strength\n    //% weight=40\n    //% blockId=radio_datagram_rssi block=\"radio received signal strength\"\n    //% deprecated=true shim=radio::receivedSignalStrength\n    function receivedSignalStrength(): int32;\n\n    /**\n     * Sets the group id for radio communications. A micro:bit can only listen to one group ID at any time.\n     * @param id the group id between ``0`` and ``255``, eg: 1\n     */\n    //% help=radio/set-group\n    //% weight=10 blockGap=8\n    //% blockId=radio_set_group block=\"radio set group %ID\"\n    //% id.min=0 id.max=255 shim=radio::setGroup\n    function setGroup(id: int32): void;\n\n    /**\n     * Change the output power level of the transmitter to the given value.\n     * @param power a value in the range 0..7, where 0 is the lowest power and 7 is the highest. eg: 7\n     */\n    //% help=radio/set-transmit-power\n    //% weight=9 blockGap=8\n    //% blockId=radio_set_transmit_power block=\"radio set transmit power %power\"\n    //% power.min=0 power.max=7\n    //% advanced=true shim=radio::setTransmitPower\n    function setTransmitPower(power: int32): void;\n\n    /**\n     * Set the radio to transmit the serial number in each message.\n     * @param transmit value indicating if the serial number is transmitted, eg: true\n     */\n    //% help=radio/set-transmit-serial-number\n    //% weight=8 blockGap=8\n    //% blockId=radio_set_transmit_serial_number block=\"radio set transmit serial number %transmit\"\n    //% advanced=true shim=radio::setTransmitSerialNumber\n    function setTransmitSerialNumber(transmit: boolean): void;\n\n    /**\n     * Returns the number payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or 0 if that packet did not\n     * contain a number.\n     */\n    //% help=radio/received-number shim=radio::receivedNumber\n    function receivedNumber(): int32;\n\n    /**\n     * Returns the serial number of the sender micro:bit from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc) or 0 if\n     * that packet did not send a serial number.\n     */\n    //% help=radio/received-serial shim=radio::receivedSerial\n    function receivedSerial(): uint32;\n\n    /**\n     * Returns the string payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-string shim=radio::receivedString\n    function receivedString(): string;\n\n    /**\n     * Returns the buffer payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-buffer shim=radio::receivedBuffer\n    function receivedBuffer(): Buffer;\n\n    /**\n     * Returns the system time of the sender micro:bit at the moment when it sent the\n     * last packet taken from the radio queue (via ``receiveNumber``,\n     * ``receiveString``, etc).\n     */\n    //% help=radio/received-time shim=radio::receivedTime\n    function receivedTime(): uint32;\n}\n\n// Auto-generated. Do not edit. Really.\n"
    },
    "devices": {
      "README.md": "# devices\n",
      "devices.cpp": "#include \"pxt.h\"\n#include \"MESEvents.h\"\n\nusing namespace pxt;\n\nenum class MesCameraEvent {\n    //% block=\"take photo\"\n    TakePhoto = MES_CAMERA_EVT_TAKE_PHOTO,\n    //% block=\"start video capture\"\n    StartVideoCapture = MES_CAMERA_EVT_START_VIDEO_CAPTURE,\n    //% block=\"stop video capture\"\n    StopVideoCapture = MES_CAMERA_EVT_STOP_VIDEO_CAPTURE,\n    //% block=\"toggle front-rear\"\n    ToggleFrontRear = MES_CAMERA_EVT_TOGGLE_FRONT_REAR,\n    //% block=\"launch photo mode\"\n    LaunchPhotoMode = MES_CAMERA_EVT_LAUNCH_PHOTO_MODE,\n    //% block=\"launch video mode\"\n    LaunchVideoMode = MES_CAMERA_EVT_LAUNCH_VIDEO_MODE,\n    //% block=\"stop photo mode\"\n    StopPhotoMode = MES_CAMERA_EVT_STOP_PHOTO_MODE,\n    //% block=\"stop video mode\"\n    StopVideoMode = MES_CAMERA_EVT_STOP_VIDEO_MODE,\n};\n\nenum class MesAlertEvent {\n    //% block=\"display toast\"\n    DisplayToast = MES_ALERT_EVT_DISPLAY_TOAST,\n    //% block=\"vibrate\"\n    Vibrate = MES_ALERT_EVT_VIBRATE,\n    //% block=\"play sound\"\n    PlaySound = MES_ALERT_EVT_PLAY_SOUND,\n    //% block=\"play ring tone\"\n    PlayRingtone = MES_ALERT_EVT_PLAY_RINGTONE,\n    //% block=\"find my phone\"\n    FindMyPhone = MES_ALERT_EVT_FIND_MY_PHONE,\n    //% block=\"ring alarm\"\n    RingAlarm = MES_ALERT_EVT_ALARM1,\n    //% block=\"ring alarm 2\"\n    RingAlarm2 = MES_ALERT_EVT_ALARM2,\n    //% block=\"ring alarm 3\"\n    RingAlarm3 = MES_ALERT_EVT_ALARM3,\n    //% block=\"ring alarm 4\"\n    RingAlarm4 = MES_ALERT_EVT_ALARM4,\n    //% block=\"ring alarm 5\"\n    RingAlarm5 = MES_ALERT_EVT_ALARM5,\n    //% block=\"ring alarm 6\"\n    RingAlarm6 = MES_ALERT_EVT_ALARM6,\n};\n\nenum class MesDeviceInfo {\n    //% block=\"incoming call\"\n    IncomingCall = MES_DEVICE_INCOMING_CALL,\n    //% block=\"incoming message\"\n    IncomingMessage = MES_DEVICE_INCOMING_MESSAGE,\n    //% block=\"orientation landscape\"\n    OrientationLandscape = MES_DEVICE_ORIENTATION_LANDSCAPE,\n    //% block=\"orientation portrait\"\n    OrientationPortrait = MES_DEVICE_ORIENTATION_PORTRAIT,\n    //% block=\"shaken\"\n    Shaken = MES_DEVICE_GESTURE_DEVICE_SHAKEN,\n    //% block=\"display off\"\n    DisplayOff = MES_DEVICE_DISPLAY_OFF,\n    //% block=\"display on\"\n    DisplayOn = MES_DEVICE_DISPLAY_ON,\n};\n\nenum class MesRemoteControlEvent {\n    //% block=\"play\"\n    play = MES_REMOTE_CONTROL_EVT_PLAY,\n    //% block=\"pause\"\n    pause = MES_REMOTE_CONTROL_EVT_PAUSE,\n    //% block=\"stop\"\n    stop = MES_REMOTE_CONTROL_EVT_STOP,\n    //% block=\"next track\"\n    nextTrack = MES_REMOTE_CONTROL_EVT_NEXTTRACK,\n    //% block=\"previous track\"\n    previousTrack = MES_REMOTE_CONTROL_EVT_PREVTRACK,\n    //% block=\"forward\"\n    forward = MES_REMOTE_CONTROL_EVT_FORWARD,\n    //% block=\"rewind\"\n    rewind = MES_REMOTE_CONTROL_EVT_REWIND,\n    //% block=\"volume up\"\n    volumeUp = MES_REMOTE_CONTROL_EVT_VOLUMEUP,\n    //% block=\"volume down\"\n    volumeDown = MES_REMOTE_CONTROL_EVT_VOLUMEDOWN,\n};\n\n/**\n * Control a phone with the BBC micro:bit via Bluetooth.\n */\n//% color=#008272 weight=80 icon=\"\\uf10b\"\nnamespace devices {\n\n    static int _signalStrength = -1;\n    static void signalStrengthHandler(MicroBitEvent ev) { \n        // keep in sync with MESEvents.h\n        _signalStrength = ev.value - 1; \n    }\n    static void initSignalStrength() {\n        if (_signalStrength < 0) {\n            _signalStrength = 0;\n            uBit.messageBus.listen(MES_SIGNAL_STRENGTH_ID, MICROBIT_EVT_ANY, signalStrengthHandler);\n        }        \n    }\n    \n    /**\n     * Returns the last signal strength reported by the paired device.\n     */\n    //% help=devices/signal-strength weight=24\n    //% blockId=devices_signal_strength block=\"signal strength\" blockGap=14 icon=\"\\uf012\" blockGap=14\n    int signalStrength() {\n        initSignalStrength();\n        return _signalStrength;\n    }\n\n    /**\n     * Registers code to run when the device notifies about a change of signal strength.\n     * @param body Code run when the signal strength changes.\n     */\n    //% weight=23 help=devices/on-signal-strength-changed\n    //% blockId=devices_signal_strength_changed_event block=\"on signal strength changed\" icon=\"\\uf012\"\n    void onSignalStrengthChanged(Action body) {\n        initSignalStrength();    \n        registerWithDal(MES_SIGNAL_STRENGTH_ID, MICROBIT_EVT_ANY, body);\n    }\n}\n",
      "devices.ts": "\nnamespace devices {\n    /**\n     * Sends a ``camera`` command to the parent device.\n     * @param event event description\n     */\n    //% weight=30 help=devices/tell-camera-to\n    //% blockId=devices_camera icon=\"\\uf030\" block=\"tell camera to|%property\" blockGap=8\n    export function tellCameraTo(event: MesCameraEvent) {\n        control.raiseEvent(DAL.MES_CAMERA_ID, event);\n    }\n\n    /**\n     * Sends a ``remote control`` command to the parent device.\n     * @param event event description\n     */\n    //% weight=29 help=devices/tell-remote-control-to\n    //% blockId=devices_remote_control block=\"tell remote control to|%property\" blockGap=14 icon=\"\\uf144\"\n    export function tellRemoteControlTo(event: MesRemoteControlEvent) {\n        control.raiseEvent(DAL.MES_REMOTE_CONTROL_ID, event);\n    }\n\n    /**\n     * Sends an ``alert`` command to the parent device.\n     * @param event event description\n     */\n    //% weight=27 help=devices/raise-alert-to\n    //% blockId=devices_alert block=\"raise alert to|%property\" icon=\"\\uf0f3\"\n    export function raiseAlertTo(event: MesAlertEvent) {\n        control.raiseEvent(DAL.MES_ALERTS_ID, event);\n    }\n\n    /**\n     * Registers code to run when the device notifies about a particular event.\n     * @param event event description\n     * @param body code handler when event is triggered\n     */\n    //% help=devices/on-notified weight=26\n    //% blockId=devices_device_info_event block=\"on notified|%event\" icon=\"\\uf10a\"\n    export function onNotified(event: MesDeviceInfo, body: () => void) {\n        control.onEvent(DAL.MES_DEVICE_INFO_ID, event, body);\n    }\n\n    /**\n     * Register code to run when the micro:bit receives a command from the paired gamepad.\n     * @param name button name\n     * @param body code to run when button is pressed\n     */\n    //% help=devices/on-gamepad-button weight=40\n    //% weight=25\n    //% blockId=devices_gamepad_event block=\"on gamepad button|%NAME\" icon=\"\\uf11b\"\n    export function onGamepadButton(name: MesDpadButtonInfo, body: () => void) {\n        control.onEvent(DAL.MES_DPAD_CONTROLLER_ID, name, body);\n    }\n}",
      "enums.d.ts": "// Auto-generated. Do not edit.\n\n\n    declare const enum MesCameraEvent {\n    //% block=\"take photo\"\n    TakePhoto = 3,  // MES_CAMERA_EVT_TAKE_PHOTO\n    //% block=\"start video capture\"\n    StartVideoCapture = 4,  // MES_CAMERA_EVT_START_VIDEO_CAPTURE\n    //% block=\"stop video capture\"\n    StopVideoCapture = 5,  // MES_CAMERA_EVT_STOP_VIDEO_CAPTURE\n    //% block=\"toggle front-rear\"\n    ToggleFrontRear = 8,  // MES_CAMERA_EVT_TOGGLE_FRONT_REAR\n    //% block=\"launch photo mode\"\n    LaunchPhotoMode = 1,  // MES_CAMERA_EVT_LAUNCH_PHOTO_MODE\n    //% block=\"launch video mode\"\n    LaunchVideoMode = 2,  // MES_CAMERA_EVT_LAUNCH_VIDEO_MODE\n    //% block=\"stop photo mode\"\n    StopPhotoMode = 6,  // MES_CAMERA_EVT_STOP_PHOTO_MODE\n    //% block=\"stop video mode\"\n    StopVideoMode = 7,  // MES_CAMERA_EVT_STOP_VIDEO_MODE\n    }\n\n\n    declare const enum MesAlertEvent {\n    //% block=\"display toast\"\n    DisplayToast = 1,  // MES_ALERT_EVT_DISPLAY_TOAST\n    //% block=\"vibrate\"\n    Vibrate = 2,  // MES_ALERT_EVT_VIBRATE\n    //% block=\"play sound\"\n    PlaySound = 3,  // MES_ALERT_EVT_PLAY_SOUND\n    //% block=\"play ring tone\"\n    PlayRingtone = 4,  // MES_ALERT_EVT_PLAY_RINGTONE\n    //% block=\"find my phone\"\n    FindMyPhone = 5,  // MES_ALERT_EVT_FIND_MY_PHONE\n    //% block=\"ring alarm\"\n    RingAlarm = 6,  // MES_ALERT_EVT_ALARM1\n    //% block=\"ring alarm 2\"\n    RingAlarm2 = 7,  // MES_ALERT_EVT_ALARM2\n    //% block=\"ring alarm 3\"\n    RingAlarm3 = 8,  // MES_ALERT_EVT_ALARM3\n    //% block=\"ring alarm 4\"\n    RingAlarm4 = 9,  // MES_ALERT_EVT_ALARM4\n    //% block=\"ring alarm 5\"\n    RingAlarm5 = 10,  // MES_ALERT_EVT_ALARM5\n    //% block=\"ring alarm 6\"\n    RingAlarm6 = 11,  // MES_ALERT_EVT_ALARM6\n    }\n\n\n    declare const enum MesDeviceInfo {\n    //% block=\"incoming call\"\n    IncomingCall = 7,  // MES_DEVICE_INCOMING_CALL\n    //% block=\"incoming message\"\n    IncomingMessage = 8,  // MES_DEVICE_INCOMING_MESSAGE\n    //% block=\"orientation landscape\"\n    OrientationLandscape = 1,  // MES_DEVICE_ORIENTATION_LANDSCAPE\n    //% block=\"orientation portrait\"\n    OrientationPortrait = 2,  // MES_DEVICE_ORIENTATION_PORTRAIT\n    //% block=\"shaken\"\n    Shaken = 4,  // MES_DEVICE_GESTURE_DEVICE_SHAKEN\n    //% block=\"display off\"\n    DisplayOff = 5,  // MES_DEVICE_DISPLAY_OFF\n    //% block=\"display on\"\n    DisplayOn = 6,  // MES_DEVICE_DISPLAY_ON\n    }\n\n\n    declare const enum MesRemoteControlEvent {\n    //% block=\"play\"\n    play = 1,  // MES_REMOTE_CONTROL_EVT_PLAY\n    //% block=\"pause\"\n    pause = 2,  // MES_REMOTE_CONTROL_EVT_PAUSE\n    //% block=\"stop\"\n    stop = 3,  // MES_REMOTE_CONTROL_EVT_STOP\n    //% block=\"next track\"\n    nextTrack = 4,  // MES_REMOTE_CONTROL_EVT_NEXTTRACK\n    //% block=\"previous track\"\n    previousTrack = 5,  // MES_REMOTE_CONTROL_EVT_PREVTRACK\n    //% block=\"forward\"\n    forward = 6,  // MES_REMOTE_CONTROL_EVT_FORWARD\n    //% block=\"rewind\"\n    rewind = 7,  // MES_REMOTE_CONTROL_EVT_REWIND\n    //% block=\"volume up\"\n    volumeUp = 8,  // MES_REMOTE_CONTROL_EVT_VOLUMEUP\n    //% block=\"volume down\"\n    volumeDown = 9,  // MES_REMOTE_CONTROL_EVT_VOLUMEDOWN\n    }\ndeclare namespace devices {\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "pxt.json": "{\n    \"name\": \"devices\",\n    \"description\": \"BETA -  Camera, remote control and other Bluetooth services. App required.\",\n    \"files\": [\n        \"README.md\",\n        \"enums.d.ts\",\n        \"shims.d.ts\",\n        \"devices.cpp\",\n        \"devices.ts\"\n    ],\n    \"icon\": \"./static/packages/devices/icon.png\",\n    \"public\": true,\n    \"dependencies\": {\n        \"core\": \"*\",\n        \"bluetooth\": \"*\"\n    },\n    \"targetVersions\": {\n        \"target\": \"1.1.26\"\n    }\n}",
      "shims.d.ts": "// Auto-generated. Do not edit.\n\n\n    /**\n     * Control a phone with the BBC micro:bit via Bluetooth.\n     */\n    //% color=#008272 weight=80 icon=\"\\uf10b\"\ndeclare namespace devices {\n\n    /**\n     * Returns the last signal strength reported by the paired device.\n     */\n    //% help=devices/signal-strength weight=24\n    //% blockId=devices_signal_strength block=\"signal strength\" blockGap=14 icon=\"\\uf012\" blockGap=14 shim=devices::signalStrength\n    function signalStrength(): int32;\n\n    /**\n     * Registers code to run when the device notifies about a change of signal strength.\n     * @param body Code run when the signal strength changes.\n     */\n    //% weight=23 help=devices/on-signal-strength-changed\n    //% blockId=devices_signal_strength_changed_event block=\"on signal strength changed\" icon=\"\\uf012\" shim=devices::onSignalStrengthChanged\n    function onSignalStrengthChanged(body: () => void): void;\n}\n\n// Auto-generated. Do not edit. Really.\n"
    },
    "bluetooth": {
      "README.md": "# Bluetooth services\n",
      "bluetooth.cpp": "#include \"pxt.h\"\n#include \"MESEvents.h\"\n#include \"MicroBitUARTService.h\"\n\nusing namespace pxt;\n\n/**\n * Support for additional Bluetooth services.\n */\n//% color=#0082FB weight=96 icon=\"\\uf294\"\nnamespace bluetooth {\n    MicroBitUARTService *uart = NULL;\n\n    /**\n    *  Starts the Bluetooth accelerometer service\n    */\n    //% help=bluetooth/start-accelerometer-service\n    //% blockId=bluetooth_start_accelerometer_service block=\"bluetooth accelerometer service\"\n    //% parts=\"bluetooth\" weight=90 blockGap=8\n    void startAccelerometerService() {\n        new MicroBitAccelerometerService(*uBit.ble, uBit.accelerometer);        \n    }   \n\n    /**\n    *  Starts the Bluetooth button service\n    */\n    //% help=bluetooth/start-button-service\n    //% blockId=bluetooth_start_button_service block=\"bluetooth button service\" blockGap=8\n    //% parts=\"bluetooth\" weight=89\n    void startButtonService() {\n        new MicroBitButtonService(*uBit.ble);      \n    }\n\n    /**\n    *  Starts the Bluetooth IO pin service.\n    */\n    //% help=bluetooth/start-io-pin-service\n    //% blockId=bluetooth_start_io_pin_service block=\"bluetooth io pin service\" blockGap=8\n    //% parts=\"bluetooth\" weight=88\n    void startIOPinService() {\n        new MicroBitIOPinService(*uBit.ble, uBit.io);\n    }\n\n    /**\n    *  Starts the Bluetooth LED service\n    */\n    //% help=bluetooth/start-led-service\n    //% blockId=bluetooth_start_led_service block=\"bluetooth led service\" blockGap=8\n    //% parts=\"bluetooth\" weight=87\n    void startLEDService() {\n        new MicroBitLEDService(*uBit.ble, uBit.display);\n    }\n\n    /**\n    *  Starts the Bluetooth temperature service\n    */\n    //% help=bluetooth/start-temperature-service\n    //% blockId=bluetooth_start_temperature_service block=\"bluetooth temperature service\" blockGap=8\n    //% parts=\"bluetooth\" weight=86\n    void startTemperatureService() {    \n        new MicroBitTemperatureService(*uBit.ble, uBit.thermometer);        \n    }\n\n    /**\n    *  Starts the Bluetooth magnetometer service\n    */\n    //% help=bluetooth/start-magnetometer-service\n    //% blockId=bluetooth_start_magnetometer_service block=\"bluetooth magnetometer service\"\n    //% parts=\"bluetooth\" weight=85\n    void startMagnetometerService() {    \n        new MicroBitMagnetometerService(*uBit.ble, uBit.compass); \n    }\n\n\n    /**\n    *  Starts the Bluetooth UART service\n    */\n    //% help=bluetooth/start-uart-service\n    //% blockId=bluetooth_start_uart_service block=\"bluetooth uart service\"\n    //% parts=\"bluetooth\" advanced=true\n    void startUartService() {\n        if (uart) return;\n        // 61 octet buffer size is 3 x (MTU - 3) + 1\n        // MTU on nRF51822 is 23 octets. 3 are used by Attribute Protocol header data leaving 20 octets for payload\n        // So we allow a RX buffer that can contain 3 x max length messages plus one octet for a terminator character\n        uart = new MicroBitUARTService(*uBit.ble, 61, 60);\n    }\n    \n    //%\n    void uartWriteString(String data) {\n        startUartService();\n    \tuart->send(MSTR(data));\n    }    \n\n    //%\n    String uartReadUntil(String del) {\n        startUartService();\n        return PSTR(uart->readUntil(MSTR(del)));\n    }    \n\n    /**\n    * Registers an event to be fired when one of the delimiter is matched.\n    * @param delimiters the characters to match received characters against.\n    */\n    //% help=bluetooth/on-uart-data-received\n    //% weight=18 blockId=bluetooth_on_data_received block=\"bluetooth|on data received %delimiters=serial_delimiter_conv\"\n    void onUartDataReceived(String delimiters, Action body) {\n      startUartService();\n      uart->eventOn(MSTR(delimiters));\n      registerWithDal(MICROBIT_ID_BLE_UART, MICROBIT_UART_S_EVT_DELIM_MATCH, body);\n    }\n\n    /**\n     * Register code to run when the micro:bit is connected to over Bluetooth\n     * @param body Code to run when a Bluetooth connection is established\n     */\n    //% help=bluetooth/on-bluetooth-connected weight=20\n    //% blockId=bluetooth_on_connected block=\"on bluetooth connected\" blockGap=8\n    //% parts=\"bluetooth\"\n    void onBluetoothConnected(Action body) {\n        registerWithDal(MICROBIT_ID_BLE, MICROBIT_BLE_EVT_CONNECTED, body);\n    }    \n\n     /**\n     * Register code to run when a bluetooth connection to the micro:bit is lost\n     * @param body Code to run when a Bluetooth connection is lost\n     */\n    //% help=bluetooth/on-bluetooth-disconnected weight=19\n    //% blockId=bluetooth_on_disconnected block=\"on bluetooth disconnected\"\n    //% parts=\"bluetooth\"\n    void onBluetoothDisconnected(Action body) {\n        registerWithDal(MICROBIT_ID_BLE, MICROBIT_BLE_EVT_DISCONNECTED, body);\n    } \n\n    const int8_t CALIBRATED_POWERS[] = {-49, -37, -33, -28, -25, -20, -15, -10};\n    /**\n    * Advertise an Eddystone URL\n\t* @param url the url to transmit. Must be no longer than the supported eddystone url length, eg: \"https://makecode.com\"\n\t* @param power power level between 0 and 7, eg: 7\n    * @param connectable true to keep bluetooth connectable for other services, false otherwise.\n    */\n    //% blockId=eddystone_advertise_url block=\"bluetooth advertise url %url|with power %power|connectable %connectable\"\n    //% parts=bluetooth weight=11 blockGap=8\n    //% help=bluetooth/advertise-url blockExternalInputs=1\n    void advertiseUrl(String url, int power, bool connectable) {\n        power = min(MICROBIT_BLE_POWER_LEVELS-1, max(0, power));\n        int8_t level = CALIBRATED_POWERS[power];\n        uBit.bleManager.advertiseEddystoneUrl(MSTR(url), level, connectable);\n        uBit.bleManager.setTransmitPower(power);\n    }\n\n    /**\n    * Advertise an Eddystone UID\n\t* @param nsAndInstance 16 bytes buffer of namespace (bytes 0-9) and instance (bytes 10-15)\n\t* @param power power level between 0 and 7, eg: 7\n    * @param connectable true to keep bluetooth connectable for other services, false otherwise.\n    */\n    //% parts=bluetooth weight=12 advanced=true\n    void advertiseUidBuffer(Buffer nsAndInstance, int power, bool connectable) {\n        auto buf = nsAndInstance;\n        if (buf->length != 16) return;\n\n        power = min(MICROBIT_BLE_POWER_LEVELS-1, max(0, power));\n        int8_t level = CALIBRATED_POWERS[power];\n        uBit.bleManager.advertiseEddystoneUid((const char*)buf->data, (const char*)buf->data + 10, level, connectable);\n    }\n\n    /**\n    * Sets the bluetooth transmit power between 0 (minimal) and 7 (maximum).\n    * @param power power level between 0 (minimal) and 7 (maximum), eg: 7.\n    */\n    //% parts=bluetooth weight=5 help=bluetooth/set-transmit-power advanced=true\n    //% blockId=bluetooth_settransmitpower block=\"bluetooth set transmit power %power\"\n    void setTransmitPower(int power) {\n        uBit.bleManager.setTransmitPower(min(MICROBIT_BLE_POWER_LEVELS-1, max(0, power)));\n    }\n\n    /**\n    * Stops advertising Eddystone end points\n    */\n    //% blockId=eddystone_stop_advertising block=\"bluetooth stop advertising\"\n    //% parts=bluetooth weight=10\n    //% help=bluetooth/stop-advertising advanced=true\n    void stopAdvertising() {\n        uBit.bleManager.stopAdvertising();\n    } \n}",
      "bluetooth.ts": "/**\n * Support for additional Bluetooth services.\n */\n//% color=#0082FB weight=96 icon=\"\\uf294\"\nnamespace bluetooth {\n    /**\n    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.\n    */\n    //% help=bluetooth/uart-write-string weight=80\n    //% blockId=bluetooth_uart_write block=\"bluetooth uart|write string %data\" blockGap=8\n    //% parts=\"bluetooth\" shim=bluetooth::uartWriteString advanced=true\n    export function uartWriteString(data: string): void {\n        // dummy implementation for simulator\n        console.log(\"UART Write: \" + data)\n    }\n\n    /**\n     * Prints a numeric value to the serial\n     */\n    //% help=bluetooth/uart-write-number weight=79\n    //% weight=89 blockGap=8 advanced=true\n    //% blockId=bluetooth_uart_writenumber block=\"bluetooth uart|write number %value\"\n    export function uartWriteNumber(value: number): void {\n        uartWriteString(value.toString());\n    }\n\n    /**\n     * Writes a ``name: value`` pair line to the serial.\n     * @param name name of the value stream, eg: x\n     * @param value to write\n     */\n    //% weight=88 weight=78\n    //% help=bluetooth/uart-write-value advanced=true\n    //% blockId=bluetooth_uart_writevalue block=\"bluetooth uart|write value %name|= %value\"\n    export function uartWriteValue(name: string, value: number): void {\n        uartWriteString(name + \":\" + value + \"\\r\\n\");\n    }\n\n    /**\n     *  Reads from the Bluetooth UART service buffer, returning its contents when the specified delimiter character is encountered.\n     */\n    //% help=bluetooth/uart-read-until weight=75\n    //% blockId=bluetooth_uart_read block=\"bluetooth uart|read until %del=serial_delimiter_conv\"\n    //% parts=\"bluetooth\" shim=bluetooth::uartReadUntil advanced=true\n    export function uartReadUntil(del: string): string {\n        // dummy implementation for simulator\n        return \"???\"\n    }\n\n    /**\n    * Advertise an Eddystone UID\n    * @param ns 4 last bytes of the namespace uid\n    * @param instance 4 last bytes of the instance uid\n    * @param power power level between 0 and 7, eg: 7\n    * @param connectable true to keep bluetooth connectable for other services, false otherwise.\n    */\n    //% blockId=eddystone_advertise_uid block=\"bluetooth advertise UID|namespace (bytes 6-9)%ns|instance (bytes 2-6)%instance|with power %power|connectable %connectable\"\n    //% parts=bluetooth weight=12 blockGap=8\n    //% help=bluetooth/advertise-uid blockExternalInputs=1\n    export function advertiseUid(ns: number, instance: number, power: number, connectable: boolean) {\n        const buf = pins.createBuffer(16);\n        buf.setNumber(NumberFormat.Int32BE, 6, ns);\n        buf.setNumber(NumberFormat.Int32BE, 12, instance);\n        bluetooth.advertiseUidBuffer(buf, power, connectable);\n    }\n}\n",
      "enums.d.ts": "// Auto-generated. Do not edit.\ndeclare namespace bluetooth {\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "pxt.json": "{\n    \"name\": \"bluetooth\",\n    \"description\": \"Bluetooth services\",\n    \"files\": [\n        \"README.md\",\n        \"enums.d.ts\",\n        \"shims.d.ts\",\n        \"bluetooth.ts\",\n        \"bluetooth.cpp\"\n    ],\n    \"icon\": \"./static/packages/bluetooth/icon.png\",\n    \"public\": true,\n    \"dependencies\": {\n        \"core\": \"*\"\n    },\n    \"yotta\": {\n        \"config\": {\n            \"microbit-dal\": {\n                \"bluetooth\": {\n                    \"enabled\": 1\n                }\n            }\n        },\n        \"optionalConfig\": {\n            \"microbit-dal\": {\n                \"gatt_table_size\": \"0x700\"\n            }\n        },\n        \"userConfigs\": [\n            {\n                \"description\": \"No Pairing Required: Anyone can connect via Bluetooth.\",\n                \"config\": {\n                    \"microbit-dal\": {\n                        \"bluetooth\": {\n                            \"open\": 1,\n                            \"pairing_mode\": 0,\n                            \"whitelist\": 0,\n                            \"security_level\": null\n                        }\n                    }\n                }\n            },\n            {\n                \"description\": \"JustWorks pairing (default): Pairing is automatic once the pairing is initiated.\",\n                \"config\": {\n                    \"microbit-dal\": {\n                        \"bluetooth\": {\n                            \"open\": null,\n                            \"pairing_mode\": null,\n                            \"whitelist\": null,\n                            \"security_level\": null\n                        }\n                    }\n                }\n            },\n            {\n                \"description\": \"Passkey pairing: Pairing requires 6 digit key to pair.\",\n                \"config\": {\n                    \"microbit-dal\": {\n                        \"bluetooth\": {\n                            \"open\": 0,\n                            \"pairing_mode\": 1,\n                            \"whitelist\": 1,\n                            \"security_level\": \"SECURITY_MODE_ENCRYPTION_WITH_MITM\"\n                        }\n                    }\n                }\n            }\n        ]\n    },\n    \"targetVersions\": {\n        \"target\": \"1.1.26\"\n    }\n}",
      "shims.d.ts": "// Auto-generated. Do not edit.\n\n\n    /**\n     * Support for additional Bluetooth services.\n     */\n    //% color=#0082FB weight=96 icon=\"\\uf294\"\ndeclare namespace bluetooth {\n\n    /**\n     *  Starts the Bluetooth accelerometer service\n     */\n    //% help=bluetooth/start-accelerometer-service\n    //% blockId=bluetooth_start_accelerometer_service block=\"bluetooth accelerometer service\"\n    //% parts=\"bluetooth\" weight=90 blockGap=8 shim=bluetooth::startAccelerometerService\n    function startAccelerometerService(): void;\n\n    /**\n     *  Starts the Bluetooth button service\n     */\n    //% help=bluetooth/start-button-service\n    //% blockId=bluetooth_start_button_service block=\"bluetooth button service\" blockGap=8\n    //% parts=\"bluetooth\" weight=89 shim=bluetooth::startButtonService\n    function startButtonService(): void;\n\n    /**\n     *  Starts the Bluetooth IO pin service.\n     */\n    //% help=bluetooth/start-io-pin-service\n    //% blockId=bluetooth_start_io_pin_service block=\"bluetooth io pin service\" blockGap=8\n    //% parts=\"bluetooth\" weight=88 shim=bluetooth::startIOPinService\n    function startIOPinService(): void;\n\n    /**\n     *  Starts the Bluetooth LED service\n     */\n    //% help=bluetooth/start-led-service\n    //% blockId=bluetooth_start_led_service block=\"bluetooth led service\" blockGap=8\n    //% parts=\"bluetooth\" weight=87 shim=bluetooth::startLEDService\n    function startLEDService(): void;\n\n    /**\n     *  Starts the Bluetooth temperature service\n     */\n    //% help=bluetooth/start-temperature-service\n    //% blockId=bluetooth_start_temperature_service block=\"bluetooth temperature service\" blockGap=8\n    //% parts=\"bluetooth\" weight=86 shim=bluetooth::startTemperatureService\n    function startTemperatureService(): void;\n\n    /**\n     *  Starts the Bluetooth magnetometer service\n     */\n    //% help=bluetooth/start-magnetometer-service\n    //% blockId=bluetooth_start_magnetometer_service block=\"bluetooth magnetometer service\"\n    //% parts=\"bluetooth\" weight=85 shim=bluetooth::startMagnetometerService\n    function startMagnetometerService(): void;\n\n    /**\n     *  Starts the Bluetooth UART service\n     */\n    //% help=bluetooth/start-uart-service\n    //% blockId=bluetooth_start_uart_service block=\"bluetooth uart service\"\n    //% parts=\"bluetooth\" advanced=true shim=bluetooth::startUartService\n    function startUartService(): void;\n\n    /**\n     * Registers an event to be fired when one of the delimiter is matched.\n     * @param delimiters the characters to match received characters against.\n     */\n    //% help=bluetooth/on-uart-data-received\n    //% weight=18 blockId=bluetooth_on_data_received block=\"bluetooth|on data received %delimiters=serial_delimiter_conv\" shim=bluetooth::onUartDataReceived\n    function onUartDataReceived(delimiters: string, body: () => void): void;\n\n    /**\n     * Register code to run when the micro:bit is connected to over Bluetooth\n     * @param body Code to run when a Bluetooth connection is established\n     */\n    //% help=bluetooth/on-bluetooth-connected weight=20\n    //% blockId=bluetooth_on_connected block=\"on bluetooth connected\" blockGap=8\n    //% parts=\"bluetooth\" shim=bluetooth::onBluetoothConnected\n    function onBluetoothConnected(body: () => void): void;\n\n    /**\n     * Register code to run when a bluetooth connection to the micro:bit is lost\n     * @param body Code to run when a Bluetooth connection is lost\n     */\n    //% help=bluetooth/on-bluetooth-disconnected weight=19\n    //% blockId=bluetooth_on_disconnected block=\"on bluetooth disconnected\"\n    //% parts=\"bluetooth\" shim=bluetooth::onBluetoothDisconnected\n    function onBluetoothDisconnected(body: () => void): void;\n\n    /**\n     * Advertise an Eddystone URL\n     * @param url the url to transmit. Must be no longer than the supported eddystone url length, eg: \"https://makecode.com\"\n     * @param power power level between 0 and 7, eg: 7\n     * @param connectable true to keep bluetooth connectable for other services, false otherwise.\n     */\n    //% blockId=eddystone_advertise_url block=\"bluetooth advertise url %url|with power %power|connectable %connectable\"\n    //% parts=bluetooth weight=11 blockGap=8\n    //% help=bluetooth/advertise-url blockExternalInputs=1 shim=bluetooth::advertiseUrl\n    function advertiseUrl(url: string, power: int32, connectable: boolean): void;\n\n    /**\n     * Advertise an Eddystone UID\n     * @param nsAndInstance 16 bytes buffer of namespace (bytes 0-9) and instance (bytes 10-15)\n     * @param power power level between 0 and 7, eg: 7\n     * @param connectable true to keep bluetooth connectable for other services, false otherwise.\n     */\n    //% parts=bluetooth weight=12 advanced=true shim=bluetooth::advertiseUidBuffer\n    function advertiseUidBuffer(nsAndInstance: Buffer, power: int32, connectable: boolean): void;\n\n    /**\n     * Sets the bluetooth transmit power between 0 (minimal) and 7 (maximum).\n     * @param power power level between 0 (minimal) and 7 (maximum), eg: 7.\n     */\n    //% parts=bluetooth weight=5 help=bluetooth/set-transmit-power advanced=true\n    //% blockId=bluetooth_settransmitpower block=\"bluetooth set transmit power %power\" shim=bluetooth::setTransmitPower\n    function setTransmitPower(power: int32): void;\n\n    /**\n     * Stops advertising Eddystone end points\n     */\n    //% blockId=eddystone_stop_advertising block=\"bluetooth stop advertising\"\n    //% parts=bluetooth weight=10\n    //% help=bluetooth/stop-advertising advanced=true shim=bluetooth::stopAdvertising\n    function stopAdvertising(): void;\n}\n\n// Auto-generated. Do not edit. Really.\n"
    },
    "minode": {
      "README.md": "# pxt-minode\n\n## Supported targets\n\n* for PXT/microbit\n(The metadata above is needed for package search.)\n",
      "enums.d.ts": "// Will be auto-generated if needed.\n",
      "enums.ts": "enum ConnName {\n    //% block=\"A0\" enumval=0\n    A0 = 0,\n    //% block=\"A1\" enumval=1\n    A1 = 1,\n    //% block=\"A2\" enumval=2\n    A2 = 2,\n    //% block=\"D12\" enumval=12\n    D12 = 12,\n    //% block=\"D13\" enumval=13\n    D13 = 13,\n    //% block=\"D14\" enumval=14\n    D14 = 14,\n    //% block=\"D15\" enumval=15\n    D15 = 15,\n    //% block=\"D16\" enumval=16\n    D16 = 16\n}\n\nenum AnalogConnName {\n    //% block=\"A0\" enumval=0\n    Analog_A0 = 0,\n    //% block=\"A1\" enumval=1\n    Analog_A1 = 1,\n    //% block=\"A2\" enumval=2\n    Analog_A2 = 2\n}\n\nenum SwitchEvent {\n    //% block=\"open\" enumval=1\n    MINODE_SWITCH_EVT_OPEN = 1,\n    //% block=\"close\" enumval=2\n    MINODE_SWITCH_EVT_CLOSE = 2,\n}\n\nenum FanStatus {\n    //% block=\"open\" enumval=1\n    MINODE_FAN_OPEN = 1,\n    //% block=\"close\" enumval=2\n    MINODE_FAN_CLOSE = 2,\n}\n\nenum DHTTemStyle {\n    //% block=\"Celsius\" enumval=1\n    MINODE_DHT_CELSIUS = 1,\n    //% block=\"Fahrenheit\" enumval=2\n    MINODE_FAN_FAHRENHEIT = 2,\n}\n\nenum MiNodeColor {\n    //% block=\"Red\" enumval=0\n    MiNode_RGB_COLOR_RED = 0,\n    //% block=\"Green\" enumval=1\n    MiNode_RGB_COLOR_GREEN = 1,\n    //% block=\"Blue\" enumval=2\n    MiNode_RGB_COLOR_BLUE = 2,\n    //% block=\"Yellow\" enumval=3\n    MiNode_RGB_COLOR_YELLOW = 3,\n    //% block=\"Pink\" enumval=4\n    MiNode_RGB_COLOR_PINK = 4,\n    //% block=\"Cyan\" enumval=5\n    MiNode_RGB_COLOR_CYAN = 5,\n    //% block=\"White\" enumval=6\n    MiNode_RGB_COLOR_WHITE = 6,\n}",
      "libs/MiNode.h": "#ifndef _MINODE_H\n#define _MINODE_H\n\n#include \"mbed.h\"\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeConn.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeIO.h\"\n#include \"MiNodeModulePool.h\"\n#include \"MiNodeRGB.h\"\n#include \"MiNodeDHT11.h\"\n#include \"MiNodeSwitch.h\"\n#include \"MiNodeRotary.h\"\n#include \"MiNodePIR.h\"\n#include \"MiNodeMIC.h\"\n#include \"MiNodeLightSensor.h\"\n#include \"MiNodeFan.h\"\n\nclass MiNode\n{\n\npublic:\n  MiNode() :\n  io(MINODE_ID_A0, MINODE_ID_A1, MINODE_ID_A2,\n     MINODE_ID_D12, MINODE_ID_D13, MINODE_ID_D14, MINODE_ID_D15)\n  {\n\n  }\n\n  ~MiNode() {\n\n  }\n\n  MiNodeIO io;\n  MiNodeModulePool<MiNodeRGB>      rgb;\n  MiNodeModulePool<MiNodeDHT>      dht11;\n  MiNodeModulePool<MiNodeSwitch>   switches;\n  MiNodeModulePool<MiNodeRotary>   rotary;\n  MiNodeModulePool<MiNodePIR>      pir;\n  MiNodeModulePool<MiNodeMIC>      mic;\n  MiNodeModulePool<MiNodeLight>    light;\n  MiNodeModulePool<MiNodeFan>      fan;\n\n};\n\n#endif",
      "libs/MiNodeComponent.cpp": "#include \"MiNodeComponent.h\"\n\nMiNodeComponent::MiNodeComponent() :\ncn(MN_NC),cna(Analog_MN_NC),baseId(0)\n{\n  this->id = MINODE_ID_NC;\n}\n\nMiNodeComponent::~MiNodeComponent()\n{\n\n}\n\nvoid MiNodeComponent::initConnector(ConnName connName)\n{\n  if(cn != MN_NC) {\n    return;\n  }\n\n  cn = connName;\n  this->id = MiNodeConn::calcId(connName);\n}\n\nvoid MiNodeComponent::initAConnector(AnalogConnName connName)\n{\n  if(cna != Analog_MN_NC) {\n    return;\n  }\n\n  cna = connName;\n  this->id = MiNodeConn::calcId(connName);\n}\n\nConnName MiNodeComponent::getConnector()\n{\n  return cn;\n}\n\nAnalogConnName MiNodeComponent::AgetConnector()\n{\n  return cna;\n}\n\nint MiNodeComponent::getId()\n{\n  return baseId + this->id;\n}",
      "libs/MiNodeComponent.h": "#ifndef MINODE_COMPONENT_h\n#define MINODE_COMPONENT_h\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MiNodeConn.h\"\n\n\n#define MINODE_ID_START                 100\n#define MINODE_ID_NC                    (uint16_t)0xFFFFFFFF\n\n#define MINODE_ID_A0                    MINODE_ID_START\n#define MINODE_ID_A1                    MINODE_ID_A0 + 2\n#define MINODE_ID_A2                    MINODE_ID_A0 + 4\n\n#define MINODE_ID_D_START               MINODE_ID_START + 10\n#define MINODE_ID_D0                    MINODE_ID_NC\n#define MINODE_ID_D1                    MINODE_ID_NC\n#define MINODE_ID_D2                    MINODE_ID_NC\n#define MINODE_ID_D3                    MINODE_ID_NC\n#define MINODE_ID_D4                    MINODE_ID_NC\n#define MINODE_ID_D5                    MINODE_ID_NC\n#define MINODE_ID_D6                    MINODE_ID_NC\n#define MINODE_ID_D7                    MINODE_ID_NC\n#define MINODE_ID_D8                    MINODE_ID_NC\n#define MINODE_ID_D9                    MINODE_ID_NC\n#define MINODE_ID_D10                   MINODE_ID_NC\n#define MINODE_ID_D11                   MINODE_ID_NC\n#define MINODE_ID_D12                   MINODE_ID_D_START + 24\n#define MINODE_ID_D13                   MINODE_ID_D_START + 26\n#define MINODE_ID_D14                   MINODE_ID_D_START + 28\n#define MINODE_ID_D15                   MINODE_ID_D_START + 30\n\n\n\n\n#define MINODE_ID_MODULE_START          150\n#define MINODE_ID_MODULE_SWITCH         MINODE_ID_MODULE_START\n#define MINODE_ID_MODULE_LIGHT          MINODE_ID_MODULE_START+20\n#define MINODE_ID_MODULE_DHT11          MINODE_ID_MODULE_START+40\n#define MINODE_ID_MODULE_RGB            MINODE_ID_MODULE_START+60\n#define MINODE_ID_MODULE_PIR            MINODE_ID_MODULE_START+80\n#define MINODE_ID_MODULE_MIC            MINODE_ID_MODULE_START+100\n#define MINODE_ID_MODULE_ROTARY         MINODE_ID_MODULE_START+120\n#define MINODE_ID_MODULE_RELAY          MINODE_ID_MODULE_START+140\n#define MINODE_ID_MODULE_FAN            MINODE_ID_MODULE_START+160\n#define MINODE_ID_MODULE_SPEAKER        MINODE_ID_MODULE_START+180\n\n\nclass MiNodeComponent : public MicroBitComponent\n{\npublic:\n  MiNodeComponent();\n  ~MiNodeComponent();\n\n  ConnName getConnector();\n  AnalogConnName AgetConnector();\n  int getId();\n\nprotected:\n\n  void initConnector(ConnName connName);\n  void initAConnector(AnalogConnName connName);\n\n  ConnName cn;\n  AnalogConnName cna;\n  int baseId;\n};\n\n\n#endif",
      "libs/MiNodeConn.cpp": "#include \"MiNodeConn.h\"\n\nMiNodeConn::MiNodeConn(int id, PinName p0, PinName p1) :\n  P0 (id, p0, PIN_CAPABILITY_ALL),\n  P1 (id + 1, p1, PIN_CAPABILITY_ALL)\n{\n\n}\n\nvoid MiNodeConn::calcPinName(ConnName name, PinName* p0, PinName* p1)\n{\n  PinName pin0 = NC;\n  PinName pin1 = NC;\n\n  switch(name) {\n    case A0:\n      pin0 = MICROBIT_PIN_P0;\n      pin1 = MICROBIT_PIN_P1;\n      break;\n    case A1:\n      pin0 = MICROBIT_PIN_P1;\n      pin1 = MICROBIT_PIN_P2;\n      break;\n    case A2:\n      pin0 = MICROBIT_PIN_P2;\n      pin1 = MICROBIT_PIN_P3;\n      break;\n    case D12:\n      pin0 = MICROBIT_PIN_P12;\n      pin1 = MICROBIT_PIN_P13;\n      break;\n    case D13:\n      pin0 = MICROBIT_PIN_P13;\n      pin1 = MICROBIT_PIN_P14;\n      break;\n    case D14:\n      pin0 = MICROBIT_PIN_P14;\n      pin1 = MICROBIT_PIN_P15;\n      break;\n    case D15:\n      pin0 = MICROBIT_PIN_P15;\n      pin1 = MICROBIT_PIN_P16;\n      break;\n    default:\n      pin0 = MICROBIT_PIN_P0;\n      pin1 = MICROBIT_PIN_P1;\n      break;\n  }\n\n  *p0 = pin0;\n  *p1 = pin1;\n\n  return;\n}\n\nvoid MiNodeConn::calcPinName(AnalogConnName name, PinName* p0, PinName* p1)\n{\n  PinName pin0 = NC;\n  PinName pin1 = NC;\n\n  switch(name) {\n    case A0:\n      pin0 = MICROBIT_PIN_P0;\n      pin1 = MICROBIT_PIN_P1;\n      break;\n    case A1:\n      pin0 = MICROBIT_PIN_P1;\n      pin1 = MICROBIT_PIN_P2;\n      break;\n    case A2:\n      pin0 = MICROBIT_PIN_P2;\n      pin1 = MICROBIT_PIN_P3;\n      break;\n    default:\n      pin0 = MICROBIT_PIN_P0;\n      pin1 = MICROBIT_PIN_P1;\n      break;\n  }\n\n  *p0 = pin0;\n  *p1 = pin1;\n\n  return;\n}\n\nConnName MiNodeConn::calcConnName(PinName p0)\n{\n  ConnName conn = MN_NC;\n\n  switch(p0) {\n    case MICROBIT_PIN_P0:\n      conn = A0;\n      break;\n    case MICROBIT_PIN_P1:\n      conn = A1;\n      break;\n    case MICROBIT_PIN_P2:\n      conn = A2;\n      break;\n    case MICROBIT_PIN_P12:\n      conn = D12;\n      break;\n    case MICROBIT_PIN_P13:\n      conn = D13;\n      break;\n    case MICROBIT_PIN_P14:\n      conn = D14;\n      break;\n    case MICROBIT_PIN_P15:\n      conn = D15;\n      break;\n    default:\n      conn = A0;\n      break;\n  }\n  return conn;\n}\n\nint MiNodeConn::calcId(ConnName name)\n{\n  return (int)name;\n}\n\nint MiNodeConn::calcId(AnalogConnName name)\n{\n  return (int)name;\n}\n\n\nPinName MiNodeConn::calcP0Name(ConnName name)\n{\n  PinName pin0;\n  PinName pin1;\n  MiNodeConn::calcPinName(name, &pin0, &pin1);\n\n  return pin0;\n}\n\nPinName MiNodeConn::calcP0Name(AnalogConnName name)\n{\n  PinName pin0;\n  PinName pin1;\n  MiNodeConn::calcPinName(name, &pin0, &pin1);\n\n  return pin0;\n}\n\nPinName MiNodeConn::calcP1Name(ConnName name)\n{\n  PinName pin0;\n  PinName pin1;\n  MiNodeConn::calcPinName(name, &pin0, &pin1);\n\n  return pin1;\n}\n\nPinName MiNodeConn::calcP1Name(AnalogConnName name)\n{\n  PinName pin0;\n  PinName pin1;\n  MiNodeConn::calcPinName(name, &pin0, &pin1);\n\n  return pin1;\n}\n",
      "libs/MiNodeConn.h": "#ifndef MINODE_CONN_H\n#define MINODE_CONN_H\n\n#include \"mbed.h\"\n#include \"MicroBitConfig.h\"\n#include \"MicroBitPin.h\"\n\ntypedef enum\n{\n  A0 = 0,\n  A1 = 1,\n  A2 = 2,\n  D12 = 12,\n  D13 = 13,\n  D14 = 14,\n  D15 = 15,\n  D16 = 16,\n  MN_NC = NC\n}ConnName;\n\ntypedef enum\n{\n  Analog_A0 = 0,\n  Analog_A1 = 1,\n  Analog_A2 = 2,\n  Analog_MN_NC = NC\n}AnalogConnName;\n\nclass MiNodeConn\n{\n\npublic:\n\n  MicroBitPin      pin[0];\n  MicroBitPin          P0;\n  MicroBitPin          P1;\n\n  MiNodeConn(int id, PinName p0, PinName p1);\n\n  static void calcPinName(ConnName name, PinName* p0, PinName* p1);\n  static void calcPinName(AnalogConnName name, PinName* p0, PinName* p1);\n  static int calcId(ConnName name);\n  static int calcId(AnalogConnName name);\n  static ConnName calcConnName(PinName p0);\n  static PinName calcP0Name(ConnName name);\n  static PinName calcP0Name(AnalogConnName name);\n  static PinName calcP1Name(ConnName name);\n  static PinName calcP1Name(AnalogConnName name);\n\n};\n\n#endif",
      "libs/MiNodeDHT11.cpp": "#include \"MiNodeDHT11.h\"\n\n\nMiNodeDHT::MiNodeDHT() :\npin(NULL),currentTem(-99)\n{\n  this->baseId = MINODE_ID_MODULE_DHT11;\n  system_timer_add_component(this);\n}\n\nMiNodeDHT::~MiNodeDHT()\n{\n  if(pin) {\n    delete pin;\n  }\n  system_timer_remove_component(this);\n}\n\nvoid MiNodeDHT::attach(ConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initConnector(connName);\n  PinName pinName = MiNodeConn::calcP0Name(this->cn);\n  if(pin) {\n    delete pin;\n  }\n  pin = new DigitalInOut(pinName);\n}\n\nvoid MiNodeDHT::dhtSet(int level)\n{\n  pin->output();\n  pin->mode(PullNone);\n  pin->write(level);\n}\n\nint MiNodeDHT::dhtGet()\n{\n  pin->input();\n  return pin->read();\n}\n\nint MiNodeDHT::whileGet(int v)\n{\n  time_out = 0;\n  while(v==dhtGet() && (time_out < TIME_TH))\n  {\n    time_out ++;\n  }\n  if(time_out == TIME_TH)\n    return 1;\n  else\n    return 0;\n}\n\nvoid MiNodeDHT::dhtStart()\n{\n    dhtSet(1);\n    delay60US();\n    dhtSet(0);\n    wait_ms(25);\n    dhtSet(1);\n}\n\nvoid MiNodeDHT::dhtReadAck()\n{\n    whileGet(1);\n    whileGet(0);\n    whileGet(1);\n}\n\nvoid MiNodeDHT::dhtReadOneBit()\n{\n  whileGet(0);\n  delay60US();\n  bt <<= 1;\n  if(1==dhtGet())\n  {\n    bt |= 1;\n    whileGet(1);\n  }\n  else\n    bt |= 0;\n}\n\nvoid MiNodeDHT::dhtReadOneByte()\n{\n  bt=0;\n  dhtReadOneBit();\n  dhtReadOneBit();\n  dhtReadOneBit();\n  dhtReadOneBit();\n  dhtReadOneBit();\n  dhtReadOneBit();\n  dhtReadOneBit();\n  dhtReadOneBit();\n}\n\nvoid MiNodeDHT::systemTick()\n{\n  int temp=0;\n  count++;\n\n if (count == 100)\n  {\n    temp = getTemperature();\n     if (currentTem == -99)\n    {\n      currentTem = temp;\n    }\n\n    if((temp - currentTem == 1) || (currentTem - temp == 1))\n    {\n      currentTem = temp;\n      MicroBitEvent(this->baseId + this->id, MINODE_DHT_EVT_CHANGE);\n    }\n    count = 0;\n  }\n\n}\n\nint MiNodeDHT::dhtGetHt()\n{\n    int CHECKSUM=0;\n    int R_H=0;\n    int R_L=0;\n    int T_H=0;\n    int T_L=0;\n\n    dhtStart();\n    dhtReadAck();\n\n    dhtReadOneByte();\n    R_H = bt;\n    dhtReadOneByte();\n    R_L = bt;\n    dhtReadOneByte();\n    T_H = bt;\n    dhtReadOneByte();\n    T_L = bt;\n    dhtReadOneByte();\n    CHECKSUM = bt;\n\n    if(CHECKSUM == R_H+R_L+T_H+T_L)\n    {\n        Humidity = R_H;\n        Temperature = T_H;\n        return 0;\n    }\n    else\n        return 1;\n}\n\nint MiNodeDHT::getTemperature()\n{\n  dhtGetHt();\n  return Temperature;\n}\n\nint MiNodeDHT::getFahrenheitTemperature()\n{\n  int temp = getTemperature();\n  return temp*9/5+32;\n}\n\nint MiNodeDHT::getHumidity()\n{\n  dhtGetHt();\n  return Humidity;\n}\n\n\n\n",
      "libs/MiNodeDHT11.h": "#ifndef MINODE_DHT11_H\n#define MINODE_DHT11_H\n\n#include \"mbed.h\"\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n#include \"MicroBitDisplay.h\"\n#include \"MicroBitSystemTimer.h\"\n\n#define MINODE_DHT_EVT_CHANGE                  1\n#define TIME_TH \t\t                       10000\n\ntypedef enum {\n  MINODE_DHT_CELSIUS = 1,\n  MINODE_FAN_FAHRENHEIT = 2,\n}DHTTemStyle;\n\n#define delay60US()\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\nt++;t++;t++;t++;t++;t++;t++;t++;t++;t++;\\\n\nclass MiNodeDHT : public MiNodeComponent\n{\n  public:\n    MiNodeDHT();\n\n    int getTemperature();\n    int getHumidity();\n    int getFahrenheitTemperature();\n\n    void attach(ConnName connName);\n    virtual void systemTick();\n    ~MiNodeDHT();\n\n  private:\n    DigitalInOut*  pin;\n\n    int Humidity;\n    int Temperature;\n    int currentTem;\n    int count;\n    int bt;\n\n    volatile int t;\n    volatile int time_out;\n\n    void dhtSet(int  level);\n    int dhtGet();\n    int whileGet(int v);\n    void dhtStart();\n    void dhtReadAck();\n    void dhtReadOneBit();\n    void dhtReadOneByte();\n    int dhtGetHt();\n};\n\n#endif\n\n",
      "libs/MiNodeFan.cpp": "#include \"MiNodeFan.h\"\n\nMiNodeFan::MiNodeFan() :\npin(NULL)\n{\n  this->baseId = MINODE_ID_MODULE_FAN;\n}\n\nMiNodeFan::~MiNodeFan()\n{\n  if(pin) {\n    delete pin;\n  }\n}\n\nvoid MiNodeFan::attach(ConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initConnector(connName);\n\n  PinName pinName = MiNodeConn::calcP0Name(this->cn);\n  if(pin) {\n    delete pin;\n  }\n  pin = new DigitalOut(pinName);\n}\n\nvoid MiNodeFan::fanOpen()\n{\n\tpin->write(1);\n}\n\nvoid MiNodeFan::fanClose()\n{\n\tpin->write(0);\n}\n\n",
      "libs/MiNodeFan.h": "#ifndef MINODE_FAN_H\n#define MINODE_FAN_H\n\n#include \"mbed.h\"\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n#include \"MicroBitDisplay.h\"\n#include \"MicroBitSystemTimer.h\"\n\n\ntypedef enum {\n  MINODE_FAN_OPEN = 1,\n  MINODE_FAN_CLOSE = 2,\n}FanStatus;\n\nclass MiNodeFan : public MiNodeComponent\n{\npublic:\n\n  MiNodeFan();\n  ~MiNodeFan();\n\n  void attach(ConnName connName);\n\n  void fanOpen();\n  void fanClose();\n\nprivate:\n  DigitalOut* pin;\n};\n\n#endif",
      "libs/MiNodeIO.cpp": "#include \"MiNodeIO.h\"\n\nMiNodeIO::MiNodeIO( int ID_A0, int ID_A1, int ID_A2,\n                    int ID_D12,int ID_D13,int ID_D14,\n                    int ID_D15) :\nA0(ID_A0, MICROBIT_PIN_P0, MICROBIT_PIN_P1),\nA1(ID_A1, MICROBIT_PIN_P1, MICROBIT_PIN_P2),\nA2(ID_A2, MICROBIT_PIN_P2, MICROBIT_PIN_P3),\nD0(MINODE_ID_NC, NC, NC),\nD1(MINODE_ID_NC, NC, NC),\nD2(MINODE_ID_NC, NC, NC),\nD3(MINODE_ID_NC, NC, NC),\nD4(MINODE_ID_NC, NC, NC),\nD5(MINODE_ID_NC, NC, NC),\nD6(MINODE_ID_NC, NC, NC),\nD7(MINODE_ID_NC, NC, NC),\nD8(MINODE_ID_NC, NC, NC),\nD9(MINODE_ID_NC, NC, NC),\nD10(MINODE_ID_NC, NC, NC),\nD11(MINODE_ID_NC, NC, NC),\nD12(ID_D12, MICROBIT_PIN_P12, MICROBIT_PIN_P13),\nD13(ID_D13, MICROBIT_PIN_P13, MICROBIT_PIN_P14),\nD14(ID_D14, MICROBIT_PIN_P14, MICROBIT_PIN_P15),\nD15(ID_D15, MICROBIT_PIN_P15, MICROBIT_PIN_P16)\n{\n\n}",
      "libs/MiNodeIO.h": "#ifndef MINODE_IO_H\n#define MINODE_IO_H\n\n#include \"mbed.h\"\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n\n\nclass MiNodeIO\n{\n\npublic:\n  MiNodeConn a[0];\n  MiNodeConn A0;\n  MiNodeConn A1;\n  MiNodeConn A2;\n\n  MiNodeConn d[0];\n  MiNodeConn D0;\n  MiNodeConn D1;\n  MiNodeConn D2;\n  MiNodeConn D3;\n  MiNodeConn D4;\n  MiNodeConn D5;\n  MiNodeConn D6;\n  MiNodeConn D7;\n  MiNodeConn D8;\n  MiNodeConn D9;\n  MiNodeConn D10;\n  MiNodeConn D11;\n  MiNodeConn D12;\n  MiNodeConn D13;\n  MiNodeConn D14;\n  MiNodeConn D15;\n\n  MiNodeIO( int ID_A0, int ID_A1, int ID_A2,\n            int ID_D12,int ID_D13,int ID_D14,int ID_D15);\n\n};\n\n#endif",
      "libs/MiNodeLightSensor.cpp": "#include \"MiNodeLightSensor.h\"\n\nMiNodeLight::MiNodeLight() :\npin(NULL),sigma(0),pre_status(MICROBIT_LIGHT_LEVEL_NULL)\n{\n  this->baseId = MINODE_ID_MODULE_LIGHT;\n  system_timer_add_component(this);\n}\n\nMiNodeLight::~MiNodeLight()\n{\n  if(pin) {\n    delete pin;\n  }\n  system_timer_remove_component(this);\n}\n\n\nvoid MiNodeLight::attach(AnalogConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initAConnector(connName);\n\n  PinName pinName = MiNodeConn::calcP0Name(this->cna);\n  if(pin) {\n    delete pin;\n  }\n  pin = new AnalogIn(pinName);\n\n}\n\nunsigned short MiNodeLight::getLight()\n{\n  return pin->read_u16();\n}\n\nunsigned short MiNodeLight::getLightLevel(void)\n{\n  unsigned short currnt_light = 0;\n  for (int i = 0; i < MINODE_LIGHT_SAMPLE_NUM; ++i)\n  {\n    currnt_light += getLight();\n  }\n\n  currnt_light /= MINODE_LIGHT_SAMPLE_NUM;\n\n  if ((currnt_light > MICROBIT_LIGHT_MIN) && (currnt_light < MICROBIT_LIGHT_LEVEL_A+1))\n  {\n    return MICROBIT_LIGHT_LEVEL_1;\n  }\n  else if ((currnt_light > MICROBIT_LIGHT_LEVEL_A) && (currnt_light < MICROBIT_LIGHT_LEVEL_B+1))\n  {\n    return MICROBIT_LIGHT_LEVEL_2;\n  }\n  else if ((currnt_light > MICROBIT_LIGHT_LEVEL_B) && (currnt_light < MICROBIT_LIGHT_LEVEL_C+1))\n  {\n    return MICROBIT_LIGHT_LEVEL_3;\n  }\n  else if ((currnt_light > MICROBIT_LIGHT_LEVEL_C) && (currnt_light < MICROBIT_LIGHT_LEVEL_D+1))\n  {\n    return MICROBIT_LIGHT_LEVEL_4;\n  }\n  else if ((currnt_light > MICROBIT_LIGHT_LEVEL_D) && (currnt_light < MICROBIT_LIGHT_MAX+1))\n  {\n    return MICROBIT_LIGHT_LEVEL_5;\n  }\n  else\n  {\n    return MICROBIT_LIGHT_LEVEL_ERROR;\n  }\n}\n\nvoid MiNodeLight::systemTick()\n{\n  sigma++;\n\n  if(sigma == 100)\n  {\n    sigma = 0;\n\n    status = getLightLevel();\n    if(pre_status == MICROBIT_LIGHT_LEVEL_NULL)\n    {\n      pre_status = status;\n    }\n\n    if (status != pre_status)\n    {\n      pre_status = status;\n      MicroBitEvent(this->baseId + this->id, MINODE_LIGHT_EVT_LEVEL_CHANGE);\n    }\n  }\n}\n\n\n",
      "libs/MiNodeLightSensor.h": "#ifndef MINODE_LIGHT_H\n#define MINODE_LIGHT_H\n\n#include \"mbed.h\"\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n#include \"MicroBitSystemTimer.h\"\n\n\n#define MINODE_LIGHT_EVT_LEVEL_CHANGE          1\n\n#define MICROBIT_LIGHT_STATE                   1\n#define MICROBIT_LIGHT_STATE_CHANGE            2\n\n#define MINODE_LIGHT_SAMPLE_NUM                3\n\n#define MICROBIT_LIGHT_MIN                     0\n#define MICROBIT_LIGHT_LEVEL_A                 256\n#define MICROBIT_LIGHT_LEVEL_B                 512\n#define MICROBIT_LIGHT_LEVEL_C                 768\n#define MICROBIT_LIGHT_LEVEL_D                 900\n#define MICROBIT_LIGHT_MAX                     1023\n\n#define MICROBIT_LIGHT_LEVEL_NULL              0\n#define MICROBIT_LIGHT_LEVEL_1                 1\n#define MICROBIT_LIGHT_LEVEL_2                 2\n#define MICROBIT_LIGHT_LEVEL_3                 3\n#define MICROBIT_LIGHT_LEVEL_4                 4\n#define MICROBIT_LIGHT_LEVEL_5                 5\n#define MICROBIT_LIGHT_LEVEL_ERROR             9\n\n\nclass MiNodeLight : public MiNodeComponent\n{\n\tpublic:\n\t  MiNodeLight();\n\n\t  unsigned short getLightLevel(void);\n\t  unsigned short getLight(void);\n\n  \tvoid attach(AnalogConnName connName);\n\n\t  virtual void systemTick();\n\t   ~MiNodeLight();\n\n\tprivate:\n\t  AnalogIn* pin;\n\t  int sigma;\n\t\tint pre_status;\n};\n\n#endif",
      "libs/MiNodeMIC.cpp": "#include \"MiNodeMIC.h\"\n\nMiNodeMIC::MiNodeMIC() :\npin(NULL)\n{\n  this->baseId = MINODE_ID_MODULE_LIGHT;\n  system_timer_add_component(this);\n}\n\nMiNodeMIC::~MiNodeMIC()\n{\n  if(pin) {\n    delete pin;\n  }\n  system_timer_remove_component(this);\n}\n\nvoid MiNodeMIC::checking(void)\n{\n  static int adHolder[8] = {0,0,0,0,0,0,0,0};\n  static int ad_count = 0;\n  int temp = 0;\n  int i=0;\n  int current_ad = 0;\n  static int tri_flag = 0;\n  static int time_count = 0;\n\n  current_ad = pin->read_u16();\n  if (current_ad > 528)\n  {\n    adHolder[ad_count%8] = current_ad - 528;\n    ad_count++;\n  }\n  else\n  {\n    adHolder[ad_count%8] = 528 - current_ad;\n    ad_count++;\n  }\n\n  if (tri_flag == 1)\n  {\n    time_count++;\n    if (time_count > 1000)\n    {\n      tri_flag = 0;\n      time_count = 0;\n    }\n  }\n\n  if(tri_flag == 0)\n  {\n    for(i=0; i<8; i++)\n    {\n      temp += adHolder[i];\n    }\n    temp /= 8;\n\n    if(temp > 150)\n    {\n      MicroBitEvent evt(this->baseId + this->id,MINODE_MIC_EVT_NOISE);\n      tri_flag = 1;\n      temp = 0;\n    }\n  }\n}\n\nvoid MiNodeMIC::attach(AnalogConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initAConnector(connName);\n\n  PinName pinName = MiNodeConn::calcP0Name(this->cna);\n  if(pin) {\n    delete pin;\n  }\n  pin = new AnalogIn(pinName);\n\n  timer.attach_us(this, &MiNodeMIC::checking, 500);\n}\n\nvoid MiNodeMIC::detachTimer()\n{\n  timer.detach();\n}\n\n\n",
      "libs/MiNodeMIC.h": "#ifndef MINODE_MIC_H\n#define MINODE_MIC_H\n\n#include \"mbed.h\"\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n#include \"MicroBitDisplay.h\"\n#include \"MicroBitSystemTimer.h\"\n\n#define MINODE_MIC_EVT_NOISE                  1\n\n#define MINODE_MIC_NOISE_THRESHOLD            50\n\n#define MICROBIT_MIC_MIN                     0\n#define MICROBIT_MIC_LEVEL_A                 256\n#define MICROBIT_MIC_LEVEL_B                 512\n#define MICROBIT_MIC_LEVEL_C                 768\n#define MICROBIT_MIC_LEVEL_D                 900\n#define MICROBIT_MIC_MAX                     1023\n\n#define MICROBIT_MIC_LEVEL_NULL              0\n#define MICROBIT_MIC_LEVEL_1                 1\n#define MICROBIT_MIC_LEVEL_2                 2\n#define MICROBIT_MIC_LEVEL_3                 3\n#define MICROBIT_MIC_LEVEL_4                 4\n#define MICROBIT_MIC_LEVEL_5                 5\n#define MICROBIT_MIC_LEVEL_ERROR             9\n\nclass MiNodeMIC : public MiNodeComponent\n{\n  public:\n    MiNodeMIC();\n\n    void detachTimer();\n    void checking();\n\n    void attach(AnalogConnName connName);\n\n    ~MiNodeMIC();\n\n  private:\n    AnalogIn* pin;\n    Ticker timer;\n\n};\n\n#endif",
      "libs/MiNodeModulePool.h": "#ifndef MINODE_MODULE_POOL_H\n#define MINODE_MODULE_POOL_H\n\n#include \"mbed.h\"\n#include <vector>\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n\n\ntemplate<class T>\nclass MiNodeModulePool {\n\npublic:\n  MiNodeModulePool() {\n\n  }\n\n  ~MiNodeModulePool() {\n\n    typename std::vector<T*>::iterator it;\n    for(it = modules.begin(); it != modules.end(); it++) {\n      T* pModule = *it;\n      delete pModule;\n    }\n\n  }\n\n  T* attach(ConnName conn) {\n\n    typename std::vector<T*>::iterator it;\n    T* findModule = NULL;\n    for(it = modules.begin(); it != modules.end(); it++) {\n      T* pModule = *it;\n      if(conn == pModule->getConnector()) {\n        findModule = pModule;\n        break;\n      }\n    }\n\n    if(findModule == NULL) {\n      findModule = new T();\n      findModule->attach(conn);\n      modules.push_back(findModule);\n    }\n\n    return findModule;\n  }\n\n  T* attach(AnalogConnName conn) {\n\n    typename std::vector<T*>::iterator it;\n    T* findModule = NULL;\n    for(it = modules.begin(); it != modules.end(); it++) {\n      T* pModule = *it;\n      if(conn == pModule->AgetConnector()) {\n        findModule = pModule;\n        break;\n      }\n    }\n\n    if(findModule == NULL) {\n      findModule = new T();\n      findModule->attach(conn);\n      modules.push_back(findModule);\n    }\n\n    return findModule;\n  }\n\nprivate:\n  std::vector<T*> modules;\n\n};\n\n\n#endif\n",
      "libs/MiNodePIR.cpp": "#include \"MiNodePIR.h\"\n\nMiNodePIR::MiNodePIR() :\npin(NULL)\n{\n  this->baseId = MINODE_ID_MODULE_PIR;\n}\n\nMiNodePIR::~MiNodePIR()\n{\n  if(pin) {\n    delete pin;\n  }\n}\n\nvoid MiNodePIR::attach(ConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initConnector(connName);\n\n  PinName pinName = MiNodeConn::calcP0Name(this->cn);\n  if(pin) {\n    delete pin;\n  }\n  pin = new InterruptIn(pinName);\n  pin->mode(PullNone);\n  pin->rise(this, &MiNodePIR::onTrigger);\n}\n\nint MiNodePIR::isTriged()\n{\n  int temp=0;\n  for (int i = 0; i < 10; ++i)\n  {\n    if (readPir() != 0)\n    {\n      temp += 1;\n    }\n  }\n  if(temp > 8)\n    return 1;\n  else\n    return 0;\n}\n\nvoid MiNodePIR::onTrigger()\n{\n  MicroBitEvent evt(this->baseId + this->id,MINODE_PIR_EVT_TRIG);\n}\n\nint MiNodePIR::readPir()\n{\n\treturn pin->read();\n}\n\n\n\n",
      "libs/MiNodePIR.h": "#ifndef MINODE_PIR_H\n#define MINODE_PIR_H\n\n#include \"mbed.h\"\n\n#include \"mbed.h\"\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n\n#define MINODE_PIR_EVT_TRIG                  1\n#define MINODE_PIR_EVT_CLOSE                 2\n\nclass MiNodePIR : public MiNodeComponent\n{\npublic:\n\n  MiNodePIR();\n\n  void onTrigger();\n  int readPir();\n  int isTriged();\n\n  void attach(ConnName connName);\n\n  ~MiNodePIR();\n\nprivate:\n  InterruptIn* pin;\n  \n};\n\n#endif\n",
      "libs/MiNodeRGB.cpp": "#include \"MiNodeRGB.h\"\n\nMiNodeRGB::MiNodeRGB() :\nCLOCK(NULL) , DATA(NULL)\n{\n  this->baseId = MINODE_ID_MODULE_RGB;\n}\n\nMiNodeRGB::~MiNodeRGB()\n{\n  if(CLOCK) {\n    delete CLOCK;\n  }\n\n  if(DATA) {\n    delete DATA;\n  }\n}\n\nvoid MiNodeRGB::attach(ConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initConnector(connName);\n\n  PinName pinName1 = MiNodeConn::calcP0Name(this->cn);\n  PinName pinName2 = MiNodeConn::calcP1Name(this->cn);\n  if(CLOCK) {\n    delete CLOCK;\n  }\n  CLOCK = new DigitalOut(pinName1);\n  DATA = new DigitalOut(pinName2);\n}\n\nvoid MiNodeRGB::rgbClockWrite(int value)\n{\n  CLOCK->write(value);\n}\n\nvoid MiNodeRGB::rgbDataWrite(int value)\n{\n  DATA->write(value);\n}\n\nvoid MiNodeRGB::rgbDelay()\n{\n\n}\n\nvoid MiNodeRGB::chooseColor(MiNodeColor c)\n{\n  switch(c)\n  {\n    case MiNode_RGB_COLOR_RED:\n      rgbWrite(255,0,0);\n      break;\n    case MiNode_RGB_COLOR_GREEN:\n      rgbWrite(0,255,0);\n      break;\n    case MiNode_RGB_COLOR_BLUE:\n      rgbWrite(0,0,255);\n      break;\n    case MiNode_RGB_COLOR_YELLOW:\n      rgbWrite(255,255,0);\n      break;\n    case MiNode_RGB_COLOR_PINK:\n      rgbWrite(255,0,255);\n      break;\n    case MiNode_RGB_COLOR_CYAN:\n      rgbWrite(0,255,255);\n      break;\n    case MiNode_RGB_COLOR_WHITE:\n      rgbWrite(255,255,255);\n      break;\n    default :\n      rgbWrite(255,0,0);\n      break;\n  }\n}\n\nvoid MiNodeRGB::setRGBInHex(unsigned int color)\n{\n  int red=0;\n  int green=0;\n  int blue=0;\n\n  red = color/0x10000;\n  green = color%0x10000/0x100;\n  blue = color%0x100;\n\n  rgbWrite(red,green,blue);\n}\n\nvoid MiNodeRGB::setRGB(uint8_t r,uint8_t g,uint8_t b)\n{\n  rgbWrite(r,g,b);\n}\n\nvoid MiNodeRGB::rgbWrite(uint8_t r,uint8_t g,uint8_t b)\n{\n  uint32_t rgb = 0;\n\n  // set bit 7,15,23\n  rgb = (1<<23) | (1<<15) | (1<<7);\n\n  // be divided by 2 because the chip only need 7 bits\n  r>>=1;\n  g>>=1;\n  b>>=1;\n\n  rgb |= (g << 15) | (r << 7) | (b << 0);\n\n  rgbClockWrite(0); //P15\n  rgbDataWrite(0);  //P16\n\n  rgbDelay();\n\n  // out put at least 32 zeros\n  for(int i = 0; i < 32; i ++) {\n      rgbDataWrite(0);\n      rgbDelay();\n      rgbClockWrite(1);\n      rgbDelay();\n      rgbClockWrite(0);\n  }\n\n  rgbDelay();\n\n  // out put 24 bits RGB data to channel 1,2,3.\n  for(int i = 0; i < 24; i ++) {\n      if(rgb & (1 << 23))\n          rgbDataWrite(1);\n      else\n          rgbDataWrite(0);\n      rgb <<= 1;\n\n      rgbDelay();\n      rgbClockWrite(1);\n      rgbDelay();\n      rgbClockWrite(0);\n  }\n\n  rgbDelay();\n\n  // out put 24 bit rgb data for channel 4,5,6. data value is ignored. here set to 0\n  rgb = 0;\n  rgb = (1<<23) | (1<<15) | (1<<7);\n  for(int i = 0; i < 24; i ++) {\n      if(rgb & (1 << 23))\n          rgbDataWrite(1);\n      else\n          rgbDataWrite(0);\n      rgb <<= 1;\n\n      rgbDelay();\n      rgbClockWrite(1);\n      rgbDelay();\n      rgbClockWrite(0);\n  }\n}\n\n",
      "libs/MiNodeRGB.h": "#ifndef MINODE_RGB_H\n#define MINODE_RGB_H\n\n#include \"mbed.h\"\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n#include \"MicroBitDisplay.h\"\n#include \"MicroBitSystemTimer.h\"\n\ntypedef enum{\n    MiNode_RGB_COLOR_RED=0,\n    MiNode_RGB_COLOR_GREEN,\n    MiNode_RGB_COLOR_BLUE,\n    MiNode_RGB_COLOR_YELLOW,\n    MiNode_RGB_COLOR_PINK,\n    MiNode_RGB_COLOR_CYAN,\n    MiNode_RGB_COLOR_WHITE\n}MiNodeColor;\n\nclass MiNodeRGB : public MiNodeComponent\n{\npublic:\n  MiNodeRGB();\n\n  void setRGB(uint8_t r,uint8_t g,uint8_t b);\n  void setRGBInHex(unsigned int);\n  void chooseColor(MiNodeColor c);\n\n  void attach(ConnName connName);\n  ~MiNodeRGB();\n\nprivate:\n  DigitalOut* CLOCK;\n  DigitalOut* DATA;\n\n  unsigned int rgbHEX;\n\n  void rgbDelay();\n  void rgbWrite(uint8_t r,uint8_t g,uint8_t b);\n  void rgbClockWrite(int value);\n  void rgbDataWrite(int value);\n\n};\n\n#endif",
      "libs/MiNodeRotary.cpp": "#include \"MiNodeRotary.h\"\n\nMiNodeRotary::MiNodeRotary() :\npin(NULL),currentAD(-1),count(0)\n{\n  this->baseId = MINODE_ID_MODULE_SWITCH;\n  system_timer_add_component(this);\n}\n\nMiNodeRotary::~MiNodeRotary()\n{\n  if(pin) {\n    delete pin;\n  }\n  system_timer_remove_component(this);\n}\n\nvoid MiNodeRotary::attach(AnalogConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initAConnector(connName);\n\n  PinName pinName = MiNodeConn::calcP0Name(this->cna);\n  if(pin) {\n    delete pin;\n  }\n  pin = new AnalogIn(pinName);\n}\n\nvoid MiNodeRotary::systemTick()\n{\n  count++;\n\n  if (count == 40)\n  {\n    if (currentAD == -1)\n    {\n      currentAD = getADValue();\n    }\n    else\n    {\n      if ((getADValue() - currentAD > 31) || (getADValue() - currentAD < -31))\n      {\n        MicroBitEvent evt(this->baseId + this->id,MINODE_ROTARY_EVT_CHANGE);\n        currentAD = getADValue();\n      }\n    }\n    count = 0;\n  }\n}\n\nint MiNodeRotary::getPercentage()\n{\n  int temp;\n  temp = getADValue();\n\n  return temp*100/1023;\n}\n\nfloat MiNodeRotary::getVolt()\n{\n  float result;\n  result = 3.3*(getADValue()/1023.0);\n\n  return result;\n}\n\nint MiNodeRotary::getADValue()\n{\n  int temp=0;\n  for (int i = 0; i < 3; ++i)\n  {\n    temp += pin->read_u16();\n  }\n  temp /= 3;\n  return temp;\n}\n\n\n\n\n",
      "libs/MiNodeRotary.h": "#ifndef MINODE_VRES_H\n#define MINODE_VRES_H\n\n#include \"mbed.h\"\n\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n#include \"MiNodeConn.h\"\n#include \"MicroBitDisplay.h\"\n#include \"MicroBitSystemTimer.h\"\n\n#define MINODE_ROTARY_EVT_CHANGE                  1\n\nclass MiNodeRotary : public MiNodeComponent\n{\npublic:\n\n  MiNodeRotary();\n\n  float getVolt();\n  int getADValue();\n  int getPercentage();\n\n  void attach(AnalogConnName connName);\n\n  virtual void systemTick();\n  ~MiNodeRotary();\n\nprivate:\n  AnalogIn* pin;\n  int currentAD;\n  int count;\n  \n};\n\n#endif",
      "libs/MiNodeSwitch.cpp": "#include \"MiNodeSwitch.h\"\n\n\nMiNodeSwitch::MiNodeSwitch() :\npin(NULL)\n{\n  this->baseId = MINODE_ID_MODULE_SWITCH;\n}\n\n\nMiNodeSwitch::~MiNodeSwitch()\n{\n  if(pin) {\n    delete pin;\n  }\n}\n\nvoid MiNodeSwitch::attach(ConnName connName)\n{\n  if(this->cn != MN_NC) {\n    return;\n  }\n\n  MiNodeComponent::initConnector(connName);\n  eventOn();\n}\n\n\nvoid MiNodeSwitch::eventOn()\n{\n  PinName pinName = MiNodeConn::calcP0Name(this->cn);\n  if(pin) {\n    delete pin;\n  }\n  pin = new InterruptIn(pinName);\n\n  pin->mode(PullNone);\n  pin->rise(this, &MiNodeSwitch::onOpen);\n  pin->fall(this, &MiNodeSwitch::onClose);\n}\n\nvoid MiNodeSwitch::onOpen()\n{\n  MicroBitEvent(this->baseId + this->id, MINODE_SWITCH_EVT_OPEN);\n}\n\nvoid MiNodeSwitch::onClose()\n{\n  MicroBitEvent(this->baseId + this->id, MINODE_SWITCH_EVT_CLOSE);\n}\n\nint MiNodeSwitch::isOpened()\n{\n  int status = 0;\n  if(pin) {\n    status = pin->read();\n  }\n  return status;\n}",
      "libs/MiNodeSwitch.h": "#ifndef MINODE_SWITCH_H\n#define MINODE_SWITCH_H\n\n#include \"mbed.h\"\n#include \"MicroBitConfig.h\"\n#include \"MicroBitComponent.h\"\n#include \"MicroBitEvent.h\"\n#include \"MiNodeComponent.h\"\n\n\ntypedef enum {\n  MINODE_SWITCH_EVT_OPEN = 1,\n  MINODE_SWITCH_EVT_CLOSE = 2,\n}SwitchEvent;\n\n\nclass MiNodeSwitch : public MiNodeComponent\n{\npublic:\n  MiNodeSwitch();\n  ~MiNodeSwitch();\n\n  void attach(ConnName connName);\n\n  int isOpened();\n\n\nprivate:\n  void onOpen();\n  void onClose();\n  void eventOn();\n\n  InterruptIn* pin;\n};\n\n#endif",
      "libs/minode.cpp": "#include \"pxt.h\"\n#include \"MiNode.h\"\n\nMiNode node;\n\nusing namespace pxt;\nnamespace minode {\n\n\t//%\n\tint getPin(ConnName connName)\n  \t{\n    \tint temp=0;\n\n    \tPinName pinName1 = MiNodeConn::calcP0Name(connName);\n\n    \tswitch(pinName1)\n    \t{\n      \tcase MICROBIT_PIN_P0:\n        \ttemp = MICROBIT_ID_IO_P0;\n        \tbreak;\n      \tcase MICROBIT_PIN_P1:\n        \ttemp = MICROBIT_ID_IO_P1;\n        \tbreak;\n      \tcase MICROBIT_PIN_P2:\n        \ttemp = MICROBIT_ID_IO_P2;\n        \tbreak;\n      \tcase MICROBIT_PIN_P12:\n        \ttemp = MICROBIT_ID_IO_P12;\n        \tbreak;\n      \tcase MICROBIT_PIN_P13:\n        \ttemp = MICROBIT_ID_IO_P13;\n        \tbreak;\n      \tcase MICROBIT_PIN_P14:\n        \ttemp = MICROBIT_ID_IO_P14;\n        \tbreak;\n      \tcase MICROBIT_PIN_P15:\n        \ttemp = MICROBIT_ID_IO_P15;\n        \tbreak;\n      \tdefault:\n        \ttemp = 0;\n        \tbreak;\n    \t}\n\n    \treturn temp;\n  \t}\n\n  \t//%\n  \tint getanalogPin(AnalogConnName connName)\n  \t{\n    \tint temp=0;\n\n    \tPinName pinName1 = MiNodeConn::calcP0Name(connName);\n\n    \tswitch(pinName1)\n    \t{\n      \tcase MICROBIT_PIN_P0:\n        \ttemp = MICROBIT_ID_IO_P0;\n        \tbreak;\n      \tcase MICROBIT_PIN_P1:\n        \ttemp = MICROBIT_ID_IO_P1;\n        \tbreak;\n      \tcase MICROBIT_PIN_P2:\n        \ttemp = MICROBIT_ID_IO_P2;\n        \tbreak;\n      \tdefault:\n        \ttemp = 0;\n        \tbreak;\n    \t}\n\n    \treturn temp;\n  \t}\n\n  \t//%\n  \tint getPinProperty(ConnName connName)\n  \t{\n    \tif (connName == A0 || connName == A1 || connName == A2)\n    \t{\n      \t\treturn 1;\n    \t}\n    \telse\n    \t{\n      \t\treturn 0;\n    \t}\n  \t}\n\n\n    //%\n    void rgbChooseColor(ConnName connName , MiNodeColor color) {\n      MiNodeRGB* pRGB;\n\n      pRGB = node.rgb.attach(connName);\n      pRGB->chooseColor(color);\n    }\n\n    //% \n\tvoid RGBSetColor(ConnName connName , int red, int green, int blue){\n\t    MiNodeRGB* pRGB;\n\n\t    pRGB = node.rgb.attach(connName);\n\t    pRGB->setRGB(red,green,blue);\n\t}\n\n\t//%\n  \tint DHTGetTemperature(ConnName connName , DHTTemStyle style){\n   \t  MiNodeDHT* pDHT11;\n   \t  int dht_tempreature=0;\n\n      pDHT11 = node.dht11.attach(connName);\n      switch(style) {\n        case MINODE_DHT_CELSIUS:\n            dht_tempreature = pDHT11->getTemperature();\n        break;\n        case MINODE_FAN_FAHRENHEIT:\n          \tdht_tempreature = pDHT11->getFahrenheitTemperature();\n        break;\n        default:\n        \tdht_tempreature = pDHT11->getTemperature();\n        break;\n      }\n\n  \t  return dht_tempreature;\n    }\n\n    //%\n \tint DHTGetHumidity(ConnName connName){\n    \tMiNodeDHT* pDHT11;\n    \tint dht_humidity=0;\n\n    \tpDHT11 = node.dht11.attach(connName);\n    \tdht_humidity = pDHT11->getHumidity();\n\n    \treturn dht_humidity;\n  \t}\n\n  \t//%\n  \tvoid onDHTEvent(ConnName connName, Action body){\n    \tint id;\n    \tMiNodeDHT* pDHT11;\n\n    \tpDHT11 = node.dht11.attach(connName);\n    \tid = pDHT11->getId();\n\n    \tregisterWithDal(id, MINODE_DHT_EVT_CHANGE, body);\n  \t}\n\n  \t//%\n \tvoid onSwitchEvent(ConnName connName, SwitchEvent event, Action body)\n  \t{\n    \tint id;\n    \tMiNodeSwitch* pSwitch;\n\n    \tpSwitch = node.switches.attach(connName);\n    \tid = pSwitch->getId();\n\n    \tregisterWithDal(id, event, body);\n  \t}\n\n  \t//%\n  \tbool switchIsOpened(ConnName connName)\n  \t{\n\n    \tMiNodeSwitch* pSwitch;\n    \tint isOpened;\n\n    \tpSwitch = node.switches.attach(connName);\n    \tisOpened = pSwitch->isOpened();\n\n    \treturn isOpened ? true : false;\n  \t}\n\n  \t//%\n  \tvoid onRotaryEvent(AnalogConnName connName, Action body)\n  \t{\n    \tint id;\n    \tMiNodeRotary* pRotary;\n\n    \tpRotary = node.rotary.attach(connName);\n    \tid = pRotary->getId();\n\n    \tregisterWithDal(id, MINODE_ROTARY_EVT_CHANGE, body);\n  \t}\n\n  \t//%\n \tint RotaryGetPercentage(AnalogConnName connName)\n  \t{\n    \tMiNodeRotary* pRotary;\n    \tint rotaryPercentage=0;\n\n    \tpRotary = node.rotary.attach(connName);\n    \trotaryPercentage = pRotary->getPercentage();\n\n    \treturn rotaryPercentage;\n  \t}\n\n  \t//%\n  \tvoid onPIREvent(ConnName connName, Action body)\n\t{\n\t    int id;\n\t    MiNodePIR* pPir;\n\n\t    pPir = node.pir.attach(connName);\n\t    id = pPir->getId();\n\n\t    registerWithDal(id, MINODE_PIR_EVT_TRIG, body);\n\t}\n\n\t//%\n\tbool PIRIsTriggered(ConnName connName)\n\t{\n\n\t    MiNodePIR* pPir;\n\t    int triggered;\n\n\t    pPir = node.pir.attach(connName);\n\t    triggered = pPir->isTriged();\n\n\t    return triggered ? true : false;\n\t}\n\n\t//%\n  \tvoid onMICEvent(AnalogConnName connName, Action body)\n  \t{\n    \tint id;\n    \tMiNodeMIC* pMic;\n\n    \tpMic = node.mic.attach(connName);\n    \tid = pMic->getId();\n\n    \tregisterWithDal(id, MINODE_MIC_EVT_NOISE, body);\n  \t}\n\n  \t//%\n  \tvoid onLightSensorEvent(AnalogConnName connName, Action body)\n  \t{\n    \tint id;\n    \tMiNodeLight* pLight;\n\n    \tpLight = node.light.attach(connName);\n    \tid = pLight->getId();\n\n    \tregisterWithDal(id, MINODE_LIGHT_EVT_LEVEL_CHANGE, body);\n  \t}\n\n  \t//%\n  \tint LightSensorGetLevel(AnalogConnName connName)\n  \t{\n    \tMiNodeLight* pLight;\n    \tint lightLevel=0;\n\n    \tpLight = node.light.attach(connName);\n    \tlightLevel = pLight->getLightLevel();\n\n    \treturn lightLevel;\n  \t}\n}\n",
      "minode.ts": "/**\n * Blocks to simulate MIDI instruments.\n */\n//% weight=85 color=\"#5ea9ff\"\n//% advanced=true\nnamespace minode {\n\n\t/**\n     * Get pinname\n     */\n    //% blockId=get_pin_name\n    //% shim=minode::getPin\n    export function getPin(connName: ConnName): number{\n      return 0;\n    }\n\n    /**\n     * Get analog pinname\n     */\n    //% blockId=get_analog_pin_name\n    //% shim=minode::getanalogPin\n    export function getanalogPin(connName: AnalogConnName): number{\n      return 0;\n    }\n\n    /**\n     * Get Pin Property\n     */\n    //% blockId=get_pin_property\n    //% shim=minode::getPinProperty\n    export function getPinProperty(connName: ConnName): number{\n      return 0;\n    }\n\n    /**\n     * Choose an RGB color from the given table.\n     */\n    //% blockId=minode_rgb_choose_color block=\"RGB at %connName | with %color\"\n    //% shim=minode::rgbChooseColor\n    export function rgbChooseColor(connName: ConnName, color: MiNodeColor): void {\n        return;\n    }\n\n    /**\n     * Converts red, green, blue channels into a RGB color.\n     */\n    //% blockId=minode_rgb_setcolor block=\"rgb led %connName| set red %red| green %green| blue %blue\"\n    //% advanced=true\n    //% shim=minode::RGBSetColor\n    export function RGBSetColor(connName: ConnName, red: number, green: number, blue: number): void{\n    \treturn;\n    }\n\n    /**\n     * Get DHT11 temperature (celsius or fahrenheit).\n     */\n    //% blockId=minode_dht_get_temperature block=\"dht11 %connName| tempreature %FanStatus\" \n    //% shim=minode::DHTGetTemperature\n    export function DHTGetTemperature(connName: ConnName, style: DHTTemStyle): number{\n      return 0;\n    }\n\n    /**\n     * Get DHT11 Humidity.\n     */\n    //% blockId=minode_dht_get_humidity block=\"dht11 %connName| humidity\"\n    //% advanced=true\n    //% shim=minode::DHTGetHumidity\n    export function DHTGetHumidity(connName: ConnName): number{\n      return 0;\n    }\n\n    /**\n     * Do something when DHT11 temperature change.\n     */\n    //% blockId=minode_on_dhttemperature_change block=\"dht11 %connName| on temperature change\"\n    //% advanced=true\n    //% shim=minode::onDHTEvent\n    export function onDHTEvent(connName: ConnName, body: () => void): void{\n    \treturn;\n    }\n\n    /**\n     * Do something when a switch is opened/closed\n     * @param switchId a switch ID .\n     * @param connName MiNode Connector Name\n     * @param event Event to listen\n     */\n    //% blockId=minode_on_switch_event block=\"switch %connName| on %event\"\n    //% shim=minode::onSwitchEvent\n    export function onSwitchEvent(connName: ConnName, event: SwitchEvent, body: () => void): void{\n    \treturn;\n    }\n\n    /**\n     * Get the switch state (open or not).\n     */\n    //% blockId=minode_switch_is_opened block=\"switch %connName| is opened\"\n    //% advanced=true\n    //% shim=minode::switchIsOpened\n    export function switchIsOpened(connName: ConnName): boolean{\n      return true;\n    }\n\n    /**\n     * Do something when Rotary change.\n     */\n    //% blockId=minode_on_ROTARY_CHANGE block=\"rotary %connName| on trigger\"\n    //% shim=minode::onRotaryEvent\n    export function onRotaryEvent(connName: AnalogConnName, body: () => void): void{\n    \treturn;\n    }\n\n    /**\n     * Get Rotary percentage.\n     */\n    //% blockId=minode_ROTARY_GET_Percentage block=\"rotary %connName| get Percentage\"\n    //% advanced=true\n    //% shim=minode::RotaryGetPercentage\n    export function RotaryGetPercentage(connName: AnalogConnName): number{\n      return 0;\n    }\n\n    /**\n     * Do something when PIR triggered.\n     */\n    //% blockId=minode_on_PIR_trig block=\"pir %connName| on trigger\"\n    //% shim=minode::onPIREvent\n    //% advanced=true\n    export function onPIREvent(connName: ConnName, body: () => void): void{\n    \treturn;\n    }\n\n    /**\n     * Get the PIR state (trigger or not).\n     */\n    //% blockId=minode_PIR_istrig block=\"pir %connName| is triggered\"\n    //% advanced=true\n    //% shim=minode::PIRIsTriggered\n    export function PIRIsTriggered(connName: ConnName): boolean{\n      return true;\n    }\n\n    /**\n     * Do something when MIC level change.\n     */\n    //% blockId=minode_on_MIC_level_change block=\"mic %connName| on noise\"\n    //% shim=minode::onMICEvent\n    //% advanced=true\n    export function onMICEvent(connName: AnalogConnName, body: () => void): void{\n    \treturn;\n    }\n\n    /**\n     * Do something when Light level change.\n     */\n    //% blockId=minode_on_LightSensor_CHANGE block=\"light %connName| on change\"\n    //% shim=minode::onLightSensorEvent\n    export function onLightSensorEvent(connName: AnalogConnName, body: () => void): void{\n    \treturn;\n    }\n\n    /**\n     * Get Light level.from 1(brightest) to 5(darkness).\n     */\n    //% blockId=minode_LightSensor_GET_light_level block=\"light %connName| get level\"\n    //% shim=minode::LightSensorGetLevel\n    export function LightSensorGetLevel(connName: AnalogConnName): number{\n      return 0;\n    }\n\n    /**\n     * control the motor speed (0 to 100)\n     */\n    //% blockId=minode_motor_control1 block=\"fan %connName| speed %speed\"\n    export function FanControl_1(connName:AnalogConnName , speed:number): void\n    {\n      speed *= 200;\n      pins.servoSetPulse(getanalogPin(connName),speed);\n    }\n\n    /**\n     * relay control(open / close)\n     */\n    //% blockId=minode_relay_control block=\"relay %connName| set %status\"\n    //% advanced=true\n    export function RelayControl(connName:ConnName , status:FanStatus): void\n    {\n      if(getPinProperty(connName) == 1)\n      {\n        switch(status) {\n            case 1:\n                pins.analogWritePin(getPin(connName),1023);\n              break;\n            case 2:\n                pins.analogWritePin(getPin(connName),0);\n              break;\n        }\n      }\n      else\n      {\n        switch(status) {\n            case 1:\n                pins.digitalWritePin(getPin(connName),1);\n              break;\n            case 2:\n                pins.digitalWritePin(getPin(connName),0);\n              break;\n        }\n      }\n\n    }\n\n}",
      "pxt.json": "{\n    \"name\": \"minode\",\n    \"description\": \"mi:node IoT Starter Kit - A micro:bit accessories Kit with 10 sensor modules for IoT node applications\",\n    \"license\": \"MIT\",\n    \"dependencies\": {\n        \"core\": \"*\"\n    },\n    \"files\": [\n        \"README.md\",\n        \"minode.ts\",\n        \"libs/MiNode.h\",\n        \"libs/MiNodeComponent.h\",\n        \"libs/MiNodeComponent.cpp\",\n        \"libs/MiNodeConn.h\",\n        \"libs/MiNodeConn.cpp\",\n        \"libs/MiNodeIO.h\",\n        \"libs/MiNodeIO.cpp\",\n        \"libs/MiNodeModulePool.h\",\n        \"libs/MiNodeRGB.h\",\n        \"libs/MiNodeRGB.cpp\",\n        \"libs/MiNodeDHT11.cpp\",\n        \"libs/MiNodeDHT11.h\",\n        \"libs/MiNodeSwitch.cpp\",\n        \"libs/MiNodeSwitch.h\",\n        \"libs/MiNodeRotary.cpp\",\n        \"libs/MiNodeRotary.h\",\n        \"libs/MiNodePIR.cpp\",\n        \"libs/MiNodePIR.h\",\n        \"libs/MiNodeMIC.cpp\",\n        \"libs/MiNodeMIC.h\",\n        \"libs/MiNodeLightSensor.cpp\",\n        \"libs/MiNodeLightSensor.h\",\n        \"libs/MiNodeFan.cpp\",\n        \"libs/MiNodeFan.h\",\n        \"libs/minode.cpp\",\n        \"shims.d.ts\",\n        \"enums.ts\",\n        \"enums.d.ts\"\n    ],\n    \"testFiles\": [\n        \"tests.ts\"\n    ],\n    \"public\": true,\n    \"targetVersions\": {\n        \"target\": \"1.1.26\"\n    }\n}",
      "shims.d.ts": "// Will be auto-generated if needed.\n",
      "tests.ts": "input.onButtonPressed(Button.B, () => {\n    minode.RelayControl(ConnName.A0, FanStatus.MINODE_FAN_OPEN)\n    minode.FanControl_1(AnalogConnName.Analog_A2, 40)\n})\ninput.onButtonPressed(Button.A, () => {\n    minode.RelayControl(ConnName.A0, FanStatus.MINODE_FAN_CLOSE)\n    minode.FanControl_1(AnalogConnName.Analog_A2, 80)\n})\nbasic.forever(() => {\n    basic.showNumber(minode.DHTGetTemperature(ConnName.D13, DHTTemStyle.MINODE_DHT_CELSIUS))\n    basic.pause(100)\n})"
    },
    "pxt-magibit": {
      "README.md": "\n# Magibit Library for Micro:bit\n版本号: v0.1\n\n该扩展包为麦极创客专门为Micro:bit开发的语句库。推荐配合麦极创客的Magishield扩展板、Magibit主板和Magibit传感器套装进行使用，以便获得最好的体验。同时该包也支持市面上绝大多数的Micro:bit传感器模块和执行器，用户自行进行pin口连接即可。\n\n## 1. 当前版本支持的模块\n- 光线传感器\n- 声音传感器\n- 土壤湿度传感器\n- 人体红外传感器\n- 测速模块\n- 空气温湿度传感器\n- 摇杆\n- 电位器\n- 电机\n- LED\n\n## 2. 使用说明\n- 点击高级->添加软件包（add package），粘贴Magibit库的地址，https://github.com/Imagimaker/pxt-magibit\n- 点击右侧“搜索”按钮，单击找到的程序包，稍等片刻后，即可成功添加Magibit的语句库。\n![install](install.gif)\n\n## 3. 备注\n\n- 舵机推荐使用Micro:bit官方的语句进行控制，引脚->伺服机构（pin->servo）。\n- 灯带推荐使用Neopixel进行控制，在Add Package中搜索Neopixel即可添加。\n- 语句库中的摇杆模块的语句，硬件上只支持搭配Magibit摇杆模块进行使用，不支持第三方摇杆模块。如需使用第三方摇杆模块，用户需自行读取pin口数据。\n\n\n\n## Supported targets\n\n* for PXT/microbit",
      "_locales/zh/Magibit-strings.json": "{\n  \"magibit.InfraredSensorReadValue|block\": \"👀人体红外传感器的数字值 at |%pin|\",\n  \"magibit.MotorSpeedSensorReadValue|block\": \"⏱测速模块的数字值 at |%pin|\",\n  \"magibit.SoilSensorReadValue|block\": \"💧土壤湿度的模拟值 at |%pin|\",\n  \"magibit.SoundSensorReadValue|block\": \"🔊声音大小的模拟值 at |%pin|\",\n  \"magibit.airHumidityReadValue|block\": \"🌡空气湿度（%） at |%pin|\",\n  \"magibit.airTemperatureReadValue|block\": \"🌡空气温度（℃） at |%pin|\",\n  \"magibit.joystickReadButtonStateValue|block\": \"🕹当摇杆 |%joystick| 被按下\",\n  \"magibit.joystickReadXValue|block\": \"🕹摇杆X轴的位置 at |%joystick|\",\n  \"magibit.joystickReadYValue|block\": \"🕹摇杆Y轴的位置 |%joystick|\",\n  \"magibit.ledSetBrightness|block\": \"💡LED灯 |%pin| 设置亮度为 |%brightness|\",\n  \"magibit.ledSetOnOff|block\": \"💡LED |%pin| |%state|\",\n  \"magibit.lightSensorReadValue|block\": \"🔆光线强度的模拟值 at |%pin|\",\n  \"magibit.motorSetSpeed|block\": \"电机 |%motor| 方向 |%direction| 速度 |%speed|\",\n  \"magibit.motorStopAll|block\": \"所有电机停止转动\",\n  \"magibit.potentiometerReadValue|block\": \"🎚电位器旋转位置的模拟值 at |%pin|\",\n  \"magibit|block\": \"麦极创客\",\n  \"{id:category}Magibit\": \"麦极创客\"\n}",
      "magibit.ts": "/**\n * support for magibit\n */\n//% weight=10 icon=\"\\uf0ad\" color=#FF7D0A block=\"Magibit\"\nnamespace magibit {\n  /**\n   * 定义项目中使用的内部数据类型\n   */\n  export enum InnerNumberType {\n    ANALOG,\n    DIGITAL\n  }\n\n  export enum Motor {\n    M1,\n    M2\n  }\n\n  export enum MotorDirection {\n    Forward,\n    Backward\n  }\n\n  export enum LEDPin {\n    P0,\n    P1,\n    P2,\n    P13,\n    P16\n  }\n\n  export enum LEDState {\n    ON,\n    OFF\n  }\n\n  export enum LightSensorPins {\n    P0,\n    P1,\n    P2\n  }\n\n  export enum SoundSensorPins {\n    P0,\n    P1,\n    P2\n  }\n\n  export enum SoilSensorPins {\n    P0,\n    P1,\n    P2\n  }\n\n  export enum InfraredSensorPins {\n    P13,\n    P16\n  }\n\n  export enum UltrasonicSensorPins {\n    P13,\n    P16\n  }\n\n  export enum AirSensorPins {\n    P0,\n    P1,\n    P2\n  }\n\n  export enum PotentiometerSensorPins {\n    P0,\n    P1,\n    P2\n  }\n\n  export enum Joystick {\n    A1,\n    A2\n  }\n\n  /**\n   * read light sensor's value\n   * @param pin sensor's active pin\n   * @return number returns analog value from 0 to 1023\n   */\n  //% blockId=magibit_sensor_light_read\n  //% block=\"🔆Light level read analog at |%pin|\"\n  //% blockGap=16\n  //% weight=80\n  export function lightSensorReadValue(pin: LightSensorPins): number {\n    switch (pin) {\n      case LightSensorPins.P0:\n        return pins.analogReadPin(AnalogPin.P0);\n      case LightSensorPins.P1:\n        return pins.analogReadPin(AnalogPin.P1);\n      case LightSensorPins.P2:\n        return pins.analogReadPin(AnalogPin.P2);\n      default:\n        return 0;\n    }\n  }\n\n  /**\n   * read sound sensor's value\n   * @param pin sensor's active pin\n   * @return number returns analog value from 0 to 1023\n   */\n  //% blockId=magibit_sensor_sound_read\n  //% block=\"🔊Amplitude of sound read analog at |%pin|\"\n  //% blockGap=16\n  //% weight=79\n  export function SoundSensorReadValue(pin: SoundSensorPins): number {\n    switch (pin) {\n      case SoundSensorPins.P0:\n        return pins.analogReadPin(AnalogPin.P0);\n      case SoundSensorPins.P1:\n        return pins.analogReadPin(AnalogPin.P1);\n      case SoundSensorPins.P2:\n        return pins.analogReadPin(AnalogPin.P2);\n      default:\n        return 0;\n    }\n  }\n\n  /**\n   * read soil sensor's value\n   * @param pin sensor's active pin\n   * @return number returns analog value from 0 to 1023\n   */\n  //% blockId=magibit_sensor_soil_read\n  //% block=\"💧Soil moisture read analog at |%pin|\"\n  //% blockGap=16\n  //% weight=78\n  export function SoilSensorReadValue(pin: SoilSensorPins): number {\n    switch (pin) {\n      case SoilSensorPins.P0:\n        return pins.analogReadPin(AnalogPin.P0);\n      case SoilSensorPins.P1:\n        return pins.analogReadPin(AnalogPin.P1);\n      case SoilSensorPins.P2:\n        return pins.analogReadPin(AnalogPin.P2);\n      default:\n        return 0;\n    }\n  }\n\n  /**\n   * read infrared sensor's value\n   * @param pin sensor's active pin\n   * @return number returns digital value from 0 to 1\n   */\n  //% blockId=magibit_sensor_infrared_read\n  //% block=\"👀infrared read digital at |%pin|\"\n  //% blockGap=16\n  //% weight=77\n  export function InfraredSensorReadValue(pin: InfraredSensorPins): number {\n    switch (pin) {\n      case InfraredSensorPins.P13:\n        return pins.digitalReadPin(DigitalPin.P13);\n      case InfraredSensorPins.P16:\n        return pins.digitalReadPin(DigitalPin.P16);\n      default:\n        return 0;\n    }\n  }\n\n  /**\n   * read motor speed sensor's value\n   * @param pin sensor's active pin\n   * @return number returns digital value from 0 to 1\n   */\n  //% blockId=magibit_sensor_motor_speed_read\n  //% block=\"⏱Motor speed read digital at |%pin|\"\n  //% blockGap=16\n  //% weight=76\n  export function MotorSpeedSensorReadValue(pin: InfraredSensorPins): number {\n    switch (pin) {\n      case InfraredSensorPins.P13:\n        return pins.digitalReadPin(DigitalPin.P13);\n      case InfraredSensorPins.P16:\n        return pins.digitalReadPin(DigitalPin.P16);\n      default:\n        return 0;\n    }\n  }\n\n  /**\n   * read air temperature sensor's value\n   * @param pin sensor's active pin\n   * @return number returns analog value from 0 to 1023\n   */\n  //% blockId=magibit_sensor_air_temperature_read\n  //% block=\"🌡Read air temperature(°C) at |%pin|\"\n  //% blockGap=8\n  //% weight=75\n  export function airTemperatureReadValue(pin: AirSensorPins): number {\n    let tmpVal = 0;\n    switch (pin) {\n      case AirSensorPins.P0: {\n        tmpVal = minode.DHTGetTemperature(ConnName.A0, DHTTemStyle.MINODE_DHT_CELSIUS);\n        break;\n      }\n      case AirSensorPins.P1: {\n        tmpVal = minode.DHTGetTemperature(ConnName.A1, DHTTemStyle.MINODE_DHT_CELSIUS);\n        break;\n      }\n      case AirSensorPins.P2: {\n        tmpVal = minode.DHTGetTemperature(ConnName.A2, DHTTemStyle.MINODE_DHT_CELSIUS);\n        break;\n      }\n    }\n    return tmpVal;\n  }\n\n  /**\n   * read air humidity sensor's value\n   * @param pin sensor's active pin\n   * @return number returns analog value from 0 to 1023\n   */\n  //% blockId=magibit_sensor_air_humidity_read\n  //% block=\"🌡Read air humidity(%) at |%pin|\"\n  //% blockGap=16\n  //% weight=74\n  export function airHumidityReadValue(pin: AirSensorPins): number {\n    let tmpVal = 0;\n    switch (pin) {\n      case AirSensorPins.P0: {\n        tmpVal = minode.DHTGetHumidity(ConnName.A0);\n        break;\n      }\n      case AirSensorPins.P1: {\n        tmpVal = minode.DHTGetHumidity(ConnName.A1);\n        break;\n      }\n      case AirSensorPins.P2: {\n        tmpVal = minode.DHTGetHumidity(ConnName.A2);\n        break;\n      }\n    }\n    return tmpVal;\n  }\n\n  /**\n   * read joystick sensor's x value\n   * @param joystick selected joystick sensor\n   * @return number returns analog value from 0 to 1000\n   */\n  //% blockId=magibit_sensor_joystick_x_read\n  //% block=\"🕹Position of joystick, x-axis |%joystick|\"\n  //% blockGap=8\n  //% weight=73\n  export function joystickReadXValue(joystick: Joystick): number {\n    switch (joystick) {\n      case Joystick.A1:\n        return pins.analogReadPin(AnalogPin.P1);\n      case Joystick.A2:\n        return pins.analogReadPin(AnalogPin.P0);\n      default:\n        return 0;\n    }\n  }\n\n  /**\n   * read joystick sensor's y value\n   * @param joystick selected joystick sensor\n   * @return number returns analog value from 0 to 1000\n   */\n  //% blockId=magibit_sensor_joystick_y_read\n  //% block=\"🕹Position of joystick, y-axis |%joystick|\"\n  //% blockGap=8\n  //% weight=72\n  export function joystickReadYValue(joystick: Joystick): number {\n    switch (joystick) {\n      case Joystick.A1:\n        return pins.analogReadPin(AnalogPin.P2);\n      case Joystick.A2:\n        return pins.analogReadPin(AnalogPin.P1);\n      default:\n        return 0;\n    }\n  }\n\n  /**\n   * read joystick sensor's button state value\n   * @param joystick selected joystick sensor\n   * @return number returns digital value from 0 to 1\n   */\n  //% blockId=magibit_sensor_joystick_button_state_read\n  //% block=\"🕹Joystick |%joystick| is pressed\"\n  //% blockGap=16\n  //% weight=71\n  export function joystickReadButtonStateValue(joystick: Joystick): boolean {\n    let tmpVal = 0;\n    let tmpP0Val = pins.analogReadPin(AnalogPin.P0);\n    let tmpP1Val = pins.analogReadPin(AnalogPin.P1);\n    let tmpP2Val = pins.analogReadPin(AnalogPin.P2);\n    switch (joystick) {\n      case Joystick.A1:\n        tmpVal = tmpP1Val > tmpP2Val ? tmpP1Val : tmpP2Val;\n        break;\n      case Joystick.A2:\n        tmpVal = tmpP0Val > tmpP1Val ? tmpP0Val : tmpP1Val;\n        break;\n    }\n    return tmpVal > 1000;\n  }\n\n  /**\n   * read potentiometer sensor's value\n   * @param pin sensor's active pin\n   * @return number returns analog value from 0 to 1023\n   */\n  //% blockId=magibit_sensor_potentiometer_read\n  //% block=\"🎚Potentiometer read analog at |%pin|\"\n  //% blockGap=16\n  //% weight=70\n  export function potentiometerReadValue(pin: PotentiometerSensorPins): number {\n    switch (pin) {\n      case PotentiometerSensorPins.P0:\n        return pins.analogReadPin(AnalogPin.P0);\n      case PotentiometerSensorPins.P1:\n        return pins.analogReadPin(AnalogPin.P1);\n      case PotentiometerSensorPins.P2:\n        return pins.analogReadPin(AnalogPin.P2);\n      default:\n        return 0;\n    }\n  }\n\n\n  /**\n   * change motor's speed and direction\n   */\n  //% blockId=magibit_actuator_motor_set_speed\n  //% block=\"Motor |%motor| running with direction |%direction| and speed |%speed|\"\n  //% weight=69\n  //% blockGap=8\n  //% speed.min=0 speed.max=1023\n  export function motorSetSpeed(motor: Motor, direction: MotorDirection, speed: number): void {\n\n    let speedVal = filterInnerTypeNumber(InnerNumberType.ANALOG, speed);\n\n    if (motor == Motor.M1) {\n      pins.digitalWritePin(DigitalPin.P8, direction);\n      pins.analogWritePin(AnalogPin.P12, speedVal);\n    } else if (motor == Motor.M2) {\n      pins.digitalWritePin(DigitalPin.P14, direction);\n      pins.analogWritePin(AnalogPin.P15, speedVal)\n    }\n  }\n\n  /**\n   * stop all motor\n   */\n  //% blockId=magibit_actuator_motor_stop_all\n  //% block=\"Motor stop all\"\n  //% blockGap=16\n  //% weight=68\n  export function motorStopAll(): void {\n    motorSetSpeed(Motor.M1, MotorDirection.Forward, 0);\n    motorSetSpeed(Motor.M2, MotorDirection.Forward, 0);\n  }\n\n\n  /**\n   * set LED'S brightness\n   */\n  //% blockId=magibit_actuator_led_set_brightness\n  //% block=\"💡LED |%pin| set brightness |%brightness|\"\n  //% weight=67\n  //% blockGap=8\n  //% brightness.min=0 brightness.max=1023\n  export function ledSetBrightness(pin: LEDPin, brightness: number): void {\n\n    let brightnessVal = filterInnerTypeNumber(InnerNumberType.ANALOG, brightness);\n\n    switch (pin) {\n      case LEDPin.P0:\n        pins.analogWritePin(AnalogPin.P0, brightnessVal);\n        break;\n      case LEDPin.P1:\n        pins.analogWritePin(AnalogPin.P1, brightnessVal);\n        break;\n      case LEDPin.P2:\n        pins.analogWritePin(AnalogPin.P2, brightnessVal);\n        break;\n      case LEDPin.P13:\n        pins.analogWritePin(AnalogPin.P13, brightnessVal);\n        break;\n      case LEDPin.P16:\n        pins.analogWritePin(AnalogPin.P16, brightnessVal);\n        break;\n    }\n  }\n\n  /**\n   * turn LED on or off\n   */\n  //% blockId=magibit_actuator_led_on_off\n  //% block=\"💡LED |%pin| |%state|\"\n  //% blockGap=8\n  //% weight=66\n  export function ledSetOnOff(pin: LEDPin, state: LEDState): void {\n    switch (state) {\n      case LEDState.ON:\n        ledSetBrightness(pin, 1023);\n        break;\n      case LEDState.OFF:\n        ledSetBrightness(pin, 0);\n        break;\n      default:\n        ledSetBrightness(pin, 0);\n    }\n  }\n\n  /**\n   * 项目内部的数据类型非法制过滤\n   * @param {InnerNumberType} innerType\n   * @param {number} analogNumber\n   * @returns {number}\n   */\n  export function filterInnerTypeNumber(innerType: InnerNumberType, analogNumber: number): number {\n    switch (innerType) {\n      case InnerNumberType.ANALOG: {\n        if (analogNumber < 0 || analogNumber == null) {\n          return 0;\n        } else if (analogNumber > 1023) {\n          return 1023;\n        } else {\n          return analogNumber;\n        }\n      }\n      case InnerNumberType.DIGITAL: {\n        if (analogNumber < 0 || analogNumber == null) {\n          return 0;\n        } else {\n          return analogNumber;\n        }\n      }\n    }\n    return 0;\n  }\n}\n",
      "magibitTest.ts": "",
      "pxt.json": "{\n    \"name\": \"Magibit\",\n    \"description\": \"Magibit package for Micro:bit\",\n    \"license\": \"MIT\",\n    \"dependencies\": {\n        \"core\": \"*\",\n        \"minode\": \"*\"\n    },\n    \"files\": [\n        \"README.md\",\n        \"magibit.ts\",\n        \"_locales/zh/Magibit-strings.json\"\n    ],\n    \"testFiles\": [\n        \"magibitTest.ts\"\n    ],\n    \"public\": true,\n    \"targetVersions\": {\n        \"target\": \"1.1.26\"\n    }\n}"
    }
  }
}