'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    // get two notifications selectors (assigned tasks and deadlines)
    const notifications = document.querySelectorAll('.p-a.at-1.al-16.ui-bubble-count .ta-center.lh-0px cell span');
    let notificationsCount = 0;

    for (let i = 0; i < notifications.length; i += 1) {
      if (notifications) {
        notificationsCount += parseInt(notifications[i].innerText)
      }
    }

    const count = notificationsCount
    // set Franz badge
    Franz.setBadge(count);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};