export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    component: 'CNavItem',
    name: 'Market Analysis',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavItem',
    name: 'Multi Login Account',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    component: 'CNavGroup',
    name: 'Account',
    to: '/base',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Account List For Active Users',
        to: '/base/accordion',
      },
      {
        component: 'CNavItem',
        name: 'Account List',
        to: '/base/breadcrumbs',
      },
      {
        component: 'CNavItem',
        name: 'Create Account',
        to: '/base/cards',
      },
    ],
  },

  //comment code
  {
    component: 'CNavItem',
    name: 'Bank',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    component: 'CNavGroup',
    name: 'Bonus',
    to: '/buttons',
    icon: 'cil-cursor',
    items: [
      {
        component: 'CNavItem',
        name: 'Bonus List',
        to: '/buttons/standard-buttons',
      },
      {
        component: 'CNavItem',
        name: 'Bonus History',
        to: '/buttons/button-groups',
      },
      {
        component: 'CNavItem',
        name: 'Create Bonus',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Setting',
    to: '/forms',
    icon: 'cil-notes',
    items: [
      {
        component: 'CNavItem',
        name: 'Global Setting',
        to: '/forms/select',
      },
      {
        component: 'CNavItem',
        name: 'Sport Setting',
        to: '/forms/checks-radios',
      },
      {
        component: 'CNavItem',
        name: 'Series Setting',
        to: '/forms/range',
      },
      {
        component: 'CNavItem',
        name: 'Match Setting',
        to: '/forms/input-group',
      },
      {
        component: 'CNavItem',
        name: 'Market Setting',
        to: '/forms/floating-labels',
      },
      {
        component: 'CNavItem',
        name: 'Fancy Setting',
        to: '/forms/form-control',
      },
      {
        component: 'CNavItem',
        name: 'Banner Setting',
        to: '/forms/banner-setting',
      },
      {
        component: 'CNavItem',
        name: 'Account Setting',
        to: '/forms/layout',
      },
      {
        component: 'CNavItem',
        name: 'Online User',
        to: '/forms/validation',
      },
      {
        component: 'CNavItem',
        name: 'Market Rollback',
        to: '/forms/market-rollback',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Reports',
    to: '/icons',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Account Statement',
        to: '/icons/coreui-icons',
      },
      {
        component: 'CNavItem',
        name: 'Party Win Loss',
        to: '/icons/brands',
      },
      {
        component: 'CNavItem',
        name: 'Current Bets',
        to: '/icons/flags',
      },
      {
        component: 'CNavItem',
        name: 'User History',
        to: '/icons/user-history',
      },
      {
        component: 'CNavItem',
        name: 'GGR Reports',
        to: '/icons/ggr-reports',
      },
      {
        component: 'CNavItem',
        name: 'Signup User',
        to: '/icons/signup-user',
      },
      {
        component: 'CNavItem',
        name: 'General Lock',
        to: '/icons/general-lock',
      },
      {
        component: 'CNavItem',
        name: 'Live Casino Result',
        to: '/icons/live-casino-result',
      },
      {
        component: 'CNavItem',
        name: 'Turn Over',
        to: '/icons/turn-over',
      },
      {
        component: 'CNavItem',
        name: 'Withdraw Statement',
        to: '/icons/withdraw-statement',
      },
      {
        component: 'CNavItem',
        name: 'Deposit Statement',
        to: '/icons/deposite-statement',
      },
      {
        component: 'CNavItem',
        name: 'User Authentication',
        to: '/icons/user-authentication',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Our Casino',
    to: '/casino/ourcasino',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Virtual Casino',
    to: '/virtual/virtualcasino',
    icon: 'cil-drop',
    badge: {
      color: 'primary',
      text: 'NEW',
      shape: 'pill',
    },
  },
  // {
  //   component: 'CNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'primary',
  //     text: 'NEW',
  //     shape: 'pill',
  //   },
  // },
  // {
  //   component: 'CNavTitle',
  //   name: 'Extras',
  // },
  {
    component: 'CNavGroup',
    name: 'Events',
    icon: 'cil-calendar',
    items: [
      {
        component: 'CNavGroup',
        name: 'Cricket',
        items: [
          {
            component: 'CNavGroup',
            name: 'Madhya Pradesh League',
            items: [
              {
                component: 'CNavItem',
                name: 'Chambal Ghariyals v Indore Pink Panthers',
                to: '/notifications/alerts',
              },
              {
                component: 'CNavItem',
                name: 'Bhopal Leopards v Bundelkhand Bulls',
                to: '/notifications/badges',
              },
            ],
          },
          {
            component: 'CNavGroup',
            name: 'Major League Cricket',
            items: [
              {
                component: 'CNavItem',
                name: 'Los Angeles Knight Riders v Texas Super Kings',
                to: '/events/cricket/major-league-cricket/mi-v-seattle',
              },
              {
                component: 'CNavItem',
                name: 'San Francisco Unicorns v Mi New York',
                to: '/events/cricket/major-league-cricket/mi-v-seattle',
              },
            ],
          },
          {
            component: 'CNavGroup',
            name: 'T20 Blast',
            items: [
              {
                component: 'CNavItem',
                name: 'Somerset v Kent',
                to: '/events/cricket/t20-blast/lancashire-v-yorkshire',
              },
            ],
          },
          {
            component: 'CNavGroup',
            name: 'Tamil Nadu Premier League',
            items: [
              {
                component: 'CNavItem',
                name: 'Ruby Trichy Warriors v Tiruppur Tamizhans',
                to: '/events/cricket/tnpl/kovai-v-chepauk',
              },
              {
                component: 'CNavItem',
                name: 'Nellai Royal Kings v Salem Spartans',
                to: '/events/cricket/tnpl/kovai-v-chepauk',
              },
              {
                component: 'CNavItem',
                name: 'Dindigul Dragons v Chepauk Super Gillies',
                to: '/events/cricket/tnpl/kovai-v-chepauk',
              },
            ],
          },
          {
            component: 'CNavGroup',
            name: "Women's T20 Blast",
            items: [
              {
                component: 'CNavItem',
                name: 'Somerset W v Durham W',
                to: '/events/cricket/women-t20-blast/vipers-v-storm',
              },
            ],
          },
          {
            component: 'CNavGroup',
            name: "International Twenty20 Matches",
            items: [
              {
                component: 'CNavItem',
                name: 'Scotland v Netherlands',
                to: '/events/cricket/women-t20-blast/vipers-v-storm',
              },
              {
                component: 'CNavItem',
                name: 'Ireland v West Indies',
                to: '/events/cricket/women-t20-blast/vipers-v-storm',
              },
            ],
          },
        ],
      },
    ],
  }
]
