---
title: "How To"
layout: "base"
order: 3
---

<h2 class="subtitle is-2 my-4">How To Use Your Tooltip</h2>

<!-- Default Tab -->
<div class="panel mt-2" data-pagefind-body>
<div class="panel-heading">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
      <p>Default</p>
    </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">data-tooltip='Tooltip content'</code>
    </div>
  </div>
</div>
  <div class="panel-tabs is-toggle is-boxed">
    <div class="tabs is-toggle is-boxed">
      <ul class="mt-2">
        <li class="is-active" data-toggle="tab" data-target="#previewdefault" aria-selected="true"><a>Preview</a></li>
        <li data-toggle="tab" data-target="#previewCodedefault" aria-selected="false"><a>Code</a></li>
      </ul>
    </div>
  </div>
  <div class="tab-content">
    <div class="panel-block tab-pane is-active panel-height" id="previewdefault" role="tabpanel" aria-labelledby="preview-default">
      <div class="content mb-n4">
        <button class="button mb-2" data-tooltip="Tooltip content">tooltip default</button>
        <p>The default tooltip, requires nothing more than adding <code>data-tooltip="content"</code>, shifts to the bottom by 8px showing in box format up to 300px wide. The content can include special entities like unicode characters but not html content directly.</p>
      </div>
    </div>
    <div class="panel-block tab-pane is-hidden panel-height" id="previewCodedefault" role="tabpanel" aria-labelledby="preview-code-default">
<div class="full-height-scrollable">
<pre class="language-html copy-to-clipboard"><code>&lt;button class=&quot;button mb-2&quot; data-tooltip=&quot;Tooltip content&quot;&gt;tooltip default&lt;/button&gt;
</code></pre></div>
    </div>
  </div>
</div>

<!-- With Arrow Tab -->
<div class="panel mt-4" data-pagefind-body>
  <div class="panel-heading">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
      <p>With Arrow</p>
    </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-arrow'</code>
    </div>
  </div>
  </div>
    <div class="panel-tabs">
        <div class="tabs is-toggle is-boxed">
            <ul class="mt-2">
                <li class="is-active" data-toggle="tab" data-target="#previewarrow" aria-selected="true"><a>Preview</a></li>
                <li data-toggle="tab" data-target="#previewCodearrow" aria-selected="false"><a>Code</a></li>
            </ul>
        </div>
    </div>
    <div class="tab-content">
        <div class="panel-block tab-pane is-active panel-height" id="previewarrow" role="tabpanel" aria-labelledby="preview-arrow">
      <div class="content mb-n4">
        <button class="button mb-2 has-tooltip-arrow" data-tooltip="Tooltip content">tooltip default</button>
        <p>By default tooltips do not include arrows, you can add them by simply adding to the class selector. <code>class="has-tooltip-arrow"</code> An arrow will be added to the appropriate position based on tooltip direction.</p>
      </div>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodearrow" role="tabpanel" aria-labelledby="preview-code-arrow">
<div class="full-height-scrollable"><pre class="language-html copy-to-clipboard"><code>&lt;button class=&quot;button mb-2 has-tooltip-arrow&quot; data-tooltip=&quot;Tooltip content&quot;&gt;tooltip default&lt;/button&gt;
</code></pre></div>
        </div>
    </div>
</div>

