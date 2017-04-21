# Logout

To log a user out, use the [logoutUrl](https://craftcms.com/docs/templating/global-variables#logoutUrl) global variable provided by Craft:
 
    {% if currentUser %}
        <a href="{{ logoutUrl }}">Logout</a>
    {% endif %}

## Custom Redirect

By default, Craft will redirect the user to the homepage after logging out. To customize this behavior, use Craft’s `postLogoutRedirect` config setting:

    'postLogoutRedirect' => 'members'
