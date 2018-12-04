import config from '../../resources/arrow.json'

import Variable from '../variable'
import util from 'util'

export default class LoopHead {
    constructor(args) {
        this.stop = args.stop
        this.var = args.var || new Variable({ init: 0 })
        this.type = args.type || config.FOR_LOOP
        this.step = args.step || config.INC
        this.check = args.check || config.LT
    }

    toString() {
        const headLine = [
            `${this.var.type} ${this.var.name} = ${this.var.init}`,
            `${this.var.name} ${this.check} ${this.stop}`,
            `${this.var.name} ${this.step}`
        ].join(';')

        return `${this.type} ( ${headLine} )`
    }

    [util.inspect.custom]() { return this.toString() }
}
