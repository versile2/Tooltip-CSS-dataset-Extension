---
title: "Customize"
layout: "base"
order: 4
---


<h2 class="subtitle is-2 my-4">Customize Your Tooltip</h2>

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

Navigate to the `src` directory and open the `_variables.scss` file. This file contains all the customizable variables for your tooltips.

<div class="panel mt-4">
  <div class="panel-heading is-flex is-justify-content-space-between is-align-items-center">
    <p class="is-flex-grow-1">_variables.scss</p>
    <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7">src/_variables.scss</code>
  </div>
  <div class="panel-block" style="max-height: 300px; overflow-y: auto;">
    <pre><code class="language-scss">
$tooltip-animation-duration: 0.3s !default;
$tooltip-animation-transition-timing-function: linear !default;
$tooltip-arrow-size: 6px !default;
$tooltip-background-color: var(--mud-palette-gray-darker, #616161) !default;
$tooltip-border-color: var(--mud-palette-gray-darker, #616161) !default;
$tooltip-color: var(--mud-palette-dark-text, #fff) !default;
$tooltip-font-family: var(--mud-typography-caption-family, Arial, Helvetica, sans-serif) !default;
$tooltip-font-size: var(--mud-typography-caption-size, 12px) !default;
$tooltip-font-weight: var(--mud-typography-caption-weight, 500) !default;
$tooltip-font-lineheight: var(--mud-typography-caption-lineheight, 1.4em) !default;
$tooltip-max-width: 15rem !default;
$tooltip-padding: 4px 8px !default;
$tooltip-borderradius: var(--mud-default-borderradius, 4) !default;
$tooltip-z-index: var(--mud-zindex-tooltip, 1400) !default;
$tooltip-colors: (
    "primary": (background-color: var(--mud-palette-primary, #1976d2), color: var(--mud-palette-primary-text, #fff)),
    "secondary": (background-color: var(--mud-palette-secondary, #9c27b0), color: var(--mud-palette-secondary-text, #fff)),
    "tertiary": (background-color: var(--mud-palette-tertiary, #1ec8a5ff), color: var(--mud-palette-tertiary-text, #fff)),
    "warning": (background-color: var(--mud-palette-warning, #ff9800), color: var(--mud-palette-warning-text, #000000)),
    "info": (background-color: var(--mud-palette-info, #2196f3), color: var(--mud-palette-info-text, #ffffff)),
    "success": (background-color: var(--mud-palette-success, #4caf50), color: var(--mud-palette-success-text, #ffffff)),
    "error": (background-color: var(--mud-palette-error, #f44336), color: var(--mud-palette-error-text, #ffffff))    
)
    </code></pre>
  </div>
</div>

<p>Adjust these variables to customize various aspects of your tooltips, including colors, sizes, fonts, and animations. As you can see there are already defaults for users of MudBlazor and Bulma. You can stack these defaults just put them in order of priority.</p>

<h2 class="subtitle is-3 my-4">3. Compile SCSS</h2>

<p>After making your changes, compile the SCSS to generate the updated CSS file. Run the following command from bash in the `src` directory:</p>

<div class="notification">
  <code>node src/compile-scss.js</code>
</div>

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

<p>For more advanced customizations or if you encounter any issues, please refer to the [documentation](./docs) or [open an issue]({{ gitlink }}/issues) on GitHub.</p>
</div>
<br/><br/>