<!-- Position Tab -->
<div class="panel mt-4" data-pagefind-body>
  <div class="panel-heading">
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
        <p>Position</p>
      </div>
      <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
        <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-[direction]'</code>
      </div>
    </div>  
  </div>
    <div class="panel-tabs">
        <div class="tabs is-toggle is-boxed">
            <ul class="mt-2">
                <li class="is-active" data-toggle="tab" data-target="#previewposition" aria-selected="true"><a>Preview</a></li>
                <li data-toggle="tab" data-target="#previewCodeposition" aria-selected="false"><a>Code</a></li>
            </ul>
        </div>
    </div>
    <div class="tab-content">
        <div class="panel-block tab-pane is-active panel-height" id="previewposition" role="tabpanel" aria-labelledby="preview-position">
      <div class="content mb-n4">
      <div class="fixed-grid has-gap-0 has-3-cols">
      <div class="grid">
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-bottom-right" data-tooltip="bottom-right">bottom-right</button>
  </div>
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-bottom" data-tooltip="bottom">bottom</button>
  </div>
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-bottom-left" data-tooltip="bottom-left">bottom-left</button>
  </div>
  
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-right" data-tooltip="right">right</button>
  </div>
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-center" data-tooltip="center">center</button>
  </div>
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-left" data-tooltip="left">left</button>
  </div>
  
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-top-right" data-tooltip="top-right">top-right</button>
  </div>
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-top" data-tooltip="top">top</button>
  </div>
  <div>
    <button class="button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-top-left" data-tooltip="top-left">top-left</button>
  </div>
</div></div>
        <p>Positioning your tooltips is a breeze, by adding a specific class you can style your tooltips to popout from any of 8 directions.</p>
      </div>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodeposition" role="tabpanel" aria-labelledby="preview-code-position">
<div class="full-height-scrollable"><pre class="lang-html copy-to-clipboard"><code>&lt;div class=&quot;fixed-grid has-gap-0 has-3-cols&quot;&gt;
&lt;div class=&quot;grid&quot;&gt;
  &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-bottom-right&quot; data-tooltip=&quot;bottom-right&quot;&gt;bottom-right&lt;/button&gt;  &lt;/div&gt;  &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-bottom&quot; data-tooltip=&quot;bottom&quot;&gt;bottom&lt;/button&gt; 
  &lt;/div&gt;   &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-bottom-left&quot; data-tooltip=&quot;bottom-left&quot;&gt;bottom-left&lt;/button&gt;   &lt;/div&gt;   &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-right&quot; data-tooltip=&quot;right&quot;&gt;right&lt;/button&gt;
  &lt;/div&gt;   &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-center&quot; data-tooltip=&quot;center&quot;&gt;center&lt;/button&gt;
  &lt;/div&gt;   &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-left&quot; data-tooltip=&quot;left&quot;&gt;left&lt;/button&gt;
  &lt;/div&gt;   &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-top-right&quot; data-tooltip=&quot;top-right&quot;&gt;top-right&lt;/button&gt;   &lt;/div&gt;   &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-top&quot; data-tooltip=&quot;top&quot;&gt;top&lt;/button&gt;
  &lt;/div&gt;   &lt;div&gt;
    &lt;button class=&quot;button is-small is-fullwidth mb-1 has-tooltip-arrow has-tooltip-top-left&quot; data-tooltip=&quot;top-left&quot;&gt;top-left&lt;/button&gt;
  &lt;/div&gt; &lt;/div&gt;&lt;/div&gt;
</code></pre></div>
        </div>
    </div>
</div>

<!-- Color Modifiers -->
<div class="panel mt-4" data-pagefind-body>
  <div class="panel-heading">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
      <p>Color Modifiers</p>
    </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-[colortype]'</code>
    </div>
  </div>
  </div>
    <div class="panel-tabs">
        <div class="tabs is-toggle is-boxed">
            <ul class="mt-2">
                <li class="is-active" data-toggle="tab" data-target="#previewcolor" aria-selected="true"><a>Preview</a></li>
                <li data-toggle="tab" data-target="#previewCodecolor" aria-selected="false"><a>Code</a></li>
            </ul>
        </div>
    </div>
    <div class="tab-content">
        <div class="panel-block tab-pane is-active panel-height" id="previewcolor" role="tabpanel" aria-labelledby="preview-color">
      <div class="content mb-n4">
        <a class="button mb-2 has-tooltip-arrow has-tooltip-info has-tooltip-left" data-tooltip="Info Colored">info</a>
        <a class="button mb-2 has-tooltip-arrow has-tooltip-success has-tooltip-bottom-left" data-tooltip="Success Colored">success</a>
        <a class="button mb-2 has-tooltip-arrow has-tooltip-warning has-tooltip-bottom-right" data-tooltip="Warning Colored">warning</a>
        <a class="button mb-2 has-tooltip-arrow has-tooltip-error has-tooltip-right" data-tooltip="Error Colored">error</a>
        <br/>
        <a class="button mb-2 has-tooltip-arrow has-tooltip-primary has-tooltip-left" data-tooltip="Primary Colored">primary</a>
        <a class="button mb-2 has-tooltip-arrow has-tooltip-secondary has-tooltip-bottom" data-tooltip="Secondary Colored">secondary</a>
        <a class="button mb-2 has-tooltip-arrow has-tooltip-tertiary has-tooltip-right" data-tooltip="Tertiary Colored">tertiary</a>        
        <p>You can color your tooltips by using the default color classes of stats and primary/secondary/tertiary.</p>
      </div>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodecolor" role="tabpanel" aria-labelledby="preview-code-color">
