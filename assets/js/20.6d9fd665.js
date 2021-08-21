(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{408:function(e,a,t){e.exports=t.p+"assets/img/stateExample.f16bd4b1.png"},470:function(e,a,t){"use strict";t.r(a);var n=t(21),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"configuration-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example"}},[e._v("#")]),e._v(" Configuration Example")]),e._v(" "),n("h2",{attrs:{id:"enable-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-api"}},[e._v("#")]),e._v(" Enable API")]),e._v(" "),n("p",[e._v("Please make sure that the API is activated! A password can optionally be defined.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("api:\n  password: 'MyPassword'\n")])])]),n("p",[e._v("The adapter automatically detects devices managed by ESPHome and synchronizes their data with ioBroker "),n("a",{attrs:{href:"https://esphome.io/components/api.html?highlight=api",target:"_blank",rel:"noopener noreferrer"}},[e._v("See ESPHome API refference"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"example-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration"}},[e._v("#")]),e._v(" Example configuration")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('esphome:\n  name: sensor_badkamer\n  platform: ESP32\n  board: esp-wrover-kit\n\nwifi:\n  use_address: 192.168.10.122\n  ssid: "xxxxx"\n  password: "xxxxxx"\n          \n# Enable ESPHome API\napi:\n\n# Activate i2c bus  \ni2c:\n  sda: 21\n  scl: 22\n  scan: True\n  id: bus_a\n  \n# Example configuration for bh1750\nsensor:\n  - platform: bh1750\n    name: "Hal_Illuminance"\n    address: 0x23\n    measurement_time: 69\n    update_interval: 10s\n    \n# Example configuration for an GPIO output    \noutput:\n  - platform: gpio\n    pin: 12\n    inverted: true\n    id: gpio_12\n    \n# Example configuration linking a switch to the previous defined output\nswitch:\n  - platform: output\n    name: "Generic Output"\n    output: \'gpio_12\'\n    \n')])])]),n("h2",{attrs:{id:"iobroker-states"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iobroker-states"}},[e._v("#")]),e._v(" ioBroker states")]),e._v(" "),n("p",[n("img",{attrs:{src:t(408),alt:"ioBroker state Exaples"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);