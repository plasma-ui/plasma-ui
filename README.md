<p>&nbsp;</p>
<p align='center'>
  <img src="https://firebasestorage.googleapis.com/v0/b/plasma-ui.appspot.com/o/small-logo.png?alt=media" width="280" />
</p>
<p align='center'>Plasma is the fourth state of matter.</p>
<p>&nbsp;</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]() [![](https://img.shields.io/npm/dt/@plasma-ui/core?style=for-the-badge)]()

### Plasma ui is a component library for building reliable, beautiful and fully accessible React apps.

```
yarn add @plasma-ui/core @emotion/core @emotion/styled emotion-theming
```

### How to use

Plasma UI has a peer dependency on emotion. Wrap your top level component with ThemeProvider from emotion-theming and pass down the theme from Plasma-ui so you can use our theme.

```javascript
import { ThemeProvider } from "emotion-theming";
import { theme } from "@plasma-ui/core";

export default () => (
  <ThemeProvider theme={theme}>
    <App>. . .</App>
  </ThemeProvider>
);
```

## Documentation

See the [official website](https://plasma-ui.com) for full documentation, recipes, and more.

#### Documentaion and website are in active development...
