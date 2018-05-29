# Login

## Usage

```twig
<a href="{{ craft.social.getLoginUrl('google') }}">Login with Google</a>
```

## Custom redirect

```twig
{% set redirect = 'account' %}

<a href="{{ craft.social.getLoginUrl('google', { redirect: redirect }) }}">Login with Google</a>
```

## Multiple providers

```twig
{% for provider in craft.social.getLoginProviders() %}
    <p>
        <a href="{{ craft.social.getLoginUrl(provider.handle) }}">
            Login with {{ provider.name }}
        </a>
    </p>
{% endfor %}
```
