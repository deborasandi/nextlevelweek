## Ecoleta

#### Server: Node.js
###### Instalação e inicialização do projeto

> Instalar Chocolatey

```console
choco install nodejs-lts

npm install ts-node -D

npm install typescript -D
```

###### Inicialização do projeto (pasta server)

```console
npm init -y
```

###### Dentro do terminal do VSC

```console
npm install express
```

###### Pacote para upload de fotos
```console
npm install multer
```

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

###### Instalar pacote para criar dropzone
```console
npm install react-dropzone
```

###### Rodar projeto
```console
npm start
```

#### Mobile: React Native
###### Instalação e inicialização do projeto
```console
npm install -g expo-cli

expo init mobile
> choose blank (TypeScript)
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

###### Rodar projeto
```console
npm start
```

#### Utils

- [Chocolatey](https://chocolatey.org/install)
- [Node.JS](https://nodejs.org/en/download/package-manager/)
- [Google Fonts](https://fonts.google.com/)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
  - Como resolver problema para instalar as fontes:
  
    Executar PowerShell como administrador
    ```console
    set-executionpolicy remotesigned
    ```
- [Leaflet](https://leafletjs.com/)
- [Unsplash](https://unsplash.com/)

#### Problemas para instalar pacotes tanto no terminal do VSC quanto no PowerShell

> Ok it looks like NPM is using your .gitignore as a base for the .npmignore file, and thus ignores /lib. If you add a blank .npmignore file into the root of your application, everything should work.



