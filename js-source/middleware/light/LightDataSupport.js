import { DataSupport } from "../../core/DataSupport";
import { LightRule } from "./LightRule";
export class LightDataSupport extends DataSupport {
    constructor(data) {
        !data && (data = {});
        super(LightRule, data);
    }
}
//# sourceMappingURL=LightDataSupport.js.map