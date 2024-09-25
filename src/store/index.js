import { proxy } from "valtio"

const appStore = proxy({
    stage: 0,
})

export default appStore