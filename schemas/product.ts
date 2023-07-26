export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'detail',
            type: 'string',
            title: 'Detail'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true
                    }
                }
            ]

        }

    ]
}