A logout method is available for craft.social which logs out the user and redirects to given redirect url.

If no redirect is given it simply redirects to the referer.

## Example

    {% set redirect = '' %}

    <a href="{{ craft.social.logoutUrl(redirect) }}">Logout</a></li>
