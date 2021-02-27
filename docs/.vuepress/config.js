module.exports = {
    title: 'Social Documentation',
    description: 'Social Documentation',
    base: '/docs/social/v2/',
    ga: 'UA-1547168-34',
    themeConfig: {
        docsRepo: 'dukt/social-docs',
        docsDir: 'docs',
        docsBranch: 'v2',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        nav: [
            { text: 'Analytics', link: 'https://dukt.net/docs/analytics/v4/' },
            { text: 'Facebook', link: 'https://dukt.net/docs/facebook/v2/'},
            { text: 'Social', link: '/' },
            { text: 'Twitter', link: 'https://dukt.net/docs/twitter/v2/'},
            { text: 'Videos', link: 'https://dukt.net/docs/videos/v2/' },
        ],
        sidebar: {
         '/': [
             {
                 title: 'Social plugin for Craft CMS',
                 collapsable: false,
                 children: [
                     '',
                     'requirements',
                     'installation',
                     'updating',
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
