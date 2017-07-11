cc.Class({
    extends: cc.Component,

    properties: {
        shiXuXianShi: {
            default: null,
            type: cc.Label
        },
        difangChar: {
            default:null,
            type:cc.Node
        },
        wofangChar: {
            default:null,
            type:cc.Node
        },
        yinxiao:{
            default:null,
            url:cc.AudioClip
        }
        // defaults, set visually when attaching this script to the Canvas
        
    },

    // use this for initialization
    onLoad: function () {
        this.shiXuXianShi.string = 0;
        this.difangChar.dangqian = 0;
        this.wofangChar.dangqian = 0;
        this.difangChar.sudu = 1;
        this.wofangChar.sudu = 17;
        this.yinID = cc.audioEngine.play(this.yinxiao, false,1);
        //this.updateJiqi();
        var move = cc.moveTo(1, cc.p(1000,this.difangChar.getPositionY()));
        var callback = cc.callFunc(function(){
            cc.info(this.yinID,cc.audioEngine.getCurrentTime(this.yinID));
            cc.info(cc.audioEngine.getState(this.yinID));
            this.updateJiqi();
        }, this);
        this.difangChar.runAction(cc.repeatForever(cc.sequence(move,callback)));
        //this.yinxiao.play();
    },

    // called every frame
    update: function (dt) {
        // var abc = cc.Class({});
        // this.label.string = new abc().toString();
        this.shiXuXianShi.string = parseInt(this.shiXuXianShi.string)+1;
        this.difangChar.dangqian += this.difangChar.sudu; 
        this.wofangChar.dangqian += this.wofangChar.sudu; 
        this.updateJiqi();
       
    },
    updateJiqi:function(){
        //cc.log(this.difangChar.getPosition(), this.wofangChar.dangqian)
        var p = this.difangChar.getPosition();
        //this.difangChar.setPosition(this.difangChar.dangqian+79,p.y);
        if (p.x == 1000 || p.x >1000) {
            this.difangChar.setPosition(0,p.y);
        }
        p = this.wofangChar.getPosition();
        this.wofangChar.setPosition(this.wofangChar.dangqian,p.y);
        
        if (this.wofangChar.dangqian == 1000 || this.wofangChar.dangqian> 1000) {
            this.wofangChar.dangqian = 0
        }
    }
});
