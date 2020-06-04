## Ecoleta

#### Server: Node.js
###### Instalação e inicialização do projeto

###### Rodar projeto
```console
npm run dev
```

#### Web: React + Typescript
###### Instalação e inicialização do projeto

###### Instalar cliente http
```console
npm install axios
```

#### Mobile: React Native
###### Instalação e inicialização do projeto
```console
npm install -g expo-cli

expo init mobile
> choose blank (TypeScript)

cd mobile

npm start
```

###### Instalar fontes expo-google-fonts no terminal do VSC
```console
expo install @expo-google-fonts/ubuntu expo-font

expo install @expo-google-fonts/roboto expo-font
```

###### Instalar react-navigation no PowerShell com permissão de adm (no terminal do VSC deu problema)
```console
npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack
```

###### Instalar extensão para utilizar mapa no PowerShell com permissão de adm 
```console
expo install react-native-maps
```

###### Instalar pacote Constants
```console
expo install expo-constants
```

###### Instalar pacote para utilizar svg
```console
expo install react-native-svg
```

###### Instalar pacote do cliente http
```console
npm install axios
```

###### Instalar pacote para pegar a localização do usuário
```console
expo install expo-location
```

###### Instalar pacote de plugin para e-mail
```console
expo install expo-mail-composer
```

###### Instalar pacote para poder utilizar um elemento do tipo select
```console
npm install react-native-picker-select
```

#### Utils

- [Google Fonts](https://fonts.google.com/)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
  - Como resolver problema para instalar as fontes:
  
    Executar PowerShell como administrador
    ```console
    set-executionpolicy remotesigned
    ```
- [Leaflet](https://leafletjs.com/)
- [React Navigation](https://reactnavigation.org/)
- [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- [React Native Picker Composer](https://www.npmjs.com/package/react-native-picker-select)

#### Problemas para instalar pacotes tanto no terminal do VSC quanto no PowerShell

> Ok it looks like NPM is using your .gitignore as a base for the .npmignore file, and thus ignores /lib. If you add a blank .npmignore file into the root of your application, everything should work.



