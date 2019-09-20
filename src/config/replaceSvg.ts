
/**
 *读取到的svg字符串进行字符串替换
 *
 * @param {string} str
 * @param {{index:number}} d
 * @returns {string}
 */
const rep = (str:string,d:{index:number}):string=>{
    str = str.replace(/id\="地标工博会选中"/gi, `id="地标工博会选中" style={props.check1}  onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="工博会选中"/gi, `id="工博会选中" style={props.check1}  onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="工博会"/gi, `id="工博会"  style={{cursor:"pointer"}}    onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="地标上海工厂"/gi, `id="地标上海工厂" style={props.check11}  onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="查看详情-11"/gi, `id="查看详情-11"   onClick={()=>{props.checkInfoFn(1)}} `);


    str = str.replace(/id\="地标杭州工厂选中"/gi, `id="地标杭州工厂选中" style={props.check2}   onClick={()=>{props.checkFn(2)}}`);
    str = str.replace(/id\="杭州工厂选中"/gi, `id="杭州工厂选中" style={props.check2}   onClick={()=>{props.checkFn(2)}}`);
    str = str.replace(/id\="杭州工厂"/gi, `id="杭州工厂"  style={{cursor:"pointer"}}    onClick={()=>{props.checkFn(2)}} `);
    str = str.replace(/id\="地标杭州工厂"/gi, `id="地标杭州工厂" style={props.check22}  onClick={()=>{props.checkFn(2)}} `);

    str = str.replace(/id\="地标广州工厂选中"/gi, `id="地标广州工厂选中" style={props.check3}   onClick={()=>{props.checkFn(3)}}`);
    str = str.replace(/id\="广州工厂选中"/gi, `id="广州工厂选中" style={props.check3}   onClick={()=>{props.checkFn(3)}}`);
    str = str.replace(/id\="广州工厂"/gi, `id="广州工厂"  style={{cursor:"pointer"}}    onClick={()=>{props.checkFn(3)}} `);
    str = str.replace(/id\="地标广州工厂"/gi, `id="地标广州工厂"  style={props.check33}  onClick={()=>{props.checkFn(3)}} `);

    str = str.replace(/id\="地标长春工厂选中"/gi, `id="地标长春工厂选中" style={props.check4}   onClick={()=>{props.checkFn(4)}}`);
    str = str.replace(/id\="长春工厂选中"/gi, `id="长春工厂选中" style={props.check4}   onClick={()=>{props.checkFn(4)}}`);
    str = str.replace(/id\="长春工厂"/gi, `id="长春工厂"  style={{cursor:"pointer"}}    onClick={()=>{props.checkFn(4)}} `);
    str = str.replace(/id\="地标长春工厂"/gi, `id="地标长春工厂" style={props.check44}  onClick={()=>{props.checkFn(4)}} `);

    str = str.replace(/id\="地标重庆工厂选中"/gi, `id="地标重庆工厂选中" style={props.check5}   onClick={()=>{props.checkFn(5)}}`);
    str = str.replace(/id\="重庆工厂选中"/gi, `id="重庆工厂选中" style={props.check5}   onClick={()=>{props.checkFn(5)}}`);
    str = str.replace(/id\="重庆工厂"/gi, `id="重庆工厂"  style={{cursor:"pointer"}}    onClick={()=>{props.checkFn(5)}} `);
    str = str.replace(/id\="地标重庆工厂"/gi, `id="地标重庆工厂"  style={props.check55} onClick={()=>{props.checkFn(5)}} `);

    str = str.replace(/id\="地标烟台工厂选中"/gi, `id="地标烟台工厂选中" style={props.check6}   onClick={()=>{props.checkFn(6)}}`);
    str = str.replace(/id\="烟台工厂选中"/gi, `id="烟台工厂选中" style={props.check6}   onClick={()=>{props.checkFn(6)}}`);
    str = str.replace(/id\="烟台工厂"/gi, `id="烟台工厂"  style={{cursor:"pointer"}}    onClick={()=>{props.checkFn(6)}} `);
    str = str.replace(/id\="地标烟台工厂"/gi, `id="地标烟台工厂" style={props.check66}  onClick={()=>{props.checkFn(6)}} `);


    str = str.replace(/id\="_1选中"/gi, `id="_1选中" style={props.check1}   onClick={()=>{props.checkFn(1)}}`);
    str = str.replace(/id\="icon1selected"/gi, `id="icon1selected" style={props.check1}   onClick={()=>{props.checkFn(1)}}`);
    str = str.replace(/id\="icon1"/gi, `id="icon1"  style={props.check11}    onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="_1"/gi, `id="_1"   style={{cursor:"pointer"}} onClick={()=>{props.checkFn(1)}} `);

    str = str.replace(/id\="_6选中"/gi, `id="_6选中" style={props.check6}   onClick={()=>{props.checkFn(6)}}`);
    str = str.replace(/id\="icon6selected"/gi, `id="icon6selected" style={props.check6}   onClick={()=>{props.checkFn(6)}}`);
    str = str.replace(/id\="icon6"/gi, `id="icon6"  style={props.check66}    onClick={()=>{props.checkFn(6)}} `);
    str = str.replace(/id\="_6"/gi, `id="_6"   style={{cursor:"pointer"}} onClick={()=>{props.checkFn(6)}} `);

    str = str.replace(/id\="_7选中"/gi, `id="_7选中" style={props.check7}   onClick={()=>{props.checkFn(7)}}`);
    str = str.replace(/id\="icon7selected"/gi, `id="icon7selected" style={props.check7}   onClick={()=>{props.checkFn(7)}}`);
    str = str.replace(/id\="icon7"/gi, `id="icon7"  style={props.check77}    onClick={()=>{props.checkFn(7)}} `);
    str = str.replace(/id\="_7"/gi, `id="_7"   style={{cursor:"pointer"}} onClick={()=>{props.checkFn(7)}} `);

    str = str.replace(/id\="_8选中"/gi, `id="_8选中" style={props.check8}   onClick={()=>{props.checkFn(8)}}`);
    str = str.replace(/id\="icon8selected"/gi, `id="icon8selected" style={props.check8}   onClick={()=>{props.checkFn(8)}}`);
    str = str.replace(/id\="icon8"/gi, `id="icon8"  style={props.check99}    onClick={()=>{props.checkFn(8)}} `);
    str = str.replace(/id\="_8"/gi, `id="_8"   style={{cursor:"pointer"}} onClick={()=>{props.checkFn(8)}} `);

    str = str.replace(/id\="_9选中"/gi, `id="_9选中" style={props.check9}   onClick={()=>{props.checkFn(9)}}`);
    str = str.replace(/id\="icon9selected"/gi, `id="icon9selected" style={props.check9}   onClick={()=>{props.checkFn(9)}}`);
    str = str.replace(/id\="icon9"/gi, `id="icon9"  style={props.check88}    onClick={()=>{props.checkFn(9)}} `);
    str = str.replace(/id\="_9"/gi, `id="_9"   style={{cursor:"pointer"}} onClick={()=>{props.checkFn(9)}} `);


    str = str.replace(/id\="_1号机器人选中"/gi, `id="_1号机器人选中" style={props.check1}   onClick={()=>{props.checkFn(1)}}`);
    str = str.replace(/id\="_1号机器人"/gi, `id="_1号机器人"  onClick={()=>{props.checkFn(1)}}`);

    str = str.replace(/id\="查看详情"/gi, `id="查看详情"   style={{cursor:"pointer"}} onClick={()=>{props.checkInfoFn(1)}}`);
    str = str.replace(/id\="_1查看详情按钮"/gi, `id="_1查看详情按钮"   style={{cursor:"pointer"}} onClick={()=>{props.checkInfoFn(1)}}`);


    str = str.replace(/id\="_6号机器人选中"/gi, `id="_6号机器人选中" style={props.check6}   onClick={()=>{props.checkFn(6)}}`);
    str = str.replace(/id\="_6号机器人"/gi, `id="_6号机器人"  onClick={()=>{props.checkFn(6)}}`);
    str = str.replace(/id\="查看详情-2"/gi, `id="查看详情-2"   style={{cursor:"pointer"}} onClick={()=>{props.checkInfoFn(6)}}`);
    str = str.replace(/id\="_6查看详情按钮"/gi, `id="_6查看详情按钮"   style={{cursor:"pointer"}} onClick={()=>{props.checkInfoFn(6)}}`);


    str = str.replace(/id\="_7号机器人选中"/gi, `id="_7号机器人选中" style={props.check7}   onClick={()=>{props.checkFn(7)}}`);
    str = str.replace(/id\="_7号机器人"/gi, `id="_7号机器人"   onClick={()=>{props.checkFn(7)}}`);
    str = str.replace(/id\="查看详情-3"/gi, `id="查看详情-3"   style={{cursor:"pointer"}}  onClick={()=>{props.checkInfoFn(7)}}`);
    str = str.replace(/id\="_7查看详情按钮"/gi, `id="_7查看详情按钮"   style={{cursor:"pointer"}} onClick={()=>{props.checkInfoFn(7)}}`);

    str = str.replace(/id\="_8号机器人选中"/gi, `id="_8号机器人选中" style={props.check8}   onClick={()=>{props.checkFn(8)}}`);
    str = str.replace(/id\="_8号机器人"/gi, `id="_8号机器人"   onClick={()=>{props.checkFn(8)}}`);
    str = str.replace(/id\="查看详情-4"/gi, `id="查看详情-4"  style={{cursor:"pointer"}}   onClick={()=>{props.checkInfoFn(8)}}`);
    str = str.replace(/id\="_8查看详情按钮"/gi, `id="_8查看详情按钮"   style={{cursor:"pointer"}} onClick={()=>{props.checkInfoFn(8)}}`);

    str = str.replace(/id\="_9号机器人选中"/gi, `id="_9号机器人选中" style={props.check9}   onClick={()=>{props.checkFn(9)}}`);
    str = str.replace(/id\="_9号机器人"/gi, `id="_9号机器人"   onClick={()=>{props.checkFn(9)}}`);
    str = str.replace(/id\="查看详情-5"/gi, `id="查看详情-5"   style={{cursor:"pointer"}}  onClick={()=>{props.checkInfoFn(9)}}`);
    str = str.replace(/id\="_9查看详情按钮"/gi, `id="_9查看详情按钮"   style={{cursor:"pointer"}} onClick={()=>{props.checkInfoFn(9)}}`);
    if (d.index == 5) {
        str = str.replace(/id\="联合_22-6"/gi, `id="联合_22-6"   style={{fill:props.deviceAlarmCode1.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-7"/gi, `id="联合_22-7"   style={{fill:props.deviceAlarmCode2.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-10"/gi, `id="联合_22-10"   style={{fill:props.deviceAlarmCode3.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-9"/gi, `id="联合_22-9"   style={{fill:props.deviceAlarmCode4.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-8"/gi, `id="联合_22-8"   style={{fill:props.deviceAlarmCode5.deviceStatusCopy?'#5fd67e':'red'}} `);


        str = str.replace(/filter\="url\(\#联合_22\)"/gi, `filter={props.deviceAlarmCode1.deviceStatusCopy?'url(#联合_22)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-2\)"/gi, `filter={props.deviceAlarmCode2.deviceStatusCopy?'url(#联合_22-2)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-5\)"/gi, `filter={props.deviceAlarmCode3.deviceStatusCopy?'url(#联合_22-5)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-4\)"/gi, `filter={props.deviceAlarmCode4.deviceStatusCopy?'url(#联合_22-4)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-3\)"/gi, `filter={props.deviceAlarmCode5.deviceStatusCopy?'url(#联合_22-3)':''} `);
    }
    if (d.index == 4) {
        str = str.replace(/id\="联合_22-6"/gi, `id="联合_22-6"   style={{fill:props.deviceAlarmCode1.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-8"/gi, `id="联合_22-8"   style={{fill:props.deviceAlarmCode2.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-7"/gi, `id="联合_22-7"   style={{fill:props.deviceAlarmCode3.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-9"/gi, `id="联合_22-9"   style={{fill:props.deviceAlarmCode4.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/id\="联合_22-10"/gi, `id="联合_22-10"   style={{fill:props.deviceAlarmCode5.deviceStatusCopy?'#5fd67e':'red'}} `);

        str = str.replace(/filter\="url\(\#联合_22\)"/gi, `filter={props.deviceAlarmCode1.deviceStatusCopy?'url(#联合_22)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-3\)"/gi, `filter={props.deviceAlarmCode2.deviceStatusCopy?'url(#联合_22-3)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-2\)"/gi, `filter={props.deviceAlarmCode3.deviceStatusCopy?'url(#联合_22-2)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-4\)"/gi, `filter={props.deviceAlarmCode4.deviceStatusCopy?'url(#联合_22-4)':''} `);
        str = str.replace(/filter\="url\(\#联合_22-5\)"/gi, `filter={props.deviceAlarmCode5.deviceStatusCopy?'url(#联合_22-5)':''} `);
    }
    if (d.index == 10) {
        str = str.replace(/id\="联合_22-3"/gi, `id="联合_22-3"   style={{fill:props.thisShowDev.deviceStatusCopy?'#5fd67e':'red'}} `);
        str = str.replace(/filter\="url\(\#联合_22\)"/gi, `filter={props.thisShowDev.deviceStatusCopy?'url(#联合_22)':''} `);
    }
    return str ; 
}        
export default  rep ; 