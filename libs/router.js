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
    name : 'devices'
});

/**********************************************************************/