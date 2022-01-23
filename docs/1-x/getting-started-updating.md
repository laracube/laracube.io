# Updating Laracube

Laracube can be updated using `composer` using the command below.

```shell
composer update laracube/laracube
```

## Updating Assets

Whenever you update Laracube, make sure to update the assets i.e. Javascript and CSS assets.
You can use the `laracube:publish` artisan command to update them to the latest version.

```shell
php artisan laracube:publish
```

The `laracube:publish` command will re-publish Laracube's public assets, configuration, and views.
It will not overwrite any existing configuration, or views.
If you would like the command to overwrite all existing files, you may use the --force flag when executing the command:

```shell
php artisan laracube:publish --force
```

## Keeping Assets Updated

It is a good idea to keep Laracube assets up to date whenever a new version is downloaded,
you may add a Composer hook inside your project's composer.json file to automatically publish laracube latest assets:

```json
"scripts": {
    "post-update-cmd": [
        "@php artisan laracube:publish"
    ]
}
```
