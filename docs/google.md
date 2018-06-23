# Google

Follow these steps to configure Google for social login:

## OAuth Configuration

1. Go to the [Google Console](https://code.google.com/apis/console/).
1. Create a new project.
1. Go to **Google Console → My Project → Credentials → Consent Screen** and make sure to fill the Product name field.
1. Go to **Google Console → My Project → Credentials** and create credentials for a new “OAuth client ID” with the following settings:
   - Application type: Web application
   - Authorized JavaScript origins: The web origin URL can be found in **Craft Control Panel → Settings → Social → Login Providers → Google**
   - Authorized redirect URIs: The redirect URL can be found in **Craft Control Panel → Settings → Social → Login Providers → Google**
1. Google will provide you a client ID and client secret for your application, copy them to **Craft Control Panel → Settings → Social → Login Providers → Google → OAuth**.
1. Go to **Craft Control Panel → Settings → Social → Login Providers** and enable Google.

🎉

## Default User Field Mapping

The Google login provider defines the following user field mapping by default.

```php
[
    'id' => '{{ profile.getId() }}',
    'email' => '{{ profile.getEmail() }}',
    'username' => '{{ profile.getEmail() }}',
    'photo' => '{{ profile.getAvatar() }}',
]
```

You can override and extend the default mapping using the [loginProviders](configuration.md#loginproviders) config.

## Profile Object
The profile response for the Google login provider is a [GoogleUser](https://github.com/thephpleague/oauth2-google/blob/master/src/Provider/GoogleUser.php) object.

### Methods
- `getId()`
- `getName()`
- `getFirstName()`
- `getLastName()`
- `getEmail()`
- `getAvatar()`
- `toArray()`