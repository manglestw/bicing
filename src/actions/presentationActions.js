export const setViewListAction = "SET_VIEW_LIST";

export function setViewList(boolean){
    return {type:setViewListAction, isHidden:boolean}
}
