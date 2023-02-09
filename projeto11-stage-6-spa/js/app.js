import { Router } from './Router.js'

const router = new Router()

router.add('/', "/pages/home.html")
router.add('/explorer', "/pages/explorer.html")
router.add('/universo', "/pages/universo.html")

router.handle()


window.onpopstate = () => router.handle() 
window.route = () => router.route() 