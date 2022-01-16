# Table Resource

Table resource displays the result in a tabular format. It supports the following different types

- Paginated Table
- Simple Table

## Defining Resource

All new resource should extend the
[`Laracube\Laracube\Base\ResourceTable`](https://github.com/laracube/laracube/blob/master/src/Base/ResourceTable.php)
abstract class.

Every Table resource needs to have the `query` method that return an Eloquent/DB Builder instance.
It also needs a collection property `collection` that will transform the result between the builder and JSON response.

```php
<?php

namespace App\Laracube\Resources;

use App\Laracube\Collections\UserCollection;
use App\Models\User;
use Laracube\Laracube\Base\ResourceTable;

class UserTable extends ResourceTable
{
    /**
     * Resource Collection class.
     *
     * @var string
     */
    public static $collection = UserCollection::class;

    /**
     * Get the query for the resource.
     *
     * @return mixed
     * @throws \Throwable
     */
    public function query()
    {
        return Users::orderBy('created_at');
    }
}
```

## Paginated Table

By default, any new table resource is set as a paginated table.

To customize the per page options of a resource, you may define a `perPageOptions` property on the resource class.

```php
    /**
     * The per-page options for the resource.
     *
     * @var array
     */
    public static $perPageOptions = 10;
```

## Simple Table

To set the table as a simple table, that displays all records on one page, you may define a `type` property on the resource class.

```php
    /**
     * The type of the resource.
     *
     * @var string
     */
    public static $type = 'simple';
```

## Associated Collection

Table resource needs an accompanying resource collection, that allows you to transform the result between Eloquent model
and JSON responses.

### Defining Collection

You can organize and create collection to your liking. In this example we are going to be storing them in
`app/Laracube/Collections` directory of the application.

All new collections should extend the [`Laracube\Laracube\Base\ResourceTableCollection`](https://github.com/laracube/laracube/blob/master/src/Base/ResourceTableCollection.php) abstract class.

You will need to defined `toArray` and `columns` methods in your collection.

For example, If you create a new collection called `UserCollection`, it will look something like this

```php
<?php

namespace App\Laracube\Collections;

use Laracube\Laracube\Base\ResourceTableCollection;

class UserCollection extends ResourceTableCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Support\Collection
     */
    public function toArray($request)
    {
        return $this->collection->transform(function ($item) {
            return [
                'name' => $item->name,
                'email' => $item->email,
                'created_at' => (string) $item->created_at,
            ];
        });
    }

    /**
     * Get the columns definition for the resource.
     *
     * @return array
     */
    public static function columns()
    {
        return [
            [
                'value' => 'name',
                'text' => 'Name',
                'tooltip' => 'Name of the user',
                'sortable' => false,
            ],
            [
                'value' => 'email',
                'text' => 'Email',
                'tooltip' => 'Email of the user',
                'sortable' => false,
            ],
            [
                'value' => 'created_at',
                'text' => 'Registration Date',
                'tooltip' => null,
                'sortable' => false,
            ],
        ];
    }
}
```
