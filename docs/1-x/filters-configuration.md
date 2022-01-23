# Filters Configuration

## Filter Heading

To customize the "heading" of a filter, you may define a `heading` property on the filter class.

```php
    /**
     * The single value that will be displayed as heading.
     *
     * @var string
     */
    public static $heading = 'heading';
```

## Key

Key is the way to interact with the filter selects and is sent over to the `output` method or `query` method of a resource via `Illuminate\Http\Request` Object.

```php
    /**
     * The single value that will be used as request key.
     *
     * @var string
     */
    public $key = 'user_id';
```
