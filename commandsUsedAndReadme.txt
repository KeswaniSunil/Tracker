Commands used for this proj :- 

-npx react-native init Tracker
-For navigation :- 
	1)npm install react-navigation
	2)npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	3)npm install react-navigation-stack @react-native-community/masked-view
	4)npm install react-navigation-tabs

install axios using :- npm install axios

-To run the proj :- npx react-native run-android
--In this proj we are using react native elements that include pre built set of common components.To install :- 'npm install react-native-elements'
-->now after i isnatlled react native elements library,while running app it gave error:- Unable to resolve module `react-native-vector-icons/Zocial` from `node_modules\react-native-elements\src\helpers\getIconType.js`: react-native-vector-icons/Zocial could not be found within the project.

Hence so also did:- npm install react-native-vector-icons

Now after installing this,i ran proj using command :- npx react-native run-android  , but it gave error :- Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.  So i ran proj using command :- 'npx react-native run-android -- verbose' after that it ran normally .So from now on just using this original command will also run this app properly:- 'npx react-native run-android'

-->Now it might happen that your mobile phone might be on the different network so it will not be very easy to run the express api ,so hence again for that we will use ngrok to solve this prob.So the ngrok is used to access you api from any device that might be not on the same network.Ngrok opens the direct connection to your express Apis and will give you public url from where you can access your apis from any device.Also if you are using  ngrok freely that ngrok url expires every 8 hours so make sure if you are running your app for more than 8 hours so make sure to update ngrok url every 8 hours.
To install ngrok:- npm install -g ngrok .Hencenow ngrok is installed globally so you can run it from anywhere.Also for any project suppose if your one express proj is running on 3000 then type ngrok http 3000 and some project having api you want to consume is running on 4000 the do :- ngrok http 4000. Also as its installed globally you can run it from anywhere ,no need to open terminal on your proj location and then run it.You can run it from anywhere
To run ngrok:- ngrok service portNumber , in our case as express api are running on port 3000 using http so we will run command for ngrok:- ngrok http 3000

-->Now to make sure ngrok is working correctly,go to browser and copy ngrok url and try to hit any of your backend proj api for eg:-  http://d11e8903e798.ngrok.io/tracks

-->To store the json web token we will use Async storage.The reason for this is whenever the user closes and opens the app again,the state variable are is completely wiped out so what will happen is every time user opens the app ,the user will be forced to sign in has state variable no longer hlder json web token so hence to prevent this behaviour we will store ths json web token on async storage.So everytime app is started we will check is token exist in async storage or not,if it exixts that user is already signed in or else we will show up sign in or sign up screen.
-->Async Storage is an asynchronous, unencrypted, persistent, key-value storage system for React Native.
-->As we are using react-native-cli, we will install async storage like:- 'npm install 	react-native-async-storage' but we have one prob, on react native site :- https://reactnative.dev/docs/asyncstorage  , its showing AsyncStorage is deprecated so instead install and use :- '@react-native-community/async-storage' and for all the methods of async storage refer to :- https://reactnative.dev/docs/asyncstorage  OR https://react-native-community.github.io/async-storage/docs/usage 

-->To install react native maps:- npm install react-native-maps
			-->To get user's location,i used react-native-location library,to install:- 'npm install react-native-location'
-->To get user's location,i m using  react-native-geolocation-service (https://reactnative.dev/docs/geolocation.html#:~:text=Geolocation%20is%20enabled%20by%20default,'Capabilities'%20tab%20in%20Xcode. or  https://www.npmjs.com/package/react-native-geolocation-service), to install it:- 'npm install react-native-geolocation-service'
-->To get user permission i will use react-native-permissions (https://www.npmjs.com/package/react-native-permissions),to install it use:- 'npm install react-native-permissions'
--Whenever you get error :- Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0. 
then just do :- npm install and then again start your app :- npx react-native run-android  OR  npx react-native run-android --verbose
Coz sometimes its caused when you add some library and its not properly added/installed in your proj

-->To display map on our App we need api key,so for that i followed following steps:-
	- Go to https://developers.google.com/maps/documentation/javascript/get-api-key?pli=1&authuser=1
	-From this you will be asked to go to https://console.cloud.google.com/google/maps-apis/overview?authuser=1 and after going on this url i logged in with my
	keswanisunil98@gmail.com account.
	-After that create project and then go to API option available on sidebar and then select any one of the option you want to enable for that project, i enabled 	Maps SDK for android and after its enabled,go to credentials and inside creadentials you will see this thing :- 'To view all credentials or create new 	credentials visit Credentials in APIs & Services' ,so click on that link and then you will be given option of create credentials ,so from their,click on 		create credential button and select API key.After AAPIkey is created you will be asked to restrict Api key.So if you want to restrict then click on it but 
	for now,i didn't do it.Now you can see your created API in credentials page.Dashboard Page will show usage of your api.

-->Now after api key is generated , in your react-native-cli project namely Tracker , go to folder android->then-> src->main->AndroidManifest.xml inside this xml file,add 
<meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
just before </application>


-->Now as we are using react-native-cli proj,so to ask user for location permission,follow specified steps :- https://www.npmjs.com/package/react-native-location
-->This github proj has implemented read-native-location and created location app using react native :- https://github.com/timfpark/react-native-location