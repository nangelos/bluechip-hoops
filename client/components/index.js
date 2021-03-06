/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './home'
export {default as Recruits} from './recruits'
export {default as Calendar} from './calendar'
export {default as Staff} from './staff'
export {Login, Signup} from './auth-form'
