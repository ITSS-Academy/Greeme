interface ITaskGenerateData {
  id: number | string;
  status: string;
  text: string;
  tags?: string;
  priority?: string;
  progress?: number;
  checklist?: { text: string; completed: boolean }[];
  color?: string;
  comments?: { text: string; userId: number | string; time: Date }[];
  userId?: number | string;
  startDate?: Date;
  dueDate?: Date;
}

export function GetKanbanData(locale = 'en') {
  const text: any = {
      en: [
        'Research',
        'Displaying data from data source',
        'Showing cover and title',
        'Property validation',
        'formatFunction and formatSettings',
        'Expand/collapse arrow',
        'Virtual scrolling',
        'Deferred scrolling',
        'Infinite scrolling',
        'Visible/hidden columns',
        'Public methods',
        'Editing',
        'Header',
        'Dragging with feedback',
        'Vertical virtualization',
        'Observable columns array',
        'Reusing existing HTML elements',
        'Virtualize collapsed cards',
      ],
    },
    tags: any = {
      en: ['initial', 'data', 'visual', 'property', 'scrolling', 'method'],
    },
    data: ITaskGenerateData[] = [
      {
        id: 0,
        status: 'done',
        text: text[locale][0],
        tags: tags[locale][0],
        progress: 100,
        userId: 2,
      },
      {
        id: 1,
        status: 'done',
        text: text[locale][1],
        tags: tags[locale][1],
        priority: 'high',
        progress: 100,
        userId: 3,
      },
      {
        id: 2,
        status: 'done',
        text: text[locale][2],
        tags: tags[locale][2] + ', ' + tags[locale][3],
        priority: 'high',
        progress: 100,
        userId: 2,
      },
      {
        id: 3,
        status: 'done',
        text: text[locale][3],
        tags: tags[locale][3],
        checklist: [
          { text: 'addNewButton', completed: true },
          { text: 'allowDrag', completed: true },
          { text: 'cardHeight', completed: true },
          { text: 'cellOrientation', completed: true },
          { text: 'collapsible', completed: true },
          { text: 'columns', completed: true },
        ],
        userId: 1,
      },
      {
        id: 0,
        status: 'done',
        text: text[locale][0],
        tags: tags[locale][0],
        progress: 100,
        userId: 2,
      },
      {
        id: 1,
        status: 'done',
        text: text[locale][1],
        tags: tags[locale][1],
        priority: 'high',
        progress: 100,
        userId: 3,
      },
      {
        id: 2,
        status: 'done',
        text: text[locale][2],
        tags: tags[locale][2] + ', ' + tags[locale][3],
        priority: 'high',
        progress: 100,
        userId: 2,
      },
      {
        id: 3,
        status: 'done',
        text: text[locale][3],
        tags: tags[locale][3],
        checklist: [
          { text: 'addNewButton', completed: true },
          { text: 'allowDrag', completed: true },
          { text: 'cardHeight', completed: true },
          { text: 'cellOrientation', completed: true },
          { text: 'collapsible', completed: true },
          { text: 'columns', completed: true },
        ],
        userId: 1,
      },
    ];

  return data;
}
