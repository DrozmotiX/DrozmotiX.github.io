(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{418:function(e,t,a){e.exports=a.p+"assets/img/architecture.f946b1f9.png"},474:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"iobroker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iobroker"}},[e._v("#")]),e._v(" ioBroker")]),e._v(" "),r("p",[e._v("ioBroker is an integration platform for the "),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Internet_of_Things",target:"_blank",rel:"noopener noreferrer"}},[e._v("Internet of Things"),r("OutboundLink")],1),e._v(",\nfocused on Building Automation, Smart Metering, Ambient Assisted Living, Process Automation, Visualization and\nData Logging. It like a software f.e. "),r("a",{attrs:{href:"http://fhem.de",target:"_blank",rel:"noopener noreferrer"}},[e._v("fhem"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"http://www.openhab.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenHAB"),r("OutboundLink")],1),e._v(" or\n"),r("a",{attrs:{href:"http://thethingsystem.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the thing system"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"concept"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[e._v("#")]),e._v(" Concept")]),e._v(" "),r("p",[e._v("ioBroker is not just an application, it's more of a a concept, a database schema, and offers a very easy way for systems\nto inter-operate. ioBroker defines some common rules for a pair of databases used to exchange data and publish events\nbetween different systems.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(418),alt:"architecture"}})]),e._v(" "),r("h3",{attrs:{id:"databases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[e._v("#")]),e._v(" Databases")]),e._v(" "),r("p",[e._v('ioBroker uses "in memory" database to hold the data and saves it on disk with reasonable intervals. There are two types of\nstorage:')]),e._v(" "),r("ul",[r("li",[e._v("states (values)")]),e._v(" "),r("li",[e._v("objects (meta/configuration information)")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v('States can be stored in "in memory" or in redis. Objects can be stored only in "in memory" DB.')])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis"),r("OutboundLink")],1),e._v(" is an in-memory key-value data store and also a message broker with publish/subscribe pattern.\nIt's used to maintain and publish all states of connected systems.")]),e._v(" "),r("h3",{attrs:{id:"adapters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adapters"}},[e._v("#")]),e._v(" Adapters")]),e._v(" "),r("p",[e._v("Systems are attached to ioBrokers databases via so called adapters, technically processes running anywhere\nin the network and connecting all kinds of systems to ioBrokers databases. A connection to ioBrokers databases can be\nimplemented in nearly any programming language on nearly any platform and an adapter can run on any host that is able to\nreach the databases via ip networking.")]),e._v(" "),r("p",[e._v("A library module for fast and comfortable adapter development exists for Javascript/Node.js until now. Libraries for\nadapter development in other languages are planned (python, java, perl, ...).")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("See actual list of adapters on "),r("a",{attrs:{href:"http://iobroker.net/#en/adapters",target:"_blank",rel:"noopener noreferrer"}},[e._v("iobroker.net"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),r("p",[e._v("ioBroker is designed to be accessed by trusted adapters inside trusted networks. This means that usually it is not a\ngood idea to expose the ioBroker databases, adapters or any smart home devices directly to the internet or, in general,\nto an environment where untrusted clients can directly access these network services. Adapters that offer services\nsupposed to be exposed to the internet should be handled with care. You should always activate "),r("strong",[e._v("HTTPS")]),e._v(" and use valid\ncertificates for web, admin if open it for internet or for example use it with additional security measures like VPN,\nVLAN and reverse proxies.")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("These installations steps are for Linux only, please do not execute them in your ioBroker-Docker environment or on Windows")]),e._v(" "),r("p",[e._v("[ ] Basic system, like ubuntu or debian, is running and up-to-date"),r("br"),e._v("\n[ ] NodeJS installed ("),r("RouterLink",{attrs:{to:"/languages/en/BasicSetup/03.ProxmoxLXC.html#NodeJS"}},[e._v("see here")]),e._v(")")],1),e._v(" "),r("h2",{attrs:{id:"install-iobroker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-iobroker"}},[e._v("#")]),e._v(" Install ioBroker")]),e._v(" "),r("p",[e._v("To ensure ioBroker is installed correctly with all dependency's and required settings (like folder ACL and library's) the ioBroker Team created a powerful installation script which ensures a proper installation!"),r("br"),e._v("\nJust enter "),r("code",[e._v("curl -sLf https://iobroker.net/install.sh | bash -")]),e._v(" and the installer will handle the rest"),r("br"),e._v("\nAfter some minutes you should see :")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Installing prerequisites (1/4)\nCreating ioBroker user and directory (2/4)\nInstalling ioBroker (3/4)\nFinalizing installation (4/4)\n\nioBroker was installed successfully\nOpen http://xxx.xxx.xxx.xxx:8081 in a browser and start configuring!\n")])])]),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("IoBroker is ready to be used")]),e._v(" "),r("p",[e._v("Admin is reachable at http://xxx.xxx.xxx.xxx:8081")])]),e._v(" "),r("p",[e._v("Have fun !")])])}),[],!1,null,null,null);t.default=s.exports}}]);