---
outline: deep
---


## Browser Application {#1}
### Web-App Usage {#1-2}
**OBS will not capture the subtitles if the window is minimized.**<br>
**If you want to fix this, you can use the [app version](#2) of liveSubs.**<br>

1. Go to https://subs.puv.bar
2. Allow the use of your microphone by clicking `Allow` in the top left corner
3. Select the Language you will be speaking in. The selection can be made in the `Language` column of the `Subtitle` row
4. Add translation options by clicking `Add Translation`. You can add up to 5 translation options
   1. Select the language for each of the translation options
5. When you're done changing the settings, click the `Close` button

**Next -> [OBS Setup](#1-3)**

### Web-app OBS setup {#1-3}
1. In the recording software of your choosing, add a new `Window Capture` source
2. Select the window with the title `liveSubs` and click `OK`
3. Click `OK`

**Next -> [Background Removal](#3)**

## Windows Application {#2}
### App Installation {#2-1}
**You may get a warning from your browser or Windows because the app is not signed.**<br>
**This application is safe to use, and you can check the source code [here](https://github.com/puv/liveSubs).**<br>
**It would be very nice if you could click `"Report as safe"`, as it would help the project.**<br>

1. Go to https://github.com/puv/liveSubs/releases/latest
2. Download the `latest version` of liveSubs
   1. If you get a warning from your browser, click `...` or `More`, and then click `Keep`
   2. If asked for confirmation, click `Keep anyway`
3. Open the downloaded file
   1. If you get a warning from Windows, click `More info`, and then click `Run anyway`
   
**Next -> [Windows Application Usage](#2-2)**

### Win-App Usage {#2-2}
1. Open the downloaded file
2. Allow the use of your microphone by clicking `Allow` in the top left corner
3. Select the Language you will be speaking in. The selection can be made in the `Language` column of the `Subtitle` row
4. Add translation options by clicking `Add Translation`. You can add up to 5 translation options
   1. Select the language for each of the translation options
5. When you're done changing the settings, click the `Close` button

**Next -> [OBS Setup](#2-3)**

### Win-App OBS setup {#2-3}
1. In the recording software of your choosing, add a new `Browser Source` source
2. For the URL, write `https://subs.puv.bar/client`, and click `Close`
1. Click `OK`

**Next -> [Background Removal](#3)**


## Background removal {#3}
2. Right-click the `Window Capture` source you just added and click `Filters` -> `Edit Filters`
2. Click the `+` button, select `Chroma Key`, and click `Add`
3. Click on the color picker and select the color of the background of the subtitles. By default, it's green
4. Click `Close`.