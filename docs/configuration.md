# Configuration

In addition to the settings available in **CP → Settings → Social**, the config items below can be placed into a social.php file in your craft/config directory:

## allowEmailMatch

Allow email matching.

```php
'allowEmailMatch' => false,
```

## autoFillProfile

Automatically fills user fields when a user registers, based on userFieldMapping config variables.

```php
'autoFillProfile' => true,
```

## defaultGroup

User group users will be added to when registering with a social service.

```php
'defaultGroup' => 1,
```

## enableCpLogin

Enable Social Login buttons on the Control Panel's login screen.

```php
'enableCpLogin' => false,
```

## enabledLoginProviders

Enable Social Login buttons on the Control Panel's login screen.

```php
'enabledLoginProviders' => [],
```

## enableSocialLogin

When disabled, users are not be able to social login or register.

```php
'enableSocialLogin' => true,
```

## enableSocialRegistration

When disabled, users will not able to register with a social service, but will still be able to social login to an existing account.

```php
'enableSocialRegistration' => true,
```

## lockDomains
Lock social registration to specific domains. The list of locked domains must be provided as as array.

```php
'lockDomains' => [],
```

## loginProviders

Defines the login OAuth scope, profile fields, and [user field mapping](registration.md#user-field-mapping) for login providers.

```php
<?php

return array(
    'loginProviders' => [
        'facebook' => [
            'userFieldMapping' => [
                'gender' => '{{ profile.gender }}',
                'birthday' => '{{ profile.toArray().birthday }}',
            ],
            'oauth' => [
                'scope' => [
                    'user_birthday'
                ]
            ],
            'profileFields' => [
                'birthday',
            ],
        ]
    ]
);
```

## oauthProviders

Defines the OAuth client ID, secret, scope and authorization options.

```php
<?php

return array(
    'oauthProviders' => [
        'google' => [
            'options' => [
                'clientId' => 'OAUTH_CLIENT_ID',
                'clientSecret' => 'OAUTH_CLIENT_SECRET',    
            ],
            'scope' => ['CUSTOM_SCOPE'],
            'authorizationOptions' => ['CUSTOM_AUTHORIZATION_OPTION']
        ],
        'facebook' => [
            'options' => [
                'clientId' => 'OAUTH_CLIENT_ID',
                'clientSecret' => 'OAUTH_CLIENT_SECRET',
            ]
        ],
        'twitter' => [
            'options' => [
                'clientId' => 'OAUTH_CLIENT_ID',
                'clientSecret' => 'OAUTH_CLIENT_SECRET',
            ]
        ]
    ]
);
```


## showCpSection

Toggles the visibility of the Social Login menu item in the Control Panel sidebar.

```php
'enableCpLogin' => false,
```
