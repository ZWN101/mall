<template>
  <div class="commentInfo" v-if="Object.keys(comment).length!=0">
    <div class="commentHeader">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="commentMain">
      <div class="user">
        <img :src="comment.user.avatar"  alt="">
        <span class="uname">{{comment.user.uname}}</span>
      </div>
      <div class="content">
        {{comment.content}}
      </div>
      <div class="dateInfo">
        <span>{{comment.created | formatCreated}}</span>
        <span>{{comment.style}}</span>
      </div>
      <div class="goodImg" v-if="comment.images">
        <template v-for="item in comment.images">
          <img :src="item" alt="">
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js';

export default {
    name:'DetailCommentInfo',
    props:{
      comment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      formatCreated(value){
        let date=new Date(value*1000)
        return formatDate(date,'yyyy-MM-dd hh:mm')
      }
    }

}
</script>

<style>
.commentHeader{
  display: flex;
  justify-content: space-between;
  padding: 13px 5px;
  font-size: 15px;
  color: #000;
  border-bottom: 5px solid #f2f5f8;
}
.commentMain{
  padding: 13px 10px;
}
.commentMain .user img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.commentMain .user .uname{
  font-size: 15px;
  margin-left: 5px;
  position: relative;
  top: -15px;
}
.commentMain .content{
  padding:13px 0px;
  font-size: 14px;
}
.commentMain .dateInfo{
  font-size: 12px;
}
.commentMain .dateInfo span{
  margin-right: 5px;
}
.commentMain .goodImg{
  padding-top: 13px;
}
.commentMain .goodImg img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>