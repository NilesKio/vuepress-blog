import {Timeline, Card, Tag, Icon, Badge, Button, TimelineItem, Pagination, Row} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'


export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(Timeline);
  Vue.use(Card);
  Vue.use(Tag);
  Vue.use(Icon);
  Vue.use(Badge);
  Vue.use(Button);
  Vue.use(TimelineItem);
  Vue.use(Pagination);
  Vue.use(Row);
}
