module.exports = {
  title: 'MAD9145',
  description: 'Client Applied Projects',
  base: '/mad9145-w19/',
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    lastUpdated: 'Last Updated: ',
    nav: [{
        text: 'Overview',
        link: '/overview/'
      },
      {
        text: 'Assignments',
        link: '/assignments/'
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/'
      },
    ],
    sidebar: [{
        title: 'Introduction',
        collapsable: true,
        children: [
          ['/overview/', 'Overview'],
          '/overview/course-section-information',
          '/overview/contacts'
        ]
      },
      {
        title: 'Content Modules',
        collapsable: true,
        children: [
          '/modules/week1/',
          '/modules/week2/'
        ]
      },
      {
          title: 'Assignments',
          collapsable: true,
          children: [
              ['/assignments/#research', 'Research & Planning'],
              ['/assignments/#design', 'Design & Prototyping'],
              ['/assignments/#development', 'Development & Testing'],
              ['/assignments/#finalizing', 'Finalizing & Client Hand-Off']
          ]
      }
    ],
    sidebarDepth: 2
  },
  serviceWorker: {
    updatePopup: true // Boolean | Object, default to undefined.
    // If set to true, the default text config will be: 
    // updatePopup: { 
    //    message: "New content is available.", 
    //    buttonText: "Refresh" 
    // }
  }
}
