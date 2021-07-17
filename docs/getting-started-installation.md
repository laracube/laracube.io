# Installation

Laracube can be installed using [composer](https://getcomposer.org/).

```shell
composer require laracube/laracube
```

Once the package has been installed via composer run `laracube:install` artisan command.

```shell
php artisan laracube:install
```

After running this command, verify that the `App\Providers\LaracubeServiceProvider` 
was added to the providers array in your app configuration file. 
If it wasn't, you should add it manually. 
If your application uses a different namespace you will need to update it accordingly.

## Directory Structure

Once you have installed the package, you would see the package be structured like this:

```text
.
│── app/Laracube
│   ├── Collections/
│   ├── Reports/
│   └── Resources/
│── app/Providers/
│   └── LaracubeServiceProvider.php
│── resources/views/vendor/laracube/partials/
│   ├── footer.blade.php
│   ├── logo.blade.php
│   ├── navigation.blade.php
│   └── user.blade.php
└── public/vendor/laracube/
    ├── img/
    ├── app.css
    ├── app.js
    ├── app.js.LICENSE.txt
    └── mix-manifest.json
```

🙌 Wohoo! Basic installation of Laracube is now complete, 
head over to the [Authorizing Laracube](/docs/getting-started-authorizing) to set the authorization and see how to access the platform.
