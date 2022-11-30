chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
  
      console.log(content);
  
      sendResponse({ status: 'success' });
    }
  });

const insert = (content) => {
  const element = document.getElementById('coverletter-textarea');

  element.value = "";

  // Grab the first p tag so we can replace it with our injection
  //const pToRemove = element.childNodes[0];
  //pToRemove.remove();
  // Split content by \n
  element.value = content;

  

  // On success return true
  return true;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
			
      // Call this insert function
      const result = insert(content);
			
      // If something went wrong, send a failes status
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
});
