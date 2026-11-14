import{_ as e,o as a,c as t,a2 as o}from"./chunks/framework.vLhlLNVn.js";const c=JSON.parse('{"title":"YAML Templates","description":"","frontmatter":{"order":8},"headers":[],"relativePath":"adapter/esphome/yamltemplates.md","filePath":"adapter/esphome/yamltemplates.md","lastUpdated":1794652328000}'),s={name:"adapter/esphome/yamltemplates.md"};function i(r,n,u,p,l,d){return a(),t("div",null,[...n[0]||(n[0]=[o(`<h1 id="yaml-templates" tabindex="-1">YAML Templates <a class="header-anchor" href="#yaml-templates" aria-label="Permalink to &quot;YAML Templates&quot;">​</a></h1><p>To make it easier for you getting started with ESPHome, you will find here, with a lot of thanks to hard-working helpers, some examples of devices that are widely used.</p><h2 id="secrets-yaml" tabindex="-1">SECRETS.YAML <a class="header-anchor" href="#secrets-yaml" aria-label="Permalink to &quot;SECRETS.YAML&quot;">​</a></h2><p>ToDo: what is it</p><div class="tip custom-block"><p class="custom-block-title">tip</p><p>extra info</p></div><div class="warning custom-block"><p class="custom-block-title">Warnung / Hinweis</p><p>extra info</p></div><div class="danger custom-block"><p class="custom-block-title">Achtung</p><p>extra info</p></div><h3 id="why" tabindex="-1">why <a class="header-anchor" href="#why" aria-label="Permalink to &quot;why&quot;">​</a></h3><h3 id="how-to-use" tabindex="-1">how to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;how  to use&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><details><summary> Show Template </summary><pre><code>esphome:
  name: sensor_badkamer
  platform: ESP32
  board: esp-wrover-kit

wifi:
  use_address: 192.168.10.122
  ssid: &quot;xxxxx&quot;
  password: &quot;xxxxxx&quot;
          
# Enable ESPHome API
api:
    password: &#39;MyPassword&#39;
# Activate i2c bus  
i2c:
  sda: 21
  scl: 22
  scan: True
  id: bus_a
  
# Example configuration for bh1750
sensor:
  - platform: bh1750
    name: &quot;Hal_Illuminance&quot;
    address: 0x23
    measurement_time: 69
    update_interval: 10s
    
# Example configuration for an GPIO output    
output:
  - platform: gpio
    pin: 12
    inverted: true
    id: gpio_12
    
# Example configuration linking a switch to the previous defined output
switch:
  - platform: output
    name: &quot;Generic Output&quot;
    output: &#39;gpio_12&#39;
</code></pre></details><h2 id="gosund" tabindex="-1">Gosund <a class="header-anchor" href="#gosund" aria-label="Permalink to &quot;Gosund&quot;">​</a></h2><h3 id="sp1" tabindex="-1">SP1 <a class="header-anchor" href="#sp1" aria-label="Permalink to &quot;SP1&quot;">​</a></h3><details><summary> Beispiel anzeigen </summary><pre><code>esphome:
  name: sensor_badkamer
  platform: ESP32
  board: esp-wrover-kit

wifi:
  use_address: 192.168.10.122
  ssid: &quot;xxxxx&quot;
  password: &quot;xxxxxx&quot;
          
# Enable ESPHome API
api:
    password: &#39;MyPassword&#39;
# Activate i2c bus  
i2c:
  sda: 21
  scl: 22
  scan: True
  id: bus_a
  
# Example configuration for bh1750
sensor:
  - platform: bh1750
    name: &quot;Hal_Illuminance&quot;
    address: 0x23
    measurement_time: 69
    update_interval: 10s
    
# Example configuration for an GPIO output    
output:
  - platform: gpio
    pin: 12
    inverted: true
    id: gpio_12
    
# Example configuration linking a switch to the previous defined output
switch:
  - platform: output
    name: &quot;Generic Output&quot;
    output: &#39;gpio_12&#39;
</code></pre></details><h3 id="sp2" tabindex="-1">SP2 <a class="header-anchor" href="#sp2" aria-label="Permalink to &quot;SP2&quot;">​</a></h3><details><summary> Beispiel anzeigen </summary><pre><code>esphome:
  name: sensor_badkamer
  platform: ESP32
  board: esp-wrover-kit

wifi:
  use_address: 192.168.10.122
  ssid: &quot;xxxxx&quot;
  password: &quot;xxxxxx&quot;
          
# Enable ESPHome API
api:
    password: &#39;MyPassword&#39;
# Activate i2c bus  
i2c:
  sda: 21
  scl: 22
  scan: True
  id: bus_a
  
# Example configuration for bh1750
sensor:
  - platform: bh1750
    name: &quot;Hal_Illuminance&quot;
    address: 0x23
    measurement_time: 69
    update_interval: 10s
    
# Example configuration for an GPIO output    
output:
  - platform: gpio
    pin: 12
    inverted: true
    id: gpio_12
    
# Example configuration linking a switch to the previous defined output
switch:
  - platform: output
    name: &quot;Generic Output&quot;
    output: &#39;gpio_12&#39;
</code></pre></details><h3 id="sp111" tabindex="-1">SP111 <a class="header-anchor" href="#sp111" aria-label="Permalink to &quot;SP111&quot;">​</a></h3><details><summary> Beispiel anzeigen </summary><pre><code>esphome:
  name: sensor_badkamer
  platform: ESP32
  board: esp-wrover-kit

wifi:
  use_address: 192.168.10.122
  ssid: &quot;xxxxx&quot;
  password: &quot;xxxxxx&quot;
          
# Enable ESPHome API
api:
    password: &#39;MyPassword&#39;
# Activate i2c bus  
i2c:
  sda: 21
  scl: 22
  scan: True
  id: bus_a
  
# Example configuration for bh1750
sensor:
  - platform: bh1750
    name: &quot;Hal_Illuminance&quot;
    address: 0x23
    measurement_time: 69
    update_interval: 10s
    
# Example configuration for an GPIO output    
output:
  - platform: gpio
    pin: 12
    inverted: true
    id: gpio_12
    
# Example configuration linking a switch to the previous defined output
switch:
  - platform: output
    name: &quot;Generic Output&quot;
    output: &#39;gpio_12&#39;
</code></pre></details><h3 id="sp112" tabindex="-1">SP112 <a class="header-anchor" href="#sp112" aria-label="Permalink to &quot;SP112&quot;">​</a></h3><details><summary> Beispiel anzeigen </summary><pre><code>esphome:
  name: sensor_badkamer
  platform: ESP32
  board: esp-wrover-kit

wifi:
  use_address: 192.168.10.122
  ssid: &quot;xxxxx&quot;
  password: &quot;xxxxxx&quot;
          
# Enable ESPHome API
api:
    password: &#39;MyPassword&#39;
# Activate i2c bus  
i2c:
  sda: 21
  scl: 22
  scan: True
  id: bus_a
  
# Example configuration for bh1750
sensor:
  - platform: bh1750
    name: &quot;Hal_Illuminance&quot;
    address: 0x23
    measurement_time: 69
    update_interval: 10s
    
# Example configuration for an GPIO output    
output:
  - platform: gpio
    pin: 12
    inverted: true
    id: gpio_12
    
# Example configuration linking a switch to the previous defined output
switch:
  - platform: output
    name: &quot;Generic Output&quot;
    output: &#39;gpio_12&#39;
</code></pre></details><h2 id="teckin" tabindex="-1">Teckin <a class="header-anchor" href="#teckin" aria-label="Permalink to &quot;Teckin&quot;">​</a></h2><h3 id="sp10" tabindex="-1">SP10 <a class="header-anchor" href="#sp10" aria-label="Permalink to &quot;SP10&quot;">​</a></h3><details><summary> Beispiel anzeigen </summary><pre><code>esphome:
  name: sensor_badkamer
  platform: ESP32
  board: esp-wrover-kit

wifi:
  use_address: 192.168.10.122
  ssid: &quot;xxxxx&quot;
  password: &quot;xxxxxx&quot;
          
# Enable ESPHome API
api:
    password: &#39;MyPassword&#39;
# Activate i2c bus  
i2c:
  sda: 21
  scl: 22
  scan: True
  id: bus_a
  
# Example configuration for bh1750
sensor:
  - platform: bh1750
    name: &quot;Hal_Illuminance&quot;
    address: 0x23
    measurement_time: 69
    update_interval: 10s
    
# Example configuration for an GPIO output    
output:
  - platform: gpio
    pin: 12
    inverted: true
    id: gpio_12
    
# Example configuration linking a switch to the previous defined output
switch:
  - platform: output
    name: &quot;Generic Output&quot;
    output: &#39;gpio_12&#39;
</code></pre></details><h3 id="sp20" tabindex="-1">SP20 <a class="header-anchor" href="#sp20" aria-label="Permalink to &quot;SP20&quot;">​</a></h3><details><summary> Beispiel anzeigen </summary><pre><code>esphome:
  name: sensor_badkamer
  platform: ESP32
  board: esp-wrover-kit

wifi:
  use_address: 192.168.10.122
  ssid: &quot;xxxxx&quot;
  password: &quot;xxxxxx&quot;
          
# Enable ESPHome API
api:
    password: &#39;MyPassword&#39;
# Activate i2c bus  
i2c:
  sda: 21
  scl: 22
  scan: True
  id: bus_a
  
# Example configuration for bh1750
sensor:
  - platform: bh1750
    name: &quot;Hal_Illuminance&quot;
    address: 0x23
    measurement_time: 69
    update_interval: 10s
    
# Example configuration for an GPIO output    
output:
  - platform: gpio
    pin: 12
    inverted: true
    id: gpio_12
    
# Example configuration linking a switch to the previous defined output
switch:
  - platform: output
    name: &quot;Generic Output&quot;
    output: &#39;gpio_12&#39;
</code></pre></details><h2 id="sonoff" tabindex="-1">Sonoff <a class="header-anchor" href="#sonoff" aria-label="Permalink to &quot;Sonoff&quot;">​</a></h2><blockquote><p>ToDo&lt;</p></blockquote><h2 id="shelly" tabindex="-1">Shelly <a class="header-anchor" href="#shelly" aria-label="Permalink to &quot;Shelly&quot;">​</a></h2><blockquote><p>ToDo&lt;</p></blockquote><h2 id="vansware" tabindex="-1">Vansware <a class="header-anchor" href="#vansware" aria-label="Permalink to &quot;Vansware&quot;">​</a></h2><blockquote><p>ToDo&lt;</p></blockquote>`,31)])])}const h=e(s,[["render",i]]);export{c as __pageData,h as default};
