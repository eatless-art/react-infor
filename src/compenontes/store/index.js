import { createStore } from "redux";

const rootReducer = (
  state = {
    arr: [
      {
        dui: false,
        num: "100861",
        name: "HP Computers",
        mianshu: "HP公司互动部代理",
        activenum: "3",
        customer: "Solar, Helen",
        id: 12,
        huodong: [
          {
            gou: false,
            huodongid: "3333",
            hudongmingcheng: "FY2018",
            biegntime: "2007-3-1",
            endtime: "2007-10-1",
            huodongcontent: [
              {
                id: "33889",
                name: "新机型XPS上市",
                miaoshu: "2007财年活动集合",
                jiancedian: "53",
                zhuangtai: "运行",
                fangke: "2323",
                num: "32",
                biegntime: "2007-3-1",
                endtime: "2007-10-1",
                leixing: "网站",
              },
              {
                id: "3349917",
                name: "第二网站",
                miaoshu: "2008财年活是真的",
                jiancedian: "522",
                zhuangtai: "草稿",
                fangke: "23",
                num: "342",
                biegntime: "2006-3-1",
                endtime: "2008-10-1",
                leixing: "网站",
              },
              {
                id: "387499",
                name: "第三网站",
                miaoshu: "2008哦品年活是真的",
                jiancedian: "512",
                zhuangtai: "暂停",
                fangke: "24",
                num: "312",
                biegntime: "2005-3-1",
                endtime: "2007-10-1",
                leixing: "广告投放",
              },
            ],
          },
          {
            gou: false,
            huodongid: "122233",
            hudongmingcheng: "FY2019",
            biegntime: "2009-3-1",
            endtime: "2010-10-1",
            huodongcontent: [
              {
                id: "3119",
                name: "新机型XPS上市",
                miaoshu: "2007财年活动集合",
                jiancedian: "53",
                zhuangtai: "运行",
                fangke: "2323",
                num: "32",
                biegntime: "2007-3-1",
                endtime: "2007-10-1",
                leixing: "网站",
              },
              {
                id: "1227",
                name: "第二网站",
                miaoshu: "2008财年活是真的",
                jiancedian: "522",
                zhuangtai: "草稿",
                fangke: "23",
                num: "342",
                biegntime: "2006-3-1",
                endtime: "2008-10-1",
                leixing: "电子杂志",
              },
              {
                id: "55599",
                name: "第三网站",
                miaoshu: "2008哦品年活是真的",
                jiancedian: "512",
                zhuangtai: "暂停",
                fangke: "24",
                num: "312",
                biegntime: "2005-3-1",
                endtime: "2007-10-1",
                leixing: "网站",
              },
            ],
          },
        ],
      },
      {
        dui: false,
        num: "100862",
        name: "DELL Computers",
        mianshu: "Dell公司互动部代理",
        activenum: "4",
        customer: "Sanzhi",
        id: 32,
        huodong: [
          {
            gou: false,
            huodongid: "3355",
            hudongmingcheng: "FY2019",
            biegntime: "2009-8-1",
            endtime: "2010-10-1",
            huodongcontent: [
              {
                id: "300499",
                name: "新机型oppo上市",
                miaoshu: "2009匹配活动集合",
                jiancedian: "53",
                zhuangtai: "运行",
                fangke: "2323",
                num: "32",
                biegntime: "2006-3-1",
                endtime: "2007-10-1",
                leixing: "电子杂志",
              },
              {
                id: "39499",
                name: "第四网站",
                miaoshu: "2000财年活是",
                jiancedian: "522",
                zhuangtai: "草稿",
                fangke: "23",
                num: "342",
                biegntime: "2006-3-1",
                endtime: "2008-10-1",
                leixing: "网站",
              },
              {
                id: "13499",
                name: "第五网站",
                miaoshu: "品年活是真的",
                jiancedian: "512",
                zhuangtai: "暂停",
                fangke: "24",
                num: "312",
                biegntime: "2005-3-1",
                endtime: "2007-10-1",
                leixing: "广告投放",
              },
            ],
          },
        ],
      },
      {
        dui: false,
        num: "100863",
        name: "Huawei Computers",
        mianshu: "Huawei公司互动部代理",
        activenum: "5",
        customer: "Renzhengfei",
        id: 43,
        huodong: [
          {
            gou: false,
            huodongid: "3383",
            hudongmingcheng: "FY2018",
            biegntime: "2007-3-1",
            endtime: "2007-10-1",
            huodongcontent: [
              {
                id: "33499",
                name: "新上市",
                miaoshu: "2022财年活动集合",
                jiancedian: "53",
                zhuangtai: "运行",
                fangke: "2323",
                num: "32",
                biegntime: "2007-3-1",
                endtime: "2007-10-1",

                leixing: "网站",
              },
              {
                id: "33490",
                name: "第六网站",
                miaoshu: "2008嗯嗯是真的",
                jiancedian: "522",
                zhuangtai: "草稿",
                fangke: "23",
                num: "342",
                biegntime: "2006-3-1",
                endtime: "2008-10-1",

                leixing: "广告投放",
              },
              {
                id: "3199",
                name: "第七网站",
                miaoshu: "2008真的",
                jiancedian: "512",
                zhuangtai: "暂停",
                fangke: "24",
                num: "312",
                biegntime: "2005-3-1",
                endtime: "2007-10-1",

                leixing: "网站",
              },
            ],
          },
        ],
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "SHAI":
      let aw = state.arr;
      // var nm = aw.filter((ele) => {
      //   if (action.val === "mingcheng") {
      //     if (ele.name.includes(action.cha)) {
      //       return ele;
      //     }
      //   }
      //   if(action.val === "mbianhao")
      // });
      if (action.val === "mingcheng") {
        var nm = aw.filter((ele) => {
          if (ele.name.indexOf(action.cha) !== -1) {
            return ele;
          }
        });
      } else if (action.val === "bianhao") {
        var nm = aw.filter((ele) => {
          if (ele.num.indexOf(action.cha) !== -1) {
            return ele;
          }
        });
      }
      console.log(nm);

      return {
        arr: nm,
      };
    case "ALL":
      let lp = state.arr;
      let lo = lp.map((ele) => {
        ele.dui = action.checked;
        return ele;
      });
      return {
        arr: lo,
      };
    case "ALLL":
      const pp = state.arr.filter((ele) => ele.id == action.id2);
      const oo = pp[0].huodong;
      let ii = oo.map((ele) => {
        ele.gou = action.checked;
        return ele;
      });
      const c = [...oo, ii];
      const d = [...pp, c];
      return {
        arr: d,
      };
    case "DEL":
      const zx = state.arr;
      const zc = zx.filter((ele) => ele.dui !== true);
      return {
        arr: zc,
      };
    case "DELLL":
      let ppp = state.arr.filter((ele) => ele.id == action.id);
      let ooo = ppp[0].huodong;
      let zcc = ooo.filter((ele) => ele.gou !== true);
      const ppp1 = [...ppp, zcc];
      return {
        arr: ppp1,
      };
    case "GAI":
      const qw = state.arr.reduce((res, item) => {
        if (item.id === action.id) {
          item.dui = !item.dui;
        }
        return [...res, item];
      }, []);
      return {
        arr: qw,
      };
    case "GAII":
      const arr1 = state.arr.filter((ele) => ele.id == action.id2);
      const arr2 = arr1[0].huodong;
      const qq = arr2.reduce((res, item) => {
        if (item.huodongid === action.id) {
          item.gou = !item.gou;
        }
        return [...res, item];
      }, []);
      const a = [...arr2, qq];
      const b = [...arr1, a];
      return {
        arr: b,
      };
    case "ADD":
      const number = state.arr;
      const time = new Date().getTime();
      number.push({
        dui: false,
        num: action.inputVal,
        name: action.val,
        mianshu: action.vall,
        activenum: "5",
        customer: action.valw,
        id: time,
      });
      return {
        arr: number,
      };
    case "ADDH":
      const arr4 = state.arr.filter((ele) => ele.id == action.id4);
      const arr5 = arr4[0].huodong;
      const time1 = new Date().getTime();

      arr5.push({
        gou: false,
        huodongid: time1,
        hudongmingcheng: action.c1,
        biegntime: "2020-3-1",
        endtime: "2030-10-1",
        huodongcontent: [
          {
            id: "33889",
            name: "新机型XPS上市",
            miaoshu: "2007财年活动集合",
            jiancedian: "53",
            zhuangtai: "运行",
            fangke: "2323",
            num: "32",
            biegntime: "2007-3-1",
            endtime: "2007-10-1",
          },
        ],
      });
      const e = [...arr4, arr5];
      return {
        arr: e,
      };
    default:
      return state;
  }
};
const store = createStore(rootReducer);
export default store;
