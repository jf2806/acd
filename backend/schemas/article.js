export default {
  name: 'article',
  type: 'document',
  title: 'article',
  fields: [
    {
      name: 'uberschrift',
      type: 'string',
      title: 'Überschrift',
    },
    {
      name: 'inhalt',
      type: 'text',
      title: 'Inhalt',
    },
    {
      name: 'datum',
      type: 'date',
      title: 'Datum',
    },
    {
      name: 'bild',
      type: 'image',
      title: 'Bild',
    },
  ],
}
