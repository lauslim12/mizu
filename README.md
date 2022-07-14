# Mizu

Mizu (水) is an application to help you track your water-drinking habits. Human body is made of 60% water, so keeping yourself hydrated is a must. In average, you should drink around 8 glasses of water every day, and maybe more if you are more active during the day.

This application focuses on improving my skills on several topics: progressive web applications, simple and responsive design, front-end unit tests, web performance, time to first draw, internationalization, user interface/experience, web accessibility, search engine optimization, semantic HTML, trying out a new React project structure.

A little trivia: Did you know that 水 (みず) means 'water' in Japanese?

Check out the application by [clicking me](https://mizu.vercel.app). You'll be redirected to the application.

## Motivation

I realized that most 'water-reminder' applications are either proprietary, locked behind a subscription, or require you to register before using it. This application allows you to track your water-drinking habits without having to perform those three activities. On other hand, aside from my personal use, I also want to create an application to hone my skills on topics written above.

## Features

- User should be able to press a button to tell the system that they have drunk a glass of water.
- User should be able to see their intakes of water for today, and it shall reset tomorrow.
- User can change the application theme, language, and font.

## Technologies

This is purely a front-end application which is powered by your browser only.

- React as the main driver.
- Styled Components as the design choice.
- Local Storage as the makeshift database.
- Vercel for deployment.
- GitHub Actions to ensure Continuous Integration and Delivery.

## Structure

Every React component in this repository (stored in both `pages` and `components`), with the exception of `Common` (which is used to store singletons of reusable components), has the following structure:

- Component is named according to its responsibility / corresponding entity.
- `Component.test.tsx` as the unit-test for the related component.
- `Component.tsx` to place the component's 'blocks'.
- `index.tsx` as the default export.
- `styles.tsx` as the styling with `styled-components`.

## Requirements

You need Node.js and Yarn. Please install Node.js and do `npm i --location=global yarn` to install the `yarn` package manager.

## Development

In order to develop, please follow the following steps:

```bash
git clone git@github.com:lauslim12/mizu.git
cd mizu
yarn install --frozen-lockfile
yarn start
```

You may look at tests by using `yarn test`. It will run the test suite accordingly. After that, you're done and free to hack around!

Just in case you want to see the production version without having either Node.js or Yarn nor seeing the live version, you may use Docker as well!

```bash
docker build . -t mizu:latest
docker run -d -p 3000:80 mizu:latest
```

## Credits

- The water drop icon is from [Freepik](https://www.flaticon.com/free-icons/water-drop).
- Drinking water image is from [Unsplash (Giorgio Trovato)](https://unsplash.com/photos/Q7YJG5jJU8A).

## License

MIT License. Please see the `LICENSE` file for more information.
