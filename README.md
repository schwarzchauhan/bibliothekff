# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)








# my custom README

dev dependencies 

- sass pkg to compile sass to css\
`npm install sass --save-dev`\
[documentation](https://sass-lang.com/documentation/js-api)  \
[sass - parent selctor](https://sass-lang.com/documentation/style-rules/parent-selector)  \
[conditional operator in reactjs](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)

- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)  
 [cdn](https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css)

- [custom axios](https://blog.clairvoyantsoft.com/intercepting-requests-responses-using-axios-df498b6cab62)

- [typewriter effect](https://www.npmjs.com/package/typewriter-effect)

## hosting on netlify
> `CI=false npm run build`

# routes 

`/user/login` - for login   
`/notfound` - for HTTP 404  
`/quiz/mcq` - mcq quiz  
`/dashboard/:username` - profile of a user


## learning 
pass props   \
https://javascript.plainenglish.io/how-to-pass-props-from-child-to-parent-component-in-react-d90752ff4d01  \

css \
input:focus <https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus>  \

## remote debugging 
<https://developer.chrome.com/docs/devtools/remote-debugging/>  \


##  running locally

<https://stackoverflow.com/questions/47412363/how-to-open-a-create-react-app-from-another-computer-connected-to-the-same-netwo>

`ipconfig` -- to check wifi

Wireless LAN adapter Wi-Fi:  \
IPv4 Address. . . . . . . . . . . : 192.168.0.104

```bash
#! /bin/bash

echo "BASH SCRIPT TO RUN BIBLIOTHEK FRONTEND SERVER"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo "Press 1 to run on local host"
echo "Press 2 to run on router ip"
read -p "Your Choice : " CHOICE

case "$CHOICE" in
    [1])
        echo "Running on localhost :)"
        cd ./bibliothekff
        npm run start
        ;;
    [2])
        echo "Running on router ip :)"
        cd ./bibliothekff
        HOST=192.168.0.106 npm run start
        ;;
    *)
        echo "Terminaing, invalid choice! :("
        ;;
esac

# https://linuxize.com/post/bash-case-statement/
```

<https://stackoverflow.com/questions/47412363/how-to-open-a-create-react-app-from-another-computer-connected-to-the-same-netwo>


`chk ip address ==`  \
<https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9>

## cookie 
<https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81>  \
<https://stackoverflow.com/questions/39826992/how-can-i-set-a-cookie-in-react>  \
