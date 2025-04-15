# Brume Client

This repo provides examples of Brume client applications in [NodeJS](https://nodejs.org), browser and [webview-nodejs](https://github.com/Winterreisender/webview-nodejs). Learn more about Brume and the Brume client API [here](https://www.github.com/boblund/brume-client-api).

A Brume client application has three components:
- [User onboarding and management](https://brume.occams.solutions) and a peer-to-peer signaling server to connect Brume users.
- The [brume-core](https://github.com/boblund/brume-core) API that applications use.
- [Brume-auth](https://github.com/boblund/brume-auth) and [brume-web](https://github.com/boblund/brume-web) that provide Brume server authentication, and web login, respectively.
- A [video chat and file transfer app](https://brume.occams.solutions/webapp). Simple example data sender and receiver apps are provided in this repo.

[Brume System Overview](#architecture)</br>
[Brume Account](#account)</br>
[Installation and examples](#using)</br>
[License](#license)

# Brume System Overview <a name="architecture"></a>

<img style="margin-right: 20px; margin-left: 100px;" align="right" src="./Brume.drawio.png">
From a user's perspective the Brume system is a user account and applications that connect to each other using their Brume user name. A user account is created using the [management system](https://brume.occams.solutions). New users get a free trial with 1,000 connection attempts that are valid for one year. Additional connetion attempts can be purchased.

Brume applications use the Brume client to first establish a signaling connections to the server, then establish a peer-to-peer connection to another application using that application's Brume user name. Each attempt by a Brume user to connect to another user is a <i>connection attempt</i>.

# Brume Account <a name="account"></a>

A Brume account is required to use any Brume client application. An account can be created [here](https://brume.occams.solutions). A new account allows 1,000 Brume connection attempts at no cost.

# Using <a name="using"></a>

## Install the repo.

```
git clone git@github.com:boblund/brume-client.git
cd brume-client
```

There are three examples showing the client use in NodeJS, browser and webview-nodejs. The general structure of a Brume client:
* Connect to the Brume signaling server using a JWT identification token.
* Use the Brume client API to create a P2P connection with another Brume user application

The client comprises three repos:
* [brume-core](https://github.com/boblund/brume-core): the Brume api
* [brume-auth](https://github.com/boblund/brume-auth): authentication for nodejs
* [brume-web](https://github.com/boblund/brume-web): HTML and JavaScript for browser and webview app login

## Run the nodejs example

```
cd nodejs
npm i
```

NodeJS apps will normally use a JWT stored in a config file at a default location ```~/Brume/brume.conf```. This can be overridden by setting the environment variable ```BRUME_CONF```. A user's config file can be downloaded from https://brume.occams.solutions in the Account tab.

In a terminal window start the receiver first:

```
cd .. # putting you in brume-client/nodejs directory
node brumeReceiver
```

In another terminal window start the sender with a different brume.conf:

```
BRUME_CONFIG=<path to some other brume.conf> node brumeSender.
```

### Run the browser example

```
cd browser
npm i
PORT=<some port> node server.js .
```

If PORT is not set the server will choose some random unused port.

In two different browser tabs go to ```localhost:port``` and log in with your Brume account email and password.

### Run the webview example

```
cd webview
npm i
npm run build
```

In two separate terminal windows run:

```
node webviewBrume.mjs
```

This will start two webviews. Then log in with your Brume account email and password.

The result of the webview build (webview/index.hml) can also be run in the a browser.

```
cd browser
PORT=<some port> node server.js ../webview
```

In two different browser tabs go to ```localhost:port``` and log in with your Brume account email and password.

# License <a name="license"></a>

Creative Commons Attribution-NonCommercial 4.0 International

THIS SOFTWARE COMES WITHOUT ANY WARRANTY, TO THE EXTENT PERMITTED BY APPLICABLE LAW.
