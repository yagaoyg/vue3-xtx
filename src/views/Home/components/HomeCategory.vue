<script setup>
import { useCategoryStore } from '@/stores/categoryStore'

const categoryStore = useCategoryStore()
</script>

<template>
  <div class="home-category">
    <ul class="list">
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <RouterLink v-for="i in item.children.slice(0, 2)" :key="i.id" :to="`/category/sub/${i.id}`">
          {{ i.name }}
        </RouterLink>

        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <RouterLink :to="`/detail/${i.id}`">
                <img :src="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ i.name }}
                  </p>
                  <p class="desc ellipsis">{{ i.desc }}</p>
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  position: relative;
  width: 250px;
  height: 500px;
  background-color: rgba($color: #000000, $alpha: 0.6);
  z-index: 99;

  .list {
    li {
      display: flex;
      padding-left: 30px;
      padding-right: 12px;
      width: 250px;
      height: 55px;
      line-height: 50px;

      &:hover {
        background-color: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }

      .layer {
        width: 990px;
        height: 500px;
        background: rgba($color: #000000, $alpha: 0.4);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          color: #fff;

          small {
            font-size: 16px;
            color: #ddd;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            background: #fff;
            border-radius: 10px;
            transition: all 0.2s;

            &:nth-child(3n) {
              margin-right: 0;
            }

            &:hover {
              background: $sucColor;
              transform: translate(0, -5px);
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              // &:hover {
              //   background: $sucColor;
              // }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>