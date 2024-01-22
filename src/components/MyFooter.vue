<template>
    <div class="foot">
        <a><svg-icon type="mdi" :path="phone"></svg-icon><span>Hotline: 1900 00009 - Điện thoại: (035) 3.780.3946</span></a>
        <a><svg-icon type="mdi" :path="mail"></svg-icon><span>Email: avumcu@gmail.com</span></a>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAlphaCCircle, mdiPhone, mdiEmail } from '@mdi/js';
export default {
    name: 'MyFooter',
    data (){
        return {
            cCircle: mdiAlphaCCircle,
            phone: mdiPhone,
            mail: mdiEmail
        }
    },
    components: {
        SvgIcon,
    }
}
</script>

<style scoped>
.foot {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top:  solid 1px lightgray;
}
.foot a {
    font-size: 14px;
    align-items: center;
    text-align: center;
    
}
.foot span {
    vertical-align: 6px;
}
</style>