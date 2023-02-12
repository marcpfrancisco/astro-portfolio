// schemas/services.ts
export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'service_icon',
      type: 'string',
      title: 'Icon',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
}
