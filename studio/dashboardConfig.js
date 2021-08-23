export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6123c5e85723b81467c9c588',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wzh8xa4z',
                  apiId: '36531bae-df6f-4d99-bfd2-37f993807e6b'
                },
                {
                  buildHookId: '6123c5e8589d821bc89a7687',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dcvcyd9g',
                  apiId: '35c4e623-6973-41bd-9e2d-50ac8aeec3dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SpencerWhiteman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dcvcyd9g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
