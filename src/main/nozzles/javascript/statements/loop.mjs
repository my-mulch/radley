import { FOR_LOOP_STUBS } from '../../../../resources'

import JavaScriptStatement from '.'

export default class JavaScriptLoop extends JavaScriptStatement {
    constructor(statement, meta, registry) { super(statement, meta, registry) }

    static repeat(tag, line, registry, n) {
        return new Array(n)
            .fill(`for(let @ = 0; ${line}; @++){`)
            .map(function (loop, i) {
                return loop.replace(FOR_LOOP_STUBS, function (stub) {
                    if (stub === '@') return registry.findOrCreate(tag + i)
                    else return i
                })
            })
    }
}
