module.exports = {
    title: 'Social 2 Documentation',
    description: 'Social 2 Documentation',
    base: '/social/v2/',
    ga: 'UA-1547168-34',
    themeConfig: {
        nav: [
            { text: 'Analytics', link: 'https://docs.dukt.net/analytics/v4/' },
            { text: 'Social', link: '/' },
            { text: 'Videos', link: 'https://docs.dukt.net/videos/v2/' },
        ],
        sidebar: {
         '/': [
             {
                 title: 'Getting Started',
                 collapsable: false,
                 children: [
                     '',
                     'requirements',
                     'installation',
                     'configuration',
                 ]
             },
             {
                 title: 'Login Providers',
                 collapsable: false,
                 children: [
                     'login-providers',
                     'facebook',
                     'google',
                     'twitter',
                 ]
             },
             {
                 title: 'Usage',
                 collapsable: false,
                 children: [
                     'registration',
                     'login',
                     'logout',
                     'managing-login-accounts',
                     'notice-error-messages',
                     'demo-templates',
                 ]
             }
         ],
        }
    }
}