<div class="full-height-scrollable"><pre class="language-html copy-to-clipboard"><code>&lt;a class=&quot;button mb-2 has-tooltip-arrow has-tooltip-info has-tooltip-left&quot; data-tooltip=&quot;Info Colored&quot;&gt;info&lt;/a&gt;
&lt;a class=&quot;button mb-2 has-tooltip-arrow has-tooltip-success has-tooltip-bottom-left&quot; data-tooltip=&quot;Success Colored&quot;&gt;success&lt;/a&gt;
&lt;a class=&quot;button mb-2 has-tooltip-arrow has-tooltip-warning has-tooltip-bottom-right&quot; data-tooltip=&quot;Warning Colored&quot;&gt;warning&lt;/a&gt;
&lt;a class=&quot;button mb-2 has-tooltip-arrow has-tooltip-error has-tooltip-right&quot; data-tooltip=&quot;Error Colored&quot;&gt;error&lt;/a&gt;
&lt;br/&gt;
&lt;a class=&quot;button mb-2 has-tooltip-arrow has-tooltip-primary has-tooltip-left&quot; data-tooltip=&quot;Primary Colored&quot;&gt;primary&lt;/a&gt;
&lt;a class=&quot;button mb-2 has-tooltip-arrow has-tooltip-secondary has-tooltip-bottom&quot; data-tooltip=&quot;Secondary Colored&quot;&gt;secondary&lt;/a&gt;
&lt;a class=&quot;button mb-2 has-tooltip-arrow has-tooltip-tertiary has-tooltip-right&quot; data-tooltip=&quot;Tertiary Colored&quot;&gt;tertiary&lt;/a&gt;
</code></pre></div>
        </div>
    </div>
</div>

<!-- With Size Tab -->
<div class="panel mt-4" data-pagefind-body>
  <div class="panel-heading">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
      <p>Tooltip Sizing</p>
    </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-[size]'</code>
    </div>
  </div>
  </div>
    <div class="panel-tabs">
        <div class="tabs is-toggle is-boxed">
            <ul class="mt-2">
                <li class="is-active" data-toggle="tab" data-target="#previewsize" aria-selected="true"><a>Preview</a></li>
                <li data-toggle="tab" data-target="#previewCodesize" aria-selected="false"><a>Code</a></li>
            </ul>
        </div>
    </div>
    <div class="tab-content">
        <div class="panel-block tab-pane is-active panel-height" id="previewsize" role="tabpanel" aria-labelledby="preview-size">
      <div class="content mb-n4">
					<p>
						<a class="button has-tooltip-small has-tooltip-top" style="width: 80px;"
							data-tooltip="Small tooltips default to 80px in width and wrap content from there.">
							Small</a>
						<a class="button has-tooltip-medium has-tooltip-top" style="width: 150px;"
							data-tooltip="Medium tooltips default to 150px in width and wrap content from there.">
							Medium</a>
						<a class="button has-tooltip-large has-tooltip-top"	style="width: 300px;"
							data-tooltip="Large tooltips default to 300px in width and wrap content from there.">
							Large</a>
						<a class="button has-tooltip-fit has-tooltip-top" style="width: 200px;"
							data-tooltip="Fit tooltips default to the same width of the parent container and wrap content from there.">
							Fit
						</a>
					</p>
        <p>There are four size choices to choose from and by default all tooltips are set to large. Size small is up to 80px, Size medium is up to 150px, and Size Large is up to 300px. Size fit matches the size of the element they are attached to. The tooltip treats this as a maximum size, and by default will only take up as much size as is needed unless it needs to wrap to a second line. </p>
      </div>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodesize" role="tabpanel" aria-labelledby="preview-code-size">
