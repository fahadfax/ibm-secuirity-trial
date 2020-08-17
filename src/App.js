import React from 'react';
import './App.scss';
import { Shell, Button, IconButton } from '@carbon/ibm-security';
import Camera20 from '@carbon/icons-react/lib/camera/20';


function App() {
  return (
    <div >
    <Shell 
      header={{
        labels: {
          brand: {
            company: 'VIVID',
            domain: 'Lab'
          },    
          notifications: {
            button: 'Toggle notifications',
            clear: 'Clear',
            clear_all: 'Clear all notifications',
            link: 'View all',
            success: 'You\'re all caught up!',
            title: 'Notifications',
            today: 'Today',
            via: 'via'
          },
          profile: {
            account: 'Account',
            button: 'Toggle profile',
            edit_profile: 'Edit profile',
            link: 'Profile & account',
            registration: 'Create an account',
            sign_in: 'Sign in',
            sign_out: 'Sign out'
          }
        },
        links: {
          edit_profile: '#',
          notifications_preferences: '#',
          notifications_view_all: '#',
          product: '#',
          profile: '#',
          registration: '#',
          sign_in: '#',
          sign_out: '#'
        },
        totalNotifications: 307
      }}
      profile={{
        image_url: null,
        name: {
          first_name: 'Sample',
          surname: 'User'
        }
      }}
      renderAddons={[
        {
          id: 'example-addon',
          render: ({ className, iconClassName }) => (
            <IconButton
              className={className}
              iconClassName={iconClassName}
              label="Example Addon"
              // onClick={action('addon click')}
              // onFocus={action('addon hovered')}
              // onMouseOver={action('addon hovered')}
              renderIcon={Camera20}
              tooltipDirection={IconButton.TooltipDirection.RIGHT}
            />
          ),
          tooltip: 'Example Addon Action'
        }
      ]}
      returnToBanner={null}
      skipToContent={{
        href: '#main',
        label: 'Skip to content'
      }}
      toolbar={{
        labels: {
          menu: {
            button: 'Toggle menu',
            tooltip: 'Menu'
          },
          settings: {
            button: 'Toggle settings',
            tooltip: 'Settings'
          },
          support: {
            button: 'Toggle support',
            tooltip: 'Support'
          }
        },
        menu: [
          {
            id: '#16',
            navigation: [
              {
                children: [
                  {
                    children: undefined,
                    content: undefined,
                    href: 'ibm-security.carbondesignsystem.com#1',
                    icon: undefined,
                    id: '#6',
                    title: 'Applications'
                  },
                  {
                    children: undefined,
                    content: undefined,
                    href: 'ibm-security.carbondesignsystem.com#21',
                    icon: undefined,
                    id: '#26',
                    title: 'Plugins'
                  },
                  {
                    children: undefined,
                    content: undefined,
                    href: 'ibm-security.carbondesignsystem.com#11',
                    icon: undefined,
                    id: '#20',
                    title: 'Users'
                  }
                ],
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#25',
                icon: undefined,
                id: '#13',
                title: 'Section 1'
              },
              {
                children: undefined,
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#21',
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=',
                id: '#2',
                title: 'Section 2'
              },
              {
                children: undefined,
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#23',
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=',
                id: '#23',
                title: 'Section 3'
              }
            ],
            title: 'My applications'
          },
          {
            id: '#24',
            navigation: [
              {
                children: undefined,
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#22',
                icon: undefined,
                id: '#23',
                title: 'Section 4'
              },
              {
                children: undefined,
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#7',
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=',
                id: '#27',
                title: 'Section 5'
              },
              {
                children: undefined,
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#25',
                icon: undefined,
                id: '#5',
                title: 'Section 6'
              }
            ],
            title: ''
          }
        ],
        settings: [
          {
            id: '#6',
            navigation: [
              {
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#6',
                icon: undefined,
                id: '#25',
                title: 'Account'
              },
              {
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#3',
                icon: undefined,
                id: '#27',
                title: 'Permissions'
              },
              {
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#3',
                icon: undefined,
                id: '#12',
                title: 'Teams'
              }
            ],
            title: 'General settings'
          },
          {
            id: '#28',
            navigation: [
              {
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#6',
                icon: undefined,
                id: '#6',
                title: 'Application 1'
              }
            ],
            title: 'Application settings'
          },
          {
            id: '#8',
            navigation: [
              {
                content: undefined,
                href: 'https://www.ibm.com',
                icon: undefined,
                id: '#2',
                title: 'Privacy'
              },
              {
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#13',
                icon: undefined,
                id: '#24',
                title: 'Terms'
              }
            ],
            title: 'Legal'
          }
        ],
        support: [
          {
            id: '#4',
            navigation: [
              {
                content: undefined,
                href: 'ibm-security.carbondesignsystem.com#17',
                icon: undefined,
                id: '#13',
                title: 'Documentation'
              },
              {
                content: '\n<main>\n  <article>\n    <h1>Example info</h1>\n    <p>You can display information in the panel with HTML.</p>\n    <p>HTML tags you can use:</p>\n    <ul>\n      <li>\n        Ordered and unordered lists\n      </li>\n      <li>\n        Headings\n      </li>\n      <li>\n        Paragraphs\n      </li>\n      <li>\n        Anchors\n      </li>\n    </ul>\n  </article>\n</main>\n',
                href: 'ibm-security.carbondesignsystem.com#1',
                icon: undefined,
                id: '#13',
                title: 'Learn about...'
              }
            ],
            title: 'Support'
          }
        ]
      }}
    />
    <div id="main" style={{ paddingLeft: '5rem', paddingTop: '2rem' }}>
    <p>Example page content.</p>
    <Button href="#">Example button</Button>
  </div>
</div>
  );
}






export default App;
