import { DefineComponent, MainComponent, SubComponent } from "ewm";
import type { $TopNav } from "../../components/top_nav/top_nav";

type Main = typeof mainComponent

const top_nav = SubComponent<Main,$TopNav>()({
  data:{
     topNav_title:"tailwindcss in miniprogram"
  },
}) 

const mainComponent = MainComponent({
  isPage: true,
  
})

const index = DefineComponent({
  path: "/pages/index/index",
  mainComponent,
  subComponents:[top_nav]
})

export type $Index = typeof index