<div class="full-height-scrollable"><pre class="language-html copy-to-clipboard"><code>&lt;a class=&quot;button has-tooltip-small has-tooltip-top&quot; style=&quot;width: 80px;&quot; data-tooltip=&quot;Small tooltips default to 80px in width and wrap content from there.&quot;&gt;Small&lt;/a&gt;
&lt;a class=&quot;button has-tooltip-medium has-tooltip-top&quot; style=&quot;width: 150px;&quot; data-tooltip=&quot;Medium tooltips default to 150px in width and wrap content from there.&quot;&gt;Medium&lt;/a&gt;
&lt;a class=&quot;button has-tooltip-large has-tooltip-top&quot; style=&quot;width: 300px;&quot; data-tooltip=&quot;Large tooltips default to 300px in width and wrap content from there.&quot;&gt;Large&lt;/a&gt;
&lt;a class=&quot;button has-tooltip-fit has-tooltip-top&quot; style="width: 200px;" data-tooltip=&quot;Fit tooltips default to the same width of the parent container and wrap content from there.&quot;&gt;Fit&lt;/a&gt;
</code></pre></div>
        </div>
    </div>
</div>

<!-- With Delay Modifiers -->
<div class="panel mt-4" data-pagefind-body>
  <div class="panel-heading">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
      <p>With Advanced Delay Modifiers</p>
    </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">style='--tooltip-delay: [value];'</code>
    </div>
  </div>
  </div>
    <div class="panel-tabs">
        <div class="tabs is-toggle is-boxed">
            <ul class="mt-2">
                <li class="is-active" data-toggle="tab" data-target="#previewdelay" aria-selected="true"><a>Preview</a></li>
                <li data-toggle="tab" data-target="#previewCodedelay" aria-selected="false"><a>Code</a></li>
            </ul>
        </div>
    </div>
    <div class="tab-content">
        <div class="panel-block tab-pane is-active panel-height" id="previewdelay" role="tabpanel" aria-labelledby="preview-delay">
      <div class="content mb-n4">
        <button class="button mb-2 has-tooltip-arrow has-tooltip-left" style="--tooltip-delay: 0ms;" data-tooltip="No delay">no delay</button>
        <button class="button mb-2 has-tooltip-arrow" data-tooltip="Default 200ms delay">default delay</button>
        <button class="button mb-2 has-tooltip-arrow has-tooltip-right" style="--tooltip-delay: 1s;" data-tooltip="1 second delay">1s delay</button>
        <p>By default tooltips have a delay of 200ms after you hover away before they dissappear. This value is completely customizable by adding a style property to your element. <code>style="--tooltip-delay: 100ms;"</code> would make that delay 100ms. Any valid delay value will work here.</p>
      </div>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodedelay" role="tabpanel" aria-labelledby="preview-code-delay">
<div class="full-height-scrollable"><pre class="language-html copy-to-clipboard"><code>&lt;button class=&quot;button mb-2 has-tooltip-arrow has-tooltip-left&quot; style=&quot;--tooltip-delay: 0ms;&quot; data-tooltip=&quot;No delay&quot;&gt;no delay&lt;/button&gt;
&lt;button class=&quot;button mb-2 has-tooltip-arrow&quot; data-tooltip=&quot;Default 200ms delay&quot;&gt;default delay&lt;/button&gt;
&lt;button class=&quot;button mb-2 has-tooltip-arrow has-tooltip-right&quot; style=&quot;--tooltip-delay: 1s;&quot; data-tooltip=&quot;1 second delay&quot;&gt;1s delay&lt;/button&gt;
</code></pre></div>
        </div>
    </div>
