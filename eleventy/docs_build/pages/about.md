---
title: "About"
layout: "base"
order: 6
---

<h2 class="subtitle is-2 my-4">About Tooltip Extension</h2>

<div class="panel mt-4" data-pagefind-body>
  <p class="panel-heading">Known Issues</p>
  <div class="panel-block">
<ol class="ml-4">
  <li>You can't use html directly inside a tooltip, you can use any valid unicode character though.</li>
  <li>If your tooltip is trapped behind something there are two possible culprits.</li>
    <ol class="ml-4">
      <li>The default z-index for tooltips is too low for the content you are trying to display over. Our default z-index is 9999.</li>
      <li>More likely scenario is your tooltip is inside something with an overflow to cut it off. If possible assign its parent to <code>overflow: visible;</code> or use the position classes to move the tooltip to a better location</li>
    </ol>
  <li>Some scenarios if a tooltip is added around other pseudo elements it could cause display issues, there is no easy fix; you will just have to play with the CSS around them.</li>
  <li>As these tooltips are using pseudo elements, self-closing elements such as <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code> and <code>&lt;hr&gt;</code> cannot have content. For those elements, wrap them inside another <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> element and place the <code>data-tooltip="content"</code> there</li>
</ol>

  </div>
</div>

<div class="panel mt-4" data-pagefind-body>
  <p class="panel-heading">Upcoming Features</p>
  <div class="panel-block">
    <ol class="ml-4">
      <li>Allow dynamic coloring of tooltips by adding style like delay, <code>style="--tooltip-color: #fff;"</code></li>
      <li>Add support for mdi-font library if there is one? <code>class="has-tooltip-mdi" data=tooltip="[icon1unicode] is an icon! [icon2unicode"] is another icon!</li>
      <li>Add support for full html using an element style approach <code><div class="tooltip-content" data-tooltip><strong>HTML content</strong></div></code>
      <li>Add support for <code>class="has-tooltip-click"</code> to only show tooltip when it is clicked<li>
    </ol>
  </div>
</div>

<div class="panel mt-4" data-pagefind-body>
  <p class="panel-heading">Changelog</p>
  <div class="panel-block">
    <div class="columns is-multiline">
        <div class="column is-full"><div class="columns">
            <div class="column is-2"><strong>Jilael</strong></div>
            <div class="column is-2"><strong>2024-11-05</strong></div>
            <div class="column">Updated Docs</div>
        </div></div>    
        <div class="column is-full"><div class="columns">
            <div class="column is-2"><strong>Jilael</strong></div>
            <div class="column is-2"><strong>2024-11-04</strong></div>
            <div class="column">Finished tooltip creation</div>
        </div></div>    
        <div class="column is-full"><div class="columns">
            <div class="column is-2"><strong>Jilael</strong></div>
            <div class="column is-2"><strong>2024-10-18</strong></div>
            <div class="column">Added Search Functionality</div>
        </div></div>
        <div class="column is-full"><div class="columns">
            <div class="column is-2"><strong>Jilael</strong></div>
            <div class="column is-2"><strong>2024-10-17</strong></div>
            <div class="column">Improved responsiveness on mobile devices and GitHub Deployment</div>      
        </div></div>
        <div class="column is-full"><div class="columns">
            <div class="column is-2"><strong>Jilael</strong></div>
            <div class="column is-2"><strong>2024-10-16</strong></div>
            <div class="column">Setup Docs Site</div>
        </div></div>
    </div>
  </div>
</div>

<div class="panel mt-4" data-pagefind-body>
  <p class="panel-heading">About</p>
  <div class="panel-block">
    <div class="content">
      <p><strong>Tooltip Extension Repository</strong></p>
      <p>Created by <a href="https://github.com/versile2" target="_blank">Versile</a> modeling after the existing project <a href="https://github.com/CreativeBulma/bulma-tooltip" target="_blank" class="has-text-link">Bulma CSS Tooltip Extensions</a> and <a href="https://github.com/chinchang/hint.css" target="_blank" class="has-text-link">Hint.css</a>. This code and all work contained within is available as Open Source and the MIT license. This project is not affiliated with Bulma, Hint.css, MudBlazor or any of the contributors to the project. We are not responsible for any issues that may arise from using this tool.</p>
    </div>
  </div>
</div>