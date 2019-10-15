export const EditorTheme = {
    plain: {
      color: '#4fC3f7'
    },
    styles: [
      {
        types: ['prolog', 'comment', 'doctype', 'cdata'],
        style: {
          color: '#999'
        }
      },
      {
        types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
        style: { color: '#f08d49' }
      },
      {
        types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
        style: {
          color: '#cc99cd'
        }
      },
      {
        types: [
          'operator',
          'entity',
          'url',
          'string',
          'variable',
          'language-css'
        ],
        style: {
          color: '#67cdcc'
        }
      },
      {
        types: ['deleted'],
        style: {
          color: 'rgb(255, 85, 85)'
        }
      },
      {
        types: ['italic'],
        style: {
          fontStyle: 'italic'
        }
      },
      {
        types: ['important', 'bold'],
        style: {
          fontWeight: 'bold'
        }
      },
      {
        types: ['regex', 'important'],
        style: {
          color: '#e90'
        }
      },
      {
        types: ['atrule', 'attr-value', 'keyword'],
        style: {
          color: '#f8c555'
        }
      },
      {
        types: ['punctuation', 'symbol'],
        style: {
          opacity: '1',
          color: '#ccc'
        }
      }
    ]
  };