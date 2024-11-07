
  // Hamburger menu functionality
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {      
      goInitHighlight();
  });

  window.goInitHighlight = function() {
    // Initialize Highlight.js
    hljs.highlightAll();
  }

  document.addEventListener('DOMContentLoaded', function() {
    var clipInit = false;
    var codes = document.querySelectorAll('pre.copy-to-clipboard, code.copy-to-clipboard') || [];
  
    codes.forEach(function(codeElement) {
      var parentElement = codeElement;
      // Create the copy icon element
      var copyIcon = document.createElement('span');
      copyIcon.classList.add('copy-icon'); 
      parentElement.appendChild(copyIcon);

      parentElement.setAttribute('data-tooltip', 'Click to copy');
      parentElement.classList.add(parentElement === codeElement ? 'tooltip-left' : 'tooltip-top');
      if (parentElement !== codeElement) {
        parentElement.classList.add('tooltip-arrow');
      } 
      parentElement.classList.add('tooltip-hidden');

      // Initialize clipboard functionality if not already initialized
      if (!clipInit) {
        var clip = new ClipboardJS('.copy-icon', {
          text: function(trigger) {
            var codeElement = trigger.parentNode;
            var codeText = codeElement.tagName === 'PRE' 
              ? codeElement.querySelector('code').innerText 
              : codeElement.innerText;
            return codeText.replace(/^\$\s/gm, '');
          }
        });
  
        clip.on('success', function(e) {
          e.clearSelection();
          var inPre = e.trigger.parentNode.tagName === 'PRE';          
          var codeElement = inPre ? e.trigger.parentNode.querySelector('code') : e.trigger.parentNode;
          var parentElement = codeElement.closest('.panel-block') || codeElement;
          // Set data-tooltip attribute and add custom tooltip classes
          parentElement.dataset.tooltip = 'Copied to clipboard!';
          parentElement.classList.remove('tooltip-hidden');
          parentElement.classList.add('tooltip-active');
          parentElement.classList.add('tooltip-success');
  
          // Remove tooltip after 2 seconds
          setTimeout(function() {
            parentElement.dataset.tooltip = 'Click to Copy';
            parentElement.classList.add('tooltip-hidden');
            parentElement.classList.remove('tooltip-active');
            parentElement.classList.remove('tooltip-success');
          }, 2000);
        });
  
        clip.on('error', function(e) {
          var inPre = e.trigger.parentNode.tagName === 'PRE';
          var codeElement = inPre ? e.trigger.parentNode.querySelector('code') : e.trigger.parentNode;
          var parentElement = codeElement.closest('.panel-block') || codeElement;
          // Set data-tooltip attribute and add custom tooltip classes
          parentElement.dataset.tooltip = fallbackMessage(e.action);
          parentElement.classList.remove('tooltip-hidden');
          parentElement.classList.add('tooltip-active');
          parentElement.classList.add('tooltip-error');
  
          // Remove tooltip after 2 seconds
          setTimeout(function() {
            parentElement.dataset.tooltip = 'Click to Copy';
            parentElement.classList.add('tooltip-hidden');
            parentElement.classList.remove('tooltip-active');
            parentElement.classList.remove('tooltip-error');
          }, 2000);
        });
  
        clipInit = true;
      }
    });
  });
  
  // Fallback message function (assuming it's defined elsewhere)
  function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');
  
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      actionMsg = 'No support :(';
    } else if (/Mac/i.test(navigator.userAgent)) {
      actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    } else {
      actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }
  
    return actionMsg;
  }

document.addEventListener('DOMContentLoaded', function() {
  // Handle tab switching
  const tabs = document.querySelectorAll('[data-toggle="tab"]') || [];
  
  tabs.forEach(function(tab) {
      tab.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          const tabPane = document.querySelector(e.currentTarget.dataset.target);
          const activeTab = e.currentTarget.closest('.tabs ul').querySelector('li.is-active');
          const activeTabPane = document.querySelector(activeTab.dataset.target);

          // Handle switching active tabs and hiding/showing corresponding content
          if (activeTab && !activeTab.isSameNode(e.currentTarget)) {
              activeTab.classList.remove('is-active');
              if (activeTabPane) {
                  activeTabPane.classList.remove('is-active');
                  activeTabPane.classList.add("is-hidden");
              }
          }

          e.currentTarget.classList.add('is-active');
          if (tabPane) {
              tabPane.classList.remove('is-hidden');
              tabPane.classList.add('is-active');
          }
      });
  });
});
  
  document.addEventListener("DOMContentLoaded", function () {
    // Handle search result clicks
    document.body.addEventListener("click", function (e) {
      if (e.target.classList.contains("pagefind-ui__result-link")) {
        e.preventDefault();
  
        // Find the closest <mark> element within the result
        const closestMark = e.target.closest(".pagefind-ui__result").querySelector("mark");
  
        if (closestMark) {
          const searchTerm = closestMark.textContent.trim();

          // Navigate to the target URL, appending the search term as a query parameter
          const targetURL = new URL(e.target.getAttribute("href"), window.location.origin);
          targetURL.searchParams.set("highlight", searchTerm);
          window.location.href = targetURL;
        }
      }
    });
  
    // Scroll to <mark> with matching text once the new page loads
    window.addEventListener("load", function () {
      const urlParams = new URLSearchParams(window.location.search);
      const searchTerm = urlParams.get("highlight");
  
      if (searchTerm) {
        scrollToMatchingMark(searchTerm);
      }
    });
  });
  function scrollToMatchingMark(searchTerm) {
    // remove last character if it's a symbol
    if (/[^\w\s]/.test(searchTerm.slice(-1))) {
        searchTerm = searchTerm.slice(0, -1);
      }
  
    const dataBodyElements = document.querySelectorAll("[data-pagefind-body]");
    let foundElement = null;
  
    // Helper function to search recursively
    function searchInElement(element) {
        
      // Check for a match within the element's textContent
      if (element.childNodes.length > 0 && Array.from(element.childNodes).some(node => 
        node.nodeType === Node.TEXT_NODE && node.textContent.trim().includes(searchTerm)
      )) {
        foundElement = element;
        return true;
      }
  
      // Recursively search each child if no exact match
      for (const child of element.children) {
        if (searchInElement(child)) return true;
      }
      return false;
    }
  
    // Loop through each data-pagefind-body and search its content
    for (const dataBody of dataBodyElements) {
      if (searchInElement(dataBody)) break;
    }
  
    // Scroll to and highlight the found element
    if (foundElement) {
      foundElement.scrollIntoView({ behavior: "smooth", block: "center" });
      foundElement.classList.add("highlight-flash");
      setTimeout(() => {
        foundElement.classList.remove("highlight-flash");
      }, 2000);
    } else {
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const hiddenCbox = document.getElementById('hiddenCbox');
    const tooltipToHide = document.getElementById('hiddenA');

    // Existing checkbox handler
    if (checkbox) {
    checkbox.addEventListener('change', function() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(function(element) {
            if (checkbox.checked) {
                element.classList.add('tooltip-arrow');
            } else {
                element.classList.remove('tooltip-arrow');
            }
        });
    });
  }

    // New hidden checkbox handler
    if (hiddenCbox) {
    hiddenCbox.addEventListener('change', function() {
        if (hiddenCbox.checked) {
            tooltipToHide.classList.add('tooltip-hidden');
        } else {
            tooltipToHide.classList.remove('tooltip-hidden');
        }
    });
  }
});