const $$ = Dom7

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'App-Login',
    // App id
    id: 'com.hurenware.app-login',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [{
        path: '/about/',
        url: 'about.html',
    }, ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');