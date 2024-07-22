export default {
  name: 'traininggroups',
  type: 'document',
  title: 'Trainingsgruppen',
  fields: [
    {
      name: 'trainer',
      type: 'string',
      title: 'Trainer',
    },
    {
      name: 'altersklasse',
      type: 'string',
      title: 'Altersklasse',
    },
    {
      name: 'sommertrainingszeit',
      type: 'string',
      title: 'Sommetrainingszeit',
    },
    {
      name: 'wintertrainingszeit',
      type: 'string',
      title: 'Wintertrainingszeot',
    },
    {
      name: 'trainingszeitenSommer',
      type: 'array',
      title: 'Trainingszeiten Sommer',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'tag',
              type: 'string',
              title: 'Tag',
            },
            {
              name: 'uhrzeit',
              type: 'string',
              title: 'Uhrzeit',
            },
          ],
        },
      ],
    },
    {
      name: 'trainingszeitenWinter',
      type: 'array',
      title: 'Trainingszeiten Winter',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'tag',
              type: 'string',
              title: 'Tag',
            },
            {
              name: 'uhrzeit',
              type: 'string',
              title: 'Uhrzeit',
            },
          ],
        },
      ],
    },
  ],
}
