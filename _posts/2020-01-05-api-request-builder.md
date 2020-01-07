---
layout: post
title: API request builder
description: A free, fast, and beautiful alternative to Postman.
titles:
- Features
- Financial Contributors
- Code Contributors
- Badges
tipue_search_active: true
exclude_from_search: false
categories: [api, web]
tags: [jekyll, code, postman]
type: important
---

## Features

❤️ **Lightweight**: Crafted with minimalistic UI design - simple design is the best design.

⚡️ **Fast**: Send requests and get/copy responses in real-time - fast software is the best software.

**Methods:**
 - `GET` - Retrieve information about the REST API resource
 - `HEAD` - Retrieve response headers identical to those of a GET request, but without the response body.
 - `POST` - Create a REST API resource
 - `PUT` - Update a REST API resource
 - `DELETE` - Delete a REST API resource or related component
 - `CONNECT` - Establishes a tunnel to the server identified by the target resource
 - `OPTIONS` - Describe the communication options for the target resource
 - `TRACE` - Performs a message loop-back test along the path to the target resource
 - `PATCH` - Apply partial modifications to a REST API resource
 - `<custom>` - Some APIs use custom request methods such as `LIST`. Type in your custom methods.

🌈 **Make it yours**: Customizable combinations for background, foreground and accent colors: because customization is freedom. [Customize now ✨](https://postwoman.io/settings).

**Customizations:**
 - Choose theme: Kinda Dark (default), Clearly White, Just Black and System theme
 - Choose accent color: Green (default), Yellow, Pink, Red, Purple, Orange, Cyan and Blue
 - Toggle multi-colored headings

_Customized themes are synced with local session storage_

🔥 **PWA**: Install as a [PWA](https://developers.google.com/web/progressive-web-apps) on your device.

## Financial Contributors

**Features:**
 - Instant loading with [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers)
 - Offline support
 - Low RAM/memory and CPU usage
 - [Add to Home Screen](https://developers.google.com/web/fundamentals/app-install-banners) (button in footer)
 - [Desktop PWA](https://developers.google.com/web/progressive-web-apps/desktop) support (button in footer)
 - ([full features](https://developers.google.com/web/progressive-web-apps))

🚀 **Request**: Retrieve response from endpoint instantly.

 - Choose `method`
 - Enter `URL` and `Path`
 - Send

**Features:**
 - Copy/share public "Share URL"
 - Generate request code for `JavaScript XHR`, `Fetch` and `cURL`
 - Copy generated request code to clipboard
 - Import `cURL`
 - Label requests

## Code Contributors

🔌 **WebSocket**: Establish full-duplex communication channels over a single TCP connection.

 - Send and receive data
 - Basic authentication using username and password
 - Token based authentication

📡 **Server Sent Events**: Receive a stream of updates from a server over a HTTP connection without resorting to polling.

🔮 **GraphQL**: GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

 - Set endpoint and get schemas
 - Multi-column docs
 - Set custom request headers
 - Query schema
 - Get query response

🔐 **Authentication**: Allows to identify the end user.

**Types:**
 - None
 - Basic authentication using username and password
 - Token based authentication

📢 **Headers**: Describes the format the body of your request is being sent as.

 - Add or remove Header list

📫 **Parameters**: Use request parameters to set varying parts in simulated requests.

📃 **Request Body**: Used to send and receive data via the REST API.

**Options:**
 - Set `Content Type`
 - Add or remove Parameter list
 - Toggle between key-value and RAW input Parameter list

👋 **Responses**: Contains the status line, headers and the message/response body.

 - Copy response to clipboard
 - Download response to as a file
 - View preview of HTML responses

⏰ **History**: Request entries are synced with local session storage to reuse with a single click.

**Fields:**
 - Star
 - Label
 - Method
 - Status code
 - URL
 - Path
 - Timestamp
 - Duration
 - Pre-request script

_History entries can be sorted by any fields_

_Histories can be deleted one-by-one or all together_

📁 **Collections**: Keep your API requests organized with collections and folders. Reuse them with a single click.

**Options:**
 - Create infinite collections, folders and requests
 - Edit, delete, move, export, import and replace

_Collections are synced with local session storage_

🌐 **Proxy**: Enable Proxy Mode from Settings to access blocked APIs.

**Features:**
 - Hide your IP address
 - Fixes [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Cross Origin Resource Sharing) issues
 - Access APIs served in non-HTTPS (`http://`)
 - Use custom Proxy URL

_Official Postwoman Proxy is hosted by ApolloTV - **[Privacy policy](https://apollotv.xyz/legal)**_

📜 **Pre-Request Scripts β**: Snippets of code associated with a request that are executed before the request is sent.

**Use-cases:**
 - Include timestamp in the request headers
 - Send a random alphanumeric string in the URL parameters

_Requests with Pre-Request Scripts are indicated in History entries_

📄 **API Documentation**: Create and share dynamic API documentation easily, quickly.

**Usage:**
 1. Add your requests to Collections and Folders
 2. Export Collections and easily share your APIs with the rest of your team
 3. Import Collections and Generate Documentation on-the-go

⌨️ **Keyboard Shortcuts**: Optimized for efficiency.

**Shortcuts:**
 - Send Request <kbd>Ctrl</kbd> + <kbd>G</kbd>
 - Save to Collections <kbd>Ctrl</kbd> + <kbd>S</kbd>
 - Copy Request Link <kbd>Ctrl</kbd> + <kbd>K</kbd>
 - Reset Request <kbd>Ctrl</kbd> + <kbd>L</kbd>

🌎 **i18n β**: Experience the app in your own language.

 1. Scroll down to the footer
 2. Click "Choose Language" button
 3. Select your language from the menu

_Keep in mind translations aren't available for all source and target language combinations_

**To provide a localized experience for users around the world, you can add you own translations.**

 - Add a new locale in `lang/`

   Example: `lang/es-ES.js`
 - Mention `code`, `name`, `iso` and `file` in `nuxt.config.js`

   Example:
    ```
    i18n: {
      locales: [{
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es-ES.js'
      }]
    }
    ```

_**All `i18n` contributions are welcome to `i18n` [branch](https://github.com/liyasthomas/postwoman/tree/i18n) only!**_

📦 **Add-ons**: Official add-ons for Postwoman.

 - **[Postwoman Proxy β](https://github.com/postwoman-io/postwoman-proxy)** - A simple proxy server created for Postwoman
 - **[Postwoman CLI β](https://github.com/postwoman-io/postwoman-cli)** - A CLI solution for Postwoman

_Add-ons are developed and maintained under **[Official Postwoman Organization](https://github.com/postwoman-io)**_

**To find out more, please check out [Postwoman Wiki](https://github.com/liyasthomas/postwoman/wiki).**

## Demo 🚀 [![Website](https://img.shields.io/website?url=https%3A%2F%2Fpostwoman.io&logo=Postwoman)](https://postwoman.io)

[postwoman.io](https://postwoman.io)

## Badges

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
</a>

## Usage 💡

1. Specify your request `method`
2. Type in your API `URL` and `path`
3. Send request
4. Get response

You're done!

## Built with 🔧

* [Chromium](https://github.com/chromium/chromium) - Thanks for being so fast!
* HTML - For the web framework
* CSS - For styling components
* JavaScript - For magic!
* [Vue](https://vuejs.org/) - To add to the JavaScript magic!
* [Nuxt](https://nuxtjs.org/) - To add to the Vue magic!

## Developing 👷

#### Use a browser based development environment:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/liyasthomas/postwoman)

#### Or, with local development environment:

1. [Clone this repo](https://help.github.com/en/articles/cloning-a-repository) with git.
2. Install dependencies by running `npm install` within the directory that you cloned (probably `postwoman`).
3. Start the development server with `npm run dev`.
4. Open development site by going to [http://localhost:3000](http://localhost:3000) in your browser.

