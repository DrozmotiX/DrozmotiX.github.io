(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{322:function(e,t,r){e.exports=r.p+"assets/img/dashboard.0c0adbf4.png"},432:function(e,t,r){"use strict";r.r(t);var n=r(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"erste-schritte"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#erste-schritte"}},[e._v("#")]),e._v(" Erste Schritte")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/iobroker.esphome",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://img.shields.io/npm/v/iobroker.esphome.svg",alt:"NPM version"}}),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.npmjs.com/package/iobroker.esphome",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/npm/dm/iobroker.esphome.svg",alt:"Downloads"}}),n("OutboundLink")],1),e._v(" "),n("img",{attrs:{src:"http://iobroker.live/badges/esphome-installed.svg",alt:"Number of Installations (latest)"}}),e._v(" "),n("img",{attrs:{src:"http://iobroker.live/badges/esphome-stable.svg",alt:"Number of Installations (stable)"}}),e._v(" "),n("a",{attrs:{href:"https://david-dm.org/DrozmotiX/iobroker.esphome",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/david/DrozmotiX/iobroker.esphome.svg",alt:"Dependency Status"}}),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://weblate.iobroker.net/engage/adapters/?utm_source=widget",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://weblate.iobroker.net/widgets/adapters/-/ESPHome/svg-badge.svg",alt:"Translation status"}}),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://snyk.io/test/github/DrozmotiX/ioBroker.esphome",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://snyk.io/test/github/DrozmotiX/ioBroker.esphome/badge.svg",alt:"Known Vulnerabilities"}}),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://nodei.co/npm/iobroker.esphome/",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://nodei.co/npm/iobroker.esphome.png?downloads=true",alt:"NPM"}}),n("OutboundLink")],1)]),e._v(" "),n("p",[n("strong",[e._v("Tests:")]),e._v(" "),n("img",{attrs:{src:"https://github.com/DrozmotiX/ioBroker.esphome/workflows/Test%20and%20Release/badge.svg",alt:"Test and Release"}})]),e._v(" "),n("p",[n("strong",[e._v("Dieser Adapter verwendet Sentry-Bibliotheken, um Ausnahmen und Codefehler automatisch an die Entwickler zu melden.")]),e._v(" Weitere Details und Informationen zum Deaktivieren der Fehlerberichterstattung finden Sie in der "),n("a",{attrs:{href:"https://github.com/ioBroker/plugin-sentry#plugin-sentry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentry-Plugin-Dokumentation"),n("OutboundLink")],1),e._v("! Sentry-Reporting wird ab js-controller 3.0 verwendet.")]),e._v(" "),n("p",[e._v("Steuern Sie Ihre ESP8266/ESP32 mit einfachen, aber leistungsfähigen Konfigurationsdateien, die von ESPHome erstellt und verwaltet werden.\nNative Integration des von ESPHome verwalteten Geräts (inklusive Dashboard) durch dessen native API und Sicherstellung, dass alle Daten synchronisiert werden (Live-Event-Handling, kein Daten-Polling ! 😃")]),e._v(" "),n("p",[n("img",{attrs:{src:r(322),alt:"Logo"}})]),e._v(" "),n("p",[e._v("Dieser Adapter verwendet die "),n("a",{attrs:{href:"https://github.com/Nafaya/esphome-native-api#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("esphome-native-api"),n("OutboundLink")],1),e._v(" mit allen Credits an @Nafaya zur Interaktion mit der "),n("a",{attrs:{href:"https://esphome.io/components/api.html?highlight=api",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESPHome API"),n("OutboundLink")],1),e._v("!\nw")]),e._v(" "),n("h2",{attrs:{id:"voraussetzungen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#voraussetzungen"}},[e._v("#")]),e._v(" Voraussetzungen")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("* NodeJS >= 12.x\n* Python >= 3.6, <4.0\n* API wird in YAML aktiviert\n* Für Admin-Tabs (optional)\n    * ESPHome Dashboard IP wird in den Instanzeinstellungen bereitgestellt\n")])])]),n("h3",{attrs:{id:"api-in-yaml-aktivieren"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-in-yaml-aktivieren"}},[e._v("#")]),e._v(" API in YAML aktivieren")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("api:\n  password: 'MyPassword'\n")])])]),n("h3",{attrs:{id:"beispielkonfiguration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beispielkonfiguration"}},[e._v("#")]),e._v(" Beispielkonfiguration")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('esphome:\n  name: sensor_badkamer\n  platform: ESP32\n  board: esp-wrover-kit\n\nwifi:\n  use_address: 192.168.10.122\n  ssid: "xxxxx"\n  password: "xxxxxx"\n          \n# Enable ESPHome API\napi:\n    password: \'MyPassword\'\n# Activate i2c bus  \ni2c:\n  sda: 21\n  scl: 22\n  scan: True\n  id: bus_a\n  \n# Example configuration for bh1750\nsensor:\n  - platform: bh1750\n    name: "Hal_Illuminance"\n    address: 0x23\n    measurement_time: 69\n    update_interval: 10s\n    \n# Example configuration for an GPIO output    \noutput:\n  - platform: gpio\n    pin: 12\n    inverted: true\n    id: gpio_12\n    \n# Example configuration linking a switch to the previous defined output\nswitch:\n  - platform: output\n    name: "Generic Output"\n    output: \'gpio_12\'\n    \n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);