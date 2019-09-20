const bindSvgObjectArr = {
    page_5: [
        { id: '#_2-2', describe: 'CT', bind: '{props["Robot_RC8_51!CT"]}' },
        { id: '#运行中-7', describe: '运行', bind: '{props.deviceAlarmCode1.deviceStatus}', bindAttr: `className={props.deviceAlarmCode1.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200', describe: '循环次数', bind: '{props.deviceAlarmCode1.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12"]', describe: '运行时间', bind: '{props.deviceAlarmCode1.deviceCountWorkingHours}' },
        { id: '#_0', describe: '报错错误数', bind: '{props.deviceAlarmCode1.deviceAlarmCount}' },
        { id: '#_76', describe: '稼动率', bind: '{props.UtilizationRate51}' },

        { id: '#_2-3', describe: 'CT', bind: '{props["Robot_RC8_21!CT"]}' },
        { id: '#运行中-8', describe: '运行', bind: '{props.deviceAlarmCode2.deviceStatus}', bindAttr: `className={props.deviceAlarmCode2.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-2', describe: '循环次数', bind: '{props.deviceAlarmCode2.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-2"]', describe: '运行时间', bind: '{props.deviceAlarmCode2.deviceCountWorkingHours}' },
        { id: '#_0-2', describe: '报错错误数', bind: '{props.deviceAlarmCode2.deviceAlarmCount}' },
        { id: '#_76-2', describe: '稼动率', bind: '{props.UtilizationRate11}' },

        { id: '#_2-6', describe: 'CT', bind: '{props["Robot_RC8_31!CT"]}' },
        { id: '#运行中-11', describe: '运行', bind: '{props.deviceAlarmCode3.deviceStatus}', bindAttr: `className={props.deviceAlarmCode3.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-5', describe: '循环次数', bind: '{props.deviceAlarmCode3.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-5"]', describe: '运行时间', bind: '{props.deviceAlarmCode3.deviceCountWorkingHours}' },
        { id: '#_0-5', describe: '报错错误数', bind: '{props.deviceAlarmCode3.deviceAlarmCount}' },
        { id: '#_76', describe: '稼动率', bind: '{props.UtilizationRate21}' },

        { id: '#_2-5', describe: 'CT', bind: '{props["Robot_RC8_41!CT"]}' },
        { id: '#运行中-10', describe: '运行', bind: '{props.deviceAlarmCode4.deviceStatus}', bindAttr: `className={props.deviceAlarmCode4.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-4', describe: '循环次数', bind: '{props.deviceAlarmCode4.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-4"]', describe: '运行时间', bind: '{props.deviceAlarmCode4.deviceCountWorkingHours}' },
        { id: '#_0-4', describe: '报错错误数', bind: '{props.deviceAlarmCode4.deviceAlarmCount}' },
        { id: '#_76-5', describe: '稼动率', bind: '{props.UtilizationRate31}' },

        { id: '#_2-4', describe: 'CT', bind: '{props["Robot_RC8_51!CT"]}' },
        { id: '#运行中-9', describe: '运行', bind: '{props.deviceAlarmCode5.deviceStatus}', bindAttr: `className={props.deviceAlarmCode5.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-3', describe: '循环次数', bind: '{props.deviceAlarmCode5.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-3"]', describe: '运行时间', bind: '{props.deviceAlarmCode5.deviceCountWorkingHours}' },
        { id: '#_0-3', describe: '报错错误数', bind: '{props.deviceAlarmCode5.deviceAlarmCount}' },
        { id: '#_76-4', describe: '稼动率', bind: '{props.UtilizationRate41}' }
    ],
    page_4: [
        { id: '#_2', describe: 'CT', bind: '{props["Robot_RC8_51!CT"]}' },
        { id: '#运行中-6', describe: '运行状况', bind: '{props.deviceAlarmCode1.deviceStatus}', bindAttr: `className={props.deviceAlarmCode1.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200', describe: '循环次数', bind: '{props.deviceAlarmCode1.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12"]', describe: '运行时间', bind: '{props.deviceAlarmCode1.deviceCountWorkingHours}' },
        { id: '#_76', describe: '稼动率', bind: '{props.UtilizationRate51}' },
        { id: '#_0', describe: '报警/错误数', bind: '{props.deviceAlarmCode1.deviceAlarmCount}' },

        { id: '#_2-4', describe: 'CT', bind: '{props["Robot_RC8_11!CT"]}' },
        { id: '#运行中-8', describe: '运行状态', bind: '{props.deviceAlarmCode2.deviceStatus}', bindAttr: `className={props.deviceAlarmCode2.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-3', describe: '循环次数', bind: '{props.deviceAlarmCode2.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-3"]', describe: '运行时间', bind: '{props.deviceAlarmCode2.deviceCountWorkingHours}' },
        { id: '#_76-3', describe: '稼动率', bind: '{props.UtilizationRate11}' },
        { id: '#_0-3', describe: '报警/错误数', bind: '{props.deviceAlarmCode2.deviceAlarmCount}' },

        { id: '#_2-3', describe: 'CT', bind: '{props["Robot_RC8_21!CT"]}' },
        { id: '#运行中-7', describe: '运行状态', bind: '{props.deviceAlarmCode3.deviceStatus}', bindAttr: `className={props.deviceAlarmCode3.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-2', describe: '循环次数', bind: '{props.deviceAlarmCode3.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-2"]', describe: '运行时间', bind: '{props.deviceAlarmCode3.deviceCountWorkingHours}' },
        { id: '#_76-2', describe: '稼动率', bind: '{props.UtilizationRate21}' },
        { id: '#_0-2', describe: '报警/错误数', bind: '{props.deviceAlarmCode3.deviceAlarmCount}' },

        { id: '#_2-5', describe: 'CT', bind: '{props["Robot_RC8_31!CT"]}' },
        { id: '#运行中-9', describe: '运行状态', bind: '{props.deviceAlarmCode4.deviceStatus}', bindAttr: `className={props.deviceAlarmCode4.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-4', describe: '循环次数', bind: '{props.deviceAlarmCode4.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-4"]', describe: '运行时间', bind: '{props.deviceAlarmCode4.deviceCountWorkingHours}' },
        { id: '#_76-4', describe: '稼动率', bind: '{props.UtilizationRate31}' },
        { id: '#_0-4', describe: '报警/错误数', bind: '{props.deviceAlarmCode4.deviceAlarmCount}' },

        { id: '#_2-6', describe: 'CT', bind: '{props["Robot_RC8_41!CT"]}' },
        { id: '#运行中-10', describe: '运行状态', bind: '{props.deviceAlarmCode5.deviceStatus}', bindAttr: `className={props.deviceAlarmCode5.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: '#_1200-5', describe: '循环次数', bind: '{props.deviceAlarmCode5.deviceCumulativeOutput}' },
        { id: 'text[id="_12:12:12-5"]', describe: '运行时间', bind: '{props.deviceAlarmCode5.deviceCountWorkingHours}' },
        { id: '#_76-5', describe: '稼动率', bind: '{props.UtilizationRate41}' },
        { id: '#_0-5', describe: '报警/错误数', bind: '{props.deviceAlarmCode5.deviceAlarmCount}' }
    ],

    page_20: [
        { id: '#第1臂', describe: '显示第一臂还是第二臂', bind: '{props.number}' }
    ],
    page_6: [
        { id: '#_75_', describe: '当前显示的稼动率', bind: '{props.thisShowDev.UtilizationRate11}' },
        { id: '#_12h', describe: '运行时长', bind: '{props.thisShowDev.deviceCountWorkingHours}' },
        { id: '#_2s', describe: 'CT', bind: '{props.thisShowDev.RobotCT}' },
        { id: '#_1200', describe: '循环次数', bind: '{props.thisShowDev.deviceCumulativeOutput}' },
        { id: '#GBH-06', describe: '编号', bind: '{props.thisShowDev._filed1}' },
        { id: '#单机循环', describe: '单机循环', bind: '{props.thisShowDev._filed2}' },
        { id: '#LPH040_LPH060_LPH070', describe: '型号', bind: '{props.thisShowDev._filed3}' },
        { id: '#正常', describe: '设备状态正常', bind: '{props.thisShowDev.deviceStatus}', bindAttr: `className={props.thisShowDev.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: 'text[id="_12:45"]', describe: '循环时间', bind: '{props.thisShowDev.dateTime}' }
    ],
    page_10: [
        { id: '#_汽车零件上下料', describe: '设备名称', bind: '{props.thisShowDev._filed2}' },
        { id: '#HSR_048_055_065', describe: '设备型号', bind: '{props.thisShowDev._filed3}' },
        { id: '#运行中-3', describe: '运行状况', bind: '{props.thisShowDev.deviceStatus}', bindAttr: `className={props.thisShowDev.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` },
        { id: 'text[id="_12:12:12"]', describe: '运行时间', bind: '{props.thisShowDev.deviceStatus}' },
        { id: 'text[id="_2s"]', describe: 'CycleTime', bind: '{props.thisShowDev.dateTime}' },
        { id: 'text[id="_76_"]', describe: '稼动率', bind: '{props.thisShowDev.UtilizationRate11}' },
        { id: 'text[id="_0"]', describe: '报警错误数', bind: '{props.thisShowDev.deviceAlarmCount}' },
        { id: 'text[id="_1200"]', describe: '循环次数', bind: '{props.thisShowDev.deviceCumulativeOutput}' },
        { id: 'text[id="_汽车零件上下料-3"]', describe: '设备名称', bind: '{props.thisShowDev._filed2}' },
    ]

};


export default bindSvgObjectArr ; 