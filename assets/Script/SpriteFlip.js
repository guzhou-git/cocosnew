cc.Class({
    extends: cc.Component,

    properties: {
        nodef:{
            default:null,
            type:cc.Node
        },
        flipX:{
            default:false,
            type:cc.Boolean
        },
        flipY:{
            default:false,
            type:cc.Boolean
        }
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.nodef.setScaleX(-0.4);
        // cc.info("sdfsdfds",this.sprite.type)
        // this.sprite.parent.flipX(this.flipX);
        // this.sprite.flipY(this.flipY);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