</div>

<!-- With Extra Modifiers -->
<div class="panel mt-4" data-pagefind-body>
  <div class="panel-heading">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
      <p>Extra Modifiers</p>
    </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-[modifier]'</code>
    </div>
  </div>
  </div>
    <div class="panel-tabs">
        <div class="tabs is-toggle is-boxed">
            <ul class="mt-2">
                <li class="is-active" data-toggle="tab" data-target="#previewmodifier" aria-selected="true"><a>Preview</a></li>
                <li data-toggle="tab" data-target="#previewCodemodifier" aria-selected="false"><a>Code</a></li>
            </ul>
        </div>
    </div>
    <div class="tab-content">
        <div class="panel-block tab-pane is-active panel-height" id="previewmodifier" role="tabpanel" aria-labelledby="preview-modifier">
      <div class="content mb-n4">
<div class="columns is-mobile">
  <div class="column is-4 is-flex is-align-items-center is-justify-content-center">
    <a class="button has-tooltip-fixed has-tooltip-text-left has-tooltip-large" data-tooltip="Left aligned tooltip, must be used with has-tooltip-fixed">has-tooltip-text-left</a>
  </div>
  <div class="column is-4 is-flex is-align-items-center is-justify-content-center">
    <a class="button has-tooltip-fixed has-tooltip-text-center has-tooltip-large" data-tooltip="Center aligned tooltip, must be used with has-tooltip-fixed, however center is default behavior.">has-tooltip-text-center</a>
  </div>
  <div class="column is-4 is-flex is-align-items-center is-justify-content-center">
    <a class="button has-tooltip-fixed has-tooltip-text-right has-tooltip-large" data-tooltip="Right aligned tooltip, must be used with has-tooltip-fixed">has-tooltip-text-right</a>
    </div>
  </div>      
<div class="columns is-mobile">
 <div class="column is-3 is-flex is-align-items-center is-justify-content-center">
   <label for="hiddenCbox">Hide Tooltip&nbsp;</label><input type="checkbox" id="hiddenCbox" />
 </div>
 <div class="column is-3">
   <a id="hiddenA" class="button" data-tooltip="hidden when checked">has-tooltip-hidden</a>
 </div>
 <div class="column is-3">
   <a class="button has-tooltip-active" data-tooltip="always on">has-tooltip-active</a>
 </div>
 <div class="column is-3">
   <a class="button has-tooltip-fixed" data-tooltip="Matches tooltip width and max-width; It is generally used within size styles but uses default size of large.">has-tooltip-fixed</a>
 </div> 
</div>
        <p>There are special cases where you might want to hide a tooltip via code, you can do so by adding and removing <code>class="has-tooltip-hidden"</code> You might also want a tooltip to always show, regardless of hover. For that scenario you would use <code>class="has-tooltip-active"</code> Finally, using a fixed-width tooltip might suit your fancy, but this style is generally used with size and text styles.</p>
      </div>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodemodifier" role="tabpanel" aria-labelledby="preview-code-modifier">
<div class="full-height-scrollable"><pre class="language-html copy-to-clipboard"><code>&lt;a class=&quot;button has-tooltip-fixed has-tooltip-text-left has-tooltip-large&quot; data-tooltip=&quot;Left aligned tooltip, must be used with has-tooltip-fixed&quot;&gt;has-tooltip-text-left&lt;/a&gt;
&lt;a class=&quot;button has-tooltip-fixed has-tooltip-text-center has-tooltip-large&quot; data-tooltip=&quot;Center aligned tooltip, must be used with has-tooltip-fixed, however center is default behavior.&quot;&gt;has-tooltip-text-center&lt;/a&gt;
&lt;a class=&quot;button has-tooltip-fixed has-tooltip-text-right has-tooltip-large&quot; data-tooltip=&quot;Right aligned tooltip, must be used with has-tooltip-fixed&quot;&gt;has-tooltip-text-right&lt;/a&gt;

