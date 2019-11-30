#[PLASMA UI](https://plasma-ui.com/)

![Plasma UI Logo](https://firebasestorage.googleapis.com/v0/b/plasma-ui.appspot.com/o/small-logo.png?alt=media) &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]() [![Build Status](https://travis-ci.org/plasma-ui/plasma-ui.svg?branch=production)]()

### Plasma ui is a component library for building reliable, beautiful and fully accessible React apps.

```
yarn add @plasma-ui/core @emotion/core @emotion/styled emotion-theming
```

### How to use

Plasma UI has a peer dependency on emotion. Wrap your top level component with ThemeProvider from emotion-theming and pass down the theme from Plasma-ui so you can use our theme.

```
import { ThemeProvider } from 'emotion-theming'
import { theme } from '@plasma-ui/core'

export default () => (
    <ThemeProvider theme={theme}>
        <App>
            .
            .
            .
        </App>
    </ThemeProvider>
)
```

## Documentation

See the [official website](https://plasma-ui.com) for full documentation, recipes, and more.

#### Documentaion and website are in active development...
