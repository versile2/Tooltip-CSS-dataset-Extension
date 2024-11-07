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
    <li class="is-active" data-toggle="tab" data-target="#cdn" aria-selected="false"><a>1. CDN</a></li>
    <li data-toggle="tab" data-target="#npm" aria-selected="false"><a>2. NPM</a></li>
    <li data-toggle="tab" data-target="#github" aria-selected="true"><a>3. Github</a></li>    
</ul>
            </div>
        </div>
    <div class="panel-block tab-content mt-2 pb-2">    
        <div id="github" class="tab-pane is-hidden" role="tabpanel">        
            <p>
            <a href="https://github.com/versile2/Tooltip-CSS-dataset-Extension/tree/main/src/css" target="_blank">Download</a> from the GitHub repository</p>            
<pre class="language-html copy-to-clipboard "><code>{{ gitlink }}src/css/tooltip-extension.min.css</code></pre>
        </div>
        <div id="npm" class="tab-pane is-hidden" role="tabpanel">

            <p>Use npm to install the `@jilael/css-tooltips` package 

<pre class="language-bash copy-to-clipboard"><code>npm i @jilael/css-tooltips</code></pre>
Relevant CSS files will be located in <code>node_modules/@jilael/css-tooltips/css<code>
        </div>
        <div id="cdn" class="tab-pane is-active" role="tabpanel">
            <p>Use a CDN to link to the Tooltip Extension stylesheet and script</p>
<pre class="lang-html copy-to-clipboard"><code>&lt;link rel="stylesheet" href="https://unpkg.com/@jilael/css-tooltips@0.3.0/css/tooltip-extensions.min.css"&gt;</code></pre>
        </div>
    </div>    
</div>


<h2 class="subtitle is-3 mt-2 mb-4">Usage</h2>
<p>
    Tooltips are displayed into a small box on bottom of the element by default, offset by 8px by default. 
    All you have to do is to add <code data-tooltip="Test Tooltip">data-tooltip='Test Tooltip'</code>&nbsp;and you have your very first tooltip!
</p>

<h2 class="subtitle is-3 my-4"><a href="../howto/#classesid">Classes</a></h2>
<p>
    You can set a myriad of options for the Tooltips themselves by using CSS classes on the html element where you add a data-tooltip.
    <ol class="ml-4 mt-2">
      <li><b>Position</b>: <code>class='tooltip-[direction]'</code> will position the tooltip in one of 9 directions (top, bottom, left, right, top-left, top-right, bottom-left, bottom-right, center)</li>
      <li><b>Arrow</b>: By default the tooltip does not use an arrow, add <code>class='tooltip-arrow'</code> to add an arrow</li>
      <li><b>Color Modifiers</b>: <code>class='tooltip-[color]'</code> will change the color of the tooltip. (primary, secondary, tertiary, success, info, warning, danger) You can use more advanced coloring options in the Styles section.</li>
      <li><b>Sizing</b>: <code>class='tooltip-[size]'</code> will change the size of the tooltip. You can use more advanced sizing options in the Styles section. (small, medium, large, fit)</li>
      <li><b>Text position</b>: <code>class="tooltip-fixed tooltip-text-left"</code> will set the tooltip width to be fixed to the sizing option you choose. Combine that with tooltip-text-left/right/center to text-align your tooltip text.</li>
      <li><b>Other</b>: classes such as tooltip-hidden, tooltip-active, tooltip-hidden-mobile, tooltip-hidden-tablet, tooltip-hidden-desktop can be used for other options.</li>
    </ol>
</p>

<h2 class="subtitle is-3 my-4"><a href="../howto/#stylesid">Styles</a></h2>
<p>
    You can set a myriad of style options for the Tooltips themselves by using the style attribute on the html element you add a data-tooltip option to. You can create CSS classes using these styles or apply them individually. You can even apply these styles globally by setting :root {} in your CSS file.
    <ol class="ml-4 mt-2">
        <li><b>Show Delay</b>: <code>style="--tooltip-show-delay: 1000ms;"</code> will set the delay before the tooltip shows after you start hovering. You can use s for seconds or ms for milliseconds. <i>Default is 300ms</i></li>
        <li><b>Hide Delay</b>: <code>style="--tooltip-hide-delay: 1000ms;"</code> will set the delay before the tooltip hides after you stop hovering. <i>Default is 200ms</i></li>
        <li><b>Transition</b>: <code>style="--tooltip-transition: bounce;"</code> will set the animation transition the tooltip to show or hide. <i>Default is slide</i></li>
        <li><b>Tooltip Distance</b> <code data-tooltip="--tooltip-distance: 50px" style="--tooltip-distance: 50px;" class="tooltip-top tooltip-arrow">style="--tooltip-distance: 50px;"</code> will set the distance the tooltip is offset from the element. Does not do anything for "center". <i>Default is 8px</i></li>
        <li><b>Tooltip Font Options</b>: You can set a myriad of font options --tooltip-font-[(family),(size),(weight),(lineheight)]<i>Default is "Helvetica Neue", Arial, sans-serif, 0.875rem, 400, and 1.4 respectively.</i></li>
        <li><b>Tooltip Z-Index</b>: <code>style="--tooltip-z-index: 1000;"</code> will set the z-index of the tooltip. <i>Default is 1200</i></li>
        <li><b>Tooltip Advanced Sizing</b>: <code>style="--tooltip-width: 100px;"</code> will set the width of the tooltip statically. <i>Default if no tooltip size selected, tooltip-large or 300px.</i></li>
        <li><b>Tooltip Advanced Sizing</b>: <code>style="--tooltip-size-[small/medium/large]: 100px;"</code> will set the width of the specified size of tooltip statically. <i>Default if no tooltip size selected, tooltip-large or 300px.</i></li>
        <li><b>Advanced coloring</b>: <code>style="--tooltip-background-color: red;--tooltip-foreground-color: white;"</code> will set the background color of the tooltip to red and the text color to white. You can use any valid CSS color such as #fff or rgb()</li>
    </ol>
</p>
</div>