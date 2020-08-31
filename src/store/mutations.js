export default {
    //修改state菜单
    REQ_MENULIST(state,payload){
        state.menuList = payload
    },
    //修改state角色
    REQ_ROLELIST(state,payload){
        state.roleList = payload
    },
    //修改state管理员
    REQ_USERLIST(state,payload){
        state.userList = payload
    },
    //修改stata商品分类
    REQ_CATELIST(state,payload){
        state.cateList = payload
    },
    // 修改specs规格属性
    REQ_SPECSLIST(state,payload){
        state.specsList = payload
    },
    // 修改GOODS商品管理属性
    REQ_GOODSLIST(state,payload){
        state.goodsList = payload
    },
    // 修改MEMBER会员管理属性
    REQ_MEMBERLIST(state,payload){
        state.memberList = payload
    },
    // 修改banner轮播图管理属性
    REQ_BANNERLIST(state,payload){
        state.bannerList = payload
    },
    // 修改seck限时秒杀管理属性
    REQ_SECKLIST(state,payload){
        state.seckList = payload
    },

}