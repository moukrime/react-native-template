# React Native Template

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate for your next project.

## ⚙️ Base dependencies

- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
- [react-navigation](https://reactnavigation.org)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)

## Usage

```
npx react-native init AwesomeProject --template https://github.com/moukrime/react-native-template
```

## 📲 Update Splash screen

To customize the splash screen (logo and background color) use the CLI provided in the [bootsplash](https://github.com/zoontek/react-native-bootsplash)

```
npx react-native generate-bootsplash src/assets/images/logo/bootsplash_logo.png \
  --background-color=F5FCFF \
  --logo-width=100 \
  --assets-path=src/assets/images/logo
```

## 📂 Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app
  - `core`: Folder to store all your network logic.
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code
      - `index.js`

## License

[MIT](https://choosealicense.com/licenses/mit/)
