import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import '../../ui/layouts/app-body.js';

// import '../../ui/pages/root-redirector.js';
// import '../../ui/pages/lists-show-page.js';


import '../../ui/pages/home.js';
import '../../ui/pages/booking.js';
import '../../ui/pages/orders.js';
import '../../ui/pages/payments.js';
import '../../ui/pages/faqs.js';
import '../../ui/pages/settings.js';

import '../../ui/pages/app-not-found.js';

// Import to override accounts templates
import '../../ui/accounts/accounts-templates.js';

// FlowRouter.route('/lists/:_id', {
//   name: 'Lists.show',
//   action() {
//     BlazeLayout.render('App_body', { main: 'Lists_show_page' });
//   },
// });

// FlowRouter.route('/', {
//   name: 'App.home',
//   action() {
//     BlazeLayout.render('App_body', { main: 'app_rootRedirector' });
//   },
// });

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' });
  },
});

FlowRouter.route('/booking', {
  name: 'booking',
  action() {
    BlazeLayout.render('App_body', { main: 'booking' });
  },
});
FlowRouter.route('/orders', {
  name: 'orders',
  action() {
    BlazeLayout.render('App_body', { main: 'orders' });
  },
});
FlowRouter.route('/payments', {
  name: 'payments',
  action() {
    BlazeLayout.render('App_body', { main: 'payments' });

  },
});
FlowRouter.route('/faqs', {
  name: 'faqs',
  action() {
    BlazeLayout.render('App_body', { main: 'faqs' });
  },
});
FlowRouter.route('/settings', {
  name: 'settings',
  action() {
    BlazeLayout.render('App_body', { main: 'settings' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
});

