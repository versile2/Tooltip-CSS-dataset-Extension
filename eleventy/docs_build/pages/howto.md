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
      <div class="content">
        <button class="button mb-2" data-tooltip="Tooltip content">tooltip default</button>
        <p>Lorem ipsum dolor sit amet, <span data-tooltip="Tooltip content">consectetur adipisicing elit</span>. Ipsa fugit dolores earum quod distinctio ducimus non dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo veniam error, hic cumque.</p>
      </div>
    </div>
    <div class="panel-block tab-pane is-hidden panel-height" id="previewCodedefault" role="tabpanel" aria-labelledby="preview-code-default">
<pre class="language-html copy-to-clipboard"><code>&lt;button class="button" data-tooltip="Tooltip Text"&gt;tooltip default&lt;/button&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, &lt;span data-tooltip="Tooltip content"&gt;consectetur adipisicing elit&lt;/span&gt;. Ipsa fugit dolores earum quod distinctio ducimus non dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo veniam error, hic cumque.&lt;/p&gt;
</code></pre>
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
            <p>Lorem ipsum dolor sit amet, <span class="has-tooltip-arrow" data-tooltip="Tooltip content">consectetur adipisicing elit</span>. Ipsa fugit dolores earum quod distinctio ducimus non dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo veniam error, hic cumque.</p>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodearrow" role="tabpanel" aria-labelledby="preview-code-arrow">
<pre class="language-html copy-to-clipboard"><code>&lt;p&gt;Lorem ipsum dolor sit amet, &lt;span class=&quot;has-tooltip-arrow&quot; data-tooltip=&quot;Tooltip content&quot;&gt;
consectetur adipisicing elit&lt;/span&gt;. Ipsa fugit dolores earum quod distinctio ducimus non
dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo 
veniam error, hic cumque.&lt;/p&gt;
</code></pre>
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
            <p>Lorem ipsum dolor sit amet, <span class="has-tooltip-arrow has-tooltip-top" data-tooltip="Tooltip content on top">consectetur adipisicing elit</span>. Ipsa fugit <span class="has-tooltip-arrow has-tooltip-right" data-tooltip="Right tooltip content">dolores</span> earum quod distinctio ducimus non dignissimos <span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Bottom tooltip content">molestias</span> amet corrupti voluptatum assumenda impedit beatae <span class="has-tooltip-arrow has-tooltip-left" data-tooltip="Left tooltip content">veritatis</span> nemo veniam error, hic cumque.</p>
        </div>
        <div class="panel-block tab-pane is-hidden panel-height" id="previewCodeposition" role="tabpanel" aria-labelledby="preview-code-position">
<pre class="lang-html copy-to-clipboard"><code>&lt;p&gt;Lorem ipsum dolor sit amet, &lt;span class=&quot;has-tooltip-arrow has-tooltip-top&quot; 
data-tooltip=&quot;Tooltip content on top&quot;&gt; consectetur adipisicing elit&lt;/span&gt;. 
Ipsa fugit &lt;span class=&quot;has-tooltip-arrow has-tooltip-right&quot; data-tooltip=&quot;Right tooltip content&quot;&gt;
dolores&lt;/span&gt; earum quod distinctio ducimus non dignissimos &lt;span class=&quot;has-tooltip-arrow 
has-tooltip-bottom&quot; data-tooltip=&quot;Bottom tooltip content&quot;&gt;molestias&lt;/span&gt; amet 
corrupti voluptatum assumenda impedit beatae &lt;span class=&quot;has-tooltip-arrow has-tooltip-left&quot; 
data-tooltip=&quot;Left tooltip content&quot;&gt;veritatis&lt;/span&gt; nemo veniam error, hic cumque.&lt;/p&gt;
</code></pre>
        </div>
    </div>
</div>

<!-- Responsive Tab -->
<div class="panel mt-4" data-pagefind-body>
  <div class="panel-heading">
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
        <p>Responsiveness</p>
      </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-[direction]-[target]'</code>
    </div>
  </div>
