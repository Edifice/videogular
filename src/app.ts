/// <reference path="../typings/tsd.d.ts" />
import {ShadowDomStrategy, NativeShadowDomStrategy, Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {VgPlayer} from 'com/2fdevs/videogular/components/vg-player/vg-player';
import {VgOverlayPlay} from 'com/2fdevs/videogular/plugins/vg-overlay-play/vg-overlay-play';

import {VgControls} from 'com/2fdevs/videogular/plugins/vg-controls/vg-controls';
import {VgPlayPause} from 'com/2fdevs/videogular/plugins/vg-controls/vg-play-pause/vg-play-pause';
import {VgScrubBar} from 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar';
import {VgScrubBarCurrentTime} from 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time';
import {VgMute} from 'com/2fdevs/videogular/plugins/vg-controls/vg-mute/vg-mute';
import {VgFullscreen} from 'com/2fdevs/videogular/plugins/vg-controls/vg-fullscreen/vg-fullscreen';

import {VgEvents} from 'com/2fdevs/videogular/events/VgEvents';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app.html',
    directives: [VgPlayer, VgOverlayPlay, VgControls, VgPlayPause, VgScrubBar, VgScrubBarCurrentTime, VgMute, VgFullscreen, NgFor]
})
class MyAppComponent {
    sources:Array<Object>;
    player:VgPlayer;
    controls:boolean = false;
    autoplay:boolean = false;
    loop:boolean = false;
    preload:string = 'auto';

    constructor() {
        this.sources = [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];

        this.player = document.querySelector("vg-player");
    }

    onPlayerReady(API) {
        console.log("player ready");
        console.log(API);
    }

    onMediaReady(API) {
        console.log("media ready");
        // pipVideo
        API.seekTime("pipVideo", 50, true);
    }
}

bootstrap(MyAppComponent);
