var bttvEmotes = {
    bttvGlobalEmoteJson: "https://api.betterttv.net/2/emotes",
    bttvEmoteUrl: "https://cdn.betterttv.net/emote/",
    bttvEmoteSize: "1x",
    get: function() {
        var cached = JSON.parse(localStorage.getItem('bttvJson'));

        if (!cached) {
            $.get(this.bttvGlobalEmoteJson, function(data) {
                localStorage.setItem('bttvJson', JSON.stringify(data));
                data['emotes'].forEach(function(element) {
                    var e = { name: `${bttvEmotes.bttvEmoteUrl}${element.id}/${bttvEmotes.bttvEmoteSize}` }
                    Emotes.addEmote(element.code, e);
                });
            });
        }
        else {
            cached['emotes'].forEach(function(element) {
                var e = { name: `${bttvEmotes.bttvEmoteUrl}${element.id}/${bttvEmotes.bttvEmoteSize}` }
                Emotes.addEmote(element.code, e);
            });
        }
    }
}