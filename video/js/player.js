$(function(){
    var $refreshButton = $('#refresh');
    var $results = $('#css_result');

    function refresh(){
        var css = $('style.cp-pen-styles').text();
        $results.html(css);
    }

    refresh();
    $refreshButton.click(refresh);

    // Select all the contents when clicked
    $results.click(function(){
        $(this).select();
    });
});

$(document).ready(function(){
    //var player = videojs('my_video_1');

    /*
    var trackRu = new videojs.AudioTrack({
        id: 'russian-audio-track',
        kind: 'translation',
        label: 'Russian',
        language: 'rus'
    });

    var trackUa = new videojs.AudioTrack({
        id: 'ukranian-audio-track',
        kind: 'translation',
        label: 'Ukranian',
        language: 'ukr'
    });

    var trackEn = new videojs.AudioTrack({
        id: 'english-audio-track',
        kind: 'translation',
        label: 'English',
        language: 'eng'
    });

    player.audioTracks().addTrack(trackRu);
    player.audioTracks().addTrack(trackUa);
    player.audioTracks().addTrack(trackEn);

    var audioTrackList = player.audioTracks();
    console.log(audioTrackList);

// Listen to the "change" event.
    audioTrackList.addEventListener('change', function() {

        // Log the currently enabled AudioTrack label.
        for (var i = 0; i < audioTrackList.length; i++) {
            var track = audioTrackList[i];

            console.log('Added Track: ');
            console.log(track);

            if (track.enabled) {
                videojs.log(track.label);

                return;
            }
        }
    });*/

});