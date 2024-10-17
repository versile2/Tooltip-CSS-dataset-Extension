document.addEventListener('DOMContentLoaded', function() {
    // clipboard
    var clipInit = false;
    var codes = document.querySelectorAll('code') || [];
    codes.forEach(function(code) {
        var text = code.innerHTML;

        if (text.length > 5) {
            if (!clipInit) {
                var text, clip = new ClipboardJS('.copy-to-clipboard', {
                    text: function(trigger) {
                        text = trigger.previousSibling.innerHTML;
                        return text.replace(/^\$\s/gm, '');
                    }
                });

                var inPre;
                clip.on('success', function(e) {
                    e.clearSelection();
                    inPre = e.trigger.parentNode.tagName == 'PRE';
                    e.trigger.setAttribute('aria-label', 'Copied to clipboard!');
                    e.trigger.classList.add('tooltipped');
                    e.trigger.classList.add('tooltipped-' + (inPre ? 'w' : 's'));
                });

                clip.on('error', function(e) {
                    inPre = e.trigger.parentNode.tagName == 'PRE';
                    e.trigger.setAttribute('aria-label', fallbackMessage(e.action));
                    e.trigger.classList.add('tooltipped');
                    e.trigger.classList.add('tooltipped-' + (inPre ? 'w' : 's'));
                    document.addEventListener('copy', function(){
                        e.trigger.setAttribute('aria-label', 'Copied to clipboard!');
                        e.trigger.classList.add('tooltipped');
                        e.trigger.classList.add('tooltipped-' + (inPre ? 'w' : 's'));
                    });
                });

                clipInit = true;
            }

            var copyNode = document.createElement('div');
            copyNode.classList.add('copy-to-clipboard');
            copyNode.setAttribute('title', 'Copy to clipboard');

            code.after(copyNode);
            code.nextSibling.addEventListener('mouseleave', function() {
                this.setAttribute('aria-label', null);
                this.classList.remove('tooltipped');
                this.classList.remove('tooltipped-s');
                this.classList.remove('tooltipped-w');
            });
        }
    });

    const tabs = document.querySelectorAll('[data-toggle="tab"]') || [];
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const tabPane = document.querySelector(e.currentTarget.dataset.target);

            const activeTab = e.currentTarget.closest('.tabs ul').querySelector('li.is-active');
            const activeTabPane = document.querySelector(activeTab.dataset.target);
            if (activeTab && !activeTab.isSameNode(e.currentTarget)) {
                activeTab.classList.remove('is-active');
                if (activeTabPane) {
                    activeTabPane.classList.remove('is-active');
                    activeTabPane.classList.add("is-hidden");
                }

            }
            e.currentTarget.classList.remove("is-hidden");
            e.currentTarget.classList.add('is-active');
            if (tabPane) {
                tabPane.classList.remove('is-hidden');
                tabPane.classList.add('is-active');
            }
        });
    });
}, false);
  
  document.addEventListener("DOMContentLoaded", function () {
    // Handle search result clicks
    document.body.addEventListener("click", function (e) {
      if (e.target.classList.contains("pagefind-ui__result-link")) {
        e.preventDefault();
  
        // Find the closest <mark> element within the result
        const closestMark = e.target.closest(".pagefind-ui__result").querySelector("mark");
  
        if (closestMark) {
          const searchTerm = closestMark.textContent.trim();
          console.log(searchTerm);
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
        console.log("Found match:", element);
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
      console.log("No exact match found for:", searchTerm);
    }
  }
  