</div>
  <div class="panel-block">
    <div class="panel-content">
      <p>Tooltip position can be based on responsiveness breakpoints by adding one of the following classes to the HTML element containing the tooltip:</p>
      <ul>
        <li class="has-tooltip-right-mobile" data-tooltip="has-tooltip-right-mobile"><code class="copy-to-clipboard">has-tooltip-[direction]-mobile</code></li>
        <li class="has-tooltip-top-tablet" data-tooltip="has-tooltip-top-tablet"><code class="copy-to-clipboard">has-tooltip-[direction]-tablet</code></li>
        <li class="has-tooltip-left-tablet-only" data-tooltip="has-tooltip-left-tablet-only"><code class="copy-to-clipboard">has-tooltip-[direction]-tablet-only</code></li>
        <li class="has-tooltip-right-touch" data-tooltip="has-tooltip-right-touch"><code class="copy-to-clipboard">has-tooltip-[direction]-touch</code></li>
        <li class="has-tooltip-top-desktop" data-tooltip="has-tooltip-top-desktop"><code class="copy-to-clipboard">has-tooltip-[direction]-desktop</code></li>
        <li class="has-tooltip-left-desktop-only" data-tooltip="has-tooltip-left-desktop-only"><code class="copy-to-clipboard">has-tooltip-[direction]-desktop-only</code></li>
        <li class="has-tooltip-right-until-widescreen" data-tooltip="has-tooltip-right-until-widescreen"><code class="copy-to-clipboard">has-tooltip-[direction]-until-widescreen</code></li>
        <li class="has-tooltip-top-widescreen" data-tooltip="has-tooltip-top-widescreen"><code class="copy-to-clipboard">has-tooltip-[direction]-widescreen</code></li>
        <li class="has-tooltip-left-widescreen-only" data-tooltip="has-tooltip-left-widescreen-only"><code class="copy-to-clipboard">has-tooltip-[direction]-widescreen-only</code></li>
        <li class="has-tooltip-right-until-fullhd" data-tooltip="has-tooltip-right-until-fullhd"><code class="copy-to-clipboard">has-tooltip-[direction]-until-fullhd</code></li>
        <li class="has-tooltip-top-fullhd" data-tooltip="has-tooltip-top-fullhd"><code class="copy-to-clipboard">has-tooltip-[direction]-fullhd</code></li>
      </ul>
<p>Don't forget to replace <code>[direction]</code>&nbsp;by one of the avaiblable directions: <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></p>
    </div>
  </div>
</div>

<!-- Hidden Tab -->
<div class="panel" data-pagefind-body>
  <div class="panel-heading">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-12-mobile is-flex is-justify-content-start custom-mobile-center">
      <p>Hide Tooltip</p>
    </div>
    <div class="column is-12-mobile is-flex is-justify-content-end custom-mobile-center">
      <code class="has-background-grey-lighter has-text-grey-dark px-2 py-1 is-size-7 copy-to-clipboard">class='has-tooltip-hidden-[where]'</code>
    </div>
  </div>  
  </div>  
   <div class="panel-block">
    <div class="columns is-multiline">
        <!-- Header Row (hidden on mobile) -->
        <div class="column is-full is-hidden-mobile">
            <div class="columns">
                <div class="column is-4"><strong>Class</strong></div>
                <div class="column"><strong>Mobile</strong></div>
                <div class="column"><strong>Tablet</strong></div>
                <div class="column"><strong>Desktop</strong></div>
                <div class="column"><strong>Widescreen</strong></div>
                <div class="column"><strong>FullHD</strong></div>
            </div>
        </div>
        <!-- Tooltip Rows -->
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-mobile" data-tooltip="has-tooltip-hidden-mobile">
                    <code class="copy-to-clipboard">has-tooltip-hidden-mobile</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-tablet-only" data-tooltip="has-tooltip-hidden-tablet-only">
                    <code class="copy-to-clipboard">has-tooltip-hidden-tablet-only</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-desktop-only" data-tooltip="has-tooltip-hidden-desktop-only">
                    <code class="copy-to-clipboard">has-tooltip-hidden-desktop-only</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-widescreen-only" data-tooltip="has-tooltip-hidden-widescreen-only">
                    <code class="copy-to-clipboard">has-tooltip-hidden-widescreen-only</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-touch" data-tooltip="has-tooltip-hidden-touch">
                    <code class="copy-to-clipboard">has-tooltip-hidden-touch</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-tablet" data-tooltip="has-tooltip-hidden-tablet">
                    <code class="copy-to-clipboard">has-tooltip-hidden-tablet</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-desktop" data-tooltip="has-tooltip-hidden-desktop">
                    <code class="copy-to-clipboard">has-tooltip-hidden-desktop</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-widescreen" data-tooltip="has-tooltip-hidden-widescreen">
                    <code class="copy-to-clipboard">has-tooltip-hidden-widescreen</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-full-mobile has-tooltip-hidden-fullhd" data-tooltip="has-tooltip-hidden-fullhd">
                    <code class="copy-to-clipboard">has-tooltip-hidden-fullhd</code>
                </div>
                <div class="column is-8-tablet is-full-mobile">
                    <div class="columns is-mobile">
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-success">visible</span></div>
                        <div class="column"><span class="tag is-danger">hidden</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>