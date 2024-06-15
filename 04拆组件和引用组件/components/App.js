//存放根组件，为了等会可以引用到app.js这个文件，用export进行导出
//template里的代码没有提示，用es6插件，在反引号前加/*html*/
import AppSections from "./AppSections.js"

export default {
    components: { AppSections },
    template: /*html*/`
        <app-sections></app-sections>
    `
}