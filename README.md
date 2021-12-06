# HockeyArena Extension

> Browser extension that enhances the HockeyArena experience and adds useful features

# Install

Waiting for validation

# Highlights

- Ability to hide discussions
- Ability to hide sponsor menu
- Ability to show current player jerseys in one click
- and more to be added soon!

All features are configurable to your personal preferences.

# Development

Clone repository and install npm dependencies:

```sh
yarn install
```

Build the extension into a `dist` folder, listen for file changes and automatically rebuild:

```sh
yarn dev
```

Load into the browser:
<table>
  <tr>
    <th>Firefox</th>
  </tr>
  <tr>
    <td width="50%">
      <ol>
        <li>Open <code>about:debugging#addons</code>.</li>
        <li>Click on <i>Load Temporary Add-on</i>.</li>
        <li>Select the <code>dist/manifest.json</code> file.</li>
      </ol>
    </td>
  </tr>
</table>

Build the extension into a `dist` folder for publishing:

```sh
yarn build
```

# Maintainers

- [Kristián Patlevič](https://github.com/airen29) (Creator, [@airen29](https://kristian.patlevic.sk/))

# Credits

HockeyArena Extension was heavily inspired by [Tim Cheung](https://github.com/timche) (Creator of FACEIT Enhancer, [@timche_](https://twitter.com/timche_)) in terms of project structure, build, design, deployment, extension code and readme file. License is used as stated.

# Disclaimer

HockeyArena Extension is a third-party browser extension and not affiliated with ARENA ONLINE, s.r.o. (hockeyarena.net).