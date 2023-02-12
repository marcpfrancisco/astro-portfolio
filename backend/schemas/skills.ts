// schemas/projects.ts
export default {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'skill_icon',
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
