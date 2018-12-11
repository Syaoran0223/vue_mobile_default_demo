<template lang="html">
    <div>
        <div v-show="globalModalCount != 0">
            <div class="gobal-myloading">
                <div class="center">
                    <div class="mint-cell-value loading">
                        <span>
                            <mt-spinner type="fading-circle" color="#333"></mt-spinner>
                        </span>
                    </div>
                </div>
            </div>
            <div class="myloading-bg"></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                can_i_touch: true,
            }
        },
        created() {
            console.log('modal this.globalModalCount', this.$store.globalModalCount)
        },
        computed: {
            // 使用对象展开运算符将 getter 混入 computed 对象中
            ...mapGetters([
                'globalModalCount',
            ]),
            globalModalCount() {
                let count = this.$store.state.globalModalCount
                return count
            }
        },
    }
</script>

<style lang="scss" scoped>
    .myloading-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 4000;
        opacity: 0.2;
    }

    .gobal-myloading {
        display: inline-block;
        position: fixed;
        top: 45%;
        left: 47%;
        transform: translate(-50%, -50%);
        z-index: 5000;
    }

    .jztitle {
        /*float: left;*/
        margin-right: 10px;
        font-size: 30px;
        color: #777171;
    }

    .wutitle {
        color: #888;
        font-size: 30px;
        text-align: center;
    }

    .center {
        position: absolute;
        left: 50%;
        /*background: red;*/
        transform: translateX(-35%);
        position: relative;
        display: inline-block;

        & /deep/ .mint-spinner-fading-circle {
            display: inline-block;
            position: relative;
            left: 50%;
            transform: translateX(-20%);
            margin-bottom: 20px;

        }
    }

    .center {
        /*display: flex;*/
        /*justify-content: center;*/
        /*border-bottom: 1px solid #fff;*/
        /*color: red;*/
    }

    .mint-cell-value {
        /*color: #888;*/
        /*display: -webkit-box;*/
        /*display: -ms-flexbox;*/
        /*display: flex;*/
        /*-webkit-box-align: center;*/
        /*-ms-flex-align: center;*/
        /*align-items: center;*/
    }
</style>