import request from './request'

export function getDetailData(id) {
    return request({
        url: 'detail',
        params: {
            iid: id
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.highNowPrice;
    }
}