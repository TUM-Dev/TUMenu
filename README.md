# TUMenu

This is a [Next.js](https://nextjs.org/) static website for daily dish menus at some student food places in Munich.

**Features include:**

- Daily menus in more than 25 student canteens and cafés around Munich
- Calendar to choose a date to see what the menu on this day would be
- Filter the dishes by the type of the dish (meat, grill, vegeterian, etc.)
- Filter the dishes by labels (gluten, celery, preservatives, etc.)
- See how many people are inside every canteen during canteen working hours.
- Generate random menu containing starter, main dish and dessert from the daily manu
- See the location and the openning hours of each canteen visualised
- The website is available in English and German

The project uses the [eat-api](https://github.com/TUM-Dev/eat-api) for the daily menus and the [HeadCount](https://github.com/TUM-Dev/Campus-Backend/) feature from the Campus-Backend to measure how many people are inside a canteen. **TUMenu** is there thanks to the contributors of these projects.

# Table of Contents

- [Getting Started](#getting-started)
- [Building and exporting](#building-and-exporting)
- [Translations with next-i18next](#translations-with-next-i18next)
- [Styling with MUI](#styling-with-MUI)
- [Support](#support)

## Getting Started

To get started with this project, you'll need to have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) installed on your machine.

Clone the repository and install the dependencies by running the following commands:

```bash
git clone https://github.com/TUM-Dev/TUMenu.git
cd tumenu
npm i
```

Once the dependencies are installed, you can start the development server by running:

```bash
npm run dev
```

This will start the development server and you can view the project by opening [http://localhost:8080](http://localhost:8080) in your browser.

### Linting and formatting typescript files

The following scripts are provided:

- `npm run lint`: Runs `eslint` and `prettier` on the code to find stylistic issues.

If you set everything up correctly, `prettier` and `eslint` should run everytime you save.

## Building and exporting

To build and export the project as a static website, run the following commands:

```bash
npm run build
# and then
npx serve ./out
```

This will build the project and start a static file server that serves the contents of the ./out directory.

## Translations with next-i18next

The website is currently available in german and english. This works because of the [next-i18next](https://github.com/i18next/next-i18next) library. The translations string are stored in the public folder which contains two locale folders and in there are the `common.json` files, where the translations strings are located.

```
.
└── public
    └── locales
        ├── en
        |   └── common.json
        └── de
            └── common.json
```

All text on the website is displayed using some translation string from these folders. If you want to add or edit some text you should
find the corresponding string in there and add the string in both folders.

Then you can use the string from the `common.json` file the following way.

```tsx
import { useTranslation } from 'next-i18next'
export const FilterDropdown = () => {
  const { t } = useTranslation('common')
  return <MenuItem>{t('deleteLabels')}</MenuItem>
}
```

In the `MenuItem` there will be shown the translation string of `deleteLabels` according to the current locale.
You can see the example usage in the project or if you have any other issues, please reffer to the [next-i18next documentation](https://github.com/i18next/next-i18next)

If you wonder why everything is looking weird with some `.js` files and weird locales in the `getStaticPaths` methods take a look at
[this blog post](https://locize.com/blog/next-i18n-static/) which describes how to use next-i18next with static websites.

# Styling with MUI

All the styling of this repository is implemented using MUI. If you have no idea how MUI styles work please reffer to the [MUI documentation](https://mui.com/material-ui/getting-started/overview/). All further improvement should also be implemented with MUI.

## Support

If you need help with the project or have any questions, please open an issue on the GitHub repository.
