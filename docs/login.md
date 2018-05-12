# Login

## Usage

```twig
<a href="{{ craft.social.loginUrl('google') }}">Login with Google</a>
```

## Custom redirect

```twig
{% set redirect = 'account' %}

<a href="{{ craft.social.loginUrl('google', { redirect: redirect }) }}">Login with Google</a>
```

## Multiple providers

```twig
{% for provider in craft.social.getLoginProviders() %}
    <p>
        <a href="{{ craft.social.loginUrl(provider.handle) }}">
            Login with {{ provider.name }}
        </a>
    </p>
{% endfor %}
```
    