&lt;label for=&quot;hiddenCbox&quot;&gt;Hide Tooltip&amp;nbsp;&lt;/label&gt;&lt;input type=&quot;checkbox&quot; id=&quot;hiddenCbox&quot; /&gt;
&lt;a id=&quot;hiddenA&quot; class=&quot;button&quot; data-tooltip=&quot;hidden when checked&quot;&gt;has-tooltip-hidden&lt;/a&gt;
&lt;a class=&quot;button has-tooltip-active&quot; data-tooltip=&quot;always on&quot; &gt;has-tooltip-active&lt;/a&gt;
</code></pre></div>
        </div>
    </div>
</div>

<!-- Hidden Tab -->
<div class="panel" data-pagefind-body>
  <div class="panel-heading">
    <div class="columns is-mobile is-centered">
      <div class="column is-flex is-justify-content-start custom-mobile-center">
        <p>Hide Tooltip</p>
      </div>
      <div class="column is-flex is-justify-content-end custom-mobile-center">
        <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-hidden-[where]'</code>
      </div>
    </div>  
  </div>  

  <div class="panel-block">
    <div class="panel-content">

<div class="container">
  <!-- Header Row (hidden on mobile) -->
  <div class="columns is-hidden-mobile">
    <div class="column is-4"><strong>Class</strong></div>
    <div class="column is-4">
      <div class="columns">
        <div class="column is-4"><strong>Mobile</strong></div>
        <div class="column is-4"><strong>Tablet</strong></div>
        <div class="column is-4"><strong>Desktop</strong></div>
      </div>
    </div>
    <div class="column is-4"><strong>Size</strong></div>
  </div>

  <!-- Tooltip Rows -->
  <div class="columns">
    <div class="column is-4 is-full-mobile">
      <code class="copy-to-clipboard has-tooltip-hidden-mobile has-tooltip-right" data-tooltip="has-tooltip-hidden-mobile">has-tooltip-hidden-mobile</code>
    </div>
    <div class="column is-4">
      <div class="columns">
        <div class="column is-4"><span class="tag is-danger">hidden</span></div>
        <div class="column is-4"><span class="tag is-success">visible</span></div>
        <div class="column is-4"><span class="tag is-success">visible</span></div>
      </div>
    </div>
    <div class="column is-4 is-hidden-mobile"><span>width up to 768px</span></div>
  </div>

  <!-- Additional Tooltip Rows -->
  <div class="columns">
    <div class="column is-4 is-full-mobile">
      <code class="copy-to-clipboard has-tooltip-hidden-tablet has-tooltip-right" data-tooltip="has-tooltip-hidden-tablet">has-tooltip-hidden-tablet</code>
    </div>
    <div class="column is-4">
      <div class="columns">
        <div class="column is-4"><span class="tag is-success">visible</span></div>
        <div class="column is-4"><span class="tag is-danger">hidden</span></div>
        <div class="column is-4"><span class="tag is-success">visible</span></div>
      </div>
    </div>    
    <div class="column is-4 is-hidden-mobile"><span>between 769px and 1023px width</span></div>
  </div>

  <!-- Desktop Tooltip Row -->
  <div class="columns">
    <div class="column is-4 is-full-mobile">
      <code class="copy-to-clipboard has-tooltip-hidden-desktop has-tooltip-right" data-tooltip="has-tooltip-hidden-desktop">has-tooltip-hidden-desktop</code>
    </div>
    <div class="column is-4">
      <div class="columns">
        <div class="column is-4"><span class="tag is-success">visible</span></div>
        <div class="column is-4"><span class="tag is-success">visible</span></div>
        <div class="column is-4"><span class="tag is-danger">hidden</span></div>
      </div>
    </div>       
    <div class="column is-4 is-hidden-mobile"><span>width greater than 1024px</span></div>
  </div>
</div>
<!-- Informational Content -->
<div style="margin: 8px;">
    <p>Hiding tooltips at certain screen sizes can be useful for responsive designs. For example, you might want to hide tooltips on mobile devices to avoid them taking up too much space on smaller screens, or tablet because they are clunky with touch, or even desktop.</p>
    </div>
    </div>
  </div>    
</div>
