# Reports Configuration

## Grouping Reports

If you would like to separate reports into different sidebar groups, 
you may override the group property of your report class:

By default, they will all show under Reports group.

```php
    /**
     * The logical group associated with the report.
     *
     * @var string
     */
    public static $group = 'Reports';
```

## Navigation Name 

To customize the "navigation name" of a report, you may define a `navigation` property on the report class:

```php
    /**
     * The single value name that would be used to display in navigation.
     *
     * @var string
     */
    public static $navigation = 'navigation';
```

## Report Heading

To customize the "heading" of a report, you may define a `heading` property on the report class. 
You can also set the heading to `null` if you don't want to show any heading.

```php
    /**
     * The single value that will be displayed as heading.
     *
     * @var string
     */
    public static $heading = 'heading';
```

## Report Subheading 

To customize the "sub-heading" of a report, you may define a `subHeading` property on the report class. 
You can also set the sub-heading to `null` if you don't want to show any sub-heading.

```php
    /**
     * The single value that will be displayed as sub-heading.
     *
     * @var string
     */
    public static $subHeading = 'sub-heading';
```

## Report Resources

Each report contains a `resources` method. 
This method returns an array of resources, which generally extend the `Laracube\Laracube\Base\Resource` class. 

Laracube ships with a variety of resources out of the box. Check the [Resources](/docs/resources) 
section for more information. 

To add a resource to a report, we can simply create a new instance of the resource class in the `resources` method 
and return them as an array. 

```php
    use App\Laracube\Resources\Customer\CustomerAverageNetRevenue;
    use App\Laracube\Resources\Customer\CustomerHighestSpender;
    use App\Laracube\Resources\Customer\CustomerPaying;
    use App\Laracube\Resources\Customer\CustomerPurchaseAndRefunds;
    use App\Laracube\Resources\Order\OrderNet;
    use App\Laracube\Resources\Revenue\NetRevenue;

    /**
     * Get the resources for the report.
     *
     * @return array
     */
     public function resources()
     {
        return [
            (new CustomerPaying()),
            (new NetRevenue()),
            (new OrderNet()),
            (new CustomerAverageNetRevenue()),
            (new CustomerHighestSpender()),
            (new CustomerPurchaseAndRefunds()),
        ];
     }
```

## Preventing Conflicts

If any two reports has same class name, Laracube will throw error as the `uriKey` generated for both classes would be the same.

For example, if you have these two files
- `app\Laracube\Reports\Agent\SalesReport`
- `app\Laracube\Reports\Agency\SalesReport`

Both the above classes with have the same `uriKey`, in order to avoid this you can override the `uriKey` of each class by

```php
    /**
     * Get the URI key for the report.
     *
     * @return string
     */
    public static function uriKey()
    {
        return 'agent-sales-reports';
    }
```

And

```php
    /**
     * Get the URI key for the report.
     *
     * @return string
     */
    public static function uriKey()
    {
        return 'agency-sales-reports';
    }
```
