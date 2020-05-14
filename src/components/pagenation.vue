<template>
  <div>
    <div class="elt-wrapper" v-if="hide">
      <ul class="elt-page">
        <li class="previous elt-item" :class="currentPage==1?'elt-disabled':''" @click="changePage('<')">
          <i class="icon iconfont">&#60;</i>
        </li>
        <li class="elt-item" :class="currentPage==1? 'elt-active':''" @click="changePage(1)">1</li>
        <li
          class="elt-item dot"
          v-show="middleBase > 2"
          @mouseover="onLeft='<<'"
          @mouseout="onLeft='...'"
          @click="onQuick('<')"
        >{{ onLeft }}</li>
        <li
          class="elt-item"
          v-for="(val, index) in middleArr"
          :key="index"
          :class="currentPage==val? 'elt-active':''"
          @click="changePage(val)"
        >{{ val }}</li>
        <li
          class="elt-item dot"
          v-show="middleBase+5 < maxPage"
          @mouseover="onRight='>>'"
          @mouseout="onRight='...'"
          @click="onQuick('>')"
        >{{ onRight }}</li>
        <li
          class="elt-item"
          :class="currentPage==maxPage? 'elt-active':''"
          @click="changePage(maxPage)"
          v-if="maxPage > 1"
        >{{ maxPage }}</li>
        <li
          class="next elt-item"
          :class="currentPage==maxPage||maxPage===0?'elt-disabled':''"
          @click="changePage('>')"
        >
          <i class="icon iconfont">&#62;</i>
        </li>
        <template v-if="jumpArea">
          <li class="txt fl" :class="{last:!jumpArea}">共{{ maxPage }}页</li>
          <li class="box fl">
            跳至
            <input type="text" value="1" class="input" v-model="jumpPage" />
            页
          </li>
          <li class="elt-item btnCfm fl" @click="onClick">确定</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { type } from "os";
export default {
  name: "OperateMcht",
  props: {
    total: {
      type: Number,
      default: 0
    },
    jumpArea: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 10
    },
    current: {
      type: Number,
      default: 1
    },
    hideOnSimglePage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      jumpPage: 1,
      currentPage: this.current,
      onRight: "...",
      onLeft: "..."
    };
  },
  watch: {
    current(val) {
      this.currentPage = val;
    }
  },
  computed: {
    maxPage() {
      return Math.ceil(this.total / this.size);
    },
    middleBase() {
      let page = this.currentPage;
      let base = 2;
      if (page > 4 && page + 2 < this.maxPage) base = page - 2;
      if (page > this.maxPage - 3) {
        base = this.maxPage - 5;
      }
      if (page < 4) {
        base = 2;
      }
      return base;
    },
    middleArr() {
      let arr = Array(5)
        .fill(0)
        .map((val, index) => index + this.middleBase)
        .filter(val => {
          return val < this.maxPage && val > 1 ? true : false;
        });
      return arr;
    },
    hide() {
      return !(this.maxPage == 1 && this.hideOnSimglePage);
    }
  },
  methods: {
    // 改变页码
    changePage(num) {

      // 防止跳页输入不在范围的值
      if (num === "" || num > this.maxPage || num <= 0) {
        this.jumpPage = this.currentPage;
        return;
      }
      // 上下页跳转
      let page = this.currentPage;
      if (
        (page == 1 && num === "<") ||
        (page == this.maxPage && num === ">") ||
        (page > this.maxPage || page < 1)
      ) {
        return;
      }

      if (num === "<") page--;
      else if (num === ">") page++;
      else {
        page = num;
      }
      this.currentPage = page;
      this.jumpPage = "";

      this.$emit("pageChange", page);
      this.$emit("update:current", page);
    },
    // 跳页处理
    onClick() {
      if (!this.jumpPage) {
        return;
      }
      let num = parseInt(this.jumpPage);
      if (isNaN(num)) {
        return;
      }
      this.changePage(num);
    },
    // 快进按钮
    onQuick(num) {
      let page = this.currentPage;
      num === "<" ? (page -= 3) : (page += 3);
      this.changePage(page);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  font-size: 12px;
}
.fl {
  float: left;
}
.elt-wrapper {
  margin-top: 30px;
  margin-bottom: 30px;
  user-select: none;
  display: inline-block;
  .elt-page {
    .elt-item {
      i {
        font-style: normal;
      }
      float: left;
      cursor: pointer;
      box-sizing: border-box;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      color: #222222ff;
      margin-right: 10px;
      border: 1px solid rgba(220, 220, 220, 1);
      border-radius: 2px;
    }
    .elt-disabled {
      color: rgb(200, 200, 200);
    }
    .elt-active {
      background: rgba(49, 179, 236, 1);
      color: #ffffffff;
      border: none;
    }
    .txt {
      width: 50px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      font-family: NotoSans;
      color: rgba(102, 102, 102, 1);
      margin-right: 15px;
    }
    .box {
      width: 110px;
    }
    .btnCfm {
      width: 48px;
      margin-left: 10px;
      margin-right: 0;
    }
    .last {
      margin-right: 0;
    }
    .input {
      box-sizing: border-box;
      margin-left: 6px;
      margin-right: 6px;
      text-align: center;
      // line-height: 32px;
      width: 48px;
      height: 32px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(220, 220, 220, 1);
    }
    .dot {
      font-size: 15px;
      color: #666666ff;
      border: none;
    }
  }
}
</style>

