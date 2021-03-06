/**
 * Created by chencheng on 2017/8/28.
 */
import T from 'utils/T';
import { EnumDefaultMenus, EnumCollapsedLeftMenuUrls } from 'constants/EnumDefaultMenus';

/**
 * url和分类值的对应关系
 * @type {{}}
 */
export const UrlToExtraInfoMap = {};

/**
 * 配置菜单文件
 */
export const EnumMenus = (() => {

    /**
     * 获取url对应额外信息的Item
     * @param url
     */
    const getUrlToExtraInfoMapItem =(url) => ({
        isCollapsedLeftMenu: EnumCollapsedLeftMenuUrls.indexOf(url) !== -1
    });

    /**
     * 格式化菜单
     * @param menus
     * @param urls
     * @returns {{menus: *, urls: Array}}
     */
    const formatMenus = (menus, urls = []) => {
        menus.forEach(menu => {
            if (T.lodash.isUndefined(menu.children)) menu.children = [];

            if (Array.isArray(menu.url)) {
                urls = urls.concat(menu.url);
            } else if (T.lodash.isString(menu.url)) {
                urls.push(menu.url);
            }

            if (Array.isArray(menu.children) && menu.children.length > 0) {
                if(menu.url){
                    if(T.lodash.isString(menu.url)){
                        menu.url = [menu.url];
                    }
                } else {
                    menu.url = [];
                }

                const result = formatMenus(menu.children);

                menu.url = T.lodash.uniq(menu.url.concat(result.urls));
                urls = T.lodash.uniq(urls.concat(menu.url));
            }
        });

        urls.forEach(url => UrlToExtraInfoMap[url] = getUrlToExtraInfoMapItem( url));

        return { menus, urls };
    }

    // 加工默认菜单配置
    const menus = formatMenus(EnumDefaultMenus).menus;
    console.log(menus);
    return menus;
})();



/**
 * 获取左侧菜单
 * @param url
 * @param type
 * @returns {Array}
 */
export const getLeftMenu = (url, type = EnumMenus[0]['value']) => {
    const menu = getMenusByCategory(type);

	for (let i = 0; i < menu.length; i++) {
		if ((T.lodash.isArray(menu[i].url) && T.lodash.indexOf(menu[i].url, url) !== -1) ||
			(T.lodash.isString(menu[i].url) && menu[i].url === url)
		) {
			return menu[i].children;
		}
	}

	return [];
};
