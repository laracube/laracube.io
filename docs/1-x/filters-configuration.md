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

Laracube ships with a variety of resources out of the box. Check the [Resources](/docs/1-x/resources)
section for more information.

To add a resource to a report, we can simply create a new instance of the `Resource` class in the `resources` method
and return them as an array.

```php

    use App\Laracube\Resources\Revenue\NetAverageRevenueByCustomer;
    use App\Laracube\Resources\Revenue\NetAverageRevenueByOrder;
    use App\Laracube\Resources\Revenue\NetAverageRevenueByProduct;
    use App\Laracube\Resources\Revenue\NetOrder;
    use App\Laracube\Resources\Revenue\NetRevenue;
    use App\Laracube\Resources\Revenue\NetRevenueBellerSellerProduct;
    use App\Laracube\Resources\Revenue\NetRevenueByCustomer;
    use App\Laracube\Resources\Revenue\NetRevenueByProduct;
    use App\Laracube\Resources\Revenue\NetRevenueHighestSpender;

    /**
     * Get the resources for the report.
     *
     * @return array
     */
    public function resources()
    {
        return [
            (new NetRevenue()),
            (new NetOrder()),
            (new NetAverageRevenueByOrder()),
            (new NetAverageRevenueByCustomer()),
            (new NetAverageRevenueByProduct()),
            (new NetRevenueHighestSpender()),
            (new NetRevenueByCustomer()),
            (new NetRevenueBellerSellerProduct()),
            (new NetRevenueByProduct()),
        ];
    }
```

## Report Filters

Each report contains a `filters` method.
This method returns an array of filters, which generally extend the `Laracube\Laracube\Base\Filter` class.

Laracube ships with a variety of filters out of the box. Check the [Filters](/docs/1-x/filters)
section for more information.

To add a filter to a report, we can simply create a new instance of the `Filter` class in the `filters` method
and return them as an array.

```php
    use App\Laracube\Filters\CannotSeeCustomerFilter;
    use App\Laracube\Filters\CustomerFilter;
    use App\Laracube\Filters\ProductFilter;

    /**
     * Get all the filters of the report.
     *
     * @return array
     */
    public function filters()
    {
        return [
            (new CustomerFilter()),
            (new ProductFilter()),
            (new CannotSeeCustomerFilter()),
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
