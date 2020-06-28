# react-github-gists

Simple and powerful react component to embed a single gist or all gists from a user in your react application.

> Based on react-embed-gist by [msaracevic](https://github.com/msaracevic/react-embed-gist)

[![NPM](https://img.shields.io/npm/v/react-github-gists.svg)](https://www.npmjs.com/package/react-github-gists) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-github-gists
```

## Usage

Import in your react component.

This component takes two props:

1.  user (required)
2.  gistID (optional)

To embed a particular gist, use both the props.
Else if you want to embed all the gists from a use, pass both props to the component.

For example:

```jsx
import ReactGithubGists from "react-github-gists";

// This will embed all the gist from user
<ReactGithubGists user="toughyear" />

// This will embed a particular gist
<ReactGithubGists user="toughyear" gistID="486446951c7e082aac19568ea679af35" />

```

## Attributes

- `user` - username of which you want to display the gist of.
- `gistID` -_optional_, gist you want to display
- `file` - _optional_, if you want to show just a single file from the gist, you can specify it here
- `wrapperClass` - _optional_, if you want to pass your own class to `article` wrapping the gist
- `titleClass` - _optional_, if you want to pass your own class to `h2` title of the gist
- `contentClass` - _optional_, if you want to pass your own class to `section` wrapping the content
- `errorClass` - _optional_, if you want to pass your own class to `article` wrapping the error message
- `loadingClass` - _optional_, if you want to pass your own class to `article` wrapper which is displayed during loading time

## License

MIT © [toughyear](https://github.com/toughyear)
