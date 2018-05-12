# Registration

With Social, registration becomes as simple as a click.

## Usage

```twig
<a href="{{ craft.social.loginUrl('google') }}">Login with Google</a>
```

## User mapping

When a user registers on your website with Social login, data can be imported from the user’s social profile, and be used to create the Craft user.

By default, the plugin automatically maps the `email` and `username` Craft user fields with the `{{ email }}` profile variable, this way new users already have their email address set, with their email as username.

The field mapping can be customized by creating a `craft/config/social.php` config file:

```php
<?php


return [
    'loginProviders' => [
        'google' => [
            
            ...
            
            'userMapping' => [
                'firstName' => '{{ firstName }}',
                'lastName' => '{{ lastName }}',
            ],
        ],
        'facebook' => [
            
            ...
            
            'userMapping' => [
                'firstName' => '{{ firstName }}',
                'lastName' => '{{ lastName }}',
                'location' => '{{ locationName }}',
                'gender' => '{{ gender }}',
                'profileUrl' => '{{ link }}',
            ],
        ],
        'twitter' => [
            
            ...
            
            'userMapping' => [
                'location' => '{{ location }}',
                'profileUrl' => '{{ nickname }}',
            ]
        ]
    ]
];
```

Login providers have a `userMapping` config which expects an array, with Craft user field handles as keys (make sure the fields exist), and a template string as value where all profile variables are available.

Each login provider comes with its own set of profile variables, [check login provider pages](../README.md#login-providers) to see the supported variables.