import { PassCompiler } from "./PassCompiler";
export * from "./PassCompiler";
export * from "./PassConfig";
declare const _default: {
    type: string;
    compiler: typeof PassCompiler;
    rule: import("@vis-three/middleware").Rule<PassCompiler>;
    processors: (import("@vis-three/middleware").Processor<import("./PassConfig").SelectiveBloomPassConfig, import("./extends/SelectiveBloomPass").SelectiveBloomPass, import("./PassCompiler").ComposerSupportEngine, PassCompiler> | import("@vis-three/middleware").Processor<import("./PassConfig").SMAAPassConfig, import("three/examples/jsm/postprocessing/SMAAPass").SMAAPass, import("./PassCompiler").ComposerSupportEngine, PassCompiler> | import("@vis-three/middleware").Processor<import("./PassConfig").UnrealBloomPassConfig, import("three/examples/jsm/postprocessing/UnrealBloomPass").UnrealBloomPass, import("./PassCompiler").ComposerSupportEngine, PassCompiler>)[];
};
export default _default;
