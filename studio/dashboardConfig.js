export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '61b9baa24b88f794a3b719ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ri72gajk',
                  apiId: '2ff4f44e-f917-4934-9d47-fa17525a25e4'
                },
                {
                  buildHookId: '61b9baa222648baa00368565',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-y33rzi4b',
                  apiId: '35fbe174-cec3-4ec0-901b-bba3e6c91433'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cm392352/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-y33rzi4b.netlify.app', category: 'apps'}
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
