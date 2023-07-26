
export default {
    name: 'concert',
    type: 'document',
    title: 'Concert',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Date'
        },
        {
            name: 'eventLink',
            type: 'url',
            title: 'Event Link'
        }
    ]
}