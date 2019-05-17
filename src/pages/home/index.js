/* eslint-disable */
import '../../common/css/com.less';
import './index.less';
import {throttle} from '../../tools/utils';
console.log(throttle);
class point{
    alerts(x,y){
        alert(x+y)
    }
}
var aa = new point()
aa.alerts(2,3)
console.log('首页的js运行了～～')