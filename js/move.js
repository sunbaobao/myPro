/**
 * Created by Administrator on 2016/9/2.
 */
/**
 *move三个参宿属性，目的值，持续时间
 */
HTMLElement.prototype.myTimer;
HTMLElement.prototype.myF = false;
HTMLElement.prototype.myMove = function (pro, value, duration) {
    var ele = this;
    var f1 = function (pro, value, duration, ele) {
        function getStyle(ele, pro) {
            // var value;
            if (document.defaultView.getComputedStyle(ele, null)) {
                return document.defaultView.getComputedStyle(ele, null)[pro];
            } else if (ele.currentStyle) {
                return ele.currentStyle[pro];
            }
        }

        var thisTa = ele;
        //console.log(thisTa);
        if (!thisTa.myF) {
            thisTa.myF = true;
            var cur = parseFloat(value) - parseFloat(getStyle(thisTa, pro));//现在的差
            //console.log(cur < 0 && parseFloat(getStyle(thisTa, pro)) > parseFloat(value));
            var units = value.search(/[a-zA-Z]/gi) != -1 ? value.substring(value.search(/[a-zA-Z]/gi)):'';
            // var timer;
            var myinterval = 17;
            var speed = cur / (duration / myinterval); //速度
            setTimeout(function () {
                if (cur > 0 && (parseFloat(getStyle(thisTa, pro)) < parseFloat(value)) || cur < 0 &&
                    (parseFloat(getStyle(thisTa, pro)) > parseFloat(value))) {
                    speed = (Math.abs(speed) > (0.0001)) ? speed:0.0001;
                    //console.log(speed + ",speed");
                    thisTa.style[pro] = parseFloat(getStyle(thisTa, pro)) + speed + units;
                    thisTa.myTimer = setTimeout(arguments.callee, myinterval);
                } else {
                    // clearTimeout(thisTa.myTimer);
                    thisTa.style[pro] = value;
                    thisTa.myF = false;
                    console.log(thisTa.myF);
                }
            }, myinterval);

        }
    };
    //this.myArr.push(f1);
    if (this.myF) {
        setTimeout(function () {
            //console.log(ele.myF);
            if (ele.myF) {
                setTimeout(arguments.callee, 300);
            } else {
                f1(pro, value, duration, ele);
            }
        }, 300);
    } else {
        console.log("aa");
        f1(pro, value, duration, ele);
    }

};
HTMLElement.prototype.myStop = function () {
    clearTimeout(this.myTimer);
    this.myF = false;
    console.log("stoptimer" + this.myTimer);
};