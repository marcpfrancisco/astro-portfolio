// schemas/projects.ts
export default {
  name: 'socials',
  type: 'document',
  title: 'Socials',
  fields: [
    {
      name: 'social_icon',
      type: 'string',
      title: 'Icon',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
}
