import{_ as a}from"./chunks/dashboard.B9rQTeAV.js";import{_ as e,o as n,c as t,a2 as p}from"./chunks/framework.vLhlLNVn.js";const g=JSON.parse('{"title":"Erste Schritte","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"de/adapter/esphome/basics.md","filePath":"de/adapter/esphome/basics.md","lastUpdated":1794652328000}'),i={name:"de/adapter/esphome/basics.md"};function r(o,s,l,c,d,h){return n(),t("div",null,[...s[0]||(s[0]=[p('<h1 id="erste-schritte" tabindex="-1">Erste Schritte <a class="header-anchor" href="#erste-schritte" aria-label="Permalink to &quot;Erste Schritte&quot;">​</a></h1><p><a href="https://www.npmjs.com/package/iobroker.esphome" target="_blank" rel="noreferrer"><img src="http://img.shields.io/npm/v/iobroker.esphome.svg" alt="NPM version"></a><a href="https://www.npmjs.com/package/iobroker.esphome" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/dm/iobroker.esphome.svg" alt="Downloads"></a><img src="http://iobroker.live/badges/esphome-installed.svg" alt="Number of Installations (latest)"><img src="http://iobroker.live/badges/esphome-stable.svg" alt="Number of Installations (stable)"><a href="https://david-dm.org/DrozmotiX/iobroker.esphome" target="_blank" rel="noreferrer"><img src="https://img.shields.io/david/DrozmotiX/iobroker.esphome.svg" alt="Dependency Status"></a><a href="https://weblate.iobroker.net/engage/adapters/?utm_source=widget" target="_blank" rel="noreferrer"><img src="https://weblate.iobroker.net/widgets/adapters/-/ESPHome/svg-badge.svg" alt="Translation status"></a><a href="https://snyk.io/test/github/DrozmotiX/ioBroker.esphome" target="_blank" rel="noreferrer"><img src="https://snyk.io/test/github/DrozmotiX/ioBroker.esphome/badge.svg" alt="Known Vulnerabilities"></a></p><p><a href="https://nodei.co/npm/iobroker.esphome/" target="_blank" rel="noreferrer"><img src="https://nodei.co/npm/iobroker.esphome.png?downloads=true" alt="NPM"></a></p><p><strong>Tests:</strong> <img src="https://github.com/DrozmotiX/ioBroker.esphome/workflows/Test%20and%20Release/badge.svg" alt="Test and Release"></p><p><strong>Dieser Adapter verwendet Sentry-Bibliotheken, um Ausnahmen und Codefehler automatisch an die Entwickler zu melden.</strong> Weitere Details und Informationen zum Deaktivieren der Fehlerberichterstattung finden Sie in der <a href="https://github.com/ioBroker/plugin-sentry#plugin-sentry" target="_blank" rel="noreferrer">Sentry-Plugin-Dokumentation</a>! Sentry-Reporting wird ab js-controller 3.0 verwendet.</p><p>Steuern Sie Ihre ESP8266/ESP32 mit einfachen, aber leistungsfähigen Konfigurationsdateien, die von ESPHome erstellt und verwaltet werden. Native Integration des von ESPHome verwalteten Geräts (inklusive Dashboard) durch dessen native API und Sicherstellung, dass alle Daten synchronisiert werden (Live-Event-Handling, kein Daten-Polling ! 😃</p><p><img src="'+a+`" alt="Logo"></p><p>Dieser Adapter verwendet die <a href="https://github.com/Nafaya/esphome-native-api#readme" target="_blank" rel="noreferrer">esphome-native-api</a> mit allen Credits an @Nafaya zur Interaktion mit der <a href="https://esphome.io/components/api.html?highlight=api" target="_blank" rel="noreferrer">ESPHome API</a>! w</p><h2 id="voraussetzungen" tabindex="-1">Voraussetzungen <a class="header-anchor" href="#voraussetzungen" aria-label="Permalink to &quot;Voraussetzungen&quot;">​</a></h2><pre><code>* NodeJS &gt;= 12.x
* Python &gt;= 3.6, &lt;4.0
* API wird in YAML aktiviert
* Für Admin-Tabs (optional)
    * ESPHome Dashboard IP wird in den Instanzeinstellungen bereitgestellt
</code></pre><h3 id="api-in-yaml-aktivieren" tabindex="-1">API in YAML aktivieren <a class="header-anchor" href="#api-in-yaml-aktivieren" aria-label="Permalink to &quot;API in YAML aktivieren&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api:</span></span>
<span class="line"><span>  password: &#39;MyPassword&#39;</span></span></code></pre></div><h3 id="beispielkonfiguration" tabindex="-1">Beispielkonfiguration <a class="header-anchor" href="#beispielkonfiguration" aria-label="Permalink to &quot;Beispielkonfiguration&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>esphome:</span></span>
<span class="line"><span>  name: sensor_badkamer</span></span>
<span class="line"><span>  platform: ESP32</span></span>
<span class="line"><span>  board: esp-wrover-kit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wifi:</span></span>
<span class="line"><span>  use_address: 192.168.10.122</span></span>
<span class="line"><span>  ssid: &quot;xxxxx&quot;</span></span>
<span class="line"><span>  password: &quot;xxxxxx&quot;</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span># Enable ESPHome API</span></span>
<span class="line"><span>api:</span></span>
<span class="line"><span>    password: &#39;MyPassword&#39;</span></span>
<span class="line"><span># Activate i2c bus  </span></span>
<span class="line"><span>i2c:</span></span>
<span class="line"><span>  sda: 21</span></span>
<span class="line"><span>  scl: 22</span></span>
<span class="line"><span>  scan: True</span></span>
<span class="line"><span>  id: bus_a</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># Example configuration for bh1750</span></span>
<span class="line"><span>sensor:</span></span>
<span class="line"><span>  - platform: bh1750</span></span>
<span class="line"><span>    name: &quot;Hal_Illuminance&quot;</span></span>
<span class="line"><span>    address: 0x23</span></span>
<span class="line"><span>    measurement_time: 69</span></span>
<span class="line"><span>    update_interval: 10s</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span># Example configuration for an GPIO output    </span></span>
<span class="line"><span>output:</span></span>
<span class="line"><span>  - platform: gpio</span></span>
<span class="line"><span>    pin: 12</span></span>
<span class="line"><span>    inverted: true</span></span>
<span class="line"><span>    id: gpio_12</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span># Example configuration linking a switch to the previous defined output</span></span>
<span class="line"><span>switch:</span></span>
<span class="line"><span>  - platform: output</span></span>
<span class="line"><span>    name: &quot;Generic Output&quot;</span></span>
<span class="line"><span>    output: &#39;gpio_12&#39;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Erstellte Konfigurationsdateien (&gt;device&lt;.yaml) werden gespeichert unter</p><p><code>/opt/iobroker/node_modules/iobroker.esphome/config/&gt;device&lt;.yaml</code></p></div>`,15)])])}const b=e(i,[["render",r]]);export{g as __pageData,b as default};
