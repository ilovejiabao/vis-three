import { Camera } from "three";
import { MODULETYPE } from "../../core/middleware/MODULETYPE";
import { ObjectDataSupport } from "../object/ObjectDataSupport";
import { CameraCompiler } from "./CameraCompiler";
import { CameraConfigAllType } from "./CameraConfig";
import { CameraRule } from "./CameraRule";
export class CameraDataSupport extends ObjectDataSupport<
  CameraConfigAllType,
  Camera,
  CameraCompiler
> {
  MODULE: MODULETYPE = MODULETYPE.CAMERA;

  constructor(data: Array<CameraConfigAllType> = []) {
    super(CameraRule, data);
  }
}