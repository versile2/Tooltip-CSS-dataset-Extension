---
title: "Customize"
layout: "base"
order: 5
---


<h2 class="subtitle is-2 my-4">Customize Your Tooltip</h2>
<div data-pagefind-body>
<p>Tooltip Extension offers easy customization options to match your project's design needs. Follow these steps to personalize your tooltips:</p>

<h2 class="subtitle is-3 my-4">1. Get the Source Code</h2>

<div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
  <p>Download, Clone, or Fork the 
  <a href="{{ gitlink }}" target="_blank" rel="noopener noreferrer">
            <span>Github Repository</span>
  </a>
  to access the source files.</p>
</div>

<h2 class="subtitle is-3 my-4">2. Modify the Variables</h2>

Navigate to the `src` directory and open the `_variables.scss` file. This file contains all the customizable variables for your tooltips you can replace the mud styles with whatever framework you are using to utilize those defaults.

<div class="panel mt-4">
  <div class="panel-heading">
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
        <p>_variables.scss</p>
      </div>
      <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
        <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">src/_variables.scss</code>
      </div>
    </div>  
    </div>   
  <div class="panel-block">
    <div class="panel-content" style="max-height: 300px; overflow-y: auto;margin-top: -5px;">
<pre class="language-scss copy-to-clipboard"><code>// Defaults to MudBlazor, then a default value

// Animation
$tooltip-animation-duration: 0.35s !default;
$tooltip-animation-transition: var(--tooltip-transition,  var(--mud-tooltip-transition, slide)) !default;
$tooltip-hide-delay: var(--tooltip-hide-delay, var(--mud-tooltip-hide-delay, 200ms)) !default;
$tooltip-show-delay: var(--tooltip-show-delay, var(--mud-tooltip-show-delay, 300ms)) !default;

// Typography
$tooltip-font-family: var(--tooltip-font-family, var(--mud-typography-caption-family, "Helvetica Neue", Arial, sans-serif)) !default;
$tooltip-font-size: var(--tooltip-font-size, var(--mud-typography-caption-size, 0.875rem)) !default;
$tooltip-font-weight: var(--tooltip-font-weight, var(--mud-typography-caption-weight, 400)) !default;
$tooltip-font-lineheight: var(--tooltip-font-lineheight, var(--mud-typography-caption-lineheight, 1.4)) !default;

// Sizing
$tooltip-arrow-size: 6px !default;
$tooltip-vertical-padding: var(--mud-tooltip-vertical-padding, 8px) !default;
$tooltip-horizontal-padding: var(--mud-tooltip-horizontal-padding, 4px) !default;
$tooltip-padding: $tooltip-horizontal-padding $tooltip-vertical-padding !default; 
$tooltip-height: calc($tooltip-font-size + 2 * $tooltip-vertical-padding) !default;
$tooltip-offset-x: 2 * $tooltip-arrow-size !default; 
$tooltip-border-radius: var(--tooltip-border-radius, var(--mud-default-borderradius, 4px)) !default;
$tooltip-z-index: var(--tooltip-z-index, var(--mud-zindex-tooltip, 9999)) !default;
$tooltip-size-small: var(--tooltip-size-small, 80px) !default;
$tooltip-size-medium: var(--tooltip-size-medium, 150px) !default;
$tooltip-size-large: var(--tooltip-size-large, 300px) !default;
$tooltip-distance: 8px !default;

// Colors
$tooltip-background-color: var(--tooltip-background-color, var(--mud-palette-gray-darker, #616161)) !default;
$tooltip-color: var(--tooltip-foreground-color, var(--mud-palette-dark-text, rgb(255,255,255))) !default;

// Color system 
$tooltip-colors: (
  "primary": (
    background: var(--mud-palette-primary, rgb(89,74,226)),
    text: var(--mud-palette-primary-text, rgb(255,255,255))
  ),
  "secondary": (
    background: var(--mud-palette-secondary, rgb(255,64,129)),
    text: var(--mud-palette-secondary-text, rgb(255,255,255))
  ),
  "tertiary": (
    background: var(--mud-palette-tertiary, rgb(30,200,165)),
    text: var(--mud-palette-tertiary-text, rgb(255,255,255))
  ),
  "warning": (
    background: var(--mud-palette-warning, rgb(255,152,0)),
    text: var(--mud-palette-warning-text, rgb(255,255,255))
  ),
  "info": (
    background: var(--mud-palette-info, rgb(33,150,243)),
    text: var(--mud-palette-info-text, rgb(255,255,255))
  ),
  "success": (
    background: var(--mud-palette-success, rgb(0,200,83)),
    text: var(--mud-palette-success-text, rgb(255,255,255))
  ),
  "error": (
    background: var(--mud-palette-error, rgb(244,67,54)),
    text: var(--mud-palette-error-text, rgb(255,255,255))
  )
) !default;
</code></pre>
    </div>
  </div>
</div>

<p>Adjust these variables to customize various aspects of your tooltips, including colors, sizes, fonts, and animations. As you can see there are already defaults for users of MudBlazor and Bulma. You can stack these defaults just put them in order of priority.</p>

<h2 class="subtitle is-3 my-4">3. Compile SCSS</h2>

<p>After making your changes, compile the SCSS to generate the updated CSS file. Run the following command from bash in the root directory:</p>

<pre class="language-bash copy-to-clipboard">
  <code>node src/compile-scss.js</code>
</pre>

<p>This command will process your SCSS files and output the compiled CSS to the css folder inside the src folder.</p>

<h2 class="subtitle is-3 my-4">4. Use your Custom Tooltips</h2>

<p>Once the compilation is complete, your custom tooltip styles will be ready to use. Include the generated CSS file in your project to see the changes.</p>

<h2 class="subtitle is-3 my-4">🌟 Additional Tips</h2>
<div class="content">
<ul>
    <li>The <code>$tooltip-colors</code>&nbsp;map allows you to define custom color schemes for different tooltip variants.</li>
    <li>Use CSS variables (custom properties) to easily theme your tooltips or integrate them with existing design systems.</li>
    <li>Experiment with different values for animation duration and timing functions to achieve the desired tooltip behavior.</li>
</ul>

<p>Remember to test your customizations across different browsers and devices to ensure consistency.</p>

<p>For more advanced customizations or if you encounter any issues, please refer to the <a href="https://versile2.github.io/Tooltip-CSS-dataset-Extension/">Documentation</a> or <a href="{{ gitlink }}/issues" target="_blank">open an issue</a> on GitHub.</p>
</div>
</div>