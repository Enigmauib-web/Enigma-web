# Enigma nettside

!['Enigma Logo'](./static/img/EnigmaLogo/horisontalPngBlueTxt.png)

## Installasjon

### 1. Installer Node, Git og VS_Code.

- [nodejs.org](https://nodejs.org/)

- [git-scm.com/downloads](https://git-scm.com/downloads)

- [code.visualstudio.com](https://code.visualstudio.com/)

### 2. Klon og installer prosjektet.

#### 1. Åpne Terminal (Windows Powershell)

#### 2. Naviger inn i den mappen du ønsker å ha prosjektet.

- ````
    cd Documenst/min-mappe
    ````
#### 3. Klon repoet

- ````
    git clone https://github.com/Enigmauib-web/Enigma-web.git
    ````
#### 4. Naviger inn i mappen.

- ````
    cd Enigma-web
    ````

#### 5. Installer dependencies

- ````
    npm install
    ````

## Start prosjektet

#### 1. Åpne mappen i VS-Code. Fra terminal kan dette gjøres ved å skrive inn følgende kommando i terminal (Powershell)

- ````
    code .
    ````

- **NB:** sørg for å være navigert inn i `./Enigma-web` mappen. 


#### 2. Åpne termial i VS-Code.

- Ctrl + J (Windows / Linux)

- Cmd + J (Mac)

#### 3. Start lokal Docusaurus server

- ````
    npm run start
    ````

#### 4. Gå til `localhost:3000` eller `127.0.0.1:3000` i chrome. 

## Legge til ny side

#### 1. Lag en ny .mdx fil i den mappen under `/docs` du ønsker å legge til en side

Eksempel

- `/docs/For Studenter/Ny Student.mdx`


#### 2. Åpne `sidebars.js` filen.

#### 3. Legg til destinasjonen til den nye siden din under riktig kategori

Eksempel

- ````javascript
        ....
        {
            type: 'category',
            label: 'For Studenter',
            // Legg til din nye side her
            items: ['For Studenter/Ny Student', ...]
            },
        ...
    ````

#### 4. Du kan nå skrive mdx på den nye siden din. 


## Syntax

.mdx har en blandingssyntax mellom javascript - react og markdown. Under finner du de viktigste kommandoene.

### Overskrifter

#### **Markdown:**


````markdown
# Overskrift 1

## Overskrift 2

### Overskrift 3

#### Overskrift 4

##### Overskrift 5

###### Overskrift 6
````

#### **Blir til:**

# Overskrift 1

## Overskrift 2

### Overskrift 3

#### Overskrift 4

##### Overskrift 5

###### Overskrift 6

### Lister.

#### **Markdown:**

````markdown
- Dette er en liste

    - Med underpunkter
    
    - **Uthevet underpunkt**

    - _kursiv underpunkt_

1. Nummer 1

2. Nummer 2.

    - Punkt under 2. 
````

#### **Blir til:**

- Dette er en liste

    - Med underpunkter

    - **Uthevet underpunkt**

    - _kursiv underpunkt_

1. Nummer 1

2. Nummer 2.

    - Punkt under 2. 


### Bilder.

For å bruke bilder må man importere bildefunksjonen. Dette gjøres øverst i filen slik:

````javascript
import { Bilde } form '@site/utils/utils.mdx';
````

#### **Kode:**

````javascript
<Bilde url='/img/EnigmaLogo/hovedHorisontal.png' alt='Enigma Logo'/>
````

> **Pass på at bilde faktisk ligger i en mappe under `/static/img/...`**

#### **Blir til:**

![Enigma Logo](/static/img/EnigmaLogo/hovedHorisontal.png)
<u>Enigma Logo.</u>

Kan også lage en liste med bilder ved å bruke `BildeDiv` funksjonen. Den må importeres på samme måte.

````javascript
import { BildeDiv } form '@site/utils/utils.mdx';
````

#### **Kode:**

Legg inn en liste av flere bilder.

````javascript
<BildeDiv urls=['/img/EnigmaLogo/hovedHorisontal.png', '/img/EnigmaLogo/hovedPngBlueTxt.png']/>
````
