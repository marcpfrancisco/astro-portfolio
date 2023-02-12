// schemas/projects.ts
export default {
  name: 'experiences',
  type: 'document',
  title: 'Experiences',
  fields: [
    {
      name: 'company_name',
      type: 'string',
      title: 'Company Name',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'year_from',
      type: 'date',
      title: 'From',
    },
    {
      name: 'year_to',
      type: 'date',
      title: 'To',
    },
  ],
}
