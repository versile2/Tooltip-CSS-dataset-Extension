---
title: "Get Started"
layout: "base"
order: 2
---

<h2 class="subtitle is-2 my-4">Installation</h2>

<center><strong>You only need 1 CSS file to use Tooltip Extension</strong></center>
<div data-pagefind-body>
<div class="panel mt-4">
    <p class="panel-heading">The easiest way to get started with Tooltip Extension</p>
        <div class="panel-tabs">
            <div class="tabs is-toggle is-boxed">
<ul class="mt-2">
    <li class="is-active" data-toggle="tab" data-target="#github" aria-selected="true"><a>1. Github</a></li>
    <li data-toggle="tab" data-target="#npm" aria-selected="false"><a>2. NPM</a></li>
    <li data-toggle="tab" data-target="#cdn" aria-selected="false"><a>3. CDN</a></li>
</ul>
            </div>
        </div>
    <div class="panel-block tab-content mt-2">
        <div id="github" class="tab-pane is-active" role="tabpanel" style="height: 100px;">        
            <p>
            <a href="https://github.com/versile2/Tooltip-CSS-dataset-Extension/tree/main/src/css" target="_blank">Download</a> from the GitHub repository</p>            
<pre class="language-html copy-to-clipboard "><code>{{ gitlink }}src/css/tooltip-extension.min.css</code></pre>
        </div>
        <div id="npm" class="tab-pane is-hidden" role="tabpanel" style="height: 100px;">

            <p>Use npm to install the `tooltip-extension` package (**not available yet**)

<pre class="language-bash copy-to-clipboard"><code>npm install tooltip-extension</code></pre>
        </div>
        <div id="cdn" class="tab-pane is-hidden" role="tabpanel" style="height: 100px;">
            <p>Use a CDN to link to the Tooltip Extension stylesheet and script (**not available yet**)</p>
<pre class="language-html copy-to-clipboard"><code>&lt;link rel="stylesheet" href="https://cdn.example.com/tooltip-extension/tooltip.css"&gt;</code></pre>
        </div>
    </div>    
</div>


<h2 class="subtitle is-3 mt-2 mb-4">Usage</h2>
<p>
    Tooltips are displayed into a small box on bottom of the element by default, offset by 8px by default. 
    All you have to do is to add <code data-tooltip="Test Tooltip">data-tooltip='Test Tooltip'</code>&nbsp;and you have your very first tooltip!
</p>

<h2 class="subtitle is-3 my-4">Styles</h2>
<p>
    You can set a myriad of style options for the Tooltips themselves by using CSS classes on the html element you add a data-tooltip option to.
</p>
</div>