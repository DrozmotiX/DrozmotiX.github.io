import{_ as s}from"./chunks/dashboard.YFEaWeyS.js";import{_ as n,o as e,c as p,a2 as t}from"./chunks/framework.vLhlLNVn.js";const u=JSON.parse('{"title":"First steps","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"adapter/esphome/basics.md","filePath":"adapter/esphome/basics.md","lastUpdated":1794652328000}'),i={name:"adapter/esphome/basics.md"};function o(r,a,l,c,d,m){return e(),p("div",null,[...a[0]||(a[0]=[t('<h1 id="first-steps" tabindex="-1">First steps <a class="header-anchor" href="#first-steps" aria-label="Permalink to &quot;First steps&quot;">​</a></h1><p><a href="https://www.npmjs.com/package/iobroker.esphome" target="_blank" rel="noreferrer"><img src="http://img.shields.io/npm/v/iobroker.esphome.svg" alt="NPM version"></a><a href="https://www.npmjs.com/package/iobroker.esphome" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/dm/iobroker.esphome.svg" alt="Downloads"></a><img src="http://iobroker.live/badges/esphome-installed.svg" alt="Number of Installations (latest)"><img src="http://iobroker.live/badges/esphome-stable.svg" alt="Number of Installations (stable)"><a href="https://david-dm.org/DrozmotiX/iobroker.esphome" target="_blank" rel="noreferrer"><img src="https://img.shields.io/david/DrozmotiX/iobroker.esphome.svg" alt="Dependency Status"></a><a href="https://weblate.iobroker.net/engage/adapters/?utm_source=widget" target="_blank" rel="noreferrer"><img src="https://weblate.iobroker.net/widgets/adapters/-/ESPHome/svg-badge.svg" alt="Translation status"></a><a href="https://snyk.io/test/github/DrozmotiX/ioBroker.esphome" target="_blank" rel="noreferrer"><img src="https://snyk.io/test/github/DrozmotiX/ioBroker.esphome/badge.svg" alt="Known Vulnerabilities"></a></p><p><a href="https://nodei.co/npm/iobroker.esphome/" target="_blank" rel="noreferrer"><img src="https://nodei.co/npm/iobroker.esphome.png?downloads=true" alt="NPM"></a></p><p><strong>Tests:</strong> <img src="https://github.com/DrozmotiX/ioBroker.esphome/workflows/Test%20and%20Release/badge.svg" alt="Test and Release"></p><p><strong>This adapter uses Sentry libraries to automatically report exceptions and code errors to developers.</strong> For more details and information on how to disable error reporting, see the <a href="https://github.com/ioBroker/plugin-sentry#plugin-sentry" target="_blank" rel="noreferrer">Sentry plugin documentation</a>! Sentry reporting is used from js-controller 3.0 onwards.</p><p>Control your ESP8266/ESP32 with simple but powerful configuration files created and managed by ESPHome. Native integration of the ESPHome managed device (including dashboard) through its native API and ensure that all data is synchronized (live event handling, no data polling ! 😃</p><p><img src="'+s+`" alt="logo"></p><p>This adapter uses the <a href="https://github.com/Nafaya/esphome-native-api#readme" target="_blank" rel="noreferrer">esphome-native-api</a> with all credits to @Nafaya to interact with the <a href="https://esphome.io/components/api.html?highlight=api" target="_blank" rel="noreferrer">ESPHome API</a>!</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><pre><code>* NodeJS &gt;= 12.x
* Python &gt;= 3.6, &lt;4.0
* API is enabled in YAML
* For admin tabs (optional)
    * ESPHome Dashboard IP is provided in instance settings.
</code></pre><h3 id="enable-api-in-yaml" tabindex="-1">Enable API in YAML <a class="header-anchor" href="#enable-api-in-yaml" aria-label="Permalink to &quot;Enable API in YAML&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api:</span></span>
<span class="line"><span>  password: &#39;MyPassword&#39;</span></span></code></pre></div><h3 id="example-configuration" tabindex="-1">Example configuration <a class="header-anchor" href="#example-configuration" aria-label="Permalink to &quot;Example configuration&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>esphome:</span></span>
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
<span class="line"><span>    output: &#39;gpio_12&#39;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Created configuration (&gt;device&lt;.yaml) files will be stored at</p><p><code>/opt/iobroker/node_modules/iobroker.esphome/config/&gt;device&lt;.yaml</code></p></div>`,15)])])}const b=n(i,[["render",o]]);export{u as __pageData,b as default};
