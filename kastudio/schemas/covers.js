export default{
    name:'covers',
    type:'document',
    title:'Covers',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
        {
            name:'url',
            title:'URL',
            type:'url'
        },
        {
            name:'description',
            title:'Description',
            type:'blockContent'
        }
    ]
}