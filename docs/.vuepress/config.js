module.exports = {
  title: 'MAD9145',
  description: 'Client Applied Projects',
  base: '/W2021/',
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
        text: 'Deliverables',
        link: '/assignments/'
      },
      {
        text: 'Modules',
        link: '/modules/research-planning/'
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
          '/modules/research-planning/',
          '/modules/design-prototyping/',
          '/modules/development-testing/',
          '/modules/finalizing-hand-off/'
        ]
      },
      {
          title: 'Deliverables',
          collapsable: true,
          children: [
              ['/assignments/#research-planning-30', 'Research & Planning'],
              ['/assignments/#design-prototyping-20', 'Design & Prototyping'],
              ['/assignments/#development-testing-20', 'Development & Testing'],
              ['/assignments/#finalizing-client-hand-off-30', 'Finalizing & Client Hand-Off']
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
