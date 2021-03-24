(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{398:function(e,t,r){"use strict";r.r(t);var a=r(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"sourceanalytix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sourceanalytix"}},[e._v("#")]),e._v(" SourceAnalytix")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.npmjs.com/package/iobroker.sourceanalytix",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"http://img.shields.io/npm/v/iobroker.sourceanalytix.svg",alt:"NPM version"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.npmjs.com/package/iobroker.sourceanalytix",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/dm/iobroker.sourceanalytix.svg",alt:"Downloads"}}),r("OutboundLink")],1),e._v(" "),r("img",{attrs:{src:"http://iobroker.live/badges/sourceanalytix-installed.svg",alt:"Number of Installations (latest)"}}),e._v(" "),r("img",{attrs:{src:"http://iobroker.live/badges/sourceanalytix-stable.svg",alt:"Number of Installations (stable)"}}),e._v(" "),r("a",{attrs:{href:"https://david-dm.org/iobroker-community-adapters/iobroker.sourceanalytix",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/david/iobroker-community-adapters/iobroker.sourceanalytix.svg",alt:"Dependency Status"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://weblate.iobroker.net/engage/adapters/?utm_source=widget",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://weblate.iobroker.net/widgets/adapters/-/sourceanalytix/svg-badge.svg",alt:"Translation status"}}),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://nodei.co/npm/iobroker.sourceanalytix/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://nodei.co/npm/iobroker.sourceanalytix.png?downloads=true",alt:"NPM"}}),r("OutboundLink")],1),r("br"),e._v(" "),r("img",{attrs:{src:"https://github.com/iobroker-community-adapters/ioBroker.coronavirus-statistics/workflows/Test%20and%20Release/badge.svg",alt:"Test and Release"}})]),e._v(" "),r("p",[e._v("** Dieser Adapter verwendet den Dienst "),r("a",{attrs:{href:"https://sentry.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentry.io"),r("OutboundLink")],1),e._v(", um Ausnahmen und Codefehler sowie neue Geräteschemata automatisch an mich als Entwickler zu melden. ** weitere Details siehe unten!")]),e._v(" "),r("p",[e._v("Detaillierte Analyse Ihres Energie-, Gas- und Flüssigkeitsverbrauchs\nFür Datenanalysen kann jede Quelle (kWh, Wh, Watt, l / h oder m3) verwendet werden")]),e._v(" "),r("h2",{attrs:{id:"verfugbare-kategorien"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verfugbare-kategorien"}},[e._v("#")]),e._v(" Verfügbare Kategorien")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Datenpunkt")]),e._v(" "),r("th",[e._v("Funktionalität")]),e._v(" "),r("th",[e._v("Beschreibung")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v(">device<.cumulativeReading")]),e._v(" "),r("td",[r("a",{attrs:{href:"#cumulativeReading"}},[e._v("accumulate values")])]),e._v(" "),r("td",[e._v("Berechnen Sie die kumulierten Werte "),r("br"),e._v(" einschließlich "),r("a",{attrs:{href:"#valueTransformation"}},[e._v("Transformation")]),e._v(" "),r("br"),e._v(" Der kumulierte Wert kann geändert werden, indem Sie "),r("a",{attrs:{href:"#cumulativeReading-Reset"}},[e._v("diese Schritte")]),e._v(" ausführen")])]),e._v(" "),r("tr",[r("td",[e._v(">Device<.>Year<.>Year statistics<")]),e._v(" "),r("td",[r("a",{attrs:{href:"#Year-Statistics"}},[e._v("Yearly statistics")])]),e._v(" "),r("td",[e._v("Speichern Sie statistische Informationen des Jahres "),r("br"),e._v(" >device.>thisYear<.>selected period<")])]),e._v(" "),r("tr",[r("td",[e._v(">Device<.>Year<.>currentYear")]),e._v(" "),r("td",[r("a",{attrs:{href:"#Current-Period"}},[e._v("Current Year statistics")])]),e._v(" "),r("td",[e._v('Speichern Sie statistische Informationen des aktuellen Jahres im Verzeichnis "Jahr" '),r("br"),e._v(" >device.>currentYear<.>selected period<")])]),e._v(" "),r("tr",[r("td",[e._v(">Year<.>currentYear.>Consumption type <")]),e._v(" "),r("td",[r("a",{attrs:{href:"#consumptionCalculation"}},[e._v("Consumption")])]),e._v(" "),r("td",[e._v("Stammordner zum Speichern von Verbrauchsdaten "),r("br"),e._v(" (current value - previous value). "),r("br"),e._v(" Can be consumption or delivery")])]),e._v(" "),r("tr",[r("td",[e._v(">Year<.>currentYear.>Cost type <")]),e._v(" "),r("td",[r("a",{attrs:{href:"#costCalculation"}},[e._v("Costs")])]),e._v(" "),r("td",[e._v("Stammordner zum Speichern von Kostendaten "),r("br"),e._v(" current value * cost + basic price "),r("br"),e._v(" Can be consumption or delivery")])])])]),e._v(" "),r("p",[e._v("Alle Statusstandorte sind nach Statusnamen gruppiert und in Perioden- und "),r("a",{attrs:{href:"#Kategorien"}},[e._v("Kategorie")]),e._v(" -Strukturen unterteilt. "),r("br"),e._v("\nBerechnungen werden automatisch verarbeitet und die Werte in die richtige Einheit umgewandelt, wie in "),r("a",{attrs:{href:"#PreisdefinitionenPreisdefinitionen"}},[e._v("Preisdefinitionen")]),e._v(" definiert.")])])}),[],!1,null,null,null);t.default=n.exports}}]);