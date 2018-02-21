<template>
    <div id="app" class="animated" :class="animateInClass">
        <div class="app-box">
            <iHeader :_nick="info.nick" :_subtitle="info.subtitle" :_brief="info.brief" :_photo="info.photo"></iHeader>
            <transition
                    enter-active-class="animated bounceIn"
            >
                <div v-if="showMore">
                    <iHr _color="#CBCBCB"></iHr>
                    <iPanel></iPanel>
                </div>
            </transition>
        </div>
        <a @click.prevent="showMoreClick">
            <iMore :_hidden="showMore"></iMore>
        </a>
    </div>
</template>

<script>
    import iHr from '@/components/widget/iHr'
    import iHeader from '@/components/widget/iHeader'
    import iPanel from '@/components/iPanel'
    import iMore from '@/components/widget/iMore'
    import $ from 'jquery'

    export default {
        name: 'app',
        components: {
            iHr,
            iHeader,
            iPanel,
            iMore
        },
        methods: {
            showMoreClick: function (event) {
                this.showMore = !this.showMore;
                if (this.showMore) {
                    $('#app').animate({'margin-top': '4em'})
                } else {
                    $('#app').animate({'margin-top': '12em'})
                }
            }
        },
        data() {
            return {
                info: this.$store.state.user,
                showMore: false,
                animateInClass: [
                    'flipInY',
                    'flipInX',
                    'bounceIn',
                    'fadeIn',
                    'rotateIn',
                    'rollIn',
                    'zoomIn'
                ][Math.floor(Math.random() * 7)]
            }
        }
    }

    // 切换标题
    let c,
        u = document.title;
    document.addEventListener('visibilitychange', function () {
        document.hidden ? ($('[rel="shortcut icon"]').attr('href', 'https://hocg.in/fail.ico'), document.title = '(●—●)喔哟，崩溃啦！', clearTimeout(c))
            : ($('[rel="shortcut icon"]').attr('href', 'https://hocg.in/favicon.ico?v=0.5.0'),
                document.title = ('(/≧▽≦/)咦！又好了！' + u),
                c = setTimeout(function () {
                    document.title = u;
                }, 2e3));
    });
</script>

<style lang="scss">
    * {
        font-family: "Avenir Next", Helvetica, Arial, "Lantinghei SC", "Microsoft YaHei", sans-serif;
    }

    #app {

        /*max-width: 335px;*/
        max-width: 410px;
        margin: 10em auto 1em;

        /*margin: 0 auto;*/

        .app-box {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            box-shadow: 0 0 4px #e8eaeb;
            border-radius: 2px;
            padding-bottom: .45em;
            overflow: hidden;
            /*min-width: 250px;*/
            background-color: #fff;
        }

    }

    * {
        margin: 0;
        padding: 0;
        cursor: url('https://hocg.in/mouse.png'), auto;
    }

</style>
