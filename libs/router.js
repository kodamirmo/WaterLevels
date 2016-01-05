Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'
});


Router.route('/', function () {
    this.redirect('dashboard');
});

Router.route('/dashboard', {
    template : 'dashboard',
    name : 'dashboard'
});

/***************************     APP      *****************************/

Router.route('/devices', {
    template : 'devices',
    name : 'devices',
    waitOn: function () {
        return [
            Meteor.subscribe('devices'),
        ];
    }
});

Router.route('/history', {
    template : 'history',
    name : 'history',
    waitOn: function () {
        return [
            Meteor.subscribe('devices'),
        ];
    }
});


Router.route('/reports', {
    template : 'reports',
    name : 'reports'
});


Router.route('/report1', {
    template : 'report1',
    name : 'report1',
    waitOn: function () {
        return [
            Meteor.subscribe('devices'),
        ];
    }
});

/**********************************************************************/