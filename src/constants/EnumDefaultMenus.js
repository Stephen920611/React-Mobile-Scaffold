/**
 * Created by chencheng on 17-9-14.
 */
import EnumRouter from 'constants/EnumRouter';

/**
 * 枚举默认收起左侧菜单的URL
 * @type {[*]}
 */
export const EnumCollapsedLeftMenuUrls = [];

/**
 * icon 类型
 * @type {{antd: string, custom: string}}
 */
export const EnumIconTypes = {
    antd: 'antd',
    custom: 'custom'
};

/**
 * 菜单配置
 *
 * Usage:
 * 左侧菜单参数使用说明:
 * {
        label:"ETL应用",

        //antd中的icon type
        icon:"swap",

        //可以是字符串,也可以是数组,当作为数组时可以将数组内的所有url都让该栏目保持高亮
        url:"url1" || ["url1", "url2"],

        children:[]
    }
 * @type {[*]}
 */
export const EnumDefaultMenus = [
    {
        label: '成都',
        url: EnumRouter.generalMessage,
    },
    {
        label: '运营收入情况',
        url: EnumRouter.operateD_run,
    },
    {
        label: '不正常航班',
        url: EnumRouter.operateD_run,
    },
    {
        label: '重点关注航班',
        url: EnumRouter.operateD_run,
    },
    {
        label: '延误航班',
        url: EnumRouter.operateD_run,
    },
    {
        label: '运营分析',
        url: EnumRouter.operateD_run,
    }
];

