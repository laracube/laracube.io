# Card Resource

Card resource displays the result in a multiple different formats. It supports the following different types

- Big Number
- Sparklines
- Custom HTML

## Defining Resource

All new resource should extend the
[`Laracube\Laracube\Base\ResourceCard`](https://github.com/laracube/laracube/blob/master/src/Base/ResourceCard.php)
abstract class.

Every Card resource needs to have the `output` method that return a nested array. 
You can return any number of array in any sequence.

```php
<?php

namespace App\Laracube\Resources;

use App\Models\User;
use Laracube\Laracube\Base\ResourceCard;
use Illuminate\Http\Request;

class UserCard extends ResourceCard
{
    /**
     * Get the query for the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return mixed
     * @throws \Throwable
     */
    public function output(Request $request)
    {
        return [
            [ 
                // big number 
            ],
            [ 
                // sparkline 
            ],
            [ 
                // custom html 
            ],
            [ 
                // big number 
            ],
            [ 
                // custom html 
            ],
            [ 
                // sparkline 
            ],
            [ 
                // sparkline 
            ],
            ......
        ];
    }
}
```

## Big Number

To define an array element as Big number you will need to set the `type` as `bigNumber`. 
Then you can the `data` with corresponding array keys/properties.

```php
[
    'type' => 'bigNumber',
    'data' => [
        'line1' => [
            'value' => 'Any string',
        ],
        'line2' => [
            'value' => 'Any string',
        ],
        'trend' => [
            'value' => 'Any string',
            'cssClass' => 'vuetify supported classes',
            'icon' => [
                'value' => 'fontawesome class',
                'cssClass' => 'vuetify supported classes',
            ],
        ],
    ],
],
```

[Click Here](https://github.com/laracube/demo/) to see the demo code.

## Sparklines

To define an array element as Big number you will need to set the `type` as `sparkline`. 
Then you can the `data` with corresponding array keys/properties.

```php
[
    'type' => 'bigNumber',
    'data' => [
        'autoDraw' => ''
        'autoDrawDuration' => ''
        'autoDrawEasing' => '',
        'autoLineWidth' => '',
        'color' => '',
        'fill' => '',
        'gradient' => [],
        'gradientDirection' => '',
        'height' => '',
        'labelSize' => '',
        'labels' => [],
        'lineWidth' => '',
        'padding' => '',
        'showLabels' => '',
        'smooth' => '',
        'type' => '',
        'value' => [],
        'width' => '',
        'title' => 'Any String',
    ],
],
```

Refer to the [v-sparkline API](https://vuetifyjs.com/en/api/v-sparkline/) for more information on these properties.

[Click Here](https://github.com/laracube/demo/) to see the demo code.

## Custom HTML

To define an array element as Big number you will need to set the `type` as `customHtml`. 
Then you can the `data` with corresponding array keys/properties.

```php
[
    'type' => 'customHtml',
    'data' => [
        'value' => 'Any Html Here',
    ],
],
```

[Click Here](https://github.com/laracube/demo/) to see the demo code.

