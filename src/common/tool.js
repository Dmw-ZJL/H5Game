import {router} from '../router'

// 跳转方法
export const linkTo = (type,path)=>{
    if(type === 'inside') return  router.push(path)
    if(type === 'outside') return  window.open(path, '_blank');
}