---
title: "Tryout"
layout: "base"
order: 4
---
<html>
		<link rel="stylesheet" href="/css/tryout.css" />
	<h2 class="subtitle is-2 mt-4" style="margin-bottom: -40px;">Tryout</h2>
<div class="tryout-body">
		<div class="section section--inverted">			
			<div class="window">
				<div class="titlebar">
					<div class="buttons">
						<a
							class="titlebar__btn close has-tooltip-bottom"
							data-tooltip="Close"
						></a>
						<a
							class="titlebar__btn minimize has-tooltip-bottom"
							data-tooltip="Minimize"
						></a>
						<a
							class="titlebar__btn zoom has-tooltip-bottom"
							data-tooltip="Zoom"
						></a>
					</div>
					Try hovering over different things
				</div>
				<div class="content">
					<div style="margin-bottom: 8px; margin-top: -40px;">
						<label for="checkbox">With Arrow &nbsp;</label><input type="checkbox" id="checkbox" />
					</div>
					<div class="position-grid">
						<div class="position-grid__cell">
							<a href="#" data-tooltip="bottom-right" class="has-tooltip-bottom-right"
								>bottom-right</a
							>
						</div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="bottom" class="has-tooltip-bottom">bottom</a>
						</div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="bottom-left" class="has-tooltip-bottom-left"
								>bottom-left</a
							>
						</div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="right" class="has-tooltip-right">right</a>
						</div>
						<div class="position-grid__cell"><a data-tooltip="This is a really long default tooltip to evaluate what happens when you have a very long tooltip without any options set.">.</a></div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="left" class="has-tooltip-left">left</a>
						</div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="top-right" class="has-tooltip-top-right"
								>top-right</a
							>
						</div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="top" class="has-tooltip-top">top</a>
						</div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="top-left" class="has-tooltip-top-left"
								>top-left</a
							>
						</div>
					</div>
					<h3>Color Modifiers</h3>
					<h4>By Status Error, Warning, Info, Success</h4>
					<p>
						<a
							class="status-icon has-tooltip-error has-tooltip-left"
							style="background: rgb(244,67,54)"
							data-tooltip="This is an error tooltip"
						>
							<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path
									fill="#ffffff"
									d="M8.27,3L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3M8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41"
								/>
							</svg>
						</a>
						<a
							class="status-icon has-tooltip-warning has-tooltip-bottom-left"
							style="background: rgb(255,152,0)"
							data-tooltip="This is a warning tooltip"
						>
							<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path
									fill="#ffffff"
									d="M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z"
								/>
							</svg>
						</a>
						<a
							class="status-icon has-tooltip-info has-tooltip-bottom-right"
							style="background: rgb(33,150,243)"
							data-tooltip="This is an info tooltip"
						>
							<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path
									fill="#ffffff"
									d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"
								/>
							</svg>
						</a>
						<a
							class="status-icon has-tooltip-success has-tooltip-right"
							style="background: rgb(0,200,83)"
							data-tooltip="This is success tooltip"
						>
							<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path
									fill="#ffffff"
									d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
								/>
							</svg>
						</a>
					</p>
					<h4>By Primary, Secondary, or Tertiary Colors</h4>
					<p>
						<a
							class="status-icon has-tooltip-primary has-tooltip-left"
							style="background: rgb(89,74,226)"
							data-tooltip="This is a Primary tooltip"
						>
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 4C1.29 4 0 5.3 0 7.5v12.5C0 21.7 1.29 23 3 23h18c1.71 0 3-1.3 3-3.5V7.5C24 5.3 22.71 4 21 4H3z" fill="#ffffff"/>
							<path d="M5 7.2v11.6h14V7.2H5zm3 1.1c.5 0 .9 0 1.2.1.3.1.6.2.8.4.1.1.3.3.3.5 0 .2.1.4.1.7v2c0 .2 0 .4 0 .5 0 .1.1.3.2.5h-1.6c-.1-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.3-.2.2-.4.4-.7.5-.3.1-.6.2-1 .2-.5 0-.9-.1-1.2-.4-.3-.2-.4-.5-.4-.9 0-.3.1-.6.3-.8.2-.2.6-.4 1.1-.5.6-.1 1-.2 1.2-.3.2 0 .4-.1.6-.2 0-.2 0-.4-.1-.4-.1-.1-.2-.1-.5-.1-.3 0-.5 0-.6.1-.1.1-.2.2-.3.4l-1.6-.2c.1-.3.1-.5.3-.7.1-.2.3-.3.5-.4.2-.1.4-.2.6-.2.3 0 .6-.1.9-.1zm11.6 0c.7 0 1.3.1 1.6.4.4.3.6.6.8 1.1l-1.6.2c0-.2-.1-.3-.3-.4-.1-.1-.3-.1-.5-.1-.3 0-.5.1-.7.3-.2.2-.3.5-.3.9 0 .4.1.6.3.8.2.2.4.3.7.3.2 0 .4-.1.6-.2.1-.1.3-.3.3-.5l1.6.2c-.1.3-.2.6-.4.9-.2.2-.5.4-.8.6-.3.1-.7.2-1.2.2-.5 0-.9 0-1.2-.1-.3-.1-.6-.2-.8-.4-.2-.2-.4-.4-.5-.7-.1-.3-.2-.6-.2-1s.1-.8.2-1.1c.1-.2.3-.4.5-.6.2-.2.4-.3.6-.4.3-.1.8-.2 1.3-.2zm-10.8 2.4c-.2.1-.5.2-.7.2-.3.1-.6.2-.7.3-.1.1-.1.2-.1.3 0 .1 0 .2.1.3.1.1.2.1.4.1.2 0 .4 0 .5-.1.2-.1.3-.2.3-.3.1-.1.1-.3.1-.5v-.3zm3.2.9h1.7v2.1c.2-.2.4-.3.6-.4.2-.1.5-.1.7-.1.5 0 1 .2 1.3.6.4.4.5.9.5 1.7 0 .5-.1.9-.2 1.3-.2.4-.4.6-.7.8-.3.2-.6.3-.9.3-.3 0-.6-.1-.8-.2-.2-.1-.4-.3-.6-.6v.7h-1.6v-5.6zm2.5 2.9c-.2 0-.4.1-.6.3-.1.2-.2.4-.2.8 0 .4.1.7.2.8.1.2.3.3.5.3.2 0 .4-.1.5-.3.1-.2.2-.5.2-.9 0-.4-.1-.6-.2-.8-.1-.2-.3-.2-.5-.2z" fill="#ffffff"/>
						</svg>
						</a>
						<a
							class="status-icon has-tooltip-secondary"
							style="background: rgb(255,64,129)"
							data-tooltip="This is a Secondary tooltip"
						>
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 4C1.29 4 0 5.3 0 7.5v12.5C0 21.7 1.29 23 3 23h18c1.71 0 3-1.3 3-3.5V7.5C24 5.3 22.71 4 21 4H3z" fill="#ffffff"/>
							<path d="M5 7.2v11.6h14V7.2H5zm3 1.1c.5 0 .9 0 1.2.1.3.1.6.2.8.4.1.1.3.3.3.5 0 .2.1.4.1.7v2c0 .2 0 .4 0 .5 0 .1.1.3.2.5h-1.6c-.1-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.3-.2.2-.4.4-.7.5-.3.1-.6.2-1 .2-.5 0-.9-.1-1.2-.4-.3-.2-.4-.5-.4-.9 0-.3.1-.6.3-.8.2-.2.6-.4 1.1-.5.6-.1 1-.2 1.2-.3.2 0 .4-.1.6-.2 0-.2 0-.4-.1-.4-.1-.1-.2-.1-.5-.1-.3 0-.5 0-.6.1-.1.1-.2.2-.3.4l-1.6-.2c.1-.3.1-.5.3-.7.1-.2.3-.3.5-.4.2-.1.4-.2.6-.2.3 0 .6-.1.9-.1zm11.6 0c.7 0 1.3.1 1.6.4.4.3.6.6.8 1.1l-1.6.2c0-.2-.1-.3-.3-.4-.1-.1-.3-.1-.5-.1-.3 0-.5.1-.7.3-.2.2-.3.5-.3.9 0 .4.1.6.3.8.2.2.4.3.7.3.2 0 .4-.1.6-.2.1-.1.3-.3.3-.5l1.6.2c-.1.3-.2.6-.4.9-.2.2-.5.4-.8.6-.3.1-.7.2-1.2.2-.5 0-.9 0-1.2-.1-.3-.1-.6-.2-.8-.4-.2-.2-.4-.4-.5-.7-.1-.3-.2-.6-.2-1s.1-.8.2-1.1c.1-.2.3-.4.5-.6.2-.2.4-.3.6-.4.3-.1.8-.2 1.3-.2zm-10.8 2.4c-.2.1-.5.2-.7.2-.3.1-.6.2-.7.3-.1.1-.1.2-.1.3 0 .1 0 .2.1.3.1.1.2.1.4.1.2 0 .4 0 .5-.1.2-.1.3-.2.3-.3.1-.1.1-.3.1-.5v-.3zm3.2.9h1.7v2.1c.2-.2.4-.3.6-.4.2-.1.5-.1.7-.1.5 0 1 .2 1.3.6.4.4.5.9.5 1.7 0 .5-.1.9-.2 1.3-.2.4-.4.6-.7.8-.3.2-.6.3-.9.3-.3 0-.6-.1-.8-.2-.2-.1-.4-.3-.6-.6v.7h-1.6v-5.6zm2.5 2.9c-.2 0-.4.1-.6.3-.1.2-.2.4-.2.8 0 .4.1.7.2.8.1.2.3.3.5.3.2 0 .4-.1.5-.3.1-.2.2-.5.2-.9 0-.4-.1-.6-.2-.8-.1-.2-.3-.2-.5-.2z" fill="#ffffff"/>
						</svg>
						</a>
						<a
							class="status-icon has-tooltip-tertiary has-tooltip-right"
							style="background: rgb(30,200,165)"
							data-tooltip="This is a Tertiary tooltip"
						>
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 4C1.29 4 0 5.3 0 7.5v12.5C0 21.7 1.29 23 3 23h18c1.71 0 3-1.3 3-3.5V7.5C24 5.3 22.71 4 21 4H3z" fill="#ffffff"/>
							<path d="M5 7.2v11.6h14V7.2H5zm3 1.1c.5 0 .9 0 1.2.1.3.1.6.2.8.4.1.1.3.3.3.5 0 .2.1.4.1.7v2c0 .2 0 .4 0 .5 0 .1.1.3.2.5h-1.6c-.1-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.3-.2.2-.4.4-.7.5-.3.1-.6.2-1 .2-.5 0-.9-.1-1.2-.4-.3-.2-.4-.5-.4-.9 0-.3.1-.6.3-.8.2-.2.6-.4 1.1-.5.6-.1 1-.2 1.2-.3.2 0 .4-.1.6-.2 0-.2 0-.4-.1-.4-.1-.1-.2-.1-.5-.1-.3 0-.5 0-.6.1-.1.1-.2.2-.3.4l-1.6-.2c.1-.3.1-.5.3-.7.1-.2.3-.3.5-.4.2-.1.4-.2.6-.2.3 0 .6-.1.9-.1zm11.6 0c.7 0 1.3.1 1.6.4.4.3.6.6.8 1.1l-1.6.2c0-.2-.1-.3-.3-.4-.1-.1-.3-.1-.5-.1-.3 0-.5.1-.7.3-.2.2-.3.5-.3.9 0 .4.1.6.3.8.2.2.4.3.7.3.2 0 .4-.1.6-.2.1-.1.3-.3.3-.5l1.6.2c-.1.3-.2.6-.4.9-.2.2-.5.4-.8.6-.3.1-.7.2-1.2.2-.5 0-.9 0-1.2-.1-.3-.1-.6-.2-.8-.4-.2-.2-.4-.4-.5-.7-.1-.3-.2-.6-.2-1s.1-.8.2-1.1c.1-.2.3-.4.5-.6.2-.2.4-.3.6-.4.3-.1.8-.2 1.3-.2zm-10.8 2.4c-.2.1-.5.2-.7.2-.3.1-.6.2-.7.3-.1.1-.1.2-.1.3 0 .1 0 .2.1.3.1.1.2.1.4.1.2 0 .4 0 .5-.1.2-.1.3-.2.3-.3.1-.1.1-.3.1-.5v-.3zm3.2.9h1.7v2.1c.2-.2.4-.3.6-.4.2-.1.5-.1.7-.1.5 0 1 .2 1.3.6.4.4.5.9.5 1.7 0 .5-.1.9-.2 1.3-.2.4-.4.6-.7.8-.3.2-.6.3-.9.3-.3 0-.6-.1-.8-.2-.2-.1-.4-.3-.6-.6v.7h-1.6v-5.6zm2.5 2.9c-.2 0-.4.1-.6.3-.1.2-.2.4-.2.8 0 .4.1.7.2.8.1.2.3.3.5.3.2 0 .4-.1.5-.3.1-.2.2-.5.2-.9 0-.4-.1-.6-.2-.8-.1-.2-.3-.2-.5-.2z" fill="#ffffff"/>
						</svg>
						</a>
					</p>					
					<h3>Delay Modifiers</h3>
					<div class="position-grid">
						<div class="position-grid__cell">
						<a href="#" data-tooltip="top-left" style="--tooltip-delay: 1s" class="has-tooltip-top">top w/1s delay</a>
						</div>
						<div class="position-grid__cell">
						<a href="#" data-tooltip="top-left" style="--tooltip-delay: 500ms" class="has-tooltip-top">top w/500ms delay</a>
						</div>
						<div class="position-grid__cell">
						<a href="#" data-tooltip="top-left" style="--tooltip-delay: 0s" class="has-tooltip-top">top w/0s delay</a>
						</div>
						<div class="position-grid__cell" style="display: flex; align-items: center; justify-content: center;">
							<label for="hiddenCbox">Hide Tooltip</label><input type="checkbox" id="hiddenCbox" />
						  </div>										  
						<div class="position-grid__cell">
							<a id="hiddenA" href="#" data-tooltip="hidden when checked">has-tooltip-hidden</a>
						</div>
						<div class="position-grid__cell">
							<a href="#" data-tooltip="always on" class="has-tooltip-active">has-tooltip-active</a>
						</div>												
					</div>
					<h3>Size variations</h3>
					<p>
						<a
							class="has-tooltip-small has-tooltip-top"
							style="
								border: 1px solid #eee;
								padding: 3px 6px;
								border-radius: 4px;
								width: 80px;
							"
							data-tooltip="Small tooltips default to 80px in width and wrap content from there."
						>
							Small
						</a>
						<a
							class="has-tooltip-medium has-tooltip-top"
							style="
								border: 1px solid #eee;
								padding: 3px 6px;
								border-radius: 4px;
								width: 150px;
							"
							data-tooltip="Medium tooltips default to 150px in width and wrap content from there."
						>
							Medium
						</a>
						<a
							class="has-tooltip-large has-tooltip-top"
							style="
								border: 1px solid #eee;
								padding: 3px 6px;
								border-radius: 4px;
								width: 300px;
							"
							data-tooltip="Large tooltips default to 300px in width and wrap content from there."
						>
							Large
						</a>
						<a
							class="has-tooltip-fit has-tooltip-top"
							style="
								border: 1px solid #eee;
								padding: 3px 56px;
								border-radius: 4px;
							"
							data-tooltip="Fit tooltips default to the same width of the parent container and wrap content from there."
						>
							Fit
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</html>