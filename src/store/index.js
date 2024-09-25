import { proxy } from "valtio"

const appStore = proxy({
    stage: 0,
    angle: [-15, 6, 20],
})

export default appStore