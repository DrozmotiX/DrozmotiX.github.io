(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{457:function(e,n,t){"use strict";t.r(n);var a=t(20),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"konfigurations-beispiel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#konfigurations-beispiel"}},[e._v("#")]),e._v(" Konfigurations Beispiel")]),e._v(" "),t("p",[e._v("Bitte stellen Sie sicher, dass die API aktiviert ist! Optional kann ein Kennwort definieren werden.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("api:\n  password: 'MyPassword'\n")])])]),t("p",[e._v("Der Adapter erkennt automatisch von ESPHome verwaltete Geräte und synchronisiert deren Daten mit ioBroker")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://esphome.io/components/api.html?highlight=api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Siehe Referenz zur ESPHome-API"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('esphome:\n  name: sensor_badkamer\n  platform: ESP32\n  board: esp-wrover-kit\n\nwifi:\n  use_address: 192.168.10.122\n  ssid: "xxxxx"\n  password: "xxxxxx"\n          \n# Enable ESPHome API\napi:\n\n# Activate i2c bus  \ni2c:\n  sda: 21\n  scl: 22\n  scan: True\n  id: bus_a\n  \n# Example configuration for bh1750\nsensor:\n  - platform: bh1750\n    name: "Hal_Illuminance"\n    address: 0x23\n    measurement_time: 69\n    update_interval: 10s\n    \n# Example configuration for an GPIO output    \noutput:\n  - platform: gpio\n    pin: 12\n    inverted: true\n    id: gpio_12\n    \n# Example configuration linking a switch to the previous defined output\nswitch:\n  - platform: output\n    name: "Generic Output"\n    output: \'gpio_12\'\n    \n')])])])])}),[],!1,null,null,null);n.default=i.exports}}]);