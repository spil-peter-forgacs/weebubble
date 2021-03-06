/**
 * The title screen.
 */

// SDK imports
import ui.View;
import ui.ImageView;
import ui.TextView as TextView;
import ui.widget.ButtonView as ButtonView;

exports = Class(ui.ImageView, function (supr) {
    this.init = function (opts) {
        this._config = JSON.parse(CACHE['resources/conf/config.json']);

        opts = merge(opts, {
            x: 0,
            y: 0,
            width: this._config.screenWidth,
            height: this._config.screenHeight,
            image: "resources/images/bg1.jpg"
        });

        supr(this, 'init', [opts]);

        this.build();
    };

    this.build = function() {

        var buttonWidth = 294;
        var buttonHeight = 61;
        var deviceWidth = this._config.screenWidth;
        var deviceHeight = this._config.screenHeight;

        var textview = new TextView({
            superview: this,
            x: 0,
            y: 15,
            width: this._config.screenWidth,
            height: 50,
            text: "WeeBubble",
            autoSize: false,
            size: 38,
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            wrap: false,
            color: '#000099'
        });

        var buttonview = new ButtonView({
            superview: this,
            width: buttonWidth,
            height: buttonHeight,
            x: (deviceWidth - buttonWidth) / 2,
            y: 3 * deviceHeight / 4,
            images: {
                down: "resources/images/start_button_selected.jpg",
                up: "resources/images/start_button_unselected.jpg"
            },
            on: {
                down: bind(this, function () {
                }),
                up: bind(this, function () {
                    this.emit('titlescreen:start');
                })
            }
        });

    };
});
